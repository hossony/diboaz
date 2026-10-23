# Luteria Di Boaz — blog e portfólio

Site estático em **Astro**, focado em SEO para buscas como *luthier no Brasil*, *luteria*, *violino artesanal* e *luteria italiana*. Sem banco de dados: cada postagem e cada trabalho é um arquivo `.md`, editável por um painel em `/admin`.

## Rodar no computador

Requer **Node 22.23.4+** (recomendado Node 24 — veja `.nvmrc`).

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # gera a pasta dist/
```

## O que já vem pronto

| Página | Endereço |
|---|---|
| Início (destaques + últimas postagens) | `/` |
| Sobre o luthier | `/sobre/` |
| Galeria de trabalhos (com filtro por instrumento) | `/trabalhos/` |
| Diário / blog com paginação | `/blog/` |
| A tradição da luteria italiana (página pilar de SEO + FAQ) | `/tradicao/` |
| Contato (formulário + WhatsApp) | `/contato/` |
| Arquivo, marcadores, pesquisa, RSS | `/arquivo/`, `/marcadores/…`, `/busca/`, `/rss.xml` |
| Painel de publicação | `/admin/` |

**SEO:** títulos e descrições por página, canonical, Open Graph/WhatsApp, dados estruturados (LocalBusiness, BlogPosting, Product/VisualArtwork, FAQ, Breadcrumb, busca no site), `sitemap-index.xml`, `robots.txt`, RSS, HTML semântico e fontes self-hosted (carregamento rápido).

## 1. Primeiros ajustes (5 minutos)

1. **`src/site.config.ts`** — domínio, cidade, e-mail, WhatsApp (só números, com 55 + DDD), Instagram.
2. **`astro.config.mjs`** — o mesmo domínio em `SITE_URL`.
3. **`public/admin/config.yml`** — troque `SEU-USUARIO/luteria-di-boaz` pelo seu repositório, e `site_url`.
4. Troque `public/uploads/perfil.svg` pela sua foto (pode ser `perfil.jpg` — ajuste o nome em `src/components/Sidebar.astro` e `src/pages/sobre.astro`).
5. Os textos de exemplo estão em `src/content/posts` e `src/content/trabalhos`. Apague ou edite.

## 2. Publicar na internet (Vercel)

1. Suba a pasta para um repositório no GitHub.
2. Na Vercel: **Add New → Project → importe o repositório**. Framework: Astro (detectado sozinho). Node 24.
3. Conecte o domínio em *Settings → Domains*.

A cada alteração no GitHub (pelo painel ou pelo VS Code), a Vercel publica o site novo em ~1 minuto.

## 3. Publicar conteúdo pelo painel `/admin` (sem banco de dados)

O painel é o **Sveltia CMS**: ele grava os textos e as fotos direto no seu repositório do GitHub.

1. No GitHub: *Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate*.
   Acesso somente ao repositório do site, com permissão **Contents: Read and write**.
2. Abra `https://seudominio.com.br/admin/`, escolha **Sign in with Token** e cole o token.
3. Clique em **Diário** ou **Trabalhos → Novo**, escreva, envie fotos e **Salvar**. Pronto.

Funciona no celular também. Fotos são convertidas para WebP e reduzidas automaticamente antes de subir.

> Editar offline: rode `npm run dev`, abra `http://localhost:4321/admin/` no Chrome e escolha **Work with Local Repository**, selecionando a pasta do projeto.

## 4. Interação dos visitantes

- **Comentários (Giscus):** gratuitos, ficam no GitHub Discussions do seu repositório.
  1. Deixe o repositório **público** e ative *Settings → Features → Discussions*.
  2. Crie a categoria "Comentários" e instale o app em https://github.com/apps/giscus
  3. Em https://giscus.app gere `repoId` e `categoryId` e cole em `COMMENTS` no `site.config.ts`.
  Enquanto não configurar, aparece um convite para falar pelo WhatsApp/e-mail.
- **Formulário de contato:** crie um formulário grátis em https://formspree.io e cole a URL em `CONTACT.formEndpoint`. Sem isso, o formulário abre o e-mail do visitante.
- **Compartilhar:** botões de WhatsApp, Facebook, X, Pinterest e copiar link em cada postagem e trabalho.
- **WhatsApp flutuante** em todas as páginas.

## 5. Escrevendo para o Google

- Título com o que as pessoas buscam: *"Violino artesanal modelo Stradivari — verniz âmbar"*.
- Resumo de 120–160 caracteres (é o texto que aparece no Google).
- Sempre preencha a **descrição da foto** (alt).
- Use marcadores consistentes (Violino, Verniz, Restauração…).
- Cadastre o site no **Google Search Console** e envie `https://seudominio/sitemap-index.xml`.
- Crie o **Perfil da Empresa no Google** com o mesmo nome, cidade e link do site.

## Estrutura

```
src/
  site.config.ts         ← seus dados
  content/posts/         ← postagens (.md)
  content/trabalhos/     ← instrumentos (.md)
  pages/                 ← páginas
  components/ layouts/   ← visual
  styles/global.css      ← cores e tipografia
public/
  admin/                 ← painel de publicação
  uploads/               ← fotos enviadas
```
