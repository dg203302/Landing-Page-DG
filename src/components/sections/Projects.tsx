import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Bus, Sparkles, Github, ExternalLink } from "lucide-react";
import trainerLogo from "@/assets/trainer-logo.png";
import trainer1 from "@/assets/trainer-1.png";
import trainer2 from "@/assets/trainer-2.png";
import trainer3 from "@/assets/trainer-3.png";

const trainerSlides = [trainer1, trainer2, trainer3];

const TrainerCard = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((p) => (p + 1) % trainerSlides.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <article className="group relative w-full rounded-3xl overflow-hidden shadow-card border border-foreground/10 transition-all duration-500 hover:border-brand/40">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {trainerSlides.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
              active === idx ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/70 to-background/40" />
      </div>

      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-brand/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[hsl(var(--accent-2)/0.12)] blur-3xl" />

      <div className="relative p-7 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left column */}
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-semibold tracking-widest uppercase text-brand px-2.5 py-1 rounded-full border border-brand/30 bg-background/60 backdrop-blur">
              App de salud & fitness
            </span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <img
              src={trainerLogo}
              alt="Logo de TrAIner"
              className="w-16 h-16 rounded-2xl shadow-glow object-cover bg-[#000]"
            />
            <h3 className="font-display text-3xl md:text-4xl font-bold">TrAIner</h3>
          </div>

          <p className="text-foreground/80 leading-relaxed mb-6">
            Tu entrenador y nutricionista personal, impulsado por IA.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {["IA / LLM", "PWA", "JavaScript", "Personalización"].map((s) => (
              <span
                key={s}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-surface-elevated/80 backdrop-blur text-foreground/80 border border-foreground/10"
              >
                {s}
              </span>
            ))}
          </div>

          <a
            href="https://github.com/dg203302/AIPersonalTrainer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-brand text-brand-foreground text-sm font-medium hover:shadow-glow transition-all"
          >
            <Github className="h-4 w-4" />
            Ver repositorio
          </a>
        </div>

        {/* Right column */}
        <div className="lg:col-span-8 space-y-5">
          <p className="text-sm md:text-base text-foreground/85 leading-relaxed">
            App pensada para que cualquier persona pueda tener un plan de entrenamiento y
            alimentación completamente personalizado, sin necesidad de un nutricionista o
            entrenador personal.
          </p>
          <p className="text-sm md:text-base text-foreground/85 leading-relaxed">
            El usuario ingresa peso actual y deseado, altura y edad. Con esos datos la IA genera
            dos planes a medida.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-surface/70 backdrop-blur border border-foreground/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🏋️</span>
                <h4 className="font-display font-semibold">Plan de entrenamiento</h4>
              </div>
              <p className="text-sm text-foreground/75 leading-relaxed">
                Biblioteca de más de 10 ejercicios segmentados por grupo muscular. El usuario
                elige los días de la semana y el nivel de intensidad; la IA arma una rutina
                estructurada, progresiva y eficiente.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-surface/70 backdrop-blur border border-foreground/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🥗</span>
                <h4 className="font-display font-semibold">Plan de alimentación</h4>
              </div>
              <p className="text-sm text-foreground/75 leading-relaxed">
                Basándose en los datos físicos del usuario, la IA genera un plan nutricional
                diario con comidas recomendadas y las calorías totales según su objetivo: perder
                peso, ganar masa muscular o mantenerse.
              </p>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex items-center gap-2 pt-2">
            {trainerSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                aria-label={`Mostrar captura ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  active === idx ? "w-8 bg-brand" : "w-2 bg-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

const ProxyRTCard = () => (
  <article className="group relative w-full p-7 md:p-10 rounded-3xl glass overflow-hidden shadow-card hover:border-brand/40 transition-all duration-500">
    <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-brand/15 blur-3xl group-hover:bg-brand/25 transition-colors" />
    <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[hsl(var(--accent-2)/0.12)] blur-3xl" />

    <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-4">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-glow shrink-0">
            <Bus className="h-6 w-6 text-brand-foreground" />
          </div>
          <span className="text-[10px] font-semibold tracking-widest uppercase text-brand px-2.5 py-1 rounded-full border border-brand/30">
            API DE TRANSPORTE PÚBLICO
          </span>
        </div>
        <h3 className="font-display text-3xl md:text-4xl font-bold mb-3">ProxyRT</h3>
        <p className="text-foreground/70 leading-relaxed mb-6">
          Tiempos de arribo en tiempo real para Red Tulum, sin API oficial.
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {["Python", "Playwright", "FastAPI", "Uvicorn", "Docker"].map((s) => (
            <span
              key={s}
              className="text-xs font-medium px-3 py-1.5 rounded-full bg-surface-elevated text-foreground/80 border border-foreground/5"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href="https://github.com/dg203302/Proxy_RT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-brand text-brand-foreground text-sm font-medium hover:shadow-glow transition-all"
          >
            <Github className="h-4 w-4" />
            Repositorio
          </a>
          <a
            href="https://www.linkedin.com/posts/diego-jose-garc%C3%ADa_informe-de-desarrollo-activity-7450860633581006848-jY4Z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass text-sm font-medium hover:bg-surface-elevated transition-all"
          >
            <ExternalLink className="h-4 w-4" />
            Informe en LinkedIn
          </a>
        </div>
      </div>

      <div className="lg:col-span-8 space-y-5">
        <p className="text-sm md:text-base text-foreground/75 leading-relaxed">
          Llevo meses construyendo una PWA de seguimiento de transporte público. El mayor desafío
          no fue la interfaz — fue conseguir los datos: tiempos de arribo en tiempo real para
          cada parada de la red de Red Tulum, sin API oficial ni integración formal. Solo
          ingenio.
        </p>
        <p className="text-sm md:text-base text-foreground/75 leading-relaxed">
          La respuesta: un proxy que intercepta las peticiones a la API de Moovit desde el sitio
          público de Red Tulum y las expone como un endpoint propio. Tres prototipos. Dos
          descartados. Uno que funciona.
        </p>
        <p className="text-sm md:text-base text-foreground/75 leading-relaxed">
          La clave del tercero fue descubrir que cada línea tiene una URL canónica única en el
          sitio y que todas las paradas se cargan en el DOM al accederla. Eso permitió
          pre-indexar líneas y paradas, eliminando toda búsqueda secuencial y reduciendo el
          acceso a tiempo constante.
        </p>
        <p className="text-sm md:text-base text-foreground/75 leading-relaxed">
          Resultado: un proxy liviano, dockerizado, que responde como si fuera la API de Moovit
          — construido encima de datos que siempre estuvieron ahí, solo había que saber cómo
          leerlos.
        </p>

        <div className="flex gap-3 p-4 rounded-2xl bg-surface-elevated/40 border border-foreground/5 text-xs text-foreground/55 leading-relaxed">
          <Sparkles className="h-4 w-4 text-brand shrink-0 mt-0.5" />
          <p>
            <span className="font-semibold text-foreground/70">Aviso legal: </span>
            Este proyecto accede únicamente a información pública del sitio oficial de Red Tulum.
            No se procesan datos privados ni protegidos. No existe afiliación oficial con Red
            Tulum ni con Moovit. Los datos y marcas pertenecen a sus respectivos titulares.
          </p>
        </div>
      </div>
    </div>
  </article>
);

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
          <Reveal>
            <TrainerCard />
          </Reveal>
          <Reveal delay={120}>
            <ProxyRTCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
