import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BookOpen,
  ClipboardList,
  BookMarked,
  Cpu,
  GraduationCap,
  TrendingUp,
  Users,
  Landmark,
  ChartBar,
  Shield,
  UserCog,
  Monitor,
  Target,
  Crown,
} from "lucide-react";
import { ChapterHead } from "./ProblemSection";

const divisions = [
  {
    n: "01",
    icon: BookOpen,
    title: "Academic Excellence",
    dept: "Academic Excellence Division",
    body: "Institutionalise academic excellence through research-driven frameworks and successful implementation of academic systems across partner schools.",
  },
  {
    n: "02",
    icon: ClipboardList,
    title: "Review & Accountability",
    dept: "Review & Accountability Division",
    body: "Transform schools into accountable, performance-driven organisations through effective reviews, clear expectations and strong accountability.",
  },
  {
    n: "03",
    icon: BookMarked,
    title: "School Operating Manual · Playbook",
    dept: "School Operating Manual · Playbook Division",
    body: "Custodian of the Khaitan EduOps way of operating schools — through systems, policies, formats, playbooks and operational excellence.",
    accent: "orange",
  },
  {
    n: "04",
    icon: Cpu,
    title: "KOSMOS ERP & FMS",
    dept: "KOSMOS ERP & FMS Division",
    body: "Automate and digitise the complete school ecosystem for efficiency, transparency and control.",
  },
  {
    n: "05",
    icon: GraduationCap,
    title: "Khaitan EduOps Academy",
    dept: "Khaitan EduOps Academy Division",
    body: "Build institutional capability by developing the knowledge, skills and mindset of all key stakeholders in schools.",
  },
  {
    n: "06",
    icon: TrendingUp,
    title: "School Transformation & Implementation",
    dept: "School Transformation & Implementation Division",
    body: "Drive end-to-end transformation and ensure successful adoption, implementation and sustainability of systems and processes.",
  },
  {
    n: "07",
    icon: Users,
    title: "Corporate Services",
    dept: "Corporate Services Division",
    body: "Enable the organisation through robust corporate support functions — HR, Finance, Sales, Marketing, Admin & Legal, and IT.",
  },
];

const enablers = [
  { icon: Landmark, k: "Systems First", v: "Standardised systems drive consistency and quality." },
  { icon: ChartBar, k: "Data & Insight Led", v: "Data drives decisions, improvement and measurable impact." },
  { icon: Shield, k: "Accountability", v: "Clear roles, KPIs and review mechanisms ensure ownership." },
  { icon: UserCog, k: "People Excellence", v: "Right capability, training and continuous growth create excellence." },
  { icon: Monitor, k: "Technology Enabled", v: "Automation, integration and digital excellence accelerate outcomes." },
  { icon: Target, k: "Transformational Impact", v: "Sustainable improvement in learning and operations for long-term success." },
];

export const Organisation = () => {
  return (
    <section
      id="organisation"
      className="relative bg-paper-warm text-ink py-24 md:py-36 px-6 md:px-10 lg:px-14 border-t border-line overflow-hidden"
      data-testid="organisation-section"
    >
      <ChapterHead num="09" label="Our Organisation" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="mt-6 font-editorial text-[9vw] md:text-[6.2vw] lg:text-[4.6vw] leading-[0.9] tracking-[-0.035em] max-w-5xl"
      >
        Seven divisions.{" "}
        <span className="italic font-editorial-soft text-orange-brand">
          One operating company.
        </span>
      </motion.h2>

      <div className="mt-10 grid lg:grid-cols-12 gap-8">
        <p className="lg:col-span-6 text-[16px] md:text-[17px] leading-[1.6] text-ink/70">
          Institutionalising excellence. Driving transformation. Creating
          future-ready schools. Our organisation is engineered as an Education
          Management Operating Company — not an EdTech, not an ERP, not a
          consultancy.
        </p>
        <div className="lg:col-span-6 flex items-start gap-4 lg:pl-6 lg:border-l border-ink/15">
          <div className="w-10 h-10 rounded-full bg-orange-brand text-paper flex items-center justify-center shrink-0 mt-1">
            <Target className="w-4 h-4" strokeWidth={1.6} />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-slate-brand mb-2">
              Our Purpose
            </div>
            <p className="font-editorial text-[19px] md:text-[21px] leading-[1.35] tracking-tight">
              To build{" "}
              <span className="italic font-editorial-soft text-orange-brand">
                professionally managed, future-ready schools
              </span>{" "}
              through systems, governance, technology, capability building and
              implementation excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Org Chart flow diagram */}
      <div
        className="mt-16 md:mt-20 relative"
        data-testid="org-chart"
      >
        <div className="text-[10px] uppercase tracking-[0.22em] text-slate-brand mb-6 font-mono">
          Fig · 09 · The reporting structure
        </div>

        <div className="bg-paper border border-line p-6 md:p-10 relative overflow-x-auto">
          {/* Top — Executive Leadership Team */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-ink text-paper rounded-full"
            >
              <Crown className="w-4 h-4 text-orange-brand" strokeWidth={1.6} />
              <span className="font-mono text-[11px] uppercase tracking-[0.22em]">
                Executive Leadership Team
              </span>
            </motion.div>
          </div>

          {/* Vertical connector down from ELT */}
          <div className="flex justify-center">
            <div className="w-0.5 h-12 bg-ink" />
          </div>

          {/* Horizontal bar spanning 7 columns */}
          <div className="hidden lg:block relative h-0">
            <div className="absolute left-[7.14%] right-[7.14%] top-0 h-0.5 bg-ink" />
          </div>

          {/* Division nodes with drop lines (desktop grid) */}
          <div className="mt-0 hidden lg:grid grid-cols-7 gap-3 relative">
            {divisions.map((d, i) => (
              <div key={d.n} className="flex flex-col items-center">
                <div className="w-0.5 h-12 bg-ink" />
                <DivisionNode d={d} i={i} />
              </div>
            ))}
          </div>

          {/* Mobile stacked — same nodes, single column */}
          <div className="lg:hidden flex flex-col items-center gap-3 mt-2">
            {divisions.map((d, i) => (
              <div key={d.n} className="flex flex-col items-center w-full">
                <div className="w-0.5 h-6 bg-ink" />
                <div className="w-full max-w-sm">
                  <DivisionNode d={d} i={i} mobile />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Enablers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="mt-20 md:mt-28 pt-14 border-t border-ink/15"
      >
        <div className="flex items-baseline gap-4 mb-8">
          <span className="font-editorial italic text-[46px] leading-none text-orange-brand">
            §
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-brand">
            Our Enablers
          </span>
          <span className="hidden md:block flex-1 h-px bg-ink/15 ml-6" />
        </div>
        <h3 className="font-editorial text-[7vw] md:text-[4vw] lg:text-[3vw] leading-[1.05] tracking-[-0.02em] max-w-5xl">
          The six forces that make{" "}
          <span className="italic font-editorial-soft text-orange-brand">
            the operating layer
          </span>{" "}
          run.
        </h3>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {enablers.map((e, i) => (
            <motion.div
              key={e.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex items-start gap-4 p-6 bg-paper border border-line hover:bg-ink hover:text-paper transition-colors"
              data-testid={`enabler-${i}`}
            >
              <div className="w-10 h-10 rounded-full bg-orange-brand text-paper flex items-center justify-center shrink-0">
                <e.icon className="w-4 h-4" strokeWidth={1.6} />
              </div>
              <div>
                <div className="font-editorial text-[19px] md:text-[20px] leading-tight tracking-tight">
                  {e.k}
                </div>
                <div className="text-[13px] leading-[1.55] mt-1.5 opacity-75">
                  {e.v}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Closing manifesto */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="mt-20 md:mt-28 bg-ink text-paper p-8 md:p-14 relative overflow-hidden"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-10 -right-10 font-editorial italic text-[220px] leading-none text-paper/[0.05] select-none"
        >
          09
        </div>
        <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <div className="text-[10px] uppercase tracking-[0.22em] text-paper/50 mb-4">
              Reassertion
            </div>
            <h3 className="font-editorial text-[7vw] md:text-[4.4vw] lg:text-[3.2vw] leading-[1.05] tracking-[-0.02em]">
              Khaitan EduOps is not an{" "}
              <span className="italic font-editorial-soft line-through decoration-orange-brand decoration-[2px]">
                EdTech, ERP, LMS or consultancy.
              </span>
              <br />
              <span className="italic font-editorial-soft text-orange-brand">
                We are an Education Management Operating Company.
              </span>
            </h3>
            <p className="mt-6 max-w-2xl text-[15px] leading-[1.65] text-paper/75">
              We institutionalise school operations through systems, governance,
              technology, capability building and implementation excellence —
              enabling schools to transition from promoter-dependent
              institutions into professionally managed, future-ready
              organisations.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-orange-brand text-paper hover:brightness-110 transition group"
              data-testid="org-cta"
            >
              <span className="text-[14px] font-medium">
                Bring us in
              </span>
              <span className="w-9 h-9 rounded-full bg-paper text-ink flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const DivisionNode = ({ d, i, mobile }) => {
  const isOrange = d.accent === "orange";
  const Icon = d.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 + i * 0.05 }}
      className={`w-full flex flex-col gap-2 p-4 md:p-4 border transition-colors ${
        mobile ? "min-h-0" : "min-h-[190px]"
      } ${
        isOrange
          ? "bg-orange-brand text-paper border-transparent"
          : "bg-cream border-line hover:bg-ink hover:text-paper"
      }`}
      data-testid={`division-node-${d.n}`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`font-mono text-[10px] uppercase tracking-[0.22em] ${
            isOrange ? "text-paper/70" : "text-slate-brand"
          }`}
        >
          {d.n}
        </span>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            isOrange ? "bg-paper/15" : "bg-ink/5"
          }`}
        >
          <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
        </div>
      </div>
      <h4 className="font-editorial text-[15px] md:text-[16px] leading-[1.05] tracking-tight">
        {d.title}
      </h4>
      <div
        className={`text-[9.5px] uppercase tracking-[0.16em] leading-[1.35] ${
          isOrange ? "text-paper/80" : "text-orange-brand"
        }`}
      >
        {d.dept}
      </div>
    </motion.article>
  );
};
