// English dictionary — the source of truth for the Dictionary shape.
// Strings marked "html:" prefixes in comments may contain inline markup
// (<code>, <a>, <strong>) and are rendered with set:html inside a .rich
// element. {placeholders} are interpolated with fill() from ./config.

const en = {
  site: {
    tagline:
      'End-to-end encrypted, self-hosted Drive and federated Chat — with real-time collaboration.',
    description:
      'Kutup is a privacy-first file storage, collaboration, and messaging platform you run on your own hardware. Protected content is encrypted on your device before it reaches a server.',
  },

  nav: {
    features: 'Features',
    download: 'Download',
    selfHost: 'Self-host',
    instances: 'Instances',
    docs: 'Docs',
  },

  header: {
    getKutup: 'Get Kutup',
    switchTheme: 'Switch theme',
    switchLanguage: 'Language',
  },

  footer: {
    blurb:
      'End-to-end encrypted, self-hosted Drive and federated Chat — with real-time collaboration. Protected content stays ciphertext on the server.',
    product: 'Product',
    resources: 'Resources',
    documentation: 'Documentation',
    releases: 'Releases',
    issues: 'Issues',
    // html: contains the AGPL license link
    license:
      '© {year} Alperen Albayrak. Source licensed <a href="{license}" target="_blank" rel="noopener noreferrer">AGPL-3.0-only</a>.',
    // html: contains the brand-inquiry mailto link
    brand:
      'The Kutup name and three-diamond logo are brand assets, not granted by the AGPL. Brand inquiries: <a href="mailto:{email}">{email}</a>.',
  },

  home: {
    hero: {
      badge: 'End-to-end encrypted · self-hosted · federated',
      // html: accent span around the highlighted phrase
      title: 'Your private <span class="text-ice">workspace</span>',
      sub: 'Files, collaborative documents, and federated messages in one responsive web app. Protected content is encrypted on your device before it reaches your server.',
      ctaSelfHost: 'Self-host Kutup',
      ctaDownload: 'Download apps',
      screenshotAlt: 'Kutup Drive interface',
    },
    pillars: [
      {
        title: 'Zero-knowledge server',
        body: 'Keys are derived in your browser from your password and recovery phrase. The server stores ciphertext it can never read.',
      },
      {
        title: 'Collaboration, still encrypted',
        body: 'Real-time editing without giving up E2EE — the relay routes opaque, signed frames and never sees content.',
      },
      {
        title: 'Yours to run & federate',
        body: 'One Docker Compose stack. Share folders and exchange messages across Kutup servers without either backend seeing protected plaintext.',
      },
    ],
    highlights: {
      eyebrow: 'What’s inside',
      title: 'One encrypted workspace for everything',
      subtitle:
        'Files, messages, notes, code, spreadsheets, slides, and whiteboards — one responsive web app with light, dark, and system themes.',
      cta: 'Explore all features',
      items: [
        {
          title: 'Files the server can’t read',
          alt: 'Kutup Drive — file browser with folders, uploads, and storage quota',
          body: 'Nested folders, drag-and-drop uploads, share links, and per-user permissions. Filenames and folder structure are encrypted too.',
        },
        {
          title: 'Live notes & code',
          alt: 'Notes editor — CodeMirror with version-history sidebar',
          body: 'CodeMirror 6 + Yjs for Markdown and 20+ code languages, with live multi-user cursors. Every edit reaches the server as ciphertext.',
        },
        {
          title: 'Office docs, fully client-side',
          alt: 'Spreadsheet editor with conditional formatting',
          body: '.docx, .xlsx, and .pptx open in OnlyOffice running entirely in your browser. Live presence, formulas, charts — never decrypted server-side.',
        },
        {
          title: 'Whiteboards',
          alt: 'Excalidraw whiteboard',
          body: 'Excalidraw canvases with live sync — wrapped in the same encrypted envelope as everything else.',
        },
        {
          title: 'Version history on every file',
          alt: 'Version history sidebar',
          body: 'Every save is a snapshot. Scroll back and restore from the History sidebar in any editor.',
        },
        {
          title: 'You own your keys',
          alt: 'Settings — devices and presence color',
          body: 'Per-device keys you can revoke, editable Chat installation labels, a 24-word recovery phrase, and optional 2FA.',
        },
        {
          title: 'Federated Chat that recovers',
          alt: 'Kutup Messages conversation list and encrypted chat thread',
          body: 'Direct and private-group messages, replies, reactions, edits, disappearing content, and lazy encrypted media. Continuous account-local backup restores protected history after browser loss.',
        },
      ],
    },
    architecture: {
      eyebrow: 'Architecture in 30 seconds',
      title: 'The relay routes ciphertext it can never decrypt',
      subtitle:
        'Every collab frame is encrypted in the browser, signed with a per-device Ed25519 key, and sent through an opaque WebSocket relay.',
      browserA: {
        title: 'Browser A',
        body: 'AEAD-encrypt + sign the update with a per-device Ed25519 key.',
      },
      relay: {
        title: 'Rust relay',
        tag: 'ciphertext only',
        body: 'Verify the signature, route by file, persist and broadcast — bytes unchanged.',
      },
      browserB: {
        title: 'Browser B',
        body: 'Verify, decrypt, and apply. Per-file keys derive from the collection master key.',
      },
      // html: contains the docs link
      docsNote:
        'Full key hierarchy, login flow, federation model, and wire spec live in the <a href="{docs}" target="_blank" rel="noopener noreferrer">documentation ↗</a>.',
    },
    stack: {
      eyebrow: 'Built on',
      title: 'A pragmatic, auditable stack',
    },
    ack: {
      lead: 'Inspired by great open-source projects:',
    },
    cta: {
      title: 'Run your own encrypted workspace today',
      // html: inline code
      body: 'Clone the repo, fill in a few secrets, and <code>docker compose up</code>. You’re the only one who can read your data.',
      getStarted: 'Get started',
      viewSource: 'View source ↗',
    },
  },

  features: {
    meta: {
      title: 'Features',
      description:
        'Encrypted Drive, federated Chat, live collaboration, protected history recovery, and a fully E2EE CLI — everything Kutup does.',
    },
    hero: {
      eyebrow: 'Features',
      title: 'Everything encrypted, nothing compromised',
      sub: 'Kutup pairs client-side encryption with real-time collaboration and federated messaging. Here’s how each piece works.',
    },
    sections: [
      {
        eyebrow: 'Drive',
        title: 'Files and folders the server can’t read',
        alt: 'Kutup Drive file browser',
        points: [
          'Nested collections with drag-and-drop upload and a hard-baked encryption boundary.',
          'Filenames, MIME types, and folder structure are all encrypted client-side.',
          'Public share links and per-user folder shares with granular read / upload / delete permissions.',
          'Stream upload via crypto_secretstream_xchacha20poly1305 keeps large files out of memory.',
          'Storage backs onto SeaweedFS (S3-compatible).',
        ],
      },
      {
        eyebrow: 'Notes & code',
        title: 'Real-time text editing with presence',
        alt: 'CodeMirror notes editor',
        points: [
          'CodeMirror 6 + Yjs CRDT for Markdown, plain text, and 20+ code languages (Go, TS, Rust, Python, C/C++, Java, Shell, …).',
          'Multi-user cursors and selection presence, with an awareness color each user picks.',
          'Every edit is a Yjs binary update wrapped in an AEAD envelope — the server only ever sees opaque ciphertext.',
        ],
      },
      {
        eyebrow: 'Office documents',
        title: '.docx, .xlsx, .pptx — encrypted, in the browser',
        alt: 'OnlyOffice spreadsheet editor',
        points: [
          'OnlyOffice runs entirely client-side using the CryptPad pattern; document state is never decrypted server-side.',
          'Live cell-selection presence shown as translucent colored ranges, with per-user colors and multi-tab differentiation.',
          'Full conditional formatting, formulas, and charts.',
        ],
      },
      {
        eyebrow: 'Whiteboards',
        title: 'Excalidraw canvases that sync live',
        alt: 'Excalidraw whiteboard',
        points: [
          '.excalidraw files open in the embedded Excalidraw editor with cross-tab sync.',
          'Last-write-wins reconciliation per element via versionNonce.',
          'Same end-to-end-encrypted envelope as every other file type.',
        ],
      },
      {
        eyebrow: 'Version history',
        title: 'Snapshot and restore any file',
        alt: 'Version history sidebar',
        points: [
          'Every save creates a versioned snapshot, browsable from the History sidebar in any editor.',
          'Named “Save version” entries are kept forever; anonymous saves age out (30 days or 50 versions, whichever yields more).',
          'The endpoint is file-type-agnostic — notes, office, and whiteboards all use the same plumbing.',
        ],
      },
      {
        eyebrow: 'Keys & devices',
        title: 'You hold the only keys',
        alt: 'Settings — devices and presence color',
        points: [
          'Per-device Ed25519 keypairs, each individually revocable.',
          'A 24-word BIP39 recovery phrase that doubles as the second factor for account recovery — never sent to the server.',
          'Optional TOTP 2FA, and a presence color that follows you across editors and tabs.',
        ],
      },
      {
        eyebrow: 'Messages',
        title: 'Federated Direct and private-group Chat',
        alt: 'Kutup Messages workspace',
        points: [
          'Direct conversations and Note to Self use libsignal; private groups use RFC 9420 OpenMLS.',
          'Replies, reactions, edits, deletions, receipts, disappearing messages, local search, encrypted attachments, previews, and voice notes are supported.',
          'Always-on account-local E2EE backup restores verified display history and eligible media after total browser loss without restoring protocol sessions or pending sends.',
        ],
      },
    ],
    federation: {
      eyebrow: 'Federation',
      title: 'Share across servers without sharing trust',
      subtitle:
        'Share Drive folders and exchange Chat messages across Kutup instances. Both backends route ciphertext; neither receives protected plaintext.',
      // html: inline code
      body: 'Drive and Chat share one authenticated federation identity, peer policy, retry pipeline, and audit surface. Feature-specific encrypted payloads remain separate, and the encryption boundary doesn’t move when a second server is involved.',
    },
    cli: {
      eyebrow: 'Command line',
      title: 'The same E2EE primitives, in your shell',
      subtitle:
        'kutup is a Rust CLI for register, login, ls, upload, download, sync, share, versions, devices, and 2FA — all end-to-end encrypted. The server only ever sees ciphertext.',
      install: 'Build from source (Rust ≥ 1.91)',
      installNote:
        'No public binary release exists yet. Tagged CLI releases are configured for Linux x86-64/ARM64, macOS Intel/Apple Silicon, and Windows x86-64.',
      workflows: 'Common workflows',
      standoutTitle: 'The standout: > 2 GB uploads',
      // html: inline code
      standoutBody:
        'The browser File API wedges the tab at multi-GB sizes. The CLI streams chunked <code>crypto_secretstream</code> encryption (XChaCha20-Poly1305, 5 MB blocks) over a Rust reader, so it pushes arbitrarily large files — ISOs, raw video, datasets — at a constant ~5 MB of memory. File size is bounded by disk, not RAM.',
    },
    cta: {
      title: 'Ready to try it?',
      readDocs: 'Read the docs ↗',
    },
  },

  download: {
    meta: {
      title: 'Download',
      description:
        'Use Kutup on the web or build the pre-release desktop shell and CLI from source. Native iOS and Android apps remain in development.',
    },
    hero: {
      eyebrow: 'Download',
      title: 'Choose how you use Kutup',
      sub: 'The responsive web app is the complete product surface today. Desktop and CLI source are available; dedicated native mobile apps are not release-ready.',
      badge: 'Pre-production — no public binary release yet',
    },
    desktop: {
      eyebrow: 'Desktop app',
      titleKnown: 'Recommended for {os}',
      titleUnknown: 'Download the desktop app',
      body: 'The implemented Tauri 2 shell targets macOS, Windows, and Linux and stores session material in the OS keychain. Build it from source while signing, packaging, and first-release acceptance remain open.',
      downloadFor: 'Download for {os}',
      goToReleases: 'Go to Releases',
      preRelease:
        'Pre-release source build — no public desktop release exists yet. Office documents open in the web app, and current local builds are unsigned.',
    },
    mobile: {
      eyebrow: 'Mobile',
      title: 'iOS & Android',
      body: 'Dedicated native iOS and Android apps are active work in progress in separate repositories. They are not ready for installation or production use; retained Tauri-mobile targets are experimental.',
      cta: 'View development status ↗',
    },
    web: {
      eyebrow: 'Web',
      title: 'Use it in the browser',
      body: 'The complete responsive app — Drive, collaboration, Office editing, federated Chat, and automatic protected-history recovery — ships with every self-hosted instance.',
      cta: 'Self-hosting guide',
    },
    cli: {
      eyebrow: 'Command line',
      title: 'Install the CLI',
      subtitle:
        'End-to-end encrypted file operations from your shell — including multi-GB uploads the browser can’t handle.',
      fromSource: 'Build from source (Rust ≥ 1.91)',
      // html: contains the releases link
      binaryNote:
        'No public binary exists yet. The configured release matrix will publish Linux x86-64/ARM64, macOS Intel/Apple Silicon, and Windows x86-64 builds to <a href="{releases}" target="_blank" rel="noopener noreferrer">GitHub Releases ↗</a> after the first reviewed tag.',
    },
  },

  selfHost: {
    meta: {
      title: 'Self-hosting',
      description:
        'Run your own Kutup instance with Docker Compose. Prerequisites, configuration, TLS, backups, and hardening.',
    },
    hero: {
      eyebrow: 'Self-hosting',
      title: 'Run your own Kutup in minutes',
      sub: 'Kutup is self-hosted by design. A production deployment is a Docker Compose stack — backend, database, encrypted storage, and Nginx. Here’s the quick start; the full guide lives in the docs.',
      ctaDocs: 'Full self-hosting docs ↗',
      ctaRepo: 'View the repo ↗',
    },
    prereqs: {
      title: 'Prerequisites',
      items: [
        'Docker 24+ and Docker Compose v2 (the docker compose command).',
        'A Linux server with at least 1 GB of RAM.',
        'A domain name — required for HTTPS and for federation to work correctly.',
      ],
    },
    steps: {
      clone: {
        title: '1. Clone and configure',
        intro: 'Clone the repo and create your environment file:',
        // html: inline code
        envIntro:
          'Edit <code>.env</code> and fill in every value with strong secrets:',
        // html: inline code
        s3Note:
          'Compose injects the S3 credentials into SeaweedFS and the backend; there is no second credential file to edit.',
      },
      start: {
        title: '2. Start the stack',
        intro:
          'Build and launch all services — Postgres, SeaweedFS, backend, frontend, and Nginx:',
      },
      login: {
        title: '3. First login',
        intro:
          'Find the admin bootstrap confirmation in the logs, then open your domain and log in:',
        // html: <strong>
        note: 'On first login you’ll generate your <strong>24-word recovery phrase</strong> (write it down — it’s the only way to recover your account and is never sent to the server) and can optionally enable 2FA.',
      },
      tls: {
        title: '4. Add TLS',
        // html: inline code
        intro:
          'The bundled Nginx already requires TLS. Issue a certificate, place <code>fullchain.pem</code> and <code>privkey.pem</code> in <code>nginx/certs/</code>, and restart or reload Nginx:',
      },
    },
    operating: {
      title: 'Operating your instance',
      cards: [
        {
          title: 'Backups',
          // html-capable
          body: 'Dump PostgreSQL and archive the SeaweedFS data dirs. The file chunks are ciphertext only — a stolen backup is useless without user keys.',
        },
        {
          title: 'Updating',
          body: '<code>git pull</code> then <code>docker compose up -d --build</code>. Database migrations run automatically on backend startup.',
        },
        {
          title: 'Reverse proxy',
          body: 'Already running Nginx or Caddy? Bind the stack to <code>127.0.0.1:8080</code> and proxy to it (disable request buffering for large uploads).',
        },
        {
          title: 'Hardening',
          body: 'Change every secret, expose only the public TLS edge, and generate <code>JWT_SECRET</code> with <code>openssl rand -hex 64</code>. Keep the backend unreachable except through Nginx and protect the break-glass admin.',
        },
      ],
      // html: contains the docs link
      docsNote:
        'Office editing works in the default Compose build without DocumentServer or manual installation. For durable SeaweedFS metadata, retention, quotas, federation, and backup/restore requirements, see the <a href="{docs}" target="_blank" rel="noopener noreferrer">documentation ↗</a>.',
    },
    cta: {
      title: 'Already running Kutup?',
      body: 'List your server in the public instance directory so others can find it.',
      browse: 'Browse instances',
      submit: 'Submit your instance ↗',
    },
  },

  instances: {
    meta: {
      title: 'Public instances',
      description:
        'A directory of community-run Kutup servers you can sign up to — or host your own.',
    },
    hero: {
      eyebrow: 'Public instances',
      title: 'Find a Kutup server to join',
      sub: 'Because Kutup encrypts protected content on your device, an instance you don’t operate cannot read your files or messages. Pick a community-run server, or run your own for full control.',
    },
    trust: {
      title: 'A note on trust',
      body: 'Listing here is community-submitted and not an endorsement. Operators can’t read your content, but they do control availability and uptime. For sensitive or long-term data, self-hosting is the strongest guarantee.',
    },
    filter: {
      emptyTitle: 'No public instances listed yet',
      emptyBody:
        'Kutup is self-hosted by design and currently pre-release. Run your own server in minutes, or list yours here for others to find.',
      hostYourOwn: 'Host your own',
      submit: 'Submit your instance ↗',
      searchPlaceholder: 'Search instances…',
      allRegions: 'all',
      signups: {
        open: 'Open signups',
        invite: 'Invite only',
        closed: 'Closed',
      },
      noMatch: 'No instances match your filter.',
    },
  },

  notFound: {
    metaTitle: 'Page not found',
    metaDescription: 'The page you were looking for doesn’t exist.',
    title: 'This page is encrypted beyond recovery',
    body: 'We couldn’t find what you were looking for. It may have moved, or never existed.',
    home: 'Back home',
    features: 'Browse features',
  },

  copy: {
    label: 'Copy',
    copied: '✓ Copied',
  },
}

export default en
