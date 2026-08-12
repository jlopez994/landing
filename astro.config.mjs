// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://jlh.app',
  build: {
    // One-page site: inlining the stylesheet removes a render-blocking request
    inlineStylesheets: 'always',
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
