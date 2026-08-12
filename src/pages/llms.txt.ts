import type { APIRoute } from "astro";
import { content, localeHref, EMAIL, NAME, SOCIAL } from "../i18n/content";

/**
 * llms.txt — the same page flattened for agents that would otherwise have to
 * parse the markup for it. Written from the English copy, which is what these
 * consumers expect, and generated from `content` so it cannot fall behind the
 * page it describes.
 */
export const GET: APIRoute = ({ site }) => {
  const t = content.en;
  const abs = (path: string) => new URL(path, site).href;

  const lines = [
    `# ${NAME} — ${t.meta.jobTitle}`,
    ``,
    `> ${t.meta.description}`,
    ``,
    `## Pages`,
    ``,
    `- [Portfolio, Spanish](${abs(localeHref("es"))})`,
    `- [Portfolio, English](${abs(localeHref("en"))})`,
    ``,
    `## Selected work`,
    ``,
    ...t.projects.items.map(
      (p) =>
        `- ${p.href ? `[${p.title}](${p.href})` : p.title} — ${p.year}, ${p.scope}. ` +
        `${p.body} Stack: ${p.tags.join(", ")}.`,
    ),
    ``,
    `## Experience`,
    ``,
    ...t.experience.roles.map((r) => `- ${r.years} — ${r.role}, ${r.company}. ${r.stack}`),
    ``,
    `## Education`,
    ``,
    ...t.experience.education.map((e) => `- ${e}`),
    ``,
    `## Stack`,
    ``,
    ...t.stack.groups.map((g) => `- ${g.label}: ${g.items.join(", ")}`),
    ``,
    `## Contact`,
    ``,
    `- Email: ${EMAIL}`,
    ...SOCIAL.map((s) => `- ${s.label}: ${s.href}`),
    `- Based in ${t.contact.location}`,
    ``,
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
