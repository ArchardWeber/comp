import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import { CalendarIcon } from '../components/Icons';
import { news } from '../data/news';
import styles from './page.module.css';

export const metadata = { title: 'Berita & Updates | QMS', description: 'Berita dan informasi terkini dari PT Qiprah Multi Service.' };

export default function BeritaPage() {
  const [featured, ...rest] = news;

  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Beranda</Link><span>›</span><span className="current">Berita</span>
          </div>
          <h1>Berita &amp; Updates</h1>
          <p>Informasi terkini seputar kegiatan dan pencapaian QMS</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Featured */}
          <ScrollReveal>
            <Link href={`/berita/${featured.slug}`} className={styles.featuredCard}>
              <div className={styles.featuredThumb}>
                <img src={featured.image} alt={featured.title} />
                <div className={styles.featuredOverlay}></div>
              </div>
              <div className={styles.featuredBody}>
                <span className={styles.newsCat}>{featured.category}</span>
                <h2 className={styles.featuredTitle}>{featured.title}</h2>
                <p className={styles.newsExcerpt}>{featured.excerpt}</p>
                <span className={styles.newsDate}>
                  <CalendarIcon size={14} />
                  {new Date(featured.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
              </div>
            </Link>
          </ScrollReveal>

          {/* Grid */}
          <div className={styles.newsGrid}>
            {rest.map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 0.1}>
                <Link href={`/berita/${article.slug}`} className={styles.newsCard}>
                  <div className={styles.newsThumb}>
                    <img src={article.image} alt={article.title} />
                  </div>
                  <div className={styles.newsBody}>
                    <span className={styles.newsCat}>{article.category}</span>
                    <h3 className={styles.newsTitle}>{article.title}</h3>
                    <p className={styles.newsExcerpt}>{article.excerpt}</p>
                    <span className={styles.newsDate}>
                      <CalendarIcon size={13} />
                      {new Date(article.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
