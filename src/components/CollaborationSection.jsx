import { professorProfile } from "../data/professorData";

export default function CollaborationSection() {
  const { email, googleScholar, orcid, researchGate } = professorProfile;

  return (
    <section className="portfolio-section collab-section" id="collaboration">
      <div className="section-header">
        <p className="section-label">Let's Connect</p>
        <h2 className="section-title">Open to Collaboration</h2>
      </div>

      <div className="collab-glass">
        <h3 className="collab-heading">Research Collaboration</h3>
        <p className="collab-text">
          Interested in collaborating on cutting-edge research in Machine Learning,
          Deep Learning, NLP, or Computer Vision? I'm always open to new partnerships
          with researchers and institutions worldwide.
        </p>

        <div className="collab-links">
          <a href={`mailto:${email}`} className="collab-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Email
          </a>
          <a href={googleScholar} className="collab-link" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            Google Scholar
          </a>
          <a href={orcid} className="collab-link" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8" />
              <path d="M8 12h8" />
            </svg>
            ORCID
          </a>
          <a href={researchGate} className="collab-link" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            ResearchGate
          </a>
        </div>
      </div>
    </section>
  );
}
