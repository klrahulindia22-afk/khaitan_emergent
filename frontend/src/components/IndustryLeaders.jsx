import { motion } from "framer-motion";
import { VoiceIllustration } from "./VoiceIllustration";

const experts = [
  {
    name: "Dr. Anjali Menon",
    title: "Former Director of Academics · CBSE Advisory",
    role: "Educator",
    quote: "The school operating model is the missing layer between policy and the classroom. Khaitan EduOps is the first team I have seen build it as infrastructure — not advisory.",
    summary: "Argues that Indian K-12 needs a resident operating layer, not another product — and points to reviews, playbooks and accountability as the three rails.",
  },
  {
    name: "Rohit Bansal",
    title: "Founder · Multi-campus Schools Group",
    role: "Operator",
    quote: "For years I ran three schools like three villages. The operating model gave me one language, one dashboard and one truth about student outcomes.",
    summary: "Shares his own transition from principal-dependent campuses to a system-driven group — and the compounding effect on admissions and retention.",
  },
  {
    name: "Prof. Kavita Iyer",
    title: "Chair · Academic Standards, NCF Working Group",
    role: "Standards leader",
    quote: "Compliance by design is not a slogan. It is the only way a school with 200 teachers can honestly say every child is being taught to the framework.",
    summary: "Explains why manual oversight cannot scale to 12,000 lesson plans a year — and how AOS turns NCF alignment into an automated default.",
  },
  {
    name: "Sameer Kapur",
    title: "Investor · Education & Skilling",
    role: "Investor",
    quote: "Number of schools is a vanity metric. Operating dependency, retention and ARR are what compound. Khaitan EduOps is building all three.",
    summary: "From the capital side — why the operating-company model produces enterprise value in K-12 where product companies plateau.",
  },
];

const VoiceCard = ({ e, i }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: 0.05 }}
      className="group grid md:grid-cols-12 gap-0 bg-paper border border-line overflow-hidden"
      data-testid={`industry-leader-${i}`}
    >
      {/* Illustrated portrait — left */}
      <div
        className="relative md:col-span-7 aspect-video md:aspect-auto md:min-h-[440px] bg-cream"
        data-testid={`industry-leader-illustration-${i}`}
      >
        <VoiceIllustration index={i} />

        {/* Kicker */}
        <div className="absolute top-4 left-4 bg-paper text-ink px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] font-mono z-10">
          0{i + 1} · Voice
        </div>

        {/* Placeholder tag */}
        <div className="absolute bottom-4 right-4 hidden md:flex items-center gap-2 bg-ink text-paper px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] font-mono z-10">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-brand animate-pulse" />
          <span>Illustration · Awaiting footage</span>
        </div>
      </div>

      {/* Text summary — right */}
      <div className="md:col-span-5 p-8 md:p-10 lg:p-12 flex flex-col justify-center gap-5 md:border-l md:border-line">
        <div className="text-[10px] uppercase tracking-[0.24em] text-slate-brand font-mono">
          {String(i + 1).padStart(2, "0")} / 04 · {e.role}
        </div>
        <div>
          <h3 className="font-editorial text-[30px] md:text-[34px] lg:text-[38px] leading-[1.02] tracking-[-0.01em]">
            {e.name}
          </h3>
          <div className="text-[11px] uppercase tracking-[0.22em] text-orange-brand mt-3 font-mono">
            {e.title}
          </div>
        </div>
        <blockquote className="font-editorial-soft italic text-[19px] md:text-[21px] leading-[1.35] text-ink border-l-2 border-orange-brand pl-5">
          “{e.quote}”
        </blockquote>
        <p className="text-[14px] leading-[1.65] text-ink/70">
          {e.summary}
        </p>
      </div>
    </motion.article>
  );
};

export const IndustryLeaders = () => {
  return (
    <section
      id="industry-leaders"
      className="relative bg-paper-warm text-ink py-24 md:py-32 px-6 md:px-10 lg:px-14 border-t border-line overflow-hidden"
      data-testid="industry-leaders-section"
    >
      <div className="flex items-baseline gap-5 mb-8">
        <span className="font-editorial italic text-[64px] md:text-[80px] leading-none text-orange-brand">★</span>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-[0.24em] text-slate-brand">Voices</span>
          <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-ink mt-1">Industry Leaders on the Operating Model</span>
        </div>
        <span className="hidden md:block flex-1 h-px bg-ink/15 ml-6" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="font-editorial text-[9vw] md:text-[6vw] lg:text-[4.4vw] leading-[0.9] tracking-[-0.03em] max-w-5xl"
      >
        Four voices on{" "}
        <span className="italic font-editorial-soft text-orange-brand">the school operating model.</span>
      </motion.h2>

      <p className="mt-8 max-w-2xl text-[15.5px] leading-[1.65] text-ink/70">
        Educators, operators, standards leaders and investors — on why K-12 is
        moving from person-dependent institutions to system-driven organisations.
      </p>

      <div className="mt-16 md:mt-20 flex flex-col gap-6 md:gap-8">
        {experts.map((e, i) => (
          <VoiceCard key={e.name} e={e} i={i} />
        ))}
      </div>

      <div className="mt-12 text-[11px] uppercase tracking-[0.22em] text-slate-brand font-mono">
        Illustrated placeholders · Real portraits and video footage coming soon
      </div>
    </section>
  );
};
