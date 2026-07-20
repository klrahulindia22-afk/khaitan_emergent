import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { LOGO_URL } from "../data/brand";

const manifesto = [
  { label: "Problem", section: "problem" },
  { label: "Promoter", section: "promoter" },
  { label: "Compliance", section: "compliance" },
  { label: "Why EduOps", section: "differentiator" },
  { label: "7 Pillars", section: "pillars" },
];

const pages = [
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -80, duration: 1.4 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

export const Sidebar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");
  const [condensed, setCondensed] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setCondensed(v > 40);
  });

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
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [location.pathname]);

  const handleNav = (item, e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      scrollTo(item.section);
      setOpen(false);
    }
  };

  const goHome = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.__lenis
        ? window.__lenis.scrollTo(0, { duration: 1.4 })
        : window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Fixed Top Bar */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.7, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          condensed
            ? "bg-paper/85 backdrop-blur-xl border-b border-line"
            : "bg-transparent border-b border-transparent"
        }`}
        data-testid="top-nav"
      >
        <div
          className={`flex items-center justify-between px-5 md:px-8 lg:px-10 transition-all duration-500 ${
            condensed ? "py-3" : "py-5"
          }`}
        >
          {/* Left — Logo */}
          <Link
            to="/"
            onClick={goHome}
            className="flex items-center gap-2.5 group"
            data-testid="topbar-logo"
          >
            <img
              src={LOGO_URL}
              alt="Khaitan EduOps"
              className={`w-auto transition-all duration-500 ${
                condensed ? "h-8 md:h-9" : "h-10 md:h-11"
              }`}
              draggable={false}
            />
          </Link>

          {/* Center — Manifesto pill */}
          <nav
            className="hidden lg:flex items-center gap-1 bg-paper/70 backdrop-blur-md border border-line rounded-full px-2 py-1.5 shadow-[0_1px_0_0_rgba(10,22,40,0.03)]"
            data-testid="top-manifesto-nav"
          >
            {manifesto.map((item, i) => {
              const isActive =
                location.pathname === "/" && active === item.section;
              return (
                <Link
                  key={item.section}
                  to={`/#${item.section}`}
                  onClick={(e) => handleNav(item, e)}
                  className={`group relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13px] transition-all ${
                    isActive
                      ? "bg-ink text-paper"
                      : "text-ink/75 hover:text-ink"
                  }`}
                  data-testid={`topnav-${item.section}`}
                >
                  <span
                    className={`text-[9px] font-mono ${
                      isActive ? "text-paper/60" : "text-slate-brand"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="tracking-tight">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right — Pages + CTA */}
          <div className="flex items-center gap-2 md:gap-4">
            <nav className="hidden md:flex items-center gap-5 mr-2">
              {pages.map((p) => {
                const isActive = location.pathname === p.to;
                return (
                  <Link
                    key={p.to}
                    to={p.to}
                    className={`relative text-[13px] transition-colors ${
                      isActive ? "text-ink" : "text-ink/70 hover:text-ink"
                    }`}
                    data-testid={`topnav-page-${p.label.toLowerCase()}`}
                  >
                    <span className="link-underline">{p.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="page-dot"
                        className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-brand"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 pl-4 pr-1 py-1 rounded-full bg-ink text-paper hover:bg-orange-brand transition-colors group"
              data-testid="topbar-book-demo"
            >
              <span className="text-[12.5px] font-medium">Book a demo</span>
              <span className="w-7 h-7 rounded-full bg-orange-brand group-hover:bg-paper text-paper group-hover:text-ink flex items-center justify-center transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden p-2 -mr-2 text-ink"
              aria-label="Toggle menu"
              data-testid="mobile-menu-toggle"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden fixed inset-0 z-40 bg-ink text-paper pt-24 px-6 pb-8 overflow-y-auto"
            data-testid="mobile-drawer"
          >
            <MobileNav
              active={active}
              onNav={handleNav}
              location={location}
              setOpen={setOpen}
            />
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

const MobileNav = ({ active, onNav, location, setOpen }) => (
  <div className="flex flex-col gap-10">
    <div>
      <div className="text-[10px] uppercase tracking-[0.22em] text-paper/50 mb-5">
        Manifesto
      </div>
      <ul className="space-y-3">
        {manifesto.map((item, i) => {
          const isActive =
            location.pathname === "/" && active === item.section;
          return (
            <li key={item.section}>
              <Link
                to={`/#${item.section}`}
                onClick={(e) => {
                  onNav(item, e);
                  setOpen(false);
                }}
                className="flex items-baseline gap-4 group"
                data-testid={`mobile-nav-${item.section}`}
              >
                <span className="text-[11px] font-mono text-paper/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`font-editorial text-3xl leading-none tracking-tight ${
                    isActive ? "text-orange-brand" : "text-paper"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>

    <div>
      <div className="text-[10px] uppercase tracking-[0.22em] text-paper/50 mb-5">
        Pages
      </div>
      <ul className="space-y-3">
        {pages.map((p, i) => (
          <li key={p.to}>
            <Link
              to={p.to}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4"
              data-testid={`mobile-page-${p.label.toLowerCase()}`}
            >
              <span className="text-[11px] font-mono text-paper/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-editorial text-3xl leading-none tracking-tight text-paper">
                {p.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>

    <Link
      to="/contact"
      onClick={() => setOpen(false)}
      className="inline-flex items-center justify-between gap-2 px-6 py-4 rounded-full bg-orange-brand text-paper mt-2"
      data-testid="mobile-book-demo"
    >
      <span className="text-[15px] font-medium">Book a demo</span>
      <ArrowUpRight className="w-4 h-4" />
    </Link>

    <div className="text-[11px] text-paper/50 leading-relaxed mt-6">
      Khaitan EduOps Pvt. Ltd.
      <br />
      An Education Management Operating Company.
    </div>
  </div>
);

const LogoMark = () => (
  <img
    src={LOGO_URL}
    alt="Khaitan EduOps"
    className="h-8 w-auto"
    draggable={false}
  />
);
