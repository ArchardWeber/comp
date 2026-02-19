'use client';
import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import styles from './page.module.css';

const milestones = [
  { year: '2016', title: 'Pendirian Perusahaan', desc: 'PT Qiprah Multi Service didirikan di Semarang dengan fokus pada jasa kebersihan dan keamanan.' },
  { year: '2018', title: 'Ekspansi Layanan', desc: 'Menambah layanan supporting service dan pemborongan pekerjaan. Klien bertambah signifikan.' },
  { year: '2020', title: 'Adopsi Teknologi', desc: 'Mengimplementasikan sistem digital untuk manajemen operasional dan monitoring karyawan.' },
  { year: '2022', title: 'Divisi Baru', desc: 'Membuka divisi Parkir dan Maintenance Building untuk melengkapi layanan terintegrasi.' },
  { year: '2024', title: '50+ Klien Aktif', desc: 'Meraih kepercayaan lebih dari 50 perusahaan dan sertifikasi ISO 9001:2015.' },
];

const orgChart = [
  { name: 'Direktur', role: 'Pimpinan Perusahaan', level: 0 },
  { name: 'Wakil Direktur', role: 'Wakil Pimpinan', level: 1 },
  { name: 'Support / Log / Umum', role: 'Divisi Pendukung', level: 2 },
  { name: 'SDM / HRD', role: 'Sumber Daya Manusia', level: 2 },
  { name: 'Marketing', role: 'Pemasaran', level: 2 },
  { name: 'Keuangan', role: 'Finance & Accounting', level: 2 },
  { name: 'Advisor', role: 'Penasehat', level: 2 },
];

const certifications = [
  { name: 'ISO 9001:2015', desc: 'Sistem Manajemen Mutu', icon: '📋' },
  { name: 'K3 Umum', desc: 'Keselamatan & Kesehatan Kerja', icon: '⛑️' },
  { name: 'Gada Pratama', desc: 'Sertifikasi Tenaga Security', icon: '🛡️' },
  { name: 'SIUP & TDP', desc: 'Legalitas Usaha Lengkap', icon: '📄' },
  { name: 'BPJS', desc: 'Jaminan Sosial Karyawan', icon: '💪' },
  { name: 'NPWP Badan', desc: 'Terdaftar Wajib Pajak', icon: '🏛️' },
];

export default function TentangKami() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Beranda</Link><span>›</span><span className="current">Tentang Kami</span>
          </div>
          <h1>Tentang PT Qiprah Multi Service</h1>
          <p>Mengenal lebih dekat perusahaan kami</p>
        </div>
      </section>

      {/* Profil */}
      <section id="profil" className="section">
        <div className="container">
          <div className={styles.profilGrid}>
            <ScrollReveal>
              <div className={styles.profilImage}>
                <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=450&fit=crop" alt="Kantor QMS" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className={styles.profilText}>
                <span className={styles.sectionTag}>PROFIL PERUSAHAAN</span>
                <h2>Solusi Partner Terpercaya Anda</h2>
                <p>PT. Qiprah Multi Service adalah perusahaan penyedia jasa alih daya (outsourcing) yang berdiri sejak tahun 2016. Kami bergerak dalam semua aspek operasional dan pemeliharaan fasilitas di berbagai sektor perusahaan.</p>
                <p>Berkantor pusat di Jl. Basudewa Raya No 3a, Semarang, kami berkomitmen untuk menjadi solusi partner terpercaya yang membantu klien fokus pada bisnis inti mereka. Dengan semboyan <strong>"Attitude for Success"</strong>, kami mengutamakan profesionalisme, integritas, dan kualitas layanan dalam setiap penugasan.</p>
                <p>Saat ini QMS telah dipercaya oleh lebih dari 50 perusahaan di berbagai sektor termasuk perbankan, kesehatan, manufaktur, dan properti, dengan lebih dari 500 tenaga kerja terlatih yang tersebar di berbagai kota.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section id="visi-misi" className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <h2>Visi & Misi</h2>
            <p>Fondasi yang menggerakkan setiap langkah kami</p>
            <div className="line"></div>
          </div>
          <div className={styles.visiMisiLayout}>
            <ScrollReveal>
              <div className={styles.visiCard}>
                <div className={styles.visiHeader}>
                  <div className={styles.visiIconCircle}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                  </div>
                  <span className={styles.visiLabel}>VISI</span>
                </div>
                <h3>Menjadi Partner Bisnis Terbaik</h3>
                <p>Menjadi partner bisnis <strong>terbaik dan terpercaya</strong> dalam memberikan solusi operasional dan pemeliharaan fasilitas bagi berbagai sektor perusahaan di Indonesia.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className={styles.misiCard}>
                <div className={styles.visiHeader}>
                  <div className={styles.misiIconCircle}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                  </div>
                  <span className={styles.misiLabel}>MISI</span>
                </div>
                <h3>Layanan Terintegrasi, Cepat & Tepat</h3>
                <ul className={styles.misiList}>
                  <li>Mengutamakan layanan secara terintegrasi, cepat dan tepat</li>
                  <li>Menyediakan SDM yang terlatih dan profesional</li>
                  <li>Menggunakan peralatan modern dan ramah lingkungan</li>
                  <li>Memberikan solusi efisien dengan standar kualitas tinggi</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Perjalanan Kami</h2>
            <p>Milestone penting sejak pendirian QMS</p>
            <div className="line"></div>
          </div>
          <div className={styles.timeline}>
            {milestones.map((m, i) => (
              <ScrollReveal key={m.year} delay={i * 0.1}>
                <div className={`${styles.timelineItem} ${i % 2 === 0 ? styles.timelineLeft : styles.timelineRight}`}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineCard}>
                    <span className={styles.timelineYear}>{m.year}</span>
                    <h3>{m.title}</h3>
                    <p>{m.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Struktur Organisasi */}
      <section id="struktur" className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <h2>Struktur Organisasi</h2>
            <p>PT Qiprah Multi Service — Jl. Basudewa Raya No 3a, Semarang</p>
            <div className="line"></div>
          </div>
          <div className={styles.orgGrid}>
            {/* Top level */}
            <div className={styles.orgRow}>
              <ScrollReveal>
                <div className={`${styles.orgCard} ${styles.orgDirector}`}>
                  <div className={styles.orgAvatar}>👤</div>
                  <h4>Direktur</h4>
                  <span>Pimpinan Perusahaan</span>
                </div>
              </ScrollReveal>
            </div>
            <div className={styles.orgConnector}></div>
            <div className={styles.orgRow}>
              <ScrollReveal delay={0.1}>
                <div className={`${styles.orgCard} ${styles.orgVice}`}>
                  <div className={styles.orgAvatar}>👤</div>
                  <h4>Wakil Direktur</h4>
                  <span>Wakil Pimpinan</span>
                </div>
              </ScrollReveal>
            </div>
            <div className={styles.orgConnector}></div>
            <div className={styles.orgDepartments}>
              {[
                { name: 'Support / Log / Umum', role: 'Divisi Pendukung', icon: '📦' },
                { name: 'SDM / HRD', role: 'Sumber Daya Manusia', icon: '👥' },
                { name: 'Marketing', role: 'Pemasaran', icon: '📊' },
                { name: 'Keuangan', role: 'Finance & Accounting', icon: '💰' },
                { name: 'Advisor', role: 'Penasehat', icon: '🎓' },
              ].map((dept, i) => (
                <ScrollReveal key={dept.name} delay={i * 0.08}>
                  <div className={styles.orgCard}>
                    <div className={styles.orgAvatar}>{dept.icon}</div>
                    <h4>{dept.name}</h4>
                    <span>{dept.role}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sertifikasi */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Sertifikasi & Legalitas</h2>
            <p>Komitmen kami terhadap standar dan kualitas</p>
            <div className="line"></div>
          </div>
          <div className={styles.certGrid}>
            {certifications.map((cert, i) => (
              <ScrollReveal key={cert.name} delay={i * 0.08}>
                <div className={styles.certCard}>
                  <div className={styles.certIcon}>{cert.icon}</div>
                  <div>
                    <h4>{cert.name}</h4>
                    <p>{cert.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2>Siap Bermitra dengan QMS?</h2>
          <p>Hubungi kami untuk konsultasi gratis mengenai kebutuhan operasional perusahaan Anda</p>
          <Link href="/kontak" className="btn btn-primary">Hubungi Kami Sekarang</Link>
        </div>
      </section>
    </>
  );
}
