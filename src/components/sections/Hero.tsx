import { ArrowDown, ArrowUpRight, MapPin, FileDown } from "lucide-react";
import diegoPhoto from "@/assets/diego.jpg.asset.json";
import { useLang } from "@/i18n/LanguageContext";

export const Hero = () => {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-32 md:pt-44 pb-20 overflow-hidden"
    >
      <div className="container relative">
        <div className="border-t border-foreground/20 pt-5">
          <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.3em] text-foreground/50 mb-12">
            <span>{h.badge}</span>
            <span className="hidden sm:inline">Portfolio / 2026</span>
          </div>

          <h1 className="font-display uppercase font-light text-[clamp(3.8rem,10vw,9rem)] leading-[0.8] mb-10">
            <span className="block">{h.titleTop}</span>
            <span className="block text-right text-brand">{h.titleBottom}</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-end border-b border-foreground/20 pb-12">
            {/* Portrait */}
            <div
              className="relative animate-fade-in-up md:col-span-4 md:order-2"
              style={{ animationDelay: "60ms", opacity: 0 }}
            >
              <div className="relative aspect-[4/5] w-full max-w-sm mx-auto md:mr-0 overflow-hidden border border-foreground/15">
                  <img
                    src={diegoPhoto.url}
                    alt={`${h.name} — ${h.titleTop} ${h.titleBottom}`}
                    className="w-full h-full object-cover object-top"
                    width={640}
                    height={640}
                    loading="eager"
                  />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-8 md:order-1">
              <p
                className="text-lg md:text-2xl text-foreground/70 max-w-2xl mb-8 animate-fade-in-up leading-relaxed font-light"
                style={{ animationDelay: "240ms", opacity: 0 }}
              >
                {h.introPre}
                <span className="text-foreground">{h.name}</span>
                {h.introPost}
              </p>

              <div
                className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-foreground/45 mb-10 animate-fade-in-up"
                style={{ animationDelay: "320ms", opacity: 0 }}
              >
                <MapPin className="h-3.5 w-3.5" />
                {h.location}
              </div>

              <div
                className="flex flex-wrap items-center gap-x-8 gap-y-4 animate-fade-in-up"
                style={{ animationDelay: "400ms", opacity: 0 }}
              >
                <a
                  href={h.cvUrl}
                  download
                  className="editorial-action bg-brand text-brand-foreground"
                >
                  <FileDown className="h-4 w-4" />
                  {t.common.downloadCv}
                </a>
                <a
                  href="#proyectos"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="editorial-link"
                >
                  {h.ctaProjects}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="editorial-link"
                >
                  {h.ctaContact}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-14 right-8 hidden md:flex items-center gap-3 text-foreground/40">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
