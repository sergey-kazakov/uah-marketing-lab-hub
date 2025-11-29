export const LANGS = {
  ES: "es",
  EN: "en",
};

export const uiTexts = {
  es: {
    title: "UAH Marketing Lab",
    subtitle: "Ciclo de aplicaciones interactivas de marketing",
    heroDescription:
      "Cada aplicación es un mini-laboratorio para practicar conceptos clave con datos y simulaciones.",
    viewManual: "Ver manual docente",
    contact: "Contacto",
    contactSectionTitle: "Contacto",
    contactSectionSubtitle:
      "Para consultas sobre el UAH Marketing Lab y sus aplicaciones docentes:",
    all: "Todas",
    category: {
      fundamentos: "Marketing Fundamentos",
      estrategias: "Estrategias de Marketing",
      servicios: "Marketing de Servicios",
      internacional: "Marketing Internacional",
      distribucion: "Distribución Comercial",
      investigacion: "Investigación Comercial",
      turistico: "Marketing Turístico",
      all: "Todas",
    },
    status: {
      ready: "Listo",
      dev: "En desarrollo",
      idea: "Idea",
    },
    openApp: "Abrir aplicación",
    comingSoon: "Próximamente",
    footerText:
      "UAH · Departamento de Marketing (Autores: Dr. Pedro Cuesta Valiño, Dr. Sergey Kazakov) · 2025–2027",
  },
  en: {
    title: "UAH Marketing Lab",
    subtitle: "Interactive marketing applications cycle",
    heroDescription:
      "Each application is a mini-lab to practice key marketing concepts with data and simulations.",
    viewManual: "View teaching manual",
    contact: "Contact",
    contactSectionTitle: "Contact",
    contactSectionSubtitle:
      "For questions about the UAH Marketing Lab and its teaching applications:",
    all: "All",
    category: {
      fundamentos: "Marketing Fundamentals",
      estrategias: "Marketing Strategy",
      servicios: "Services Marketing",
      internacional: "International Marketing",
      distribucion: "Retail & Distribution",
      investigacion: "Marketing Research",
      turistico: "Tourism Marketing",
      all: "All",
    },
    status: {
      ready: "Ready",
      dev: "In development",
      idea: "Concept",
    },
    openApp: "Open app",
    comingSoon: "Coming soon",
    footerText:
      "UAH · Department of Marketing (Authors: Dr. Pedro Cuesta Valiño, Dr. Sergey Kazakov) · 2025–2027",
  },
};

export function getInitialLang() {
  const stored = window.localStorage.getItem("uah_lab_lang");
  if (stored === LANGS.ES || stored === LANGS.EN) return stored;
  return LANGS.ES;
}
