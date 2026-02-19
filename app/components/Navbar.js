'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Navbar.module.css';

const menuItems = [
  { label: 'Beranda', href: '/' },
  {
    label: 'Tentang Kami', href: '/tentang-kami',
    children: [
      { label: 'Profil Perusahaan', href: '/tentang-kami#profil' },
      { label: 'Visi & Misi', href: '/tentang-kami#visi-misi' },
      { label: 'Struktur Organisasi', href: '/tentang-kami#struktur' },
    ]
  },
  {
    label: 'Layanan', href: '/layanan',
    children: [
      { label: 'Jasa Kebersihan', href: '/layanan/jasa-kebersihan' },
      { label: 'Jasa Keamanan', href: '/layanan/jasa-keamanan' },
      { label: 'Supporting Service', href: '/layanan/supporting-service' },
      { label: 'Pemborongan', href: '/layanan/pemborongan' },
      { label: 'Parkir Division', href: '/layanan/parkir' },
      { label: 'Maintenance Building', href: '/layanan/maintenance' },
    ]
  },
  { label: 'Galeri', href: '/galeri' },
  { label: 'Berita', href: '/berita' },
  { label: 'Karir', href: '/karir' },
  { label: 'Kontak', href: '/kontak' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <img src="/images/logo.jpg" alt="QMS Logo" />
        </Link>

        <ul className={styles.menu}>
          {menuItems.map((item) => (
            <li
              key={item.label}
              className={`${styles.menuItem} ${item.children ? styles.hasDropdown : ''} ${isActive(item.href) ? styles.active : ''}`}
              onMouseEnter={() => item.children && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href={item.href}>{item.label}</Link>
              {item.children && activeDropdown === item.label && (
                <div className={styles.dropdown}>
                  {item.children.map((child) => (
                    <Link key={child.label} href={child.href} className={styles.dropdownItem}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <Link href="/kontak" className={`btn btn-primary ${styles.ctaBtn}`}>
          Hubungi Kami
        </Link>

        <button className={styles.hamburger} onClick={() => setMobileOpen(true)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>

      {mobileOpen && <div className={styles.overlay} onClick={() => setMobileOpen(false)} />}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileOpen : ''}`}>
        <button className={styles.closeBtn} onClick={() => setMobileOpen(false)}>✕</button>
        <div className={styles.mobileLogo}>
          <img src="/images/logo.jpg" alt="QMS Logo" />
        </div>
        {menuItems.map((item) => (
          <div key={item.label} className={`${styles.mobileItem} ${isActive(item.href) ? styles.mobileActive : ''}`}>
            <Link href={item.href} onClick={() => !item.children && setMobileOpen(false)}>
              {item.label}
            </Link>
            {item.children && (
              <div className={styles.mobileSubMenu}>
                {item.children.map((child) => (
                  <Link key={child.label} href={child.href} onClick={() => setMobileOpen(false)}>
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <Link href="/kontak" className={`btn btn-primary ${styles.mobileCta}`} onClick={() => setMobileOpen(false)}>
          Hubungi Kami
        </Link>
      </div>
    </nav>
  );
}
