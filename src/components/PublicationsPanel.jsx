import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { journals } from "../data/professorData";

// Flatten all publications with journal info
const allPublications = journals.flatMap((journal) =>
  journal.papers.map((paper) => ({
    ...paper,
    journalName: journal.name,
    impactFactor: journal.impactFactor,
  }))
);

// Get unique tags
const uniqueTags = [...new Set(allPublications.flatMap((p) => p.tags))].sort();

// Filter categories
const FILTER_CATEGORIES = [
  "All",
  ...uniqueTags.slice(0, 15), // Top 15 tags for the filter bar
];

export default function PublicationsPanel({ isOpen, onClose }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [toastMessage, setToastMessage] = useState(null);
  const scrollRef = useRef(null);
  const panelRef = useRef(null);

  // Reset state when panel opens
  useEffect(() => {
    if (isOpen) {
      setActiveFilter("All");
      setSearchQuery("");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Filter & search
  const filteredPublications = useMemo(() => {
    let pubs = allPublications;

    if (activeFilter !== "All") {
      pubs = pubs.filter((p) => p.tags.includes(activeFilter));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      pubs = pubs.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.journalName.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return pubs;
  }, [activeFilter, searchQuery]);

  // Group by journal
  const groupedByJournal = useMemo(() => {
    const groups = {};
    filteredPublications.forEach((pub) => {
      if (!groups[pub.journalName]) {
        groups[pub.journalName] = {
          name: pub.journalName,
          impactFactor: pub.impactFactor,
          papers: [],
        };
      }
      groups[pub.journalName].papers.push(pub);
    });
    // Sort by impact factor descending
    return Object.values(groups).sort((a, b) => b.impactFactor - a.impactFactor);
  }, [filteredPublications]);

  // Citation copy
  const handleCite = useCallback((paper) => {
    const citation = `${paper.title}. ${paper.journalName}, ${paper.year}. DOI: ${paper.doi}`;
    navigator.clipboard.writeText(citation).then(() => {
      setToastMessage("Citation copied to clipboard");
      setTimeout(() => setToastMessage(null), 3000);
    });
  }, []);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="modal-overlay overlay-enter"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        id="publications-modal"
      >
        <div className="glass-panel modal-enter" ref={panelRef}>
          {/* Header */}
          <div className="panel-header">
            <div>
              <h2 className="panel-title">Research Publications</h2>
              <span className="panel-count">
                {filteredPublications.length} of {allPublications.length} papers
              </span>
            </div>
            <button
              className="close-btn"
              onClick={onClose}
              id="close-publications-btn"
              aria-label="Close publications panel"
            >
              ✕
            </button>
          </div>

          {/* Search */}
          <div className="search-wrapper">
            <span className="search-icon">⌕</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search papers, journals, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="search-publications"
            />
          </div>

          {/* Filters */}
          <div className="filter-bar">
            {FILTER_CATEGORIES.map((tag) => (
              <button
                key={tag}
                className={`filter-chip ${activeFilter === tag ? "active" : ""}`}
                onClick={() => setActiveFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Scrollable list */}
          <div className="panel-scroll" ref={scrollRef}>
            {groupedByJournal.length === 0 ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <p style={{ color: "var(--text-dim)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
                  No publications match your search.
                </p>
              </div>
            ) : (
              groupedByJournal.map((journal) => (
                <div key={journal.name}>
                  {/* Journal header */}
                  <div className="journal-group-header">
                    <span className="journal-name">{journal.name}</span>
                    <span className="journal-if">IF: {journal.impactFactor}</span>
                    <span className="journal-line" />
                  </div>

                  {/* Cards */}
                  {journal.papers.map((paper, idx) => (
                    <div
                      key={paper.id}
                      className="pub-card animate-fade-in-up"
                      style={{ animationDelay: `${idx * 0.06}s` }}
                    >
                      <h3 className="pub-title">{paper.title}</h3>

                      <div className="pub-meta">
                        <span className="pub-year">{paper.year}</span>
                        <span className="pub-journal">{paper.journalName}</span>
                        <span className="pub-citations">
                          {paper.citations} citations
                        </span>
                      </div>

                      <div className="pub-tags">
                        {paper.tags.map((tag) => (
                          <span key={tag} className="tag-badge">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pub-actions">
                        <a
                          href={paper.pdf}
                          className="action-btn pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                          PDF
                        </a>
                        <a
                          href={`https://doi.org/${paper.doi}`}
                          className="action-btn doi"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                          </svg>
                          DOI
                        </a>
                        <button
                          className="action-btn cite"
                          onClick={() => handleCite(paper)}
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                          </svg>
                          Cite
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Citation toast */}
      {toastMessage && (
        <div className="cite-toast" key={Date.now()}>
          ✓ {toastMessage}
        </div>
      )}
    </>
  );
}
