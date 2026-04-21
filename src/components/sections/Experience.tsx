import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Code2, Database, Rocket, ShieldCheck, BarChart3, TestTube2 } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Arquitecturas modernas",
    text: "Flask con APIs REST, frontend HTML/CSS/JS, autenticación segura y despliegues orquestados en Netlify y contenedores.",
  },
  {
    icon: Database,
    title: "Integraciones cloud",
    text: "Supabase (Auth, Postgres, Storage) y pipelines CI/CD para entregas rápidas y confiables.",
  },
  {
    icon: Rocket,
    title: "Rendimiento & SEO",
    text: "Optimización de tiempos de carga, accesibilidad, diseño responsive y auditorías con Lighthouse.",
  },
  {
    icon: BarChart3,
    title: "Analítica y crecimiento",
    text: "Instrumentación de métricas, seguimiento de eventos, A/B testing y mejora continua de la conversión.",
  },
  {
    icon: TestTube2,
    title: "Calidad y mantenimiento",
    text: "Testing automatizado, logging/monitoring, documentación clara y soporte evolutivo del producto.",
  },
  {
    icon: ShieldCheck,
    title: "End-to-end",
    text: "Desde el descubrimiento y MVP hasta producción y escalado, priorizando agilidad, seguridad y experiencia.",
  },
];

export const Experience = () => {
  return (
    <section id="experiencia" className="py-24 md:py-32 relative">
      <div className="container">
        <SectionHeader
          eyebrow="Experiencia"
          title="Desarrollo enfocado en resultados"
          description="Construyo PWAs rápidas, aplicaciones nativas/CLI con Python y sitios web con backend en Flask, todos listos para producción y desplegados de manera segura en entornos locales y en la nube."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <Reveal key={skill.title} delay={i * 80}>
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
      </div>
    </section>
  );
};
