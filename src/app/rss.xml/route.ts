import { getBlogPosts, site } from "@/lib/content";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET(request: Request) {
  const origin = new URL(request.url).origin;
  const posts = getBlogPosts();
  const latestPostDate = posts[0]?.date ?? new Date().toISOString();

  const items = posts
    .map((post) => {
      const url = `${origin}/blog/${post.slug}`;

      return `
        <item>
          <title>${escapeXml(post.title)}</title>
          <link>${escapeXml(url)}</link>
          <guid>${escapeXml(url)}</guid>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          <description>${escapeXml(post.excerpt)}</description>
          ${post.tags
            .map((tag) => `<category>${escapeXml(tag)}</category>`)
            .join("")}
        </item>`;
    })
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>${escapeXml(`${site.fullName} Blog`)}</title>
        <link>${escapeXml(`${origin}/blog`)}</link>
        <description>${escapeXml(site.tagline)}</description>
        <language>en-us</language>
        <lastBuildDate>${new Date(latestPostDate).toUTCString()}</lastBuildDate>
        ${items}
      </channel>
    </rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
