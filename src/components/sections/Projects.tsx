import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Lightbox } from "@/components/Lightbox";
import { Maximize2 } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import type { Project } from "@/i18n/content";

const EditorialCard = ({ project, flip }: { project: Project; flip: boolean }) => {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    if (project.gallery.length < 2 || zoom) return;
    const id = setInterval(
      () => setActive((p) => (p + 1) % project.gallery.length),
      4500
    );
    return () => clearInterval(id);
  }, [project.gallery.length, zoom]);

  const muted = "text-foreground/55";
  const rule = "border-foreground/20";
  const chipBorder = "border-foreground/25";
  const imageBorder = "border-foreground/15";
  const primaryBtn = "bg-brand text-brand-foreground hover:bg-brand/90";
  const ghostBtn = "border border-foreground/30 text-foreground hover:bg-foreground/5";

  const shotAlt = (i: number) =>
    `${project.name} — ${project.kicker.toLowerCase()} (${i + 1}/${project.gallery.length})`;

  return (
    <article className="relative w-full project-glass-card text-foreground overflow-hidden border-y border-foreground/20">
      {/* Top meta bar */}
      <div className={`flex items-center justify-between pt-6 md:pt-8 text-[10px] tracking-[0.3em] uppercase ${muted}`}>
        <span>{project.kicker}</span>
        <span className="font-editorial text-base tracking-normal">{project.index}</span>
      </div>

      <div className="project-glass-content pt-7 pb-10 md:pb-16">
        <div className="flex items-end justify-between gap-6 mb-5 md:mb-6">
          <h3 className="font-editorial uppercase leading-[0.88] text-5xl md:text-7xl lg:text-8xl font-light">
            {project.name}
          </h3>
          {project.logo && (
            <img
              src={project.logo}
              alt={`${project.name} logo`}
              loading="lazy"
              width={64}
              height={64}
              className={`shrink-0 hidden sm:block w-14 h-14 md:w-16 md:h-16 object-contain bg-foreground/5 p-2 border ${rule}`}
            />
          )}
        </div>

        <div className="flex items-center gap-2 mb-5">
          <span className="h-px w-16 bg-brand" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Gallery */}
          <div className={`lg:col-span-5 ${flip ? "lg:order-2" : ""}`}>
            <div className="space-y-3">
            <div className={`relative group w-full overflow-hidden border ${imageBorder} bg-surface flex items-center justify-center`}>
                {project.gallery.map((src, idx) => (
                  <img
                    key={src}
                    src={src}
                    alt={shotAlt(idx)}
                    loading="lazy"
                    decoding="async"
                    className={`w-full max-w-full max-h-[55vh] md:max-h-[60vh] object-contain transition-opacity duration-700 ${
                      active === idx
                        ? "relative opacity-100"
                        : "absolute inset-0 opacity-0 pointer-events-none"
                    }`}
                  />
                ))}
                <button
                  type="button"
                  onClick={() => setZoom(true)}
                  aria-label={t.common.openGallery}
                  className="absolute bottom-3 right-3 p-2 bg-background/80 border border-foreground/30 text-foreground opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>

              {project.gallery.length > 1 && (
                <div className="grid grid-cols-5 gap-2">
                  {project.gallery.map((src, idx) => (
                    <button
                      key={src}
                      onClick={() => setActive(idx)}
                      aria-label={shotAlt(idx)}
                      aria-current={active === idx}
                      className={`relative aspect-square overflow-hidden border transition-all ${
                        active === idx
                          ? "border-brand opacity-100"
                          : "border-foreground/20 opacity-50 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={src}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain bg-surface"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Text */}
          <div className={`lg:col-span-7 flex flex-col ${flip ? "lg:order-1" : ""}`}>
            {project.role && (
              <p className={`text-[10px] tracking-[0.3em] uppercase ${muted} mb-3`}>{project.role}</p>
            )}
            <p className="text-sm md:text-base leading-relaxed mb-6 text-foreground/75">
              {project.description}
            </p>

            {/* Role & result */}
            <dl className={`mb-8 border-l-2 ${rule} pl-4 space-y-2`}>
              <div>
                <dt className={`text-[10px] tracking-[0.25em] uppercase ${muted}`}>{t.common.myRole}</dt>
                <dd className="text-xs md:text-sm text-foreground/80">{project.myRole}</dd>
              </div>
              <div>
                <dt className={`text-[10px] tracking-[0.25em] uppercase ${muted}`}>{t.common.result}</dt>
                <dd className="text-xs md:text-sm text-foreground/80">{project.result}</dd>
              </div>
            </dl>

            {project.metrics && (
              <div className={`grid grid-cols-2 gap-4 border-t ${rule} pt-6 mb-8`}>
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="font-editorial text-3xl md:text-4xl leading-none">{m.value}</p>
                    <p className={`text-[10px] tracking-[0.25em] uppercase mt-2 ${muted}`}>{m.label}</p>
                  </div>
                ))}
              </div>
            )}

            <div className={`grid grid-cols-2 gap-6 border-t ${rule} pt-6 mb-8`}>
              {project.features.map((f, i) => (
                <div key={f.title} className={i === 0 ? `pr-2 border-r ${rule}` : "pl-2"}>
                  <p className={`text-[10px] tracking-[0.25em] uppercase ${muted} mb-2`}>0{i + 1}</p>
                  <h4 className="font-editorial uppercase text-sm md:text-base leading-tight mb-2">
                    {f.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-foreground/60">{f.text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className={`text-[10px] tracking-[0.15em] uppercase font-medium px-2.5 py-1 border ${chipBorder}`}
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.links.map((l) => {
                const Icon = l.icon;
                return (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2.5 text-[11px] tracking-[0.2em] uppercase font-medium transition-all ${
                      l.primary ? primaryBtn : ghostBtn
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {l.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {zoom && (
        <Lightbox
          images={project.gallery}
          index={active}
          alt={shotAlt}
          onChange={setActive}
          onClose={() => setZoom(false)}
        />
      )}
    </article>
  );
};

export const Projects = () => {
  const { t } = useLang();
  const p = t.projects;

  return (
    <section id="proyectos" className="py-24 md:py-40 relative">
      <div className="container space-y-32 md:space-y-48">
        <div>
          <SectionHeader
            eyebrow={p.personal.eyebrow}
            title={p.personal.title}
            description={p.personal.description}
          />

          <div className="flex flex-col gap-16 md:gap-28">
            {p.items.map((project, i) => (
              <Reveal key={project.name} delay={i * 80}>
                <EditorialCard project={project} flip={i % 2 === 1} />
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <SectionHeader
            eyebrow={p.team.eyebrow}
            title={p.team.title}
            description={
              <>
                {p.team.pre}
                <a
                  href={p.teamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:text-brand/80 underline underline-offset-2"
                >
                  {p.team.teamName}
                </a>
                {p.team.post}
              </>
            }
          />

          <div className="flex flex-col gap-16 md:gap-28">
            {p.teamItems.map((project, i) => (
              <Reveal key={project.name} delay={i * 80}>
                <EditorialCard project={project} flip={i % 2 === 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
