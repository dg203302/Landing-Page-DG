import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { GraduationCap, School, BookOpen } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    period: "Currently — 4th year",
    title: "Bachelor's Degree in Computer Science",
    place: "National University of San Juan (UNSJ) — FCEFN",
    text: "Solid foundation in programming principles, software development and project management, complementing my hands-on skills as a web developer.",
  },
  {
    icon: School,
    period: "2017 — 2022",
    title: "Electronics Technician",
    place: "EPET No. 1 Ingeniero Rogelio A. Boero",
    text: "Technical training in Electronics and Computing, laying the foundation for my development in the technology field.",
  },
  {
    icon: BookOpen,
    period: "Primary school",
    title: "Primary education",
    place: "Francisco Narciso Laprida School",
    text: "Fundamental skills in reading, writing and mathematics, essential for my later academic growth.",
  },
];

export const Education = () => {
  return (
    <section id="educacion" className="py-24 md:py-32 relative">
      <div className="container">
        <SectionHeader
          eyebrow="Education"
          title="Academic background"
          description="A blend of solid theory and applied technical training."
        />

        <div className="relative max-w-3xl">
          <div className="absolute left-5 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-brand via-brand/40 to-transparent" />

          <ul className="space-y-8">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal as="li" key={item.title} delay={i * 100}>
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
