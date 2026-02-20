import Link from 'next/link';
import styles from './Footer.module.css';

const quickLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Kami', href: '/tentang-kami' },
  { label: 'Layanan', href: '/layanan' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'Berita', href: '/berita' },
  { label: 'Karir', href: '/karir' },
];

const layananLinks = [
  { label: 'Jasa Kebersihan', href: '/layanan/jasa-kebersihan' },
  { label: 'Jasa Keamanan', href: '/layanan/jasa-keamanan' },
  { label: 'Supporting Service', href: '/layanan/supporting-service' },
  { label: 'Pemborongan', href: '/layanan/pemborongan' },
  { label: 'Parkir Division', href: '/layanan/parkir' },
  { label: 'Maintenance Building', href: '/layanan/maintenance' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Wave separator */}
      <div className={styles.wave} aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 40C360 80 720 0 1080 40C1260 60 1380 20 1440 40V80H0V40Z" fill="#1E2030"/>
        </svg>
      </div>
      <div className={`container ${styles.grid}`}>
        <div className={styles.about}>
          <div className={styles.logoText}>
            <span className={styles.logoDot}>■</span> Qiprah Multi Service
          </div>
          <p>PT Qiprah Multi Service adalah perusahaan penyedia jasa alih daya yang berdiri sejak 2016, berkomitmen untuk menjadi solusi partner terpercaya.</p>
          <div className={styles.social}>
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://wa.me/6281234567890" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>
        <div className={styles.column}>
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map(link => (
              <li key={link.label}><Link href={link.href}>{link.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Layanan</h4>
          <ul>
            {layananLinks.map(link => (
              <li key={link.label}><Link href={link.href}>{link.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Kontak</h4>
          <ul>
            <li>📍 Jl. Basudewa Raya No 3a, Semarang</li>
            <li>📞 (024) 7654-321</li>
            <li>✉️ info@qms.co.id</li>
            <li>🕐 Senin - Jumat, 08:00 - 17:00</li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          <p>© {new Date().getFullYear()} PT Qiprah Multi Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
