import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { GraduationCap, School, BookOpen } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const icons = {
  uni: GraduationCap,
  tech: School,
  primary: BookOpen,
} as const;

export const Education = () => {
  const { t } = useLang();
  const e = t.education;

  return (
    <section id="educacion" className="py-24 md:py-32 relative">
      <div className="container">
        <SectionHeader eyebrow={e.eyebrow} title={e.title} description={e.description} />

        <div className="relative">
          <ul className="border-t border-foreground/20">
            {e.items.map((item, i) => {
              const Icon = icons[item.key as keyof typeof icons];
              return (
                <Reveal as="li" key={item.key} delay={i * 100}>
                  <div className="grid md:grid-cols-12 gap-6 py-8 md:py-10 border-b border-foreground/20 items-start">
                    <div className="md:col-span-2 flex items-center gap-4">
                      <span className="font-display text-5xl font-light text-foreground/20">0{i + 1}</span>
                      <Icon className="h-5 w-5 text-brand" />
                    </div>
                    <div className="md:col-span-3">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">
                        {item.period}
                      </span>
                      <p className="text-sm text-foreground/50 mt-2">{item.place}</p>
                    </div>
                    <div className="md:col-span-7">
                      <h3 className="font-display text-2xl md:text-4xl font-light uppercase mb-3">{item.title}</h3>
                      <p className="text-sm text-foreground/60 leading-relaxed max-w-2xl">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
