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

        <div className="relative max-w-3xl">
          <div className="absolute left-5 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-brand via-brand/40 to-transparent" />

          <ul className="space-y-8">
            {e.items.map((item, i) => {
              const Icon = icons[item.key as keyof typeof icons];
              return (
                <Reveal as="li" key={item.key} delay={i * 100}>
                  <div className="relative pl-16 md:pl-20">
                    <div className="absolute left-0 top-0 w-11 h-11 md:w-12 md:h-12 rounded-full bg-gradient-brand flex items-center justify-center shadow-glow ring-4 ring-background">
                      <Icon className="h-5 w-5 text-brand-foreground" />
                    </div>
                    <div className="p-6 rounded-2xl glass shadow-card">
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                        {item.period}
                      </span>
                      <h3 className="font-display text-xl font-semibold mt-1">{item.title}</h3>
                      <p className="text-sm text-foreground/60 mb-3">{item.place}</p>
                      <p className="text-sm text-foreground/75 leading-relaxed">{item.text}</p>
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
