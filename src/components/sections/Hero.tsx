import { ArrowDown, MapPin } from "lucide-react";
import diegoPhoto from "@/assets/diego.jpg.asset.json";

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      {/* Soft top vignette portrait-like glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[40rem] bg-[radial-gradient(ellipse_at_center,hsl(var(--brand)/0.10),transparent_60%)] pointer-events-none" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-[11px] uppercase tracking-[0.25em] text-foreground/70 mb-10 animate-fade-in-up"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            Available for new projects
          </div>

          {/* Portrait */}
          <div
            className="relative mx-auto mb-10 animate-fade-in-up"
            style={{ animationDelay: "60ms", opacity: 0 }}
          >
            <div className="relative w-60 h-60 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-brand blur-3xl opacity-50" />
              <div
                className="relative w-full h-full overflow-hidden"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(circle at center, #000 45%, transparent 72%)",
                  maskImage:
                    "radial-gradient(circle at center, #000 45%, transparent 72%)",
                }}
              >
                <img
                  src={diegoPhoto.url}
                  alt="Portrait of Diego Jose Garcia"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          <h1
            className="font-display text-6xl md:text-8xl lg:text-9xl font-normal leading-[0.95] tracking-tight mb-8 animate-fade-in-up"
            style={{ animationDelay: "120ms", opacity: 0 }}
          >
            <span className="text-foreground">Web Developer</span>
            <br />
            <span className="font-serifItalic italic text-brand">&amp; Designer</span>
          </h1>


          <p
            className="text-base md:text-lg text-foreground/65 max-w-xl mx-auto mb-10 animate-fade-in-up leading-relaxed"
            style={{ animationDelay: "240ms", opacity: 0 }}
          >
            I'm <span className="text-foreground">Diego Jose Garcia</span> — a junior
            developer specialized in JavaScript, Python and Flask. I build fast PWAs, APIs
            and production-ready experiences.
          </p>

          <div
            className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground/50 mb-12 animate-fade-in-up"
            style={{ animationDelay: "320ms", opacity: 0 }}
          >
            <MapPin className="h-3.5 w-3.5" />
            San Juan, Argentina
          </div>

          <div
            className="flex flex-wrap items-center justify-center gap-3 animate-fade-in-up"
            style={{ animationDelay: "400ms", opacity: 0 }}
          >
            <a
              href="#proyectos"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 rounded-full bg-brand text-brand-foreground text-sm font-medium tracking-wide hover:shadow-glow transition-all"
            >
              View projects
            </a>
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 rounded-full border border-foreground/15 text-sm font-medium tracking-wide hover:bg-surface-elevated transition-all"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-foreground/40">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
