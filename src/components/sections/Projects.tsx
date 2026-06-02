import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Github, ExternalLink, Download, Bus } from "lucide-react";
import trainerLogo from "@/assets/trainer-logo.png";
import trainer1 from "@/assets/trainer-1.png";
import trainer2 from "@/assets/trainer-2.png";
import trainer3 from "@/assets/trainer-3.png";
import debituLogo from "@/assets/debitu-logo.png";
import debitu1 from "@/assets/debitu-1.png";
import zondamovLogo from "@/assets/zondamov-logo.png";
import zondamov1 from "@/assets/zondamov-1.png";
import loteLogo from "@/assets/lote-logo.png";
import lote1 from "@/assets/lote-1.png";
import viceclock1 from "@/assets/viceclock-1.png";
import viceclock2 from "@/assets/viceclock-2.png";
import viceclock3 from "@/assets/viceclock-3.png";
import viceclockLogo from "@/assets/viceclock-logo.png";
import postcredits1 from "@/assets/postcredits-1.png";
import postcredits2 from "@/assets/postcredits-2.png";
import postcredits3 from "@/assets/postcredits-3.png";
import postcredits4 from "@/assets/postcredits-4.png";
import postcredits5 from "@/assets/postcredits-5.png";
import postcredits6 from "@/assets/postcredits-6.png";
import postcredits7 from "@/assets/postcredits-7.png";
import postcredits8 from "@/assets/postcredits-8.png";
import postcredits9 from "@/assets/postcredits-9.png";
import postcredits10 from "@/assets/postcredits-10.png";
import postcreditsLogo from "@/assets/postcredits-logo.png";

type Link = { label: string; url: string; icon: typeof Github; primary?: boolean };
type Feature = { title: string; text: string };
type Project = {
  index: string;            // "01", "02"…
  kicker: string;           // "EXAMPLE… / PWA · COMPANION APP"
  name: string;
  role?: string;
  description: string;
  features: Feature[];
  stack: string[];
  links: Link[];
  gallery: string[];        // 1–5 images
  logo?: string;
  variant: "light" | "dark";
};

const projects: Project[] = [
  {
    index: "01",
    kicker: "EXAMPLE — APP DE SALUD & FITNESS",
    name: "TrAIner",
    role: "AI · PWA · JavaScript",
    description:
      "Tu entrenador y nutricionista personal impulsado por IA. El usuario ingresa peso, altura y edad y la IA genera planes personalizados de entrenamiento y alimentación.",
    features: [
      {
        title: "Plan de entrenamiento",
        text: "Biblioteca de +10 ejercicios segmentados por grupo muscular, días seleccionables y nivel de intensidad. Rutina estructurada y progresiva.",
      },
      {
        title: "Plan de alimentación",
        text: "La IA calcula calorías diarias según objetivo (perder peso, ganar masa o mantener) y arma un plan nutricional adaptado.",
      },
    ],
    stack: ["IA / LLM", "PWA", "JavaScript", "Personalización"],
    links: [
      { label: "Repositorio", url: "https://github.com/dg203302/AIPersonalTrainer", icon: Github, primary: true },
    ],
    gallery: [trainer1, trainer2, trainer3],
    logo: trainerLogo,
    variant: "light",
  },
  {
    index: "02",
    kicker: "EXAMPLE — PWA / COMPANION APP DE CINE",
    name: "Post Credits",
    role: "PWA · React · TMDB API",
    description:
      "Un lugar moderno para explorar películas, series y las personas que las hacen: créditos, escenas, trailers y detalles del cast en una sola app.",
    features: [
      {
        title: "Descubrimiento",
        text: "Películas en cartelera, trending, últimas series y personas del momento, con buscador global de títulos y personas.",
      },
      {
        title: "Instalable como PWA",
        text: "Publicada en PWA Store con métricas de performance perfectas en desktop y mobile. Se instala como app nativa.",
      },
    ],
    stack: ["PWA", "React", "TMDB API", "Responsive"],
    links: [
      { label: "Visitar sitio", url: "https://postcredits.netlify.app", icon: ExternalLink, primary: true },
      { label: "PWA Store", url: "https://www.pwastore.io/app/post-credits", icon: Download },
    ],
    gallery: [postcredits1, postcredits2, postcredits3, postcredits4, postcredits5, postcredits6, postcredits7, postcredits8, postcredits9, postcredits10],
    logo: postcreditsLogo,
    variant: "dark",
  },
  {
    index: "03",
    kicker: "EXAMPLE — CUENTA REGRESIVA GTA VI",
    name: "ViceClock",
    role: "JavaScript · YouTube API",
    description:
      "Landing inmersiva con contador en tiempo real hasta el lanzamiento de GTA VI. Estética Vice City, trailers integrados, imágenes y música de fondo.",
    features: [
      {
        title: "Diseño responsivo",
        text: "Layout adaptativo y estética moderna inspirada en la identidad visual del juego, optimizado para cualquier dispositivo.",
      },
      {
        title: "Multimedia inmersiva",
        text: "Trailers integrados vía YouTube API, imágenes de fondo del universo Vice y música ambiental.",
      },
    ],
    stack: ["JavaScript", "YouTube API"],
    links: [
      { label: "Visitar sitio", url: "https://viceclock.netlify.app", icon: ExternalLink, primary: true },
      { label: "PWA Store", url: "https://www.pwastore.io/app/viceclock", icon: Download },
    ],
    gallery: [viceclock1, viceclock2, viceclock3],
    logo: viceclockLogo,
    variant: "light",
  },
  {
    index: "04",
    kicker: "EXAMPLE — API DE TRANSPORTE PÚBLICO",
    name: "ProxyRT",
    role: "Python · FastAPI · Docker",
    description:
      "Tiempos de arribo en tiempo real para Red Tulum sin API oficial. Proxy que intercepta peticiones a la API de Moovit y las expone como endpoint propio. Backend de datos que alimenta a ZondaMov.",
    features: [
      {
        title: "Pre-indexado canónico",
        text: "Cada línea tiene una URL única donde todas las paradas se cargan en el DOM. Acceso a tiempo constante después de dos prototipos descartados.",
      },
      {
        title: "Liviano y dockerizado",
        text: "Proxy minimalista contenerizado, listo para producción. Solo accede a información pública del sitio oficial.",
      },
    ],
    stack: ["Python", "Playwright", "FastAPI", "Uvicorn", "Docker"],
    links: [
      { label: "Repositorio", url: "https://github.com/dg203302/Proxy_RT", icon: Github, primary: true },
      { label: "Informe en LinkedIn", url: "https://www.linkedin.com/posts/diego-jose-garc%C3%ADa_informe-de-desarrollo-activity-7450860633581006848-jY4Z", icon: ExternalLink },
    ],
    gallery: [],
    variant: "dark",
  },
];

const teamProjects: Project[] = [
  {
    index: "05",
    kicker: "EXAMPLE — TRANSPORTE EN TIEMPO REAL",
    name: "ZondaMov",
    role: "Desarrollador y arquitecto principal",
    description:
      "App de transporte público con estética Liquid Glass. Mapa con OpenStreetMap, búsqueda multimodal de líneas, paradas y ubicaciones, planificador de recorridos con control de trasbordos y horarios en tiempo real.",
    features: [
      {
        title: "Multiplataforma",
        text: "Compatible con teléfonos, tablets y navegador, con modo oscuro y control de rendimiento.",
      },
      {
        title: "Liquid Glass UI",
        text: "Interfaz inspirada en transparencias y profundidad, con foco en legibilidad sobre el mapa.",
      },
    ],
    stack: ["React", "OpenStreetMap", "Liquid Glass UI", "PWA", "TypeScript"],
    links: [
      { label: "Repositorio", url: "https://github.com/dg203302/ZondaMov", icon: Github, primary: true },
    ],
    gallery: [zondamov1],
    logo: zondamovLogo,
    variant: "light",
  },
  {
    index: "06",
    kicker: "EXAMPLE — CUENTAS CORRIENTES",
    name: "Debitú",
    role: "Dev backend y diseñador móvil",
    description:
      "App para gestionar cuentas corrientes en negocios de barrio. Registrá clientes, anotá deudas y pagos, enviá saldos por WhatsApp y usá la calculadora integrada.",
    features: [
      {
        title: "UX móvil moderna",
        text: "Interfaz con bottom-sheets, transparencias elegantes y navegación gestual.",
      },
      {
        title: "Login seguro",
        text: "Autenticación con Google y sincronización en la nube.",
      },
    ],
    stack: ["Mobile", "WhatsApp API", "Google Auth", "Bottom Sheets"],
    links: [
      { label: "Sitio web", url: "https://debitu.lovable.app/", icon: ExternalLink, primary: true },
      { label: "Repositorio", url: "https://github.com/dg203302/SistemaClientesC", icon: Github },
    ],
    gallery: [debitu1],
    logo: debituLogo,
    variant: "dark",
  },
  {
    index: "07",
    kicker: "EXAMPLE — FIDELIZACIÓN EN TIEMPO REAL",
    name: "Clientes El Lote",
    role: "Dev backend",
    description:
      "Ecosistema de fidelización con sincronización en tiempo real entre el negocio y el cliente. Puntos por compras presenciales, canje por promociones, catálogo dinámico, avisos, horarios y mapa integrado.",
    features: [
      {
        title: "Panel admin",
        text: "Gestión de usuarios, carga de promos y comunicados masivos. Disponible en Google Play.",
      },
      {
        title: "Realtime",
        text: "Sincronización en vivo basada en Supabase entre el cliente y el negocio.",
      },
    ],
    stack: ["Supabase", "Realtime", "Mobile", "Admin Panel"],
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=app.netlify.loteclientes.twa&hl=es_AR", icon: ExternalLink, primary: true },
      { label: "Repo Usuarios", url: "https://github.com/dg203302/SistemaClientes", icon: Github },
      { label: "Repo Admin", url: "https://github.com/dg203302/SistemaAdmin", icon: Github },
    ],
    gallery: [lote1],
    logo: loteLogo,
    variant: "light",
  },
];

// Editorial card — black/white alternating, big bold uppercase title, image collage, micro columns
const EditorialCard = ({ project }: { project: Project }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (project.gallery.length < 2) return;
    const id = setInterval(
      () => setActive((p) => (p + 1) % project.gallery.length),
      4500
    );
    return () => clearInterval(id);
  }, [project.gallery.length]);

  const isDark = project.variant === "dark";
  // Pure editorial palette overriding the global theme on purpose
  const bg = isDark ? "bg-[#0a0a0a]" : "bg-[#f5f3ee]";
  const fg = isDark ? "text-[#f5f3ee]" : "text-[#0a0a0a]";
  const muted = isDark ? "text-[#f5f3ee]/55" : "text-[#0a0a0a]/55";
  const rule = isDark ? "border-[#f5f3ee]/15" : "border-[#0a0a0a]/15";
  const chipBorder = isDark ? "border-[#f5f3ee]/25" : "border-[#0a0a0a]/25";
  const primaryBtn = isDark
    ? "bg-[#f5f3ee] text-[#0a0a0a] hover:bg-white"
    : "bg-[#0a0a0a] text-[#f5f3ee] hover:bg-black";
  const ghostBtn = isDark
    ? "border border-[#f5f3ee]/30 text-[#f5f3ee] hover:bg-[#f5f3ee]/10"
    : "border border-[#0a0a0a]/25 text-[#0a0a0a] hover:bg-[#0a0a0a]/5";

  const hasGallery = project.gallery.length > 0;

  return (
    <article className={`relative w-full ${bg} ${fg} overflow-hidden shadow-card`}>
      {/* Top meta bar */}
      <div className={`flex items-center justify-between px-6 md:px-12 pt-6 md:pt-8 text-[10px] tracking-[0.3em] uppercase ${muted}`}>
        <span>{project.kicker}</span>
        <span className="font-editorial text-base tracking-normal">{project.index}</span>
      </div>

      <div className="relative px-6 md:px-12 pt-6 md:pt-8 pb-10 md:pb-12">
        {/* HEADER ROW: title + logo */}
        <div className="flex items-end justify-between gap-6 mb-8 md:mb-10">
          <h3 className="font-editorial uppercase leading-[0.9] tracking-tight text-5xl md:text-7xl lg:text-8xl">
            {project.name}
          </h3>
          {project.logo && (
            <img
              src={project.logo}
              alt={`Logo de ${project.name}`}
              className={`shrink-0 hidden sm:block w-16 h-16 md:w-20 md:h-20 object-contain ${
                isDark ? "bg-[#f5f3ee]/5" : "bg-[#0a0a0a]/5"
              } p-2 border ${rule}`}
            />
          )}
        </div>

        {/* Three little stacked bars motif, like the template */}
        <div className="flex items-center gap-2 mb-8">
          <span className={`h-1 w-6 ${isDark ? "bg-[#f5f3ee]" : "bg-[#0a0a0a]"}`} />
          <span className={`h-1 w-3 ${isDark ? "bg-[#f5f3ee]" : "bg-[#0a0a0a]"}`} />
          <span className={`h-1 w-3 ${isDark ? "bg-[#f5f3ee]/50" : "bg-[#0a0a0a]/50"}`} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
          {/* LEFT: gallery */}
          <div className="lg:col-span-7">
            {hasGallery ? (
              <div className="space-y-3">
                {/* main image */}
                <div className={`relative aspect-[16/10] overflow-hidden border ${rule}`}>
                  {project.gallery.map((src, idx) => (
                    <img
                      key={src}
                      src={src}
                      alt={`Captura ${idx + 1} de ${project.name}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                        active === idx ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>
                {/* thumbnails */}
                {project.gallery.length > 1 && (
                  <div className="grid grid-cols-5 gap-2">
                    {project.gallery.map((src, idx) => (
                      <button
                        key={src}
                        onClick={() => setActive(idx)}
                        aria-label={`Ver captura ${idx + 1}`}
                        className={`relative aspect-square overflow-hidden border transition-all ${
                          active === idx
                            ? isDark
                              ? "border-[#f5f3ee] opacity-100"
                              : "border-[#0a0a0a] opacity-100"
                            : `${rule} opacity-50 hover:opacity-100`
                        }`}
                      >
                        <img src={src} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              // No images (ProxyRT) — big monogram block
              <div className={`relative aspect-[16/10] border ${rule} flex items-center justify-center ${isDark ? "bg-[#f5f3ee]/[0.03]" : "bg-[#0a0a0a]/[0.03]"}`}>
                <Bus className={`h-24 w-24 ${muted}`} strokeWidth={1} />
                <span className={`absolute bottom-4 left-4 text-[10px] tracking-[0.3em] uppercase ${muted}`}>
                  Backend / no UI
                </span>
              </div>
            )}
          </div>

          {/* RIGHT: text columns */}
          <div className="lg:col-span-5 flex flex-col">
            {project.role && (
              <p className={`text-[10px] tracking-[0.3em] uppercase ${muted} mb-3`}>
                {project.role}
              </p>
            )}
            <p className={`text-sm md:text-base leading-relaxed mb-8 ${isDark ? "text-[#f5f3ee]/85" : "text-[#0a0a0a]/85"}`}>
              {project.description}
            </p>

            {/* Two-column micro features with vertical separator */}
            <div className={`grid grid-cols-2 gap-6 border-t ${rule} pt-6 mb-8`}>
              {project.features.map((f, i) => (
                <div
                  key={f.title}
                  className={i === 0 ? `pr-2 border-r ${rule}` : "pl-2"}
                >
                  <p className={`text-[10px] tracking-[0.25em] uppercase ${muted} mb-2`}>
                    Example 0{i + 1}
                  </p>
                  <h4 className="font-editorial uppercase text-sm md:text-base leading-tight mb-2">
                    {f.title}
                  </h4>
                  <p className={`text-xs leading-relaxed ${isDark ? "text-[#f5f3ee]/65" : "text-[#0a0a0a]/65"}`}>
                    {f.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Stack */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className={`text-[10px] tracking-[0.15em] uppercase font-medium px-2.5 py-1 border ${chipBorder}`}
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.links.map((l) => {
                const Icon = l.icon;
                return (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2.5 text-[11px] tracking-[0.2em] uppercase font-medium transition-all ${
                      l.primary ? primaryBtn : ghostBtn
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {l.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export const Projects = () => {
  return (
    <section id="proyectos" className="py-24 md:py-32 relative">
      <div className="container space-y-20">
        <div>
          <SectionHeader
            eyebrow="Proyectos personales"
            title="Selected Work"
            description="Proyectos donde combino ingenio técnico, IA y desarrollo end-to-end para resolver problemas reales."
          />

          <div className="flex flex-col gap-8">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <EditorialCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <SectionHeader
            eyebrow="Proyectos en conjunto"
            title="Team Work"
            description={
              <>
                Productos construidos junto a{" "}
                <a
                  href="https://djsolutions.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:text-brand/80 underline underline-offset-2"
                >
                  D&JSolutions
                </a>
                , donde participé en distintos roles técnicos y de diseño.
              </>
            }
          />

          <div className="flex flex-col gap-8">
            {teamProjects.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <EditorialCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
