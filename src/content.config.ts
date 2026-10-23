import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Postagens do diário/blog — arquivos .md em src/content/posts
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Eliel Filho'),
    draft: z.boolean().default(false),
  }),
});

// Trabalhos / portfólio de instrumentos — arquivos .md em src/content/trabalhos
const trabalhos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/trabalhos' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    date: z.coerce.date(),
    instrument: z
      .enum(['Violino', 'Viola', 'Violoncelo', 'Contrabaixo', 'Restauração', 'Regulagem', 'Outro'])
      .default('Violino'),
    status: z.enum(['Acervo', 'Disponível', 'Vendido', 'Sob encomenda', 'Em construção']).default('Acervo'),
    cover: z.string(),
    coverAlt: z.string().optional(),
    gallery: z
      .array(z.object({ src: z.string(), alt: z.string().optional() }))
      .default([]),
    model: z.string().optional(), // ex.: "Stradivari 1715"
    woods: z.string().optional(), // ex.: "Tampo de abeto alpino, fundo de bordo flamado"
    varnish: z.string().optional(),
    price: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts, trabalhos };
