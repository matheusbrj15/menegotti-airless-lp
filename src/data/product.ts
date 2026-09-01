export type ProductImage = {
  src: string;
  alt: string;
};

export type ProductBenefit = {
  title: string;
  description: string;
};

export type ProductSpecification = {
  label: string;
  value: string;
};

export type ProductReview = {
  name: string;
  city: string;
  rating: number;
  verified: boolean;
  text: string;
  images: ProductImage[];
};

export type ProductFaq = {
  question: string;
  answer: string;
};

export type Product = {
  name: string;
  shortName: string;
  eyebrow: string;
  description: string;
  price: number;
  oldPrice: number | null;
  checkoutUrl: string | null;
  availableVoltages: readonly ['127V', '220V'];
  images: ProductImage[];
  benefits: ProductBenefit[];
  applications: string[];
  specifications: ProductSpecification[];
  kitContents: string[];
  reviews: ProductReview[];
  faq: ProductFaq[];
};

// Cole aqui a URL externa da Zedy quando ela estiver disponível.
// Todos os CTAs da página consomem esta única configuração.
export const PRODUCT_CHECKOUT_URL: string | null =
  'https://seguro.final-agora-br.shop/api/public/shopify?product=906924912448&store=9069';

export const product: Product = {
  name: 'Máquina de Pintura Airless Menegotti MMA PRO 1000 Profissional',
  shortName: 'Menegotti MMA PRO 1000',
  eyebrow: 'AIRLESS PROFISSIONAL • 1000 W',
  description:
    'Alta pressão e maior produtividade para aplicar tintas com acabamento uniforme em diferentes tipos de projeto.',
  price: 89.9,
  oldPrice: null,
  checkoutUrl: PRODUCT_CHECKOUT_URL,
  availableVoltages: ['127V', '220V'],
  images: [
    {
      src: '/product/mma-pro-1000-principal-clean-v2.png',
      alt: 'Máquina de Pintura Airless Menegotti MMA PRO 1000 em composição principal limpa',
    },
    {
      src: '/product/mma-pro-1000-criativo-performance.png',
      alt: 'Criativo de alta performance da Menegotti MMA PRO 1000 com ficha resumida',
    },
    {
      src: '/product/mma-pro-1000-criativo-airless.png',
      alt: 'Criativo sobre tecnologia Airless e aplicação uniforme da Menegotti MMA PRO 1000',
    },
    {
      src: '/product/mma-pro-1000-criativo-aplicacoes.png',
      alt: 'Criativo de aplicações em paredes, telhados, cercas e pinturas profissionais',
    },
  ],
  benefits: [
    {
      title: 'Alta pressão para produzir mais',
      description:
        'Pressão máxima de 214 bar e vazão máxima de 2,0 L/min para aplicações profissionais.',
    },
    {
      title: 'Controle durante a aplicação',
      description:
        'Regulador de pressão integrado para adequar o trabalho ao material e ao acabamento desejado.',
    },
    {
      title: 'Versátil para diferentes materiais',
      description:
        'Indicada para tinta acrílica, látex, verniz e PU, sempre respeitando a viscosidade recomendada.',
    },
    {
      title: 'Alcance para projetos maiores',
      description:
        'Acompanha mangueira de 15 m e prolongador de 50 cm para ampliar a mobilidade no trabalho.',
    },
  ],
  applications: [
    'Paredes',
    'Telhados',
    'Pisos',
    'Cercas',
    'Garagens',
    'Móveis',
    'Contêineres',
  ],
  specifications: [
    { label: 'Potência', value: '1000 W' },
    { label: 'Pressão máxima', value: '214 bar (21,4 MPa)' },
    { label: 'Vazão máxima', value: '2,0 L/min' },
    { label: 'Mangueira', value: '15 m' },
    { label: 'Bico máximo', value: '0,021” (0,53 mm)' },
    { label: 'Peso', value: '15,2 kg' },
    { label: 'Dimensões', value: '480 × 360 × 405 mm' },
    { label: 'Voltagens', value: '127 V ou 220 V' },
  ],
  kitContents: [
    '2 anéis de vedação',
    '2 chaves fixas 17 × 19 mm',
    '1 prolongador para pistola de 50 cm',
    '1 pistola de projeção com bico 519 e filtro branco malha 50',
    '1 bisnaga de óleo',
    '1 mangueira de 15 m',
  ],
  reviews: [
    {
      name: 'Rafael Nunes',
      city: 'Campinas, SP',
      rating: 5,
      verified: false,
      text: 'Chegou tudo certo e bem embalado. A mangueira e os acessórios vieram completos, e a montagem foi tranquila.',
      images: [
        {
          src: '/reviews/avaliacao-1.webp',
          alt: 'Mangueira e acessórios da Menegotti MMA PRO 1000 recebidos por cliente',
        },
      ],
    },
    {
      name: 'Marcelo Pires',
      city: 'Goiânia, GO',
      rating: 5,
      verified: false,
      text: 'Usei em um trabalho maior e achei o equipamento prático. A aplicação ficou uniforme e o rendimento foi bom.',
      images: [
        {
          src: '/reviews/avaliacao-2.webp',
          alt: 'Equipamento Menegotti sendo utilizado em serviço de pintura',
        },
      ],
    },
    {
      name: 'Eduardo Martins',
      city: 'Belo Horizonte, MG',
      rating: 5,
      verified: false,
      text: 'Produto veio bem acomodado na caixa e sem peças faltando. Atendeu bem para pintura profissional.',
      images: [
        {
          src: '/reviews/avaliacao-3.webp',
          alt: 'Máquina Menegotti MMA PRO 1000 acomodada dentro da embalagem',
        },
      ],
    },
    {
      name: 'André Ribeiro',
      city: 'Curitiba, PR',
      rating: 4,
      verified: false,
      text: 'A caixa chegou com algumas marcas do transporte, mas o equipamento e os acessórios vieram certos. Bom custo-benefício.',
      images: [
        {
          src: '/reviews/avaliacao-4.webp',
          alt: 'Caixa de transporte da Máquina de Pintura Airless Menegotti MMA PRO 1000',
        },
      ],
    },
    {
      name: 'Fábio Almeida',
      city: 'Sorocaba, SP',
      rating: 5,
      verified: false,
      text: 'Conjunto completo e fácil de organizar. A pressão ajuda bastante em áreas maiores e o acabamento ficou profissional.',
      images: [
        {
          src: '/reviews/avaliacao-5.webp',
          alt: 'Máquina Menegotti MMA PRO 1000 com mangueira e acessórios organizados',
        },
      ],
    },
    {
      name: 'Leandro Costa',
      city: 'Ribeirão Preto, SP',
      rating: 5,
      verified: false,
      text: 'Pistola e peças vieram bem protegidas. O equipamento é simples de usar e agilizou bastante o serviço.',
      images: [
        {
          src: '/reviews/avaliacao-6.webp',
          alt: 'Pistola e componentes da Menegotti MMA PRO 1000 embalados para entrega',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Para quais tipos de pintura ela é indicada?',
      answer:
        'O manual técnico indica aplicações em paredes, telhados, pisos, cercas, garagens, móveis e contêineres, entre outros trabalhos compatíveis.',
    },
    {
      question: 'A máquina é indicada para uso profissional?',
      answer:
        'Sim. A Menegotti classifica a MMA PRO 1000 para aplicações profissionais mais pesadas, respeitando os limites técnicos e as instruções do manual.',
    },
    {
      question: 'Quais tipos de tinta podem ser utilizados?',
      answer:
        'A fabricante informa compatibilidade com tintas acrílicas, látex, vernizes e PU. A viscosidade e a diluição indicadas pelo fabricante da tinta devem ser verificadas antes do uso.',
    },
    {
      question: 'É possível ajustar a pressão?',
      answer:
        'Sim. O equipamento possui regulador de pressão. O ajuste deve seguir o material, o bico utilizado e as orientações do manual técnico.',
    },
    {
      question: 'O que acompanha o produto?',
      answer:
        'Acompanha mangueira de 15 m, pistola com bico 519 e filtro, prolongador de 50 cm, dois anéis de vedação, duas chaves fixas e uma bisnaga de óleo.',
    },
    {
      question: 'Existem versões 127 V e 220 V?',
      answer:
        'Sim. A MMA PRO 1000 possui modelos de 127 V e 220 V. A seleção da voltagem será adicionada quando o checkout do produto estiver disponível.',
    },
    {
      question: 'Qual é a garantia?',
      answer:
        'O prazo e as condições comerciais de garantia deverão ser confirmados no checkout e na documentação da compra. Nenhum prazo não confirmado é exibido nesta página.',
    },
  ],
};
