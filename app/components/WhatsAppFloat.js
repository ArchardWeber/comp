'use client';
import { WhatsAppIcon } from './Icons';
import styles from './WhatsAppFloat.module.css';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/6281234567890"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label="Chat WhatsApp"
    >
      <div className={styles.pulse} aria-hidden="true" />
      <WhatsAppIcon size={28} />
      <span className={styles.tooltip}>Chat Kami</span>
    </a>
  );
}
