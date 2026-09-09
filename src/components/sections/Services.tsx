import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Server, Radio, Layers, Rocket, ArrowRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const icons = {
  api: Server,
  realtime: Radio,
  fullstack: Layers,
  support: Rocket,
} as const;

export const Services = () => {
  const { t } = useLang();
  const s = t.services;

  return (
    <section id="servicios" className="py-24 md:py-32 relative">
      <div className="container">
        <SectionHeader eyebrow={s.eyebrow} title={s.title} description={s.description} />

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-foreground/20">
          {s.items.map((item, i) => {
            const Icon = icons[item.key as keyof typeof icons];
            return (
              <Reveal key={item.key} delay={i * 90}>
                <article className="group h-full p-7 md:p-10 border-r border-b border-foreground/20 hover:bg-foreground/[0.025] transition-colors">
                  <div className="flex items-center justify-between mb-10">
                    <span className="font-display text-6xl font-light text-foreground/20">0{i + 1}</span>
                    <Icon className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="font-display text-2xl md:text-4xl font-light uppercase mb-3">{item.title}</h3>
                  <p className="text-sm text-foreground/65 leading-relaxed mb-6">{item.text}</p>
                  <div className="flex flex-wrap gap-1.5 pt-5 border-t border-foreground/10">
                    {item.tags.map((tag) => (
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

        <Reveal delay={120}>
          <div className="mt-16 py-10 border-y border-foreground/20 flex flex-col md:flex-row md:items-center gap-6 justify-between">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-normal mb-2">{s.ctaTitle}</h3>
              <p className="text-sm md:text-base text-foreground/65">{s.ctaText}</p>
            </div>
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="editorial-action bg-brand text-brand-foreground"
            >
              {s.ctaButton}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
