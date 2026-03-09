import { getProjects, getWriting } from "../lib/content";

export async function GET() {
  const base = "https://dustingamble.com";
  const now = new Date().toISOString();

  const staticRoutes = [
    "/",
    "/gamble-systems/",
    "/writing/",
    "/projects/",
    "/projects/cozy-cauldron/privacy-policy/",
    "/about/",
    "/resume/",
    "/rss.xml"
  ];

  const writingRoutes = getWriting().map((post) => ({
    path: `/writing/${post.slug}/`,
    lastmod: new Date(post.date).toISOString()
  }));

  const projectRoutes = getProjects().map((project) => ({
    path: `/projects/${project.slug}/`,
    lastmod: new Date(project.date).toISOString()
  }));

  const allRoutes = [
    ...staticRoutes.map((path) => ({ path, lastmod: now })),
    ...writingRoutes,
    ...projectRoutes
  ];

  const urls = allRoutes
    .map(
      (route) =>
        `<url><loc>${base}${route.path}</loc><lastmod>${route.lastmod}</lastmod></url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
