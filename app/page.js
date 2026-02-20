'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import ScrollReveal from './components/ScrollReveal';
import ClientMarquee from './components/ClientMarquee';
import ServiceIcon from './components/ServiceIcon';
import { services } from './data/services';
import styles from './page.module.css';

function StatCounter({ end, label, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 2000;
        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * end));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className={styles.statCard}>
      <div className={styles.statNumber}>{count}{suffix}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

function YouTubeEmbed({ videoId }) {
  const [loaded, setLoaded] = useState(false);
  const thumbUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  if (!loaded) {
    return (
      <div className={styles.videoFacade} onClick={() => setLoaded(true)}>
        <img src={thumbUrl} alt="Video Profil QMS" />
        <div className={styles.playButton}>
          <svg width="48" height="48" viewBox="0 0 68 48">
            <path d="M66.5 7.7s-.7-4.7-2.8-6.8C60.7-2 57.2-2 55.6-2.2 46.5-3 34-3 34-3s-12.5 0-21.6.8c-1.6.2-5.1.2-8.1 3.2C2.2 3 1.5 7.7 1.5 7.7S.8 13.2.8 18.7v5.1c0 5.5.7 11 .7 11s.7 4.7 2.8 6.8c3 3.2 7 3.1 8.8 3.4 6.4.6 27.2.9 27.2.9s12.5 0 21.6-.8c1.6-.2 5.1-.2 8.1-3.2 2.1-2.1 2.8-6.8 2.8-6.8s.7-5.5.7-11v-5.1c0-5.5-.7-11-.7-11z" fill="#E31E24"/>
            <path d="M27 33V14l18.5 9.5L27 33z" fill="white"/>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <iframe
      className={styles.videoIframe}
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
      title="Video Profil QMS"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

const whyItems = [
  { title: 'Berpengalaman Sejak 2016', desc: 'Lebih dari 8 tahun mengelola fasilitas di berbagai sektor industri.' },
  { title: 'SDM Terlatih & Bersertifikat', desc: 'Seluruh personel melalui pelatihan intensif dan memiliki sertifikat resmi.' },
  { title: 'Peralatan Modern', desc: 'Menggunakan peralatan berteknologi tinggi dan bahan ramah lingkungan.' },
  { title: 'Layanan Terintegrasi', desc: 'Solusi terpadu dari satu pintu — cepat, tepat, dan terukur.' },
  { title: 'Dipercaya 50+ Perusahaan', desc: 'Klien dari sektor perbankan, kesehatan, manufaktur, dan properti.' },
];

const workSteps = [
  { num: '01', title: 'Konsultasi', desc: 'Diskusi mendalam tentang kebutuhan operasional dan fasilitas perusahaan Anda.' },
  { num: '02', title: 'Survey & Analisa', desc: 'Tim kami melakukan survei lapangan dan analisis kebutuhan secara menyeluruh.' },
  { num: '03', title: 'Implementasi', desc: 'Penempatan SDM terlatih dan peralatan sesuai standar yang disepakati.' },
  { num: '04', title: 'Monitoring & Evaluasi', desc: 'Pemantauan berkala dan laporan performa untuk memastikan kualitas terjaga.' },
];

const certItems = [
  { icon: '📋', title: 'ISO 9001:2015', desc: 'Sistem Manajemen Mutu' },
  { icon: '🏛️', title: 'Badan Hukum PT', desc: 'Legalitas Perusahaan' },
  { icon: '💪', title: 'BPJS Ketenagakerjaan', desc: 'Jaminan Tenaga Kerja' },
  { icon: '🏥', title: 'BPJS Kesehatan', desc: 'Jaminan Kesehatan' },
  { icon: '🤝', title: 'APJASI', desc: 'Asosiasi Outsourcing' },
];

const testimonials = [
  {
    quote: 'QMS memberikan pelayanan yang sangat profesional. Tim mereka responsif dan selalu menjaga standar kebersihan yang tinggi.',
    name: 'Budi Santoso',
    company: 'PT Mitra Sejahtera',
    role: 'General Manager',
  },
  {
    quote: 'Sejak bermitra dengan QMS, operasional gedung kami menjadi jauh lebih efisien. Sangat merekomendasikan layanan mereka.',
    name: 'Siti Rahayu',
    company: 'RS Harapan Bunda',
    role: 'Facility Manager',
  },
  {
    quote: 'Tenaga security dari QMS sangat terlatih dan disiplin. Kami merasa aman dan nyaman bekerja sama dengan mereka.',
    name: 'Ahmad Wijaya',
    company: 'Bank Nusantara',
    role: 'Head of Operations',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero + Stats */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <ScrollReveal>
              <p className={styles.heroTagline}>Outsourcing & Facility Management</p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <h1>Solusi <span className={styles.highlight}>Partner Terpercaya</span> untuk Pengelolaan Fasilitas Terintegrasi</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className={styles.heroSub}>
                PT Qiprah Multi Service menyediakan layanan kebersihan, keamanan, dan pemeliharaan gedung 
                dengan SDM profesional bersertifikat. <strong>Attitude for Success.</strong>
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.45}>
              <div className={styles.heroBtns}>
                <Link href="/kontak" className="btn btn-primary">Hubungi Kami</Link>
                <Link href="/layanan" className="btn btn-outline">Lihat Layanan</Link>
              </div>
            </ScrollReveal>
          </div>

          <div className={styles.statsBar}>
            <StatCounter end={8} label="Tahun Berpengalaman" suffix="+" />
            <StatCounter end={50} label="Klien Aktif" suffix="+" />
            <StatCounter end={500} label="Tenaga Kerja" suffix="+" />
            <StatCounter end={6} label="Layanan Tersedia" />
          </div>
        </div>
      </section>

      {/* Company Intro with Video */}
      <section className="section">
        <div className="container">
          <div className={styles.introGrid}>
            <ScrollReveal direction="left">
              <div className={styles.videoWrapper}>
                <YouTubeEmbed videoId="dQw4w9WgXcQ" />
              </div>
            </ScrollReveal>
            <div className={styles.introText}>
              <ScrollReveal>
                <span className={styles.sectionTag}>TENTANG KAMI</span>
                <h2>PT Qiprah Multi Service</h2>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  Perusahaan penyedia jasa alih daya (outsourcing) yang bergerak di semua aspek operasional 
                  dan pemeliharaan fasilitas. Berkantor pusat di Semarang, kami melayani berbagai sektor 
                  perusahaan mulai dari perbankan, kesehatan, manufaktur, hingga properti.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p>
                  Dengan semboyan <strong>"Attitude for Success"</strong>, kami mengutamakan profesionalisme, 
                  integritas, dan kualitas layanan. Dipercaya lebih dari 50 perusahaan dengan 500+ tenaga kerja terlatih.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.45}>
                <Link href="/tentang-kami" className="btn btn-ghost" style={{ paddingLeft: 0 }}>
                  Selengkapnya tentang QMS →
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <h2>Layanan Kami</h2>
            <p>Solusi lengkap untuk kebutuhan operasional dan pemeliharaan fasilitas Anda</p>
            <div className="line"></div>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((svc, i) => (
              <ScrollReveal key={svc.slug} delay={i * 0.08}>
                <Link href={`/layanan/${svc.slug}`} className={styles.serviceCard}>
                  <div className={styles.serviceThumb}>
                    <img src={svc.images[0]} alt={svc.title} loading="lazy" />
                    <div className={styles.serviceIconBadge}>
                      <ServiceIcon slug={svc.slug} size={22} color="#E31E24" />
                    </div>
                  </div>
                  <div className={styles.serviceBody}>
                    <h3>{svc.title}</h3>
                    <p>{svc.shortDesc}</p>
                    <span className={styles.serviceLink}>Selengkapnya →</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/layanan" className="btn btn-outline">Lihat Semua Layanan</Link>
          </div>
        </div>
      </section>

      {/* Why QMS - Image + Feature List */}
      <section className="section">
        <div className="container">
          <div className={styles.whyLayout}>
            <ScrollReveal direction="left">
              <div className={styles.whyImage}>
                <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&h=500&fit=crop" alt="Tim QMS" loading="lazy" />
                <div className={styles.whyBadge}>
                  <span className={styles.whyBadgeNum}>50+</span>
                  <span>Perusahaan Mempercayai Kami</span>
                </div>
              </div>
            </ScrollReveal>
            <div className={styles.whyContent}>
              <ScrollReveal>
                <span className={styles.sectionTag}>KEUNGGULAN</span>
                <h2>Mengapa Memilih QMS?</h2>
              </ScrollReveal>
              <div className={styles.whyList}>
                {whyItems.map((item, i) => (
                  <ScrollReveal key={item.title} delay={i * 0.1}>
                    <div className={styles.whyItem}>
                      <div className={styles.whyCheck}>✓</div>
                      <div>
                        <strong>{item.title}</strong>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proses Kerja */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <h2>Proses Kerja Kami</h2>
            <p>Langkah sistematis untuk memastikan layanan terbaik bagi Anda</p>
            <div className="line"></div>
          </div>
          <div className={styles.stepsGrid}>
            {workSteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.12}>
                <div className={styles.stepCard}>
                  <div className={styles.stepNum}>{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                  {i < workSteps.length - 1 && <div className={styles.stepArrow}>→</div>}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sertifikasi & Legalitas */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Sertifikasi & Legalitas</h2>
            <p>Beroperasi dengan standar dan legalitas yang terpercaya</p>
            <div className="line"></div>
          </div>
          <div className={styles.certGrid}>
            {certItems.map((cert, i) => (
              <ScrollReveal key={cert.title} delay={i * 0.1}>
                <div className={styles.certCard}>
                  <div className={styles.certIcon}>{cert.icon}</div>
                  <h4>{cert.title}</h4>
                  <p>{cert.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <h2>Testimoni Klien</h2>
            <p>Apa kata mereka yang telah bermitra dengan QMS</p>
            <div className="line"></div>
          </div>
          <div className={styles.testimoniGrid}>
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.12}>
                <div className={styles.testimoniCard}>
                  <div className={styles.quoteIcon}>"</div>
                  <p className={styles.quoteText}>{t.quote}</p>
                  <div className={styles.quoteAuthor}>
                    <div className={styles.quoteAvatar}>{t.name ? t.name[0] : '?'}</div>
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.role}, {t.company}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Client Marquee */}
      <section className={`section ${styles.clientSection}`}>
        <div className="container">
          <div className="section-heading">
            <h2>Dipercaya oleh Perusahaan Terkemuka</h2>
            <p>Klien kami tersebar di berbagai sektor industri di Indonesia</p>
            <div className="line"></div>
          </div>
        </div>
        <ClientMarquee />
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2>Tertarik Bermitra dengan Kami?</h2>
          <p>Tim kami siap membantu kebutuhan operasional perusahaan Anda</p>
          <Link href="/kontak" className="btn btn-primary">Hubungi Kami</Link>
        </div>
      </section>
    </>
  );
}
