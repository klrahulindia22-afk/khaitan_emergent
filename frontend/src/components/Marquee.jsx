import { marqueeItems } from "../data/pillars";
import { Asterisk } from "lucide-react";

export const Marquee = ({ variant = "light" }) => {
  const isDark = variant === "dark";
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section
      className={`relative py-10 md:py-14 overflow-hidden border-y ${
        isDark
          ? "bg-ink text-paper border-paper/10"
          : "bg-paper-warm text-ink border-line"
      }`}
      data-testid="editorial-marquee"
    >
      <div className="flex whitespace-nowrap will-change-transform animate-marquee-slow">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-8 pr-8 shrink-0">
            <span className="font-editorial italic text-[8vw] md:text-[5.6vw] leading-none tracking-[-0.02em]">
              {t}
            </span>
            <Asterisk
              className={`w-8 h-8 md:w-12 md:h-12 ${
                isDark ? "text-orange-brand" : "text-orange-brand"
              }`}
              strokeWidth={1.4}
            />
          </span>
        ))}
      </div>
    </section>
  );
};
