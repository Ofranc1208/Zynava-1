/**
 * Preload Links Component - 2025 Optimized
 * 
 * Handles resource preloading for critical above-the-fold content.
 * Prioritizes poster image and video for instant hero experience.
 * 
 * @component PreloadLinks
 * @author Smarter Payouts Team
 * @since 2024
 * @version 2.0.0
 */
export default function PreloadLinks() {
  return (
    <>
      {/* Preload poster image - highest priority (instant LCP) */}
      <link
        rel="preload"
        href="/assets/videos/promos/counting-cash-poster.jpg"
        as="image"
        type="image/jpeg"
        // @ts-ignore - fetchpriority is valid but not in TS types yet
        fetchpriority="high"
      />
      
      {/* Preload MP4 video - universal compatibility (works on ALL devices) */}
      <link
        rel="preload"
        href="/assets/videos/promos/counting-cash.mp4"
        as="video"
        type="video/mp4"
      />
    </>
  );
}
