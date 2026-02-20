import styles from './BentoGrid.module.css';

export default function BentoGrid({ items = [] }) {
  return (
    <div className={styles.grid}>
      {items.map((item, index) => (
        <div
          key={item.id ?? item.title ?? index}
          className={`${styles.item} ${item.span === 2 ? styles.spanTwo : ''}`}
        >
          {item.icon && <div className={styles.icon}>{item.icon}</div>}
          <h3 className={styles.title}>{item.title}</h3>
          {item.desc && <p className={styles.desc}>{item.desc}</p>}
        </div>
      ))}
    </div>
  );
}
