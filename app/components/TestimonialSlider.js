'use client';
import { useState, useEffect, useCallback } from 'react';
import styles from './TestimonialSlider.module.css';
import { ChevronRightIcon } from './Icons';

// Reuse chevron for left arrow by flipping
function ChevronLeftIcon(props) {
  return (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={props.className || ''}>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

export default function TestimonialSlider({ testimonials = [] }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((index) => {
    if (animating || index === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 300);
  }, [animating, current]);

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);
  const next = useCallback(() => goTo((current + 1) % testimonials.length), [current, goTo, testimonials.length]);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, testimonials.length]);

  if (!testimonials.length) return null;

  const t = testimonials[current];

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.card} ${animating ? styles.fadeOut : styles.fadeIn}`}>
        <span className={styles.quoteOpen}>&ldquo;</span>
        <p className={styles.quote}>{t.quote}</p>
        <span className={styles.quoteClose}>&rdquo;</span>
        <div className={styles.author}>
          <div className={styles.authorInfo}>
            <span className={styles.name}>{t.name}</span>
            <span className={styles.role}>{t.role}{t.company ? ` · ${t.company}` : ''}</span>
          </div>
        </div>
      </div>

      <div className={styles.controls}>
        <button onClick={prev} className={styles.arrow} aria-label="Previous">
          <ChevronLeftIcon size={20} />
        </button>
        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button onClick={next} className={styles.arrow} aria-label="Next">
          <ChevronRightIcon size={20} />
        </button>
      </div>
    </div>
  );
}
