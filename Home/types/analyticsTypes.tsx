// Home Page Analytics Types

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  customParameters?: Record<string, any>;
}

export interface UserInteraction {
  type: 'click' | 'hover' | 'scroll' | 'focus';
  element: string;
  timestamp: number;
  sectionName?: string;
  metadata?: Record<string, any>;
}

export interface PerformanceMetrics {
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay?: number;
  timeToInteractive?: number;
}

export interface ConversionFunnel {
  pageView: boolean;
  heroView: boolean;
  heroCTAClick: boolean;
  featureCardClick: boolean;
  testimonialView: boolean;
  finalCTAClick: boolean;
}

export interface ScrollTracking {
  depth: number;
  maxDepth: number;
  timeAtDepth: number;
  sectionViews: string[];
}

export interface VideoAnalytics {
  videoId: string;
  loadTime: number;
  playTime: number;
  pauseTime?: number;
  completionRate: number;
}

export interface FormAnalytics {
  formId: string;
  startTime: number;
  submitTime?: number;
  abandonmentPoint?: string;
  fieldInteractions: FieldInteraction[];
}

export interface FieldInteraction {
  fieldName: string;
  focusTime: number;
  blurTime?: number;
  changeCount: number;
}
