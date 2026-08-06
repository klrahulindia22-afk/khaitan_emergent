import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  X,
  Building2,
  Shield,
  Brain,
  UserCog,
  Cog,
  TrendingUp,
  Repeat,
  Puzzle,
  Layers,
  Database,
  Cpu,
  Trophy,
  Rocket,
  Star,
  Landmark,
  Users,
  ChartBar,
} from "lucide-react";
import { ChapterHead } from "./ProblemSection";

const cadenceChips = [
  { label: "Daily", sub: "Dashboards" },
  { label: "Daily", sub: "MIS Reports" },
  { label: "Weekly", sub: "Review Reports" },
  { label: "Monthly", sub: "KPI Evaluation" },
  { label: "Quarterly", sub: "Audits" },
  { label: "Annual", sub: "Performance Assessment" },
];

const rareDisciplines = [
  { icon: Building2, title: "Actual school operations" },
  { icon: Shield, title: "Governance pain" },
  { icon: Brain, title: "Promoter psychology" },
  { icon: UserCog, title: "Principal dependency" },
  { icon: Cog, title: "Execution realities" },
];

const visionChain = [
  { icon: Cpu, title: "Technology + strong systems" },
  { icon: Repeat, title: "Recurring revenue (ARR)" },
  { icon: Landmark, title: "Operational depth · governance" },
  { icon: Layers, title: "Scalable, repeatable model" },
  { icon: Trophy, title: "Enterprise valuations, structurally possible" },
];

const investorValues = [
  { icon: TrendingUp, k: "Annual recurring revenue", v: "ARR that compounds cohort-over-cohort." },
  { icon: Repeat, k: "Retention of schools", v: "Multi-year engagements. Handovers, not churn." },
  { icon: Puzzle, k: "Operating dependency", v: "Institutions that depend on the operating layer." },
  { icon: Layers, k: "Scalability model", v: "One playbook · many campuses · low variance." },
  { icon: Database, k: "Data assets", v: "One record per student, forever. Compounding IP." },
  { icon: Cpu, k: "Platform integration", v: "KOSMOS ERP + Playbook Agent as the substrate." },
  { icon: Trophy, k: "Market dominance", v: "The default operator inside the Indian K-12 market." },
];

const promises = [
  { icon: Landmark, title: "We build the institutional operating infrastructure schools depend on." },
  { icon: Users, title: "We drive accountability, performance and sustainable growth." },
  { icon: Cog, title: "We integrate systems, technology and governance to create excellence." },
  { icon: ChartBar, title: "We help schools transform today for a future that lasts." },
];

export const StrategicAdvantage = () => {
  return (
    <section
      id="strategic"
      className="relative bg-paper text-ink py-24 md:py-36 px-6 md:px-10 lg:px-14 border-t border-line overflow-hidden"
      data-testid="strategic-section"
    >
      <ChapterHead num="08" label="Our Strategic Advantage" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9 }}
        className="font-editorial text-[9vw] md:text-[6.2vw] lg:text-[4.6vw] leading-[0.9] tracking-[-0.035em] mt-6 max-w-6xl"
      >
        We do not{" "}
        <span className="italic font-editorial-soft line-through decoration-orange-brand decoration-[3px]">
          sell software to schools.
        </span>{" "}
        We build the{" "}
        <span className="italic font-editorial-soft text-orange-brand">
          operating infrastructure
        </span>{" "}
        they depend on.
      </motion.h2>

      {/* A — Positioning */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="mt-20 md:mt-24 grid lg:grid-cols-12 gap-6 md:gap-8"
      >
        <div className="lg:col-span-5">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-editorial italic text-[46px] leading-none text-orange-brand">
              A
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-brand">
              Our Position
            </span>
          </div>
          <div className="bg-cream border border-line p-8 md:p-10">
            <p className="font-editorial text-[24px] md:text-[26px] leading-[1.15] tracking-tight italic font-editorial-soft line-through decoration-orange-brand decoration-[2px] text-ink/70">
              “We provide technology to schools.”
            </p>
          </div>

          <div className="mt-4 bg-ink text-paper p-8 md:p-10 relative overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-16 -right-4 font-editorial italic text-[180px] leading-none text-paper/[0.06] select-none"
            >
              ✓
            </div>
            <p className="relative z-10 font-editorial text-[26px] md:text-[30px] leading-[1.15] tracking-tight">
              We{" "}
              <span className="italic font-editorial-soft text-orange-brand">
                professionalise and institutionalise
              </span>{" "}
              schools' academic & non-academic operations.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="text-[10px] uppercase tracking-[0.22em] text-slate-brand mb-4">
            The Review & Accountability Engine
          </div>
          <h3 className="font-editorial text-[7vw] md:text-[3vw] lg:text-[2.4vw] leading-[1.05] tracking-[-0.02em] max-w-2xl">
            The central{" "}
            <span className="italic font-editorial-soft text-orange-brand">
              nervous system
            </span>{" "}
            of the entire operating model.
          </h3>
          <p className="mt-6 max-w-xl text-[15px] leading-[1.65] text-ink/70">
            Every system, every process and every stakeholder — held accountable
            through a single, continuous cadence. Institutional health becomes
            visible; issues surface early; leadership acts fast.
          </p>

          <div className="mt-10">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {cadenceChips.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="border border-ink/15 p-4 md:p-5 hover:bg-ink hover:text-paper transition-colors group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-brand" />
                  </div>
                  <div className="font-editorial text-[20px] md:text-[22px] leading-none tracking-tight">
                    {c.label}
                  </div>
                  <div className="text-[12px] mt-2 opacity-70 leading-[1.4]">
                    {c.sub}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* B — Strategic Advantage: rare disciplines */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="mt-24 md:mt-32"
      >
        <div className="flex items-baseline gap-4 mb-8">
          <span className="font-editorial italic text-[46px] leading-none text-orange-brand">
            B
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-brand">
            Our Biggest Strategic Advantage
          </span>
          <span className="hidden md:block flex-1 h-px bg-ink/15 ml-6" />
        </div>

        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-start">
          {/* EdTech founders card */}
          <div className="lg:col-span-4 bg-cream border border-line p-7 md:p-8 flex flex-col gap-5 h-full">
            <div className="text-[10px] uppercase tracking-[0.22em] text-slate-brand">
              Most EdTech founders
            </div>
            <div className="w-16 h-16 border border-ink/20 flex items-center justify-center">
              <Cpu className="w-6 h-6" strokeWidth={1.4} />
            </div>
            <h3 className="font-editorial text-[28px] md:text-[32px] leading-[1.05] tracking-tight italic font-editorial-soft line-through decoration-orange-brand decoration-[2px] text-ink/70">
              Understand technology.
            </h3>
            <p className="mt-auto text-[13px] uppercase tracking-[0.22em] text-slate-brand">
              A commodity in K-12
            </p>
          </div>

          {/* VS badge */}
          <div className="hidden lg:col-span-1 lg:flex items-center justify-center h-full">
            <div className="w-14 h-14 rounded-full bg-ink text-paper flex items-center justify-center font-editorial italic text-[20px]">
              vs
            </div>
          </div>

          {/* Khaitan understanding — 5 rare disciplines */}
          <div className="lg:col-span-7 bg-ink text-paper p-7 md:p-10">
            <div className="text-[10px] uppercase tracking-[0.22em] text-orange-brand mb-5">
              We understand
            </div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {rareDisciplines.map((d, i) => (
                <motion.li
                  key={d.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="flex items-center gap-4 p-4 border border-paper/15 hover:bg-paper/[0.04] transition-colors"
                  data-testid={`rare-${i}`}
                >
                  <div className="w-10 h-10 rounded-full bg-orange-brand text-paper flex items-center justify-center shrink-0">
                    <d.icon className="w-4 h-4" strokeWidth={1.6} />
                  </div>
                  <span className="font-editorial text-[19px] md:text-[20px] leading-tight tracking-tight">
                    {d.title}
                  </span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-paper/15 flex items-center justify-between gap-4">
              <div className="font-editorial italic text-[24px] md:text-[28px] text-paper">
                That is{" "}
                <span className="text-orange-brand">rare.</span>
              </div>
              <Star className="w-6 h-6 text-orange-brand" strokeWidth={1.5} fill="currentColor" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* C — Long term vision */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="mt-24 md:mt-32"
      >
        <div className="flex items-baseline gap-4 mb-8">
          <span className="font-editorial italic text-[46px] leading-none text-orange-brand">
            C
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-brand">
            Our Long-Term Vision
          </span>
          <span className="hidden md:block flex-1 h-px bg-ink/15 ml-6" />
        </div>

        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-start">
          <div className="lg:col-span-6 bg-paper-warm border border-line p-8 md:p-10 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-ink text-paper flex items-center justify-center">
                <Rocket className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <span className="text-[10px] uppercase tracking-[0.22em] text-slate-brand">
                The end goal is NOT
              </span>
            </div>
            <p className="font-editorial text-[28px] md:text-[32px] leading-[1.15] tracking-tight italic font-editorial-soft line-through decoration-orange-brand decoration-[2px] text-ink/70">
              Selling software to schools.
            </p>

            <div className="pt-6 border-t border-ink/15">
              <div className="text-[10px] uppercase tracking-[0.22em] text-orange-brand mb-3">
                The end goal IS
              </div>
              <p className="font-editorial text-[7vw] md:text-[3.2vw] lg:text-[2.4vw] leading-[1.1] tracking-[-0.02em]">
                Becoming the{" "}
                <span className="italic font-editorial-soft text-orange-brand">
                  institutional operating infrastructure
                </span>{" "}
                for the education sector.
              </p>
              <p className="mt-4 text-[13px] italic font-editorial-soft text-ink/70">
                That is where enduring value is created.
              </p>
            </div>
          </div>

          {/* Chain */}
          <div className="lg:col-span-6 bg-ink text-paper p-8 md:p-10">
            <div className="text-[10px] uppercase tracking-[0.22em] text-paper/50 mb-6">
              If we execute correctly
            </div>
            <ol className="space-y-4">
              {visionChain.map((step, i) => (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-center gap-4"
                  data-testid={`vision-step-${i}`}
                >
                  <span className="font-mono text-[11px] text-paper/40 w-8 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-paper/10 flex items-center justify-center shrink-0">
                    <step.icon className="w-4 h-4" strokeWidth={1.6} />
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-orange-brand shrink-0" />
                  <span className="text-[15px] leading-tight">{step.title}</span>
                </motion.li>
              ))}
            </ol>
            <div className="mt-8 pt-6 border-t border-paper/15 text-[13px] italic font-editorial-soft text-paper/85">
              → Structurally, an enterprise valuation becomes possible over time.
            </div>
          </div>
        </div>
      </motion.div>

      {/* D — What investors will value : removed per direction */}

      {/* Bottom — 4 promise pillars */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="mt-24 md:mt-32 pt-14 border-t border-ink/15"
      >
        <div className="text-[10px] uppercase tracking-[0.22em] text-slate-brand mb-6">
          What we stand for
        </div>
        <h3 className="font-editorial text-[7vw] md:text-[4vw] lg:text-[3vw] leading-[1.05] tracking-[-0.02em] max-w-5xl">
          Four promises that make{" "}
          <span className="italic font-editorial-soft text-orange-brand">
            Khaitan EduOps
          </span>{" "}
          different.
        </h3>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {promises.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-cream border border-line p-6 md:p-7 flex flex-col gap-5 hover:bg-ink hover:text-paper transition-colors group"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-60">
                  Promise {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-10 h-10 rounded-full bg-orange-brand text-paper flex items-center justify-center">
                  <p.icon className="w-4 h-4" strokeWidth={1.6} />
                </div>
              </div>
              <p className="font-editorial text-[19px] md:text-[20px] leading-[1.15] tracking-tight">
                {p.title}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-md text-[15px] leading-[1.6] text-ink/70">
            Every school that adopts the operating layer becomes a proof point —
            and every proof point compounds the moat.
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-ink text-paper hover:bg-orange-brand transition-colors"
            data-testid="strategic-cta"
          >
            <span className="text-[14px] font-medium">Partner with us</span>
            <span className="w-9 h-9 rounded-full bg-orange-brand group-hover:bg-paper text-paper group-hover:text-ink flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
