import { motion } from "framer-motion";
import { ChapterHead } from "./ProblemSection";

const pains = [
  {
    n: "01",
    title: "Admissions uncertainty",
    body: "Every April the same question — will the intake hold? Marketing spend rises, conversion is unpredictable, and the fee book is a rumour until June.",
    stat: "±22%",
    statLabel: "Annual intake volatility",
  },
  {
    n: "02",
    title: "Revenue pressure",
    body: "Fee collections lag academic delivery. Fixed costs do not lag. The Promoter carries the working-capital gap on a personal ledger.",
    stat: "68 days",
    statLabel: "Average receivable cycle",
  },
  {
    n: "03",
    title: "Lack of accountability",
    body: "Meetings without minutes. Reviews without owners. Every miss becomes a shared regret and every win becomes a private trophy.",
    stat: "0",
    statLabel: "Single source of truth",
  },
];

export const PromoterPain = () => {
  return (
    <section
      id="promoter"
      className="relative bg-ink text-paper py-24 md:py-36 px-6 md:px-10 lg:px-14 overflow-hidden"
      data-testid="promoter-section"
    >
      {/* Decorative editorial number */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-10 md:right-10 font-editorial italic text-[42vw] md:text-[26vw] leading-none text-paper/[0.03] select-none"
      >
        02
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.7, 0, 0.2, 1] }}
        className="relative z-10 max-w-6xl"
      >
        <ChapterHeadDark num="02" label="Promoter Pain Points" />

        <h2 className="font-editorial text-[9vw] md:text-[6.2vw] lg:text-[4.6vw] leading-[0.9] tracking-[-0.035em] mt-6 max-w-5xl">
          The load{" "}
          <span className="italic font-editorial-soft text-orange-brand">
            the Promoter
          </span>{" "}
          carries — and{" "}
          <span className="italic font-editorial-soft">what it costs.</span>
        </h2>

        <p className="mt-10 max-w-2xl text-[16px] md:text-[17px] leading-[1.6] text-paper/70">
          Behind every school with numbers on a wall is a Promoter with numbers
          on their mind. Admissions, cashflow, staff, statutory notices — all
          before the actual business of learning even begins.
        </p>
      </motion.div>

      <div className="relative z-10 mt-16 md:mt-24 border-t border-paper/15">
        {pains.map((p, i) => (
          <motion.div
            key={p.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.1,
              ease: [0.7, 0, 0.2, 1],
            }}
            className="group grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 border-b border-paper/15 items-start hover:bg-paper/[0.03] transition-colors px-2 md:px-4 -mx-2 md:-mx-4"
            data-testid={`promoter-pain-${i}`}
          >
            <div className="md:col-span-1 font-mono text-[12px] uppercase tracking-[0.24em] text-paper/50">
              {p.n}
            </div>
            <div className="md:col-span-5">
              <h3 className="font-editorial text-[36px] md:text-[44px] leading-[0.95] tracking-tight">
                {p.title}
              </h3>
            </div>
            <div className="md:col-span-4 text-[15px] leading-[1.6] text-paper/75">
              {p.body}
            </div>
            <div className="md:col-span-2 text-right">
              <div className="font-editorial text-[42px] leading-none text-orange-brand">
                {p.stat}
              </div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-paper/50 mt-2">
                {p.statLabel}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ChapterHeadDark = ({ num, label }) => (
  <div className="flex items-baseline gap-5">
    <span className="font-editorial text-[64px] md:text-[80px] leading-none italic text-orange-brand">
      {num}
    </span>
    <div className="flex flex-col">
      <span className="text-[10px] uppercase tracking-[0.24em] text-paper/50">
        Chapter
      </span>
      <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-paper mt-1">
        {label}
      </span>
    </div>
    <span className="hidden md:block flex-1 h-px bg-paper/20 ml-6" />
  </div>
);
