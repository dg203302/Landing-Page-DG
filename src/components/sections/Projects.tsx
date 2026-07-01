import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Github, ExternalLink, Download, Bus } from "lucide-react";
import trainerLogo from "@/assets/trainer-logo.png";
import trainer1 from "@/assets/trainer-1.png";
import trainer2 from "@/assets/trainer-2.png";
import trainer3 from "@/assets/trainer-3.png";
import trainer4 from "@/assets/trainer-4.png";
import trainer5 from "@/assets/trainer-5.png";
import trainer6 from "@/assets/trainer-6.png";
import trainer7 from "@/assets/trainer-7.png";

import debituLogo from "@/assets/debitu-logo.png";
import debitu1 from "@/assets/debitu-1.png";
import debitu2 from "@/assets/debitu-2.png";
import debitu3 from "@/assets/debitu-3.png";
import debitu4 from "@/assets/debitu-4.png";
import debitu5 from "@/assets/debitu-5.png";
import zondamovLogo from "@/assets/zondamov-logo.png";
import zondamov1 from "@/assets/zondamov-1.png";
import zondamov2 from "@/assets/zondamov-2.png";
import zondamov3 from "@/assets/zondamov-3.png";
import zondamov4 from "@/assets/zondamov-4.png";
import zondamov5 from "@/assets/zondamov-5.png";
import zondamov6 from "@/assets/zondamov-6.png";
import loteLogo from "@/assets/lote-logo.png";
import lote1 from "@/assets/lote-1.png";
import lote2 from "@/assets/lote-2.png";
import lote3 from "@/assets/lote-3.png";
import lote4 from "@/assets/lote-4.png";
import lote5 from "@/assets/lote-5.png";
import viceclock1 from "@/assets/viceclock-1.png";
import viceclock2 from "@/assets/viceclock-2.png";
import viceclock3 from "@/assets/viceclock-3.png";
import viceclock4 from "@/assets/viceclock-4.png";
import viceclock5 from "@/assets/viceclock-5.png";
import viceclock6 from "@/assets/viceclock-6.png";
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
    kicker: "HEALTH & FITNESS APP",
    name: "TrAIner",
    role: "AI · PWA · JavaScript",
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
    links: [
      { label: "Repository", url: "https://github.com/dg203302/AIPersonalTrainer", icon: Github, primary: true },
    ],
    gallery: [trainer1, trainer2, trainer3, trainer4, trainer5, trainer6, trainer7],
    logo: trainerLogo,
    variant: "light",
  },
  {
    index: "02",
    kicker: "PWA / CINEMA COMPANION APP",
    name: "Post Credits",
    role: "PWA · React · TMDB API",
    description:
      "A modern place to explore movies, series and the people who make them: credits, scenes, trailers and cast details in a single app.",
    features: [
      {
        title: "Discovery",
        text: "Movies in theaters, trending, latest series and trending people, with a global search for titles and people.",
      },
      {
        title: "Installable as PWA",
        text: "Published on PWA Store with perfect performance metrics on desktop and mobile. Installs as a native app.",
      },
    ],
    stack: ["PWA", "React", "TMDB API", "Responsive"],
    links: [
      { label: "Visit site", url: "https://postcredits.netlify.app", icon: ExternalLink, primary: true },
      { label: "PWA Store", url: "https://www.pwastore.io/app/post-credits", icon: Download },
    ],
    gallery: [postcredits1, postcredits2, postcredits3, postcredits4, postcredits5, postcredits6, postcredits7, postcredits8, postcredits9, postcredits10],
    logo: postcreditsLogo,
    variant: "dark",
  },
  {
    index: "03",
    kicker: "GTA VI COUNTDOWN",
    name: "ViceClock",
    role: "JavaScript · YouTube API",
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
      { label: "Visit site", url: "https://viceclock.netlify.app", icon: ExternalLink, primary: true },
      { label: "PWA Store", url: "https://www.pwastore.io/app/viceclock", icon: Download },
    ],
    gallery: [viceclock1, viceclock2, viceclock3, viceclock4, viceclock5, viceclock6],
    logo: viceclockLogo,
    variant: "light",
  },
];

const teamProjects: Project[] = [
  {
    index: "05",
    kicker: "REAL-TIME TRANSPORT",
    name: "ZondaMov",
    role: "Lead developer and architect",
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
    links: [
      { label: "Repository", url: "https://github.com/dg203302/ZondaMov", icon: Github, primary: true },
    ],
    gallery: [zondamov1, zondamov2, zondamov3, zondamov4, zondamov5, zondamov6],
    logo: zondamovLogo,
    variant: "light",
  },
  {
    index: "06",
    kicker: "CUSTOMER ACCOUNTS",
    name: "Debitú",
    role: "Backend dev and mobile designer",
    description:
      "App to manage customer accounts in neighborhood businesses. Register clients, log debts and payments, send balances via WhatsApp and use the built-in calculator.",
    features: [
      {
        title: "Modern mobile UX",
        text: "Interface with bottom sheets, elegant transparencies and gesture-based navigation.",
      },
      {
        title: "Secure login",
        text: "Google authentication and cloud sync.",
      },
    ],
    stack: ["Mobile", "WhatsApp API", "Google Auth", "Bottom Sheets"],
    links: [
      { label: "Website", url: "https://debitu.lovable.app/", icon: ExternalLink, primary: true },
      { label: "Repository", url: "https://github.com/dg203302/SistemaClientesC", icon: Github },
    ],
    gallery: [debitu1, debitu2, debitu3, debitu4, debitu5],
    logo: debituLogo,
    variant: "dark",
  },
  {
    index: "07",
    kicker: "REAL-TIME LOYALTY",
    name: "Clientes El Lote",
    role: "Backend dev",
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
    stack: ["Supabase", "Realtime", "Mobile", "Admin Panel"],
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=app.netlify.loteclientes.twa&hl=es_AR", icon: ExternalLink, primary: true },
      { label: "Users repo", url: "https://github.com/dg203302/SistemaClientes", icon: Github },
      { label: "Admin repo", url: "https://github.com/dg203302/SistemaAdmin", icon: Github },
    ],
    gallery: [lote1, lote2, lote3, lote4, lote5],
    logo: loteLogo,
    variant: "light",
  },
];

// Editorial card — always black glass, legible light text
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

  // All project cards now share a black translucent background so the bubble
  // wallpaper shows through while keeping every project readable.
  const bg = "bg-[#0a0a0a]/40 backdrop-blur-2xl";
  const fg = "text-[#f5f3ee]";
  const muted = "text-[#f5f3ee]/70";
  const rule = "border-[#f5f3ee]/20";
  const chipBorder = "border-[#f5f3ee]/30";
  const imageBorder = "border-[#f5f3ee]/15";
  const primaryBtn = "bg-[#f5f3ee] text-[#0a0a0a] hover:bg-white";
  const ghostBtn = "border border-[#f5f3ee]/40 text-[#f5f3ee] hover:bg-[#f5f3ee]/10";


  const hasGallery = project.gallery.length > 0;

  return (
    <article className={`relative w-full ${bg} ${fg} overflow-hidden shadow-card`}>
      {/* Top meta bar */}
      <div className={`flex items-center justify-between px-6 md:px-12 pt-6 md:pt-8 text-[10px] tracking-[0.3em] uppercase ${muted}`}>
        <span>{project.kicker}</span>
        <span className="font-editorial text-base tracking-normal">{project.index}</span>
      </div>

      <div className="relative px-6 md:px-12 pt-5 md:pt-7 pb-8 md:pb-10">
        {/* HEADER ROW: title + logo */}
        <div className="flex items-end justify-between gap-6 mb-5 md:mb-6">
          <h3 className="font-editorial uppercase leading-[0.9] tracking-tight text-4xl md:text-6xl lg:text-7xl">
            {project.name}
          </h3>
          {project.logo && (
            <img
              src={project.logo}
              alt={`${project.name} logo`}
              className={`shrink-0 hidden sm:block w-14 h-14 md:w-16 md:h-16 object-contain bg-[#f5f3ee]/5 p-2 border ${rule}`}
            />
          )}
        </div>

        {/* Three little stacked bars motif, like the template */}
        <div className="flex items-center gap-2 mb-5">
          <span className={`h-1 w-6 bg-[#f5f3ee]`} />
          <span className={`h-1 w-3 bg-[#f5f3ee]`} />
          <span className={`h-1 w-3 bg-[#f5f3ee]/50`} />
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* LEFT: gallery */}
          <div className="lg:col-span-5">
            {hasGallery ? (
              <div className="space-y-3">
                {/* main image — adapts to active image aspect ratio */}
                <div className={`relative w-full overflow-hidden border ${imageBorder} bg-[#0a0a0a] flex items-center justify-center`}>
                  {project.gallery.map((src, idx) => (
                    <img
                      key={src}
                      src={src}
                      alt={`Screenshot ${idx + 1} of ${project.name}`}
                      className={`w-full max-w-full max-h-[55vh] md:max-h-[60vh] object-contain transition-opacity duration-700 ${
                        active === idx ? "relative opacity-100" : "absolute inset-0 opacity-0 pointer-events-none"
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
                        aria-label={`View screenshot ${idx + 1}`}
                        className={`relative aspect-square overflow-hidden border transition-all ${
                          active === idx
                            ? "border-[#f5f3ee] opacity-100"
                            : "border-[#f5f3ee]/20 opacity-50 hover:opacity-100"
                        }`}
                      >
                        <img src={src} alt="" className="w-full h-full object-contain bg-[#0a0a0a]" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              // No images (ProxyRT) — big monogram block
              <div className={`relative aspect-[16/10] border ${imageBorder} flex items-center justify-center bg-[#0a0a0a]/[0.03]`}>
                <Bus className={`h-24 w-24 ${muted}`} strokeWidth={1} />
                <span className={`absolute bottom-4 left-4 text-[10px] tracking-[0.3em] uppercase ${muted}`}>
                  Backend / no UI
                </span>
              </div>
            )}
          </div>

          {/* RIGHT: text columns */}
          <div className="lg:col-span-7 flex flex-col">
            {project.role && (
              <p className={`text-[10px] tracking-[0.3em] uppercase ${muted} mb-3`}>
                {project.role}
              </p>
            )}
            <p className={`text-sm md:text-base leading-relaxed mb-8 text-[#f5f3ee]/85`}>
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
                    0{i + 1}
                  </p>
                  <h4 className="font-editorial uppercase text-sm md:text-base leading-tight mb-2">
                    {f.title}
                  </h4>
                  <p className={`text-xs leading-relaxed text-[#f5f3ee]/65`}>
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
            eyebrow="Personal projects"
            title="Selected Work"
            description="Projects where I combine technical ingenuity, AI and end-to-end development to solve real problems."
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
            eyebrow="Collaborative projects"
            title="Team Work"
            description={
              <>
                Products built together with{" "}
                <a
                  href="https://djsolutions.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:text-brand/80 underline underline-offset-2"
                >
                  D&JSolutions
                </a>
                , where I took part in various technical and design roles.
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
