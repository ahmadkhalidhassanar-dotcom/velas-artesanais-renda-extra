import { BonusItem, FaqItem, PlanItem, StudentProof, TestimonialItem } from '../types';

export const HERO_VSL_VIDEO = 'https://www.image2url.com/r2/default/videos/1789342185130-e510e032-0f9e-4eb4-a505-370ff93c0468.mp4';
export const HERO_IMAGE = '/hero_candles.jpg';
export const HERO_IMAGE_FALLBACK = 'https://i.imgur.com/rjncgBl.jpeg';
export const PRODUCTION_IMAGE = '/production_candles.jpg';
export const PRODUCTION_IMAGE_FALLBACK = 'https://i.imgur.com/lVkBfzS.jpeg';
export const COURSE_MOCKUP_IMAGE = '/course_mockup.png';
export const COURSE_MOCKUP_IMAGE_FALLBACK = 'https://i.imgur.com/SVpQmTZ.png';
export const BONUS_BUNDLE_IMAGE = '/bonus_bundle_plus4.jpeg';
export const BONUS_BUNDLE_IMAGE_FALLBACK = 'https://i.imgur.com/mbPM2Fc.jpeg';

export const STUDENT_PROOFS: StudentProof[] = [
  {
    id: 'proof-1',
    url: '/testemunho_1.png',
    fallbackUrl: 'https://i.imgur.com/nTNcBBp.png',
    alt: 'Depoimento e encomenda de velas artesanais de aluna',
  },
  {
    id: 'proof-2',
    url: '/testemunho_2.png',
    fallbackUrl: 'https://i.imgur.com/5d7EJfs.png',
    alt: 'Mensagem de encomenda recebida por aluna',
  },
  {
    id: 'proof-3',
    url: '/testemunho_3.png',
    fallbackUrl: 'https://i.imgur.com/DHmrVsS.png',
    alt: 'Produção de velas artesanais e encomenda de aluna',
  },
  {
    id: 'proof-4',
    url: '/testemunho_4.png',
    fallbackUrl: 'https://i.imgur.com/HG5o9xe.png',
    alt: 'Depoimento de aluna com encomendas de velas',
  },
  {
    id: 'proof-5',
    url: '/testemunho_5.png',
    fallbackUrl: 'https://i.imgur.com/JnF3u0y.png',
    alt: 'Velas prontas e encomendas de aluna',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    initials: 'M. S.',
    name: 'Mariana S.',
    tagline: 'Fez sua primeira vela em casa',
    comment: 'Fiz minha primeira vela ontem seguindo o passo a passo e ficou linda e super perfumada! Achei que seria difícil derreter a cera e acertar o pavio, mas as videoaulas mostram cada detalhe de forma muito simples.',
    stars: 5,
  },
  {
    id: '2',
    initials: 'C. R.',
    name: 'Cláudia R.',
    tagline: 'Começou nas horas vagas',
    comment: 'O material é muito prático e direto ao ponto, sem enrolação. Consegui fazer minhas primeiras 5 velas no fim de semana com os materiais que comprei aqui perto de casa.',
    stars: 5,
  },
  {
    id: '3',
    initials: 'P. L.',
    name: 'Patrícia L.',
    tagline: 'Fez as primeiras vendas para vizinhas',
    comment: 'Mostrei para duas colegas do trabalho e elas já encomendaram quatro velas de lavanda e canela. Muito feliz de ver que algo feito com as próprias mãos pode gerar um dinheirinho extra!',
    stars: 5,
  },
  {
    id: '4',
    initials: 'A. F.',
    name: 'Aline F.',
    tagline: 'Nunca tinha feito artesanato',
    comment: 'Nunca tinha feito nada de artesanato antes. O passo a passo é tão bem explicado que não tem erro. As apostilas com as receitas salvas no celular facilitam muito a consulta.',
    stars: 5,
  },
];

export const BONUSES: BonusItem[] = [
  {
    id: 'bonus-1',
    badge: '🎁 BÔNUS 1 🎁',
    title: '✅ 50 MODELOS DE KITS PRONTOS PARA VENDA',
    originalPrice: 'R$67,00',
    description: 'Aprenda a montar kits irresistíveis e prontos para venda que aumentam o valor de cada pedido e multiplicam seus lucros.',
    image: '/bonus_img_1.jpeg',
    fallbackImage: 'https://i.imgur.com/80jGSN7.jpeg',
  },
  {
    id: 'bonus-2',
    badge: '🎁 BÔNUS 2 🎁',
    title: '✅ LISTA SECRETA DE FORNECEDORES',
    originalPrice: 'R$47,00',
    description: 'Aproveite a lista para começar logo sua produção artesanal com fornecedores selecionados de ceras, essências, pavios e recipientes.',
    image: '/bonus_img_2.jpeg',
    fallbackImage: 'https://i.imgur.com/rBuYtsf.jpeg',
  },
  {
    id: 'bonus-3',
    badge: '🎁 BÔNUS 3 🎁',
    title: '✅ 150 MOLDES E MODELOS DE VELAS ARTESANAIS',
    originalPrice: 'R$37,00',
    description: 'Acesse uma coleção exclusiva com 150 moldes e modelos em alta no mercado para criar velas decorativas encantadoras e se destacar.',
    image: '/bonus_img_3.jpeg',
    fallbackImage: 'https://i.imgur.com/9dRBgF8.jpeg',
  },
  {
    id: 'bonus-4',
    badge: '🎁 BÔNUS 4 🎁',
    title: '✅ KIT DE RÓTULOS E ETIQUETAS',
    originalPrice: 'R$47,00',
    description: 'Modelos prontos e também editáveis para apostar na sua identidade visual e deixar suas velas com apresentação profissional.',
    image: '/bonus_img_4.jpeg',
    fallbackImage: 'https://i.imgur.com/YXKFa0q.jpeg',
  },
];

export const PLUS_FIVE_BONUSES = {
  badge: '🎁 +4 BÔNUS ESPECIAIS 🎁',
  title: '✅ MAIS 4 MATERIAIS PARA QUEM ESCOLHER O PLANO COMPLETO',
  items: [
    {
      name: 'Certificado de Conclusão 01',
      desc: 'Registre a conclusão do conteúdo principal.',
    },
    {
      name: 'Certificado de Conclusão 02',
      desc: 'Certificado complementar disponível no Plano Completo.',
    },
    {
      name: 'Planilha de Custos, Preços e Lucro',
      desc: 'Organize seus gastos e tenha mais clareza na hora de definir o preço e margem das suas velas.',
    },
    {
      name: 'Velas Como Renda Extra',
      desc: 'Veja como organizar suas primeiras produções e começar a oferecer suas velas para venda.',
    },
  ],
};

export const CHECKOUT_URL_COMPLETE_REGULAR = 'https://pay.cakto.com.br/7mkzsaq_1103195';
export const CHECKOUT_URL_COMPLETE_DISCOUNT_19 = 'https://pay.cakto.com.br/3aq7wbb';
export const CHECKOUT_URL_BASIC_10 = 'https://pay.cakto.com.br/ky2tb6a';

export const PLANS: PlanItem[] = [
  {
    id: 'basic',
    name: 'PLANO BÁSICO',
    price: 'R$10',
    description: 'Para quem quer começar fazendo suas próprias velas.',
    isPopular: false,
    features: [
      'Acesso ao Método 1.0',
      'Acesso Vitalício',
      '+90 Receitas de Velas Aromáticas e Terapêuticas',
    ],
    ctaText: 'COMPRAR AGORA',
    checkoutUrl: CHECKOUT_URL_BASIC_10,
  },
  {
    id: 'complete',
    name: 'PLANO COMPLETO',
    originalPrice: 'R$197,99',
    price: 'R$27',
    description: 'Para quem quer aprender a fazer velas e também ter mais materiais para começar a vender.',
    isPopular: true,
    badge: '⭐ MAIS ESCOLHIDO',
    features: [
      'Acesso ao Método 2.0',
      'Acesso Vitalício',
      'Curso Prático com Videoaulas',
      '+90 Receitas',
      'Apostilas',
      'Primeira Vela de Sucesso',
      'Lista de Fornecedores',
      'Modelos de Velas Para Vender',
      'Kit de Rótulos',
      '2 Certificados',
      'Planilha de Custos, Preços e Lucro',
      'Velas Como Renda Extra',
    ],
    ctaText: 'GARANTIR ACESSO',
    checkoutUrl: CHECKOUT_URL_COMPLETE_REGULAR,
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'PRECISO SABER FAZER VELAS?',
    answer: 'Não. O conteúdo foi feito para quem também está começando e você pode acompanhar cada etapa passo a passo.',
  },
  {
    question: 'PRECISO COMPRAR MUITOS MATERIAIS?',
    answer: 'Não. Você pode começar aos poucos, comprando apenas os materiais necessários para suas primeiras velas.',
  },
  {
    question: 'VOU RECEBER VIDEOAULAS?',
    answer: 'Sim. O conteúdo possui videoaulas para facilitar o acompanhamento.',
  },
  {
    question: 'AS RECEITAS TAMBÉM VÊM EM APOSTILAS?',
    answer: 'Sim. Você também terá materiais para consultar quando precisar.',
  },
  {
    question: 'POSSO ACESSAR PELO CELULAR?',
    answer: 'Sim, desde que a plataforma de entrega utilizada seja compatível com celular.',
  },
  {
    question: 'QUANDO RECEBO O ACESSO?',
    answer: 'O acesso é liberado após a confirmação do pagamento, conforme o funcionamento da plataforma utilizada.',
  },
  {
    question: 'QUAL A DIFERENÇA ENTRE O PLANO DE R$10 E O DE R$27?',
    answer: 'O Plano Básico traz o conteúdo principal para aprender a fazer as velas.\n\nO Plano Completo inclui o conteúdo principal e também todos os materiais extras, como fornecedores, modelos, rótulos, planilha e conteúdos voltados para quem também quer começar a vender.',
  },
  {
    question: 'E SE EU COMPRAR E NÃO GOSTAR?',
    answer: 'Você terá 7 dias para conhecer o conteúdo e, dentro desse prazo, poderá solicitar o reembolso conforme as regras da garantia.',
  },
];
