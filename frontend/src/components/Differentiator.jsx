import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { ChapterHead } from "./ProblemSection";

const rows = [
  {
    facet: "Operating model",
    edtech: "Content library. Bring-your-own-teacher.",
    erp: "Transaction system. Bring-your-own-workflow.",
    eduops: "Resident operator. We install the workflow.",
  },
  {
    facet: "Accountability",
    edtech: "Usage dashboards.",
    erp: "Data entry compliance.",
    eduops: "Outcome accountability with owners.",
  },
  {
    facet: "Time to visible change",
    edtech: "3–4 academic sessions.",
    erp: "12–18 months, if adopted.",
    eduops: "90 days — first review cycle.",
  },
  {
    facet: "Reversibility",
    edtech: "Unplug the tool, nothing changes.",
    erp: "Unplug the tool, workflows collapse.",
    eduops: "Handover ready — the system stays.",
  },
];

export const Differentiator = () => {
  return (
    <section
      id="differentiator"
      className="relative bg-paper text-ink py-24 md:py-36 px-6 md:px-10 lg:px-14 border-t border-line"
      data-testid="differentiator-section"
    >
      <ChapterHead num="04" label="The Differentiator" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="font-editorial text-[9vw] md:text-[6.2vw] lg:text-[4.6vw] leading-[0.9] tracking-[-0.035em] mt-6 max-w-5xl"
      >
        Not{" "}
        <span className="italic font-editorial-soft line-through decoration-orange-brand decoration-[3px]">
          EdTech
        </span>
        . Not{" "}
        <span className="italic font-editorial-soft line-through decoration-orange-brand decoration-[3px]">
          an ERP
        </span>
        .
        <br />
        An{" "}
        <span className="italic font-editorial-soft text-orange-brand">
          Education Management Operating Company.
        </span>
      </motion.h2>

      <p className="mt-10 max-w-2xl text-[16px] md:text-[17px] leading-[1.6] text-ink/70">
        EdTech sells content. ERP sells transactions. Neither is answerable to
        the child, the teacher or the Promoter. Khaitan EduOps takes operating
        responsibility for the school — as a resident partner, not a vendor.
      </p>

      {/* Comparison table */}
      <div className="mt-16 md:mt-20 border border-ink/15 overflow-hidden">
        <div className="grid grid-cols-12 bg-ink text-paper text-[11px] uppercase tracking-[0.22em]">
          <div className="col-span-3 md:col-span-3 px-4 md:px-6 py-5 border-r border-paper/15">
            Facet
          </div>
          <div className="col-span-3 px-4 md:px-6 py-5 border-r border-paper/15 flex items-center gap-2">
            <X className="w-3.5 h-3.5 text-paper/60" /> EdTech
          </div>
          <div className="col-span-3 px-4 md:px-6 py-5 border-r border-paper/15 flex items-center gap-2">
            <X className="w-3.5 h-3.5 text-paper/60" /> ERP
          </div>
          <div className="col-span-3 px-4 md:px-6 py-5 bg-orange-brand text-paper flex items-center gap-2">
            <Check className="w-3.5 h-3.5" /> EduOps
          </div>
        </div>
        {rows.map((r, i) => (
          <motion.div
            key={r.facet}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className={`grid grid-cols-12 text-[13.5px] md:text-[14.5px] leading-[1.5] ${
              i % 2 === 0 ? "bg-paper" : "bg-cream"
            } border-b border-ink/10 last:border-b-0`}
          >
            <div className="col-span-3 px-4 md:px-6 py-6 md:py-7 border-r border-ink/10 font-medium">
              {r.facet}
            </div>
            <div className="col-span-3 px-4 md:px-6 py-6 md:py-7 border-r border-ink/10 text-ink/65">
              {r.edtech}
            </div>
            <div className="col-span-3 px-4 md:px-6 py-6 md:py-7 border-r border-ink/10 text-ink/65">
              {r.erp}
            </div>
            <div className="col-span-3 px-4 md:px-6 py-6 md:py-7 text-ink font-medium">
              {r.eduops}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
