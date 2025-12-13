'use client'

import { useState, useRef, useEffect } from 'react'

export default function HeroVideo() {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(motionQuery.matches)

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    motionQuery.addEventListener('change', handleMotionChange)
    return () => motionQuery.removeEventListener('change', handleMotionChange)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (prefersReducedMotion) return

    // Set playback speed to normal (100%)
    video.playbackRate = 1.0

    // Start loading video immediately for above-the-fold content
    video.load()

    const handleCanPlay = () => setVideoLoaded(true)
    const handleError = () => setVideoError(true)

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('error', handleError)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('error', handleError)
    }
  }, [prefersReducedMotion])

  const shouldPlayVideo = !prefersReducedMotion && !videoError

  return (
    <div ref={containerRef} style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 1
    }}>
      {/* Fallback image - shows immediately to prevent black screen */}
      <img
        src="/assets/images/Fallback image.JPG"
        alt="Hero background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: videoLoaded ? 0 : 1,
          transition: 'opacity 1s ease'
        }}
      />

      {shouldPlayVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1,
            opacity: videoLoaded ? 1 : 0,
            transition: 'opacity 1s ease'
          }}
          aria-label="Background video"
        >
          <source src="/assets/videos/Hero.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  )
}

