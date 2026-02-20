'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ServiceCarousel.module.css';
import { ArrowRightIcon } from './Icons';

export default function ServiceCarousel({ services = [] }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {services.map((service) => (
          <div key={service.slug} className={styles.card}>
            <div className={styles.imageWrap}>
              {service.images?.[0] ? (
                <Image
                  src={service.images[0]}
                  alt={service.title}
                  fill
                  className={styles.image}
                  sizes="320px"
                />
              ) : (
                <div className={styles.imagePlaceholder} />
              )}
              <div className={styles.imageOverlay} />
            </div>
            <div className={styles.body}>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.desc}>{service.shortDesc}</p>
              <Link href={`/layanan/${service.slug}`} className={styles.link}>
                <span>Selengkapnya</span>
                <ArrowRightIcon size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
