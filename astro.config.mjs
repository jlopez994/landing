// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://jlopezdev.web.app',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      // Spanish lives at the root, English under /en/
      prefixDefaultLocale: false,
    },
  },
});
