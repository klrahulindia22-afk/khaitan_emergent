import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Circle } from "lucide-react";
import { Link } from "react-router-dom";

const line1 = ["Schools", "deserve"];
const line2 = ["operating", "systems,"];
const line3 = ["not", "just", "software."];

const wordVariants = {
  hidden: { y: "110%" },
  show: (i) => ({
    y: "0%",
    transition: { duration: 1.0, ease: [0.7, 0, 0.2, 1], delay: 0.35 + i * 0.08 },
  }),
};

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const yBadge = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const rotateAsterisk = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] pt-28 md:pt-32 lg:pt-36 px-6 md:px-10 lg:px-14 pb-24 overflow-hidden"
      data-testid="hero-section"
    >
      {/* Ambient rotating asterisk parallax */}
      <motion.div
        style={{ rotate: rotateAsterisk }}
        className="pointer-events-none absolute -top-24 -right-24 md:top-10 md:right-10 w-[380px] h-[380px] md:w-[520px] md:h-[520px] opacity-[0.09]"
      >
        <div className="relative w-full h-full animate-rotate-slow">
          <div className="absolute inset-0 border border-ink rounded-full" />
          <div className="absolute inset-8 border border-ink rounded-full border-dashed" />
          <div className="absolute inset-16 border border-ink rounded-full" />
        </div>
      </motion.div>

      {/* Top meta bar removed per direction */}

      <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-end mt-4 md:mt-6">
        {/* Left — Headline */}
        <div className="lg:col-span-8 xl:col-span-9">
          {/* eyebrow removed per direction */}

          <h1 className="font-editorial text-[13.5vw] md:text-[10.5vw] lg:text-[8.4vw] xl:text-[7.4vw] leading-[0.82] tracking-[-0.035em] text-ink">
            <RevealLine words={line1} baseIndex={0} />
            <RevealLine
              words={line2}
              baseIndex={line1.length}
              italic
            />
            <RevealLine
              words={line3}
              baseIndex={line1.length + line2.length}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease: [0.7, 0, 0.2, 1] }}
            className="mt-8 md:mt-10 max-w-xl text-[16px] md:text-[17px] leading-[1.55] text-ink/75"
          >
            Khaitan EduOps is an Education Management Operating Company that
            designs, implements, and continuously improves the complete
            institutional operating system for K–12 schools.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-ink text-paper hover:bg-orange-brand transition-colors"
              data-testid="hero-cta-primary"
            >
              <span className="text-[14px] font-medium">Book a diagnostic</span>
              <span className="w-9 h-9 rounded-full bg-orange-brand group-hover:bg-paper text-paper group-hover:text-ink flex items-center justify-center transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
            <a
              href="#problem"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("problem");
                if (window.__lenis) window.__lenis.scrollTo(el, { duration: 1.5 });
                else el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 text-[13px] font-medium text-ink/80 hover:text-ink transition-colors"
              data-testid="hero-cta-secondary"
            >
              <span className="link-underline">Read the manifesto</span>
              <Circle className="w-1.5 h-1.5 fill-orange-brand text-orange-brand" />
            </a>
          </motion.div>
        </div>

        {/* Right — Spotlight image */}
        <div className="lg:col-span-4 xl:col-span-3">
          <motion.div
            style={{ y: yImage, scale: scaleImage }}
            className="relative aspect-[3/4] w-full max-w-[360px] ml-auto"
          >
            <div className="absolute inset-0 clip-corner overflow-hidden bg-ink">
              <img
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1200&auto=format&fit=crop"
                alt="Classroom operations"
                className="w-full h-full object-cover"
                style={{ filter: "contrast(1.05) saturate(0.9)" }}
              />
              <div className="absolute inset-0 bg-ink/10 mix-blend-multiply" />
              <div className="grain-light absolute inset-0" />
            </div>
            <motion.div
              style={{ y: yBadge }}
              className="absolute -bottom-6 -left-6 md:-left-10 bg-orange-brand text-paper px-4 py-3 rounded-sm shadow-lg"
            >
              <div className="text-[10px] uppercase tracking-[0.2em] mb-1 opacity-80">
                Variance today
              </div>
              <div className="font-editorial text-3xl leading-none">30–50%</div>
              <div className="text-[10px] mt-1 opacity-80">across sections</div>
            </motion.div>
            <div className="absolute -top-6 right-2 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-brand">
              Fig. 01 / Real school. Real data.
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom marker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="relative z-10 mt-20 md:mt-28 flex items-end justify-between gap-6"
      >
        <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.22em] text-slate-brand">
          <span>Scroll</span>
          <span className="w-10 h-px bg-slate-brand/50" />
          <span>Ch. 01 → Ch. 07</span>
        </div>
        <div className="hidden md:block text-right">
          <div className="text-[10px] uppercase tracking-[0.22em] text-slate-brand mb-1">
            Group operating standard
          </div>
          <div className="font-editorial italic text-2xl leading-none">
            One record per student. Forever.
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const RevealLine = ({ words, baseIndex, italic, italicLast, accent, electric }) => (
  <span className="block">
    {words.map((w, i) => {
      const isLast = i === words.length - 1;
      const isItalic = italic || (italicLast && isLast);
      const colorClass = electric
        ? "text-electric"
        : accent && isLast
          ? "text-orange-brand"
          : "";
      return (
        <span key={w + i} className="reveal-mask mr-[0.24em]">
          <motion.span
            variants={wordVariants}
            initial="hidden"
            animate="show"
            custom={baseIndex + i}
            className={`reveal-word ${
              isItalic ? "italic font-editorial-soft" : ""
            } ${colorClass}`}
          >
            {w}
          </motion.span>
        </span>
      );
    })}
  </span>
);
