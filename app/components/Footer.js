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
      <div className={`container ${styles.grid}`}>
        <div className={styles.about}>
          <div className={styles.logoText}>
            <span className={styles.logoDot}>■</span> Qiprah Multi Service
          </div>
          <p>PT Qiprah Multi Service adalah perusahaan penyedia jasa alih daya yang berdiri sejak 2016, berkomitmen untuk menjadi solusi partner terpercaya.</p>
          <div className={styles.social}>
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="LinkedIn">💼</a>
            <a href="#" aria-label="WhatsApp">💬</a>
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
