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
    subs: [
      {
        code: "1A",
        name: "Academic Research & Development Centre",
        items: [
          "Collect, maintain & structure NCERT books (all classes & subjects)",
          "Develop frameworks aligned with NEP 2020, NCF & CBSE Guidelines",
          "Create frameworks for: Lesson Plans, Annual Planners (AAP), Pedagogical Plans (APP), Teacher Logs, Student Gap Analysis Reports and other academic assets",
          "Update all documents with changes in NCERT, NCF & CBSE guidelines",
          "Maintain version control and quality of all academic content",
        ],
      },
      {
        code: "1B",
        name: "Academic Implementation & Success",
        items: [
          "Implement Academic Operating System in partner schools",
          "Train Leadership, Principals, Vice Principals, Teachers & Academic Staff",
          "Ensure seamless adoption and effective utilisation",
          "Conduct academic audits & classroom observations",
          "Evaluate effectiveness & recommend improvements",
          "Drive adoption, compliance and learning outcomes improvements",
        ],
      },
    ],
  },
  {
    n: "02",
    icon: ClipboardList,
    title: "Review & Accountability",
    dept: "Review & Accountability Division",
    body: "Transform schools into accountable, performance-driven organisations through effective reviews, clear expectations and strong accountability systems.",
    subs: [
      {
        code: "2A",
        name: "Review Management Department",
        items: [
          "Implement RMS platform",
          "Train top leadership on RMS and deploy for audits",
          "Train leaders to conduct reviews of all non-academic departments",
          "Develop KRAs, KPIs & SOPs for all non-academic roles",
          "Train employees on KRAs, KPIs & SOPs",
          "Provide clarity on roles, expectations and performance standards",
          "Conduct monthly, quarterly reviews and follow-ups",
        ],
      },
    ],
  },
  {
    n: "03",
    icon: BookMarked,
    title: "School Operating Manual · Playbook",
    dept: "School Operating Manual · Playbook Division",
    body: "Custodian of the Khaitan EduOps way of operating schools — through systems, policies, formats, playbooks and operational excellence.",
    accent: "orange",
    subs: [
      {
        code: "3A",
        name: "Playbook & Operations Department",
        items: [
          "Develop and maintain the School Operating Manual (Playbook)",
          "Create & update policies, formats, SOPs, plans & systems",
          "Maintain all 10 operating systems of the Playbook",
          "Update Playbook Agent knowledge base",
          "Ensure implementation at partner schools",
          "Provide day-to-day operational support",
          "Oversee marketing & branding systems of the school",
        ],
      },
    ],
  },
  {
    n: "04",
    icon: Cpu,
    title: "KOSMOS ERP & FMS",
    dept: "KOSMOS ERP & FMS Division",
    body: "Automate and digitise the complete school ecosystem for efficiency, transparency and control.",
    subs: [
      {
        code: "4A",
        name: "ERP & FMS Implementation Department",
        items: [
          "Implement KOSMOS ERP & FMS in partner schools",
          "Modules: Student Info, Admissions, Attendance, Parent Relationship, Finance, HR, Transport, Asset & Infrastructure",
          "Provide step-by-step process flows for tasks & goals",
          "Automate end-to-end school operations",
          "Ensure data accuracy, integration & security",
          "Provide user support and change management",
        ],
      },
    ],
  },
  {
    n: "05",
    icon: GraduationCap,
    title: "Khaitan EduOps Academy",
    dept: "Khaitan EduOps Academy Division",
    body: "Build institutional capability by developing the knowledge, skills and mindset of all key stakeholders in schools.",
    subs: [
      {
        code: "5A",
        name: "Training & Capability Development Department",
        items: [
          "Train Promoters, Directors, Principals & Vice Principals",
          "Teacher training: Classroom Management, Teaching Pedagogy, Assessment, Engagement",
          "Functional training for: Finance, HR, Transport, Admissions, Estate, Admin & others",
          "Certification programmes for leaders, teachers & staff",
          "Equip key position holders with knowledge & skills to achieve KPIs",
          "Continuous learning & capability enhancement",
        ],
      },
    ],
  },
  {
    n: "06",
    icon: TrendingUp,
    title: "School Transformation & Implementation",
    dept: "School Transformation & Implementation Division",
    body: "Drive end-to-end transformation and ensure successful adoption, implementation and sustainability of systems and processes.",
    subs: [
      {
        code: "6A",
        name: "Transformation Department",
        items: [
          "Deep dive into current systems of partner schools",
          "Provide gap analysis reports",
          "Design transformation roadmaps",
          "Support implementation of systems & processes",
          "Conduct frequent audits (academic & non-academic)",
          "Ensure 100% implementation and sustainability",
          "Provide all support required for successful adoption",
        ],
      },
    ],
  },
  {
    n: "07",
    icon: Users,
    title: "Corporate Services",
    dept: "Corporate Services Division",
    body: "Enable the organisation through robust corporate support functions — HR, Finance, Sales, Marketing, Admin & Legal, and IT.",
    subs: [
      {
        code: "7A",
        name: "Corporate Services Department",
        items: [
          "Human Resources (Talent, Culture, Engagement)",
          "Finance & Accounts (Planning, Reporting, Controls)",
          "Sales & Partnerships (Business Development)",
          "Marketing & Communications (Brand, Digital, PR)",
          "Administration & Legal (Compliance, Contracts, General Administration)",
          "IT & Infrastructure Support",
        ],
      },
    ],
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

      {/* Divisions in Detail — sub-departments & responsibilities */}
      <div className="mt-20 md:mt-28" data-testid="divisions-detail">
        <div className="flex items-baseline gap-4 mb-8">
          <span className="font-editorial italic text-[46px] leading-none text-orange-brand">
            ¶
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-brand">
            Divisions in detail
          </span>
          <span className="hidden md:block flex-1 h-px bg-ink/15 ml-6" />
        </div>
        <h3 className="font-editorial text-[7vw] md:text-[4vw] lg:text-[3vw] leading-[1.05] tracking-[-0.02em] max-w-5xl">
          Seven divisions.{" "}
          <span className="italic font-editorial-soft text-orange-brand">
            Every KPI accounted for.
          </span>
        </h3>
        <p className="mt-6 max-w-2xl text-[15px] leading-[1.65] text-ink/70">
          Below the org chart, each division breaks into named sub-departments
          with a fixed remit and measurable KPIs — the actual operating grammar
          of a Khaitan EduOps school.
        </p>

        <div className="mt-14 flex flex-col gap-6">
          {divisions.map((d, i) => (
            <DivisionDetail key={d.n} d={d} i={i} />
          ))}
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


const DivisionDetail = ({ d, i }) => {
  const isOrange = d.accent === "orange";
  const Icon = d.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: 0.05 }}
      className={`grid md:grid-cols-12 gap-0 border overflow-hidden ${
        isOrange
          ? "bg-orange-brand text-paper border-transparent"
          : "bg-paper border-line"
      }`}
      data-testid={`division-detail-${d.n}`}
    >
      {/* Left — heading & purpose */}
      <div className="md:col-span-5 lg:col-span-4 p-8 md:p-10 lg:p-12 flex flex-col justify-between gap-8 md:border-r md:border-line">
        <div>
          <div
            className={`flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] font-mono ${
              isOrange ? "text-paper/70" : "text-slate-brand"
            }`}
          >
            <span
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                isOrange ? "bg-paper/15" : "bg-ink/5"
              }`}
            >
              <Icon
                className={`w-3.5 h-3.5 ${isOrange ? "" : "text-ink"}`}
                strokeWidth={1.5}
              />
            </span>
            <span>Division · {d.n} / 07</span>
          </div>

          <div
            className={`mt-8 font-editorial italic leading-none tracking-[-0.04em] ${
              isOrange ? "text-paper/25" : "text-orange-brand/70"
            }`}
            style={{ fontSize: "clamp(72px, 10vw, 128px)" }}
          >
            {d.n}
          </div>

          <h4 className="mt-4 font-editorial text-[28px] md:text-[32px] leading-[1.02] tracking-[-0.01em]">
            {d.title}
          </h4>
          <div
            className={`mt-3 text-[11px] uppercase tracking-[0.22em] font-mono ${
              isOrange ? "text-paper/80" : "text-orange-brand"
            }`}
          >
            {d.dept}
          </div>
        </div>

        <p
          className={`font-editorial-soft italic text-[17px] md:text-[19px] leading-[1.4] border-l-2 pl-5 ${
            isOrange
              ? "text-paper border-paper/50"
              : "text-ink border-orange-brand"
          }`}
        >
          {d.body}
        </p>
      </div>

      {/* Right — sub-departments & KPIs */}
      <div
        className={`md:col-span-7 lg:col-span-8 p-8 md:p-10 lg:p-12 flex flex-col gap-8 ${
          d.subs.length > 1 ? "md:grid md:grid-cols-2 md:gap-10" : ""
        }`}
      >
        {d.subs.map((s, si) => (
          <div key={s.code} className="flex flex-col gap-4">
            <div className="flex items-baseline gap-3">
              <span
                className={`font-mono text-[10px] uppercase tracking-[0.22em] px-2 py-1 ${
                  isOrange
                    ? "bg-paper/15 text-paper"
                    : "bg-ink text-paper"
                }`}
              >
                {s.code}
              </span>
              <h5
                className={`font-editorial text-[19px] md:text-[21px] leading-[1.1] tracking-tight ${
                  isOrange ? "text-paper" : "text-ink"
                }`}
              >
                {s.name}
              </h5>
            </div>
            <ul className="flex flex-col gap-2.5">
              {s.items.map((it, ii) => (
                <li
                  key={ii}
                  className={`flex items-start gap-3 text-[14px] leading-[1.55] ${
                    isOrange ? "text-paper/90" : "text-ink/80"
                  }`}
                >
                  <span
                    className={`mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 ${
                      isOrange ? "bg-paper" : "bg-orange-brand"
                    }`}
                  />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.article>
  );
};
