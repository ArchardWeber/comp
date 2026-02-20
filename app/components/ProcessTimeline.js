import styles from './ProcessTimeline.module.css';

export default function ProcessTimeline({ steps = [] }) {
  return (
    <div className={styles.wrapper}>
      {steps.map((step, index) => (
        <div key={step.num ?? index} className={styles.item}>
          <div className={styles.card}>
            <div className={styles.numCircle}>
              <span className={styles.num}>{String(step.num ?? index + 1).padStart(2, '0')}</span>
            </div>
            {step.icon && <div className={styles.icon}>{step.icon}</div>}
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.desc}>{step.desc}</p>
          </div>
          {index < steps.length - 1 && (
            <div className={styles.connector}>
              <div className={styles.line} />
              <div className={styles.arrow} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
