'use client';

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  customParameters?: Record<string, any>;
}

export const trackEvent = (event: AnalyticsEvent): void => {
  // Google Analytics 4 tracking
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      ...event.customParameters
    });
  }

  // Console log for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', event);
  }
};

export const initializeAnalytics = (): void => {
  if (typeof window !== 'undefined') {
    // Initialize Google Analytics
    console.log('Home Page Analytics Initialized');
  }
};

export const trackScrollDepth = (depth: number): void => {
  trackEvent({
    action: 'scroll_depth',
    category: 'engagement',
    label: 'home_page',
    value: depth
  });
};

export const trackTimeOnPage = (timeInSeconds: number): void => {
  trackEvent({
    action: 'time_on_page',
    category: 'engagement',
    label: 'home_page',
    value: timeInSeconds
  });
};

export const trackUserInteraction = (interactionType: string, element: string): void => {
  trackEvent({
    action: 'user_interaction',
    category: 'engagement',
    label: `${interactionType}_${element}`
  });
};

export const trackConversion = (conversionType: string, value?: number): void => {
  trackEvent({
    action: 'conversion',
    category: 'business',
    label: conversionType,
    value
  });
};
