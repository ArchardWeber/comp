'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import ScrollReveal from '../../components/ScrollReveal';
import ServiceIcon from '../../components/ServiceIcon';
import { services } from '../../data/services';
import styles from './page.module.css';

export default function LayananDetail() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);
  const [lightboxImg, setLightboxImg] = useState(null);

  if (!service) return (
    <section className="page-header"><div className="container"><h1>Layanan tidak ditemukan</h1></div></section>
  );

  return (
    <>
      <section className={styles.hero} style={{ backgroundImage: `url(${service.images[0]})` }}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className="breadcrumb" style={{ justifyContent: 'flex-start' }}>
            <Link href="/">Beranda</Link><span>›</span><Link href="/layanan">Layanan</Link><span>›</span><span className="current">{service.title}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '56px', height: '56px', background: 'rgba(255,255,255,0.9)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ServiceIcon slug={service.slug} size={28} color="#E31E24" />
            </div>
            <h1>{service.title}</h1>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.detailGrid}>
            <ScrollReveal>
              <div>
                <h2>Tentang Layanan</h2>
                <p style={{ lineHeight: '1.8', marginTop: '16px' }}>{service.fullDesc}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className={styles.highlights}>
                <h3>Keunggulan Kami</h3>
                <ul>
                  {service.highlights.map((h, i) => (
                    <li key={i}>
                      <span className={styles.checkIcon}>✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <h2>Galeri {service.title}</h2>
            <div className="line"></div>
          </div>
          <div className={styles.gallery}>
            {service.images.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={styles.galleryItem} onClick={() => setLightboxImg(img)}>
                  <img src={img} alt={`${service.title} ${i + 1}`} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Tertarik dengan layanan ini?</h2>
          <p>Hubungi kami untuk informasi lebih lanjut dan penawaran terbaik</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/kontak" className="btn btn-primary">Hubungi Kami</Link>
            <Link href="/layanan" className="btn btn-outline">Lihat Layanan Lain →</Link>
          </div>
        </div>
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
