import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Mail, Phone, MapPin, Calendar, Flag, AtSign, Linkedin, Github } from "lucide-react";

const personal = [
  { icon: Calendar, label: "Fecha de nacimiento", value: "16 / 08 / 2003" },
  { icon: Flag, label: "Nacionalidad", value: "Argentino" },
  { icon: MapPin, label: "Ubicación", value: "San Juan, Argentina" },
];

const contacts = [
  {
    icon: Mail,
    label: "Email profesional",
    value: "diegogarcia479@yahoo.com.ar",
    href: "mailto:diegogarcia479@yahoo.com.ar",
    primary: true,
  },
  {
    icon: AtSign,
    label: "Email personal",
    value: "dg15828@gmail.com",
    href: "mailto:dg15828@gmail.com",
  },
  {
    icon: Phone,
    label: "Teléfono principal",
    value: "+54 264 442-9758",
    href: "tel:+542644429758",
  },
  {
    icon: Phone,
    label: "Teléfono secundario",
    value: "+54 264 585-9124",
    href: "tel:+542645859124",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/diego-jose-garcía",
    href: "https://www.linkedin.com/in/diego-jose-garc%C3%ADa/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@dg203302",
    href: "https://github.com/dg203302",
  },
];

export const Contact = () => {
  return (
    <section id="contacto" className="py-24 md:py-32 pb-32 md:pb-32 relative">
      <div className="container">
        <SectionHeader
          eyebrow="Contacto"
          title="Trabajemos juntos"
          description="Estoy disponible para nuevos proyectos, colaboraciones y oportunidades. No dudes en escribirme."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Personal info card */}
          <Reveal className="lg:col-span-2">
            <div className="h-full p-8 rounded-3xl glass shadow-card">
              <h3 className="font-display text-xl font-semibold mb-6">Información personal</h3>
              <ul className="space-y-5">
                {personal.map((p) => {
                  const Icon = p.icon;
                  return (
                    <li key={p.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 shrink-0 rounded-xl bg-surface-elevated flex items-center justify-center">
                        <Icon className="h-4 w-4 text-brand" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-foreground/50">
                          {p.label}
                        </div>
                        <div className="font-medium mt-0.5">{p.value}</div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          {/* Contact methods */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contacts.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.label} delay={i * 80}>
                  <a
                    href={c.href}
                    className={`group block h-full p-6 rounded-2xl glass shadow-card transition-all hover:-translate-y-1 ${
                      c.primary ? "ring-1 ring-brand/40" : ""
                    }`}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                        c.primary
                          ? "bg-gradient-brand shadow-glow"
                          : "bg-surface-elevated"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${
                          c.primary ? "text-brand-foreground" : "text-brand"
                        }`}
                      />
                    </div>
                    <div className="text-xs uppercase tracking-wider text-foreground/50 mb-1">
                      {c.label}
                    </div>
                    <div className="font-medium break-all group-hover:text-brand transition-colors">
                      {c.value}
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="mt-16 text-center text-sm text-foreground/40">
          © {new Date().getFullYear()} Diego Jose Garcia · Hecho con cariño desde San Juan
        </Reveal>
      </div>
    </section>
  );
};
