import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, Mail } from "lucide-react";

export const CTASection = () => {
  return (
    <section
      className="relative bg-paper text-ink py-24 md:py-32 px-6 md:px-10 lg:px-14 border-t border-line overflow-hidden"
      data-testid="cta-section"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.7, 0, 0.2, 1] }}
        className="max-w-5xl"
      >
        <div className="text-[10px] uppercase tracking-[0.22em] text-slate-brand mb-6">
          Ch. 06 — Begin
        </div>
        <h2 className="font-editorial text-[10vw] md:text-[7vw] lg:text-[5.4vw] leading-[0.88] tracking-[-0.035em]">
          Bring us your school.
          <br />
          We will return{" "}
          <span className="italic font-editorial-soft text-orange-brand">
            a system.
          </span>
        </h2>

        <p className="mt-10 max-w-xl text-[16px] md:text-[17px] leading-[1.6] text-ink/70">
          A 90-day operating diagnostic. A resident squad on-ground. And a
          measurable path from person-dependent to system-driven — with owners,
          reviews and receipts.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-ink text-paper hover:bg-orange-brand transition-colors"
            data-testid="cta-book-demo"
          >
            <Calendar className="w-4 h-4" />
            <span className="text-[14px] font-medium">Book a demo</span>
            <span className="w-9 h-9 rounded-full bg-orange-brand group-hover:bg-paper text-paper group-hover:text-ink flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
          <Link
            to="/contact#enquiry"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-ink/20 hover:border-ink transition-colors text-[14px] font-medium"
            data-testid="cta-write-to-us"
          >
            <Mail className="w-4 h-4" />
            Write to us
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
