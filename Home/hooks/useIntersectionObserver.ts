'use client';

import { useEffect, useState, useRef } from 'react';

/**
 * Intersection Observer Hook for Progressive Loading
 * 
 * Detects when elements enter the viewport for optimal lazy loading
 * and performance optimization.
 * 
 * @hook useIntersectionObserver
 * @author Smarter Payouts Team
 * @since 2024
 * @version 1.0.0
 */

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '100px',
    triggerOnce = true
  } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Skip if already triggered and triggerOnce is true
    if (hasTriggered && triggerOnce) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setIsIntersecting(isVisible);
        
        if (isVisible && triggerOnce) {
          setHasTriggered(true);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return {
    elementRef,
    isIntersecting: isIntersecting || hasTriggered,
    hasTriggered
  };
}

/**
 * Hook for multiple intersection observers
 * Useful for tracking multiple sections
 */
export function useMultipleIntersectionObserver(
  sectionsCount: number,
  options: UseIntersectionObserverOptions = {}
) {
  const [visibleSections, setVisibleSections] = useState<boolean[]>(
    new Array(sectionsCount).fill(false)
  );
  const elementRefs = useRef<(HTMLDivElement | null)[]>(
    new Array(sectionsCount).fill(null)
  );

  const {
    threshold = 0.1,
    rootMargin = '100px',
    triggerOnce = true
  } = options;

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    elementRefs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          const isVisible = entry.isIntersecting;
          
          setVisibleSections(prev => {
            const newState = [...prev];
            newState[index] = isVisible || (triggerOnce && newState[index]);
            return newState;
          });
        },
        {
          threshold,
          rootMargin
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [threshold, rootMargin, triggerOnce]);

  const setElementRef = (index: number) => (el: HTMLDivElement | null) => {
    elementRefs.current[index] = el;
  };

  return {
    visibleSections,
    setElementRef
  };
}
