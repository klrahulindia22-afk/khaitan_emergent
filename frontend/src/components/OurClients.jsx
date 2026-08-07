import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  School,
  Building2,
  Sparkles,
  UserCog,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { ChapterHead } from "./ProblemSection";

const segments = [
  {
    letter: "A",
    icon: School,
    title: "Mid-Sized Private Schools",
    profile: "1,000–3,000 students · 5–10 years established · promoter-led · CBSE.",
    pain: "Principal dependency, inconsistent academics, weak systems, poor promoter visibility.",
    label: "Primary segment",
    accent: "ink",
  },
  {
    letter: "B",
    icon: Building2,
    title: "Emerging School Chains",
    profile: "2+ campuses, rapidly expanding, struggling to standardise operations.",
    pain: "Every branch functions differently — quality, principal-led ops and scaling chaos.",
    label: "High-value long term",
    accent: "orange",
  },
  {
    letter: "C",
    icon: Sparkles,
    title: "First-Generation Promoters",
    profile: "Entrepreneurs entering education. Schools passed to next-gen founders.",
    pain: "Emotionally invested, operationally inexperienced. No operating frameworks.",
    label: "Receptive to frameworks",
    accent: "ink",
  },
  {
    letter: "D",
    icon: UserCog,
    title: "Principal-Dependent Schools",
    profile: "Performance rises and falls with the principal. Weak review and accountability.",
    pain: "The promoter feels powerless. Politics and inconsistency stall the institution.",
    label: "‘Institutionalise beyond leadership’",
    accent: "orange",
  },
  {
    letter: "E",
    icon: TrendingUp,
    title: "Schools Preparing to Expand",
    profile: "Launching second or third campus. Realising existing systems cannot scale.",
    pain: "Need a standardised operating model, multi-campus governance and replication rails.",
    label: "Ready to install rails",
    accent: "ink",
  },
  {
    letter: "F",
    icon: Wallet,
    title: "Investor-Backed Education Groups",
    profile:
      "Private investors making large financial investments in the education sector.",
    pain: "Scalable systems, technology and governance for institutional scaling.",
    label: "Future segment",
    accent: "orange",
  },
];

const personas = [
  {
    n: "01",
    title: "Growth-oriented Promoter",
    quote: "I want my school to operate professionally.",
  },
  {
    n: "02",
    title: "Frustrated Promoter",
    quote: "My school depends too much on individuals.",
  },
  {
    n: "03",
    title: "Expanding Chain Owner",
    quote: "I cannot standardise multiple campuses.",
  },
  {
    n: "04",
    title: "Institutional Builder",
    quote: "I want to build a long-term education organisation.",
  },
  {
    n: "05",
    title: "Multi-Business Promoter",
    quote:
      "I run multiple businesses and have no bandwidth to operate my school.",
  },
];

export const OurClients = () => {
  return (
    <section
      id="clients"
      className="relative bg-paper text-ink py-24 md:py-36 px-6 md:px-10 lg:px-14 border-t border-line overflow-hidden"
      data-testid="clients-section"
    >
      <ChapterHead num="07" label="Our Clients" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9 }}
        className="font-editorial text-[9vw] md:text-[6.2vw] lg:text-[4.6vw] leading-[0.9] tracking-[-0.035em] mt-6 max-w-5xl"
      >
        Six segments where{" "}
        <span className="italic font-editorial-soft text-orange-brand">
          the operating standard
        </span>{" "}
        <span className="italic font-editorial-soft">breaks.</span>
      </motion.h2>

      <p className="mt-10 max-w-2xl text-[16px] md:text-[17px] leading-[1.6] text-ink/70">
        Our engagements begin where systems break down and end where they run
        themselves. These are the promoter profiles our operating model is built
        for.
      </p>

      {/* Segments grid */}
      <div className="mt-16 md:mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {segments.map((s, i) => (
          <SegmentCard key={s.letter} segment={s} index={i} />
        ))}
      </div>

      {/* Personas */}
      <div className="mt-24 md:mt-32">
        <div className="flex items-baseline gap-5 mb-10">
          <span className="font-editorial italic text-[52px] leading-none text-orange-brand">
            5
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.24em] text-slate-brand">
              Personas
            </span>
            <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-ink mt-1">
              Voices we hear
            </span>
          </div>
          <span className="hidden md:block flex-1 h-px bg-ink/15 ml-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {personas.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group bg-cream border border-line p-6 md:p-7 flex flex-col h-full hover:bg-ink hover:text-paper transition-colors"
              data-testid={`persona-${p.n}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] text-orange-brand tabular-nums">
                  P·{p.n}
                </span>
                <span className="w-6 h-6 rounded-full border border-current opacity-30 flex items-center justify-center group-hover:opacity-60 transition-opacity">
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                </span>
              </div>
              <div className="font-editorial text-[19px] md:text-[20px] leading-[1.1] tracking-tight">
                {p.title}
              </div>
              <blockquote className="mt-4 pt-4 border-t border-current/15 font-editorial-soft italic text-[15px] leading-[1.4] opacity-90">
                “{p.quote}”
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Closing tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="mt-20 md:mt-28 pt-10 border-t border-line grid md:grid-cols-12 gap-10 items-end"
      >
        <div className="md:col-span-8">
          <div className="text-[10px] uppercase tracking-[0.22em] text-slate-brand mb-4">
            Our promise
          </div>
          <p className="font-editorial text-[7vw] md:text-[4.2vw] lg:text-[3.2vw] leading-[1.05] tracking-[-0.02em] max-w-4xl">
            We don't just provide{" "}
            <span className="italic font-editorial-soft line-through decoration-orange-brand decoration-[2px]">
              solutions.
            </span>{" "}
            We{" "}
            <span className="italic font-editorial-soft text-orange-brand">
              build systems, drive accountability
            </span>{" "}
            and transform schools.
          </p>
        </div>
        <div className="md:col-span-4 md:text-right">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-ink text-paper hover:bg-orange-brand transition-colors"
            data-testid="clients-cta"
          >
            <span className="text-[14px] font-medium">
              See if you fit
            </span>
            <span className="w-9 h-9 rounded-full bg-orange-brand group-hover:bg-paper text-paper group-hover:text-ink flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

const SegmentCard = ({ segment, index }) => {
  const isOrange = segment.accent === "orange";
  const Icon = segment.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: (index % 3) * 0.1,
        ease: [0.7, 0, 0.2, 1],
      }}
      className="group relative bg-cream border border-line p-6 md:p-8 flex flex-col h-full hover:bg-paper-warm transition-colors"
      data-testid={`segment-${segment.letter}`}
    >
      <div className="flex items-center justify-between mb-6">
        <div
          className={`w-11 h-11 rounded-full flex items-center justify-center ${
            isOrange
              ? "bg-orange-brand text-paper"
              : "bg-ink text-paper"
          }`}
        >
          <span className="font-editorial italic text-[22px] leading-none">
            {segment.letter}
          </span>
        </div>
        <div
          className={`w-10 h-10 rounded-full border border-ink/15 flex items-center justify-center group-hover:bg-ink group-hover:text-paper transition-colors`}
        >
          <Icon className="w-4 h-4" strokeWidth={1.4} />
        </div>
      </div>

      <h3 className="font-editorial text-[26px] md:text-[28px] leading-[1.05] tracking-tight">
        {segment.title}
      </h3>

      <div className="mt-6 pt-5 border-t border-ink/15">
        <div className="text-[10px] uppercase tracking-[0.22em] text-slate-brand mb-2">
          Profile
        </div>
        <p className="text-[13.5px] leading-[1.55] text-ink/75">
          {segment.profile}
        </p>
      </div>

      <div className="mt-5 pt-5 border-t border-ink/15">
        <div className="text-[10px] uppercase tracking-[0.22em] text-slate-brand mb-2">
          Their pain
        </div>
        <p className="text-[13.5px] leading-[1.55] text-ink/75">
          {segment.pain}
        </p>
      </div>

      <div className="mt-auto pt-8 flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-slate-brand">
        <span
          className={`w-6 h-px ${isOrange ? "bg-orange-brand" : "bg-ink"}`}
        />
        {segment.label}
      </div>
    </motion.article>
  );
};
