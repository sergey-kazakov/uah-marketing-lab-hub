export const LANGS = {
  ES: "es",
  EN: "en",
};

export const uiTexts = {
  es: {
    title: "UAH Marketing Lab",
    subtitle:
      "Suite de aplicaciones interactivas para una docencia innovadora en marketing",
    heroDescription:
      "Cada aplicación es un mini-laboratorio para practicar conceptos clave con datos y simulaciones.",
    viewManual: "Ver manual docente",
    contact: "Contacto",

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
      "UAH · Departamento de Marketing (Autores: Dr. Pedro Cuesta Valiño | Dr. Sergey Kazakov | Dra. Patricia Durán Álamo) · © 2025–2027",

    contactSectionTitle: "Contacto",
    contactSectionSubtitle: "Equipo académico responsable del proyecto",

    contacts: [
      {
        name: "Pedro Cuesta Valiño",
        title: "Catedrático de Universidad",
        faculty: "Facultad de Ciencias Económicas, Empresariales y Turismo",
        dept: "Departamento de Economía y Dirección de Empresas",
        email: "pedro.cuesta@uah.es",
      },
      {
        name: "Sergey Kazakov",
        title: "Profesor Ayudante Doctor, PhD, D.E.N., C.E.N.",
        faculty: "Facultad de Ciencias Económicas, Empresariales y Turismo",
        dept: "Departamento de Economía y Dirección de Empresas",
        email: "sergey.kazakov@uah.es",
      },
      {
        name: "Patricia Durán Álamo",
        title: "Profesora Ayudante Doctora",
        faculty: "Facultad de Ciencias Económicas, Empresariales y Turismo",
        dept: "Departamento de Economía y Dirección de Empresas",
        email: "patricia.duran@uah.es",
      },
    ],
  },

  en: {
    title: "UAH Marketing Lab",
    subtitle: "Interactive applications suite for innovative marketing education",
    heroDescription:
      "Each application is a mini-lab to practice key marketing concepts with data and simulations.",
    viewManual: "View teaching manual",
    contact: "Contact",

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
      "UAH · Department of Marketing (Authors: Dr. Pedro Cuesta Valiño, Dr. Sergey Kazakov, Dr. Patricia Durán Álamo) · © 2025–2027",

    contactSectionTitle: "Contact",
    contactSectionSubtitle: "Academic team responsible for the project",

    contacts: [
      {
        name: "Pedro Cuesta Valiño",
        title: "Full Professor",
        faculty: "Faculty of Economics, Business and Tourism",
        dept: "Department of Economics and Business Administration",
        email: "pedro.cuesta@uah.es",
      },
      {
        name: "Sergey Kazakov",
        title: "Assistant Professor (PhD)",
        faculty: "Faculty of Economics, Business and Tourism",
        dept: "Department of Economics and Business Administration",
        email: "sergey.kazakov@uah.es",
      },
      {
        name: "Patricia Durán Álamo",
        title: "Assistant Professor (PhD)",
        faculty: "Faculty of Economics, Business and Tourism",
        dept: "Department of Economics and Business Administration",
        email: "patricia.duran@uah.es",
      },
    ],
  },
};

export function getInitialLang() {
  const stored = window.localStorage.getItem("uah_lab_lang");
  if (stored === LANGS.ES || stored === LANGS.EN) {
    return stored;
  }
  return LANGS.ES;
}