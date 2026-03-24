import { professorProfile } from '../data/professorData';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="max-w-[1200px] mx-auto">
        © {new Date().getFullYear()} {professorProfile.name} · {professorProfile.university.split(',')[0]} · All rights reserved · Built with care for academic excellence
      </div>
    </footer>
  );
}
