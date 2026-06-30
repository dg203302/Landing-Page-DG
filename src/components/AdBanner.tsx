import { useEffect, useRef } from "react";

const AD_SRC =
  "https://pl30133403.effectivecpmnetwork.com/a6484860153d10748988e75f4404ea0c/invoke.js";
const AD_CONTAINER_ID = "container-a6484860153d10748988e75f4404ea0c";

let scriptInjected = false;

/**
 * Renders the ad network container. The remote script targets a single
 * element id, so we render the real container only once and clone its
 * contents into additional slots placed elsewhere on the page.
 */
export const AdBanner = ({ label = "Sponsored" }: { label?: string }) => {
  const slotRef = useRef<HTMLDivElement | null>(null);
  const isPrimaryRef = useRef(false);

  useEffect(() => {
    const host = slotRef.current;
    if (!host) return;

    const existing = document.getElementById(AD_CONTAINER_ID);

    if (!existing) {
      // First mount: become the real container.
      isPrimaryRef.current = true;
      const container = document.createElement("div");
      container.id = AD_CONTAINER_ID;
      host.appendChild(container);

      if (!scriptInjected) {
        scriptInjected = true;
        const s = document.createElement("script");
        s.async = true;
        s.setAttribute("data-cfasync", "false");
        s.src = AD_SRC;
        document.body.appendChild(s);
      }
      return;
    }

    // Secondary mount: mirror the primary container's content.
    const mirror = document.createElement("div");
    host.appendChild(mirror);

    const sync = () => {
      const src = document.getElementById(AD_CONTAINER_ID);
      if (src && src.innerHTML && mirror.innerHTML !== src.innerHTML) {
        mirror.innerHTML = src.innerHTML;
      }
    };

    sync();
    const interval = window.setInterval(sync, 1500);
    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <aside
      aria-label={label}
      className="w-full my-12 flex flex-col items-center"
    >
      <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 mb-2">
        {label}
      </span>
      <div
        ref={slotRef}
        className="w-full max-w-3xl min-h-[90px] flex items-center justify-center rounded-lg glass p-3 overflow-hidden"
      />
    </aside>
  );
};

export default AdBanner;
