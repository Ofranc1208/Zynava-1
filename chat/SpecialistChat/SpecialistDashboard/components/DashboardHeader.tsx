/**
 * DashboardHeader Component
 * 
 * Displays specialist info, status, and active chat count.
 */

import React from 'react';
import type { SpecialistProfile } from '../../../../../../services/chat';
import styles from '../SpecialistDashboard.module.css';

interface DashboardHeaderProps {
  specialist: SpecialistProfile;
  activeChatCount: number;
  onRefresh: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  specialist,
  activeChatCount,
  onRefresh
}) => {
  return (
    <header className={styles.dashboardHeader}>
      <div className={styles.headerLeft}>
        <h1 className={styles.dashboardTitle}>Specialist Dashboard</h1>
        <div className={styles.specialistInfo}>
          <div className={styles.specialistAvatar}>
            {specialist.name.charAt(0).toUpperCase()}
          </div>
          <div className={styles.specialistDetails}>
            <span className={styles.specialistName}>{specialist.name}</span>
            <div className={styles.statusBadge}>
              <span className={`${styles.statusDot} ${styles[specialist.status]}`} />
              <span className={styles.statusText}>{specialist.status}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.headerRight}>
        <div className={styles.statsCard}>
          <span className={styles.statLabel}>Active Chats</span>
          <span className={styles.statValue}>
            {activeChatCount}/{specialist.maxConcurrentChats}
          </span>
        </div>
        <button
          className={styles.refreshButton}
          onClick={onRefresh}
          aria-label="Refresh chats"
        >
          ↻
        </button>
      </div>
    </header>
  );
};

