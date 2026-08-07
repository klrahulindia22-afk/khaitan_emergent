import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Footer } from "../components/Footer";
import { Marquee } from "../components/Marquee";
import { AboutPortraitIllustration } from "../components/AboutIllustration";

const principles = [
  {
    n: "01",
    t: "We are operators, not vendors.",
    b: "We sit inside the school for the duration of transformation. Milestones are ours to miss, not just to bill.",
  },
  {
    n: "02",
    t: "Compliance by design.",
    b: "Every workflow has a rail. Every rail has a receipt. What cannot be reviewed does not go into production.",
  },
  {
    n: "03",
    t: "The Promoter is the client.",
    b: "We answer to the person who bears the risk. Every dashboard, review and playbook is built for that seat.",
  },
  {
    n: "04",
    t: "Handover, not lock-in.",
    b: "The engagement ends when the system self-runs. Our operators keep the operating model — we keep the relationship.",
  },
];

const leadership = [
  {
    name: "Vedant Khaitan",
    role: "Founder & Director",
    img: "https://customer-assets-m6fa6gv7.emergentagent.net/job_684ff79f-60f2-4b46-8ca8-a48ed8c1b296/artifacts/2yggkq2b_PHOTO-2026-08-07-10-18-15.jpg",
    imgFilter: "grayscale(1) brightness(1.18) contrast(1.08)",
    bio: "Coming from a distinguished background of leading lawyers, industrialists and educationists, Mr. Khaitan represents the best of knowledge, entrepreneurship and dynamism. The Khaitan family runs numerous schools that are beacons of excellence — The Khaitan School (Noida), Khaitan Public School (Ghaziabad), Khaitan Preschool (Noida), BDM International School (Kolkata), Indus Valley World School (Kolkata) and Sunny Preparatory School (Kolkata) among them.\n\nMr. Khaitan is an alumnus of Modern School, Vasant Vihar, and a Mechanical Engineer from The University of Michigan, Ann Arbor, USA. Inducted into the management of The Khaitan School in 2008, he has played key roles in several of the institution's milestones, including founding the Khaitan Preschool in 2013 — since recognised as a leading educational institution in Noida.\n\nHe helped set up the Gautam Budh Nagar Chapter of the Independent School Federation of India and co-founded the K12 education chapter of FICCI ARISE, the education policy advocacy body — where he currently chairs the North Committee and the Membership Committee. He has also completed the Business Mastery Programme and an intensive course on Digital Marketing at Business Coaching India by Mr. Rahul Jain.",
  },
  {
    name: "Asheesh Kumar Sharma",
    role: "Co-founder & CEO",
    img: "https://customer-assets-gfyr7b9c.emergentagent.net/job_consistency-platform/artifacts/0ygdwtx9_Asheesh2026.png",
    bio: "Asheesh Kumar Sharma is a seasoned education management leader with over 22 years of experience in establishing, scaling and managing K-12 educational institutions across India and the UAE. Recognised for his expertise in driving operational excellence and institutional growth, he specialises in end-to-end school setup, strategic planning, financial governance, regulatory compliance and brand development.\n\nThroughout his career, Asheesh has held key executive roles, including Founding CEO and Executive Director, leading high-impact educational institutions from ground-zero inception to multi-thousand student capacity. His strategic approach integrates modern process automation, quality control and robust operational frameworks to build sustainable, high-performing schools.\n\nAn MBA in Operations, ISO 9001 Lead Auditor and Six Sigma Green Belt, Asheesh combines strategic foresight with rigorous systems engineering. As Co-Founder, he is committed to building scalable educational models, streamlining academic and non-academic governance, and driving organisational success.",
  },
];

export default function About() {
  return (
    <main className="relative" data-testid="about-page">
      {/* Hero */}
      <section className="relative pt-40 md:pt-44 lg:pt-48 px-6 md:px-10 lg:px-14 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[10px] font-mono uppercase tracking-[0.24em] text-slate-brand mb-6"
        >
          About — The company behind the system
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.7, 0, 0.2, 1] }}
          className="font-editorial text-[11vw] md:text-[8vw] lg:text-[6.4vw] leading-[0.88] tracking-[-0.035em] max-w-6xl"
        >
          A company built to make{" "}
          <span className="italic font-editorial-soft text-orange-brand">
            schools
          </span>{" "}
          run like{" "}
          <span className="italic font-editorial-soft">institutions.</span>
        </motion.h1>

        <div className="mt-14 grid md:grid-cols-12 gap-10">
          <p className="md:col-span-6 md:col-start-1 text-[16px] md:text-[17px] leading-[1.65] text-ink/75">
            Khaitan EduOps was founded because Indian schools do not need
            another platform — they need an{" "}
            <em className="font-editorial-soft italic text-[1.35em] text-orange-brand align-baseline">operator</em>. Our team
            has run schools, built K-12 groups, engineered ERPs and coached
            teachers. We put those disciplines on one desk, on your campus, and
            keep them there until the system runs itself.
          </p>
          <div className="md:col-span-4 md:col-start-8 space-y-6">
            <div>
              <div className="font-editorial text-4xl md:text-5xl">6 mo</div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-slate-brand mt-2">
                Average time to self-sustaining operating model
              </div>
            </div>
            <div>
              <div className="font-editorial text-4xl md:text-5xl">
                7 <span className="text-orange-brand">/</span> 7
              </div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-slate-brand mt-2">
                Pillars deployable in isolation or as one operating stack
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portrait band */}
      <section className="relative bg-ink text-paper py-24 md:py-32 px-6 md:px-10 lg:px-14 overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] max-w-[420px] overflow-hidden clip-corner">
              <AboutPortraitIllustration />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-orange-brand text-paper px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.22em]">Since 2024</div>
              <div className="font-editorial text-2xl leading-none mt-1">Resident operators</div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="text-[10px] uppercase tracking-[0.22em] text-paper/50 mb-6">
              Origin
            </div>
            <h2 className="font-editorial text-[8vw] md:text-[5vw] lg:text-[3.6vw] leading-[0.95] tracking-[-0.03em]">
              We didn’t want to sell schools a{" "}
              <span className="italic font-editorial-soft text-orange-brand">
                new tool
              </span>
              . We wanted to install a{" "}
              <span className="italic font-editorial-soft">new operating standard.</span>
            </h2>
            <p className="mt-8 max-w-xl text-[15.5px] leading-[1.65] text-paper/80">
              After two decades of watching brilliant schools plateau — because
              their outcomes lived inside three or four heads — the founders
              built EduOps as a resident operating layer. Not a subscription.
              Not a consulting report. A group office you can move into a school
              and switch on.
            </p>
          </div>
        </div>
      </section>

      <Marquee variant="light" />

      {/* Principles */}
      <section className="relative bg-paper text-ink py-24 md:py-32 px-6 md:px-10 lg:px-14">
        <div className="text-[10px] uppercase tracking-[0.22em] text-slate-brand mb-6">
          Operating principles
        </div>
        <h2 className="font-editorial text-[9vw] md:text-[6vw] lg:text-[4.4vw] leading-[0.9] tracking-[-0.03em] max-w-5xl">
          Four beliefs that decide{" "}
          <span className="italic font-editorial-soft text-orange-brand">
            how we operate.
          </span>
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-6 md:gap-8">
          {principles.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="bg-cream border border-line p-8 md:p-10"
              data-testid={`principle-${p.n}`}
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-editorial italic text-[48px] leading-none text-orange-brand">
                  {p.n}
                </span>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-brand pt-3">
                  Principle
                </div>
              </div>
              <h3 className="font-editorial text-[28px] md:text-[32px] leading-[1.05] tracking-tight">
                {p.t}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.65] text-ink/70">
                {p.b}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Founders */}
      <section className="relative bg-paper-warm text-ink py-24 md:py-32 px-6 md:px-10 lg:px-14 border-t border-line">
        <div className="text-[10px] uppercase tracking-[0.22em] text-slate-brand mb-6">
          Founders
        </div>
        <h2 className="font-editorial text-[9vw] md:text-[6vw] lg:text-[4.4vw] leading-[0.9] tracking-[-0.03em] max-w-5xl">
          Our{" "}
          <span className="italic font-editorial-soft text-orange-brand">
            Founders.
          </span>
        </h2>

        <div className="mt-16 md:mt-20 flex flex-col gap-16 md:gap-24">
          {leadership.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.7, 0, 0.2, 1] }}
              className={`grid lg:grid-cols-12 gap-8 md:gap-12 items-start ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
              data-testid={`founder-${i}`}
            >
              {/* Photo */}
              <div className="lg:col-span-4">
                <div className="relative aspect-[4/5] overflow-hidden clip-corner bg-ink max-w-[380px]">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover object-top"
                    style={{ filter: m.imgFilter || "grayscale(1) contrast(1.2) brightness(1.02)" }}
                    draggable={false}
                  />
                  <div className="absolute top-4 left-4 bg-paper text-ink px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] font-mono">
                    0{i + 1} · Founder
                  </div>
                  <div className="absolute bottom-4 right-4 w-2.5 h-2.5 rounded-full bg-orange-brand" />
                </div>
              </div>

              {/* Bio */}
              <div className="lg:col-span-8">
                <div className="text-[10px] uppercase tracking-[0.22em] text-orange-brand mb-3 font-mono">
                  0{i + 1} · {m.role}
                </div>
                <h3 className="font-editorial text-[9vw] md:text-[5.4vw] lg:text-[3.6vw] leading-[0.95] tracking-[-0.025em]">
                  {m.name}
                </h3>
                <div className="mt-6 max-w-3xl space-y-4 text-[15px] md:text-[15.5px] leading-[1.7] text-ink/80">
                  {m.bio.split("\n\n").map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-slate-brand">
                  <span className="w-8 h-px bg-orange-brand" />
                  {m.role}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-paper text-ink py-24 md:py-32 px-6 md:px-10 lg:px-14">
        <h2 className="font-editorial text-[9vw] md:text-[6vw] lg:text-[4.6vw] leading-[0.9] tracking-[-0.03em] max-w-5xl">
          Ready to move from{" "}
          <span className="italic font-editorial-soft">person-dependent</span> to{" "}
          <span className="italic font-editorial-soft text-orange-brand">
            system-driven?
          </span>
        </h2>
        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-ink text-paper hover:bg-orange-brand transition-colors group"
          data-testid="about-cta"
        >
          <span className="text-[14px] font-medium">Book a diagnostic</span>
          <span className="w-9 h-9 rounded-full bg-orange-brand group-hover:bg-paper text-paper group-hover:text-ink flex items-center justify-center transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </Link>
      </section>

      <Footer />
    </main>
  );
}
