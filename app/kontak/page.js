'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import { LocationIcon, PhoneIcon, EmailIcon, ClockIcon, CheckCircleIcon } from '../components/Icons';
import styles from './page.module.css';

const infoItems = [
  { Icon: LocationIcon, label: 'Alamat', value: 'Jl. Basudewa Raya No 3a, Semarang, Jawa Tengah' },
  { Icon: PhoneIcon, label: 'Telepon', value: '(024) 7654-321' },
  { Icon: EmailIcon, label: 'Email', value: 'info@qms.co.id' },
  { Icon: ClockIcon, label: 'Jam Operasional', value: 'Senin - Jumat, 08:00 - 17:00 WIB' },
];

export default function KontakPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Beranda</Link><span>›</span><span className="current">Kontak</span>
          </div>
          <h1>Hubungi Kami</h1>
          <p>Kami siap membantu kebutuhan Anda</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.infoGrid}>
            {infoItems.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.1}>
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <item.Icon size={24} />
                  </div>
                  <h4>{item.label}</h4>
                  <p>{item.value}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className={styles.contactGrid}>
            <ScrollReveal>
              <div className={styles.map}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2!2d110.42!3d-6.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTgnMTIuMCJTIDExMMKwMjUnMTIuMCJF!5e0!3m2!1sid!2sid!4v1!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '16px' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Lokasi QMS"
                ></iframe>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className={styles.formCard}>
                <h3>Kirim Pesan</h3>
                <p className={styles.formSubtitle}>
                  Isi formulir di bawah atau hubungi kami langsung via WhatsApp
                </p>

                {sent ? (
                  <div className={styles.sentMsg}>
                    <div className={styles.sentIcon}><CheckCircleIcon size={48} /></div>
                    <h4>Pesan Terkirim!</h4>
                    <p>Terima kasih. Tim kami akan segera merespons.</p>
                    <button className="btn btn-outline" onClick={() => { setSent(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}>
                      Kirim Pesan Lagi
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Nama</label>
                      <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required placeholder="Nama Anda" />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required placeholder="email@contoh.com" />
                    </div>
                    <div className="form-group">
                      <label>Subjek</label>
                      <input type="text" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} required placeholder="Perihal pesan Anda" />
                    </div>
                    <div className="form-group">
                      <label>Pesan</label>
                      <textarea value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} required placeholder="Tulis pesan Anda..." />
                    </div>
                    <button type="submit" className={`btn btn-primary ${styles.sendBtn}`}>Kirim Pesan</button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
