'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { jobs } from '../../data/jobs';
import styles from './page.module.css';

export default function KarirDetail() {
  const { id } = useParams();
  const job = jobs.find(j => j.id === id);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', education: '', experience: '', cv: null,
  });

  if (!job) return (
    <section className="page-header"><div className="container"><h1>Lowongan tidak ditemukan</h1></div></section>
  );

  const handleApply = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
    } else {
      setShowFormModal(true);
    }
  };

  const handleGoogleLogin = () => {
    setIsLoggedIn(true);
    setFormData(prev => ({ ...prev, name: 'Ragil User', email: 'ragil@gmail.com' }));
    setShowLoginModal(false);
    setShowFormModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setShowFormModal(false);
  };

  const deadlineDate = new Date(job.deadline).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  const postedAgo = Math.ceil((new Date(job.deadline) - new Date()) / (1000 * 60 * 60 * 24));

  return (
    <>
      <section className="page-header" style={{ paddingBottom: '40px' }}>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Beranda</Link><span>›</span><Link href="/karir">Karir</Link><span>›</span><span className="current">{job.title}</span>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '24px' }}>
        <div className="container">
          <div className={styles.detailLayout}>
            {/* Main Content */}
            <div className={styles.content}>
              {/* Header */}
              {job.isNew && <span className={styles.badge}>Full Time</span>}
              <h1 className={styles.title}>{job.title}</h1>
              <div className={styles.meta}>
                <span>🏢 {job.division}</span>
                <span>•</span>
                <span>📍 {job.location}</span>
                <span>•</span>
                <span>📅 Deadline: {deadlineDate}</span>
              </div>

              {/* Deskripsi */}
              <div className={styles.section}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionBar}></div>
                  <h2>Deskripsi Pekerjaan</h2>
                </div>
                <p>{job.description}</p>
              </div>

              {/* Tanggung Jawab */}
              {job.responsibilities && (
                <div className={styles.section}>
                  <div className={styles.sectionHeader}>
                    <div className={styles.sectionBar}></div>
                    <h2>Tanggung Jawab Utama</h2>
                  </div>
                  <ul className={styles.checkList}>
                    {job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </div>
              )}

              {/* Kualifikasi */}
              <div className={styles.section}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionBar}></div>
                  <h2>Kualifikasi</h2>
                </div>
                <ul className={styles.dotList}>
                  {job.qualifications.map((q, i) => <li key={i}>{q}</li>)}
                </ul>
              </div>

              {/* Benefits */}
              <div className={styles.benefitSection}>
                <div className={styles.benefitHeader}>
                  <span>✅</span> <strong>Benefit & Fasilitas</strong>
                </div>
                <div className={styles.benefitGrid}>
                  {job.benefits.map((b, i) => (
                    <div key={i} className={styles.benefitItem}>
                      <span className={styles.benefitIcon}>{b.icon}</span>
                      <span>{b.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Ringkasan Pekerjaan</h3>
                <div className={styles.sidebarRow}><span>Gaji</span><strong>{job.salary} <small>/bulan</small></strong></div>
                <div className={styles.sidebarRow}><span>Lokasi</span><strong>{job.location}</strong></div>
                <div className={styles.sidebarRow}><span>Pengalaman</span><strong>{job.experience}</strong></div>
                <div className={styles.sidebarRow}><span>Level</span><strong>{job.level}</strong></div>
                <div className={styles.sidebarRow}><span>Tipe</span><strong>{job.type}</strong></div>

                {!submitted ? (
                  <button className={`btn btn-primary ${styles.applyBtn}`} onClick={handleApply}>
                    Lamar Sekarang ➤
                  </button>
                ) : (
                  <div className={styles.appliedBadge}>✅ Lamaran Terkirim</div>
                )}

                <p className={styles.deadlineNote}>Lamaran akan ditutup pada {deadlineDate}</p>

                <div className={styles.shareSection}>
                  <span>Bagikan lowongan ini</span>
                  <div className={styles.shareButtons}>
                    <button onClick={() => navigator.clipboard?.writeText(window.location.href)} title="Copy link">🔗</button>
                    <button onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(job.title + ' - ' + window.location.href)}`, '_blank')} title="Share WhatsApp">💬</button>
                    <button onClick={() => window.open(`mailto:?subject=${encodeURIComponent(job.title)}&body=${encodeURIComponent(window.location.href)}`, '_blank')} title="Share Email">✉️</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success State */}
          {submitted && (
            <div className={styles.successCard}>
              <div className={styles.successIcon}>✅</div>
              <h2>Lamaran Anda Telah Terkirim!</h2>
              <p>Terima kasih telah melamar posisi <strong>{job.title}</strong>. Tim HRD kami akan menghubungi Anda segera.</p>
              <Link href="/karir" className="btn btn-outline" style={{ marginTop: '20px' }}>Lihat Lowongan Lain</Link>
            </div>
          )}
        </div>
      </section>

      {/* Google Login Modal */}
      {showLoginModal && (
        <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowLoginModal(false)}>✕</button>
            <div className={styles.modalLogo}>
              <span className={styles.modalLogoDot}>■</span> QMS
            </div>
            <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>Masuk untuk Melamar</h2>
            <p style={{ color: 'var(--qms-text-light)', fontSize: '14px', marginBottom: '28px' }}>
              Login dengan akun Google Anda untuk melanjutkan proses lamaran
            </p>
            <button className={styles.googleBtn} onClick={handleGoogleLogin}>
              <svg width="20" height="20" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.9 33.4 29.4 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C33.9 5.6 29.2 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.2-2.7-.4-3.9z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.5 18.8 12 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7C33.9 5.6 29.2 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5 0 9.5-1.5 13.1-4.3l-6.1-5.2C29.1 35.8 26.7 36 24 36c-5.4 0-9.9-3.6-11.3-8.5l-6.5 5C9.5 39 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4 5.5l6.1 5.2C36.9 39.3 44 33.2 44 24c0-1.3-.2-2.7-.4-3.9z"/></svg>
              Sign in with Google
            </button>
            <p style={{ fontSize: '12px', color: 'var(--qms-text-light)', marginTop: '20px' }}>
              Dengan masuk, Anda menyetujui Kebijakan Privasi kami
            </p>
          </div>
        </div>
      )}

      {/* Application Form Modal */}
      {showFormModal && !submitted && (
        <div className="modal-overlay" onClick={() => setShowFormModal(false)}>
          <div className={`modal-content ${styles.formModal}`} onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowFormModal(false)}>✕</button>
            <h2 style={{ fontSize: '22px', marginBottom: '4px' }}>Form Lamaran</h2>
            <p style={{ color: 'var(--qms-text-light)', fontSize: '14px', marginBottom: '24px' }}>
              {job.title} • Masuk sebagai <strong>{formData.email}</strong>
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nama Lengkap</label>
                <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" value={formData.email} readOnly style={{ background: 'var(--qms-light-grey)' }} />
              </div>
              <div className={styles.formRow}>
                <div className="form-group">
                  <label>No. HP</label>
                  <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="08xxxxxxxxxx" required />
                </div>
                <div className="form-group">
                  <label>Pendidikan Terakhir</label>
                  <select value={formData.education} onChange={e => setFormData({...formData, education: e.target.value})} required>
                    <option value="">Pilih Pendidikan</option>
                    <option value="SMP">SMP/Sederajat</option>
                    <option value="SMA">SMA/SMK/Sederajat</option>
                    <option value="D3">Diploma (D3)</option>
                    <option value="S1">Sarjana (S1)</option>
                    <option value="S2">Magister (S2)</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Pengalaman Kerja</label>
                <textarea value={formData.experience} onChange={e => setFormData({...formData, experience: e.target.value})} placeholder="Ceritakan pengalaman kerja Anda..." rows={3} />
              </div>
              <div className="form-group">
                <label>Upload CV (PDF)</label>
                <div className={styles.dropzone}>
                  <input type="file" accept=".pdf" onChange={e => setFormData({...formData, cv: e.target.files[0]})} />
                  <p>{formData.cv ? `📄 ${formData.cv.name}` : '📎 Klik untuk upload atau drag file PDF'}</p>
                </div>
              </div>
              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>Kirim Lamaran ➤</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
