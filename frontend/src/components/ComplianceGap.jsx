import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChapterHead } from "./ProblemSection";

export const ComplianceGap = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const barGrow = useTransform(scrollYProgress, [0.15, 0.55], [0, 1]);
  const barY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

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
        className="font-editorial text-[9vw] md:text-[6.2vw] lg:text-[4.6vw] leading-[0.9] tracking-[-0.035em] mt-6 max-w-5xl"
      >
        The{" "}
        <span className="italic font-editorial-soft text-orange-brand">
          mathematical impossibility
        </span>{" "}
        of manual oversight.
      </motion.h2>

      <div className="mt-16 md:mt-20 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-5 space-y-6">
          <p className="text-[16px] md:text-[17px] leading-[1.6] text-ink/75 max-w-lg">
            A mid-size school runs on more than{" "}
            <strong className="text-ink font-semibold">
              1,200 daily micro-decisions
            </strong>{" "}
            — attendance, lesson delivery, safety, finance, communications,
            compliance. Human oversight is linear. Volume is not.
          </p>
          <p className="text-[16px] md:text-[17px] leading-[1.6] text-ink/75 max-w-lg">
            You do not fix this by hiring more supervisors. You fix it by
            replacing supervision with{" "}
            <em className="font-editorial-soft italic text-ink">
              Compliance by Design
            </em>{" "}
            — where every workflow has a rail, every rail has a receipt, and
            every exception raises itself.
          </p>

          <div className="pt-6 border-t border-ink/15">
            <div className="text-[10px] uppercase tracking-[0.22em] text-slate-brand mb-4">
              Operating principle
            </div>
            <blockquote className="font-editorial text-[28px] md:text-[34px] italic font-editorial-soft leading-[1.1] tracking-tight max-w-md">
              “What you cannot review, you cannot run.”
            </blockquote>
          </div>
        </div>

        {/* Chart */}
        <div className="lg:col-span-7">
          <motion.div
            style={{ y: barY }}
            className="relative bg-paper border border-ink/15 p-6 md:p-10"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="text-[11px] uppercase tracking-[0.22em] text-slate-brand">
                Fig. 03 · Oversight vs Volume
              </div>
              <div className="font-mono text-[11px] text-slate-brand">
                y = decisions / day
              </div>
            </div>

            {/* Bar chart */}
            <div className="space-y-6">
              {[
                { label: "Total daily decisions", value: 100, color: "ink", n: "1,200" },
                { label: "Manually reviewable", value: 18, color: "orange", n: "≈ 220" },
                { label: "Reviewed with playbooks", value: 92, color: "ink", n: "1,110" },
              ].map((row, i) => (
                <div key={row.label}>
                  <div className="flex items-baseline justify-between mb-2">
                    <div className="text-[13px] text-ink/80">{row.label}</div>
                    <div className="font-editorial text-2xl text-ink">
                      {row.n}
                    </div>
                  </div>
                  <div className="relative h-2.5 bg-ink/10 overflow-hidden">
                    <motion.div
                      style={{ scaleX: barGrow, transformOrigin: "left" }}
                      className={`h-full ${
                        row.color === "orange" ? "bg-orange-brand" : "bg-ink"
                      }`}
                      initial={{ width: `${row.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-ink/10 grid grid-cols-3 gap-4">
              {[
                { k: "12×", v: "gap between volume & manual oversight" },
                { k: "1", v: "record per student across their entire tenure" },
                { k: "24/7", v: "Playbook Agent watching in the background" },
              ].map((s) => (
                <div key={s.k}>
                  <div className="font-editorial text-3xl text-orange-brand leading-none">
                    {s.k}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-slate-brand mt-2 leading-snug">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
