"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './ChatInterface.module.css';
import type { ChatChoice } from './types';
import { SmartInputBar } from './SmartInputBar';
import ChatMessages from './ChatMessages';
import { useChat } from '../../contexts/ChatContext';

interface ChatInterfaceProps {
  onClose?: () => void;
  closeIcon?: React.ReactNode;
  activeScreen?: ChatChoice | null;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ 
  onClose, 
  closeIcon, 
  activeScreen
}) => {
  const searchParams = useSearchParams();
  const { liveChatMode, specialist, liveChatStatus, endLiveChat } = useChat();

  // Reset Chat Handler - clears session and redirects to fresh chat
  const handleResetChat = () => {
    const sessionId = searchParams.get('sessionId');
    
    // Clear the saved session from localStorage
    if (sessionId) {
      localStorage.removeItem(`chat-session-${sessionId}`);
    }
    
    // Redirect to fresh chat page (no URL parameters)
    if (typeof window !== 'undefined') {
      window.location.href = '/mint-intelligent-chat';
    }
  };


  // Example onSend handler (replace with your actual logic)
  const handleSend = (message: string) => {
    // TODO: Connect to chat state/controller
  };

  return (
    <div className={styles.chatContainer}>
      <header className={styles.chatHeader}>
        <div className={styles.headerLeft}>
          <span className={styles.headerTitle}>
            {liveChatMode && specialist ? specialist.name : 'Mint'}
          </span>
          {liveChatMode && (
            <span className={styles.liveChatBadge}>
              {liveChatStatus === 'connected' ? '🟢 Live' : '🟡 Connecting...'}
            </span>
          )}
        </div>
        <div className={styles.headerButtons}>
          {liveChatMode && endLiveChat && (
            <button
              className={styles.endChatButton}
              onClick={endLiveChat}
              aria-label="End live chat"
              title="End live chat"
              type="button"
            >
              End Chat
            </button>
          )}
          <button
            className={styles.resetButton}
            onClick={handleResetChat}
            aria-label="Reset chat"
            title="Reset chat"
            type="button"
          >
            ↻
          </button>
          {/* Close button - show when in modal mode (onClose provided) */}
          {onClose && closeIcon && (
            <button
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close chat"
              type="button"
            >
              {closeIcon}
            </button>
          )}
        </div>
      </header>
      <div className={styles.chatContent}>
        <ChatMessages />
      </div>
      <div className={styles.inputBarWrapper}>
        <SmartInputBar />
      </div>
    </div>
  );
};

export default ChatInterface; 