import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Dumbbell, Bus, Sparkles } from "lucide-react";

const projects = [
  {
    icon: Dumbbell,
    tag: "App de salud & fitness",
    title: "TrAIner",
    tagline: "Tu entrenador y nutricionista personal, impulsado por IA.",
    description: [
      "App pensada para que cualquier persona pueda tener un plan de entrenamiento y alimentación completamente personalizado, sin necesidad de un nutricionista o entrenador personal.",
      "El usuario ingresa peso actual y deseado, altura y edad. Con esos datos la IA genera dos planes a medida.",
    ],
    features: [
      {
        emoji: "🏋️",
        title: "Plan de entrenamiento",
        text: "Biblioteca de más de 10 ejercicios segmentados por grupo muscular, cubriendo cada zona del cuerpo de forma equilibrada. El usuario elige los días de la semana y el nivel de intensidad; la IA arma una rutina estructurada, progresiva y eficiente.",
      },
      {
        emoji: "🥗",
        title: "Plan de alimentación",
        text: "Basándose en los datos físicos del usuario, la IA genera un plan nutricional diario con comidas recomendadas y las calorías totales según su objetivo: perder peso, ganar masa muscular o mantenerse.",
      },
    ],
    stack: ["IA / LLM", "PWA", "JavaScript", "Personalización"],
  },
  {
    icon: Bus,
    tag: "PWA de transporte público",
    title: "ProxyRT",
    tagline: "Tiempos de arribo en tiempo real para Red Tulum, sin API oficial.",
    description: [
      "Llevo meses construyendo una PWA de seguimiento de transporte público. El mayor desafío no fue la interfaz — fue conseguir los datos: tiempos de arribo en tiempo real para cada parada de la red de Red Tulum, sin API oficial ni integración formal. Solo ingenio.",
      "La respuesta: un proxy que intercepta las peticiones a la API de Moovit desde el sitio público de Red Tulum y las expone como un endpoint propio. Tres prototipos. Dos descartados. Uno que funciona.",
      "La clave del tercero fue descubrir que cada línea tiene una URL canónica única en el sitio y que todas las paradas se cargan en el DOM al accederla. Eso permitió pre-indexar líneas y paradas, eliminando toda búsqueda secuencial y reduciendo el acceso a tiempo constante.",
      "Resultado: un proxy liviano, dockerizado, que responde como si fuera la API de Moovit — construido encima de datos que siempre estuvieron ahí, solo había que saber cómo leerlos.",
    ],
    legal:
      "Este proyecto accede únicamente a información pública del sitio oficial de Red Tulum. No se procesan datos privados ni protegidos. No existe afiliación oficial con Red Tulum ni con Moovit. Los datos y marcas pertenecen a sus respectivos titulares.",
    stack: ["Python", "Playwright", "FastAPI", "Uvicorn", "Docker"],
  },
];

export const Projects = () => {
  return (
    <section id="proyectos" className="py-24 md:py-32 relative">
      <div className="container">
        <SectionHeader
          eyebrow="Proyectos personales"
          title="En lo que estoy trabajando"
          description="Proyectos donde combino ingenio técnico, IA y desarrollo end-to-end para resolver problemas reales."
        />

        <div className="flex flex-col gap-6">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 120}>
                <article className="group relative w-full p-7 md:p-10 rounded-3xl glass overflow-hidden shadow-card hover:border-brand/40 transition-all duration-500">
                  <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-brand/15 blur-3xl group-hover:bg-brand/25 transition-colors" />
                  <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[hsl(var(--accent-2)/0.12)] blur-3xl" />

                  <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left column: identity */}
                    <div className="lg:col-span-4">
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-glow shrink-0">
                          <Icon className="h-6 w-6 text-brand-foreground" />
                        </div>
                        <span className="text-[10px] font-semibold tracking-widest uppercase text-brand px-2.5 py-1 rounded-full border border-brand/30">
                          {p.tag}
                        </span>
                      </div>
                      <h3 className="font-display text-3xl md:text-4xl font-bold mb-3">
                        {p.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed mb-6">{p.tagline}</p>

                      <div className="flex flex-wrap gap-2">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="text-xs font-medium px-3 py-1.5 rounded-full bg-surface-elevated text-foreground/80 border border-foreground/5"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right column: content */}
                    <div className="lg:col-span-8 space-y-5">
                      {p.description.map((d, idx) => (
                        <p key={idx} className="text-sm md:text-base text-foreground/75 leading-relaxed">
                          {d}
                        </p>
                      ))}

                      {p.features && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                          {p.features.map((f) => (
                            <div
                              key={f.title}
                              className="p-5 rounded-2xl bg-surface-elevated/60 border border-foreground/5"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-xl">{f.emoji}</span>
                                <h4 className="font-display font-semibold">{f.title}</h4>
                              </div>
                              <p className="text-sm text-foreground/70 leading-relaxed">{f.text}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {p.legal && (
                        <div className="flex gap-3 p-4 rounded-2xl bg-surface-elevated/40 border border-foreground/5 text-xs text-foreground/55 leading-relaxed">
                          <Sparkles className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                          <p>
                            <span className="font-semibold text-foreground/70">Aviso legal: </span>
                            {p.legal}
                          </p>
                        </div>
                      )}
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
