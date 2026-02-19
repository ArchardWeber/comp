'use client';
import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import ServiceIcon from '../components/ServiceIcon';
import { services } from '../data/services';
import styles from './page.module.css';

export default function LayananPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Beranda</Link><span>›</span><span className="current">Layanan</span>
          </div>
          <h1>Layanan Kami</h1>
          <p>Solusi lengkap untuk kebutuhan operasional dan pemeliharaan fasilitas</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {services.map((svc, i) => (
              <ScrollReveal key={svc.slug} delay={i * 0.08}>
                <Link href={`/layanan/${svc.slug}`} className={styles.card}>
                  <div className={styles.thumb}>
                    <img src={svc.images[0]} alt={svc.title} />
                    <div className={styles.thumbOverlay}></div>
                    <div className={styles.iconFloat}>
                      <ServiceIcon slug={svc.slug} size={24} color="#E31E24" />
                    </div>
                  </div>
                  <div className={styles.body}>
                    <h3>{svc.title}</h3>
                    <p>{svc.shortDesc}</p>
                    <span className={styles.link}>Selengkapnya →</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Butuh Layanan Khusus?</h2>
          <p>Konsultasikan kebutuhan Anda dengan tim kami untuk solusi yang tepat</p>
          <Link href="/kontak" className="btn btn-primary">Hubungi Kami</Link>
        </div>
      </section>
    </>
  );
}
