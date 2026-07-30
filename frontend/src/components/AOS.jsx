import { motion } from "framer-motion";
import { ArrowRight, Check, X, User, Users, School, Landmark } from "lucide-react";

const symptomChain = ["Annual Plan", "Lesson Plan", "Teaching", "Assessment", "Marks", "PTM"];

const hiddenQuestions = [
  "Is the syllabus actually on track?",
  "Which teacher needs support?",
  "Which students are silently falling behind?",
  "Which chapters were completed without learning?",
  "Are interventions working?",
  "Is the school academically improving?",
];

const aosChain = [
  "Academic Planning",
  "Teaching",
  "Support",
  "Assessment",
  "Gap Analysis",
  "Student Recovery",
  "PTM Reports",
  "Leadership Insights",
];

const roles = [
  { icon: User, k: "Class Teacher", v: "Know which students need support, what to teach next, what workflow is pending, what to discuss with parents." },
  { icon: Users, k: "Subject Teacher", v: "Execute lesson plans, assessments, gap analysis and improvement plans — without paperwork." },
  { icon: School, k: "Principal", v: "Monitor academic execution, teacher workflow completion, class health, student learning and intervention effectiveness — before problems become failures." },
  { icon: Landmark, k: "School Management", v: "Track overall academic health, execution against plan, learning outcomes and leadership effectiveness — one academic dashboard." },
];

const differentiators = [
  { k: "Academic Planning becomes Execution", v: "Annual plans don't stay in folders. They become classroom action." },
  { k: "Every Chapter has Accountability", v: "Teach → Assess → Analyse → Improve → Recover → Communicate. Nothing gets missed." },
  { k: "Leadership Sees Reality", v: "Not reports created at month-end. Real-time academic progress." },
  { k: "Every Student Matters", v: "Learning gaps identified early. Recovery plans tracked. Parent communication structured." },
];

const philosophy = [
  "Every planned lesson should become quality teaching.",
  "Every assessment should become meaningful insight.",
  "Every insight should lead to timely intervention.",
];

export const AOS = () => {
  return (
    <section
      id="aos"
      className="relative bg-paper text-ink pt-6 md:pt-10 pb-24 md:pb-32 px-6 md:px-10 lg:px-14 overflow-hidden"
      data-testid="aos-section"
    >
      {/* Section head */}
      <div className="flex items-baseline gap-5">
        <span className="font-editorial italic text-[64px] md:text-[80px] leading-none text-orange-brand">§</span>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-[0.24em] text-slate-brand">Deep Dive</span>
          <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-ink mt-1">Academic Operating System</span>
        </div>
        <span className="hidden md:block flex-1 h-px bg-ink/15 ml-6" />
      </div>

      {/* Problem we solve */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="mt-14">
        <div className="text-[10px] uppercase tracking-[0.22em] text-slate-brand mb-4">The Problem We Solve</div>
        <h2 className="font-editorial text-[9vw] md:text-[5vw] lg:text-[3.6vw] leading-[0.95] tracking-[-0.03em] max-w-5xl">
          Schools don't struggle because teachers work less. Schools struggle because{" "}
          <span className="italic font-editorial-soft text-orange-brand">academic execution is fragmented.</span>
        </h2>
        <div className="mt-10 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6">
            <div className="text-[10px] uppercase tracking-[0.22em] text-slate-brand mb-4">Six silos that never meet</div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              {symptomChain.map((s, i, arr) => (
                <span key={s} className="flex items-center gap-3">
                  <span className="px-3 py-1.5 border border-ink/20 font-mono text-[11px] uppercase tracking-[0.16em] text-ink">{s}</span>
                  {i < arr.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-orange-brand" />}
                </span>
              ))}
            </div>
            <p className="mt-6 text-[14px] italic font-editorial-soft text-ink/70">All happen independently. Nobody knows —</p>
          </div>
          <ul className="lg:col-span-6 grid sm:grid-cols-2 gap-2.5">
            {hiddenQuestions.map((q, i) => (
              <li key={q} className="flex items-start gap-3 p-3.5 border border-ink/15 bg-cream">
                <X className="w-4 h-4 text-orange-brand shrink-0 mt-0.5" strokeWidth={1.8} />
                <span className="text-[13.5px] leading-[1.5]">{q}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-6 font-editorial italic text-[24px] md:text-[28px] leading-[1.15] text-ink">
          AOS answers these questions <span className="text-orange-brand">every day.</span>
        </p>
      </motion.div>

      {/* What is AOS + One workflow */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="mt-24 md:mt-28 bg-ink text-paper p-8 md:p-14">
        <div className="text-[10px] uppercase tracking-[0.22em] text-paper/50 mb-4">What is AOS?</div>
        <h3 className="font-editorial text-[8vw] md:text-[4.6vw] lg:text-[3.4vw] leading-[1.05] tracking-[-0.02em] max-w-5xl">
          One platform.{" "}
          <span className="italic font-editorial-soft text-orange-brand">One academic workflow.</span>
        </h3>
        <p className="mt-6 max-w-3xl text-[15px] leading-[1.65] text-paper/80">
          AOS is a technology-driven academic operations platform that helps schools plan, execute, monitor and continuously improve classroom teaching through one integrated workflow. Instead of managing isolated documents, AOS manages the entire academic lifecycle.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-3">
          {aosChain.map((s, i, arr) => (
            <span key={s} className="flex items-center gap-3">
              <span className={`px-3.5 py-2 text-[12px] font-mono uppercase tracking-[0.16em] ${i === 0 || i === arr.length - 1 ? "bg-orange-brand text-paper" : "border border-paper/25 text-paper"}`}>{s}</span>
              {i < arr.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-orange-brand shrink-0" />}
            </span>
          ))}
        </div>
        <p className="mt-8 text-[13px] italic font-editorial-soft text-paper/70">
          → No ERP or LMS currently visualises academic work as one connected process.
        </p>
      </motion.div>

      {/* Built for every role */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="mt-24 md:mt-28">
        <div className="text-[10px] uppercase tracking-[0.22em] text-slate-brand mb-4">Built for every academic role</div>
        <h3 className="font-editorial text-[7vw] md:text-[4vw] lg:text-[3vw] leading-[1.05] tracking-[-0.02em] max-w-5xl">
          Four seats.{" "}
          <span className="italic font-editorial-soft text-orange-brand">One dashboard each.</span>
        </h3>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {roles.map((r, i) => (
            <motion.div
              key={r.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-cream border border-line p-6 md:p-7 flex flex-col gap-4 hover:bg-ink hover:text-paper transition-colors group"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-60">Role · 0{i + 1}</span>
                <div className="w-10 h-10 rounded-full bg-orange-brand text-paper flex items-center justify-center">
                  <r.icon className="w-4 h-4" strokeWidth={1.6} />
                </div>
              </div>
              <h4 className="font-editorial text-[22px] md:text-[24px] leading-[1.1] tracking-tight">{r.k}</h4>
              <p className="text-[13px] leading-[1.55] opacity-80">{r.v}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* What makes AOS different */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="mt-24 md:mt-28">
        <div className="text-[10px] uppercase tracking-[0.22em] text-slate-brand mb-4">What makes AOS different</div>
        <h3 className="font-editorial text-[7vw] md:text-[4vw] lg:text-[3vw] leading-[1.05] tracking-[-0.02em] max-w-5xl">
          Four things{" "}
          <span className="italic font-editorial-soft text-orange-brand">nobody else does.</span>
        </h3>
        <div className="mt-10 grid md:grid-cols-2 gap-4 md:gap-5">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="bg-cream border border-line p-6 md:p-8"
            >
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-editorial italic text-[36px] leading-none text-orange-brand">0{i + 1}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-brand">Difference</span>
              </div>
              <h4 className="font-editorial text-[22px] md:text-[24px] leading-[1.1] tracking-tight">{d.k}</h4>
              <p className="mt-3 text-[13.5px] leading-[1.55] text-ink/70">{d.v}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Academic philosophy */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="mt-24 md:mt-28 pt-12 border-t border-ink/15">
        <div className="text-[10px] uppercase tracking-[0.22em] text-slate-brand mb-6">Our academic philosophy</div>
        <h3 className="font-editorial text-[7vw] md:text-[4.4vw] lg:text-[3.2vw] leading-[1.05] tracking-[-0.02em] max-w-4xl">
          Planning alone doesn't improve learning.{" "}
          <span className="italic font-editorial-soft text-orange-brand">Execution does.</span>
        </h3>
        <ul className="mt-10 grid md:grid-cols-3 gap-4">
          {philosophy.map((p, i) => (
            <li key={p} className="flex items-start gap-3 p-5 bg-cream border border-line">
              <div className="w-8 h-8 rounded-full bg-ink text-paper flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" strokeWidth={2.4} />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-brand mb-1">0{i + 1}</div>
                <div className="font-editorial text-[17px] md:text-[18px] leading-[1.3] tracking-tight">{p}</div>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};
