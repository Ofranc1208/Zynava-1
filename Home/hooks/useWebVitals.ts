'use client';

import { useEffect } from 'react';

/**
 * Web Vitals Hook for Performance Monitoring
 * 
 * Tracks Core Web Vitals (LCP, FID, CLS) and reports to analytics
 * for continuous performance optimization.
 * 
 * @hook useWebVitals
 * @author Smarter Payouts Team
 * @since 2024
 * @version 1.0.0
 */

interface WebVitalMetric {
  name: string;
  value: number;
  id: string;
  delta: number;
  rating?: 'good' | 'needs-improvement' | 'poor';
}

export function useWebVitals() {
  useEffect(() => {
    // Delay web vitals loading to prevent blocking initial render
    const timer = setTimeout(() => {
      // Dynamic import to avoid SSR issues and reduce initial bundle
      import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      // Track Cumulative Layout Shift
      onCLS((metric: WebVitalMetric) => {
        trackWebVital('CLS', metric);
      });

      // Track First Input Delay
      onFID((metric: WebVitalMetric) => {
        trackWebVital('FID', metric);
      });

      // Track First Contentful Paint
      onFCP((metric: WebVitalMetric) => {
        trackWebVital('FCP', metric);
      });

      // Track Largest Contentful Paint
      onLCP((metric: WebVitalMetric) => {
        trackWebVital('LCP', metric);
      });

      // Track Time to First Byte
      onTTFB((metric: WebVitalMetric) => {
        trackWebVital('TTFB', metric);
      });
    }).catch(() => {
      // Graceful fallback if web-vitals fails to load
      console.warn('Web Vitals library not available');
    });
    }, 2000); // Delay 2 seconds to not block initial render

    return () => clearTimeout(timer);
  }, []);

  const trackWebVital = (name: string, metric: WebVitalMetric) => {
    // Send to Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', name, {
        event_category: 'Web Vitals',
        value: Math.round(name === 'CLS' ? metric.value * 1000 : metric.value),
        event_label: metric.id,
        non_interaction: true,
        custom_map: {
          metric_id: metric.id,
          metric_value: metric.value,
          metric_delta: metric.delta
        }
      });
    }

    // Send to custom analytics endpoint (only in production)
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      fetch('/api/analytics/web-vitals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          value: metric.value,
          id: metric.id,
          delta: metric.delta,
          rating: getVitalRating(name, metric.value),
          page: 'home',
          timestamp: Date.now(),
          userAgent: navigator.userAgent,
          url: window.location.href
        }),
      }).catch(() => {
        // Silently fail - don't break user experience
      });
    }

    // Suppress console warnings to reduce noise - still tracked via analytics
    // Uncomment below if you need to debug poor Web Vital ratings:
    // if (process.env.NODE_ENV === 'development') {
    //   const rating = getVitalRating(name, metric.value);
    //   if (rating === 'poor') {
    //     console.warn(`⚠️ Web Vital - ${name}:`, {
    //       value: metric.value,
    //       rating: rating,
    //       id: metric.id
    //     });
    //   }
    // }
  };

  const getVitalRating = (name: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
    const thresholds = {
      CLS: { good: 0.1, poor: 0.25 },
      FID: { good: 100, poor: 300 },
      FCP: { good: 1800, poor: 3000 },
      LCP: { good: 2500, poor: 4000 },
      TTFB: { good: 800, poor: 1800 }
    };

    const threshold = thresholds[name as keyof typeof thresholds];
    if (!threshold) return 'good';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  };

  return {
    trackWebVital
  };
}
