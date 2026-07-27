import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  X,
  Check,
  Monitor,
  Database,
  PlayCircle,
  MessagesSquare,
  Building,
  School,
  Users,
  UserCog,
  Baby,
  GraduationCap,
  Landmark,
  Cog,
  Cpu,
  Handshake,
  Compass,
  BrainCircuit,
  ArrowRight,
  ArrowUpRight,
  Puzzle,
} from "lucide-react";
import { ChapterHead } from "./ProblemSection";

const categories = [
  {
    key: "EdTech",
    icon: Monitor,
    line: "Solves a specific teaching and learning gap.",
  },
  {
    key: "ERP",
    icon: Database,
    line: "Digitises administrative functions.",
  },
  {
    key: "LMS",
    icon: PlayCircle,
    line: "Focused on content delivery and classroom engagement.",
  },
  {
    key: "Consulting",
    icon: MessagesSquare,
    line: "Offers advisory interventions and reports.",
  },
];

const traditional = [
  "Built on customer NEED",
  "Need-based solutions",
  "Fragmented products & services",
  "Needs continuously change",
  "Limited long-term dependency",
];

const khaitan = [
  "Start with the institution",
  "How should a school operate?",
  "Understand the complete K-12 ecosystem",
  "Institutionalise systems & processes",
  "Automate · Standardise · Scale",
  "Institutional operating infrastructure schools depend upon",
];

const stakeholders = [
  { title: "Promoters", icon: Building },
  { title: "Principals", icon: School },
  { title: "Teachers", icon: UserCog },
  { title: "Students", icon: Baby },
  { title: "Parents", icon: Users },
  { title: "Administrators", icon: GraduationCap },
];

const notThese = [
  "EdTech Company",
  "ERP Company",
  "LMS Provider",
  "Consultancy Firm",
  "Point Solution Vendor",
];

const capabilities = [
  { icon: Landmark, title: "Operational Expertise", body: "K-12 operators on the ground, not consultants." },
  { icon: Compass, title: "Governance Frameworks", body: "Boards, reviews and escalation ladders." },
  { icon: Cog, title: "Systems & Processes", body: "SOPs and playbooks for every routine." },
  { icon: Handshake, title: "Implementation Capability", body: "Resident squads with milestone accountability." },
  { icon: Cpu, title: "Technology Enablement", body: "KOSMOS ERP + Playbook Agent as the substrate." },
  { icon: BrainCircuit, title: "Institutional Intelligence", body: "Data that compounds across cohorts and campuses." },
];

export const Differentiator = () => {
  return (
    <section
      id="differentiator"
      className="relative bg-paper text-ink py-24 md:py-36 px-6 md:px-10 lg:px-14 border-t border-line overflow-hidden"
      data-testid="differentiator-section"
    >
      <ChapterHead num="04" label="Who We Are · Why We're Different" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="font-editorial text-[9vw] md:text-[6.2vw] lg:text-[4.6vw] leading-[0.9] tracking-[-0.035em] mt-6 max-w-6xl"
      >
        Not{" "}
        <span className="italic font-editorial-soft line-through decoration-orange-brand decoration-[3px]">
          EdTech
        </span>
        , not{" "}
        <span className="italic font-editorial-soft line-through decoration-orange-brand decoration-[3px]">
          ERP
        </span>
        , not{" "}
        <span className="italic font-editorial-soft line-through decoration-orange-brand decoration-[3px]">
          LMS
        </span>
        .
        <br />
        An{" "}
        <span className="italic font-editorial-soft text-orange-brand">
          Education Management Operating Company.
        </span>
      </motion.h2>

      <p className="mt-10 max-w-2xl text-[16px] md:text-[17px] leading-[1.6] text-ink/70">
        Most companies in K-12 build point solutions. We install the operating
        infrastructure. The difference shows up in what we start with, what we
        institutionalise, and what remains when we hand over.
      </p>

      {/* Block A — Traditional vs Khaitan flow */}
      <div className="mt-16 md:mt-24 grid lg:grid-cols-2 gap-5 md:gap-6">
        <FlowColumn
          kicker="The traditional approach"
          title="Built on customer NEED. Sells the point solution."
          steps={traditional}
          endLine="→ Limited long-term dependency."
          tone="paper"
        />
        <FlowColumn
          kicker="The Khaitan EduOps approach"
          title="Start with the institution. Build the operating standard."
          steps={khaitan}
          endLine="→ Institutional infrastructure. Compounding dependency."
          tone="ink"
        />
      </div>

      {/* Block B — Category comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="mt-20 md:mt-28"
      >
        <div className="flex items-baseline gap-4 mb-8">
          <span className="font-editorial italic text-[46px] leading-none text-orange-brand">
            A
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-brand">
            The category no one else builds in
          </span>
          <span className="hidden md:block flex-1 h-px bg-ink/15 ml-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 border-t border-l border-ink/15">
          {categories.map((c, i) => (
            <motion.div
              key={c.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="border-r border-b border-ink/15 p-6 md:p-7 flex flex-col gap-4 bg-paper hover:bg-cream transition-colors min-h-[220px]"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full border border-ink/20 flex items-center justify-center">
                  <c.icon className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <X className="w-4 h-4 text-slate-brand" />
              </div>
              <div className="font-editorial text-[22px] leading-[1.1] tracking-tight">
                {c.key}
              </div>
              <p className="text-[13px] leading-[1.55] text-ink/65">{c.line}</p>
            </motion.div>
          ))}
          {/* EduOps column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-r border-b border-transparent p-6 md:p-7 bg-orange-brand text-paper flex flex-col gap-4 min-h-[220px]"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-paper/15 flex items-center justify-center">
                <Puzzle className="w-4 h-4 text-paper" strokeWidth={1.5} />
              </div>
              <Check className="w-4 h-4 text-paper" strokeWidth={2.6} />
            </div>
            <div className="font-editorial text-[22px] leading-[1.1] tracking-tight">
              Khaitan EduOps
            </div>
            <p className="text-[13px] leading-[1.55] text-paper/85">
              The resident operator that installs the entire institutional
              operating system.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Block C — 360 stakeholders + Tech-second */}
      <div className="mt-20 md:mt-28 grid lg:grid-cols-12 gap-6 md:gap-8">
        {/* 360° stakeholder wheel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 bg-cream border border-line p-8 md:p-10 relative"
        >
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-editorial italic text-[46px] leading-none text-orange-brand">
              B
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-brand">
              360° stakeholder understanding
            </span>
          </div>
          <h3 className="font-editorial text-[7vw] md:text-[3.2vw] lg:text-[2.4vw] leading-[1.05] tracking-[-0.02em] max-w-xl">
            Built on years of operational understanding from{" "}
            <span className="italic font-editorial-soft text-orange-brand">
              every stakeholder perspective.
            </span>
          </h3>

          <div className="mt-10 relative aspect-[3/2] max-w-2xl">
            {/* Rings */}
            <div className="absolute inset-0 border border-ink/10 rounded-full" />
            <div className="absolute inset-[10%] border border-dashed border-ink/15 rounded-full" />
            <div className="absolute inset-[24%] border border-ink/10 rounded-full" />
            {/* Center */}
            <div className="absolute inset-[38%] rounded-full bg-ink text-paper flex flex-col items-center justify-center">
              <span className="font-editorial text-[10px] leading-none italic">
                Khaitan
              </span>
              <span className="font-mono text-[8px] uppercase tracking-[0.18em] mt-0.5">
                EduOps
              </span>
            </div>
            {/* Stakeholder dots on ring */}
            {stakeholders.map((s, i) => {
              const angle = (i / stakeholders.length) * 2 * Math.PI - Math.PI / 2;
              const x = 50 + Math.cos(angle) * 42;
              const y = 50 + Math.sin(angle) * 42;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                  style={{ left: `${x}%`, top: `${y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1"
                >
                  <div className="w-11 h-11 rounded-full bg-paper border border-ink/25 flex items-center justify-center shadow-sm">
                    <s.icon className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-ink whitespace-nowrap">
                    {s.title}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Tech-second flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-5 bg-ink text-paper p-8 md:p-10 flex flex-col"
        >
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-editorial italic text-[46px] leading-none text-orange-brand">
              C
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50">
              Technology is not the starting point
            </span>
          </div>
          <h3 className="font-editorial text-[6vw] md:text-[2.8vw] lg:text-[2.2vw] leading-[1.05] tracking-[-0.02em] max-w-lg">
            Operations first.{" "}
            <span className="italic font-editorial-soft text-orange-brand">
              Then systems. Then tech.
            </span>
          </h3>

          <div className="mt-10 grid grid-cols-1 gap-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-paper/40 mb-3">
                Others
              </div>
              <div className="flex items-center flex-wrap gap-2">
                {["Technology", "Product", "Customer need"].map((s, i, arr) => (
                  <span key={s} className="flex items-center gap-2">
                    <span className="text-[13px] text-paper/70 line-through decoration-orange-brand/50">
                      {s}
                    </span>
                    {i < arr.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-paper/30" />
                    )}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-6 border-t border-paper/15">
              <div className="text-[10px] uppercase tracking-[0.22em] text-orange-brand mb-3">
                Khaitan EduOps
              </div>
              <div className="flex flex-col gap-2">
                {[
                  "Operational understanding",
                  "Systems & governance",
                  "Implementation",
                  "Technology enablement",
                  "Automation & scale",
                ].map((s, i) => (
                  <div key={s} className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-paper/40 w-6 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-orange-brand" />
                    <span className="text-[14px]">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Block D — We are not / We are */}
      <div className="mt-20 md:mt-28 grid md:grid-cols-12 gap-6 items-start">
        <div className="md:col-span-5">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-editorial italic text-[46px] leading-none text-slate-brand">
              D
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-brand">
              We are not
            </span>
          </div>
          <ul className="border-t border-ink/15">
            {notThese.map((n) => (
              <li
                key={n}
                className="flex items-center justify-between py-4 border-b border-ink/15"
              >
                <span className="font-editorial text-[22px] md:text-[24px] leading-tight tracking-tight line-through decoration-orange-brand/70 decoration-[1.5px] text-ink/70">
                  {n}
                </span>
                <X className="w-4 h-4 text-orange-brand" strokeWidth={2} />
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-7 bg-orange-brand text-paper p-8 md:p-10 relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-16 -right-8 font-editorial italic text-[220px] leading-none text-paper/[0.08] select-none"
          >
            ✓
          </div>
          <div className="flex items-baseline gap-4 mb-6 relative z-10">
            <span className="font-editorial italic text-[46px] leading-none">
              E
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] opacity-80">
              We are
            </span>
          </div>
          <h3 className="relative z-10 font-editorial text-[7vw] md:text-[3.6vw] lg:text-[2.6vw] leading-[1.05] tracking-[-0.02em]">
            An{" "}
            <span className="italic font-editorial-soft">
              Education Management Operating Company
            </span>{" "}
            — combining six disciplines on one desk.
          </h3>
          <div className="relative z-10 mt-8 grid grid-cols-2 gap-3">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex items-start gap-3 p-3.5 border border-paper/20 hover:bg-paper/10 transition-colors"
                data-testid={`emoc-${i}`}
              >
                <div className="w-9 h-9 rounded-full bg-paper/15 flex items-center justify-center shrink-0">
                  <c.icon className="w-4 h-4" strokeWidth={1.6} />
                </div>
                <div>
                  <div className="font-editorial text-[15px] leading-tight tracking-tight">
                    {c.title}
                  </div>
                  <div className="text-[11.5px] leading-[1.4] opacity-80 mt-0.5">
                    {c.body}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="relative z-10 mt-6 pt-6 border-t border-paper/20 text-[12px] uppercase tracking-[0.22em] opacity-90">
            To professionalise & institutionalise school operations
          </div>
        </div>
      </div>

      {/* Ambition pull-quote */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="mt-20 md:mt-28 pt-14 border-t border-ink/15"
      >
        <div className="flex items-start gap-6">
          <span className="font-editorial text-[80px] md:text-[110px] leading-none italic text-orange-brand mt-[-24px]">
            &ldquo;
          </span>
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-slate-brand mb-3">
              Our ambition
            </div>
            <blockquote className="font-editorial text-[7vw] md:text-[4.4vw] lg:text-[3.4vw] leading-[1.05] tracking-[-0.025em] max-w-5xl">
              Not to sell products or services. But to become the{" "}
              <span className="italic font-editorial-soft text-orange-brand">
                operating infrastructure
              </span>{" "}
              that schools depend upon to function, grow and scale sustainably.
            </blockquote>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6 pt-8 border-t border-ink/15">
          <PromiseChip k="We know WHAT to do." v="From every stakeholder standpoint." />
          <PromiseChip k="HOW to do it." v="With systems, processes and technology." />
          <PromiseChip k="WHEN to do it." v="On a cadence you can audit." />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-end gap-6">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-ink text-paper hover:bg-orange-brand transition-colors"
            data-testid="differentiator-cta"
          >
            <span className="text-[14px] font-medium">Talk to the operator</span>
            <span className="w-9 h-9 rounded-full bg-orange-brand group-hover:bg-paper text-paper group-hover:text-ink flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

const FlowColumn = ({ kicker, title, steps, endLine, tone }) => {
  const isInk = tone === "ink";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.7, 0, 0.2, 1] }}
      className={`relative p-8 md:p-10 border ${
        isInk
          ? "bg-ink text-paper border-transparent"
          : "bg-cream text-ink border-line"
      }`}
    >
      <div
        className={`text-[10px] uppercase tracking-[0.22em] ${
          isInk ? "text-paper/50" : "text-slate-brand"
        } mb-3`}
      >
        {kicker}
      </div>
      <h3 className="font-editorial text-[26px] md:text-[30px] leading-[1.05] tracking-tight max-w-md">
        {title}
      </h3>
      <ul className="mt-8 space-y-3">
        {steps.map((s, i) => (
          <li key={s} className="flex items-start gap-3">
            <span
              className={`font-mono text-[10px] uppercase tracking-[0.2em] ${
                isInk ? "text-paper/40" : "text-slate-brand"
              } pt-1 w-8 tabular-nums`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <ArrowRight
              className={`w-3.5 h-3.5 mt-1.5 ${
                isInk ? "text-orange-brand" : "text-orange-brand"
              }`}
            />
            <span className="text-[14.5px] leading-[1.5]">{s}</span>
          </li>
        ))}
      </ul>
      <div
        className={`mt-8 pt-5 border-t ${
          isInk ? "border-paper/15" : "border-ink/15"
        } text-[13px] italic font-editorial-soft ${
          isInk ? "text-orange-brand" : "text-ink/70"
        }`}
      >
        {endLine}
      </div>
    </motion.div>
  );
};

const PromiseChip = ({ k, v }) => (
  <div className="flex flex-col">
    <span className="font-editorial text-[24px] md:text-[26px] leading-[1.05] tracking-tight">
      {k}
    </span>
    <span className="text-[13px] text-ink/65 mt-2 leading-[1.5]">{v}</span>
  </div>
);
