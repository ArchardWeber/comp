'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { news } from '../../data/news';
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
          <p className={styles.meta}>Admin • {new Date(article.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

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
            <a href={`https://wa.me/?text=${encodeURIComponent(article.title + ' ' + shareUrl)}`} target="_blank" rel="noopener noreferrer" className={styles.shareBtn}>💬 WhatsApp</a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className={styles.shareBtn}>💼 LinkedIn</a>
            <button className={styles.shareBtn} onClick={() => navigator.clipboard?.writeText(shareUrl)}>🔗 Copy Link</button>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <h2>Berita Lainnya</h2>
              <div className="line"></div>
            </div>
            <div className="grid-3">
              {related.map(r => (
                <Link key={r.slug} href={`/berita/${r.slug}`} style={{
                  display: 'block', background: 'white', border: '1px solid var(--qms-border)',
                  borderRadius: '12px', overflow: 'hidden', transition: 'all 0.3s'
                }}>
                  <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                    <img src={r.image} alt={r.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '16px' }}>
                    <span style={{ fontSize: '12px', color: 'var(--qms-red)', fontWeight: '500' }}>{r.category}</span>
                    <h3 style={{ fontSize: '16px', margin: '8px 0', lineHeight: '1.4' }}>{r.title}</h3>
                    <span style={{ fontSize: '13px', color: 'var(--qms-text-light)' }}>
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
