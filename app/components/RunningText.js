import styles from './RunningText.module.css';

const CONTENT = 'CLEANING • SECURITY • MAINTENANCE • OUTSOURCING • PARKING • SUPPORTING SERVICE •';

export default function RunningText() {
  return (
    <div className={styles.strip} aria-hidden="true">
      <div className={styles.track}>
        <span className={styles.text}>{CONTENT}&nbsp;&nbsp;</span>
        <span className={styles.text}>{CONTENT}&nbsp;&nbsp;</span>
        <span className={styles.text}>{CONTENT}&nbsp;&nbsp;</span>
      </div>
    </div>
  );
}
