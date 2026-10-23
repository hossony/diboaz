// ============================================================
//  CONFIGURAÇÃO GERAL DO SITE — edite aqui seus dados.
//  Tudo que aparece em várias páginas (nome, contato, SEO,
//  redes sociais, comentários) vem deste arquivo.
// ============================================================

export const SITE = {
  // Domínio final (sem barra no fim). Usado no sitemap, canonical e Open Graph.
  url: 'https://diboaz.vercel.app',

  name: 'Luteria Di Boaz',
  shortName: 'Di Boaz',
  tagline: 'Tradição da luteria italiana',
  description:
    'Luteria Di Boaz: violinos, violas e violoncelos artesanais feitos à mão no Brasil, na tradição da luteria italiana de Cremona. Construção, verniz, regulagem e restauração de instrumentos de corda.',
  author: 'Eliel Filho',
  locale: 'pt_BR',
  lang: 'pt-BR',

  // Cidade da oficina — aparece no rodapé, na página de contato e nos dados estruturados (SEO local).
  city: 'Taquarituba',
  state: 'SP',
  country: 'BR',

  // Palavras-chave base (complementadas por cada post/trabalho).
  keywords: [
    'luthier',
    'luteria',
    'luthier no Brasil',
    'luthier em São Paulo',
    'violino artesanal',
    'violoncelo artesanal',
    'viola de arco',
    'luteria italiana',
    'tradição cremonesa',
    'verniz de violino',
    'regulagem de violino',
    'restauração de instrumentos de corda',
  ],

  // Imagem padrão para compartilhamento (WhatsApp, Facebook etc.) — 1200x630.
  ogImage: '/og-default.jpg',

  postsPerPage: 6,
};

export const CONTACT = {
  // Troque pelos seus dados reais.
  email: 'elielfilholk@gmail.com',
  // Somente números, com DDI e DDD. Ex.: 5514999999999
  whatsapp: '5514998233642',
  whatsappMessage: 'Olá! Vi o site da Luteria Di Boaz e gostaria de conversar sobre um instrumento.',

  // Formulário de contato sem servidor (opcional).
  // Crie um formulário grátis em https://formspree.io e cole a URL aqui
  // (ex.: 'https://formspree.io/f/abcdwxyz'). Vazio = o formulário vira um e-mail (mailto).
  formEndpoint: '',
};

export const SOCIAL = {
  instagram: 'https://instagram.com/',
  youtube: '',
  facebook: '',
  blogger: '', // link do blog antigo, se quiser manter
};

// Comentários via Giscus (GitHub Discussions) — gratuitos, sem banco de dados.
// Gere os valores em https://giscus.app e cole aqui. Enquanto `repo` estiver vazio,
// a área de comentários mostra um convite para falar pelo WhatsApp/e-mail.
export const COMMENTS = {
  repo: '', // ex.: 'seu-usuario/luteria-di-boaz'
  repoId: '',
  category: 'Comentários',
  categoryId: '',
  lang: 'pt',
};

export const NAV = [
  { href: '/', label: 'Início' },
  { href: '/sobre/', label: 'Sobre' },
  { href: '/trabalhos/', label: 'Trabalhos' },
  { href: '/blog/', label: 'Diário' },
  { href: '/tradicao/', label: 'A Tradição' },
  { href: '/contato/', label: 'Contato' },
];
