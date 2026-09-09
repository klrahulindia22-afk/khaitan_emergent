import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "sonner";
import { SmoothScroll } from "@/lib/smoothScroll";
import { Sidebar } from "@/components/Sidebar";
import Landing from "@/pages/Landing";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import PillarDetail from "@/pages/PillarDetail";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Delay to allow the target route to render before scrolling
      const id = hash.replace(/^#/, "");
      const attempt = (tries = 0) => {
        const el = document.getElementById(id);
        if (el) {
          if (window.__lenis) window.__lenis.scrollTo(el, { duration: 1.2 });
          else el.scrollIntoView({ behavior: "smooth" });
        } else if (tries < 20) {
          setTimeout(() => attempt(tries + 1), 60);
        }
      };
      attempt();
      return;
    }
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SmoothScroll>
          <ScrollToTop />
          <Sidebar />
          <div>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/pillars/:slug" element={<PillarDetail />} />
            </Routes>
          </div>
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#0a1f38",
                color: "#f7fafd",
                border: "1px solid rgba(245,241,234,0.15)",
                borderRadius: 0,
                fontFamily: "Manrope, sans-serif",
              },
            }}
          />
        </SmoothScroll>
      </BrowserRouter>
    </div>
  );
}

export default App;
