import { ArrowDown, MapPin, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand/20 blur-3xl animate-float" />
      <div
        className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] rounded-full bg-[hsl(var(--accent-2)/0.18)] blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium mb-8 animate-fade-in-up">
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            <span>Disponible para nuevos proyectos</span>
          </div>

          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "120ms", opacity: 0 }}
          >
            Diego Jose
            <br />
            <span className="text-gradient">Garcia</span>
          </h1>

          <p
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-8 animate-fade-in-up"
            style={{ animationDelay: "240ms", opacity: 0 }}
          >
            Desarrollador Web junior especializado en{" "}
            <span className="text-foreground font-medium">JavaScript</span> y{" "}
            <span className="text-foreground font-medium">Python</span>. Construyo PWAs rápidas,
            APIs con Flask y experiencias listas para producción.
          </p>

          <div
            className="flex items-center justify-center gap-2 text-sm text-foreground/60 mb-10 animate-fade-in-up"
            style={{ animationDelay: "320ms", opacity: 0 }}
          >
            <MapPin className="h-4 w-4" />
            San Juan, Argentina
          </div>

          <div
            className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "400ms", opacity: 0 }}
          >
            <a
              href="#proyectos"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 rounded-full bg-gradient-brand text-brand-foreground font-medium hover:shadow-glow transition-all"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 rounded-full glass font-medium hover:bg-surface-elevated transition-all"
            >
              Contactar
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-foreground/40">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
