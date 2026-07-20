import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Circle, MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { pillars } from "../data/pillars";

const briefs = {
  "academic-excellence": "Standardised pedagogy across every classroom.",
  "review-accountability": "Reviews as a system, with named owners.",
  "playbook-agent": "Always-on operator that prescribes the next best action.",
  "kosmos-erp": "The transactional backbone of a K-12 school.",
  "eduops-academy": "Capability building for the entire leadership stack.",
  "transformation-services": "Resident squad on-ground for 90 days.",
  "corporate-services": "Group office as a shared services layer.",
};

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
  const rotateAsterisk = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] pt-40 md:pt-44 lg:pt-48 px-6 md:px-10 lg:px-14 pb-24 overflow-hidden"
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
        <div className="lg:col-span-7">
          {/* eyebrow removed per direction */}

          <h1 className="font-editorial text-[13.5vw] md:text-[10.5vw] lg:text-[7vw] xl:text-[6.2vw] leading-[0.82] tracking-[-0.035em] text-ink">
            <RevealLine words={line1} baseIndex={0} />
            <RevealLine
              words={line2}
              baseIndex={line1.length}
              italic
              accent
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

        {/* Right — 7 Pillars mini index */}
        <div className="lg:col-span-5">
          <motion.div
            style={{ y: yImage }}
            className="relative w-full ml-auto"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-brand">
                The 7 Pillars
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-brand">
                Idx · 07
              </div>
            </div>

            <ul
              className="border-t border-ink/20"
              data-testid="hero-pillar-index"
            >
              {pillars.map((p, i) => (
                <motion.li
                  key={p.slug}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 1.2 + i * 0.06,
                    ease: [0.7, 0, 0.2, 1],
                  }}
                  className="border-b border-ink/20"
                >
                  <Link
                    to={`/pillars/${p.slug}`}
                    className="group flex items-start gap-4 md:gap-5 py-4 md:py-5 hover:bg-ink/[0.03] -mx-3 px-3 transition-colors"
                    data-testid={`hero-pillar-${p.slug}`}
                  >
                    <span className="font-mono text-[13px] text-orange-brand pt-1.5 shrink-0 tabular-nums">
                      {p.number}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-editorial text-[22px] md:text-[26px] leading-[1.1] tracking-tight text-ink group-hover:text-orange-brand transition-colors">
                          {p.title}
                        </span>
                        <MoveUpRight className="w-4 h-4 text-slate-brand shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all mt-1" />
                      </div>
                      <div className="text-[14px] md:text-[15px] leading-[1.5] text-ink/65 mt-1.5">
                        {briefs[p.slug]}
                      </div>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="mt-6 flex items-center justify-between"
            >
              <span className="text-[11px] uppercase tracking-[0.22em] text-slate-brand">
                Deployable in isolation or as one stack
              </span>
              <Link
                to="/#pillars"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("pillars");
                  if (window.__lenis)
                    window.__lenis.scrollTo(el, { duration: 1.6 });
                  else el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-1.5 text-[12px] font-medium text-ink hover:text-orange-brand transition-colors"
                data-testid="hero-pillar-explore"
              >
                Explore
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom marker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="relative z-10 mt-16 md:mt-24 flex items-end justify-between gap-6"
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
        : accent
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
