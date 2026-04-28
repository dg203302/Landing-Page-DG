import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Bus, Sparkles, Github, ExternalLink, Users, Briefcase, Smartphone } from "lucide-react";
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

const trainerSlides = [trainer1, trainer2, trainer3];

const TrainerCard = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((p) => (p + 1) % trainerSlides.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <article className="group relative w-full rounded-3xl overflow-hidden shadow-card border border-foreground/10 transition-all duration-500 hover:border-brand/40">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {trainerSlides.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
              active === idx ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/70 to-background/40" />
      </div>

      <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-brand/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[hsl(var(--accent-2)/0.12)] blur-3xl" />

      <div className="relative p-7 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-semibold tracking-widest uppercase text-brand px-2.5 py-1 rounded-full border border-brand/30 bg-background/60 backdrop-blur">
              App de salud & fitness
            </span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <img
              src={trainerLogo}
              alt="Logo de TrAIner"
              className="w-16 h-16 rounded-2xl shadow-glow object-cover bg-[#000]"
            />
            <h3 className="font-display text-3xl md:text-4xl font-bold">TrAIner</h3>
          </div>

          <p className="text-foreground/80 leading-relaxed mb-6">
            Tu entrenador y nutricionista personal, impulsado por IA.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {["IA / LLM", "PWA", "JavaScript", "Personalización"].map((s) => (
              <span
                key={s}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-surface-elevated/80 backdrop-blur text-foreground/80 border border-foreground/10"
              >
                {s}
              </span>
            ))}
          </div>

          <a
            href="https://github.com/dg203302/AIPersonalTrainer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-brand text-brand-foreground text-sm font-medium hover:shadow-glow transition-all"
          >
            <Github className="h-4 w-4" />
            Ver repositorio
          </a>
        </div>

        <div className="lg:col-span-8 space-y-5">
          <p className="text-sm md:text-base text-foreground/85 leading-relaxed">
            App pensada para que cualquier persona pueda tener un plan de entrenamiento y
            alimentación completamente personalizado, sin necesidad de un nutricionista o
            entrenador personal.
          </p>
          <p className="text-sm md:text-base text-foreground/85 leading-relaxed">
            El usuario ingresa peso actual y deseado, altura y edad. Con esos datos la IA genera
            dos planes a medida.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-surface/70 backdrop-blur border border-foreground/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🏋️</span>
                <h4 className="font-display font-semibold">Plan de entrenamiento</h4>
              </div>
              <p className="text-sm text-foreground/75 leading-relaxed">
                Biblioteca de más de 10 ejercicios segmentados por grupo muscular. El usuario
                elige los días de la semana y el nivel de intensidad; la IA arma una rutina
                estructurada, progresiva y eficiente.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-surface/70 backdrop-blur border border-foreground/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🥗</span>
                <h4 className="font-display font-semibold">Plan de alimentación</h4>
              </div>
              <p className="text-sm text-foreground/75 leading-relaxed">
                Basándose en los datos físicos del usuario, la IA genera un plan nutricional
                diario con comidas recomendadas y las calorías totales según su objetivo: perder
                peso, ganar masa muscular o mantenerse.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            {trainerSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                aria-label={`Mostrar captura ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  active === idx ? "w-8 bg-brand" : "w-2 bg-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

const ProxyRTCard = () => (
  <article className="group relative w-full p-7 md:p-10 rounded-3xl glass overflow-hidden shadow-card hover:border-brand/40 transition-all duration-500">
    <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-brand/15 blur-3xl group-hover:bg-brand/25 transition-colors" />
    <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[hsl(var(--accent-2)/0.12)] blur-3xl" />

    <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-4">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-glow shrink-0">
            <Bus className="h-6 w-6 text-brand-foreground" />
          </div>
          <span className="text-[10px] font-semibold tracking-widest uppercase text-brand px-2.5 py-1 rounded-full border border-brand/30">
            API DE TRANSPORTE PÚBLICO
          </span>
        </div>
        <h3 className="font-display text-3xl md:text-4xl font-bold mb-3">ProxyRT</h3>
        <p className="text-foreground/70 leading-relaxed mb-4">
          Tiempos de arribo en tiempo real para Red Tulum, sin API oficial.
        </p>
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 border border-brand/30 text-xs text-brand font-medium">
          <Sparkles className="h-3.5 w-3.5" />
          Backend de datos para ZondaMov
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {["Python", "Playwright", "FastAPI", "Uvicorn", "Docker"].map((s) => (
            <span
              key={s}
              className="text-xs font-medium px-3 py-1.5 rounded-full bg-surface-elevated text-foreground/80 border border-foreground/5"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href="https://github.com/dg203302/Proxy_RT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-brand text-brand-foreground text-sm font-medium hover:shadow-glow transition-all"
          >
            <Github className="h-4 w-4" />
            Repositorio
          </a>
          <a
            href="https://www.linkedin.com/posts/diego-jose-garc%C3%ADa_informe-de-desarrollo-activity-7450860633581006848-jY4Z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass text-sm font-medium hover:bg-surface-elevated transition-all"
          >
            <ExternalLink className="h-4 w-4" />
            Informe en LinkedIn
          </a>
        </div>
      </div>

      <div className="lg:col-span-8 space-y-5">
        <p className="text-sm md:text-base text-foreground/75 leading-relaxed">
          Llevo meses construyendo una PWA de seguimiento de transporte público. El mayor desafío
          no fue la interfaz — fue conseguir los datos: tiempos de arribo en tiempo real para
          cada parada de la red de Red Tulum, sin API oficial ni integración formal. Solo
          ingenio.
        </p>
        <p className="text-sm md:text-base text-foreground/75 leading-relaxed">
          La respuesta: un proxy que intercepta las peticiones a la API de Moovit desde el sitio
          público de Red Tulum y las expone como un endpoint propio. Tres prototipos. Dos
          descartados. Uno que funciona.
        </p>
        <p className="text-sm md:text-base text-foreground/75 leading-relaxed">
          La clave del tercero fue descubrir que cada línea tiene una URL canónica única en el
          sitio y que todas las paradas se cargan en el DOM al accederla. Eso permitió
          pre-indexar líneas y paradas, eliminando toda búsqueda secuencial y reduciendo el
          acceso a tiempo constante.
        </p>
        <p className="text-sm md:text-base text-foreground/75 leading-relaxed">
          Resultado: un proxy liviano, dockerizado, que responde como si fuera la API de Moovit
          — construido encima de datos que siempre estuvieron ahí, solo había que saber cómo
          leerlos. Hoy es la base de datos en tiempo real que alimenta a <span className="text-brand font-medium">ZondaMov</span>.
        </p>

        <div className="flex gap-3 p-4 rounded-2xl bg-surface-elevated/40 border border-foreground/5 text-xs text-foreground/55 leading-relaxed">
          <Sparkles className="h-4 w-4 text-brand shrink-0 mt-0.5" />
          <p>
            <span className="font-semibold text-foreground/70">Aviso legal: </span>
            Este proyecto accede únicamente a información pública del sitio oficial de Red Tulum.
            No se procesan datos privados ni protegidos. No existe afiliación oficial con Red
            Tulum ni con Moovit. Los datos y marcas pertenecen a sus respectivos titulares.
          </p>
        </div>
      </div>
    </div>
  </article>
);

type TeamProject = {
  name: string;
  eyebrow: string;
  tagline: string;
  description: string;
  logo: string;
  image: string;
  role: { icon: typeof Briefcase; label: string };
  stack: string[];
  links: { label: string; url: string; icon: typeof Github; primary?: boolean }[];
};

const teamProjects: TeamProject[] = [
  {
    name: "ZondaMov",
    eyebrow: "Transporte en tiempo real",
    tagline: "App de transporte público con estética Liquid Glass.",
    description:
      "Mapa con OpenStreetMap, búsqueda multimodal de líneas, paradas y ubicaciones, planificador de recorridos con control de trasbordos y horarios en tiempo real. Compatible con teléfonos, tablets y navegador, con modo oscuro y control de rendimiento.",
    logo: zondamovLogo,
    image: zondamov1,
    role: { icon: Briefcase, label: "Desarrollador y arquitecto principal" },
    stack: ["React", "OpenStreetMap", "Liquid Glass UI", "PWA", "TypeScript"],
    links: [
      { label: "Repositorio", url: "https://github.com/dg203302/ZondaMov", icon: Github, primary: true },
    ],
  },
  {
    name: "Debitú",
    eyebrow: "Cuentas corrientes",
    tagline: "App para gestionar cuentas corrientes en negocios de barrio.",
    description:
      "Registrá clientes, anotá deudas y pagos, enviá saldos por WhatsApp y usá la calculadora integrada. Interfaz moderna con bottom-sheets, transparencias elegantes y login seguro con Google.",
    logo: debituLogo,
    image: debitu1,
    role: { icon: Smartphone, label: "Dev backend y diseñador móvil" },
    stack: ["Mobile", "WhatsApp API", "Google Auth", "Bottom Sheets"],
    links: [
      { label: "Sitio web", url: "https://debitu.lovable.app/", icon: ExternalLink, primary: true },
      { label: "Repositorio", url: "https://github.com/dg203302/SistemaClientesC", icon: Github },
    ],
  },
  {
    name: "Clientes El Lote",
    eyebrow: "Fidelización en tiempo real",
    tagline: "Ecosistema de fidelización con sincronización en tiempo real.",
    description:
      "Basado en Supabase con sincronización en tiempo real entre el negocio y el cliente. App con sistema de puntos por compras presenciales, canje por promociones exclusivas, catálogo dinámico de ofertas, avisos, horarios y mapa integrado. Incluye panel admin interno para gestionar usuarios, cargar promos y enviar comunicados masivos. Ya disponible en Google Play.",
    logo: loteLogo,
    image: lote1,
    role: { icon: Briefcase, label: "Dev backend" },
    stack: ["Supabase", "Realtime", "Mobile", "Admin Panel"],
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=app.netlify.loteclientes.twa&hl=es_AR", icon: ExternalLink, primary: true },
      { label: "Repo Usuarios", url: "https://github.com/dg203302/SistemaClientes", icon: Github },
      { label: "Repo Admin", url: "https://github.com/dg203302/SistemaAdmin", icon: Github },
    ],
  },
];

const TeamProjectCard = ({ project }: { project: TeamProject }) => {
  const RoleIcon = project.role.icon;
  return (
    <article className="group relative w-full rounded-3xl overflow-hidden shadow-card border border-foreground/10 hover:border-brand/40 transition-all duration-500">
      <div className="absolute inset-0">
        <img
          src={project.image}
          alt={`Captura de ${project.name}`}
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-background/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/75 to-background/40" />
      </div>

      <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[hsl(var(--accent-2)/0.15)] blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative p-7 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-semibold tracking-widest uppercase text-brand px-2.5 py-1 rounded-full border border-brand/30 bg-background/60 backdrop-blur">
              {project.eyebrow}
            </span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <img
              src={project.logo}
              alt={`Logo de ${project.name}`}
              className="w-16 h-16 rounded-2xl shadow-glow object-contain bg-background/60 p-2 border border-foreground/10"
            />
            <h3 className="font-display text-3xl md:text-4xl font-bold">{project.name}</h3>
          </div>

          <p className="text-foreground/85 leading-relaxed mb-5">{project.tagline}</p>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-brand/10 border border-brand/30 text-xs text-brand font-medium">
            <RoleIcon className="h-3.5 w-3.5" />
            Mi rol: {project.role.label}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((s) => (
              <span
                key={s}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-surface-elevated/80 backdrop-blur text-foreground/80 border border-foreground/10"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.links.map((l) => {
              const Icon = l.icon;
              return (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    l.primary
                      ? "inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-brand text-brand-foreground text-sm font-medium hover:shadow-glow transition-all"
                      : "inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass text-sm font-medium hover:bg-surface-elevated transition-all"
                  }
                >
                  <Icon className="h-4 w-4" />
                  {l.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-7 flex items-center">
          <p className="text-sm md:text-base text-foreground/85 leading-relaxed">
            {project.description}
          </p>
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
            title="En lo que estoy trabajando"
            description="Proyectos donde combino ingenio técnico, IA y desarrollo end-to-end para resolver problemas reales."
          />

          <div className="flex flex-col gap-6">
            <Reveal>
              <TrainerCard />
            </Reveal>
            <Reveal delay={120}>
              <ProxyRTCard />
            </Reveal>
          </div>
        </div>

        <div>
          <SectionHeader
            eyebrow="Proyectos en conjunto"
            title="Trabajos en equipo"
            description={<>
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
            </>}
          />

          <div className="flex flex-col gap-6">
            {teamProjects.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <TeamProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
