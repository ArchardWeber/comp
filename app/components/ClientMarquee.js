'use client';
import styles from './ClientMarquee.module.css';
import { clients } from '../data/clients';

export default function ClientMarquee() {
  return (
    <div className={styles.marqueeSection}>
      <div className={styles.track}>
        <div className={styles.inner}>
          {[...clients, ...clients].map((c, i) => (
            <div key={i} className={styles.logoItem}>
              <img src={c.logo} alt={c.name} title={c.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
