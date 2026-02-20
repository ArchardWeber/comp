'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import { LocationIcon, BriefcaseIcon, ClockIcon, ArrowRightIcon } from '../components/Icons';
import { jobs } from '../data/jobs';
import styles from './page.module.css';

export default function KarirPage() {
  const [filterLoc, setFilterLoc] = useState('');
  const [filterDiv, setFilterDiv] = useState('');

  const locations = [...new Set(jobs.map(j => j.location))];
  const divisions = [...new Set(jobs.map(j => j.division))];

  const filtered = jobs.filter(j =>
    (!filterLoc || j.location === filterLoc) &&
    (!filterDiv || j.division === filterDiv)
  );

  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Beranda</Link><span>›</span><span className="current">Karir</span>
          </div>
          <h1>Bergabung dengan Keluarga QMS</h1>
          <p>Temukan peluang karir terbaik untuk Anda</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.filterBar}>
            <div className="form-group" style={{ marginBottom: 0, flex: 1 }}>
              <select value={filterLoc} onChange={e => setFilterLoc(e.target.value)}>
                <option value="">Semua Lokasi</option>
                {locations.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
            <div className="form-group" style={{ marginBottom: 0, flex: 1 }}>
              <select value={filterDiv} onChange={e => setFilterDiv(e.target.value)}>
                <option value="">Semua Divisi</option>
                {divisions.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
            <button className="btn btn-primary" onClick={() => { setFilterLoc(''); setFilterDiv(''); }}>Reset</button>
          </div>

          <div className={styles.jobList}>
            {filtered.length === 0 && <p className={styles.emptyMsg}>Tidak ada lowongan yang sesuai filter.</p>}
            {filtered.map((job, i) => (
              <ScrollReveal key={job.id} delay={i * 0.1}>
                <Link href={`/karir/${job.id}`} className={styles.jobCard}>
                  <div className={styles.jobInfo}>
                    {job.isNew && <span className={styles.badge}>BARU</span>}
                    <h3>{job.title}</h3>
                    <div className={styles.jobMeta}>
                      <span className={styles.metaItem}><LocationIcon size={14} /> {job.location}</span>
                      <span className={styles.sep}>|</span>
                      <span className={styles.metaItem}><BriefcaseIcon size={14} /> {job.division}</span>
                      <span className={styles.sep}>|</span>
                      <span className={styles.metaItem}><ClockIcon size={14} /> {job.type}</span>
                    </div>
                    <span className={styles.jobDeadline}>Deadline: {new Date(job.deadline).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>
                  <span className={styles.detailBtn}>
                    Lihat Detail <ArrowRightIcon size={16} />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Tidak menemukan posisi yang sesuai?</h2>
          <p>Kirimkan CV Anda dan kami akan menghubungi saat ada posisi yang cocok</p>
          <Link href="/kontak" className="btn btn-primary">Hubungi Kami</Link>
        </div>
      </section>
    </>
  );
}
