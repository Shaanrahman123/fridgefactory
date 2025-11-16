import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const host = "https://www.starrefrigeration.in"; // Use production domain always

  const appDir = path.join(process.cwd(), "app");

  function getPages(dir: string, basePath = ""): string[] {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    let pages: string[] = [];

    for (const entry of entries) {
      const entryPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        pages = pages.concat(
          getPages(entryPath, `${basePath}/${entry.name}`)
        );
      } else if (entry.isFile()) {
        if (
          entry.name === "page.tsx" ||
          entry.name === "page.js" ||
          entry.name === "page.ts"
        ) {
          const route = basePath === "" ? "/" : basePath;
          pages.push(route);
        }
      }
    }

    return pages;
  }

  const pagePaths = getPages(appDir);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pagePaths
    .map(
      (route) => `
    <url>
      <loc>${host}${route}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `
    )
    .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: { "Content-Type": "application/xml" },
  });
}
