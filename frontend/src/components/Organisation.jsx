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
    dept: "Research & Development · Implementation & Success",
    body: "Institutionalise academic excellence through research-driven frameworks and successful implementation of academic systems across partner schools.",
  },
  {
    n: "02",
    icon: ClipboardList,
    title: "Review & Accountability",
    dept: "Review Management Department",
    body: "Transform schools into accountable, performance-driven organisations through effective reviews, clear expectations and strong accountability.",
  },
  {
    n: "03",
    icon: BookMarked,
    title: "School Operating Manual · Playbook",
    dept: "Playbook & Operations Department",
    body: "Custodian of the Khaitan EduOps way of operating schools — through systems, policies, formats, playbooks and operational excellence.",
    accent: "orange",
  },
  {
    n: "04",
    icon: Cpu,
    title: "KOSMOS ERP & FMS",
    dept: "ERP & FMS Implementation Department",
    body: "Automate and digitise the complete school ecosystem for efficiency, transparency and control.",
  },
  {
    n: "05",
    icon: GraduationCap,
    title: "Khaitan EduOps Academy",
    dept: "Training & Capability Development",
    body: "Build institutional capability by developing the knowledge, skills and mindset of all key stakeholders in schools.",
  },
  {
    n: "06",
    icon: TrendingUp,
    title: "School Transformation & Implementation",
    dept: "Transformation Department",
    body: "Drive end-to-end transformation and ensure successful adoption, implementation and sustainability of systems and processes.",
  },
  {
    n: "07",
    icon: Users,
    title: "Corporate Services",
    dept: "Corporate Services Department",
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

      <div className="mt-6 grid lg:grid-cols-12 gap-6 md:gap-10 items-end">
        <div className="lg:col-span-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="font-editorial text-[9vw] md:text-[6.2vw] lg:text-[4.6vw] leading-[0.9] tracking-[-0.035em] max-w-5xl"
          >
            Seven divisions.{" "}
            <span className="italic font-editorial-soft text-orange-brand">
              One operating company.
            </span>
          </motion.h2>
          <p className="mt-8 max-w-2xl text-[16px] md:text-[17px] leading-[1.6] text-ink/70">
            Institutionalising excellence. Driving transformation. Creating
            future-ready schools. Our organisation is engineered as an
            Education Management Operating Company — not an EdTech, not an ERP,
            not a consultancy.
          </p>
        </div>

        {/* Purpose card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-4 bg-ink text-paper p-7 md:p-8 relative overflow-hidden"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-14 -right-6 font-editorial italic text-[180px] leading-none text-paper/[0.05] select-none"
          >
            ★
          </div>
          <div className="relative z-10 flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-full bg-orange-brand flex items-center justify-center">
              <Target className="w-5 h-5" strokeWidth={1.6} />
            </div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-paper/60">
              Our Purpose
            </div>
          </div>
          <p className="relative z-10 font-editorial text-[19px] md:text-[20px] leading-[1.35] tracking-tight">
            To build{" "}
            <span className="italic font-editorial-soft text-orange-brand">
              professionally managed, future-ready schools
            </span>{" "}
            through systems, governance, technology, capability building and
            implementation excellence.
          </p>
        </motion.div>
      </div>

      {/* Executive leadership badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-16 md:mt-20 flex items-center justify-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-ink text-paper rounded-full">
          <Crown className="w-4 h-4 text-orange-brand" strokeWidth={1.6} />
          <span className="font-mono text-[11px] uppercase tracking-[0.22em]">
            Executive Leadership Team
          </span>
        </div>
      </motion.div>

      {/* Connector line */}
      <div className="mt-6 flex justify-center">
        <div className="w-px h-10 bg-ink/20" />
      </div>

      {/* 7 Division cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {divisions.map((d, i) => {
          const isOrange = d.accent === "orange";
          const Icon = d.icon;
          return (
            <motion.article
              key={d.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: (i % 4) * 0.08,
                ease: [0.7, 0, 0.2, 1],
              }}
              className={`group relative flex flex-col gap-4 p-6 md:p-7 border transition-colors min-h-[280px] ${
                isOrange
                  ? "bg-orange-brand text-paper border-transparent"
                  : "bg-paper border-line hover:bg-cream"
              }`}
              data-testid={`division-${d.n}`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`font-mono text-[11px] uppercase tracking-[0.22em] ${
                    isOrange ? "text-paper/70" : "text-slate-brand"
                  }`}
                >
                  Div · {d.n}
                </span>
                <div
                  className={`w-10 h-10 rounded-full border flex items-center justify-center ${
                    isOrange
                      ? "border-paper/30"
                      : "border-ink/20"
                  }`}
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="font-editorial text-[22px] md:text-[23px] leading-[1.05] tracking-tight">
                {d.title}
              </h3>
              <div
                className={`text-[10.5px] uppercase tracking-[0.2em] ${
                  isOrange ? "text-paper/70" : "text-orange-brand"
                }`}
              >
                {d.dept}
              </div>
              <p
                className={`text-[13px] leading-[1.55] ${
                  isOrange ? "text-paper/85" : "text-ink/70"
                }`}
              >
                {d.body}
              </p>
            </motion.article>
          );
        })}
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
