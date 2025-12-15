'use client';

/**
 * Chat Conversation View Component
 * 
 * Displays real-time messages between specialist and customer.
 * Reuses existing ChatBubble components for consistent UI.
 * 
 * Features:
 * - Real-time message synchronization
 * - Auto-scroll to latest message
 * - Message history loading
 * - Typing indicators
 * - Message delivery status
 * 
 * @author Smarter Payouts Team
 * @since Phase 2 - Live Chat Implementation
 */

import React, { useState, useEffect, useRef } from 'react';
import { liveChatService } from '../../../../../services/chat';
import type { LiveChatMessage } from '../../../../../services/chat';
import ChatBubble from '../../ChatBubble';
import styles from './ChatConversationView.module.css';

interface ChatConversationViewProps {
  sessionId: string;
  specialistId: string;
  userId: string;
  specialistName: string;
  userName: string;
}

export const ChatConversationView: React.FC<ChatConversationViewProps> = ({
  sessionId,
  specialistId,
  userId,
  specialistName,
  userName
}) => {
  const [messages, setMessages] = useState<LiveChatMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageUnsubscribe = useRef<(() => void) | null>(null);
  const knownMessageIds = useRef<Set<string>>(new Set());
  const typingTimeoutRef = useRef<number | null>(null);

  // Load message history and set up real-time listener
  useEffect(() => {
    const initializeMessages = async () => {
      try {
        setLoading(true);
        console.log('[ChatConversationView] Loading messages for session:', sessionId);

        // Load recent message history
        const recentMessages = await liveChatService.getRecentMessages(sessionId, 50);
        setMessages(recentMessages);
        
        // Add loaded messages to known IDs to prevent duplicates
        recentMessages.forEach(msg => knownMessageIds.current.add(msg.id));

        // Set up real-time message listener
        messageUnsubscribe.current = liveChatService.onMessage(sessionId, (newMessage) => {
          console.log('[ChatConversationView] New message received:', newMessage);
          
          // Deduplicate messages at component level
          if (knownMessageIds.current.has(newMessage.id)) {
            console.log('[ChatConversationView] ⏭️ Duplicate message detected, skipping:', newMessage.id);
            return;
          }
          
          knownMessageIds.current.add(newMessage.id);
          setMessages(prevMessages => [...prevMessages, newMessage]);
          
          // Typing indicator handling
          if (newMessage.senderType === 'user') {
            setIsTyping(true);
            if (typingTimeoutRef.current) {
              window.clearTimeout(typingTimeoutRef.current);
            }
            typingTimeoutRef.current = window.setTimeout(() => {
              setIsTyping(false);
              typingTimeoutRef.current = null;
            }, 2000);
          } else {
            // Any non-user message cancels typing
            if (typingTimeoutRef.current) {
              window.clearTimeout(typingTimeoutRef.current);
              typingTimeoutRef.current = null;
            }
            setIsTyping(false);
          }
        });

        setLoading(false);
      } catch (err) {
        console.error('[ChatConversationView] Failed to load messages:', err);
        setLoading(false);
      }
    };

    initializeMessages();

    // Cleanup
        return () => {
      if (messageUnsubscribe.current) {
        messageUnsubscribe.current();
      }
          if (typingTimeoutRef.current) {
            window.clearTimeout(typingTimeoutRef.current);
            typingTimeoutRef.current = null;
          }
    };
  }, [sessionId]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner} />
        <p>Loading conversation...</p>
      </div>
    );
  }

  return (
    <div className={styles.conversationView}>
      {/* Messages List */}
      <div className={styles.messagesList}>
        {messages.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>💬</div>
            <h3>No messages yet</h3>
            <p>Start the conversation with {userName}</p>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`${styles.messageWrapper} ${
                  message.senderType === 'specialist' ? styles.messageRight : styles.messageLeft
                }`}
              >
                <div className={styles.messageMeta}>
                  <span className={styles.senderName}>
                    {message.senderType === 'specialist' ? specialistName : userName}
                  </span>
                  <span className={styles.messageTime}>
                    {new Date(message.timestamp).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
                <ChatBubble
                  sender={message.senderType === 'specialist' ? 'bot' : 'user'}
                >
                  {message.content}
                </ChatBubble>
                {message.metadata?.deliveryStatus && (
                  <div className={styles.deliveryStatus}>
                    {message.metadata.deliveryStatus === 'sent' && '✓'}
                    {message.metadata.deliveryStatus === 'delivered' && '✓✓'}
                    {message.metadata.deliveryStatus === 'read' && '✓✓ Read'}
                  </div>
                )}
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className={`${styles.messageWrapper} ${styles.messageLeft}`}>
                <div className={styles.messageMeta}>
                  <span className={styles.senderName}>{userName}</span>
                </div>
                <div className={styles.typingIndicator}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </>
        )}
      </div>
    </div>
  );
};

export default ChatConversationView;

