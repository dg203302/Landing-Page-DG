import { useEffect, useState } from "react";
import { User, Briefcase, GraduationCap, FolderGit2, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { id: "inicio", label: "Home", icon: User },
  { id: "experiencia", label: "Experience", icon: Briefcase },
  { id: "educacion", label: "Education", icon: GraduationCap },
  { id: "proyectos", label: "Projects", icon: FolderGit2 },
  { id: "contacto", label: "Contact", icon: Mail },
];

export const Navigation = () => {
  const [active, setActive] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
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
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Mobile floating brand pill */}
      <header className="md:hidden fixed top-4 inset-x-4 z-50 flex justify-center">
        <button
          onClick={() => handleClick("inicio")}
          className="glass shadow-card rounded-full px-5 py-2 font-display text-xl border border-foreground/10"
        >
          <span className="text-foreground drop-shadow-sm">Diego</span>
          <span className="font-serifItalic italic text-brand drop-shadow-sm"> García</span>
        </button>
      </header>

      {/* Desktop header */}
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 hidden md:block transition-all duration-300",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div className="container">
          <nav
            className={cn(
              "flex items-center gap-6 rounded-full px-6 py-3 transition-all duration-300 glass shadow-card border border-foreground/10"
            )}
          >
            <button
              onClick={() => handleClick("inicio")}
              className="font-display text-2xl shrink-0"
            >
              <span className="text-foreground drop-shadow-sm">Diego</span>
              <span className="font-serifItalic italic text-brand drop-shadow-sm">García</span>
            </button>
            <ul className="flex items-center gap-1 ml-auto">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleClick(link.id)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all relative",
                      active === link.id
                        ? "text-foreground"
                        : "text-foreground/70 hover:text-foreground"
                    )}
                  >
                    {active === link.id && (
                      <span className="absolute inset-0 rounded-full bg-brand/20 border border-brand/40 shadow-inner" />
                    )}
                    <span className="relative">{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile bottom bar */}
      <nav className="md:hidden fixed bottom-4 inset-x-4 z-50 glass rounded-2xl shadow-card border border-foreground/10">
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
                    "flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all relative",
                    isActive ? "text-brand" : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-xl bg-brand/15 border border-brand/30" />
                  )}
                  <Icon className={cn("h-5 w-5 transition-transform relative", isActive && "scale-110")} />
                  <span className="text-[10px] font-medium relative">{link.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
