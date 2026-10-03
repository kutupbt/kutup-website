# kutup-website

Marketing website for [Kutup](https://github.com/kutupbt/kutup) — an
end-to-end encrypted, self-hosted Drive and federated Chat platform with
real-time collaboration.

Lives at **kutup.dev**. Documentation is a separate project at **docs.kutup.dev**;
this site only links out to it.

## Stack

- Node.js 24 LTS
- [Astro](https://astro.build) 7.3 (static output) + [React](https://react.dev) islands
- [Tailwind CSS](https://tailwindcss.com) v4 (via `@tailwindcss/vite`)
- TypeScript
- Deployed as [Cloudflare Workers static assets](https://developers.cloudflare.com/workers/static-assets/)

Interactivity is kept to small React islands (mobile nav, copy-to-clipboard,
OS-aware download, instance-directory filter); everything else is static HTML.

## Develop

```sh
pnpm install
pnpm run dev      # http://localhost:4321
```

## Build & check

```sh
pnpm run build    # static output -> dist/
pnpm run check    # astro check (TypeScript)
pnpm run preview  # serve the production build locally
```

## Content

- Page copy is sourced from the main Kutup repo (`README.md` and `docs/`).
- Screenshots are copied from `kutup/docs/screenshots/` or captured from a
  sanitized local Kutup instance when a current view is not yet in that set.
- Screenshots live in `public/screenshots/`.
- Shared URLs/metadata are centralized in `src/consts.ts`.
- The public instance directory reads `src/data/instances.json` (currently
  empty). Add objects of shape
  `{ name, url, region, signups: "open"|"invite"|"closed", operator?, notes? }`.

## Brand assets

The three-diamond logo (`src/components/KutupLogo.astro`, `public/favicon.svg`)
and the Kutup name are brand assets — not granted by the source AGPL license.
Do not recolor or modify them. See the main repo's `TRADEMARK.md`.

## Federation discovery for the public instance

Accounts on the public Kutup instance are `name@kutup.dev`, so other Kutup
servers look for that server's discovery document on this domain. The
Worker (`worker/index.js`) passes two paths through to the server at
`KUTUP_SERVER_ORIGIN` (`wrangler.toml`):

- `/.well-known/kutup/federation.json`
- `/.well-known/kutup/federation/identity/<n>.json`

Everything else is static. It is a pass-through rather than a redirect
because federating servers do not follow redirects and the document is
signed with a validity window.

## Deploy (Cloudflare Workers)

**Recommended — connect the Git repo** to Workers Builds in the Cloudflare
dashboard. The root `.nvmrc` selects Node.js 24 in Cloudflare's build image:

- Build command: `pnpm run build`
- Build output directory: `dist`
- Then attach the `kutup.dev` custom domain, and configure the apex/`www`
  canonical redirect via the dashboard.

**Or deploy from the CLI:**

```sh
pnpm run deploy   # build and deploy the static-assets Worker with Wrangler
```

Headers and redirects ship with the build:

- `public/_headers` — security headers + long-cache for `/_astro/*`.
- `public/_redirects` — vanity shortlinks (`/github`, `/docs`, `/releases`).

`docs.kutup.dev` is deployed from the separate `docs-kutup-website` Workers
project.
