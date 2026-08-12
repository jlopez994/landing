import type { APIRoute } from "astro";

/**
 * Generated rather than dropped into `public/` so the sitemap URL stays tied
 * to `site` in astro.config.mjs — one place to change if the domain moves.
 */
export const GET: APIRoute = ({ site }) => {
  return new Response(
    `User-agent: *
Allow: /
# Source for the social card image, not a page
Disallow: /og

Sitemap: ${new URL("sitemap.xml", site).href}
`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
};
