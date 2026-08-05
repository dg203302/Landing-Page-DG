import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import {
  Code2, Database, Rocket, ShieldCheck, BarChart3, TestTube2, Server, Cloud, ArrowUpRight,
} from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const logos = [
  { name: "Python", slug: "python" },
  { name: "Flask", slug: "flask" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Supabase", slug: "supabase" },
  { name: "Docker", slug: "docker" },
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "React", slug: "react" },
  { name: "Tailwind", slug: "tailwindcss" },
];

const skillIcons = {
  arch: Code2,
  cloud: Database,
  perf: Rocket,
  analytics: BarChart3,
  quality: TestTube2,
  e2e: ShieldCheck,
} as const;

const stackIcons = {
  backend: Server,
  frontend: Code2,
  cloud: Cloud,
} as const;

export const Experience = () => {
  const { t } = useLang();
  const e = t.experience;

  return (
    <section id="experiencia" className="py-24 md:py-32 relative">
      <div className="container">
        <SectionHeader eyebrow={e.eyebrow} title={e.title} description={e.description} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {e.skills.map((skill, i) => {
            const Icon = skillIcons[skill.key as keyof typeof skillIcons];
            return (
              <Reveal key={skill.key} delay={i * 80}>
                <article className="group h-full p-6 rounded-2xl glass hover:border-brand/40 hover:-translate-y-1 transition-all duration-500 shadow-card">
                  <div className="w-11 h-11 rounded-xl bg-gradient-brand flex items-center justify-center mb-5 shadow-glow">
                    <Icon className="h-5 w-5 text-brand-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{skill.title}</h3>
                  <p className="text-sm text-foreground/65 leading-relaxed">{skill.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* My Stack */}
        <div id="tecnologias" className="mt-24 md:mt-32">
          <Reveal>
            <div className="flex justify-center mb-10">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-[11px] uppercase tracking-[0.25em] text-foreground/70">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                {e.stackLabel}
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="relative mb-16 md:mb-20">
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14 opacity-70">
                {logos.map((l) => (
                  <div
                    key={l.slug}
                    className="group flex items-center gap-2 text-foreground/55 hover:text-foreground transition-colors"
                  >
                    <img
                      src={`https://cdn.simpleicons.org/${l.slug}/ffffff`}
                      alt={`${l.name} logo`}
                      loading="lazy"
                      width={28}
                      height={28}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {e.stackCards.map((c, i) => {
              const Icon = stackIcons[c.key as keyof typeof stackIcons];
              return (
                <Reveal key={c.key} delay={i * 100}>
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
                    <p className="text-sm text-foreground/65 leading-relaxed mb-6">{c.text}</p>
                    <div className="flex flex-wrap gap-1.5 pt-5 border-t border-foreground/10">
                      {c.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] tracking-[0.15em] uppercase font-medium px-2.5 py-1 rounded-full border border-foreground/15 text-foreground/70"
                        >
                          {tag}
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
    </section>
  );
};
