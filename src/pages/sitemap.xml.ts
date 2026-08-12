import type { APIRoute } from "astro";
import { languages, localeHref, type Lang } from "../i18n/content";

/**
 * Two routes that are alternates of one another. Generating the XML here beats
 * adding an integration for a site this size, and it keeps the hreflang pairs
 * derived from the same `languages` tuple the pages themselves are built from.
 */
export const GET: APIRoute = ({ site }) => {
  const href = (lang: Lang) => new URL(localeHref(lang), site).href;

  const alternates = languages
    .map((lang) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${href(lang)}"/>`)
    .join("\n");

  const urls = languages
    .map((lang) => `  <url>\n    <loc>${href(lang)}</loc>\n${alternates}\n  </url>`)
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
