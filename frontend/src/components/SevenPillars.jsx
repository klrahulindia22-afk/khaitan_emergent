import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { pillars } from "../data/pillars";
import { ChapterHead } from "./ProblemSection";

export const SevenPillars = () => {
  return (
    <section
      id="pillars"
      className="relative bg-ink text-paper py-24 md:py-36 px-6 md:px-10 lg:px-14 overflow-hidden"
      data-testid="pillars-section"
    >
      <div className="flex items-baseline gap-5">
        <span className="font-editorial text-[64px] md:text-[80px] leading-none italic text-orange-brand">
          05
        </span>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-[0.24em] text-paper/50">
            Chapter
          </span>
          <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-paper mt-1">
            The 7 Pillars
          </span>
        </div>
        <span className="hidden md:block flex-1 h-px bg-paper/20 ml-6" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="font-editorial text-[9vw] md:text-[6.2vw] lg:text-[4.6vw] leading-[0.9] tracking-[-0.035em] mt-6 max-w-5xl"
      >
        Seven pillars.{" "}
        <span className="italic font-editorial-soft text-orange-brand">
          One operating system
        </span>{" "}
        for the school.
      </motion.h2>

      <p className="mt-10 max-w-2xl text-[16px] md:text-[17px] leading-[1.6] text-paper/70">
        Each pillar is deployable on its own. Together, they form the resident
        operating layer of the school — from the curriculum on Monday morning
        to the group P&L on Friday evening.
      </p>

      <div className="mt-16 md:mt-24 grid md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
        {pillars.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: (i % 3) * 0.1,
              ease: [0.7, 0, 0.2, 1],
            }}
          >
            <PillarCard pillar={p} index={i} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const PillarCard = ({ pillar, index }) => {
  const accentOrange = pillar.accent === "orange";
  return (
    <Link
      to={`/pillars/${pillar.slug}`}
      className="group relative flex flex-col h-full bg-ink-deep border border-paper/10 hover:border-orange-brand/60 transition-colors overflow-hidden"
      data-testid={`pillar-card-${pillar.slug}`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-ink">
        <img
          src={pillar.image}
          alt={pillar.title}
          className="w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:scale-[1.06]"
          style={{ filter: "grayscale(0.15) contrast(1.05)" }}
        />
        <div className="absolute inset-0 bg-ink/25 mix-blend-multiply" />
        <div className="grain-light absolute inset-0 opacity-60" />
        <div
          className={`absolute top-4 left-4 px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] font-mono ${
            accentOrange ? "bg-orange-brand text-paper" : "bg-paper text-ink"
          }`}
        >
          {pillar.tag}
        </div>
        <div className="absolute top-4 right-4 font-editorial italic text-[52px] leading-none text-paper/80">
          {pillar.number}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6 md:p-7">
        <h3 className="font-editorial text-[26px] md:text-[28px] leading-[1.05] tracking-tight text-paper">
          {pillar.title}
        </h3>
        <p className="mt-3 text-[14px] leading-[1.6] text-paper/70">
          {pillar.summary}
        </p>
        <div className="mt-auto pt-6 flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-[0.22em] text-paper/50">
            Read the pillar
          </span>
          <span
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
              accentOrange
                ? "bg-orange-brand text-paper"
                : "bg-paper text-ink group-hover:bg-orange-brand group-hover:text-paper"
            }`}
          >
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
};
