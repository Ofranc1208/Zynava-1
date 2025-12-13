'use client';

export interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
}

export const measurePageLoadTime = (): number => {
  if (typeof window === 'undefined') return 0;
  
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  return navigation.loadEventEnd - navigation.fetchStart;
};

export const measureFirstContentfulPaint = (): Promise<number> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve(0);
      return;
    }

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          resolve(entry.startTime);
          observer.disconnect();
        }
      }
    });

    observer.observe({ entryTypes: ['paint'] });
  });
};

export const measureLargestContentfulPaint = (): Promise<number> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve(0);
      return;
    }

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      resolve(lastEntry.startTime);
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });

    // Timeout after 10 seconds
    setTimeout(() => {
      observer.disconnect();
      resolve(0);
    }, 10000);
  });
};

export const measureCumulativeLayoutShift = (): Promise<number> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve(0);
      return;
    }

    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
    });

    observer.observe({ entryTypes: ['layout-shift'] });

    // Return CLS value after 5 seconds
    setTimeout(() => {
      observer.disconnect();
      resolve(clsValue);
    }, 5000);
  });
};

export const optimizeImageLoading = (imageElement: HTMLImageElement): void => {
  // Add loading="lazy" for performance
  imageElement.loading = 'lazy';
  
  // Add decode="async" for better performance
  imageElement.decoding = 'async';
};

export const preloadCriticalResources = (resources: string[]): void => {
  if (typeof window === 'undefined') return;

  resources.forEach((resource) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    
    // Determine resource type
    if (resource.endsWith('.css')) {
      link.as = 'style';
    } else if (resource.endsWith('.js')) {
      link.as = 'script';
    } else if (resource.match(/\.(jpg|jpeg|png|webp|svg)$/)) {
      link.as = 'image';
    }
    
    document.head.appendChild(link);
  });
};
