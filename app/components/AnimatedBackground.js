import styles from './AnimatedBackground.module.css';

export default function AnimatedBackground() {
  return (
    <div className={styles.bg} aria-hidden="true">
      <div className={`${styles.orb} ${styles.orb1}`}></div>
      <div className={`${styles.orb} ${styles.orb2}`}></div>
      <div className={`${styles.orb} ${styles.orb3}`}></div>
      <div className={`${styles.orb} ${styles.orb4}`}></div>
      <div className={`${styles.orb} ${styles.orb5}`}></div>
      <div className={styles.grid}></div>
    </div>
  );
}
