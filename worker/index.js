// The site's Worker. Everything is static except what other servers and
// mail programs look up on the domain itself: accounts on the public
// instance are `name@kutup.dev`, while the server lives at
// KUTUP_SERVER_ORIGIN. Passed through to it:
//
// - Kutup's federation discovery (the signed discovery document and the
//   identity history beside it);
// - Web Key Directory, direct method: OpenPGP programs (GnuPG, Thunderbird,
//   Proton) find `name@kutup.dev`'s mail key at
//   `/.well-known/openpgpkey/hu/<hash>?l=<name>`, and the policy file tells
//   them the domain publishes keys.
//
// A pass-through, not a redirect: federating servers do not follow
// redirects, and the document is signed with a validity window, so a copy
// kept here would expire.

const DISCOVERY = /^\/\.well-known\/kutup\/(federation\.json|federation\/identity\/\d{1,10}\.json)$/
// The WKD hash is z-base-32 of a SHA-1: 32 characters of its alphabet.
const WKD = /^\/\.well-known\/openpgpkey\/(policy|hu\/[ybndrfg8ejkmcpqxot1uwisza345h769]{32})$/

// Response headers worth keeping; everything else (cookies, the server's
// own security headers for its apps) stays behind. WKD keys are fetched by
// web mail clients too, so their CORS header is kept.
const KEPT_HEADERS = ['content-type', 'cache-control', 'etag', 'last-modified', 'retry-after', 'access-control-allow-origin']

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const discovery = url.pathname.startsWith('/.well-known/kutup/')
    const wkd = url.pathname.startsWith('/.well-known/openpgpkey/')
    if (!discovery && !wkd) return env.ASSETS.fetch(request)

    if (!(discovery ? DISCOVERY : WKD).test(url.pathname)) return new Response('Not found', { status: 404 })
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response('Method not allowed', { status: 405, headers: { Allow: 'GET, HEAD' } })
    }

    let upstream
    try {
      // WKD names the local part in `l`; nothing else is passed on.
      const target = new URL(url.pathname, env.KUTUP_SERVER_ORIGIN)
      const local = url.searchParams.get('l')
      if (wkd && local !== null) target.searchParams.set('l', local)
      upstream = await fetch(target, {
        method: request.method,
        headers: { Accept: wkd ? 'application/octet-stream, text/plain' : 'application/json' },
        redirect: 'manual',
      })
    } catch {
      return new Response('The Kutup server could not be reached', { status: 502 })
    }
    // The server answers these paths itself; a redirect means the origin is
    // misconfigured, and following it would serve another host's document.
    if (upstream.status >= 300 && upstream.status < 400) {
      return new Response('The Kutup server could not be reached', { status: 502 })
    }

    const headers = new Headers({ 'X-Content-Type-Options': 'nosniff' })
    for (const name of KEPT_HEADERS) {
      const value = upstream.headers.get(name)
      if (value) headers.set(name, value)
    }
    return new Response(upstream.body, { status: upstream.status, headers })
  },
}
