// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Mantenha igual a SITE.url em src/site.config.ts
const SITE_URL = 'https://diboaz.vercel.app';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin/') && !page.includes('/busca/'),
      changefreq: 'weekly',
      i18n: { defaultLocale: 'pt', locales: { pt: 'pt-BR' } },
    }),
  ],
  build: { format: 'directory' },
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
