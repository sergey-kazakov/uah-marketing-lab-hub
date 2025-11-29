// src/data/apps.js

export const CATEGORIES = {
  FUNDAMENTOS: "fundamentos",
  ESTRATEGIAS: "estrategias",
  SERVICIOS: "servicios",
  INTERNACIONAL: "internacional",
  DISTRIBUCION: "distribucion",
  INVESTIGACION: "investigacion",
  TURISTICO: "turistico",
};

export const apps = [
  // POSICIONAMIENTO
  {
    id: "posicionamiento",
    categories: [
      CATEGORIES.FUNDAMENTOS,
      CATEGORIES.ESTRATEGIAS,
      CATEGORIES.INVESTIGACION,
      CATEGORIES.INTERNACIONAL,
    ],
    title: {
      es: "Posicionamiento (PCA / PrefMap)",
      en: "Positioning (PCA / PrefMap)",
    },
    description: {
      es: "Análisis de percepción de marca y mapas de posicionamiento.",
      en: "Brand perception analysis and positioning maps.",
    },
    status: "ready",
    url: "https://poetic-arithmetic-a9c8ad.netlify.app/",
  },

  // SEGMENTOR
  {
    id: "segmentor",
    categories: [
      CATEGORIES.FUNDAMENTOS,
      CATEGORIES.ESTRATEGIAS,
      CATEGORIES.SERVICIOS,
      CATEGORIES.INTERNACIONAL,
      CATEGORIES.DISTRIBUCION,
      CATEGORIES.INVESTIGACION,
      CATEGORIES.TURISTICO,
    ],
    title: {
      es: "SegMentor — segmentación de mercado",
      en: "SegMentor — market segmentation",
    },
    description: {
      es: "Segmentación con K-means y métodos jerárquicos, creación de personas.",
      en: "Segmentation with K-means and hierarchical methods, persona creation.",
    },
    status: "dev",
    url: null,
  },

  // STP-SIMULATOR
  {
    id: "stp-simulator",
    categories: [CATEGORIES.ESTRATEGIAS],
    title: {
      es: "STP-Simulator",
      en: "STP-Simulator",
    },
    description: {
      es: "Simulador de elección de segmento, producto, mensaje y canal.",
      en: "Simulator of segment selection, product, message and channel.",
    },
    status: "idea",
    url: null,
  },

  // CONJOINTLAB
  {
    id: "conjointlab",
    categories: [CATEGORIES.ESTRATEGIAS, CATEGORIES.DISTRIBUCION, CATEGORIES.INVESTIGACION],
    title: {
      es: "ConJointLab",
      en: "ConJointLab",
    },
    description: {
      es: "Diseño y análisis de Conjoint Analysis con datos simulados.",
      en: "Design and analysis of conjoint experiments with simulated data.",
    },
    status: "idea",
    url: null,
  },

  // PRICEPOLATOR
  {
    id: "pricepolator",
    categories: [CATEGORIES.ESTRATEGIAS, CATEGORIES.DISTRIBUCION],
    title: {
      es: "PricePolator — elasticidad de precios",
      en: "PricePolator — price elasticity",
    },
    description: {
      es: "Simulador de demanda, elasticidad, margen y beneficio.",
      en: "Simulator of demand, elasticity, margin and profit.",
    },
    status: "idea",
    url: null,
  },

  // CHOICELAB
  {
    id: "choicelab",
    categories: [
      CATEGORIES.FUNDAMENTOS,
      CATEGORIES.ESTRATEGIAS,
      CATEGORIES.SERVICIOS,
      CATEGORIES.DISTRIBUCION,
      CATEGORIES.INVESTIGACION,
      CATEGORIES.TURISTICO,
    ],
    title: {
      es: "ChoiceLab — efectos conductuales",
      en: "ChoiceLab — behavioural effects",
    },
    description: {
      es: "Simulación de framing, anclaje y prueba social en decisiones de compra.",
      en: "Simulation of framing, anchoring and social proof in purchase decisions.",
    },
    status: "idea",
    url: null,
  },

  // BRAND HEALTH DASHBOARD
  {
    id: "brand-health-dashboard",
    categories: [CATEGORIES.DISTRIBUCION, CATEGORIES.INVESTIGACION],
    title: {
      es: "Brand Health Dashboard Builder",
      en: "Brand Health Dashboard Builder",
    },
    description: {
      es: "Construcción de panel de KPIs de marca: awareness, NPS, equity.",
      en: "Brand KPI dashboard: awareness, NPS, equity.",
    },
    status: "idea",
    url: null,
  },

  // BRAND PERSONALITY
  {
    id: "brand-personality-mapper",
    categories: [CATEGORIES.ESTRATEGIAS],
    title: {
      es: "Brand Personality Mapper",
      en: "Brand Personality Mapper",
    },
    description: {
      es: "Asignación de marcas a modelos de personalidad (Big Five / Aaker).",
      en: "Mapping brands onto personality models (Big Five / Aaker).",
    },
    status: "idea",
    url: null,
  },

  // WEB ANALYTICS
  {
    id: "web-analytics-simulator",
    categories: [CATEGORIES.ESTRATEGIAS],
    title: {
      es: "Web Analytics Simulator",
      en: "Web Analytics Simulator",
    },
    description: {
      es: "Datos simulados de tráfico, campañas y embudo de conversión.",
      en: "Simulated data on traffic, campaigns and conversion funnel.",
    },
    status: "idea",
    url: null,
  },

  // SOCIAL ADS
  {
    id: "social-ad-simulator",
    categories: [CATEGORIES.ESTRATEGIAS],
    title: {
      es: "Social Ad Campaign Simulator",
      en: "Social Ad Campaign Simulator",
    },
    description: {
      es: "Simulación de campañas en redes: CPM, CPC, CPA, ROAS.",
      en: "Simulation of social ad campaigns: CPM, CPC, CPA, ROAS.",
    },
    status: "idea",
    url: null,
  },

  // SEO-LAB
  {
    id: "seo-lab",
    categories: [CATEGORIES.ESTRATEGIAS],
    title: {
      es: "SEO-Lab",
      en: "SEO-Lab",
    },
    description: {
      es: "Entrenador de SEO on-page: títulos, H1, enlaces, imágenes.",
      en: "SEO training lab: titles, H1, links, images.",
    },
    status: "idea",
    url: null,
  },

  // SERVICE BLUEPRINT
  {
    id: "service-blueprint-builder",
    categories: [CATEGORIES.SERVICIOS, CATEGORIES.TURISTICO],
    title: {
      es: "Service Blueprint Builder",
      en: "Service Blueprint Builder",
    },
    description: {
      es: "Construcción de blueprints de servicios: frontstage, backstage, KPIs.",
      en: "Building service blueprints: frontstage, backstage, KPIs.",
    },
    status: "idea",
    url: null,
  },

  // COMPLAINT RECOVERY
  {
    id: "complaint-recovery-sim",
    categories: [CATEGORIES.SERVICIOS],
    title: {
      es: "Complaint Recovery Simulator",
      en: "Complaint Recovery Simulator",
    },
    description: {
      es: "Simulación de respuesta a quejas y su impacto en satisfacción y NPS.",
      en: "Simulation of complaint handling and its impact on satisfaction and NPS.",
    },
    status: "idea",
    url: null,
  },

  // COUNTRY ATTRACTIVENESS
  {
    id: "country-attractiveness",
    categories: [CATEGORIES.INTERNACIONAL, CATEGORIES.TURISTICO],
    title: {
      es: "Country Attractiveness Analyzer",
      en: "Country Attractiveness Analyzer",
    },
    description: {
      es: "Análisis PESTEL, riesgo y atractivo de mercados internacionales.",
      en: "PESTEL, risk and attractiveness analysis for foreign markets.",
    },
    status: "idea",
    url: null,
  },

  // CROSS-CULTURAL
  {
    id: "cross-cultural-sim",
    categories: [CATEGORIES.INTERNACIONAL, CATEGORIES.TURISTICO],
    title: {
      es: "Cross-Cultural Consumer Simulator",
      en: "Cross-Cultural Consumer Simulator",
    },
    description: {
      es: "Simulación de diferencias culturales en la respuesta del consumidor.",
      en: "Simulation of cultural differences in consumer response.",
    },
    status: "idea",
    url: null,
  },
  
  // AI-MARKETER LAB
    {
      id: "ai-marketer-lab",
      categories: [
        CATEGORIES.FUNDAMENTOS,
        CATEGORIES.ESTRATEGIAS,
        CATEGORIES.SERVICIOS,
        CATEGORIES.INVESTIGACION,
        CATEGORIES.TURISTICO,
      ],
      title: {
        es: "AI-Marketer Lab",
        en: "AI-Marketer Lab",
      },
      description: {
        es: "Generación de textos y creatividades con IA aplicada al marketing.",
        en: "Ethical evaluation, risks and regulatory compliance of AI systems.",
      },
      status: "idea",
      url: null,
    },
  
    // AI ETHICS & COMPLIANCE
    {
      id: "ai-ethics-compliance",
      categories: [
        CATEGORIES.FUNDAMENTOS,
        CATEGORIES.ESTRATEGIAS,
        CATEGORIES.SERVICIOS,
        CATEGORIES.INTERNACIONAL,
        CATEGORIES.INVESTIGACION,
      ],
      title: {
        es: "AI Ethics & Compliance Checker",
        en: "AI Ethics & Compliance Checker",
      },
      description: {
        es: "Evaluación ética, riesgos y cumplimiento regulatorio de sistemas de IA.",
        en: "Ethical evaluation, risks and regulatory compliance of AI systems.",
      },
      status: "idea",
      url: null,
    },
  ];