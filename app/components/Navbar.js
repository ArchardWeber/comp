'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MenuIcon, CloseIcon, ChevronDownIcon } from './Icons';
import styles from './Navbar.module.css';

const menuItems = [
  { label: 'Beranda', href: '/' },
  {
    label: 'Tentang Kami', href: '/tentang-kami',
    children: [
      { label: 'Profil Perusahaan', href: '/tentang-kami#profil' },
      { label: 'Visi & Misi', href: '/tentang-kami#visi-misi' },
      { label: 'Struktur Organisasi', href: '/tentang-kami#struktur' },
    ],
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
    ],
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
  const [mobileExpanded, setMobileExpanded] = useState(null);

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
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <img src="/images/logo.jpg" alt="PT Qiprah Multi Service" />
        </Link>

        {/* Desktop menu */}
        <ul className={styles.menu}>
          {menuItems.map((item) => (
            <li
              key={item.label}
              className={`${styles.menuItem} ${item.children ? styles.hasDropdown : ''} ${isActive(item.href) ? styles.active : ''}`}
              onMouseEnter={() => item.children && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href={item.href}>
                {item.label}
                {item.children && (
                  <ChevronDownIcon size={14} className={styles.chevron} />
                )}
              </Link>
              {item.children && (
                <div className={`${styles.dropdown} ${activeDropdown === item.label ? styles.dropdownOpen : ''}`}>
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

        {/* Desktop CTA */}
        <Link href="/kontak" className={styles.ctaBtn}>
          Hubungi Kami
        </Link>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(true)}
          aria-label="Buka menu"
        >
          <MenuIcon size={24} />
        </button>
      </div>

      {/* Mobile overlay backdrop */}
      {mobileOpen && (
        <div className={styles.overlay} onClick={closeMobile} aria-hidden="true" />
      )}

      {/* Mobile menu panel */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileOpen : ''}`}>
        <div className={styles.mobileHeader}>
          <Link href="/" className={styles.mobileLogo} onClick={closeMobile}>
            <img src="/images/logo.jpg" alt="PT Qiprah Multi Service" />
          </Link>
          <button
            className={styles.closeBtn}
            onClick={closeMobile}
            aria-label="Tutup menu"
          >
            <CloseIcon size={22} />
          </button>
        </div>

        <div className={styles.mobileNav}>
          {menuItems.map((item) => (
            <div key={item.label} className={styles.mobileItem}>
              {item.children ? (
                <>
                  <button
                    className={`${styles.mobileParent} ${isActive(item.href) ? styles.mobileActive : ''}`}
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                    <ChevronDownIcon
                      size={16}
                      className={`${styles.mobileChevron} ${mobileExpanded === item.label ? styles.mobileChevronOpen : ''}`}
                    />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className={styles.mobileSubMenu}>
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={styles.mobileSubItem}
                          onClick={closeMobile}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`${styles.mobileLink} ${isActive(item.href) ? styles.mobileActive : ''}`}
                  onClick={closeMobile}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className={styles.mobileCta}>
          <Link href="/kontak" className={styles.ctaBtn} onClick={closeMobile}>
            Hubungi Kami
          </Link>
        </div>
      </div>
    </nav>
  );
}
