import { useEffect, useState } from "react";
import { User, Briefcase, GraduationCap, FolderGit2, Mail, Wrench, Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLang } from "@/i18n/LanguageContext";

export const Navigation = () => {
  const { t, other, switchLang } = useLang();
  const [active, setActive] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: "inicio", label: t.nav.home, icon: User },
    { id: "experiencia", label: t.nav.experience, icon: Briefcase },
    { id: "educacion", label: t.nav.education, icon: GraduationCap },
    { id: "servicios", label: t.nav.services, icon: Wrench },
    { id: "proyectos", label: t.nav.projects, icon: FolderGit2 },
    { id: "contacto", label: t.nav.contact, icon: Mail },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Mobile masthead */}
      <header className="md:hidden fixed top-0 inset-x-0 z-50 flex items-center justify-between gap-3 border-b border-foreground/15 bg-background/85 backdrop-blur-xl px-5 py-4">
        <button
          onClick={() => handleClick("inicio")}
          className="font-display text-lg uppercase"
        >
          <span className="text-foreground">Diego </span>
          <span className="text-brand">García</span>
        </button>
        <button
          onClick={switchLang}
          aria-label={t.nav.switchLabel}
          className="border border-foreground/20 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-foreground/80"
        >
          {other}
        </button>
      </header>

      {/* Desktop header */}
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 hidden md:block transition-all duration-300 border-b border-foreground/10 backdrop-blur-xl",
          scrolled ? "bg-background/90" : "bg-background/70"
        )}
      >
        <div className="container">
          <nav className={cn("flex items-center gap-6 transition-all duration-300", scrolled ? "py-3" : "py-5")}>
            <button onClick={() => handleClick("inicio")} className="font-display text-xl uppercase shrink-0">
              <span className="text-foreground">Diego </span>
              <span className="text-brand">García</span>
            </button>
            <ul className="flex items-center gap-1 ml-auto">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleClick(link.id)}
                    className={cn(
                      "px-3 py-2 text-[10px] uppercase tracking-[0.18em] font-medium transition-all relative",
                      active === link.id ? "text-brand" : "text-foreground/60 hover:text-foreground"
                    )}
                  >
                    {active === link.id && (
                      <span className="absolute inset-x-3 bottom-0 h-px bg-brand" />
                    )}
                    <span className="relative">{link.label}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={switchLang}
                  aria-label={t.nav.switchLabel}
                  title={t.nav.switchLabel}
                   className="ml-2 inline-flex items-center gap-2 px-3 py-2 border border-foreground/15 text-[10px] uppercase tracking-[0.2em] text-foreground/80 hover:text-brand hover:border-brand/40 transition-all"
                >
                  <Languages className="h-4 w-4" />
                  {other}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile bottom bar */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-background/90 backdrop-blur-xl border-t border-foreground/15">
        <ul className="flex items-center justify-around py-2">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <button
                  onClick={() => handleClick(link.id)}
                  aria-label={link.label}
                  className={cn(
                    "flex flex-col items-center gap-1 px-2.5 py-2 transition-all relative",
                    isActive ? "text-brand" : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <span className="absolute inset-x-2 top-0 h-px bg-brand" />
                  )}
                  <Icon className={cn("h-5 w-5 transition-transform relative", isActive && "scale-110")} />
                  <span className="text-[9px] font-medium relative">{link.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
