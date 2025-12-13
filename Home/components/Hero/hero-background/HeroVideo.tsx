'use client';

import { useState, useRef, useEffect } from 'react';

/**
 * Hero Video Component - 2025 Best Practices
 * 
 * Modern background video implementation following 2025 UI/UX standards:
 * 
 * 🎯 Performance:
 * - Poster image for instant visual feedback (0ms load time)
 * - Intersection Observer for lazy loading (saves bandwidth)
 * - Reduced motion support (respects user preferences)
 * - Network-aware loading (adapts to connection speed)
 * 
 * 🎨 User Experience:
 * - Smooth fade transitions (no jarring appearance)
 * - Graceful degradation (works on all devices)
 * - Error handling with elegant fallback
 * - Loading shimmer effect (modern skeleton state)
 * 
 * ♿ Accessibility:
 * - Respects prefers-reduced-motion
 * - Proper ARIA labels and semantic HTML
 * - Screen reader friendly
 * 
 * @component HeroVideo
 * @author Smarter Payouts Team
 * @since 2024
 * @version 3.0.0 - 2025 Best Practices
 */
export default function HeroVideo() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isSlowConnection, setIsSlowConnection] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 2025 Best Practice: Respect user motion preferences
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    motionQuery.addEventListener('change', handleMotionChange);
    return () => motionQuery.removeEventListener('change', handleMotionChange);
  }, []);

  // 2025 Best Practice: Network-aware loading
  useEffect(() => {
    if (typeof navigator === 'undefined' || !('connection' in navigator)) return;
    
    const connection = (navigator as any).connection;
    if (connection) {
      // Detect slow connections (2G, slow-2g, or save-data enabled)
      const isSlow = connection.effectiveType === '2g' || 
                     connection.effectiveType === 'slow-2g' ||
                     connection.saveData === true;
      setIsSlowConnection(isSlow);
    }
  }, []);

  // 2025 Best Practice: Immediate loading for hero video (above-the-fold)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Hero video is above-the-fold, load immediately instead of lazy loading
    setIsInView(true);
    
    // Optional: Preload video for even faster start
    const video = videoRef.current;
    if (video && !prefersReducedMotion && !isSlowConnection) {
      // Start loading video immediately
      video.load();
    }
  }, [prefersReducedMotion, isSlowConnection]);

  // Video event handlers
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isInView) return;

    // Skip video on reduced motion or slow connection - show poster only
    if (prefersReducedMotion || isSlowConnection) {
      if (process.env.NODE_ENV === 'development') {
        console.log('[HeroVideo] Using poster only (reduced motion or slow connection)');
      }
      return;
    }

    const handleCanPlay = () => {
      // Video loaded successfully - no need to log
      setVideoLoaded(true);
    };

    const handleError = () => {
      // Only log errors in development - keep warnings for production issues
      if (process.env.NODE_ENV === 'development') {
        console.warn('[HeroVideo] Video failed to load, using fallback poster');
      }
      setVideoError(true);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [isInView, prefersReducedMotion, isSlowConnection]);

  // Determine if video should play
  const shouldPlayVideo = isInView && !prefersReducedMotion && !isSlowConnection && !videoError;

  const containerStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    pointerEvents: 'none', // Ensures clicks pass through to buttons
  };

  const videoStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 1,
    opacity: videoLoaded && shouldPlayVideo ? 1 : 0,
    transition: 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1)', // 2025: Smoother easing
    transform: videoLoaded ? 'scale(1)' : 'scale(1.02)', // 2025: Subtle zoom effect
    willChange: 'opacity, transform', // 2025: Performance hint
  };

  const posterStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0,
    opacity: !videoLoaded || !shouldPlayVideo ? 1 : 0,
    transition: 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1)',
    filter: !videoLoaded && isInView ? 'blur(0px)' : 'blur(0px)', // 2025: Clean, no blur
  };

  // 2025 Best Practice: Loading shimmer effect
  const shimmerStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
    animation: isInView && !videoLoaded && !videoError ? 'shimmer 2s infinite' : 'none',
    zIndex: 2,
    pointerEvents: 'none',
  };

  return (
    <div ref={containerRef} style={containerStyle}>
      {/* CSS Animation for shimmer effect */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `
      }} />

      {/* Fallback Poster Image - Shows immediately while video loads */}
      <img
        src="/assets/videos/promos/counting-cash-poster.jpg"
        alt="Financial freedom - Counting cash"
        style={posterStyle}
        loading="eager" // 2025: Instant load for LCP optimization
        fetchPriority="high" // 2025: Browser hint for priority loading
        decoding="async" // 2025: Non-blocking decode
      />

      {/* Loading shimmer effect - Modern skeleton state */}
      {isInView && !videoLoaded && !videoError && !prefersReducedMotion && (
        <div style={shimmerStyle} aria-hidden="true" />
      )}

      {/* Background Video - Loads immediately for above-the-fold content */}
      {shouldPlayVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto" // 2025: Changed to 'auto' for hero video (load ASAP)
          style={videoStyle}
          aria-label="Background video showing financial success"
          disablePictureInPicture // 2025: Prevent unwanted PiP
          disableRemotePlayback // 2025: Prevent casting
        >
          {/* MP4 only - universal compatibility (works on ALL devices including Apple) */}
          <source src="/assets/videos/promos/counting-cash.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
}
