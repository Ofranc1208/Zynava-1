'use client'

import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

export default function CTAButtonsContainer() {
  return (
    <div style={{ 
      marginTop: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.15rem',
      alignItems: 'center'
    }}>
      <PrimaryButton />
      <SecondaryButton />
    </div>
  )
}

