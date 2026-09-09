import { motion } from "framer-motion";
import { ChapterHead } from "./ProblemSection";
import {
  Wallet,
  Cog,
  Gauge,
  FileWarning,
  UserCog,
  Activity,
  Check,
} from "lucide-react";

const pains = [
  {
    n: "01",
    icon: Wallet,
    title: "Admissions uncertainty & revenue pressure",
    body: "Uncertain admissions make revenue unpredictable and impact staffing, budgeting and operational planning.",
  },
  {
    n: "02",
    icon: Cog,
    title: "Lack of systems & processes",
    body: "Absence of SOPs, workflows and standard operating procedures leads to inconsistent execution.",
  },
  {
    n: "03",
    icon: Gauge,
    title: "No accountability or KPI tracking",
    body: "Without KPIs and accountability, there is no measurable way to evaluate performance or ensure ownership.",
  },
  {
    n: "04",
    icon: FileWarning,
    title: "Documentation gap",
    body: "Limited documentation results in knowledge loss, dependency on individuals and poor compliance readiness.",
  },
  {
    n: "05",
    icon: UserCog,
    title: "Role clarity & ownership",
    body: "Unclear roles and responsibility for processes create confusion and duplication of work.",
  },
  {
    n: "06",
    icon: Activity,
    title: "Lack of review & monitoring",
    body: "Without structured reviews and dashboards, issues remain hidden and decisions are reactive.",
  },
];

const fix = [
  "Define roles, responsibilities & accountability matrix",
  "Build KPI-driven performance framework",
  "Implement SOPs & standard workflows",
  "Establish documentation & knowledge systems",
  "Deploy dashboards for review & early intervention",
  "Plan admissions, leadership succession & risk mitigation",
];

export const PromoterPain = () => {
  return (
    <section
      id="promoter"
      className="relative bg-ink text-paper py-24 md:py-36 px-6 md:px-10 lg:px-14 overflow-hidden"
      data-testid="promoter-section"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-10 md:right-10 font-editorial italic text-[42vw] md:text-[26vw] leading-none text-paper/[0.03] select-none"
      >
        02
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.7, 0, 0.2, 1] }}
        className="relative z-10 max-w-6xl"
      >
        <ChapterHeadDark num="02" label="Problem · Promoter Pain Points" />

        <h2 className="font-editorial text-[9vw] md:text-[6.2vw] lg:text-[4.6vw] leading-[0.9] tracking-[-0.035em] mt-6 max-w-5xl">
          Six loads{" "}
          <span className="italic font-editorial-soft text-orange-brand">
            the Promoter
          </span>{" "}
          carries —{" "}
          <span className="italic font-editorial-soft">alone.</span>
        </h2>

        <div className="mt-10 grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-1 flex md:justify-end">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-orange-bright pt-1">
              Core
            </span>
          </div>
          <div className="md:col-span-6">
            <p className="text-[17px] md:text-[19px] leading-[1.55] text-paper font-editorial-soft italic">
              Most promoters operate without clarity on roles, processes or
              accountability — no KPIs, no monitoring, no receipts.
            </p>
          </div>
          <div className="md:col-span-5">
            <p className="text-[15px] leading-[1.65] text-paper/70">
              Strategic uncertainty in admissions, leadership and legal areas
              results in weak clarity, inconsistent execution and reduced
              readiness for sustainable growth.
            </p>
          </div>
        </div>
      </motion.div>

      {/* 6 Pain cards */}
      <div className="relative z-10 mt-16 md:mt-20 border-t border-l border-paper/15 grid md:grid-cols-2 lg:grid-cols-3">
        {pains.map((p, i) => (
          <motion.article
            key={p.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: (i % 3) * 0.1,
              ease: [0.7, 0, 0.2, 1],
            }}
            className="group relative border-r border-b border-paper/15 p-7 md:p-8 flex flex-col gap-5 hover:bg-paper/[0.03] transition-colors min-h-[220px]"
            data-testid={`promoter-pain-${i}`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50">
                Pain · {p.n}
              </span>
              <div className="w-10 h-10 rounded-full border border-paper/20 flex items-center justify-center group-hover:bg-orange-brand group-hover:border-orange-brand transition-colors">
                <p.icon className="w-4 h-4" strokeWidth={1.4} />
              </div>
            </div>
            <h3 className="font-editorial text-[24px] md:text-[26px] leading-[1.05] tracking-tight">
              {p.title}
            </h3>
            <p className="text-[13.5px] leading-[1.55] text-paper/70">
              {p.body}
            </p>
          </motion.article>
        ))}
      </div>

      {/* Strategic level bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mt-16 md:mt-20 bg-orange-brand text-paper p-8 md:p-12 grid md:grid-cols-12 gap-8"
      >
        <div className="md:col-span-4">
          <div className="text-[10px] uppercase tracking-[0.22em] text-paper/70 mb-3">
            At the strategic level
          </div>
          <h3 className="font-editorial text-[7vw] md:text-[3.6vw] lg:text-[2.6vw] leading-[1.05] tracking-[-0.02em]">
            Where the promoter{" "}
            <span className="italic font-editorial-soft">runs blind.</span>
          </h3>
        </div>
        <div className="md:col-span-8 grid sm:grid-cols-2 gap-y-3 gap-x-6">
          {[
            "Uncertainty in setting realistic admission targets",
            "Weak leadership succession planning",
            "Legal & regulatory risk exposure",
            "Inability to measure performance or ROI",
            "Lack of long-term strategic clarity",
          ].map((s, i) => (
            <div
              key={s}
              className="flex items-start gap-3 text-[14.5px] leading-[1.5]"
            >
              <span className="font-mono text-[11px] pt-1 opacity-70">
                0{i + 1}
              </span>
              <span>{s}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* The Fix */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mt-16 md:mt-20 pt-10 border-t border-paper/15"
      >
        <div className="flex items-baseline gap-4 mb-8">
          <span className="font-editorial italic text-[46px] leading-none text-orange-brand">
            Fix
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/60">
            Six moves to Clarity · Control · Consistency · Confidence
          </span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {fix.map((f, i) => (
            <motion.div
              key={f}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex items-start gap-3 p-4 border border-paper/15 hover:bg-paper/[0.04] transition-colors"
              data-testid={`fix-item-${i}`}
            >
              <span className="w-6 h-6 rounded-full bg-orange-brand text-paper flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3" strokeWidth={2.5} />
              </span>
              <span className="text-[13.5px] leading-[1.5]">{f}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const ChapterHeadDark = ({ num, label }) => (
  <div className="flex items-baseline gap-5">
    <span className="font-editorial text-[64px] md:text-[80px] leading-none italic text-orange-brand">
      {num}
    </span>
    <div className="flex flex-col">
      <span className="text-[10px] uppercase tracking-[0.24em] text-paper/50">
        Chapter
      </span>
      <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-paper mt-1">
        {label}
      </span>
    </div>
    <span className="hidden md:block flex-1 h-px bg-paper/20 ml-6" />
  </div>
);
