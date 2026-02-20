'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import ScrollReveal from './components/ScrollReveal';
import ClientMarquee from './components/ClientMarquee';
import ServiceCarousel from './components/ServiceCarousel';
import TestimonialSlider from './components/TestimonialSlider';
import ProcessTimeline from './components/ProcessTimeline';
import BentoGrid from './components/BentoGrid';
import RunningText from './components/RunningText';
import {
  CalendarIcon,
  UsersIcon,
  BriefcaseIcon,
  ZapIcon,
  PhoneIcon,
  TargetIcon,
  CheckCircleIcon,
  AwardIcon,
  ShieldIcon,
  BuildingIcon,
  PlayIcon,
  WhatsAppIcon,
} from './components/Icons';
import { services } from './data/services';
import styles from './page.module.css';

function StatCounter({ end, label, suffix = '', icon }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let startTime = 0;
          const duration = 2000;
          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className={styles.statCard}>
      <div className={styles.statIcon}>{icon}</div>
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
          <PlayIcon size={28} />
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

const processSteps = [
  { num: '01', title: 'Konsultasi', desc: 'Diskusi mendalam tentang kebutuhan operasional perusahaan Anda.', icon: <PhoneIcon size={20} /> },
  { num: '02', title: 'Survei & Analisa', desc: 'Tim kami melakukan survei lapangan dan analisis kebutuhan.', icon: <TargetIcon size={20} /> },
  { num: '03', title: 'Penawaran', desc: 'Kami menyiapkan proposal solusi yang sesuai kebutuhan dan budget.', icon: <BriefcaseIcon size={20} /> },
  { num: '04', title: 'Eksekusi', desc: 'Implementasi dengan SDM terlatih dan monitoring berkala.', icon: <CheckCircleIcon size={20} /> },
];

const bentoItems = [
  { title: 'Berpengalaman Sejak 2016', desc: '8+ tahun melayani berbagai sektor industri dengan standar tinggi.', icon: <AwardIcon size={32} />, span: 2 },
  { title: 'SDM Profesional', desc: 'Seluruh personel terlatih, bersertifikat, dan terjamin kompetensinya.', icon: <UsersIcon size={28} /> },
  { title: 'Peralatan Modern', desc: 'Teknologi terkini dengan bahan ramah lingkungan.', icon: <ZapIcon size={28} /> },
  { title: 'Layanan Terintegrasi', desc: 'Solusi satu pintu untuk semua kebutuhan fasilitas.', icon: <ShieldIcon size={28} /> },
  { title: '50+ Perusahaan', desc: 'Dipercaya klien dari perbankan, kesehatan, dan manufaktur.', icon: <BuildingIcon size={28} />, span: 2 },
];

const testimonials = [
  { quote: 'QMS memberikan pelayanan yang sangat profesional. Tim mereka responsif dan selalu menjaga standar kebersihan yang tinggi.', name: 'Budi Santoso', company: 'PT Mitra Sejahtera', role: 'General Manager' },
  { quote: 'Sejak bermitra dengan QMS, operasional gedung kami menjadi jauh lebih efisien. Sangat merekomendasikan layanan mereka.', name: 'Siti Rahayu', company: 'RS Harapan Bunda', role: 'Facility Manager' },
  { quote: 'Tenaga security dari QMS sangat terlatih dan disiplin. Kami merasa aman dan nyaman bekerja sama dengan mereka.', name: 'Ahmad Wijaya', company: 'Bank Nusantara', role: 'Head of Operations' },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <ScrollReveal>
              <span className={styles.heroBadge}>Outsourcing &amp; Facility Management</span>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <h1 className={styles.heroTitle}>
                Solusi <span className={styles.heroHighlight}>Partner Terpercaya</span> untuk Pengelolaan Fasilitas
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className={styles.heroSub}>
                PT Qiprah Multi Service menyediakan layanan kebersihan, keamanan, dan pemeliharaan gedung
                dengan SDM profesional bersertifikat. Attitude for Success.
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
            <StatCounter end={8} label="Tahun Berpengalaman" suffix="+" icon={<CalendarIcon size={24} />} />
            <StatCounter end={50} label="Klien Aktif" suffix="+" icon={<UsersIcon size={24} />} />
            <StatCounter end={500} label="Tenaga Kerja" suffix="+" icon={<BriefcaseIcon size={24} />} />
            <StatCounter end={6} label="Layanan Tersedia" icon={<ZapIcon size={24} />} />
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
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
                <span className={styles.heroBadge}>TENTANG KAMI</span>
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
                  Dengan semboyan {'\u201cAttitude for Success\u201d'}, kami mengutamakan profesionalisme,
                  integritas, dan kualitas layanan. Dipercaya lebih dari 50 perusahaan dengan 500+ tenaga kerja terlatih.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.45}>
                <Link href="/tentang-kami" className="btn-ghost">
                  Selengkapnya tentang QMS &rarr;
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-heading">
            <h2>Layanan Kami</h2>
            <p>Solusi lengkap untuk kebutuhan operasional dan pemeliharaan fasilitas Anda</p>
            <div className="line"></div>
          </div>
        </div>
        <ServiceCarousel services={services} />
      </section>

      {/* ===== PROCESS ===== */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Proses Kerja Kami</h2>
            <p>Langkah sistematis untuk memastikan layanan terbaik bagi Anda</p>
            <div className="line"></div>
          </div>
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      {/* ===== KEUNGGULAN / BENTO ===== */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-heading">
            <h2>Keunggulan QMS</h2>
            <p>Alasan mengapa ratusan perusahaan mempercayakan fasilitas mereka kepada kami</p>
            <div className="line"></div>
          </div>
          <BentoGrid items={bentoItems} />
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Testimoni Klien</h2>
            <p>Apa kata mereka yang telah bermitra dengan QMS</p>
            <div className="line"></div>
          </div>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* ===== CLIENT MARQUEE ===== */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Dipercaya oleh Perusahaan Terkemuka</h2>
            <p>Klien kami tersebar di berbagai sektor industri di Indonesia</p>
            <div className="line"></div>
          </div>
        </div>
        <ClientMarquee />
      </section>

      {/* ===== RUNNING TEXT ===== */}
      <RunningText />

      {/* ===== CTA ===== */}
      <section className="cta-banner">
        <div className="container">
          <h2>Tertarik Bermitra dengan Kami?</h2>
          <p>Tim kami siap membantu kebutuhan operasional dan fasilitas perusahaan Anda</p>
          <div className={styles.ctaBtns}>
            <Link href="/kontak" className="btn btn-primary">Hubungi Kami</Link>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <WhatsAppIcon size={18} />
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
