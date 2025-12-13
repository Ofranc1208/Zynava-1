'use client';

import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

/**
 * CTA Buttons Container Component
 * 
 * Orchestrates hero CTA buttons with action-first priority.
 * 
 * Button order (updated for visibility strategy):
 * 1. Primary (Green): "Get Instant Estimate" → /mint-intelligent-chat (action-first)
 * 2. Secondary (Yellow): "How Our Process Works" → /main (educational)
 * 
 * @component CTAButtonsContainer
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function CTAButtonsContainer() {
  return (
    <div style={{ 
      marginTop: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.15rem',
      alignItems: 'center'
    }}>
      {/* Existing buttons */}
      <PrimaryButton />
      <SecondaryButton />
    </div>
  );
}
