import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import {
  Mail, Phone, MapPin, Calendar, Flag, AtSign, Linkedin, Github, Copy, Check, FileDown,
} from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { toast } from "@/hooks/use-toast";

const personalIcons = { dob: Calendar, nat: Flag, loc: MapPin } as const;

const PRO_EMAIL = "diegogarcia479@yahoo.com.ar";

export const Contact = () => {
  const { t } = useLang();
  const c = t.contact;
  const [copied, setCopied] = useState(false);

  const contacts = [
    { icon: Mail, label: c.labels.proEmail, value: PRO_EMAIL, href: `mailto:${PRO_EMAIL}`, primary: true },
    { icon: AtSign, label: c.labels.persEmail, value: "dg15828@gmail.com", href: "mailto:dg15828@gmail.com" },
    { icon: Phone, label: c.labels.mainPhone, value: "+54 264 442-9758", href: "tel:+542644429758" },
    { icon: Phone, label: c.labels.secPhone, value: "+54 264 585-9124", href: "tel:+542645859124" },
    {
      icon: Linkedin,
      label: c.labels.linkedin,
      value: "/in/diego-jose-garcía",
      href: "https://www.linkedin.com/in/diego-jose-garc%C3%ADa/",
    },
    { icon: Github, label: c.labels.github, value: "@dg203302", href: "https://github.com/dg203302" },
  ];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PRO_EMAIL);
      setCopied(true);
      toast({ title: c.copied, description: PRO_EMAIL });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      toast({ title: PRO_EMAIL });
    }
  };

  return (
    <section id="contacto" className="py-24 md:py-32 pb-32 md:pb-32 relative">
      <div className="container">
        <SectionHeader eyebrow={c.eyebrow} title={c.title} description={c.description} />

        <Reveal>
          <div className="mb-8 p-6 md:p-8 rounded-3xl glass shadow-card flex flex-col md:flex-row md:items-center gap-5 justify-between">
            <div className="flex-1">
              <h3 className="font-display text-xl md:text-2xl font-semibold mb-1">{c.cvTitle}</h3>
              <p className="text-sm text-foreground/65">{c.cvText}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={t.hero.cvUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand text-brand-foreground text-sm font-medium tracking-wide hover:shadow-glow transition-all"
              >
                <FileDown className="h-4 w-4" />
                {t.common.downloadCv}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-foreground/15 text-sm font-medium tracking-wide hover:bg-surface-elevated transition-all"
              >
                {copied ? <Check className="h-4 w-4 text-brand" /> : <Copy className="h-4 w-4" />}
                {copied ? c.copied : c.copy}
              </button>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <Reveal className="lg:col-span-2">
            <div className="h-full p-8 rounded-3xl glass shadow-card">
              <h3 className="font-display text-xl font-semibold mb-6">{c.personalTitle}</h3>
              <ul className="space-y-5">
                {c.personal.map((p) => {
                  const Icon = personalIcons[p.key as keyof typeof personalIcons];
                  return (
                    <li key={p.key} className="flex items-start gap-4">
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

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contacts.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.label} delay={i * 80}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`group block h-full p-6 rounded-2xl glass shadow-card transition-all hover:-translate-y-1 ${
                      item.primary ? "ring-1 ring-brand/40" : ""
                    }`}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                        item.primary ? "bg-gradient-brand shadow-glow" : "bg-surface-elevated"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${item.primary ? "text-brand-foreground" : "text-brand"}`}
                      />
                    </div>
                    <div className="text-xs uppercase tracking-wider text-foreground/50 mb-1">
                      {item.label}
                    </div>
                    <div className="font-medium break-all group-hover:text-brand transition-colors">
                      {item.value}
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="mt-16 text-center text-sm text-foreground/40">
          © {new Date().getFullYear()} Diego Jose Garcia · {c.footer}
        </Reveal>
      </div>
    </section>
  );
};
