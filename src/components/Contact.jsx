import { useState, useRef, useEffect } from 'react';
import { professorProfile } from '../data/professorData';

export default function Contact() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section py-[90px] px-6 md:px-12">
      <div ref={sectionRef} className={`max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[60px] fade-section ${visible ? 'visible' : ''}`}>
        
        {/* Left Info */}
        <div>
          <h2 className="font-heading text-[2rem] text-white font-bold mb-4">
            Open to <span className="text-gold-light">Collaboration</span>
          </h2>
          <p className="text-[0.95rem] text-white/70 leading-[1.7] mb-7">
            I welcome inquiries from researchers, industry professionals, and prospective academic candidates. My group actively collaborates on problems in machine learning, biomedical AI, and computer vision. If your interests align, I would be delighted to hear from you.
          </p>
          
          <div className="flex flex-col gap-3.5">
            <div className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] text-gold shrink-0 mt-[2px]">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <div className="text-[0.88rem] text-white/75 leading-[1.5]">
                <strong>{professorProfile.email}</strong>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] text-gold shrink-0 mt-[2px]">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <div className="text-[0.88rem] text-white/75 leading-[1.5]">
                {professorProfile.office}
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] text-gold shrink-0 mt-[2px]">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <div className="text-[0.88rem] text-white/75 leading-[1.5]">
                <strong>Phone:</strong> {professorProfile.phone}
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-navy-light/20 p-6 md:p-8 rounded-[12px] border border-white/10">
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.78rem] text-white/60 uppercase tracking-[0.04em] font-medium">Full Name</label>
            <input 
              type="text" 
              required
              className="contact-input" 
              placeholder="Your full name"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.78rem] text-white/60 uppercase tracking-[0.04em] font-medium">Email Address</label>
            <input 
              type="email" 
              required
              className="contact-input" 
              placeholder="your@email.com"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.78rem] text-white/60 uppercase tracking-[0.04em] font-medium">Subject</label>
            <select 
              required
              className="contact-input"
              value={formData.subject}
              onChange={e => setFormData({...formData, subject: e.target.value})}
            >
              <option value="" disabled hidden>Select a subject…</option>
              <option className="bg-navy text-white" value="collaboration">Research Collaboration</option>
              <option className="bg-navy text-white" value="phd">PhD Inquiry</option>
              <option className="bg-navy text-white" value="media">Media / Speaking</option>
              <option className="bg-navy text-white" value="other">Other</option>
            </select>
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.78rem] text-white/60 uppercase tracking-[0.04em] font-medium">Message</label>
            <textarea 
              required
              className="contact-input resize-y min-h-[120px]" 
              placeholder="Describe your inquiry or collaboration proposal…"
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
            />
          </div>
          
          <div className="mt-2">
            <button type="submit" className="send-btn">
              Send Message →
            </button>
          </div>
          
          {submitted && (
            <div className="mt-3 p-3 bg-green/20 border border-green/40 rounded-lg text-[#80ffb0] text-[0.88rem]">
              ✓ Thank you! Your message has been sent. I'll respond within 2–3 business days.
            </div>
          )}
        </form>
        
      </div>
    </section>
  );
}
