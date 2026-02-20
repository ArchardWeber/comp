'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import ClientMarquee from '../components/ClientMarquee';
import { galleryImages } from '../data/news';
import styles from './page.module.css';

const categories = ['Semua', 'Kegiatan', 'Training', 'Gathering', 'Lapangan'];

export default function GaleriPage() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [lightboxImg, setLightboxImg] = useState(null);

  const filtered = activeCategory === 'Semua'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Beranda</Link><span>›</span><span className="current">Galeri &amp; Klien</span>
          </div>
          <h1>Galeri &amp; Dokumentasi</h1>
          <p>Lihat kegiatan dan aktivitas tim QMS</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.tabs}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`${styles.tab} ${activeCategory === cat ? styles.tabActive : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className={styles.gallery}>
            {filtered.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className={styles.galleryItem} onClick={() => setLightboxImg(img.src)}>
                  <img src={img.src} alt={img.caption} />
                  <div className={styles.galleryCaption}>{img.caption}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Klien &amp; Partner Kami</h2>
            <p>Dipercaya oleh berbagai perusahaan di Indonesia</p>
            <div className="line"></div>
          </div>
        </div>
        <ClientMarquee large />
      </section>

      {lightboxImg && (
        <div className="lightbox-overlay" onClick={() => setLightboxImg(null)}>
          <button className="lightbox-close" onClick={() => setLightboxImg(null)}>✕</button>
          <img src={lightboxImg} alt="Preview" />
        </div>
      )}
    </>
  );
}
