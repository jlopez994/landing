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
      title: "Julián López Hervás — Full-Stack Senior e IA aplicada",
      description:
        "Ingeniero full-stack senior en Toledo y Madrid. Más de siete años diseñando, construyendo y desplegando aplicaciones web y móvil para fintech, seguros, sanidad y sector público con Angular, Spring Boot, React y Node. Integro IA en todo tipo de sistemas para automatizar procesos: agentes conectados por MCP, extracción de datos de documentos y flujos con LLM en producción.",
      jobTitle: "Ingeniero de software full-stack senior e IA aplicada",
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
      lede: "Soy Julián López Hervás, ingeniero full-stack senior en Toledo y Madrid. Más de siete años llevando aplicaciones web y móvil a producción de principio a fin: arquitectura, frontend, backend, despliegue y trato directo con el cliente. Hoy, sistemas críticos de seguros, sanidad y sector público en Ayesa; antes, fintech, blockchain y una startup propia. Y, cada vez más, integración de IA en sistemas que ya existen: agentes, extracción de documentos y automatizaciones que trabajan solas.",
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
      roleLabel: "mi papel",
      // Newest first
      items: [
        {
          year: "2026 — hoy",
          scope: "Ayesa",
          metric: "sanidad pública",
          title: "Sistema hospitalario integral — Osakidetza",
          body: "Sistema de información hospitalario del Servicio Vasco de Salud, en uso diario: admisión, gestión de pacientes, bloque quirúrgico, farmacia y el resto del circuito asistencial en una sola aplicación clínica con años de historia.",
          role: "Full-stack en el módulo de bloque quirúrgico · equipo de Ayesa",
          tasks: [
            "Desarrollo nuevas funcionalidades del bloque quirúrgico en Angular y Spring: registro de intervención y programación por quirófano.",
            "Migro pantallas del sistema anterior con paridad de datos y de mensajes HL7 frente al original.",
            "Refactorizo un módulo heredado en módulos compartidos y de enrutado, sin parar el servicio.",
            "Automatizo con IA la gestión de funcionalidades e incidencias: del ticket al análisis del funcional heredado, el desarrollo y las pruebas.",
            "Resuelvo incidencias de producción en admisión y hospitalización.",
          ],
          tags: ["Angular", "TypeScript", "Java", "Spring", "HL7", "agentes de IA"],
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
          scope: "proyecto personal",
          metric: "extracción con IA",
          title: "Analizador de facturas — de PDF a datos con IA",
          body: "Aplicación web autoalojada para dejar de picar facturas a mano: los recibos llegan en PDF, en foto o por correo y salen como datos listos para consultar, corregir y analizar.",
          role: "En solitario · diseño, desarrollo y despliegue",
          tasks: [
            "Diseño el pipeline de extracción: una cola de trabajos pasa cada documento por un LLM y guarda comercio, fecha, importes, líneas y categoría.",
            "Integro Gmail para recoger las facturas del correo solas cada doce horas.",
            "Construyo la web mobile-first en React y la API en Fastify, en un monorepo.",
            "Despliego con Docker Compose en servidor propio, con almacenamiento de objetos y copia diaria.",
          ],
          tags: ["React", "Fastify", "BullMQ", "PostgreSQL", "Redis", "MinIO", "Claude"],
          href: null,
          arch: {
            label: "Pipeline de extracción",
            nodes: [
              { t: "pdf, foto o correo", k: "entrada" },
              { t: "cola de trabajos", k: "bullmq" },
              { t: "lectura del documento", k: "llm" },
              { t: "datos estructurados", k: "postgres" },
              { t: "gastos por categoría", k: "análisis" },
            ],
          },
        },
        {
          year: "2026 — hoy",
          scope: "producto propio · IberStack",
          metric: "escala a cero",
          title: "PxNara — licencias y backend de una suite de pixel art",
          body: "Suite de creación de pixel art en C++ —modelado 3D, render a píxel y editor— que construyo con Fran Llopis bajo la marca IberStack, para Windows, macOS y Linux.",
          role: "Cofundador · responsable del backend, el panel y la distribución",
          tasks: [
            "Diseño la API con arquitectura hexagonal y el panel web; escalan a cero en Cloud Run: ningún servidor encendido mientras nadie compra.",
            "Integro Stripe: licencia perpetua, suscripción individual y de estudio por asientos, con el IVA según el país.",
            "Implemento licencias firmadas que funcionan sin conexión, límite de dispositivos y login desde la app de escritorio con OAuth2 PKCE.",
            "Conecto la sincronización de proyectos con GitHub, GitLab y Unity Version Control.",
            "Automatizo CI/CD: cada push a main se despliega tras verificarse, y las releases salen para los tres sistemas con revisión por IA.",
          ],
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
          body: "App Android para vivir un eclipse solar, nacida para el total que cruzó España el 12 de agosto de 2026. Todo se calcula en el dispositivo, sin servidor.",
          role: "En solitario · de la efeméride al APK",
          tasks: [
            "Calculo los contactos C1–C4, la obscuración y la duración de la totalidad para cualquier coordenada.",
            "Dibujo en el mapa la banda de totalidad y el punto más cercano donde verla completa.",
            "Programo avisos locales de cuándo ponerse y quitarse las gafas durante el eclipse.",
            "Publico el código y el APK, con un catálogo de los eclipses de los próximos ocho años.",
          ],
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
          body: "Asistente que nunca envía tu audio a ningún sitio: la wake word «Rufus» se ejecuta entera en el dispositivo.",
          role: "En solitario · datos, entrenamiento y publicación",
          tasks: [
            "Entreno la wake word desde cero mezclando voces sintéticas en español con grabaciones reales.",
            "Exporto el modelo a ONNX para escuchar de forma continua sin red.",
            "Publico el pipeline como notebook de Colab reproducible, para que cualquiera entrene la suya.",
          ],
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
          body: "Aplicación para la Universidad del País Vasco (UPV/EHU) que gestiona la evaluación de la actividad docente del profesorado, de la asignación de evaluadores al informe final.",
          role: "Full-stack e interlocutor técnico con la universidad",
          tasks: [
            "Desarrollo el flujo de expedientes: etapas, varios evaluadores, consenso, alegaciones e informe final.",
            "Implemento el cálculo de puntuaciones al vuelo en la valoración, para que los evaluadores dejen la hoja de cálculo.",
            "Escribo scripts de datos en Oracle y llevo los pases a producción con Kubernetes y Helm.",
            "Me reúno con las usuarias: recojo peticiones, estimo y priorizo con el jefe de proyecto.",
          ],
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
          body: "Panel desde el que una mutua colaboradora con la Seguridad Social lleva su operativa completa, con empresas asociadas, asesorías y trabajadores cada uno en su propia área.",
          role: "Responsable del frontend · equipo de cuatro frontends",
          tasks: [
            "Diseño la arquitectura del monorepo Angular con NX y el estado global con NGRX.",
            "Separo áreas, permisos y datos por perfil sobre una sola base de código.",
            "Creo los componentes compartidos que usa todo el equipo.",
            "Mantengo el despliegue continuo con GitLab CI sobre AWS y Kubernetes.",
          ],
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
          stack: "Desde 2022 en Ibermática, hoy Ayesa. Sistemas críticos para seguros, universidad y sanidad pública: Mutua Montañesa, UPV/EHU y Osakidetza.",
          tasks: [
            "Arquitectura de frontends Angular con NX y NGRX y servicios Spring Boot.",
            "Despliegue con Kubernetes, Helm y GitLab CI; calidad con SonarQube.",
            "Interlocución técnica con el cliente: reuniones, estimaciones y pases a producción.",
            "En Osakidetza, gestión de funcionalidades e incidencias automatizada con IA, del desarrollo a las pruebas.",
          ],
        },
        {
          years: "2021 — hoy",
          role: "Ingeniero de IA aplicada y automatización",
          company: "freelance y productos propios",
          stack: "Programo con IA desde las primeras versiones del autocompletado, y hoy integro IA en sistemas que ya existen para automatizar trabajo real, de la idea a producción.",
          tasks: [
            "Conozco cómo funcionan por dentro: redes neuronales, transformers, embeddings y entrenamiento de modelos propios.",
            "Agentes con LLM conectados por MCP a las herramientas de cada sitio: CI/CD, monitorización, correo, hojas de cálculo y equipos físicos por Modbus.",
            "Extracción de datos de facturas y documentos, y flujos en n8n con pasos de IA.",
            "Webs para comercios generadas a partir de su web actual, con un asistente que aplica los cambios que pide el cliente.",
            "Elección del modelo según el caso: Claude por API, o modelos abiertos en local o en GPU alquilada cuando los datos no deben salir de casa.",
          ],
        },
        {
          years: "2022 — 2024",
          role: "Socio fundador y desarrollador principal",
          company: "Asistencia y Gestión Deportiva",
          stack: "Plataforma para un servicio de asesoramiento en apuestas deportivas.",
          tasks: [
            "Arquitectura desde cero y puesta en producción: microservicios en la nube con Next.js y NestJS.",
            "Alta y gestión de clientes y suscripciones.",
            "Avisos en tiempo real con Redis y Socket.IO.",
          ],
        },
        {
          years: "2020 — 2021",
          role: "Desarrollador Full-Stack",
          company: "BOLTIA",
          stack: "Producto web con Angular 11 y Node.js.",
          tasks: [
            "Referente técnico del equipo y mentor de un perfil junior.",
            "Revisión de código y puesta en producción.",
            "Despliegues Linux con PM2.",
          ],
        },
        {
          years: "2018 — 2021",
          role: "Desarrollador Full-Stack freelance",
          company: "Blockchain y criptomonedas",
          stack: "Tres años como desarrollador principal de una criptomoneda propia, fork de Ethereum.",
          tasks: [
            "Todo su ecosistema web: wallet, back-office y web pública.",
            "Angular 7→12 y Node.js, con Docker Swarm y GitLab CI.",
          ],
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
        { label: "ia", items: ["Claude Code", "APIs de LLM", "agentes", "MCP", "RAG y embeddings", "transformers", "n8n", "modelos abiertos", "ONNX"] },
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
      title: "Julián López Hervás — Senior Full-Stack & Applied AI Engineer",
      description:
        "Senior full-stack engineer in Toledo and Madrid, Spain. Seven-plus years designing, building and shipping web and mobile applications for fintech, insurance, healthcare and the public sector with Angular, Spring Boot, React and Node. I integrate AI into all kinds of systems to automate processes: agents connected over MCP, data extraction from documents and LLM workflows in production.",
      jobTitle: "Senior full-stack and applied AI software engineer",
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
      lede: "I'm Julián López Hervás, a senior full-stack engineer in Toledo and Madrid, Spain. Seven-plus years taking web and mobile applications to production end to end: architecture, frontend, backend, deployment and the conversation with the client. Today, business-critical systems for insurance, healthcare and the public sector at Ayesa; before that, fintech, blockchain and a startup of my own. And, more and more, AI integrated into systems that already exist: agents, document extraction and automations that run on their own.",
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
      roleLabel: "my role",
      // Newest first
      items: [
        {
          year: "2026 — now",
          scope: "Ayesa",
          metric: "public healthcare",
          title: "Integrated hospital system — Osakidetza",
          body: "Hospital information system for the Basque Health Service, in daily use: admissions, patient management, surgical block, pharmacy and the rest of the care pathway in a single clinical application with years of history.",
          role: "Full-stack on the surgical block module · Ayesa team",
          tasks: [
            "Build new surgical block features in Angular and Spring: surgery records and scheduling per operating theatre.",
            "Migrate screens from the previous system with data and HL7 message parity against the original.",
            "Refactor a legacy module into shared and routing modules without stopping the service.",
            "Automate the handling of features and bugs with AI: from the ticket to analysing the legacy behaviour, development and testing.",
            "Fix production incidents in admissions and inpatient care.",
          ],
          tags: ["Angular", "TypeScript", "Java", "Spring", "HL7", "AI agents"],
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
          scope: "personal project",
          metric: "AI extraction",
          title: "Invoice analyser — from PDF to data with AI",
          body: "Self-hosted web app to stop typing invoices in by hand: receipts arrive as a PDF, a photo or by email and come out as data ready to browse, correct and analyse.",
          role: "Solo · design, development and deployment",
          tasks: [
            "Designed the extraction pipeline: a job queue runs each document through an LLM and stores merchant, date, amounts, line items and category.",
            "Integrated Gmail so invoices are picked up from email on their own every twelve hours.",
            "Built the mobile-first web app in React and the API in Fastify, in a monorepo.",
            "Deploy with Docker Compose on my own server, with object storage and daily backups.",
          ],
          tags: ["React", "Fastify", "BullMQ", "PostgreSQL", "Redis", "MinIO", "Claude"],
          href: null,
          arch: {
            label: "Extraction pipeline",
            nodes: [
              { t: "pdf, photo or email", k: "input" },
              { t: "job queue", k: "bullmq" },
              { t: "document reading", k: "llm" },
              { t: "structured data", k: "postgres" },
              { t: "spend by category", k: "analysis" },
            ],
          },
        },
        {
          year: "2026 — now",
          scope: "own product · IberStack",
          metric: "scales to zero",
          title: "PxNara — licensing and backend for a pixel-art suite",
          body: "Pixel-art creation suite in C++ — 3D modelling, pixel render and editor — I build with Fran Llopis under the IberStack brand, for Windows, macOS and Linux.",
          role: "Co-founder · owner of the backend, the panel and distribution",
          tasks: [
            "Designed the API with a hexagonal architecture and the web panel; both scale to zero on Cloud Run: no server runs while nobody is buying.",
            "Integrated Stripe: perpetual licence, individual and per-seat studio subscriptions, with VAT by country.",
            "Implemented signed licences that work offline, a device limit and login from the desktop app with OAuth2 PKCE.",
            "Connected project sync with GitHub, GitLab and Unity Version Control.",
            "Automated CI/CD: every push to main deploys after verification, and releases ship for all three systems with an AI review.",
          ],
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
          body: "Android app for living through a solar eclipse, born for the total one that crossed Spain on August 12, 2026. Everything is computed on the device, with no server.",
          role: "Solo · from the ephemerides to the APK",
          tasks: [
            "Compute the C1–C4 contacts, obscuration and totality duration for any coordinate.",
            "Draw the path of totality on the map and the nearest point to see it whole.",
            "Schedule local alerts for when to put the glasses on and take them off.",
            "Published the code and the APK, with a catalogue of the eclipses of the next eight years.",
          ],
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
          body: "An assistant that never sends your audio anywhere: the “Rufus” wake word runs entirely on the device.",
          role: "Solo · data, training and release",
          tasks: [
            "Trained the wake word from scratch by mixing Spanish synthetic voices with real recordings.",
            "Exported the model to ONNX for always-on listening with no network.",
            "Published the pipeline as a reproducible Colab notebook so anyone can train their own.",
          ],
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
          body: "Application for the University of the Basque Country (UPV/EHU) that manages the evaluation of faculty teaching, from assigning evaluators to the final report.",
          role: "Full-stack and technical point of contact for the university",
          tasks: [
            "Build the case-file workflow: stages, multiple evaluators, consensus, appeals and final report.",
            "Implemented on-the-fly scoring in the evaluation, so evaluators could drop their spreadsheet.",
            "Write Oracle data scripts and run releases to production with Kubernetes and Helm.",
            "Meet the users: gather requests, estimate and prioritise with the project manager.",
          ],
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
          body: "Panel from which a Spanish occupational insurance mutual runs its whole operation, with member companies, advisory firms and workers each in their own area.",
          role: "Frontend owner · team of four frontend developers",
          tasks: [
            "Designed the Angular monorepo architecture with NX and global state with NGRX.",
            "Split areas, permissions and data per role on a single codebase.",
            "Built the shared components the whole team uses.",
            "Ran continuous deployment with GitLab CI on AWS and Kubernetes.",
          ],
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
          stack: "Since 2022 at Ibermática, now Ayesa. Business-critical systems for insurance, university and public healthcare: Mutua Montañesa, UPV/EHU and Osakidetza.",
          tasks: [
            "Angular frontend architecture with NX and NGRX, and Spring Boot services.",
            "Deployment with Kubernetes, Helm and GitLab CI; quality with SonarQube.",
            "Technical point of contact with the client: meetings, estimates and releases to production.",
            "At Osakidetza, AI-automated handling of features and bugs, from development to testing.",
          ],
        },
        {
          years: "2021 — now",
          role: "Applied AI & Automation Engineer",
          company: "freelance and own products",
          stack: "I have been coding with AI since the first autocomplete releases, and today I integrate AI into systems that already exist to automate real work, from idea to production.",
          tasks: [
            "I understand how they work inside: neural networks, transformers, embeddings and training models of my own.",
            "LLM agents connected over MCP to each place's own tools: CI/CD, monitoring, email, spreadsheets and physical equipment over Modbus.",
            "Data extraction from invoices and documents, and n8n workflows with AI steps.",
            "Websites for small businesses generated from their current site, with an assistant that applies the changes the client asks for.",
            "Picking the model for the job: Claude over the API, or open models running locally or on rented GPUs when the data must not leave the building.",
          ],
        },
        {
          years: "2022 — 2024",
          role: "Co-founder & lead developer",
          company: "Asistencia y Gestión Deportiva",
          stack: "Platform for a sports-betting advisory service.",
          tasks: [
            "Architecture from scratch and launch to production: cloud microservices with Next.js and NestJS.",
            "Client onboarding, management and subscriptions.",
            "Real-time alerts with Redis and Socket.IO.",
          ],
        },
        {
          years: "2020 — 2021",
          role: "Full-Stack Developer",
          company: "BOLTIA",
          stack: "Web product with Angular 11 and Node.js.",
          tasks: [
            "Technical reference for the team and mentor to a junior developer.",
            "Code review and releases to production.",
            "Linux deployments with PM2.",
          ],
        },
        {
          years: "2018 — 2021",
          role: "Freelance Full-Stack Developer",
          company: "Blockchain & crypto",
          stack: "Three years as lead developer of a proprietary cryptocurrency forked from Ethereum.",
          tasks: [
            "Its whole web ecosystem: wallet, back office and public site.",
            "Angular 7→12 and Node.js, with Docker Swarm and GitLab CI.",
          ],
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
        { label: "ai", items: ["Claude Code", "LLM APIs", "agents", "MCP", "RAG & embeddings", "transformers", "n8n", "open models", "ONNX"] },
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
