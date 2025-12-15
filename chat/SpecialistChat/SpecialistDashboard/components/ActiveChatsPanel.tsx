/**
 * ActiveChatsPanel Component
 * 
 * Displays list of active chats for the specialist.
 */

import React from 'react';
import type { LiveChatSession } from '../../../../../../services/chat';
import styles from '../SpecialistDashboard.module.css';

interface ActiveChatsPanelProps {
  activeChats: LiveChatSession[];
  selectedChatId: string | null;
  onChatSelect: (chatId: string) => void;
}

export const ActiveChatsPanel: React.FC<ActiveChatsPanelProps> = ({
  activeChats,
  selectedChatId,
  onChatSelect
}) => {
  return (
    <aside className={styles.chatsPanel}>
      <div className={styles.panelHeader}>
        <h2 className={styles.panelTitle}>Active Chats</h2>
        <span className={styles.chatCount}>{activeChats.length}</span>
      </div>

      <div className={styles.chatsList}>
        {activeChats.length === 0 ? (
          <div className={styles.emptyState}>
            <p>No active chats</p>
            <span>Waiting for customers...</span>
          </div>
        ) : (
          activeChats.map(chat => (
            <div
              key={chat.id}
              className={`${styles.chatItem} ${selectedChatId === chat.id ? styles.chatItemActive : ''}`}
              onClick={() => onChatSelect(chat.id)}
            >
              <div className={styles.chatItemHeader}>
                <span className={styles.chatUserName}>
                  {chat.userInfo?.name || 'Customer'}
                </span>
                <span className={styles.chatTime}>
                  {new Date(chat.createdAt).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
              <div className={styles.chatItemPreview}>
                {chat.context?.botTranscript?.length > 0 ? 'Chat in progress' : 'New chat request'}
              </div>
            </div>
          ))
        )}
      </div>
    </aside>
  );
};

