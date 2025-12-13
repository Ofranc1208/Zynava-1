/**
 * CTA Buttons Component
 * 
 * Simply imports and uses the AboutUs HeroCTA component.
 * This ensures 100% consistency with the About Us page buttons.
 * 
 * @component CTAButtons
 * @author Smarter Payouts Team
 * @since 2024
 */

'use client';
import HeroCTA from '@/src/components/Pages/AboutUs/components/HeroSection/HeroCTA';
import { HERO_CTA_BUTTONS } from '@/src/components/Pages/AboutUs/components/HeroSection/data';

export default function CTAButtons() {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <HeroCTA buttons={HERO_CTA_BUTTONS} align="center" layout="horizontal" />
    </div>
  );
}

