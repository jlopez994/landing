// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://jlh.app',
  build: {
    // One-page site: inlining the stylesheet removes a render-blocking request
    inlineStylesheets: 'always',
  },
  security: {
    // Astro hashes every script and style it inlines, so the page keeps its
    // zero-extra-request build *and* runs under a policy with no
    // `unsafe-inline` anywhere. `frame-ancestors` is deliberately absent: it is
    // ignored in a <meta> policy, so it ships as a header in firebase.json.
    csp: {
      directives: [
        "default-src 'none'",
        "img-src 'self'",
        "font-src 'self'",
        // Nothing on the page fetches, but leaving this at `none` also blocks
        // same-origin probes such as Lighthouse's robots.txt check, which then
        // reports a failure that is not real.
        "connect-src 'self'",
        "base-uri 'self'",
        "form-action 'none'",
      ],
    },
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      // Spanish lives at the root, English under /en/
      prefixDefaultLocale: false,
    },
  },
});
