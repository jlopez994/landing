# jlh.app

Personal site of Julián López Hervás — [jlh.app](https://jlh.app) (ES) · [jlh.app/en](https://jlh.app/en/)

Static, bilingual, no UI framework. Built with Astro, deployed to Firebase Hosting
on every push to `main`.

## Why it is built this way

A portfolio is the one page where the engineering should be visible in the artefact
itself, not only in the copy. So the constraint was: **first paint costs three
requests and no framework runtime**, and every effect that would normally justify a
library has to be earned in CSS or in a few hundred bytes of hand-written JS.

**Three requests to first paint.** The document, and two woff2 files. The stylesheet
is inlined (`build.inlineStylesheets`), and both scripts are small enough that Astro
inlines them too — so there is no render-blocking request and no waterfall.

**The scroll progress bar has no JavaScript.** It is two elements driven by
`animation-timeline: scroll(root block)`. The version it replaced ran a rAF easing
loop and read `document.documentElement.scrollHeight` on every scroll event, which
forces a synchronous layout each time. It sits behind `@supports`, so browsers
without scroll timelines simply do not show it — it is decorative and `aria-hidden`.

**The project walkthrough reads no layout while scrolling.** Step extents are
measured once per layout into document-space bands, so a scroll frame is arithmetic
against `window.scrollY`, and the DOM is written to only when the derived state
actually changes. The measurement itself rides the first `ResizeObserver` delivery,
which lands after layout, so even that is not a forced reflow. Scroll listeners are
attached only while the section is on screen.

**No layout shift from the fonts.** Both families ship with a metric-matched local
fallback (`size-adjust`, `ascent-override`, `descent-override`) derived from their
own metrics against Arial's, so the swap moves nothing. Measured CLS is `0.00`.

**A CSP with no `unsafe-inline` anywhere.** Astro hashes every script and style it
inlines (`security.csp`), which is only possible because no element carries a
`style` attribute — the reveal stagger is declared as `--i` in component CSS
instead. `frame-ancestors` is ignored in a `<meta>` policy, so it ships as a
response header from `firebase.json`, alongside HSTS, `nosniff` and `Referrer-Policy`.

**One source of truth for content, and locale parity is a compile error.**
`src/i18n/content.ts` holds every string for both languages. The Spanish object is
the reference shape, `Content` is inferred from it, and `content` is annotated
`Record<Lang, Content>` — so a locale missing a key fails there, naming the key,
instead of rendering a blank in whichever component read it. Adding a language is
therefore: put it in `languages`, then let `npm run check` list what is missing. The
Person JSON-LD, `/sitemap.xml`, `/robots.txt` and `/llms.txt` are all generated from
that same object and from `site` in the Astro config — none can drift from the page.

## Measured

Production build served by `astro preview`, Chrome DevTools, mobile viewport
throttled to Slow 4G and 4× CPU:

| | |
|---|---|
| LCP | ~0.8 s |
| CLS | 0.00 |
| HTML transferred | 11 kB gzip, per locale |
| JavaScript | 1.9 kB uncompressed, inlined, zero dependencies |
| Requests to first paint | 3 |
| Lighthouse | 100 accessibility · 100 best practices · 100 SEO |

## Layout

```text
src/
├── i18n/content.ts        # all copy, both locales, typed with `as const`
├── layouts/Layout.astro   # document head, chrome, JSON-LD, reveal + rail observers
├── components/            # one file per section, styles and behaviour colocated
├── pages/
│   ├── index.astro        # es at the root · en/index.astro
│   ├── og.astro           # source for public/og.png, noindex
│   └── *.ts               # sitemap.xml, robots.txt, llms.txt endpoints
└── styles/
    ├── tokens.css         # @font-face, palette, type scale, spacing, easing
    └── global.css         # reset, shared primitives, motion
```

Routing is Astro's built-in i18n with `prefixDefaultLocale: false`: Spanish at the
root, English under `/en/`.

## Commands

```sh
npm install
npm run dev       # localhost:4321
npm run check     # astro check — runs in CI ahead of the build
npm run build     # → dist/
npm run preview   # serve the production build
```

## Deploying

`.github/workflows/deploy.yml` type-checks, builds and deploys to Firebase Hosting
on push to `main`. It needs a `FIREBASE_SERVICE_ACCOUNT` repository secret.

## Regenerating the social card

`public/og.png` is a screenshot of the `/og` route: open it, capture the 1200×630
card, save over the file. That route renders with the same self-hosted webfonts as
the site, so the preview and the page it previews cannot drift apart.

## Accessibility and motion

Skip link, landmark structure, visible focus rings, and contrast ratios documented
beside the colour tokens — every text token clears 4.5:1 against the background.
`prefers-reduced-motion: reduce` is honoured in CSS rather than branched on in JS:
the reveal observer still runs and still applies its class, the transition is simply
a no-op, and the scroll progress bar is hidden outright.
