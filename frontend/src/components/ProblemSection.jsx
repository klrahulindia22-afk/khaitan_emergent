import { motion } from "framer-motion";
import { TrendingDown, Users, Eye } from "lucide-react";

const problems = [
  {
    icon: Users,
    title: "The human-dependency trap",
    body: "Every school leans on 3–4 star operators. When they leave, quality collapses. Institutional memory walks out of the door on a Tuesday.",
  },
  {
    icon: Eye,
    title: "The supervision gap",
    body: "Principals cannot be in every classroom. Coordinators cannot read every notebook. What is not observed, is not managed.",
  },
  {
    icon: TrendingDown,
    title: "The 30–50% quality variance",
    body: "Between two sections of the same grade, in the same school, in the same week — outcomes routinely differ by 30–50%. Parents notice. Promoters carry it.",
  },
];

export const ProblemSection = () => {
  return (
    <section
      id="problem"
      className="relative bg-paper text-ink py-24 md:py-36 px-6 md:px-10 lg:px-14 border-t border-line"
      data-testid="problem-section"
    >
      {/* Chapter header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.7, 0, 0.2, 1] }}
        className="max-w-6xl"
      >
        <ChapterHead num="01" label="The Problem" />

        <h2 className="font-editorial text-[9vw] md:text-[6.2vw] lg:text-[4.6vw] leading-[0.9] tracking-[-0.035em] mt-6 max-w-5xl">
          Academic inconsistency is not a{" "}
          <span className="italic font-editorial-soft text-orange-brand">
            teaching
          </span>{" "}
          problem. It is a{" "}
          <span className="italic font-editorial-soft">systems</span> problem.
        </h2>

        <p className="mt-10 max-w-2xl text-[16px] md:text-[17px] leading-[1.6] text-ink/70">
          Most schools are held together by four or five gifted individuals.
          Remove them, and the classroom you were proud of last year no longer
          exists. That is not education. That is dependency.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-6 md:gap-8">
        {problems.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.12,
              ease: [0.7, 0, 0.2, 1],
            }}
            className="relative bg-cream border border-line p-8 md:p-10 flex flex-col gap-6 group hover:bg-paper-warm transition-colors"
            data-testid={`problem-card-${i}`}
          >
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-full border border-ink/20 flex items-center justify-center group-hover:bg-ink group-hover:text-paper transition-colors">
                <p.icon className="w-5 h-5" strokeWidth={1.4} />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-brand">
                0{i + 1} / 03
              </div>
            </div>
            <h3 className="font-editorial text-[26px] md:text-[28px] leading-[1.05] tracking-tight">
              {p.title}
            </h3>
            <p className="text-[14.5px] leading-[1.6] text-ink/70">{p.body}</p>
            <div className="mt-auto pt-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-slate-brand">
              <span className="w-6 h-px bg-orange-brand" />
              Observed
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

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
