import { useEffect, RefObject } from 'react';

interface CounterConfig {
  ref: RefObject<HTMLDivElement>;
  target: number;
  prefix?: string;
  suffix?: string;
}

export const useCounterAnimation = (counters: CounterConfig[], duration: number = 10000) => {
  useEffect(() => {
    counters.forEach(({ ref, target, prefix = '', suffix = '' }) => {
      if (!ref.current) return;
      let startTimestamp: number | null = null;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * target);
        if (ref.current) {
          ref.current.textContent = `${prefix}${value.toLocaleString('en-US')}${suffix}`;
        }
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    });
  }, [counters, duration]);
};

