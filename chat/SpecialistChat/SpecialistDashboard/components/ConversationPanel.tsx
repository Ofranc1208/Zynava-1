/**
 * ConversationPanel Component
 * 
 * Displays the active conversation with message history and input.
 */

import React, { useState } from 'react';
import type { LiveChatSession } from '../../../../../../services/chat';
import { ChatConversationView } from '../../ChatConversationView';
import styles from '../SpecialistDashboard.module.css';

interface ConversationPanelProps {
  selectedChat: LiveChatSession | null;
  specialistId: string;
  specialistName: string;
  onEndChat: (sessionId: string) => void;
  onSendMessage: (sessionId: string, message: string) => Promise<void>;
  onClearSelection: () => void;
  isSending: boolean;
}

export const ConversationPanel: React.FC<ConversationPanelProps> = ({
  selectedChat,
  specialistId,
  specialistName,
  onEndChat,
  onSendMessage,
  onClearSelection,
  isSending
}) => {
  const [messageInput, setMessageInput] = useState('');

  const handleSendMessage = async () => {
    if (!selectedChat || !messageInput.trim() || isSending) {
      return;
    }

    try {
      await onSendMessage(selectedChat.id, messageInput);
      setMessageInput(''); // Clear input after successful send
    } catch (err) {
      alert('Failed to send message. Please try again.');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!selectedChat) {
    return (
      <main className={styles.conversationPanel}>
        <div className={styles.emptyConversation}>
          <h3>Select a chat to start</h3>
          <p>Choose a customer from the active chats list</p>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.conversationPanel}>
      <div className={styles.conversationContainer}>
        <div className={styles.conversationHeader}>
          <div className={styles.conversationHeaderLeft}>
            <button
              className={styles.clearSelectionButton}
              onClick={onClearSelection}
              title="Clear selection and go back to chat list"
            >
              ← Back
            </button>
            <h3 className={styles.conversationTitle}>
              {selectedChat.userInfo?.name || 'Customer'}
            </h3>
          </div>
          <button
            className={styles.endChatButton}
            onClick={() => onEndChat(selectedChat.id)}
          >
            End Chat
          </button>
        </div>

        <div className={styles.conversationMessages}>
          <ChatConversationView
            sessionId={selectedChat.id}
            specialistId={specialistId}
            userId={selectedChat.userId}
            specialistName={specialistName}
            userName={selectedChat.userInfo?.name || 'Customer'}
          />
        </div>

        <div className={styles.conversationInput}>
          <input
            type="text"
            placeholder="Type your message..."
            className={styles.messageInput}
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isSending}
          />
          <button 
            className={styles.sendButton}
            onClick={handleSendMessage}
            disabled={isSending || !messageInput.trim()}
          >
            {isSending ? 'Sending...' : 'Send'}
          </button>
        </div>
      </div>
    </main>
  );
};

