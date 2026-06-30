import { useEffect, useRef } from "react";

interface IframeAdBannerProps {
  label?: string;
  adKey: string;
  width: number;
  height: number;
}

/**
 * Renders an ad whose remote loader writes directly into document.write /
 * the surrounding script position (highperformanceformat style). We isolate
 * it inside a sandboxed iframe so it can't disturb the host page.
 */
export const IframeAdBanner = ({
  label = "Sponsored",
  adKey,
  width,
  height,
}: IframeAdBannerProps) => {
  const frameRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const iframe = frameRef.current;
    if (!iframe) return;
    const doc = iframe.contentDocument;
    if (!doc) return;

    doc.open();
    doc.write(`<!doctype html><html><head><meta charset="utf-8"><style>
      html,body{margin:0;padding:0;background:transparent;overflow:hidden;}
      body{display:flex;align-items:center;justify-content:center;}
    </style></head><body>
      <script type="text/javascript">
        atOptions = {
          'key' : '${adKey}',
          'format' : 'iframe',
          'height' : ${height},
          'width' : ${width},
          'params' : {}
        };
      <\/script>
      <script type="text/javascript" src="https://www.highperformanceformat.com/${adKey}/invoke.js"><\/script>
    </body></html>`);
    doc.close();
  }, [adKey, width, height]);

  return (
    <aside
      aria-label={label}
      className="w-full my-12 flex flex-col items-center"
    >
      <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 mb-2">
        {label}
      </span>
      <div className="rounded-lg glass p-3 overflow-hidden flex items-center justify-center">
        <iframe
          ref={frameRef}
          title={label}
          width={width}
          height={height}
          scrolling="no"
          frameBorder={0}
          style={{ border: 0, display: "block", background: "transparent" }}
        />
      </div>
    </aside>
  );
};

export default IframeAdBanner;
