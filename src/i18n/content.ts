import { Github, ExternalLink, Download } from "lucide-react";
import trainerLogo from "@/assets/trainer-logo.webp";
import trainer1 from "@/assets/trainer-1.webp";
import trainer2 from "@/assets/trainer-2.webp";
import trainer3 from "@/assets/trainer-3.webp";
import trainer4 from "@/assets/trainer-4.webp";
import trainer5 from "@/assets/trainer-5.webp";
import trainer6 from "@/assets/trainer-6.webp";
import trainer7 from "@/assets/trainer-7.webp";
import debituLogo from "@/assets/debitu-logo.webp";
import debitu1 from "@/assets/debitu-1.webp";
import debitu2 from "@/assets/debitu-2.webp";
import debitu3 from "@/assets/debitu-3.webp";
import debitu4 from "@/assets/debitu-4.webp";
import debitu5 from "@/assets/debitu-5.webp";
import zondamovLogo from "@/assets/zondamov-logo.webp";
import zondamov1 from "@/assets/zondamov-1.webp";
import zondamov2 from "@/assets/zondamov-2.webp";
import zondamov3 from "@/assets/zondamov-3.webp";
import zondamov4 from "@/assets/zondamov-4.webp";
import zondamov5 from "@/assets/zondamov-5.webp";
import zondamov6 from "@/assets/zondamov-6.webp";
import loteLogo from "@/assets/lote-logo.webp";
import lote1 from "@/assets/lote-1.webp";
import lote2 from "@/assets/lote-2.webp";
import lote3 from "@/assets/lote-3.webp";
import lote4 from "@/assets/lote-4.webp";
import lote5 from "@/assets/lote-5.webp";
import viceclock1 from "@/assets/viceclock-1.webp";
import viceclock2 from "@/assets/viceclock-2.webp";
import viceclock3 from "@/assets/viceclock-3.webp";
import viceclock4 from "@/assets/viceclock-4.webp";
import viceclock5 from "@/assets/viceclock-5.webp";
import viceclock6 from "@/assets/viceclock-6.webp";
import viceclockLogo from "@/assets/viceclock-logo.webp";
import postcredits1 from "@/assets/postcredits-1.webp";
import postcredits2 from "@/assets/postcredits-2.webp";
import postcredits3 from "@/assets/postcredits-3.webp";
import postcredits4 from "@/assets/postcredits-4.webp";
import postcredits5 from "@/assets/postcredits-5.webp";
import postcredits6 from "@/assets/postcredits-6.webp";
import postcredits7 from "@/assets/postcredits-7.webp";
import postcredits8 from "@/assets/postcredits-8.webp";
import postcredits9 from "@/assets/postcredits-9.webp";
import postcredits10 from "@/assets/postcredits-10.webp";
import postcreditsLogo from "@/assets/postcredits-logo.webp";
import habitx1 from "@/assets/habitx-1.webp";
import habitx2 from "@/assets/habitx-2.webp";
import habitx3 from "@/assets/habitx-3.webp";
import habitxLogo from "@/assets/habitx-logo.webp";

export type Lang = "en" | "es";

export type ProjectLink = {
  label: string;
  url: string;
  icon: typeof Github;
  primary?: boolean;
};

export type Project = {
  index: string;
  kicker: string;
  name: string;
  role?: string;
  myRole: string;
  result: string;
  description: string;
  features: { title: string; text: string }[];
  metrics?: { value: string; label: string }[];
  stack: string[];
  links: ProjectLink[];
  gallery: string[];
  logo?: string;
};

const g = {
  trainer: [trainer1, trainer2, trainer3, trainer4, trainer5, trainer6, trainer7],
  postcredits: [
    postcredits1, postcredits2, postcredits3, postcredits4, postcredits5,
    postcredits6, postcredits7, postcredits8, postcredits9, postcredits10,
  ],
  viceclock: [viceclock1, viceclock2, viceclock3, viceclock4, viceclock5, viceclock6],
  habitx: [habitx1, habitx2, habitx3],
  zondamov: [zondamov1, zondamov2, zondamov3, zondamov4, zondamov5, zondamov6],
  debitu: [debitu1, debitu2, debitu3, debitu4, debitu5],
  lote: [lote1, lote2, lote3, lote4, lote5],
};

const urls = {
  trainerRepo: "https://github.com/dg203302/AIPersonalTrainer",
  postcredits: "https://postcredits.netlify.app",
  postcreditsPwa: "https://www.pwastore.io/app/post-credits",
  viceclock: "https://viceclock.netlify.app",
  viceclockPwa: "https://www.pwastore.io/app/viceclock",
  habitx: "https://habitxapp.netlify.app",
  habitxPwa: "https://www.pwastore.io/app/habitx",
  zondamov: "https://github.com/dg203302/ZondaMov",
  debitu: "https://debitu.lovable.app/",
  debituRepo: "https://github.com/dg203302/SistemaClientesC",
  lotePlay:
    "https://play.google.com/store/apps/details?id=app.netlify.loteclientes.twa&hl=es_AR",
  loteUsers: "https://github.com/dg203302/SistemaClientes",
  loteAdmin: "https://github.com/dg203302/SistemaAdmin",
  cv: "/cv-diego-jose-garcia.pdf",
  team: "https://djsolutions.lovable.app/",
};

export const content = {
  en: {
    meta: {
      title: "Diego Jose Garcia — Backend & Full Stack Web Developer",
      description:
        "Portfolio of Diego Jose Garcia, backend-focused web developer from San Juan, Argentina. Python, Flask, Supabase, APIs and installable PWAs.",
    },
    nav: {
      home: "Home",
      experience: "Experience",
      education: "Education",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      switchLabel: "Ver en español",
    },
    common: {
      backToTop: "Back to top",
      close: "Close",
      prev: "Previous image",
      next: "Next image",
      openGallery: "Open image in full screen",
      downloadCv: "Download CV",
      myRole: "My role",
      result: "Result",
    },
    hero: {
      badge: "Available for new projects",
      titleTop: "Web Developer",
      titleBottom: "& Designer",
      introPre: "I'm ",
      name: "Diego Jose Garcia",
      introPost:
        " — a backend-focused developer working with Python, Flask and Supabase, and comfortable going full stack with JavaScript when a project needs it.",
      location: "San Juan, Argentina",
      ctaProjects: "View projects",
      ctaContact: "Get in touch",
      cvUrl: urls.cv,
    },
    experience: {
      eyebrow: "Experience",
      title: "Results-driven development",
      description:
        "I build APIs and data layers with Python and Flask, real-time backends on Supabase, and installable PWAs — production-ready and safely deployed to local and cloud environments.",
      skills: [
        {
          key: "arch",
          title: "Modern architectures",
          text: "Flask with REST APIs, HTML/CSS/JS frontend, secure authentication and orchestrated deployments on Netlify and containers.",
        },
        {
          key: "cloud",
          title: "Cloud integrations",
          text: "Supabase (Auth, Postgres, Storage) and CI/CD pipelines for fast and reliable delivery.",
        },
        {
          key: "perf",
          title: "Performance & SEO",
          text: "Load time optimization, accessibility, responsive design and Lighthouse audits.",
        },
        {
          key: "analytics",
          title: "Analytics & growth",
          text: "Metrics instrumentation, event tracking, A/B testing and continuous conversion improvement.",
        },
        {
          key: "quality",
          title: "Quality & maintenance",
          text: "Automated testing, logging/monitoring, clear documentation and ongoing product support.",
        },
        {
          key: "e2e",
          title: "End-to-end",
          text: "From discovery and MVP to production and scaling, prioritizing agility, security and experience.",
        },
      ],
      stackLabel: "My Stack",
      stackCards: [
        {
          key: "backend",
          title: "Backend",
          text: "REST APIs built with Python — Flask and FastAPI. Secure auth, structured data and production-ready deployments. This is where I work best.",
          tags: ["Python", "Flask", "FastAPI", "Playwright"],
        },
        {
          key: "frontend",
          title: "Frontend",
          text: "Modern PWAs with React, TypeScript and Tailwind. Responsive layouts, smooth animations and Lighthouse-perfect performance.",
          tags: ["React", "TypeScript", "PWA", "Tailwind"],
        },
        {
          key: "cloud",
          title: "Cloud & Tools",
          text: "Supabase (Auth, Postgres, Storage), Docker containers and Netlify deployments. Real-time data and CI/CD pipelines.",
          tags: ["Supabase", "Docker", "Netlify", "Realtime"],
        },
      ],
    },
    education: {
      eyebrow: "Education",
      title: "Academic background",
      description: "A blend of solid theory and applied technical training.",
      items: [
        {
          key: "uni",
          period: "Currently — 4th year",
          title: "Bachelor's Degree in Computer Science",
          place: "National University of San Juan (UNSJ) — FCEFN",
          text: "Solid foundation in programming principles, software development and project management, complementing my hands-on skills as a web developer.",
        },
        {
          key: "tech",
          period: "2017 — 2022",
          title: "Electronics Technician",
          place: "EPET No. 1 Ingeniero Rogelio A. Boero",
          text: "Technical training in Electronics and Computing, laying the foundation for my development in the technology field.",
        },
        {
          key: "primary",
          period: "Primary school",
          title: "Primary education",
          place: "Francisco Narciso Laprida School",
          text: "Fundamental skills in reading, writing and mathematics, essential for my later academic growth.",
        },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "How I work",
      description:
        "I work mainly as a backend developer — APIs, databases, authentication and real-time sync — and I can also take a project full stack, from the data model to the deployed interface.",
      items: [
        {
          key: "api",
          title: "Backend & APIs",
          text: "REST APIs with Python (Flask / FastAPI), data modelling in PostgreSQL, authentication, roles and third-party integrations.",
          tags: ["Python", "Flask", "PostgreSQL", "Auth"],
        },
        {
          key: "realtime",
          title: "Real-time systems",
          text: "Supabase-based backends with live sync between apps and admin panels, storage, notifications and access rules.",
          tags: ["Supabase", "Realtime", "Storage", "RLS"],
        },
        {
          key: "fullstack",
          title: "Full stack delivery",
          text: "When a project needs it, I also build the frontend: installable PWAs with React or vanilla JS, responsive and fast.",
          tags: ["React", "PWA", "TypeScript", "Tailwind"],
        },
        {
          key: "support",
          title: "Deployment & support",
          text: "Deployments on Netlify, Docker and cloud environments, plus maintenance, monitoring and iterations after launch.",
          tags: ["Netlify", "Docker", "CI/CD", "Maintenance"],
        },
      ],
      ctaTitle: "Need a backend that holds up?",
      ctaText: "Tell me about your project and I'll answer with a concrete approach.",
      ctaButton: "Start a conversation",
    },
    projects: {
      personal: {
        eyebrow: "Personal projects",
        title: "Selected Work",
        description:
          "Projects I built end to end as a full stack developer, combining technical ingenuity, AI and real problem solving.",
      },
      team: {
        eyebrow: "Collaborative projects",
        title: "Team Work",
        pre: "Products built together with ",
        teamName: "D&JSolutions",
        post: ", where I worked as the backend developer of the team.",
      },
      items: [
        {
          index: "01",
          kicker: "HEALTH & FITNESS APP",
          name: "TrAIner",
          role: "AI · PWA · JavaScript",
          myRole: "Full stack developer — AI integration, logic and interface.",
          result: "A usable trainer that turns three inputs into a full training and nutrition plan.",
          description:
            "Your AI-powered personal trainer and nutritionist. Users input weight, height and age, and the AI generates personalized training and nutrition plans.",
          features: [
            {
              title: "Training plan",
              text: "Library of 10+ exercises segmented by muscle group, selectable days and intensity level. Structured and progressive routine.",
            },
            {
              title: "Nutrition plan",
              text: "The AI calculates daily calories based on goal (lose weight, gain mass or maintain) and builds an adapted nutrition plan.",
            },
          ],
          stack: ["AI / LLM", "PWA", "JavaScript", "Personalization"],
          links: [{ label: "Repository", url: urls.trainerRepo, icon: Github, primary: true }],
          gallery: g.trainer,
          logo: trainerLogo,
        },
        {
          index: "02",
          kicker: "PWA / CINEMA COMPANION APP",
          name: "Post Credits",
          role: "PWA · React · TMDB API",
          myRole: "Full stack developer — TMDB integration, data layer and UI.",
          result: "Published on PWA Store and installable as a native app on desktop and mobile.",
          description:
            "A modern place to explore movies, series and the people who make them: credits, scenes, trailers and cast details in a single app.",
          features: [
            {
              title: "Discovery",
              text: "Movies in theaters, trending, latest series and trending people, with a global search for titles and people.",
            },
            {
              title: "Installable as PWA",
              text: "Published on PWA Store with strong performance metrics on desktop and mobile. Installs as a native app.",
            },
          ],
          stack: ["PWA", "React", "TMDB API", "Responsive"],
          links: [
            { label: "Visit site", url: urls.postcredits, icon: ExternalLink, primary: true },
            { label: "PWA Store", url: urls.postcreditsPwa, icon: Download },
          ],
          gallery: g.postcredits,
          logo: postcreditsLogo,
        },
        {
          index: "03",
          kicker: "GTA VI COUNTDOWN",
          name: "ViceClock",
          role: "JavaScript · YouTube API",
          myRole: "Full stack developer — countdown logic, YouTube API and art direction.",
          result: "An immersive landing published on PWA Store and installable from the browser.",
          description:
            "Immersive landing page with a real-time countdown to the GTA VI launch. Vice City aesthetic, integrated trailers, background images and music.",
          features: [
            {
              title: "Responsive design",
              text: "Adaptive layout and modern aesthetic inspired by the game's visual identity, optimized for any device.",
            },
            {
              title: "Immersive multimedia",
              text: "Trailers embedded via the YouTube API, background images from the Vice universe and ambient music.",
            },
          ],
          stack: ["JavaScript", "YouTube API"],
          links: [
            { label: "Visit site", url: urls.viceclock, icon: ExternalLink, primary: true },
            { label: "PWA Store", url: urls.viceclockPwa, icon: Download },
          ],
          gallery: g.viceclock,
          logo: viceclockLogo,
        },
        {
          index: "04",
          kicker: "HABIT TRACKING WEB APP",
          name: "HabitX",
          role: "Vanilla HTML · CSS · JavaScript",
          myRole: "Full stack developer — architecture, offline storage and UI, no frameworks.",
          result: "Zero dependencies, zero backend and zero build step: it works offline from day one.",
          description:
            "A complete habit tracking web app built 100% with vanilla HTML, CSS and JavaScript — no frameworks, no UI libraries, no build step. It runs in the browser, works offline and stores everything locally: zero backend, zero subscriptions.",
          features: [
            {
              title: "Tracking & calendar",
              text: "Custom events with name, description and emoji picker, one-tap daily logging with live progress bar, and a visual calendar with activity dots plus retroactive editing of any past day.",
            },
            {
              title: "Stats & streaks",
              text: "Per-event history with current streak, best streak and total logs, plus a 'since last log' panel with visual alerts after 7+ days without activity.",
            },
          ],
          stack: ["HTML5", "CSS Vanilla", "JavaScript ES6+", "localStorage", "Offline", "Glassmorphism"],
          links: [
            { label: "Visit site", url: urls.habitx, icon: ExternalLink, primary: true },
            { label: "PWA Store", url: urls.habitxPwa, icon: Download },
          ],
          gallery: g.habitx,
          logo: habitxLogo,
        },
      ] as Project[],
      teamItems: [
        {
          index: "05",
          kicker: "REAL-TIME TRANSPORT",
          name: "ZondaMov",
          role: "Backend developer",
          myRole: "Backend developer — data model, transport APIs and route logic.",
          result: "Multimodal search and route planning with transfer control over live data.",
          description:
            "Public transport app with a Liquid Glass aesthetic. OpenStreetMap-based map, multimodal search for lines, stops and locations, route planner with transfer control and real-time schedules.",
          features: [
            {
              title: "Cross-platform",
              text: "Compatible with phones, tablets and browser, with dark mode and performance controls.",
            },
            {
              title: "Liquid Glass UI",
              text: "Interface inspired by transparencies and depth, focused on legibility over the map.",
            },
          ],
          stack: ["React", "OpenStreetMap", "Liquid Glass UI", "PWA", "TypeScript"],
          links: [{ label: "Repository", url: urls.zondamov, icon: Github, primary: true }],
          gallery: g.zondamov,
          logo: zondamovLogo,
        },
        {
          index: "06",
          kicker: "CUSTOMER ACCOUNTS",
          name: "Debitú",
          role: "Backend developer",
          myRole: "Backend developer — accounts, balances and cloud sync.",
          result: "Shopkeepers can send an up-to-date balance over WhatsApp in one tap.",
          description:
            "App to manage customer accounts in neighborhood businesses. Register clients, log debts and payments, send balances via WhatsApp and use the built-in calculator.",
          features: [
            {
              title: "Modern mobile UX",
              text: "Interface with bottom sheets, elegant transparencies and gesture-based navigation.",
            },
            { title: "Secure login", text: "Google authentication and cloud sync." },
          ],
          stack: ["Mobile", "WhatsApp API", "Google Auth", "Bottom Sheets"],
          links: [
            { label: "Website", url: urls.debitu, icon: ExternalLink, primary: true },
            { label: "Repository", url: urls.debituRepo, icon: Github },
          ],
          gallery: g.debitu,
          logo: debituLogo,
        },
        {
          index: "07",
          kicker: "REAL-TIME LOYALTY",
          name: "Clientes El Lote",
          role: "Backend developer",
          myRole: "Backend developer — Supabase schema, realtime sync and admin panel API.",
          result: "In production for a real business, with live sync between store and customers.",
          description:
            "Loyalty ecosystem with real-time sync between the business and the customer. Points for in-store purchases, redemption for promotions, dynamic catalog, notices, schedules and integrated map.",
          features: [
            {
              title: "Admin panel",
              text: "User management, promotion uploads and mass announcements. Available on Google Play.",
            },
            {
              title: "Realtime",
              text: "Live sync based on Supabase between the customer and the business.",
            },
          ],
          metrics: [
            { value: "112", label: "active customers" },
            { value: "84", label: "Google Play downloads" },
          ],
          stack: ["Supabase", "Realtime", "Mobile", "Admin Panel"],
          links: [
            { label: "Google Play", url: urls.lotePlay, icon: ExternalLink, primary: true },
            { label: "Users repo", url: urls.loteUsers, icon: Github },
            { label: "Admin repo", url: urls.loteAdmin, icon: Github },
          ],
          gallery: g.lote,
          logo: loteLogo,
        },
      ] as Project[],
      teamUrl: urls.team,
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's work together",
      description:
        "I'm available for new projects, collaborations and opportunities. Don't hesitate to reach out.",
      personalTitle: "Personal information",
      personal: [
        { key: "dob", label: "Date of birth", value: "08 / 16 / 2003" },
        { key: "nat", label: "Nationality", value: "Argentinian" },
        { key: "loc", label: "Location", value: "San Juan, Argentina" },
      ],
      labels: {
        proEmail: "Professional email",
        persEmail: "Personal email",
        mainPhone: "Main phone",
        secPhone: "Secondary phone",
        linkedin: "LinkedIn",
        github: "GitHub",
      },
      copy: "Copy email",
      copied: "Email copied",
      cvTitle: "Prefer the short version?",
      cvText: "Download my CV in PDF — experience, stack and projects in one page.",
      footer: "Made with care from San Juan",
    },
  },

  es: {
    meta: {
      title: "Diego José García — Desarrollador Web Backend y Full Stack",
      description:
        "Portfolio de Diego José García, desarrollador web backend de San Juan, Argentina. Python, Flask, Supabase, APIs y PWAs instalables.",
    },
    nav: {
      home: "Inicio",
      experience: "Experiencia",
      education: "Educación",
      services: "Servicios",
      projects: "Proyectos",
      contact: "Contacto",
      switchLabel: "View in English",
    },
    common: {
      backToTop: "Volver arriba",
      close: "Cerrar",
      prev: "Imagen anterior",
      next: "Imagen siguiente",
      openGallery: "Abrir imagen en pantalla completa",
      downloadCv: "Descargar CV",
      myRole: "Mi rol",
      result: "Resultado",
    },
    hero: {
      badge: "Disponible para nuevos proyectos",
      titleTop: "Desarrollador Web",
      titleBottom: "y Diseñador",
      introPre: "Soy ",
      name: "Diego José García",
      introPost:
        " — desarrollador enfocado en backend con Python, Flask y Supabase, y también trabajo full stack con JavaScript cuando el proyecto lo necesita.",
      location: "San Juan, Argentina",
      ctaProjects: "Ver proyectos",
      ctaContact: "Contactarme",
      cvUrl: urls.cv,
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Desarrollo orientado a resultados",
      description:
        "Construyo APIs y capas de datos con Python y Flask, backends en tiempo real sobre Supabase y PWAs instalables, listos para producción y desplegados de forma segura en entornos locales y en la nube.",
      skills: [
        {
          key: "arch",
          title: "Arquitecturas modernas",
          text: "Flask con APIs REST, frontend en HTML/CSS/JS, autenticación segura y despliegues orquestados en Netlify y contenedores.",
        },
        {
          key: "cloud",
          title: "Integraciones cloud",
          text: "Supabase (Auth, Postgres, Storage) y pipelines de CI/CD para entregas rápidas y confiables.",
        },
        {
          key: "perf",
          title: "Performance y SEO",
          text: "Optimización de tiempos de carga, accesibilidad, diseño responsivo y auditorías Lighthouse.",
        },
        {
          key: "analytics",
          title: "Analítica y crecimiento",
          text: "Instrumentación de métricas, seguimiento de eventos, tests A/B y mejora continua de conversión.",
        },
        {
          key: "quality",
          title: "Calidad y mantenimiento",
          text: "Testing automatizado, logging/monitoreo, documentación clara y soporte continuo del producto.",
        },
        {
          key: "e2e",
          title: "De punta a punta",
          text: "Desde el descubrimiento y el MVP hasta producción y escalado, priorizando agilidad, seguridad y experiencia.",
        },
      ],
      stackLabel: "Mi Stack",
      stackCards: [
        {
          key: "backend",
          title: "Backend",
          text: "APIs REST con Python — Flask y FastAPI. Autenticación segura, datos estructurados y despliegues listos para producción. Es donde mejor rindo.",
          tags: ["Python", "Flask", "FastAPI", "Playwright"],
        },
        {
          key: "frontend",
          title: "Frontend",
          text: "PWAs modernas con React, TypeScript y Tailwind. Layouts responsivos, animaciones fluidas y buen rendimiento en Lighthouse.",
          tags: ["React", "TypeScript", "PWA", "Tailwind"],
        },
        {
          key: "cloud",
          title: "Cloud y herramientas",
          text: "Supabase (Auth, Postgres, Storage), contenedores Docker y despliegues en Netlify. Datos en tiempo real y pipelines CI/CD.",
          tags: ["Supabase", "Docker", "Netlify", "Realtime"],
        },
      ],
    },
    education: {
      eyebrow: "Educación",
      title: "Formación académica",
      description: "Una combinación de teoría sólida y formación técnica aplicada.",
      items: [
        {
          key: "uni",
          period: "Actualmente — 4.º año",
          title: "Licenciatura en Ciencias de la Computación",
          place: "Universidad Nacional de San Juan (UNSJ) — FCEFN",
          text: "Base sólida en principios de programación, desarrollo de software y gestión de proyectos, que complementa mi experiencia práctica como desarrollador web.",
        },
        {
          key: "tech",
          period: "2017 — 2022",
          title: "Técnico en Electrónica",
          place: "EPET N.º 1 Ingeniero Rogelio A. Boero",
          text: "Formación técnica en Electrónica y Computación, que sentó las bases de mi desarrollo en el ámbito tecnológico.",
        },
        {
          key: "primary",
          period: "Escuela primaria",
          title: "Educación primaria",
          place: "Escuela Francisco Narciso Laprida",
          text: "Habilidades fundamentales de lectura, escritura y matemática, esenciales para mi crecimiento académico posterior.",
        },
      ],
    },
    services: {
      eyebrow: "Servicios",
      title: "Cómo trabajo",
      description:
        "Trabajo principalmente como desarrollador backend — APIs, bases de datos, autenticación y sincronización en tiempo real — y también puedo llevar un proyecto full stack, desde el modelo de datos hasta la interfaz desplegada.",
      items: [
        {
          key: "api",
          title: "Backend y APIs",
          text: "APIs REST con Python (Flask / FastAPI), modelado de datos en PostgreSQL, autenticación, roles e integraciones con terceros.",
          tags: ["Python", "Flask", "PostgreSQL", "Auth"],
        },
        {
          key: "realtime",
          title: "Sistemas en tiempo real",
          text: "Backends sobre Supabase con sincronización en vivo entre apps y paneles de administración, storage, notificaciones y reglas de acceso.",
          tags: ["Supabase", "Realtime", "Storage", "RLS"],
        },
        {
          key: "fullstack",
          title: "Entrega full stack",
          text: "Cuando el proyecto lo necesita también construyo el frontend: PWAs instalables con React o JavaScript vanilla, responsivas y rápidas.",
          tags: ["React", "PWA", "TypeScript", "Tailwind"],
        },
        {
          key: "support",
          title: "Despliegue y soporte",
          text: "Despliegues en Netlify, Docker y entornos cloud, además de mantenimiento, monitoreo e iteraciones después del lanzamiento.",
          tags: ["Netlify", "Docker", "CI/CD", "Mantenimiento"],
        },
      ],
      ctaTitle: "¿Necesitás un backend que aguante?",
      ctaText: "Contame tu proyecto y te respondo con un enfoque concreto.",
      ctaButton: "Empecemos a hablar",
    },
    projects: {
      personal: {
        eyebrow: "Proyectos personales",
        title: "Trabajos Seleccionados",
        description:
          "Proyectos que construí de punta a punta como desarrollador full stack, combinando ingenio técnico, IA y resolución de problemas reales.",
      },
      team: {
        eyebrow: "Proyectos en conjunto",
        title: "Trabajo en Equipo",
        pre: "Productos construidos junto a ",
        teamName: "D&JSolutions",
        post: ", donde me desempeñé como desarrollador backend del equipo.",
      },
      items: [
        {
          index: "01",
          kicker: "APP DE SALUD Y FITNESS",
          name: "TrAIner",
          role: "IA · PWA · JavaScript",
          myRole: "Desarrollador full stack — integración de IA, lógica e interfaz.",
          result: "Un entrenador usable que convierte tres datos en un plan completo de entrenamiento y nutrición.",
          description:
            "Tu entrenador personal y nutricionista con IA. El usuario ingresa peso, altura y edad, y la IA genera planes personalizados de entrenamiento y nutrición.",
          features: [
            {
              title: "Plan de entrenamiento",
              text: "Biblioteca de más de 10 ejercicios segmentados por grupo muscular, días seleccionables y nivel de intensidad. Rutina estructurada y progresiva.",
            },
            {
              title: "Plan de nutrición",
              text: "La IA calcula las calorías diarias según el objetivo (bajar de peso, ganar masa o mantener) y arma un plan alimentario adaptado.",
            },
          ],
          stack: ["IA / LLM", "PWA", "JavaScript", "Personalización"],
          links: [{ label: "Repositorio", url: urls.trainerRepo, icon: Github, primary: true }],
          gallery: g.trainer,
          logo: trainerLogo,
        },
        {
          index: "02",
          kicker: "PWA / APP DE CINE",
          name: "Post Credits",
          role: "PWA · React · TMDB API",
          myRole: "Desarrollador full stack — integración con TMDB, capa de datos e interfaz.",
          result: "Publicada en PWA Store e instalable como app nativa en escritorio y móvil.",
          description:
            "Un lugar moderno para explorar películas, series y las personas que las hacen: créditos, escenas, tráilers y detalles del elenco en una sola app.",
          features: [
            {
              title: "Descubrimiento",
              text: "Películas en cartelera, tendencias, últimas series y personas destacadas, con búsqueda global de títulos y personas.",
            },
            {
              title: "Instalable como PWA",
              text: "Publicada en PWA Store con muy buenas métricas de rendimiento en escritorio y móvil. Se instala como app nativa.",
            },
          ],
          stack: ["PWA", "React", "TMDB API", "Responsive"],
          links: [
            { label: "Visitar sitio", url: urls.postcredits, icon: ExternalLink, primary: true },
            { label: "PWA Store", url: urls.postcreditsPwa, icon: Download },
          ],
          gallery: g.postcredits,
          logo: postcreditsLogo,
        },
        {
          index: "03",
          kicker: "CUENTA REGRESIVA GTA VI",
          name: "ViceClock",
          role: "JavaScript · YouTube API",
          myRole: "Desarrollador full stack — lógica del contador, YouTube API y dirección de arte.",
          result: "Una landing inmersiva publicada en PWA Store e instalable desde el navegador.",
          description:
            "Landing inmersiva con cuenta regresiva en tiempo real hasta el lanzamiento de GTA VI. Estética Vice City, tráilers integrados, imágenes de fondo y música.",
          features: [
            {
              title: "Diseño responsivo",
              text: "Layout adaptable y estética moderna inspirada en la identidad visual del juego, optimizada para cualquier dispositivo.",
            },
            {
              title: "Multimedia inmersiva",
              text: "Tráilers embebidos con la API de YouTube, imágenes de fondo del universo Vice y música ambiental.",
            },
          ],
          stack: ["JavaScript", "YouTube API"],
          links: [
            { label: "Visitar sitio", url: urls.viceclock, icon: ExternalLink, primary: true },
            { label: "PWA Store", url: urls.viceclockPwa, icon: Download },
          ],
          gallery: g.viceclock,
          logo: viceclockLogo,
        },
        {
          index: "04",
          kicker: "APP DE SEGUIMIENTO DE HÁBITOS",
          name: "HabitX",
          role: "HTML · CSS · JavaScript vanilla",
          myRole: "Desarrollador full stack — arquitectura, almacenamiento offline e interfaz, sin frameworks.",
          result: "Cero dependencias, cero backend y cero build: funciona offline desde el primer día.",
          description:
            "Una app web completa de seguimiento de hábitos hecha 100% con HTML, CSS y JavaScript vanilla — sin frameworks, sin librerías de UI y sin build. Corre en el navegador, funciona offline y guarda todo localmente: cero backend, cero suscripciones.",
          features: [
            {
              title: "Registro y calendario",
              text: "Eventos personalizados con nombre, descripción y selector de emoji, registro diario en un toque con barra de progreso, y calendario visual con puntos de actividad y edición retroactiva de días pasados.",
            },
            {
              title: "Estadísticas y rachas",
              text: "Historial por evento con racha actual, mejor racha y registros totales, más un panel 'desde el último registro' con alertas visuales tras 7+ días sin actividad.",
            },
          ],
          stack: ["HTML5", "CSS Vanilla", "JavaScript ES6+", "localStorage", "Offline", "Glassmorphism"],
          links: [
            { label: "Visitar sitio", url: urls.habitx, icon: ExternalLink, primary: true },
            { label: "PWA Store", url: urls.habitxPwa, icon: Download },
          ],
          gallery: g.habitx,
          logo: habitxLogo,
        },
      ] as Project[],
      teamItems: [
        {
          index: "05",
          kicker: "TRANSPORTE EN TIEMPO REAL",
          name: "ZondaMov",
          role: "Desarrollador backend",
          myRole: "Desarrollador backend — modelo de datos, APIs de transporte y lógica de recorridos.",
          result: "Búsqueda multimodal y planificación de viajes con control de trasbordos sobre datos en vivo.",
          description:
            "App de transporte público con estética Liquid Glass. Mapa basado en OpenStreetMap, búsqueda multimodal de líneas, paradas y lugares, planificador de rutas con control de trasbordos y horarios en tiempo real.",
          features: [
            {
              title: "Multiplataforma",
              text: "Compatible con teléfonos, tablets y navegador, con modo oscuro y controles de rendimiento.",
            },
            {
              title: "UI Liquid Glass",
              text: "Interfaz inspirada en transparencias y profundidad, enfocada en la legibilidad sobre el mapa.",
            },
          ],
          stack: ["React", "OpenStreetMap", "Liquid Glass UI", "PWA", "TypeScript"],
          links: [{ label: "Repositorio", url: urls.zondamov, icon: Github, primary: true }],
          gallery: g.zondamov,
          logo: zondamovLogo,
        },
        {
          index: "06",
          kicker: "CUENTAS DE CLIENTES",
          name: "Debitú",
          role: "Desarrollador backend",
          myRole: "Desarrollador backend — cuentas, saldos y sincronización en la nube.",
          result: "El comercio puede enviar el saldo actualizado por WhatsApp en un solo toque.",
          description:
            "App para gestionar cuentas de clientes en comercios de barrio. Registrar clientes, cargar deudas y pagos, enviar saldos por WhatsApp y usar la calculadora integrada.",
          features: [
            {
              title: "UX móvil moderna",
              text: "Interfaz con bottom sheets, transparencias elegantes y navegación por gestos.",
            },
            { title: "Login seguro", text: "Autenticación con Google y sincronización en la nube." },
          ],
          stack: ["Mobile", "WhatsApp API", "Google Auth", "Bottom Sheets"],
          links: [
            { label: "Sitio web", url: urls.debitu, icon: ExternalLink, primary: true },
            { label: "Repositorio", url: urls.debituRepo, icon: Github },
          ],
          gallery: g.debitu,
          logo: debituLogo,
        },
        {
          index: "07",
          kicker: "FIDELIZACIÓN EN TIEMPO REAL",
          name: "Clientes El Lote",
          role: "Desarrollador backend",
          myRole: "Desarrollador backend — esquema en Supabase, sincronización realtime y API del panel admin.",
          result: "En producción para un comercio real, con sincronización en vivo entre local y clientes.",
          description:
            "Ecosistema de fidelización con sincronización en tiempo real entre el comercio y el cliente. Puntos por compras en el local, canje por promociones, catálogo dinámico, avisos, horarios y mapa integrado.",
          features: [
            {
              title: "Panel de administración",
              text: "Gestión de usuarios, carga de promociones y avisos masivos. Disponible en Google Play.",
            },
            {
              title: "Tiempo real",
              text: "Sincronización en vivo basada en Supabase entre el cliente y el comercio.",
            },
          ],
          metrics: [
            { value: "112", label: "clientes activos" },
            { value: "84", label: "descargas en Google Play" },
          ],
          stack: ["Supabase", "Realtime", "Mobile", "Panel Admin"],
          links: [
            { label: "Google Play", url: urls.lotePlay, icon: ExternalLink, primary: true },
            { label: "Repo usuarios", url: urls.loteUsers, icon: Github },
            { label: "Repo admin", url: urls.loteAdmin, icon: Github },
          ],
          gallery: g.lote,
          logo: loteLogo,
        },
      ] as Project[],
      teamUrl: urls.team,
    },
    contact: {
      eyebrow: "Contacto",
      title: "Trabajemos juntos",
      description:
        "Estoy disponible para nuevos proyectos, colaboraciones y oportunidades. No dudes en escribirme.",
      personalTitle: "Información personal",
      personal: [
        { key: "dob", label: "Fecha de nacimiento", value: "16 / 08 / 2003" },
        { key: "nat", label: "Nacionalidad", value: "Argentina" },
        { key: "loc", label: "Ubicación", value: "San Juan, Argentina" },
      ],
      labels: {
        proEmail: "Email profesional",
        persEmail: "Email personal",
        mainPhone: "Teléfono principal",
        secPhone: "Teléfono secundario",
        linkedin: "LinkedIn",
        github: "GitHub",
      },
      copy: "Copiar email",
      copied: "Email copiado",
      cvTitle: "¿Preferís la versión corta?",
      cvText: "Descargá mi CV en PDF — experiencia, stack y proyectos en una página.",
      footer: "Hecho con dedicación desde San Juan",
    },
  },
} as const;

export type Copy = (typeof content)["en"];
