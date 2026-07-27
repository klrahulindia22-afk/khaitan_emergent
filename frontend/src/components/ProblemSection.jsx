import { motion } from "framer-motion";
import {
  Box,
  Users,
  ShieldAlert,
  Building,
  Zap,
  ScanEye,
  MonitorCog,
} from "lucide-react";

const pains = [
  {
    n: "01",
    icon: Box,
    title: "The human-dependency trap",
    body: "Schools operate on manual, ad hoc processes that create a black box around what actually happens inside the classroom.",
  },
  {
    n: "02",
    icon: Users,
    title: "Discretion-led inconsistency",
    body: "Lesson plans left to individual teachers, SMEs and HODs. 30–50% quality variance across sections. If a strong leader leaves, the campus collapses.",
  },
  {
    n: "03",
    icon: ShieldAlert,
    title: "The supervision gap",
    body: "No standardised check to ensure alignment with NCF, NEP 2020 or CBSE. Manual planning leads to inconsistent delivery and administrative overload.",
  },
  {
    n: "04",
    icon: Building,
    title: "The scaling bottleneck",
    body: "Schools scale buildings but fail to scale the academic engine. As they expand, the manual system breaks down for lack of local expertise.",
  },
];

const consequences = [
  "Erosion of parent trust",
  "Admission decline",
  "Teacher & staff instability",
  "Market confusion",
  "Reputational damage",
  "Operational disruption",
  "Long-term business uncertainty",
];

const fixSteps = [
  {
    n: "→",
    icon: Zap,
    label: "Move",
    body: "From person-dependent to process-dependent.",
  },
  {
    n: "→",
    icon: ScanEye,
    label: "Generate",
    body: "PRP (Prerequisite Revision Plan), AAP (Annual Academic Plan), APP (Annual Pedagogical Plan), Lesson Plans, Gap Analysis Report, Improvement Plan, Class Log Book and PTM Summary Report — all built with one click.",
  },
  {
    n: "→",
    icon: MonitorCog,
    label: "Monitor",
    body: "Every artefact tracked on a central dashboard.",
  },
];

export const ProblemSection = () => {
  return (
    <section
      id="problem"
      className="relative bg-paper text-ink py-24 md:py-36 px-6 md:px-10 lg:px-14 border-t border-line overflow-hidden"
      data-testid="problem-section"
    >
      <ChapterHead num="01" label="Problem · Academic Inconsistency" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.7, 0, 0.2, 1] }}
        className="font-editorial text-[9vw] md:text-[6.2vw] lg:text-[4.6vw] leading-[0.9] tracking-[-0.035em] mt-6 max-w-5xl"
      >
        Academic inconsistency is not a{" "}
        <span className="italic font-editorial-soft text-orange-brand">
          teaching
        </span>{" "}
        problem. It is a{" "}
        <span className="italic font-editorial-soft">systems</span> problem.
      </motion.h2>

      {/* Core issue callout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="mt-12 md:mt-14 grid md:grid-cols-12 gap-8 md:gap-10 items-start"
      >
        <div className="md:col-span-1 flex md:justify-end">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-orange-brand pt-1">
            Core
          </span>
        </div>
        <div className="md:col-span-6">
          <p className="text-[17px] md:text-[19px] leading-[1.55] text-ink font-editorial-soft italic">
            Inability to deliver uniform academic quality — established by NCF,
            NEP 2020, NCERT and CBSE — across sections and campuses.
          </p>
        </div>
        <div className="md:col-span-5">
          <p className="text-[15px] leading-[1.65] text-ink/70">
            Most schools fail not because of infrastructure, but because of
            academic inconsistency — and promoters struggle most with turning a
            school from a person-dependent institution into a system-driven
            organisation.
          </p>
        </div>
      </motion.div>

      {/* 4 Pain Point cards */}
      <div className="mt-16 md:mt-20 border-t border-l border-ink/15 grid md:grid-cols-2 lg:grid-cols-4">
        {pains.map((p, i) => (
          <motion.article
            key={p.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.08,
              ease: [0.7, 0, 0.2, 1],
            }}
            className="group relative border-r border-b border-ink/15 p-7 md:p-8 flex flex-col gap-5 bg-paper hover:bg-cream transition-colors min-h-[260px]"
            data-testid={`problem-card-${i}`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-brand">
                Pain · {p.n}
              </span>
              <div className="w-10 h-10 rounded-full border border-ink/15 flex items-center justify-center group-hover:bg-ink group-hover:text-paper transition-colors">
                <p.icon className="w-4 h-4" strokeWidth={1.4} />
              </div>
            </div>
            <h3 className="font-editorial text-[24px] md:text-[26px] leading-[1.05] tracking-tight mt-1">
              {p.title}
            </h3>
            <p className="text-[13.5px] leading-[1.55] text-ink/70">{p.body}</p>
          </motion.article>
        ))}
      </div>

      {/* Volume challenge banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="mt-14 md:mt-16 bg-ink text-paper p-8 md:p-12 grid md:grid-cols-12 gap-8 items-center relative overflow-hidden"
        data-testid="volume-banner"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -bottom-16 font-editorial italic text-[240px] leading-none text-paper/[0.04] select-none"
        >
          12k
        </div>
        <div className="md:col-span-7 relative z-10">
          <div className="text-[10px] uppercase tracking-[0.22em] text-paper/50 mb-3">
            The volume challenge
          </div>
          <h3 className="font-editorial text-[6vw] md:text-[3.6vw] lg:text-[2.6vw] leading-[1.05] tracking-[-0.02em]">
            <span className="text-orange-brand">12,000 lesson plans</span> per
            school, per year. Manual compliance becomes a{" "}
            <span className="italic font-editorial-soft">
              mathematical impossibility
            </span>{" "}
            — not a management task.
          </h3>
        </div>
        <div className="md:col-span-5 relative z-10 grid grid-cols-2 gap-4">
          <VolumeStat n="3,000" k="students / school" />
          <VolumeStat n="200" k="teachers / school" accent />
          <VolumeStat n="30–50%" k="variance today" accent />
          <VolumeStat n="0" k="manual review possible" />
        </div>
      </motion.div>

      {/* Consequences chips */}
      <div className="mt-16 md:mt-20 grid md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-3">
          <div className="text-[10px] uppercase tracking-[0.22em] text-slate-brand mb-3">
            Consequences
          </div>
          <p className="font-editorial italic text-[26px] md:text-[30px] leading-[1.05] text-ink">
            When variance goes unmanaged, the institution pays.
          </p>
        </div>
        <div className="md:col-span-9 flex flex-wrap gap-2.5">
          {consequences.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 border border-ink/20 text-[13px] text-ink/80 hover:bg-ink hover:text-paper transition-colors"
              data-testid={`consequence-${i}`}
            >
              <span className="w-1 h-1 rounded-full bg-orange-brand" />
              {c}
            </motion.span>
          ))}
        </div>
      </div>

      {/* The Fix */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="mt-20 md:mt-24 pt-10 border-t border-ink/15"
      >
        <div className="flex items-baseline gap-4 mb-8">
          <span className="font-editorial italic text-[46px] leading-none text-orange-brand">
            Fix
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-brand">
            The Academic OS replaces manual discretion
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {fixSteps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-ink/15 p-7 md:p-8 flex flex-col gap-4 bg-cream"
              data-testid={`fix-step-${i}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-brand">
                  Step 0{i + 1}
                </span>
                <div className="w-9 h-9 rounded-full bg-ink text-paper flex items-center justify-center">
                  <s.icon className="w-4 h-4" strokeWidth={1.6} />
                </div>
              </div>
              <div className="font-editorial text-[22px] md:text-[24px] leading-tight tracking-tight">
                {s.label}
              </div>
              <p className="text-[13.5px] leading-[1.55] text-ink/70">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-[13px] uppercase tracking-[0.22em] text-orange-brand font-mono">
          Outcome — Consistent academic quality · Scalable · Measurable ·
          Sustainable
        </p>
      </motion.div>
    </section>
  );
};

const VolumeStat = ({ n, k, accent }) => (
  <div className="border border-paper/15 p-4">
    <div
      className={`font-editorial text-[28px] leading-none ${
        accent ? "text-orange-brand" : "text-paper"
      }`}
    >
      {n}
    </div>
    <div className="text-[10px] uppercase tracking-[0.2em] text-paper/60 mt-2">
      {k}
    </div>
  </div>
);

export const ChapterHead = ({ num, label }) => (
  <div className="flex items-baseline gap-5">
    <span className="font-editorial text-[64px] md:text-[80px] leading-none italic text-orange-brand">
      {num}
    </span>
    <div className="flex flex-col">
      <span className="text-[10px] uppercase tracking-[0.24em] text-slate-brand">
        Chapter
      </span>
      <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-ink mt-1">
        {label}
      </span>
    </div>
    <span className="hidden md:block flex-1 h-px bg-ink/15 ml-6" />
  </div>
);
