'use client'

export default function HeroOverlay() {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.45)',
      zIndex: 2,
      pointerEvents: 'none'
    }}></div>
  )
}

