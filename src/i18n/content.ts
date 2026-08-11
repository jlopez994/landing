export const languages = ["es", "en"] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = "es";

export const EMAIL = "julianlopezhervas@gmail.com";

export const SOCIAL = [
  { label: "github", href: "https://github.com/jlopez994" },
  { label: "linkedin", href: "https://www.linkedin.com/in/jlopezdev/" },
  { label: "telegram", href: "https://telegram.me/jlopez_dev" },
];

/** Href for a locale, given Astro's prefixDefaultLocale: false routing. */
export const localeHref = (lang: Lang) => (lang === defaultLang ? "/" : `/${lang}/`);

export const content = {
  es: {
    meta: {
      title: "Julián López Hervás — Full-Stack Senior",
      description:
        "Ingeniero full-stack senior en Toledo/Madrid. Siete años en fintech y blockchain con Angular y Spring Boot. Proyectos propios de finanzas y deporte con Next.js y NestJS, además de apps local-first y ML en el edge.",
    },
    nav: {
      rail: [
        { id: "top", label: "inicio" },
        { id: "work", label: "proyectos" },
        { id: "exp", label: "experiencia" },
        { id: "stack", label: "stack" },
        { id: "contact", label: "contacto" },
      ],
      links: [
        { href: "#work", label: "proyectos" },
        { href: "#exp", label: "experiencia" },
        { href: "#stack", label: "stack" },
      ],
      cta: "contacto",
      railLabel: "Progreso de sección",
      navLabel: "Navegación principal",
      langLabel: "Cambiar idioma",
    },
    hero: {
      badge: "abierto a nuevos proyectos",
      title: "Siete años de ingeniería full-stack. Ahora,",
      titleAccent: "a velocidad de IA",
      lede: "Julián López Hervás. Fintech, blockchain, seguros y sector público: Angular y Spring Boot en Ayesa, proyectos propios de finanzas y deporte con Next.js y NestJS, y apps local-first que funcionan sin backend. Trabajo con agentes de IA integrados en el flujo diario, del diseño al despliegue.",
      cta: "ver proyectos →",
      stats: [
        { v: "7+", k: "años desarrollando" },
        { v: "4+", k: "años en Ibermática · Ayesa" },
        { v: "2", k: "productos propios publicados" },
        { v: "5", k: "sectores en producción" },
      ],
    },
    projects: {
      heading: "Proyectos",
      meta: "cliente y personales",
      // Newest first
      items: [
        {
          year: "2026",
          scope: "proyecto personal",
          metric: "sin backend",
          title: "eclipsum — compañero de eclipses solares",
          body: "App Android para el eclipse total del 12 de agosto de 2026 sobre España. Calcula contactos C1–C4, obscuración y duración de la totalidad para cualquier coordenada, 100 % en el dispositivo con astronomy-engine. Mapa de la banda de totalidad, alertas locales exactas por contacto, nubosidad cacheada offline y un modo eclipse a pantalla completa que avisa de cuándo ponerse y quitarse las gafas.",
          tags: ["React Native", "Expo", "TypeScript", "astronomy-engine", "Leaflet", "Firebase"],
          href: "https://github.com/jlopez994/eclipsum",
        },
        {
          year: "2026",
          scope: "proyecto personal",
          metric: "wake word propia",
          title: "rufus — asistente de voz privado",
          body: "Asistente que nunca envía tu audio a ningún sitio. Wake word «Rufus» entrenada con openWakeWord combinando voces sintéticas en español y grabaciones reales, exportada a ONNX y ejecutándose entera en el edge. El pipeline de entrenamiento es un notebook de Colab reproducible.",
          tags: ["Python", "openWakeWord", "ONNX", "Piper TTS", "audio"],
          href: "https://github.com/jlopez994/rufus-playbooks",
        },
        {
          year: "2024 — hoy",
          scope: "Ayesa",
          metric: "sector público",
          title: "Gestión de expedientes de evaluación docente — EHU",
          body: "Aplicación para la Universidad del País Vasco (EHU) que gestiona los expedientes de evaluación del profesorado. Frontend en Angular y backend en Java con Spring Boot, desplegado sobre Kubernetes.",
          tags: ["Angular", "Java", "Spring Boot", "PostgreSQL", "Kubernetes", "Helm", "SonarQube"],
          href: null,
        },
        {
          year: "2024 — hoy",
          scope: "Ayesa",
          metric: "multi-perfil",
          title: "Panel de administración — Mutua Montañesa",
          body: "Panel de gestión para una mutua colaboradora con la Seguridad Social, con áreas y permisos diferenciados para empresas, asesorías y usuarios. Angular en el frontend, Java con Spring Boot en el backend y despliegue sobre Kubernetes.",
          tags: ["Angular", "Java", "Spring Boot", "PostgreSQL", "Kubernetes", "Grafana"],
          href: null,
        },
      ],
    },
    experience: {
      heading: "Experiencia",
      meta: "2018 — hoy",
      roles: [
        {
          years: "2024 — hoy",
          role: "Analista Programador Senior",
          company: "Ayesa",
          stack: "Frontend y backend de aplicaciones críticas con Angular y Spring Boot, siguiendo principios SOLID.",
        },
        {
          years: "2022 — 2024",
          role: "Socio fundador y desarrollador principal",
          company: "Asistencia y Gestión Deportiva",
          stack: "Plataforma de gestión deportiva sobre microservicios cloud: Next.js, NestJS, MySQL, MongoDB, Redis y Socket.IO.",
        },
        {
          years: "2022 — 2024",
          role: "Analista Programador Senior",
          company: "Ibermática",
          stack: "Angular sobre monorepo NX con NGRX y AWS, despliegue con GitLab CI en un equipo de cuatro frontends.",
        },
        {
          years: "2020 — 2021",
          role: "Desarrollador Full-Stack",
          company: "BOLTIA",
          stack: "Referente técnico y mentor de un perfil junior. Angular 11, Node.js y despliegues Linux con PM2.",
        },
        {
          years: "2018 — 2021",
          role: "Desarrollador Full-Stack freelance",
          company: "Blockchain y criptomonedas",
          stack: "Desarrollador principal de un producto cripto: Angular 7→12, Node.js, Docker Swarm y GitLab CI.",
        },
      ],
      education: [
        "Ingeniería Informática · Universidad Rey Juan Carlos (2015 — 2020)",
        "Técnico Superior en Desarrollo de Aplicaciones Web (2013 — 2015)",
        "Inglés · nivel profesional completo",
      ],
    },
    stack: {
      heading: "Stack",
      meta: "día a día",
      groups: [
        { label: "ia", items: ["Claude Code", "APIs de LLM", "RAG y embeddings", "MCP", "ONNX"] },
        { label: "lenguajes", items: ["TypeScript", "JavaScript", "Java", "Python", "SQL"] },
        { label: "frontend", items: ["Angular", "NGRX", "React", "Next.js", "React Native", "Astro"] },
        { label: "backend", items: ["Spring Boot", "NestJS", "Node.js", "Kafka", "RabbitMQ", "Socket.IO"] },
        { label: "datos", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Firebase"] },
        { label: "contenedores", items: ["Docker", "Kubernetes", "Helm", "ArgoCD", "Debian"] },
        { label: "cloud y ci", items: ["AWS", "Azure", "Terraform", "GitLab CI", "Jenkins"] },
        { label: "calidad", items: ["Jest", "Playwright", "SonarQube", "Grafana", "Prometheus"] },
      ],
    },
    contact: {
      heading: "¿Trabajamos juntos?",
      body: "Respondo en menos de 24 horas. Cuéntame el problema, no la solución.",
      location: "Toledo · Madrid · UTC+2",
    },
  },

  en: {
    meta: {
      title: "Julián López Hervás — Senior Full-Stack Engineer",
      description:
        "Senior full-stack engineer near Madrid, Spain. Seven years in fintech and blockchain with Angular and Spring Boot. Personal finance and sports projects in Next.js and NestJS, plus local-first apps and edge ML.",
    },
    nav: {
      rail: [
        { id: "top", label: "start" },
        { id: "work", label: "work" },
        { id: "exp", label: "experience" },
        { id: "stack", label: "stack" },
        { id: "contact", label: "contact" },
      ],
      links: [
        { href: "#work", label: "work" },
        { href: "#exp", label: "experience" },
        { href: "#stack", label: "stack" },
      ],
      cta: "contact",
      railLabel: "Section progress",
      navLabel: "Main navigation",
      langLabel: "Change language",
    },
    hero: {
      badge: "open to new projects",
      title: "Seven years of full-stack engineering. Now,",
      titleAccent: "at AI speed",
      lede: "Julián López Hervás. Fintech, blockchain, insurance and public sector: Angular and Spring Boot at Ayesa, my own finance and sports projects in Next.js and NestJS, and local-first apps that run with no backend at all. I work with AI agents wired into my daily flow, from design to deployment.",
      cta: "see projects →",
      stats: [
        { v: "7+", k: "years shipping software" },
        { v: "4+", k: "years at Ibermática · Ayesa" },
        { v: "2", k: "products of my own released" },
        { v: "5", k: "sectors in production" },
      ],
    },
    projects: {
      heading: "Work",
      meta: "client & personal",
      // Newest first
      items: [
        {
          year: "2026",
          scope: "personal project",
          metric: "no backend",
          title: "eclipsum — solar eclipse companion",
          body: "Android app for the total eclipse of August 12, 2026 over Spain. It computes C1–C4 contacts, obscuration and totality duration for any coordinate, 100% on-device with astronomy-engine. Path-of-totality map, exact local alerts per contact, cloud cover cached offline, and a full-screen eclipse mode that tells you when to put your glasses on and take them off.",
          tags: ["React Native", "Expo", "TypeScript", "astronomy-engine", "Leaflet", "Firebase"],
          href: "https://github.com/jlopez994/eclipsum",
        },
        {
          year: "2026",
          scope: "personal project",
          metric: "custom wake word",
          title: "rufus — private voice assistant",
          body: "An assistant that never sends your audio anywhere. The “Rufus” wake word is trained with openWakeWord, mixing Spanish synthetic voices with real recordings, exported to ONNX and running entirely on the edge. The training pipeline is a reproducible Colab notebook.",
          tags: ["Python", "openWakeWord", "ONNX", "Piper TTS", "audio"],
          href: "https://github.com/jlopez994/rufus-playbooks",
        },
        {
          year: "2024 — now",
          scope: "Ayesa",
          metric: "public sector",
          title: "Faculty evaluation case management — EHU",
          body: "Application for the University of the Basque Country (EHU) that manages faculty evaluation case files. Angular on the frontend, Java with Spring Boot on the backend, deployed on Kubernetes.",
          tags: ["Angular", "Java", "Spring Boot", "PostgreSQL", "Kubernetes", "Helm", "SonarQube"],
          href: null,
        },
        {
          year: "2024 — now",
          scope: "Ayesa",
          metric: "multi-role",
          title: "Admin panel — Mutua Montañesa",
          body: "Management panel for a Spanish occupational insurance mutual, with separate areas and permissions for companies, advisory firms and individual users. Angular on the frontend, Java with Spring Boot on the backend and Kubernetes deployments.",
          tags: ["Angular", "Java", "Spring Boot", "PostgreSQL", "Kubernetes", "Grafana"],
          href: null,
        },
      ],
    },
    experience: {
      heading: "Experience",
      meta: "2018 — now",
      roles: [
        {
          years: "2024 — now",
          role: "Senior Software Engineer",
          company: "Ayesa",
          stack: "Frontend and backend on business-critical apps with Angular and Spring Boot, following SOLID principles.",
        },
        {
          years: "2022 — 2024",
          role: "Co-founder & lead developer",
          company: "Asistencia y Gestión Deportiva",
          stack: "Sports management platform on cloud microservices: Next.js, NestJS, MySQL, MongoDB, Redis and Socket.IO.",
        },
        {
          years: "2022 — 2024",
          role: "Senior Software Engineer",
          company: "Ibermática",
          stack: "Angular on an NX monorepo with NGRX and AWS, shipped through GitLab CI in a four-person frontend team.",
        },
        {
          years: "2020 — 2021",
          role: "Full-Stack Developer",
          company: "BOLTIA",
          stack: "Technical lead and mentor to a junior developer. Angular 11, Node.js and Linux deployments with PM2.",
        },
        {
          years: "2018 — 2021",
          role: "Freelance Full-Stack Developer",
          company: "Blockchain & crypto",
          stack: "Lead developer on a crypto product: Angular 7→12, Node.js, Docker Swarm and GitLab CI.",
        },
      ],
      education: [
        "BSc Computer Engineering · Universidad Rey Juan Carlos (2015 — 2020)",
        "Higher Technician in Web Application Development (2013 — 2015)",
        "English · full professional proficiency",
      ],
    },
    stack: {
      heading: "Stack",
      meta: "day to day",
      groups: [
        { label: "ai", items: ["Claude Code", "LLM APIs", "RAG & embeddings", "MCP", "ONNX"] },
        { label: "languages", items: ["TypeScript", "JavaScript", "Java", "Python", "SQL"] },
        { label: "frontend", items: ["Angular", "NGRX", "React", "Next.js", "React Native", "Astro"] },
        { label: "backend", items: ["Spring Boot", "NestJS", "Node.js", "Kafka", "RabbitMQ", "Socket.IO"] },
        { label: "data", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Firebase"] },
        { label: "containers", items: ["Docker", "Kubernetes", "Helm", "ArgoCD", "Debian"] },
        { label: "cloud & ci", items: ["AWS", "Azure", "Terraform", "GitLab CI", "Jenkins"] },
        { label: "quality", items: ["Jest", "Playwright", "SonarQube", "Grafana", "Prometheus"] },
      ],
    },
    contact: {
      heading: "Shall we work together?",
      body: "I reply within 24 hours. Tell me the problem, not the solution.",
      location: "Toledo · Madrid · UTC+2",
    },
  },
} as const;

export type Content = (typeof content)[Lang];
