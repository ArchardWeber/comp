'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { news } from '../../data/news';
import { WhatsAppIcon, LinkedInIcon, CalendarIcon } from '../../components/Icons';
import styles from './page.module.css';

export default function BeritaDetail() {
  const { slug } = useParams();
  const article = news.find(n => n.slug === slug);
  const related = news.filter(n => n.slug !== slug).slice(0, 3);

  if (!article) return (
    <section className="page-header"><div className="container"><h1>Berita tidak ditemukan</h1></div></section>
  );

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <>
      <section className="page-header" style={{ paddingBottom: '40px' }}>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Beranda</Link><span>›</span><Link href="/berita">Berita</Link><span>›</span><span className="current">{article.title.slice(0, 30)}...</span>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '40px' }}>
        <div className={styles.articleContainer}>
          <span className={styles.cat}>{article.category}</span>
          <h1 className={styles.title}>{article.title}</h1>
          <p className={styles.meta}>
            <CalendarIcon size={14} />
            Admin &bull; {new Date(article.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <div className={styles.heroImage}>
            <img src={article.image} alt={article.title} />
          </div>

          <div className={styles.content}>
            {article.content.split('\n\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className={styles.share}>
            <span>Bagikan:</span>
            <a href={`https://wa.me/?text=${encodeURIComponent(article.title + ' ' + shareUrl)}`} target="_blank" rel="noopener noreferrer" className={styles.shareBtn}>
              <WhatsAppIcon size={15} /> WhatsApp
            </a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className={styles.shareBtn}>
              <LinkedInIcon size={15} /> LinkedIn
            </a>
            <button className={styles.shareBtn} onClick={() => navigator.clipboard?.writeText(shareUrl)}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
              Copy Link
            </button>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <h2>Berita Lainnya</h2>
              <div className="line"></div>
            </div>
            <div className={styles.relatedGrid}>
              {related.map(r => (
                <Link key={r.slug} href={`/berita/${r.slug}`} className={styles.relatedCard}>
                  <div className={styles.relatedThumb}>
                    <img src={r.image} alt={r.title} />
                  </div>
                  <div className={styles.relatedBody}>
                    <span className={styles.relatedCat}>{r.category}</span>
                    <h3>{r.title}</h3>
                    <span className={styles.relatedDate}>
                      {new Date(r.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
