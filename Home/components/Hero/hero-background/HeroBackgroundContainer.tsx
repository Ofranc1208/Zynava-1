'use client';

import HeroVideo from './HeroVideo';
import HeroOverlay from './HeroOverlay';

/**
 * Hero Background Container Component
 * 
 * Orchestrates the background video and overlay components
 * for the hero section.
 * 
 * @component HeroBackgroundContainer
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function HeroBackgroundContainer() {
  return (
    <>
      <HeroVideo />
      <HeroOverlay />
    </>
  );
}
