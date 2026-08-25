import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { LOGO_URL } from "../data/brand";

export const Footer = () => {
  return (
    <footer
      className="relative bg-ink text-paper overflow-hidden"
      data-testid="site-footer"
    >
      {/* Massive brand wordmark */}
      <div className="relative border-b border-paper/10">
        <div className="px-6 md:px-12 py-14 md:py-20 flex items-end justify-between gap-8">
          <div className="flex-1">
            <div className="text-[10px] uppercase tracking-[0.22em] text-paper/50 mb-6">
              Have a school. Build a system.
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.7, 0, 0.2, 1] }}
              className="font-editorial text-[7.14vw] md:text-[5.35vw] leading-[0.95] tracking-[-0.02em]"
            >
              <span className="italic font-editorial-soft">Khaitan</span>{" "}
              <span className="text-orange-brand">
                EduOps{" "}
                <span className="text-[25%]">Pvt. Ltd.</span>
              </span>
            </motion.h2>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-12 py-14 md:py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="inline-block bg-paper p-3 mb-6 rounded-sm">
            <img
              src={LOGO_URL}
              alt="Khaitan EduOps"
              className="h-10 w-auto block"
              draggable={false}
            />
          </div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-paper/50 mb-4">
            The Company
          </div>
          <p className="text-paper/80 text-[15px] leading-relaxed max-w-sm">
            Khaitan EduOps is an Education Management Operating Company. We
            transition schools from person-dependent to system-driven — through
            playbooks, reviews, technology and resident operators.
          </p>
        </div>

        <div className="md:col-span-3 md:col-start-6">
          <div className="text-[10px] uppercase tracking-[0.22em] text-paper/50 mb-4">
            Navigate
          </div>
          <ul className="space-y-2 text-[15px]">
            <li>
              <Link
                to="/about"
                className="link-underline text-paper hover:text-orange-brand transition-colors"
                data-testid="footer-about"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="link-underline text-paper hover:text-orange-brand transition-colors"
                data-testid="footer-contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/pillars/kosmos-erp"
                className="link-underline text-paper hover:text-orange-brand transition-colors"
              >
                KOSMOS ERP
              </Link>
            </li>
            <li>
              <Link
                to="/pillars/playbook-agent"
                className="link-underline text-paper hover:text-orange-brand transition-colors"
              >
                Playbook Agent
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="text-[10px] uppercase tracking-[0.22em] text-paper/50 mb-4">
            Contact
          </div>
          <ul className="space-y-2 text-[15px] text-paper/80">
            <li>
              <a
                href="mailto:cofounder@khaitaneduops.com"
                className="link-underline hover:text-orange-brand transition-colors"
                data-testid="footer-email"
              >
                cofounder@khaitaneduops.com
              </a>
            </li>
            <li>
              <a
                href="tel:+919910055242"
                className="link-underline hover:text-orange-brand transition-colors"
              >
                +91 99100 55242
              </a>
            </li>
            <li className="pt-2 text-[13px] text-paper/60 leading-relaxed">
              Group Office
              <br />
              A9, 3rd Floor, The Grent,
              <br />
              Sector 136, Noida,
              <br />
              Uttar Pradesh 201304
            </li>
          </ul>

          <Link
            to="/contact#demo"
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-orange-brand text-paper text-[13px] font-medium hover:-translate-y-0.5 transition-transform"
            data-testid="footer-book-demo"
          >
            Book a demo
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      <div className="border-t border-paper/10 px-6 md:px-12 py-6 flex flex-wrap items-center justify-between gap-4 text-[12px] text-paper/50">
        <div>© {new Date().getFullYear()} Khaitan EduOps Pvt. Ltd. All rights reserved.</div>
        <div className="font-mono uppercase tracking-[0.18em]">
          System-driven · Compliance by design
        </div>
      </div>
    </footer>
  );
};
