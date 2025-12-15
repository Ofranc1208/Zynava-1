"use client";

import React from 'react';
import styles from './ConfettiAnimation.module.css';

export interface ConfettiAnimationProps {
  show: boolean;
  particleCount?: number;
}

/**
 * ConfettiAnimation - Modern celebratory confetti animation
 * Enhanced with better particles, colors, and physics
 */
const ConfettiAnimation: React.FC<ConfettiAnimationProps> = ({
  show,
  particleCount = 80
}) => {
  if (!show) return null;

  const colors = [
    '#22c55e', // Green
    '#16a34a', // Dark green
    '#fbbf24', // Yellow
    '#f59e0b', // Orange
    '#3b82f6', // Blue
    '#8b5cf6', // Purple
    '#ec4899', // Pink
    '#10b981', // Emerald
  ];

  return (
    <div className={styles.container}>
      {[...Array(particleCount)].map((_, i) => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const isSquare = Math.random() > 0.5;
        const size = 8 + Math.random() * 8;
        
        return (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              background: color,
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: isSquare ? '2px' : '50%',
              animationDelay: `${Math.random() * 0.5}s`,
              animationDuration: `${2.5 + Math.random() * 1.5}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        );
      })}
    </div>
  );
};

export default ConfettiAnimation;
