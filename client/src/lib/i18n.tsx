import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es";

type Translations = {
  nav: {
    projects: string;
    about: string;
    skills: string;
    contact: string;
    letsTalk: string;
  };
  hero: {
    greeting: string;
    description: string;
    viewWork: string;
    contactMe: string;
    roles: string[];
  };
  experience: {
    title: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    viewCase: string;
  };
  process: {
    eyebrow: string;
    title: string;
    steps: {
      discovery: { title: string; description: string };
      ideation: { title: string; description: string };
      design: { title: string; description: string };
      testing: { title: string; description: string };
      delivery: { title: string; description: string };
    };
  };
  about: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    downloadCv: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    categories: {
      design: string;
      aiTools: string;
      development: string;
    };
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    emailLabel: string;
    bookCall: string;
    form: {
      name: string;
      email: string;
      type: string;
      typePlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      types: {
        uiux: string;
        web: string;
        motion: string;
        branding: string;
      };
    };
  };
  footer: {
    rights: string;
  };
  projectDetail: {
    client: string;
    role: string;
    year: string;
    challenge: string;
    solution: string;
    results: string;
    nextProject: string;
    prevProject: string;
    visitLive: string;
    overview: string;
  };
};

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      projects: "Projects",
      about: "About",
      skills: "Skills",
      contact: "Contact",
      letsTalk: "Let's Talk",
    },
    hero: {
      greeting: "Hello, I'm",
      description: "Designing digital experiences that impact. I combine minimalist aesthetics with functional problem-solving to create products people love.",
      viewWork: "View My Work",
      contactMe: "Contact Me",
      roles: ["UX/UI Designer", "Frontend Developer", "Product Designer"],
    },
    experience: {
      title: "Companies I've collaborated with",
    },
    projects: {
      eyebrow: "Selected Works",
      title: "Featured Projects",
      viewCase: "View Case Study",
    },
    process: {
      eyebrow: "How I Work",
      title: "My Process",
      steps: {
        discovery: { title: "Discovery", description: "Understanding your goals, audience, and market position." },
        ideation: { title: "Ideation", description: "Brainstorming concepts and creating low-fidelity wireframes." },
        design: { title: "Design", description: "Crafting high-fidelity visuals and interactive prototypes." },
        testing: { title: "Testing", description: "Validating decisions with real users and iterating." },
        delivery: { title: "Delivery", description: "Handing over pixel-perfect assets and documentation." },
      },
    },
    about: {
      eyebrow: "About Me",
      title: "Design with purpose and passion",
      p1: "Hi, I'm Alex Moreno. With over 5 years of experience in digital design, I've helped startups and established brands create meaningful connections with their users through clean, intuitive interfaces.",
      p2: "My philosophy is simple: Design should not only look good but work seamlessly. I believe in minimalism as a tool for clarity, removing the unnecessary to focus on what truly matters.",
      p3: "When I'm not pixel-pushing in Figma, you can find me exploring architectural photography or experimenting with creative coding.",
      downloadCv: "Download CV",
    },
    skills: {
      eyebrow: "Expertise",
      title: "Tools & Technologies",
      categories: {
        design: "Design",
        aiTools: "AI Tools",
        development: "Development",
      },
    },
    contact: {
      eyebrow: "Get in Touch",
      title: "Have a project in mind?",
      description: "Let's talk about how I can help you create the next big thing. I'm currently open for new opportunities.",
      emailLabel: "Email me at",
      bookCall: "Book a call",
      form: {
        name: "Name",
        email: "Email",
        type: "Project Type",
        typePlaceholder: "Select a category",
        message: "Message",
        messagePlaceholder: "Tell me about your project goals...",
        submit: "Send Message",
        types: {
          uiux: "UI/UX Design",
          web: "Web Development",
          motion: "Motion Graphics",
          branding: "Branding",
        },
      },
    },
    footer: {
      rights: "All rights reserved.",
    },
    projectDetail: {
      client: "Client",
      role: "Role",
      year: "Year",
      challenge: "The Challenge",
      solution: "The Solution",
      results: "Results",
      nextProject: "Next Project",
      prevProject: "Previous Project",
      visitLive: "Visit Live Site",
      overview: "Overview",
    },
  },
  es: {
    nav: {
      projects: "Proyectos",
      about: "Sobre mí",
      skills: "Habilidades",
      contact: "Contacto",
      letsTalk: "Hablemos",
    },
    hero: {
      greeting: "Hola, soy",
      description: "Diseñando experiencias digitales que impactan. Combino estética minimalista con resolución funcional de problemas para crear productos que la gente ama.",
      viewWork: "Ver mi trabajo",
      contactMe: "Contáctame",
      roles: ["UX/UI Designer", "Frontend Developer", "Product Designer"],
    },
    experience: {
      title: "Empresas con las que he colaborado",
    },
    projects: {
      eyebrow: "Trabajos Seleccionados",
      title: "Proyectos Destacados",
      viewCase: "Ver Caso de Estudio",
    },
    process: {
      eyebrow: "Cómo trabajo",
      title: "Mi Proceso",
      steps: {
        discovery: { title: "Descubrimiento", description: "Entendiendo tus objetivos, audiencia y posición en el mercado." },
        ideation: { title: "Ideación", description: "Lluvia de ideas y creación de wireframes de baja fidelidad." },
        design: { title: "Diseño", description: "Creando visuales de alta fidelidad y prototipos interactivos." },
        testing: { title: "Pruebas", description: "Validando decisiones con usuarios reales e iterando." },
        delivery: { title: "Entrega", description: "Entregando activos pixel-perfect y documentación." },
      },
    },
    about: {
      eyebrow: "Sobre Mí",
      title: "Diseño con propósito y pasión",
      p1: "Hola, soy Alex Moreno. Con más de 5 años de experiencia en diseño digital, he ayudado a startups y marcas establecidas a crear conexiones significativas con sus usuarios a través de interfaces limpias e intuitivas.",
      p2: "Mi filosofía es simple: El diseño no solo debe verse bien, sino funcionar a la perfección. Creo en el minimalismo como herramienta para la claridad, eliminando lo innecesario para enfocarse en lo que realmente importa.",
      p3: "Cuando no estoy diseñando en Figma, puedes encontrarme explorando fotografía arquitectónica o experimentando con código creativo.",
      downloadCv: "Descargar CV",
    },
    skills: {
      eyebrow: "Experiencia",
      title: "Herramientas y Tecnologías",
      categories: {
        design: "Diseño",
        aiTools: "Herramientas IA",
        development: "Desarrollo",
      },
    },
    contact: {
      eyebrow: "Contáctame",
      title: "¿Tienes un proyecto en mente?",
      description: "Hablemos sobre cómo puedo ayudarte a crear algo grande. Actualmente estoy abierto a nuevas oportunidades.",
      emailLabel: "Envíame un correo",
      bookCall: "Agenda una llamada",
      form: {
        name: "Nombre",
        email: "Email",
        type: "Tipo de Proyecto",
        typePlaceholder: "Selecciona una categoría",
        message: "Mensaje",
        messagePlaceholder: "Cuéntame sobre los objetivos de tu proyecto...",
        submit: "Enviar Mensaje",
        types: {
          uiux: "Diseño UI/UX",
          web: "Desarrollo Web",
          motion: "Motion Graphics",
          branding: "Branding",
        },
      },
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
    projectDetail: {
      client: "Cliente",
      role: "Rol",
      year: "Año",
      challenge: "El Desafío",
      solution: "La Solución",
      results: "Resultados",
      nextProject: "Siguiente Proyecto",
      prevProject: "Proyecto Anterior",
      visitLive: "Ver Sitio en Vivo",
      overview: "Resumen",
    },
  },
};

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
} | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
