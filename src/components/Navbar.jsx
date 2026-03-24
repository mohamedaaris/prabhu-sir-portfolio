import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "publications", label: "Publications" },
  { id: "overview", label: "Overview" },
  { id: "timeline", label: "Journey" },
  { id: "conferences", label: "Conferences" },
  { id: "awards", label: "Awards" },
  { id: "affiliations", label: "Affiliations" },
  { id: "collaboration", label: "Collaborate" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <span className="nav-logo">Dr. Prabhu J</span>

      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <button className="nav-link" onClick={() => scrollTo(item.id)}>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
