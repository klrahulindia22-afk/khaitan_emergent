import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChapterHead } from "./ProblemSection";
import { MousePointerClick, ShieldCheck, ServerCog, Check } from "lucide-react";

const volume = [
  {
    n: "01",
    kicker: "The volume crisis",
    title: "Overwhelming scale",
    body: "3,000 students · 200 teachers create documents beyond what any single leader can review.",
  },
  {
    n: "02",
    kicker: "The volume crisis",
    title: "Human limitation",
    body: "Impossible to cross-check every artefact against NCF or NEP 2020 — the maths does not work.",
  },
  {
    n: "03",
    kicker: "The volume crisis",
    title: "Administrative fatigue",
    body: "Focus shifts to paperwork completion. Quality gets ignored to meet deadlines.",
  },
];

const mismatch = [
  {
    n: "04",
    kicker: "The guidelines mismatch",
    title: "Regulatory complexity",
    body: "NCF, NEP 2020, NCERT and CBSE guidelines are dense — and constantly evolving.",
  },
  {
    n: "05",
    kicker: "The guidelines mismatch",
    title: "No alignment mechanism",
    body: "No automated way to ensure lesson plans follow the 5E model — engage, explore, explain, elaborate, evaluate.",
  },
  {
    n: "06",
    kicker: "The guidelines mismatch",
    title: "Discretionary errors",
    body: "200 individuals interpreting the same standard = diluted academic DNA and inconsistent outcomes.",
  },
];

const solution = [
  {
    icon: MousePointerClick,
    title: "One-click alignment",
    body: "APP to study notes automatically aligned with NCF & NEP guidelines.",
  },
  {
    icon: ShieldCheck,
    title: "Automated quality control",
    body: "Removes the discretionary element that leads to errors.",
  },
  {
    icon: ServerCog,
    title: "System-controlled quality",
    body: "Academic OS pre-validates and standardises every piece of content across all campuses.",
  },
];

export const ComplianceGap = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yShift = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section
      id="compliance"
      ref={ref}
      className="relative bg-paper-warm text-ink py-24 md:py-36 px-6 md:px-10 lg:px-14 overflow-hidden border-t border-line"
      data-testid="compliance-section"
    >
      <ChapterHead num="03" label="The Compliance & Volume Gap" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9 }}
        className="font-editorial text-[9vw] md:text-[6.2vw] lg:text-[4.6vw] leading-[0.9] tracking-[-0.035em] mt-6 max-w-6xl"
      >
        The{" "}
        <span className="italic font-editorial-soft text-orange-brand">
          mathematical impossibility
        </span>{" "}
        of manual oversight.
      </motion.h2>

      <div className="mt-12 md:mt-14 grid md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-6">
          <p className="text-[16px] md:text-[17px] leading-[1.6] text-ink/75 max-w-xl">
            A mid-size school runs on more than{" "}
            <strong className="text-ink font-semibold">
              1,200 daily micro-decisions
            </strong>{" "}
            — attendance, lesson delivery, safety, finance, communications,
            compliance. Human oversight is linear. Volume is not.
          </p>
        </div>
        <div className="md:col-span-6">
          <p className="text-[16px] md:text-[17px] leading-[1.6] text-ink/75 max-w-xl">
            You do not fix this by hiring more supervisors. You fix it by
            replacing supervision with{" "}
            <em className="font-editorial-soft italic text-ink">
              Compliance by Design
            </em>{" "}
            — where every workflow has a rail, every rail has a receipt, and
            every exception raises itself.
          </p>
        </div>
      </div>

      {/* Volume crisis rows */}
      <motion.div style={{ y: yShift }} className="mt-16 md:mt-20">
        <div className="flex items-baseline gap-4 mb-6">
          <span className="font-editorial italic text-[46px] leading-none text-orange-brand">
            i.
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-brand">
            The Volume Crisis
          </span>
          <span className="hidden md:block flex-1 h-px bg-ink/15 ml-6" />
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {volume.map((v, i) => (
            <PillCard key={v.n} row={v} index={i} tone="paper" />
          ))}
        </div>
      </motion.div>

      {/* Guidelines mismatch */}
      <motion.div className="mt-16 md:mt-20">
        <div className="flex items-baseline gap-4 mb-6">
          <span className="font-editorial italic text-[46px] leading-none text-orange-brand">
            ii.
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-brand">
            The Guidelines Mismatch
          </span>
          <span className="hidden md:block flex-1 h-px bg-ink/15 ml-6" />
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {mismatch.map((m, i) => (
            <PillCard key={m.n} row={m} index={i} tone="cream" />
          ))}
        </div>
      </motion.div>

      {/* Solution — Compliance by Design */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="mt-20 md:mt-28 bg-ink text-paper p-8 md:p-14 relative overflow-hidden"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-8 font-editorial italic text-[240px] leading-none text-paper/[0.05] select-none"
        >
          OS
        </div>

        <div className="relative z-10 flex items-baseline gap-4 mb-8">
          <span className="font-editorial italic text-[46px] leading-none text-orange-brand">
            iii.
          </span>
          <div>
            <div className="text-[10px] uppercase tracking-[0.24em] text-paper/50">
              The Solution
            </div>
            <div className="font-mono text-[13px] uppercase tracking-[0.2em] text-paper mt-1">
              Compliance by Design
            </div>
          </div>
          <span className="hidden md:block flex-1 h-px bg-paper/20 ml-6" />
        </div>

        <h3 className="relative z-10 font-editorial text-[7vw] md:text-[4.2vw] lg:text-[3vw] leading-[1.05] tracking-[-0.02em] max-w-4xl">
          Not more supervisors —{" "}
          <span className="italic font-editorial-soft text-orange-brand">
            a system that supervises itself.
          </span>
        </h3>

        <div className="relative z-10 mt-12 grid md:grid-cols-3 gap-5">
          {solution.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-paper/15 p-6 md:p-7 flex flex-col gap-4 bg-ink-deep hover:bg-paper/[0.05] transition-colors"
              data-testid={`solution-${i}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/50">
                  Principle 0{i + 1}
                </span>
                <div className="w-9 h-9 rounded-full bg-orange-brand text-paper flex items-center justify-center">
                  <s.icon className="w-4 h-4" strokeWidth={1.6} />
                </div>
              </div>
              <div className="font-editorial text-[22px] md:text-[24px] leading-[1.1] tracking-tight">
                {s.title}
              </div>
              <p className="text-[13.5px] leading-[1.55] text-paper/70">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 mt-10 pt-8 border-t border-paper/15 grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 flex flex-wrap gap-3">
            {[
              "Consistent quality",
              "Scalable",
              "Measurable",
              "Sustainable",
            ].map((k) => (
              <span
                key={k}
                className="inline-flex items-center gap-2 px-4 py-2 border border-paper/20 text-[12.5px] text-paper/80"
              >
                <Check className="w-3 h-3 text-orange-brand" strokeWidth={2.6} />
                {k}
              </span>
            ))}
          </div>
          <div className="md:col-span-4 md:text-right text-[12px] uppercase tracking-[0.22em] text-paper/50">
            Outcome — Academic OS live
          </div>
        </div>
      </motion.div>

      {/* Operating principle */}
      <div className="mt-16 md:mt-20 pt-10 border-t border-ink/15 max-w-3xl">
        <div className="text-[10px] uppercase tracking-[0.22em] text-slate-brand mb-4">
          Operating principle
        </div>
        <blockquote className="font-editorial text-[28px] md:text-[38px] italic font-editorial-soft leading-[1.1] tracking-tight">
          “What you cannot review, you cannot run.”
        </blockquote>
      </div>
    </section>
  );
};

const PillCard = ({ row, index, tone }) => {
  const bg = tone === "cream" ? "bg-cream" : "bg-paper";
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className={`group ${bg} border border-ink/15 p-6 md:p-7 flex flex-col gap-4 hover:bg-ink hover:text-paper transition-colors min-h-[200px]`}
      data-testid={`compliance-row-${row.n}`}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] opacity-60">
          {row.n}
        </span>
        <span className="w-6 h-6 rounded-full border border-current opacity-40 flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-brand" />
        </span>
      </div>
      <h4 className="font-editorial text-[22px] md:text-[24px] leading-[1.1] tracking-tight">
        {row.title}
      </h4>
      <p className="text-[13.5px] leading-[1.55] opacity-80">{row.body}</p>
    </motion.article>
  );
};
