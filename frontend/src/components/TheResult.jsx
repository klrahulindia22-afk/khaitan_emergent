import { motion } from "framer-motion";
import {
  GraduationCap,
  Star,
  TrendingUp,
  Wallet,
  Layers,
  ShieldCheck,
} from "lucide-react";

const outcomes = [
  {
    icon: GraduationCap,
    title: "Strong academic consistency",
    body: "Across every section and every campus.",
  },
  {
    icon: Star,
    title: "High parent trust",
    body: "Satisfaction that compounds into brand.",
  },
  {
    icon: TrendingUp,
    title: "Improved learning outcomes",
    body: "Mastery indices you can put on a wall.",
  },
  {
    icon: Wallet,
    title: "Efficient operations",
    body: "Cost control with structural discipline.",
  },
  {
    icon: Layers,
    title: "Scalable academic model",
    body: "Replicable across campuses and cohorts.",
  },
  {
    icon: ShieldCheck,
    title: "Sustainable growth",
    body: "Long-term institutional stability.",
  },
];

const pillars = ["Systems", "Processes", "Accountability", "Technology", "People"];

export const TheResult = () => {
  return (
    <section
      id="result"
      className="relative bg-paper text-ink py-24 md:py-32 px-6 md:px-10 lg:px-14 border-t border-line overflow-hidden"
      data-testid="result-section"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-10 font-editorial italic text-[36vw] md:text-[22vw] leading-none text-ink/[0.03] select-none"
      >
        ★
      </div>

      <div className="relative">
        <div className="flex items-baseline gap-5">
          <span className="font-editorial text-[64px] md:text-[80px] leading-none italic text-orange-brand">
            ★
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.24em] text-slate-brand">
              The Result
            </span>
            <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-ink mt-1">
              When the operating system runs
            </span>
          </div>
          <span className="hidden md:block flex-1 h-px bg-ink/15 ml-6" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-editorial text-[9vw] md:text-[6.2vw] lg:text-[4.6vw] leading-[0.9] tracking-[-0.035em] mt-6 max-w-5xl"
        >
          Clarity. Control. Consistency.{" "}
          <span className="italic font-editorial-soft text-orange-brand">
            Confidence.
          </span>
        </motion.h2>

        <div className="mt-14 md:mt-16 grid md:grid-cols-3 gap-4 md:gap-5">
          {outcomes.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group bg-cream border border-line p-6 md:p-8 flex flex-col gap-4 hover:bg-ink hover:text-paper transition-colors"
              data-testid={`result-outcome-${i}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-60">
                  Outcome {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-10 h-10 rounded-full border border-current/30 flex items-center justify-center">
                  <o.icon className="w-4 h-4" strokeWidth={1.4} />
                </div>
              </div>
              <h3 className="font-editorial text-[22px] md:text-[24px] leading-[1.1] tracking-tight">
                {o.title}
              </h3>
              <p className="text-[13.5px] leading-[1.55] opacity-75">{o.body}</p>
            </motion.div>
          ))}
        </div>

        {/* 5 pillar tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="mt-20 md:mt-28 bg-ink text-paper p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-8 md:gap-10"
        >
          <div className="md:flex-1">
            <div className="text-[10px] uppercase tracking-[0.22em] text-paper/50 mb-3">
              The solution is simple
            </div>
            <div className="font-editorial text-[7vw] md:text-[4.4vw] lg:text-[3.2vw] leading-[1.05] tracking-[-0.02em]">
              From{" "}
              <span className="italic font-editorial-soft line-through decoration-orange-brand decoration-[2px]">
                person-dependent
              </span>{" "}
              to{" "}
              <span className="italic font-editorial-soft text-orange-brand">
                system-driven.
              </span>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-2 md:gap-3 md:max-w-md">
            {pillars.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center justify-center aspect-square border border-paper/20 hover:bg-orange-brand transition-colors p-2 text-center"
              >
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-paper/50 mb-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-editorial text-[13px] md:text-[15px] leading-tight tracking-tight">
                  {p}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
