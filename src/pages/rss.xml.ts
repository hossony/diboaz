import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../lib/utils';
import { SITE } from '../site.config';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: `${SITE.name} — Diário da oficina`,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `/blog/${p.id}/`,
      categories: p.data.tags,
      author: p.data.author,
    })),
    customData: `<language>pt-br</language>`,
  });
}
