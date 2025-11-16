import { NextResponse } from "next/server";

export async function GET() {
  const host = "https://www.starrefrigeration.in"; // Use production domain always

  const content =
    process.env.VERCEL_ENV === "production"
      ? `User-agent: *
Disallow:

Sitemap: ${host}/sitemap.xml`
      : `User-agent: *
Disallow: /`; // Block crawlers in dev/staging

  return new NextResponse(content, {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
}
