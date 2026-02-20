'use client';
import { useEffect, useRef } from 'react';
import styles from './ParallaxBackground.module.css';

export default function ParallaxBackground() {
  const containerRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    let active = !mq.matches;

    const orbs = containerRef.current?.querySelectorAll('[data-speed]');
    if (!orbs) return;

    let lastY = 0;

    const onScroll = () => {
      if (!active) return;
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const scrollY = window.scrollY;
        if (Math.abs(scrollY - lastY) < 1) return;
        lastY = scrollY;
        orbs.forEach((el) => {
          const speed = parseFloat(el.dataset.speed) || 0;
          el.style.transform = `translateY(${scrollY * speed}px)`;
        });
      });
    };

    const onMqChange = (e) => {
      active = !e.matches;
      if (!active) {
        orbs.forEach((el) => { el.style.transform = ''; });
      }
    };

    mq.addEventListener('change', onMqChange);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      mq.removeEventListener('change', onMqChange);
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.bg} aria-hidden="true">
      {/* Orbs */}
      <div className={`${styles.orb} ${styles.orb1}`} data-speed="0.08"></div>
      <div className={`${styles.orb} ${styles.orb2}`} data-speed="-0.06"></div>
      <div className={`${styles.orb} ${styles.orb3}`} data-speed="0.04"></div>
      <div className={`${styles.orb} ${styles.orb4}`} data-speed="-0.05"></div>

      {/* Floating shapes */}
      <div className={`${styles.shape} ${styles.shape1}`} data-speed="0.12"></div>
      <div className={`${styles.shape} ${styles.shape2}`} data-speed="-0.09"></div>
      <div className={`${styles.shape} ${styles.shape3}`} data-speed="0.07"></div>
      <div className={`${styles.shape} ${styles.shape4}`} data-speed="-0.11"></div>
      <div className={`${styles.shape} ${styles.shape5}`} data-speed="0.05"></div>

      {/* Dot grid — fixed */}
      <div className={styles.dots}></div>
    </div>
  );
}
