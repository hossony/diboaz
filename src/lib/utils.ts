import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;
export type Trabalho = CollectionEntry<'trabalhos'>;

const tz = 'America/Sao_Paulo';

/** "sexta-feira, 23 de outubro de 2026" — cabeçalho de data no estilo dos blogs clássicos */
export function longDate(d: Date) {
  return d.toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

/** "23 out. 2026" */
export function shortDate(d: Date) {
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC' });
}

export function monthName(m: number) {
  return new Date(Date.UTC(2000, m, 1)).toLocaleDateString('pt-BR', { month: 'long', timeZone: 'UTC' });
}

export function slugify(s: string) {
  return s
    .toString()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function readingTime(text = '') {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

const isProd = import.meta.env.PROD;

export async function getPosts() {
  const all = await getCollection('posts', ({ data }) => (isProd ? !data.draft : true));
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getTrabalhos() {
  const all = await getCollection('trabalhos', ({ data }) => (isProd ? !data.draft : true));
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Agrupa postagens por ano → mês (para o widget "Arquivo do blog") */
export function groupArchive(posts: Post[]) {
  const map = new Map<number, Map<number, Post[]>>();
  for (const p of posts) {
    const y = p.data.date.getUTCFullYear();
    const m = p.data.date.getUTCMonth();
    if (!map.has(y)) map.set(y, new Map());
    const ym = map.get(y)!;
    if (!ym.has(m)) ym.set(m, []);
    ym.get(m)!.push(p);
  }
  return [...map.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([year, months]) => ({
      year,
      count: [...months.values()].reduce((n, l) => n + l.length, 0),
      months: [...months.entries()]
        .sort((a, b) => b[0] - a[0])
        .map(([month, items]) => ({ month, name: monthName(month), items })),
    }));
}

/** Contagem de marcadores (tags) */
export function tagCounts(posts: Post[]) {
  const counts = new Map<string, number>();
  for (const p of posts) for (const t of p.data.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
  return [...counts.entries()]
    .map(([name, count]) => ({ name, slug: slugify(name), count }))
    .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
}

export const TZ = tz;
