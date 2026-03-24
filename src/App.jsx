import { useEffect, useRef, useState } from "react";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PublicationsSection from "./components/PublicationsSection";
import OverviewSection from "./components/OverviewSection";
import TimelineSection from "./components/TimelineSection";
import ConferencesSection from "./components/ConferencesSection";
import AwardsSection from "./components/AwardsSection";
import AffiliationsSection from "./components/AffiliationsSection";
import CollaborationSection from "./components/CollaborationSection";

function App() {
  const [toastMsg, setToastMsg] = useState(null);

  // Expose a toast ref for child components
  const toastRef = useRef({
    show: (text) => {
      setToastMsg(text);
      setTimeout(() => setToastMsg(null), 3000);
    },
  });

  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // Use MutationObserver to catch dynamically added .reveal elements
    const observeAll = () => {
      document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
        observer.observe(el);
      });
    };

    observeAll();

    const mutObs = new MutationObserver(observeAll);
    mutObs.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutObs.disconnect();
    };
  }, []);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Deep-space background layers */}
      <div className="bg-cosmos" />
      <ParticleBackground />

      {/* Navigation */}
      <Navbar />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <HeroSection />

        <div className="section-divider" />
        <PublicationsSection toastRef={toastRef} />

        <div className="section-divider" />
        <OverviewSection />

        <div className="section-divider" />
        <TimelineSection />

        <div className="section-divider" />
        <ConferencesSection />

        <div className="section-divider" />
        <AwardsSection />

        <div className="section-divider" />
        <AffiliationsSection />

        <div className="section-divider" />
        <CollaborationSection />

        {/* Footer */}
        <footer className="footer">
          <p className="footer-text">
            © {new Date().getFullYear()} Dr. Prabhu Jayagopal · Academic Research Portfolio
          </p>
        </footer>
      </div>

      {/* Toast notification */}
      {toastMsg && (
        <div className="cite-toast" key={toastMsg + Date.now()}>
          ✓ {toastMsg}
        </div>
      )}
    </div>
  );
}

export default App;
