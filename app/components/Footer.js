import Link from 'next/link';
import {
  PhoneIcon,
  EmailIcon,
  LocationIcon,
  ClockIcon,
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon,
  ChevronRightIcon,
} from './Icons';
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

const contactItems = [
  {
    icon: <LocationIcon size={16} />,
    text: 'Jl. Basudewa Raya No 3a, Semarang',
  },
  {
    icon: <PhoneIcon size={16} />,
    text: '(024) 7654-321',
    href: 'tel:0247654321',
  },
  {
    icon: <EmailIcon size={16} />,
    text: 'info@qms.co.id',
    href: 'mailto:info@qms.co.id',
  },
  {
    icon: <ClockIcon size={16} />,
    text: 'Senin - Jumat, 08:00 - 17:00',
  },
];

export default function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Col 1 - About */}
          <div className={styles.about}>
            <div className={styles.logoText}>
              <span className={styles.logoDot}>&#9632;</span> Qiprah Multi Service
            </div>
            <p>
              PT Qiprah Multi Service adalah perusahaan penyedia jasa alih daya yang
              berdiri sejak 2016, berkomitmen menjadi solusi partner terpercaya bagi
              mitra bisnis Anda.
            </p>
            <div className={styles.social}>
              <a href="#" aria-label="Instagram" className={styles.socialLink}>
                <InstagramIcon size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className={styles.socialLink}>
                <LinkedInIcon size={18} />
              </a>
              <a
                href="https://wa.me/6281234567890"
                aria-label="WhatsApp"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>

          {/* Col 2 - Quick Links */}
          <div className={styles.column}>
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Layanan */}
          <div className={styles.column}>
            <h4>Layanan</h4>
            <ul>
              {layananLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Contact */}
          <div className={styles.column}>
            <h4>Kontak</h4>
            <div className={styles.contactList}>
              {contactItems.map((item, i) =>
                item.href ? (
                  <a key={i} href={item.href} className={styles.contactItem}>
                    <span className={styles.contactIcon}>{item.icon}</span>
                    <span>{item.text}</span>
                  </a>
                ) : (
                  <div key={i} className={styles.contactItem}>
                    <span className={styles.contactIcon}>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p>
            &copy; {new Date().getFullYear()} PT Qiprah Multi Service. All rights
            reserved.
          </p>
          <button
            className={styles.backToTop}
            onClick={handleBackToTop}
            aria-label="Kembali ke atas"
          >
            <ChevronRightIcon size={18} style={{ transform: 'rotate(-90deg)' }} />
          </button>
        </div>
      </div>
    </footer>
  );
}
