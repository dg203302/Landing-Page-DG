import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { ArrowUpRight, Globe, Terminal, Server } from "lucide-react";

const projects = [
  {
    icon: Globe,
    tag: "PWA",
    title: "Progressive Web Apps",
    description:
      "Aplicaciones web progresivas rápidas, offline-first, instalables en cualquier dispositivo y optimizadas para SEO.",
    stack: ["JavaScript", "HTML", "CSS", "Service Workers"],
  },
  {
    icon: Server,
    tag: "Backend",
    title: "APIs REST con Flask",
    description:
      "Servicios backend en Python/Flask con autenticación segura, integración con Postgres y despliegue en contenedores.",
    stack: ["Python", "Flask", "Supabase", "Docker"],
  },
  {
    icon: Terminal,
    tag: "Tooling",
    title: "Aplicaciones CLI & nativas",
    description:
      "Herramientas de línea de comandos y aplicaciones nativas en Python para automatización y productividad.",
    stack: ["Python", "CLI", "Automation"],
  },
];

export const Projects = () => {
  return (
    <section id="proyectos" className="py-24 md:py-32 relative">
      <div className="container">
        <SectionHeader
          eyebrow="Proyectos"
          title="En lo que estoy trabajando"
          description="Algunas de las áreas y tipos de proyectos en los que me especializo, llevándolos de extremo a extremo."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 120}>
                <article className="group relative h-full p-7 rounded-3xl glass overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-card">
                  <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-brand/15 blur-3xl group-hover:bg-brand/25 transition-colors" />

                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-glow">
                        <Icon className="h-5 w-5 text-brand-foreground" />
                      </div>
                      <span className="text-[10px] font-semibold tracking-widest uppercase text-brand px-2.5 py-1 rounded-full border border-brand/30">
                        {p.tag}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-semibold mb-3 flex items-center gap-2">
                      {p.title}
                      <ArrowUpRight className="h-4 w-4 text-foreground/40 group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed mb-5">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="text-[11px] px-2.5 py-1 rounded-full bg-surface-elevated text-foreground/70"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
