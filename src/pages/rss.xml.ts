import rss from "@astrojs/rss";
import { getWriting } from "../lib/content";

export async function GET(context) {
  const posts = getWriting();

  return rss({
    title: "Dustin Gamble - Writing",
    description: "Essays on autonomous systems, simulation-first engineering, and AI-augmented workflows.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.title,
      description: post.summary,
      pubDate: new Date(post.date),
      link: `/writing/${post.slug}/`
    })),
    customData: "<language>en-us</language>"
  });
}
