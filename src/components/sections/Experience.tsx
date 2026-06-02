import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Code2, Database, Rocket, ShieldCheck, BarChart3, TestTube2 } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Modern architectures",
    text: "Flask with REST APIs, HTML/CSS/JS frontend, secure authentication and orchestrated deployments on Netlify and containers.",
  },
  {
    icon: Database,
    title: "Cloud integrations",
    text: "Supabase (Auth, Postgres, Storage) and CI/CD pipelines for fast and reliable delivery.",
  },
  {
    icon: Rocket,
    title: "Performance & SEO",
    text: "Load time optimization, accessibility, responsive design and Lighthouse audits.",
  },
  {
    icon: BarChart3,
    title: "Analytics & growth",
    text: "Metrics instrumentation, event tracking, A/B testing and continuous conversion improvement.",
  },
  {
    icon: TestTube2,
    title: "Quality & maintenance",
    text: "Automated testing, logging/monitoring, clear documentation and ongoing product support.",
  },
  {
    icon: ShieldCheck,
    title: "End-to-end",
    text: "From discovery and MVP to production and scaling, prioritizing agility, security and experience.",
  },
];

export const Experience = () => {
  return (
    <section id="experiencia" className="py-24 md:py-32 relative">
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          title="Results-driven development"
          description="I build fast PWAs, native/CLI applications with Python and websites with a Flask backend, all production-ready and safely deployed to local and cloud environments."
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
