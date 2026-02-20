'use client';
import styles from './ClientMarquee.module.css';
import { clients } from '../data/clients';

export default function ClientMarquee() {
  const doubled = [...clients, ...clients];

  return (
    <div className={styles.wrapper}>
      <div className={styles.fadeLeft} aria-hidden="true" />
      <div className={styles.track}>
        <div className={styles.inner}>
          {doubled.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className={styles.logoItem}
              title={client.name}
            >
              <img
                src={client.logo}
                alt={client.name}
                width={120}
                height={48}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.fadeRight} aria-hidden="true" />
    </div>
  );
}
