import rss from "@astrojs/rss";
import aoyukiConfig from "../../aoyuki.config";
import { getCollection } from "astro:content";
import { url } from "../utils/url";
import { IdToSlug } from "../utils/hash";

var locale = aoyukiConfig.locale.toLowerCase(); 
if (locale == 'en') locale = 'en-us';

export async function GET(context: { site: string }) {
  const posts = await getCollection("posts");
  return rss({
    title: aoyukiConfig.title,
    description: aoyukiConfig.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      link: url(`/posts/${aoyukiConfig.slugMode == 'RAW' ? post.id : IdToSlug(post.id)}/`),
      description: post.data.description,
      pubDate: post.data.published,
      content: post.body,
      customData: `<language>${locale}</language>`,
    })),
  });
}
