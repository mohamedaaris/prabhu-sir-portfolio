import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { timelineItems } from "../data/professorData";

const TYPE_ICONS = {
  publication: "📄",
  conference: "🎙️",
  award: "🏆",
  affiliation: "🔗",
};

export default function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIdx, setHoveredIdx] = useState(-1);

  return (
    <section className="portfolio-section" id="timeline" ref={ref}>
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }} 
        animate={isInView ? { opacity: 1, y: 0 } : {}} 
        transition={{ duration: 0.5 }}
      >
        <p className="section-label">Milestones</p>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20, filter: "blur(5px)" }} 
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}} 
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Academic Journey
        </motion.h2>
        <p className="section-subtitle">
          Key milestones across research, academia, and professional recognition
        </p>
      </motion.div>

      <div className="relative max-w-3xl mx-auto py-10">
        <motion.div 
          className="absolute left-[38px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
          initial={{ scaleY: 0, transformOrigin: 'top' }} 
          animate={isInView ? { scaleY: 1 } : {}} 
          transition={{ duration: 2, ease: 'easeOut' }} 
        />

        {/* Flowing data particles */}
        {isInView && [0, 1, 2].map((i) => (
          <motion.div 
            key={i}
            style={{
              position: 'absolute', 
              left: 36 + (i * 1.5), 
              width: 5 - i, 
              height: 5 - i,
              borderRadius: '50%', 
              background: i === 0 ? '#00f5ff' : i === 1 ? '#b946ff' : '#4d7cff',
              boxShadow: `0 0 ${10 - i * 2}px ${i === 0 ? '#00f5ff' : i === 1 ? '#b946ff' : '#4d7cff'}`, 
              zIndex: 3,
            }}
            animate={{ top: ['0%', '100%'], opacity: [0, 0.9, 0.9, 0] }}
            transition={{ duration: 4 + i * 2, repeat: Infinity, ease: 'linear', delay: i * 1.5 }}
          />
        ))}

        {timelineItems.map((item, i) => {
          const icon = TYPE_ICONS[item.type] || "📍";
          const color = item.color || "#00f5ff";

          return (
            <motion.div 
              key={item.id} 
              className="relative mb-24 flex"
              initial={{ opacity: 0, x: -60 }} 
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.25, duration: 0.7, type: 'spring', stiffness: 80 }}
              onMouseEnter={() => setHoveredIdx(i)} 
              onMouseLeave={() => setHoveredIdx(-1)}
            >
              {/* Circular icon node */}
              <motion.div
                style={{
                  position: 'absolute', left: 23, top: 16, width: 32, height: 32, borderRadius: '50%',
                  border: `2px solid ${color}`, background: `radial-gradient(circle, ${color}30, rgba(10,10,26,0.95) 70%)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', zIndex: 10,
                  boxShadow: hoveredIdx === i ? `0 0 20px ${color}60, 0 0 40px ${color}25` : `0 0 8px ${color}20`,
                  transition: 'box-shadow 0.3s',
                }}
                initial={{ scale: 0 }} 
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.25, type: 'spring' }}
                whileHover={{ scale: 1.3 }}
              >
                {icon}
                {hoveredIdx === i && (
                  <motion.div
                    animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    style={{ position: 'absolute', inset: -4, borderRadius: '50%', border: `1px solid ${color}` }}
                  />
                )}
              </motion.div>

              {/* Content Card */}
              <motion.div
                style={{
                  marginLeft: 80, padding: '1.4rem',
                  background: hoveredIdx === i ? `linear-gradient(135deg, rgba(10,20,45,0.8), ${color}15)` : 'linear-gradient(135deg, rgba(10,20,45,0.4), rgba(10,20,45,0.1))',
                  border: `1px solid ${hoveredIdx === i ? color + '50' : 'rgba(255,255,255,0.08)'}`,
                  borderRadius: '16px', position: 'relative', overflow: 'hidden', transition: 'all 0.4s ease',
                  flex: 1,
                  backdropFilter: 'blur(10px)',
                  boxShadow: hoveredIdx === i ? `0 10px 30px rgba(0,0,0,0.5), 0 0 20px ${color}20` : '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}
                whileHover={{ x: 8 }} 
                transition={{ duration: 0.3 }}
              >
                <div style={{ position: 'absolute', left: 0, top: '10%', bottom: '10%', width: 2, background: `linear-gradient(180deg, transparent, ${color}, transparent)`, opacity: hoveredIdx === i ? 0.8 : 0.3, transition: 'opacity 0.3s' }} />
                {hoveredIdx === i && (
                  <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} style={{ position: 'absolute', top: 0, left: 0, height: 1, background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
                )}
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs tracking-wider font-bold" style={{ color: color }}>{item.month} {item.year}</span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] tracking-widest uppercase bg-white/5 border border-white/10 text-white/60">{item.type}</span>
                </div>
                <h3 className="text-[1.1rem] font-heading text-white mb-2 leading-snug">{item.title}</h3>
                <p className="text-[0.85rem] leading-relaxed text-white/70">{item.description}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
