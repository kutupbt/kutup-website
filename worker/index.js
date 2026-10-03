// The site's Worker. Everything is static except Kutup's federation
// discovery: accounts on the public instance are `name@kutup.dev`, so other
// Kutup servers look for that server's signed discovery document on this
// domain, while the server itself lives at KUTUP_SERVER_ORIGIN. The two
// discovery paths are passed through to it.
//
// A pass-through, not a redirect: federating servers do not follow
// redirects, and the document is signed with a validity window, so a copy
// kept here would expire.

const DISCOVERY = /^\/\.well-known\/kutup\/(federation\.json|federation\/identity\/\d{1,10}\.json)$/

// Response headers worth keeping; everything else (cookies, the server's
// own security headers for its apps) stays behind.
const KEPT_HEADERS = ['content-type', 'cache-control', 'etag', 'last-modified', 'retry-after']

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    if (!url.pathname.startsWith('/.well-known/kutup/')) return env.ASSETS.fetch(request)

    if (!DISCOVERY.test(url.pathname)) return new Response('Not found', { status: 404 })
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response('Method not allowed', { status: 405, headers: { Allow: 'GET, HEAD' } })
    }

    let upstream
    try {
      upstream = await fetch(new URL(url.pathname, env.KUTUP_SERVER_ORIGIN), {
        method: request.method,
        headers: { Accept: 'application/json' },
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
