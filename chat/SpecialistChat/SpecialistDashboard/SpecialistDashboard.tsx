'use client';

/**
 * Specialist Dashboard - Sales Rep Interface (Refactored with Orchestra Pattern)
 * 
 * This is the main orchestrator component that coordinates:
 * - Specialist session management (via useSpecialistSession)
 * - Active chat sessions (via useActiveChatSessions)
 * - Chat actions (via useChatActions)
 * - UI components (DashboardHeader, ActiveChatsPanel, ConversationPanel)
 * 
 * @author Smarter Payouts Team
 * @since Phase 2 - Live Chat Implementation
 */

import React, { useState } from 'react';
import { IncomingChatAlert } from '../IncomingChatAlert';
import { DashboardHeader, ActiveChatsPanel, ConversationPanel } from './components';
import { useSpecialistSession, useActiveChatSessions, useChatActions } from './hooks';
import styles from './SpecialistDashboard.module.css';

interface SpecialistDashboardProps {
  specialistId: string;
}

export const SpecialistDashboard: React.FC<SpecialistDashboardProps> = ({ specialistId }) => {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);

  // Custom hooks for separated concerns
  const { specialist, loading, error } = useSpecialistSession(specialistId);
  const { activeChats, incomingChat, clearIncomingChat } = useActiveChatSessions(specialistId);
  const { acceptChat, declineChat, endChat, sendMessage, isSending } = useChatActions(
    specialistId,
    (sessionId) => {
      clearIncomingChat();
      setSelectedChatId(sessionId);
    },
    clearIncomingChat
  );

  // Handle chat acceptance
  const handleAcceptChat = async (sessionId: string) => {
    try {
      await acceptChat(sessionId);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to accept chat');
    }
  };

  // Handle chat decline
  const handleDeclineChat = async (sessionId: string) => {
    try {
      await declineChat(sessionId);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to decline chat');
    }
  };

  // Handle ending a chat
  const handleEndChat = async (sessionId: string) => {
    try {
      await endChat(sessionId);
      if (selectedChatId === sessionId) {
        setSelectedChatId(null);
      }
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to end chat');
    }
  };

  // Refresh handler (re-triggers the real-time listener)
  const handleRefresh = () => {
    console.log('[SpecialistDashboard] Manual refresh requested');
    // The real-time listener will automatically update
  };

  // Loading state
  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner} />
        <p>Loading dashboard...</p>
      </div>
    );
  }

  // Error state
  if (error || !specialist) {
    return (
      <div className={styles.errorContainer}>
        <h2>⚠️ Dashboard Error</h2>
        <p>{error || 'Failed to load specialist data'}</p>
        <a href="/admin/specialists" className={styles.errorLink}>
          Go to Specialist Registration
        </a>
      </div>
    );
  }

  // Find selected chat
  const selectedChat = activeChats.find(chat => chat.id === selectedChatId);

  return (
    <div className={styles.dashboardContainer}>
      {/* Incoming Chat Alert */}
      {incomingChat && (
        <IncomingChatAlert
          session={incomingChat}
          onAccept={handleAcceptChat}
          onDecline={handleDeclineChat}
          onDismiss={clearIncomingChat}
          autoCloseTimeout={30}
          playSound={true}
        />
      )}

      {/* Header */}
      <DashboardHeader
        specialist={specialist}
        activeChatCount={activeChats.length}
        onRefresh={handleRefresh}
      />

      {/* Main Content */}
      <div className={styles.dashboardContent}>
        {/* Active Chats Panel */}
        <ActiveChatsPanel
          activeChats={activeChats}
          selectedChatId={selectedChatId}
          onChatSelect={setSelectedChatId}
        />

        {/* Conversation View */}
        <ConversationPanel
          selectedChat={selectedChat || null}
          specialistId={specialistId}
          specialistName={specialist.name}
          onEndChat={handleEndChat}
          onSendMessage={sendMessage}
          onClearSelection={() => setSelectedChatId(null)}
          isSending={isSending}
        />
      </div>
    </div>
  );
};

export default SpecialistDashboard;
