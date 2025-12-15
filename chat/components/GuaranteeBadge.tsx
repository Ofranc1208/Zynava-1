import React from 'react';
import styles from './WelcomeComponents.module.css';

interface GuaranteeBadgeProps {
  onClick: () => void;
}

const GuaranteeBadge: React.FC<GuaranteeBadgeProps> = ({ onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={styles.guaranteeBadge}
    >
      100% Guaranteed Instant Payout Offer
    </div>
  );
};

export default GuaranteeBadge;
