export const languages = ["es", "en"] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = "es";

export const NAME = "Julián López Hervás";
export const EMAIL = "julianlopezhervas@gmail.com";

export const SOCIAL = [
  { label: "github", href: "https://github.com/jlopez994" },
  { label: "linkedin", href: "https://www.linkedin.com/in/jlopezdev/" },
  { label: "telegram", href: "https://telegram.me/jlopez_dev" },
];

/** Href for a locale, given Astro's prefixDefaultLocale: false routing. */
export const localeHref = (lang: Lang) => (lang === defaultLang ? "/" : `/${lang}/`);

/** OpenGraph locale tags, kept beside the routing they describe. */
export const OG_LOCALE: Record<Lang, string> = { es: "es_ES", en: "en_US" };

/** Each language named in itself, for the switcher's accessible names. */
export const LANG_NAMES: Record<Lang, string> = { es: "Español", en: "English" };

const locales = {
  es: {
    meta: {
      title: "Julián López Hervás — Full-Stack Senior",
      description:
        "Ingeniero full-stack senior en Toledo y Madrid. Más de siete años diseñando, construyendo y desplegando aplicaciones web y móvil para fintech, seguros, sanidad y sector público con Angular, Spring Boot, React y Node; productos propios local-first, ML en el dispositivo y agentes de IA en el flujo diario.",
      jobTitle: "Ingeniero de software full-stack senior",
      ogAlt: "Julián López Hervás — Ingeniero full-stack senior",
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
      skip: "Saltar al contenido",
    },
    hero: {
      badge: "abierto a nuevos proyectos",
      title: "Siete años de ingeniería full-stack. Ahora,",
      titleAccent: "a velocidad de IA",
      lede: "Soy Julián López Hervás, ingeniero full-stack senior en Toledo y Madrid. Más de siete años llevando aplicaciones web y móvil a producción de principio a fin: arquitectura, frontend, backend, despliegue y trato directo con el cliente. Hoy, sistemas críticos de seguros, sanidad y sector público en Ayesa; antes, fintech, blockchain y una startup propia. Y productos propios que funcionan sin backend, con agentes de IA en cada paso del flujo.",
      cta: "ver proyectos →",
      stats: [
        { v: "7+", k: "años llevando software a producción" },
        { v: "4+", k: "años en Ibermática · Ayesa" },
        { v: "3", k: "productos propios en marcha" },
        { v: "6", k: "sectores en producción" },
      ],
    },
    projects: {
      heading: "Proyectos",
      meta: "últimos proyectos",
      // Newest first
      items: [
        {
          year: "2026 — hoy",
          scope: "Ayesa",
          metric: "sanidad pública",
          title: "Sistema hospitalario integral — Osakidetza",
          body: "Sistema de información hospitalario del Servicio Vasco de Salud, en uso diario: admisión, gestión de pacientes, bloque quirúrgico, farmacia y el resto del circuito asistencial en una sola aplicación clínica con años de historia. Evoluciono el módulo de bloque quirúrgico —la solicitud de intervención de un paciente y su seguimiento hasta el quirófano— con nuevas funcionalidades, refactor por módulos e incidencias de producción, sin parar nunca el servicio.",
          tags: ["Angular", "TypeScript", "Java", "Spring"],
          href: null,
          arch: {
            label: "Circuito asistencial",
            nodes: [
              { t: "admisión del paciente", k: "entrada" },
              { t: "gestión de pacientes", k: "historia" },
              { t: "solicitud de intervención", k: "quirófano" },
              { t: "farmacia hospitalaria", k: "dispensación" },
              { t: "evolución en producción", k: "mantenimiento" },
            ],
          },
        },
        {
          year: "2026 — hoy",
          scope: "producto propio · IberStack",
          metric: "escala a cero",
          title: "PxNara — licencias y backend de una suite de pixel art",
          body: "Suite de creación de pixel art en C++ —modelado 3D, render a píxel y editor— que construyo con Fran Llopis bajo la marca IberStack. Diseñé y llevo todo el plano de control del producto: cuentas y prueba gratuita, licencias y pagos con Stripe, estudios con asientos e invitaciones, sincronización de proyectos con GitHub, el panel del operador y el login seguro desde la app de escritorio. Arquitectura hexagonal que escala a cero: ningún servidor encendido mientras nadie compra, y cada push a main despliega solo.",
          tags: ["TypeScript", "Fastify", "Next.js", "Firebase", "Firestore", "Stripe", "Cloud Run"],
          href: "https://pxnara.iberstack.com",
          arch: {
            label: "Plano de control",
            nodes: [
              { t: "login desde el escritorio", k: "oauth2 pkce" },
              { t: "licencia y capacidades", k: "lease firmado" },
              { t: "cobro y portal", k: "stripe" },
              { t: "estudios, asientos, pedidos", k: "firestore" },
              { t: "despliegue por push", k: "cloud run" },
            ],
          },
        },
        {
          year: "2026",
          scope: "proyecto personal",
          metric: "sin backend",
          title: "Eclipsum — compañero de eclipses solares",
          body: "App Android para vivir un eclipse solar, nacida para el total que cruzó España el 12 de agosto de 2026. Calcula los contactos C1–C4, la obscuración y la duración de la totalidad para cualquier coordenada sin servidor: todo en el dispositivo. El mapa muestra la banda de totalidad y el punto más cercano donde verla completa; el modo eclipse avisa de cuándo ponerse y quitarse las gafas, y un catálogo cubre los eclipses de los próximos ocho años. Concebida, diseñada y construida en solitario, de la efeméride al APK.",
          tags: ["React Native", "Expo", "TypeScript", "astronomy-engine", "Leaflet", "Firebase"],
          href: "https://github.com/jlopez994/eclipsum",
          arch: {
            label: "Cálculo en el dispositivo",
            nodes: [
              { t: "coordenada y fecha", k: "entrada" },
              { t: "efemérides C1–C4", k: "astronomy-engine" },
              { t: "obscuración y duración", k: "cálculo local" },
              { t: "banda de totalidad", k: "mapa" },
              { t: "aviso de gafas", k: "alerta local" },
            ],
          },
        },
        {
          year: "2026",
          scope: "proyecto personal",
          metric: "wake word propia",
          title: "Rufus — asistente de voz privado",
          body: "Asistente que nunca envía tu audio a ningún sitio. La wake word «Rufus» está entrenada desde cero mezclando voces sintéticas en español con grabaciones reales, y se ejecuta entera en el dispositivo. El pipeline de entrenamiento es un notebook de Colab reproducible, publicado para que cualquiera entrene la suya.",
          tags: ["Python", "openWakeWord", "ONNX", "Piper TTS", "audio"],
          href: "https://github.com/jlopez994/rufus-playbooks",
          arch: {
            label: "Pipeline de wake word",
            nodes: [
              { t: "voces sintéticas y reales", k: "dataset" },
              { t: "entrenamiento", k: "openWakeWord" },
              { t: "modelo exportado", k: "onnx" },
              { t: "escucha continua", k: "sin red" },
              { t: "respuesta hablada", k: "piper tts" },
            ],
          },
        },
        {
          year: "2024 — hoy",
          scope: "Ayesa",
          metric: "sector público",
          title: "Gestión de expedientes de evaluación docente — EHU",
          body: "Aplicación para la Universidad del País Vasco (UPV/EHU) que gestiona la evaluación de la actividad docente del profesorado. Cada expediente avanza por etapas, se asigna a uno o varios evaluadores, admite alegaciones y cierra con su informe; el seguimiento por estados muestra en qué punto está cada uno. Full-stack e interlocutor técnico con la universidad: frontend, lógica de estados, scripts de datos y puesta en producción.",
          tags: ["Angular", "Java", "Spring Boot", "Oracle", "Kubernetes", "Helm", "SonarQube"],
          href: null,
          arch: {
            label: "Expedientes docentes",
            nodes: [
              { t: "alta y consulta", k: "angular" },
              { t: "gestión de la evaluación", k: "spring boot" },
              { t: "expedientes y estados", k: "oracle" },
              { t: "despliegue", k: "kubernetes · helm" },
              { t: "calidad del código", k: "sonarqube" },
            ],
          },
        },
        {
          year: "2022 — 2024",
          scope: "Ibermática · Ayesa",
          metric: "multi-perfil",
          title: "Panel de administración — Mutua Montañesa",
          body: "Panel desde el que una mutua colaboradora con la Seguridad Social lleva su operativa completa. Empresas asociadas, asesorías que gestionan en su nombre y trabajadores entran cada uno a su propia área, con permisos y datos separados sobre una misma base de código. Responsable del frontend completo: arquitectura del monorepo, estado global, componentes compartidos y despliegue continuo, en un equipo de cuatro frontends.",
          tags: ["Angular", "NGRX", "NX", "Spring Boot", "AWS", "Kubernetes", "GitLab CI"],
          href: null,
          arch: {
            label: "Panel multi-perfil",
            nodes: [
              { t: "empresas · asesorías · usuarios", k: "acceso" },
              { t: "gestiones del panel", k: "angular" },
              { t: "áreas y permisos", k: "spring boot" },
              { t: "datos separados por perfil", k: "backend" },
              { t: "despliegue", k: "aws · gitlab ci" },
            ],
          },
        },
      ],
    },
    experience: {
      heading: "Experiencia",
      meta: "2018 — hoy",
      roles: [
        {
          years: "2022 — hoy",
          role: "Analista Programador Senior",
          company: "Ayesa",
          stack: "Desde 2022 en Ibermática, hoy Ayesa. Frontend senior y full-stack en sistemas críticos para seguros, universidad y sanidad pública —Mutua Montañesa, UPV/EHU y Osakidetza—: arquitectura de frontends Angular con NX y NGRX, servicios Spring Boot, despliegue con Kubernetes y GitLab CI, calidad con SonarQube y trato directo con el cliente.",
        },
        {
          years: "2022 — 2024",
          role: "Socio fundador y desarrollador principal",
          company: "Asistencia y Gestión Deportiva",
          stack: "Plataforma para un servicio de asesoramiento en apuestas deportivas. Diseñé la arquitectura desde cero y la llevé a producción: microservicios en la nube con Next.js y NestJS, alta y gestión de clientes, suscripciones y avisos en tiempo real con Redis y Socket.IO.",
        },
        {
          years: "2020 — 2021",
          role: "Desarrollador Full-Stack",
          company: "BOLTIA",
          stack: "Referente técnico del equipo y mentor de un perfil junior. Angular 11, Node.js y despliegues Linux con PM2, de la revisión de código a la puesta en producción.",
        },
        {
          years: "2018 — 2021",
          role: "Desarrollador Full-Stack freelance",
          company: "Blockchain y criptomonedas",
          stack: "Desarrollador principal de una criptomoneda propia, fork de Ethereum, y de todo su ecosistema web: wallet, back-office y web pública. Angular 7→12, Node.js, Docker Swarm y GitLab CI a lo largo de tres años.",
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
        { label: "backend", items: ["Spring Boot", "NestJS", "Fastify", "Node.js", "Kafka", "RabbitMQ", "Socket.IO"] },
        { label: "datos", items: ["PostgreSQL", "Oracle", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Firestore"] },
        { label: "contenedores", items: ["Docker", "Kubernetes", "Helm", "ArgoCD", "Debian"] },
        { label: "cloud y ci", items: ["AWS", "Azure", "Google Cloud", "Firebase", "Terraform", "GitLab CI", "Jenkins"] },
        { label: "calidad", items: ["Jest", "Vitest", "Playwright", "SonarQube", "Grafana", "Prometheus"] },
      ],
    },
    contact: {
      heading: "¿Trabajamos juntos?",
      body: "Proyecto a medida, refuerzo senior para tu equipo o una segunda opinión técnica. Respondo en menos de 24 horas: cuéntame el problema, no la solución.",
      location: "Toledo · Madrid · CET",
    },
  },

  en: {
    meta: {
      title: "Julián López Hervás — Senior Full-Stack Engineer",
      description:
        "Senior full-stack engineer in Toledo and Madrid, Spain. Seven-plus years designing, building and shipping web and mobile applications for fintech, insurance, healthcare and the public sector with Angular, Spring Boot, React and Node; local-first products, on-device ML and AI agents in the daily flow.",
      jobTitle: "Senior full-stack software engineer",
      ogAlt: "Julián López Hervás — Senior full-stack engineer",
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
      skip: "Skip to content",
    },
    hero: {
      badge: "open to new projects",
      title: "Seven years of full-stack engineering. Now,",
      titleAccent: "at AI speed",
      lede: "I'm Julián López Hervás, a senior full-stack engineer in Toledo and Madrid, Spain. Seven-plus years taking web and mobile applications to production end to end: architecture, frontend, backend, deployment and the conversation with the client. Today, business-critical systems for insurance, healthcare and the public sector at Ayesa; before that, fintech, blockchain and a startup of my own. Plus products of my own that run with no backend, with AI agents in every step of the flow.",
      cta: "see projects →",
      stats: [
        { v: "7+", k: "years taking software to production" },
        { v: "4+", k: "years at Ibermática · Ayesa" },
        { v: "3", k: "products of my own, live" },
        { v: "6", k: "sectors in production" },
      ],
    },
    projects: {
      heading: "Work",
      meta: "latest projects",
      // Newest first
      items: [
        {
          year: "2026 — now",
          scope: "Ayesa",
          metric: "public healthcare",
          title: "Integrated hospital system — Osakidetza",
          body: "Hospital information system for the Basque Health Service, in daily use: admissions, patient management, surgical block, pharmacy and the rest of the care pathway in a single clinical application with years of history. I evolve the surgical block module — a patient's surgery request and its tracking through to the operating theatre — with new features, module-by-module refactoring and production incidents, without ever stopping the service.",
          tags: ["Angular", "TypeScript", "Java", "Spring"],
          href: null,
          arch: {
            label: "Care pathway",
            nodes: [
              { t: "patient admission", k: "intake" },
              { t: "patient management", k: "record" },
              { t: "surgery request", k: "theatre" },
              { t: "hospital pharmacy", k: "dispensing" },
              { t: "evolving in production", k: "maintenance" },
            ],
          },
        },
        {
          year: "2026 — now",
          scope: "own product · IberStack",
          metric: "scales to zero",
          title: "PxNara — licensing and backend for a pixel-art suite",
          body: "Pixel-art creation suite in C++ — 3D modelling, pixel render and editor — I build with Fran Llopis under the IberStack brand. I designed and run the product's whole control plane: accounts and free trial, licences and payments through Stripe, studios with seats and invitations, project sync with GitHub, the operator panel and secure login from the desktop app. Hexagonal architecture that scales to zero: no server runs while nobody is buying, and every push to main deploys itself.",
          tags: ["TypeScript", "Fastify", "Next.js", "Firebase", "Firestore", "Stripe", "Cloud Run"],
          href: "https://pxnara.iberstack.com",
          arch: {
            label: "Control plane",
            nodes: [
              { t: "login from the desktop app", k: "oauth2 pkce" },
              { t: "licence and capabilities", k: "signed lease" },
              { t: "checkout and portal", k: "stripe" },
              { t: "studios, seats, orders", k: "firestore" },
              { t: "deploy on push", k: "cloud run" },
            ],
          },
        },
        {
          year: "2026",
          scope: "personal project",
          metric: "no backend",
          title: "Eclipsum — solar eclipse companion",
          body: "Android app for living through a solar eclipse, born for the total one that crossed Spain on August 12, 2026. It computes the C1–C4 contacts, obscuration and totality duration for any coordinate with no server: everything runs on the device. The map shows the path of totality and the nearest point to see it whole; eclipse mode tells you when to put your glasses on and take them off, and a catalogue covers the eclipses of the next eight years. Conceived, designed and built solo, from the ephemerides to the APK.",
          tags: ["React Native", "Expo", "TypeScript", "astronomy-engine", "Leaflet", "Firebase"],
          href: "https://github.com/jlopez994/eclipsum",
          arch: {
            label: "On-device computation",
            nodes: [
              { t: "coordinate and date", k: "input" },
              { t: "C1–C4 ephemerides", k: "astronomy-engine" },
              { t: "obscuration and duration", k: "local compute" },
              { t: "path of totality", k: "map" },
              { t: "glasses alert", k: "local alarm" },
            ],
          },
        },
        {
          year: "2026",
          scope: "personal project",
          metric: "custom wake word",
          title: "Rufus — private voice assistant",
          body: "An assistant that never sends your audio anywhere. The “Rufus” wake word is trained from scratch by mixing Spanish synthetic voices with real recordings, and runs entirely on the device. The training pipeline is a reproducible Colab notebook, published so anyone can train their own.",
          tags: ["Python", "openWakeWord", "ONNX", "Piper TTS", "audio"],
          href: "https://github.com/jlopez994/rufus-playbooks",
          arch: {
            label: "Wake word pipeline",
            nodes: [
              { t: "synthetic and real voices", k: "dataset" },
              { t: "training", k: "openWakeWord" },
              { t: "exported model", k: "onnx" },
              { t: "always-on listening", k: "no network" },
              { t: "spoken response", k: "piper tts" },
            ],
          },
        },
        {
          year: "2024 — now",
          scope: "Ayesa",
          metric: "public sector",
          title: "Faculty evaluation case management — EHU",
          body: "Application for the University of the Basque Country (UPV/EHU) that manages the evaluation of faculty teaching. Each case file moves through stages, is assigned to one or more evaluators, accepts appeals and closes with its report; status tracking shows where every file stands. Full-stack and technical point of contact for the university: frontend, state logic, data scripts and the road to production.",
          tags: ["Angular", "Java", "Spring Boot", "Oracle", "Kubernetes", "Helm", "SonarQube"],
          href: null,
          arch: {
            label: "Faculty case files",
            nodes: [
              { t: "filing and lookup", k: "angular" },
              { t: "evaluation handling", k: "spring boot" },
              { t: "case files and states", k: "oracle" },
              { t: "deployment", k: "kubernetes · helm" },
              { t: "code quality", k: "sonarqube" },
            ],
          },
        },
        {
          year: "2022 — 2024",
          scope: "Ibermática · Ayesa",
          metric: "multi-role",
          title: "Admin panel — Mutua Montañesa",
          body: "Panel from which a Spanish occupational insurance mutual runs its whole operation. Member companies, the advisory firms acting on their behalf and individual workers each enter their own area, with separate permissions and data on a single codebase. Owner of the whole frontend: monorepo architecture, global state, shared components and continuous deployment, in a team of four frontend developers.",
          tags: ["Angular", "NGRX", "NX", "Spring Boot", "AWS", "Kubernetes", "GitLab CI"],
          href: null,
          arch: {
            label: "Multi-role panel",
            nodes: [
              { t: "companies · advisors · users", k: "access" },
              { t: "panel operations", k: "angular" },
              { t: "areas and permissions", k: "spring boot" },
              { t: "data split per role", k: "backend" },
              { t: "deployment", k: "aws · gitlab ci" },
            ],
          },
        },
      ],
    },
    experience: {
      heading: "Experience",
      meta: "2018 — now",
      roles: [
        {
          years: "2022 — now",
          role: "Senior Software Engineer",
          company: "Ayesa",
          stack: "Since 2022 at Ibermática, now Ayesa. Senior frontend and full-stack on business-critical systems for insurance, university and public healthcare — Mutua Montañesa, UPV/EHU and Osakidetza: Angular frontend architecture with NX and NGRX, Spring Boot services, deployment with Kubernetes and GitLab CI, quality with SonarQube and direct contact with the client.",
        },
        {
          years: "2022 — 2024",
          role: "Co-founder & lead developer",
          company: "Asistencia y Gestión Deportiva",
          stack: "Platform for a sports-betting advisory service. I designed the architecture from scratch and took it to production: cloud microservices with Next.js and NestJS, client onboarding and management, subscriptions and real-time alerts with Redis and Socket.IO.",
        },
        {
          years: "2020 — 2021",
          role: "Full-Stack Developer",
          company: "BOLTIA",
          stack: "Technical reference for the team and mentor to a junior developer. Angular 11, Node.js and Linux deployments with PM2, from code review to production.",
        },
        {
          years: "2018 — 2021",
          role: "Freelance Full-Stack Developer",
          company: "Blockchain & crypto",
          stack: "Lead developer of a proprietary cryptocurrency forked from Ethereum and of its whole web ecosystem: wallet, back office and public site. Angular 7→12, Node.js, Docker Swarm and GitLab CI over three years.",
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
        { label: "backend", items: ["Spring Boot", "NestJS", "Fastify", "Node.js", "Kafka", "RabbitMQ", "Socket.IO"] },
        { label: "data", items: ["PostgreSQL", "Oracle", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Firestore"] },
        { label: "containers", items: ["Docker", "Kubernetes", "Helm", "ArgoCD", "Debian"] },
        { label: "cloud & ci", items: ["AWS", "Azure", "Google Cloud", "Firebase", "Terraform", "GitLab CI", "Jenkins"] },
        { label: "quality", items: ["Jest", "Vitest", "Playwright", "SonarQube", "Grafana", "Prometheus"] },
      ],
    },
    contact: {
      heading: "Shall we work together?",
      body: "A project built to spec, senior reinforcement for your team, or a second technical opinion. I reply within 24 hours: tell me the problem, not the solution.",
      location: "Toledo · Madrid · CET",
    },
  },
};

/**
 * Spanish is the reference shape — deliberately not `as const`, so the literal
 * strings widen and every locale is described by one structural type.
 */
export type Content = (typeof locales)["es"];

/**
 * The annotation *is* the parity check. A locale missing a key, or with a key
 * of the wrong shape, fails here rather than in whichever component happened to
 * read it; and widening `languages` fails here too, until the translation for
 * the new locale exists.
 */
export const content: Record<Lang, Content> = locales;
