'use client';
import { useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
}

interface UseHomePerformanceReturn {
  measurePerformance: () => void;
  reportWebVitals: (metric: any) => void;
  trackVideoLoadTime: (loadTime: number) => void;
  trackImageLoadTime: (imageName: string, loadTime: number) => void;
}

export default function useHomePerformance(): UseHomePerformanceReturn {
  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Measure Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          const pageLoadTime = navEntry.loadEventEnd - navEntry.fetchStart;
          
          // Send to analytics (no console logging to reduce noise)
          if ((window as any).gtag) {
            (window as any).gtag('event', 'page_load_time', {
              event_category: 'performance',
              event_label: 'home_page',
              value: Math.round(pageLoadTime)
            });
          }
        }
      }
    });

    observer.observe({ entryTypes: ['navigation'] });

    return () => observer.disconnect();
  }, []);

  const reportWebVitals = useCallback((metric: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Home Web Vital:', metric);
    }

    // Send to analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', metric.name, {
        event_category: 'web_vitals',
        event_label: 'home_page',
        value: Math.round(metric.value),
        custom_parameter_1: metric.id
      });
    }
  }, []);

  const trackVideoLoadTime = useCallback((loadTime: number) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'video_load_time', {
        event_category: 'performance',
        event_label: 'hero_video',
        value: Math.round(loadTime)
      });
    }
  }, []);

  const trackImageLoadTime = useCallback((imageName: string, loadTime: number) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'image_load_time', {
        event_category: 'performance',
        event_label: imageName,
        value: Math.round(loadTime)
      });
    }
  }, []);

  useEffect(() => {
    // Initialize performance monitoring
    const cleanup = measurePerformance();
    
    // Monitor for layout shifts
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
            if (process.env.NODE_ENV === 'development') {
              console.log('Layout Shift detected:', (entry as any).value);
            }
          }
        }
      });

      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        clsObserver.disconnect();
        if (cleanup) cleanup();
      };
    }
  }, [measurePerformance]);

  return {
    measurePerformance,
    reportWebVitals,
    trackVideoLoadTime,
    trackImageLoadTime
  };
}
