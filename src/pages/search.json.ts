import type { APIRoute } from 'astro';
import { getPosts, getTrabalhos, shortDate } from '../lib/utils';

const strip = (s = '') => s.replace(/[#*_>`\[\]()!]/g, ' ').replace(/\s+/g, ' ').trim();

export const GET: APIRoute = async () => {
  const posts = await getPosts();
  const works = await getTrabalhos();
  const data = [
    ...posts.map((p) => ({
      kind: 'Diário', title: p.data.title, url: `/blog/${p.id}/`, date: shortDate(p.data.date),
      text: `${p.data.description} ${p.data.tags.join(' ')} ${strip(p.body)}`,
    })),
    ...works.map((w) => ({
      kind: 'Trabalho', title: w.data.title, url: `/trabalhos/${w.id}/`, date: shortDate(w.data.date),
      text: `${w.data.description} ${w.data.instrument} ${w.data.model ?? ''} ${w.data.woods ?? ''} ${strip(w.body)}`,
    })),
  ];
  return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
};
