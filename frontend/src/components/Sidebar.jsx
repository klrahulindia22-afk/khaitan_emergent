import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const nav = [
  { label: "Index", to: "/", section: "top" },
  { label: "The Problem", to: "/#problem", section: "problem" },
  { label: "Promoter Reality", to: "/#promoter", section: "promoter" },
  { label: "Compliance Gap", to: "/#compliance", section: "compliance" },
  { label: "Why EduOps", to: "/#differentiator", section: "differentiator" },
  { label: "7 Pillars", to: "/#pillars", section: "pillars" },
];

const secondary = [
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -20, duration: 1.4 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

export const Sidebar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/") return;
    const ids = ["problem", "promoter", "compliance", "differentiator", "pillars"];
    const observers = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(id);
          });
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [location.pathname]);

  const handleNav = (item, e) => {
    if (item.section && location.pathname === "/") {
      e.preventDefault();
      if (item.section === "top") {
        window.__lenis
          ? window.__lenis.scrollTo(0, { duration: 1.4 })
          : window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        scrollTo(item.section);
      }
      setOpen(false);
    }
  };

  return (
    <>
      {/* Mobile top bar */}
      <div
        className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 bg-paper/85 backdrop-blur-md border-b border-line"
        data-testid="mobile-topbar"
      >
        <Link to="/" className="flex items-center gap-2" data-testid="mobile-logo-link">
          <LogoMark />
          <span className="font-editorial text-lg leading-none">Khaitan EduOps</span>
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          className="p-2 -mr-2"
          aria-label="Toggle menu"
          data-testid="mobile-menu-toggle"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: [0.7, 0, 0.2, 1] }}
            className="lg:hidden fixed inset-0 z-40 bg-ink text-paper pt-20 px-6 pb-8 overflow-y-auto"
            data-testid="mobile-drawer"
          >
            <SidebarContent
              active={active}
              onNav={handleNav}
              variant="dark"
              location={location}
            />
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop Fixed Sidebar */}
      <aside
        className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[260px] xl:w-[280px] z-40 flex-col border-r border-line bg-paper/70 backdrop-blur-sm"
        data-testid="desktop-sidebar"
      >
        <div className="px-7 pt-8 pb-6 border-b border-line-soft">
          <Link
            to="/"
            className="flex items-start gap-2.5 group"
            data-testid="desktop-logo-link"
          >
            <LogoMark />
            <div className="leading-tight">
              <div className="font-editorial text-[22px] tracking-tight text-ink">
                Khaitan
              </div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-brand mt-0.5">
                EduOps · Est. 2024
              </div>
            </div>
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar px-7 py-6">
          <SidebarContent
            active={active}
            onNav={handleNav}
            variant="light"
            location={location}
          />
        </div>

        <div className="px-7 py-5 border-t border-line-soft">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.__lenis
                ? window.__lenis.scrollTo(0, { duration: 1.4 })
                : window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-slate-brand hover:text-ink transition-colors"
            data-testid="back-to-top"
          >
            <span className="w-6 h-px bg-current" />
            Back to top
          </a>
        </div>
      </aside>
    </>
  );
};

const SidebarContent = ({ active, onNav, variant, location }) => {
  const isDark = variant === "dark";
  const muted = isDark ? "text-paper/50" : "text-slate-brand";
  const text = isDark ? "text-paper" : "text-ink";
  const activeText = isDark ? "text-paper" : "text-ink";
  const activeDot = "bg-orange-brand";

  return (
    <div className="flex flex-col gap-10">
      <div>
        <div className={`text-[10px] uppercase tracking-[0.22em] ${muted} mb-4`}>
          Manifesto
        </div>
        <ul className="space-y-1">
          {nav.map((item, i) => {
            const isActive =
              location.pathname === "/" && active === (item.section || "top");
            return (
              <li key={item.label}>
                <Link
                  to={item.to}
                  onClick={(e) => onNav(item, e)}
                  className={`group flex items-center gap-3 py-1.5 text-[14px] transition-colors ${
                    isActive ? activeText : muted
                  } hover:${text.replace("text-", "text-")}`}
                  data-testid={`sidebar-nav-${item.section || i}`}
                >
                  <span
                    className={`text-[10px] font-mono ${
                      isDark ? "text-paper/40" : "text-slate-brand"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      isActive ? activeDot : "bg-transparent"
                    }`}
                  />
                  <span className="tracking-tight">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <div className={`text-[10px] uppercase tracking-[0.22em] ${muted} mb-4`}>
          Pages
        </div>
        <ul className="space-y-1">
          {secondary.map((item, i) => {
            const isActive = location.pathname === item.to;
            return (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className={`group flex items-center gap-3 py-1.5 text-[14px] transition-colors ${
                    isActive ? activeText : muted
                  }`}
                  data-testid={`sidebar-page-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  <span
                    className={`text-[10px] font-mono ${
                      isDark ? "text-paper/40" : "text-slate-brand"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      isActive ? activeDot : "bg-transparent"
                    }`}
                  />
                  <span className="tracking-tight">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <div className={`text-[10px] uppercase tracking-[0.22em] ${muted} mb-4`}>
          Engage
        </div>
        <Link
          to="/contact"
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] font-medium transition-transform hover:-translate-y-0.5 ${
            isDark
              ? "bg-orange-brand text-paper"
              : "bg-ink text-paper hover:bg-orange-brand"
          }`}
          data-testid="sidebar-book-demo"
        >
          Book a demo
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className={`text-[11px] ${muted} leading-relaxed mt-auto`}>
        <div className="mb-1">Khaitan EduOps Pvt. Ltd.</div>
        <div>An Education Management</div>
        <div>Operating Company.</div>
      </div>
    </div>
  );
};

const LogoMark = () => (
  <div className="relative w-8 h-8 shrink-0" aria-hidden>
    <div className="absolute inset-0 rounded-full bg-ink" />
    <div className="absolute inset-[3px] rounded-full border border-paper/30" />
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-paper font-editorial text-[15px] leading-none italic">
        K
      </span>
    </div>
    <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-orange-brand" />
  </div>
);
