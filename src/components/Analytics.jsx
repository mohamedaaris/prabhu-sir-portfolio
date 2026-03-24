import { useEffect, useRef, useState } from 'react';
import {
  BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { publicationsByYear, citationsByYear, journals } from '../data/professorData';

const CustomTooltip = ({ active, payload, label, type }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-border rounded-lg px-4 py-3 shadow-lg text-sm">
        <p className="text-text-muted mb-1">{label}</p>
        <p className="text-navy font-bold">
          {payload[0].value.toLocaleString()} {type === 'pub' ? 'publications' : 'citations'}
        </p>
      </div>
    );
  }
  return null;
};

export default function Analytics() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Find most cited paper and top journal
  const allPapers = journals.flatMap(j => j.papers.map(p => ({ ...p, journalName: j.name })));
  const mostCited = allPapers.reduce((top, p) => p.citations > top.citations ? p : top, allPapers[0]);
  const topJournal = journals.reduce((top, j) => j.impactFactor > top.impactFactor ? j : top, journals[0]);
  const totalPapers = allPapers.length;

  return (
    <section id="publications" className="py-[90px] px-6 md:px-12 bg-bg">
      <div ref={sectionRef} className={`max-w-[1200px] mx-auto fade-section ${visible ? 'visible' : ''}`}>
        <div className="mb-[52px]">
          <div className="section-label">Research Output</div>
          <h2 className="section-title">Publications Overview</h2>
          <div className="divider" />
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-7 mb-9">
          <div className="chart-card">
            <h3 className="font-heading text-base text-navy mb-5 font-semibold">Publications Per Year</h3>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={publicationsByYear} barSize={28}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0ede8" vertical={false} />
                  <XAxis dataKey="year" tickFormatter={v => `'${String(v).slice(2)}`} stroke="#6b7280" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="#6b7280" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip content={<CustomTooltip type="pub" />} cursor={{ fill: 'rgba(13,43,82,0.04)' }} />
                  <Bar dataKey="count" fill="#1d5096" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="chart-card">
            <h3 className="font-heading text-base text-navy mb-5 font-semibold">Cumulative Citations</h3>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={citationsByYear}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0ede8" vertical={false} />
                  <XAxis dataKey="year" tickFormatter={v => `'${String(v).slice(2)}`} stroke="#6b7280" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="#6b7280" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip content={<CustomTooltip type="cit" />} cursor={{ stroke: 'rgba(200,137,58,0.3)' }} />
                  <defs>
                    <linearGradient id="citGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#c8893a" stopOpacity={0.2} />
                      <stop offset="100%" stopColor="#c8893a" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="citations"
                    stroke="#c8893a"
                    strokeWidth={2.5}
                    fill="url(#citGrad)"
                    dot={{ fill: '#c8893a', strokeWidth: 0, r: 3.5 }}
                    activeDot={{ r: 5.5, fill: '#c8893a' }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="metric-card">
            <div className="text-2xl mb-2.5">📄</div>
            <div className="font-heading text-[1.05rem] text-navy font-bold mb-1 leading-snug">
              "{mostCited.title.slice(0, 55)}…"
            </div>
            <div className="text-[0.78rem] text-text-muted uppercase tracking-wide">
              Most Cited ({mostCited.citations} citations)
            </div>
          </div>
          <div className="metric-card">
            <div className="text-2xl mb-2.5">🏆</div>
            <div className="font-heading text-[1.15rem] text-navy font-bold mb-1">{topJournal.name.split(' ').slice(0, 3).join(' ')}</div>
            <div className="text-[0.78rem] text-text-muted uppercase tracking-wide">Top Journal (IF {topJournal.impactFactor})</div>
          </div>
          <div className="metric-card">
            <div className="text-2xl mb-2.5">📚</div>
            <div className="font-heading text-[1.15rem] text-navy font-bold mb-1">{journals.length}</div>
            <div className="text-[0.78rem] text-text-muted uppercase tracking-wide">Unique Journals</div>
          </div>
          <div className="metric-card">
            <div className="text-2xl mb-2.5">🌍</div>
            <div className="font-heading text-[1.15rem] text-navy font-bold mb-1">{totalPapers}+</div>
            <div className="text-[0.78rem] text-text-muted uppercase tracking-wide">Total Publications</div>
          </div>
        </div>
      </div>
    </section>
  );
}
