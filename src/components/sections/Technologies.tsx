import { Reveal } from "@/components/Reveal";
import {
  Code2,
  Server,
  Cloud,
  ArrowUpRight,
} from "lucide-react";

// Tech logos rendered as simple-icons SVG via CDN (monochrome, muted)
const logos = [
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "React", slug: "react" },
  { name: "Python", slug: "python" },
  { name: "Flask", slug: "flask" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "Supabase", slug: "supabase" },
  { name: "Docker", slug: "docker" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Tailwind", slug: "tailwindcss" },
];

const cards = [
  {
    icon: Code2,
    title: "Frontend",
    text: "Modern PWAs with React, TypeScript and Tailwind. Responsive layouts, smooth animations and Lighthouse-perfect performance.",
    tags: ["React", "TypeScript", "PWA", "Tailwind"],
  },
  {
    icon: Server,
    title: "Backend",
    text: "REST APIs built with Python — Flask and FastAPI. Secure auth, structured data and production-ready deployments.",
    tags: ["Python", "Flask", "FastAPI", "Playwright"],
  },
  {
    icon: Cloud,
    title: "Cloud & Tools",
    text: "Supabase (Auth, Postgres, Storage), Docker containers and Netlify deployments. Real-time data and CI/CD pipelines.",
    tags: ["Supabase", "Docker", "Netlify", "Realtime"],
  },
];

export const Technologies = () => {
  return (
    <div className="relative">
      <div>
        {/* Top pill badge */}
        <Reveal>
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-[11px] uppercase tracking-[0.25em] text-foreground/70">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              My Stack
            </div>
          </div>
        </Reveal>

        {/* Logo row */}
        <Reveal delay={80}>
          <div className="relative mb-16 md:mb-20">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14 opacity-70">
              {logos.map((l) => (
                <div
                  key={l.slug}
                  className="group flex items-center gap-2 text-foreground/55 hover:text-foreground transition-colors"
                  title={l.name}
                >
                  <img
                    src={`https://cdn.simpleicons.org/${l.slug}/ffffff`}
                    alt={`${l.name} logo`}
                    loading="lazy"
                    className="h-6 w-6 md:h-7 md:w-7 opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.2em] font-medium">
                    {l.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={i * 100}>
                <article className="group h-full p-7 rounded-2xl glass shadow-card hover:border-brand/40 hover:-translate-y-1 transition-all duration-500">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-gradient-brand flex items-center justify-center shadow-glow">
                      <Icon className="h-5 w-5 text-brand-foreground" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-foreground/30 group-hover:text-brand group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </div>

                  <h3 className="font-display text-xl font-semibold mb-3 uppercase tracking-wide">
                    {c.title}
                  </h3>
                  <p className="text-sm text-foreground/65 leading-relaxed mb-6">
                    {c.text}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-5 border-t border-foreground/10">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] tracking-[0.15em] uppercase font-medium px-2.5 py-1 rounded-full border border-foreground/15 text-foreground/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
};
