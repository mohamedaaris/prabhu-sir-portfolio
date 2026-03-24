import { useState } from "react";
import { conferences, academicActivities } from "../data/professorData";

export default function ConferencesSection() {
  const [activeTab, setActiveTab] = useState(null);

  const categories = [
    { id: "chaired", label: "Sessions Chaired", data: academicActivities.chaired },
    { id: "presentedAbroad", label: "Presented (Abroad)", data: academicActivities.presentedAbroad },
    { id: "presentedIndia", label: "Presented (India)", data: academicActivities.presentedIndia },
    { id: "attended", label: "Workshops Attended", data: academicActivities.attended },
    { id: "guestLectures", label: "Guest Lectures Given", data: academicActivities.guestLectures },
    { id: "organized", label: "Workshops Organized", data: academicActivities.organized },
    { id: "collaborators", label: "Collaborators", data: academicActivities.collaborators },
    { id: "supervision", label: "PhD Supervision", data: academicActivities.researchSupervision.details.map(d => `${d.name} (${d.role}) - ${d.title} (Awarded: ${d.date})`) },
  ];

  return (
    <section className="portfolio-section" id="conferences">
      <div className="section-header">
        <p className="section-label">Global Presence</p>
        <h2 className="section-title">Conferences & Workshops</h2>
        <p className="section-subtitle">
          International conferences, keynotes, workshops, and panel discussions
        </p>
      </div>

      <div className="conf-grid">
        {conferences.map((conf, idx) => (
          <div
            key={conf.id}
            className="glass-card conf-card reveal"
            style={{ transitionDelay: `${idx * 0.06}s` }}
          >
            <div className="conf-name">{conf.name}</div>
            <div className="conf-role">{conf.role}</div>
            <p className="conf-detail">{conf.description}</p>
            <div className="conf-location">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {conf.location} · {conf.year}
            </div>
          </div>
        ))}
      </div>

      <div className="academic-extra-section mt-12">
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-chip ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(activeTab === cat.id ? null : cat.id)}
            >
              {cat.label} ({cat.data.length})
            </button>
          ))}
        </div>

        {activeTab && (
          <div className="glass-card overflow-hidden transition-all duration-500 reveal">
            <div className="p-6 border-b border-white/5 bg-white/5 flex justify-between items-center">
              <h3 className="font-heading text-lg cyan">{categories.find(c => c.id === activeTab).label}</h3>
              <button 
                className="text-white/40 hover:text-white"
                onClick={() => setActiveTab(null)}
              >
                Close
              </button>
            </div>
            <div className="p-6 max-h-[400px] overflow-y-auto custom-scrollbar">
              <ul className="space-y-4">
                {categories.find(c => c.id === activeTab).data.map((item, i) => (
                  <li key={i} className="flex gap-4 group">
                    <span className="text-cyan-400 font-mono mt-1 opacity-50">{i + 1}.</span>
                    <p className="text-sm text-white/70 group-hover:text-white transition-colors">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
