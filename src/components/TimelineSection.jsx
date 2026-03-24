import { timelineItems } from "../data/professorData";

const TYPE_MAP = {
  publication: { dotClass: "cyan", badgeClass: "publication" },
  conference: { dotClass: "purple", badgeClass: "conference" },
  award: { dotClass: "gold", badgeClass: "award" },
  affiliation: { dotClass: "green", badgeClass: "affiliation" },
};

export default function TimelineSection() {
  return (
    <section className="portfolio-section" id="timeline">
      <div className="section-header">
        <p className="section-label">Milestones</p>
        <h2 className="section-title">Academic Journey</h2>
        <p className="section-subtitle">
          Key milestones across research, academia, and professional recognition
        </p>
      </div>

      <div className="timeline">
        {timelineItems.map((item, idx) => {
          const typeInfo = TYPE_MAP[item.type] || TYPE_MAP.publication;
          return (
            <div
              key={item.id}
              className="timeline-item reveal"
              style={{ transitionDelay: `${idx * 0.06}s` }}
            >
              <div className={`timeline-dot ${typeInfo.dotClass}`} />
              <span className="timeline-date">
                {item.month} {item.year}
              </span>
              <span className={`timeline-type-badge ${typeInfo.badgeClass}`}>
                {item.type}
              </span>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-desc">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
