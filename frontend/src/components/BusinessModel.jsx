import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Landmark, Building2, Crown } from "lucide-react";
import { ChapterHead } from "./ProblemSection";

const stages = [
  {
    n: "01",
    stageLabel: "Stage One",
    name: "Operating Governance",
    kicker: "Where every engagement begins.",
    tint: "paper",
    icon: Landmark,
    tagline:
      "The school executes. We govern. Playbooks, dashboards and reviews are installed while the promoter continues to own operations legally.",
    ownedBy:
      "Land, building, staff employment, balance sheet, P&L and day-to-day academic operations.",
    provided: [
      "Academic Operating System",
      "Review Management System",
      "School Operating Manual (Playbook Agent)",
      "KOSMOS ERP",
      "EduOps Academy — training",
      "School Transformation Services",
    ],
    revenue: [
      "One-time professional fee",
      "Annual operating fee",
      "Quarterly audit fee",
      "Fixed management retainer",
    ],
    footnote: "Low risk. Low legal complexity. Easy adoption. Fast scaling.",
  },
  {
    n: "02",
    stageLabel: "Stage Two",
    name: "Managed Operations",
    kicker: "The system starts running the school.",
    tint: "ink",
    icon: Building2,
    tagline:
      "We take over day-to-day operations under management authority. The promoter becomes a board-level overseer while we run the institution.",
    ownedBy:
      "Land, infrastructure, brand, capital investment. Salaries paid by the promoter — hiring, academic and governance run by us.",
    provided: [
      "Day-to-day operations",
      "Staffing systems",
      "Governance & academic operations",
      "Budgeting, reporting, operational reviews",
      "Jointly-managed P&L",
    ],
    revenue: [
      "Fixed management fee",
      "% linked to EBITDA",
      "% linked to admissions growth",
      "Performance bonus",
    ],
    footnote:
      "High-value recurring revenue. Scales across 5–10 schools per group.",
  },
  {
    n: "03",
    stageLabel: "Stage Three",
    name: "Operating Company",
    kicker: "We become the education operator.",
    tint: "orange",
    icon: Crown,
    tagline:
      "We operate the institutions under our own brand — The Khaitan International School. The promoter becomes an asset owner or investor.",
    ownedBy:
      "Promoter retains ownership of land and building with board-level oversight. Everything else is run by us.",
    provided: [
      "Staffing, operations, governance",
      "Academic delivery",
      "Budgeting & systems",
      "Performance & execution",
    ],
    revenue: [
      "Revenue share (%)",
      "Profit share (%)",
      "Similar to hospitality / healthcare operators",
    ],
    footnote: "Creates deep institutional dependency and long-term compounding.",
  },
];

export const BusinessModel = () => {
  return (
    <section
      id="model"
      className="relative bg-paper-warm text-ink py-24 md:py-36 px-6 md:px-10 lg:px-14 border-t border-line overflow-hidden"
      data-testid="business-model-section"
    >
      <ChapterHead num="06" label="Business Model" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9 }}
        className="font-editorial text-[9vw] md:text-[6.2vw] lg:text-[4.6vw] leading-[0.9] tracking-[-0.035em] mt-6 max-w-5xl"
      >
        Our model{" "}
        <span className="italic font-editorial-soft">evolves in</span>{" "}
        <span className="italic font-editorial-soft text-orange-brand">
          three (3) stages.
        </span>
      </motion.h2>

      <p className="mt-10 max-w-2xl text-[16px] md:text-[17px] leading-[1.6] text-ink/70">
        We start where the promoter is comfortable — as governors of their
        school. We finish where the institution is dependent on the operating
        system, not on any individual. Each stage is complete on its own; the
        stages compound.
      </p>

      <div className="mt-16 md:mt-24 grid lg:grid-cols-3 gap-5 md:gap-6">
        {stages.map((s, i) => (
          <StageCard key={s.n} stage={s} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
        className="mt-16 md:mt-20 grid md:grid-cols-12 gap-10 items-end"
      >
        <div className="md:col-span-8">
          <div className="text-[10px] uppercase tracking-[0.22em] text-slate-brand mb-4">
            The goal
          </div>
          <blockquote className="font-editorial text-[6vw] md:text-[3.6vw] lg:text-[2.8vw] leading-[1.05] tracking-[-0.02em] max-w-4xl">
            To build a{" "}
            <span className="italic font-editorial-soft">
              scalable, high-value,
            </span>{" "}
            institutionally-dependent{" "}
            <span className="italic font-editorial-soft text-orange-brand">
              Education Operating Company.
            </span>
          </blockquote>
        </div>
        <div className="md:col-span-4 md:text-right">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-ink text-paper hover:bg-orange-brand transition-colors"
            data-testid="model-cta"
          >
            <span className="text-[14px] font-medium">Discuss your stage</span>
            <span className="w-9 h-9 rounded-full bg-orange-brand group-hover:bg-paper text-paper group-hover:text-ink flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

const StageCard = ({ stage, index }) => {
  const isOrange = stage.tint === "orange";
  const isInk = stage.tint === "ink";
  const bg = isOrange
    ? "bg-orange-brand text-paper"
    : isInk
      ? "bg-ink text-paper"
      : "bg-cream text-ink";
  const border = isOrange || isInk ? "border-transparent" : "border-line";
  const muted = isOrange || isInk ? "text-paper/65" : "text-ink/65";
  const divider =
    isOrange || isInk ? "border-paper/20" : "border-ink/15";
  const Icon = stage.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.7, 0, 0.2, 1] }}
      className={`relative flex flex-col ${bg} border ${border} p-7 md:p-8`}
      data-testid={`stage-card-${stage.n}`}
    >
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-3">
          <span
            className={`font-editorial italic text-[46px] leading-none ${
              isOrange ? "text-paper" : isInk ? "text-orange-brand" : "text-orange-brand"
            }`}
          >
            {stage.n}
          </span>
          <div className="flex flex-col">
            <span
              className={`text-[10px] uppercase tracking-[0.24em] ${muted}`}
            >
              {stage.stageLabel}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] mt-1">
              Model
            </span>
          </div>
        </div>
        <div
          className={`w-11 h-11 rounded-full border ${
            isOrange || isInk ? "border-paper/30" : "border-ink/20"
          } flex items-center justify-center`}
        >
          <Icon className="w-5 h-5" strokeWidth={1.4} />
        </div>
      </div>

      <h3 className="font-editorial text-[32px] md:text-[36px] leading-[0.98] tracking-tight">
        {stage.name}{" "}
        <span className="italic font-editorial-soft">Model.</span>
      </h3>
      <p className={`mt-3 text-[13.5px] uppercase tracking-[0.16em] ${muted}`}>
        {stage.kicker}
      </p>

      <p className="mt-6 text-[14.5px] leading-[1.6]">
        {stage.tagline}
      </p>

      <div className={`mt-8 pt-6 border-t ${divider}`}>
        <div
          className={`text-[10px] uppercase tracking-[0.22em] ${muted} mb-3`}
        >
          Structure — Promoter owns
        </div>
        <p className={`text-[13px] leading-[1.55] ${muted}`}>{stage.ownedBy}</p>
      </div>

      <div className={`mt-6 pt-6 border-t ${divider}`}>
        <div
          className={`text-[10px] uppercase tracking-[0.22em] ${muted} mb-3`}
        >
          What we provide
        </div>
        <ul className="space-y-1.5">
          {stage.provided.map((p) => (
            <li key={p} className="flex items-start gap-2 text-[13px]">
              <span
                className={`mt-2 w-1 h-1 rounded-full ${
                  isOrange || isInk ? "bg-paper" : "bg-orange-brand"
                } shrink-0`}
              />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={`mt-6 pt-6 border-t ${divider}`}>
        <div
          className={`text-[10px] uppercase tracking-[0.22em] ${muted} mb-3`}
        >
          How we earn
        </div>
        <ul className="space-y-1.5">
          {stage.revenue.map((r) => (
            <li key={r} className="flex items-start gap-2 text-[13px]">
              <span
                className={`mt-2 w-1 h-1 rounded-full ${
                  isOrange || isInk ? "bg-paper" : "bg-ink"
                } shrink-0`}
              />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`mt-8 pt-6 border-t ${divider} text-[12px] italic leading-[1.55] font-editorial-soft ${muted}`}
      >
        {stage.footnote}
      </div>
    </motion.article>
  );
};
