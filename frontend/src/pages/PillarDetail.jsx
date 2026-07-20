import { useParams, Link, Navigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Check, ArrowLeft } from "lucide-react";
import { pillars } from "../data/pillars";
import { Footer } from "../components/Footer";
import { PillarIllustration } from "../components/PillarIllustration";

export default function PillarDetail() {
  const { slug } = useParams();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);

  const pillar = pillars.find((p) => p.slug === slug);
  if (!pillar) return <Navigate to="/" replace />;

  const idx = pillars.findIndex((p) => p.slug === slug);
  const next = pillars[(idx + 1) % pillars.length];

  return (
    <main className="relative" data-testid="pillar-detail-page">
      {/* Hero */}
      <section
        ref={ref}
        className="relative pt-40 md:pt-44 lg:pt-48 px-6 md:px-10 lg:px-14 pb-16 md:pb-24 overflow-hidden"
      >
        <Link
          to="/#pillars"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-slate-brand hover:text-ink transition-colors"
          data-testid="pillar-back-link"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to pillars
        </Link>

        <div className="mt-8 flex items-baseline gap-5">
          <span className="font-editorial italic text-[80px] md:text-[110px] leading-none text-orange-brand">
            {pillar.number}
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.24em] text-slate-brand">
              Pillar · {pillar.tag}
            </span>
            {pillar.formalName && (
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink mt-1">
                {pillar.formalName}
              </span>
            )}
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.7, 0, 0.2, 1] }}
          className="font-editorial text-[12vw] md:text-[8.8vw] lg:text-[7.2vw] leading-[0.88] tracking-[-0.035em] max-w-6xl mt-4"
        >
          {pillar.title.split(" ").map((w, i) => (
            <span key={i} className="inline-block mr-[0.2em]">
              {w}
            </span>
          ))}
        </motion.h1>

        <div className="mt-14 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-6">
            <p className="text-[17px] md:text-[19px] leading-[1.55] text-ink/80">
              {pillar.summary}
            </p>
            <p className="mt-6 text-[15.5px] leading-[1.65] text-ink/70 max-w-lg">
              {pillar.description}
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-ink text-paper hover:bg-orange-brand transition-colors group"
            >
              <span className="text-[14px] font-medium">
                Deploy {pillar.title}
              </span>
              <span className="w-9 h-9 rounded-full bg-orange-brand group-hover:bg-paper text-paper group-hover:text-ink flex items-center justify-center transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          <div className="lg:col-span-6">
            <motion.div style={{ y: yImg }} className="relative aspect-[5/4] overflow-hidden bg-cream clip-corner border border-line">
              <PillarIllustration slug={pillar.slug} />
              <div className="absolute top-4 left-4 bg-ink text-paper px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] font-mono">
                Fig · {pillar.tag}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="relative bg-ink text-paper py-24 md:py-32 px-6 md:px-10 lg:px-14 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-10 md:right-10 font-editorial italic text-[42vw] md:text-[26vw] leading-none text-paper/[0.03] select-none"
        >
          {pillar.number}
        </div>

        <div className="relative">
          <div className="text-[10px] uppercase tracking-[0.22em] text-paper/50 mb-6">
            Outcomes we own
          </div>
          <h2 className="font-editorial text-[9vw] md:text-[6vw] lg:text-[4.6vw] leading-[0.9] tracking-[-0.03em] max-w-5xl">
            What changes on your campus when{" "}
            <span className="italic font-editorial-soft text-orange-brand">
              {pillar.title}
            </span>{" "}
            goes live.
          </h2>

          <div className="mt-14 grid md:grid-cols-2 gap-4 md:gap-5">
            {pillar.outcomes.map((o, i) => (
              <motion.div
                key={o}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex items-start gap-4 p-6 md:p-8 border border-paper/15 bg-ink-deep"
                data-testid={`pillar-outcome-${i}`}
              >
                <div className="w-9 h-9 rounded-full bg-orange-brand text-paper flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" strokeWidth={2.2} />
                </div>
                <div className="pt-1">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/50 mb-1">
                    Outcome {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="font-editorial text-[22px] md:text-[24px] leading-[1.15] tracking-tight">
                    {o}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Components — Key modules from infographic */}
      {pillar.components && pillar.components.length > 0 && (
        <section className="relative bg-paper text-ink py-24 md:py-32 px-6 md:px-10 lg:px-14 border-t border-line">
          <div className="flex items-baseline gap-5 mb-10">
            <span className="font-editorial italic text-[52px] md:text-[64px] leading-none text-orange-brand">
              §
            </span>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.24em] text-slate-brand">
                {pillar.componentsLabel || "Components"}
              </span>
              <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-ink mt-1">
                What ships inside
              </span>
            </div>
            <span className="hidden md:block flex-1 h-px bg-ink/15 ml-6" />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-editorial text-[8vw] md:text-[5vw] lg:text-[3.8vw] leading-[0.95] tracking-[-0.03em] max-w-5xl"
          >
            The modules that make{" "}
            <span className="italic font-editorial-soft text-orange-brand">
              {pillar.title}
            </span>{" "}
            operational on day one.
          </motion.h2>

          <div className="mt-14 border-t border-l border-ink/15 grid md:grid-cols-2 lg:grid-cols-3">
            {pillar.components.map((c, i) => (
              <motion.article
                key={c.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: (i % 3) * 0.08,
                }}
                className="group border-r border-b border-ink/15 p-6 md:p-8 flex flex-col gap-4 bg-paper hover:bg-cream transition-colors min-h-[220px]"
                data-testid={`pillar-module-${c.code}`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      i % 2 === 0
                        ? "bg-ink text-paper"
                        : "bg-orange-brand text-paper"
                    }`}
                  >
                    <span className="font-editorial italic text-[18px] leading-none">
                      {c.code}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-brand">
                    Module {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-editorial text-[22px] md:text-[24px] leading-[1.05] tracking-tight">
                  {c.title}
                </h3>
                <p className="text-[13.5px] leading-[1.55] text-ink/70">
                  {c.body}
                </p>
              </motion.article>
            ))}
          </div>

          {(pillar.alignments || pillar.footnote) && (
            <div className="mt-12 grid md:grid-cols-12 gap-6 items-center">
              {pillar.alignments && (
                <div className="md:col-span-6">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-slate-brand mb-3">
                    Aligned with
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {pillar.alignments.map((a) => (
                      <span
                        key={a}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-ink/20 text-[12px] font-mono uppercase tracking-[0.16em] text-ink"
                      >
                        <Check
                          className="w-3 h-3 text-orange-brand"
                          strokeWidth={2.6}
                        />
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {pillar.footnote && (
                <div
                  className={`${
                    pillar.alignments ? "md:col-span-6 md:text-right" : "md:col-span-12"
                  } text-[14px] italic font-editorial-soft text-ink/75 leading-[1.55]`}
                >
                  {pillar.footnote}
                </div>
              )}
            </div>
          )}
        </section>
      )}
      <section className="relative bg-paper text-ink py-24 md:py-32 px-6 md:px-10 lg:px-14 border-t border-line">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.22em] text-slate-brand mb-6">
              Deployment
            </div>
            <h2 className="font-editorial text-[9vw] md:text-[5vw] lg:text-[3.8vw] leading-[0.95] tracking-[-0.03em]">
              How{" "}
              <span className="italic font-editorial-soft text-orange-brand">
                {pillar.title}
              </span>{" "}
              goes live.
            </h2>
          </div>
          <div className="md:col-span-8">
            {[
              { n: "01", t: "Baseline diagnostic", b: "One week on-campus to map the current operating standard." },
              { n: "02", t: "Playbook install", b: "SOPs, dashboards, review cadence and owner map — configured for your context." },
              { n: "03", t: "Resident squad", b: "Our operators pair with your team through the first two review cycles." },
              { n: "04", t: "Handover", b: "We hand control back with a certification of your internal operators." },
            ].map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="grid grid-cols-12 gap-4 py-6 border-b border-ink/15"
              >
                <div className="col-span-2 font-mono text-[12px] uppercase tracking-[0.22em] text-slate-brand pt-1">
                  {step.n}
                </div>
                <div className="col-span-4 font-editorial text-[26px] leading-[1.05] tracking-tight">
                  {step.t}
                </div>
                <div className="col-span-6 text-[15px] leading-[1.6] text-ink/70">
                  {step.b}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next pillar */}
      <section className="relative bg-paper-warm text-ink py-16 md:py-24 px-6 md:px-10 lg:px-14 border-t border-line">
        <Link
          to={`/pillars/${next.slug}`}
          className="group flex items-center justify-between gap-6"
          data-testid="next-pillar-link"
        >
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-slate-brand mb-3">
              Next pillar · {next.number}
            </div>
            <div className="font-editorial text-[8vw] md:text-[5vw] lg:text-[3.6vw] leading-[0.95] tracking-[-0.03em] group-hover:text-orange-brand transition-colors">
              {next.title}{" "}
              <span className="italic font-editorial-soft">→</span>
            </div>
          </div>
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-ink text-paper flex items-center justify-center group-hover:bg-orange-brand transition-colors shrink-0">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </Link>
      </section>

      <Footer />
    </main>
  );
}
