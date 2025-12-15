"use client";

import React, { useRef, useEffect } from 'react';
import ChatBubble from '../../../chat/ChatBubble';
import ChatbotTyping from '../../../chatbot/ChatbotTyping';
import styles from './MessageContainer.module.css';

export interface Message {
  id: string;
  sender: 'system' | 'user' | 'bot';
  text: string;
}

export interface MessageContainerProps {
  messages: Message[];
  isTyping: boolean;
  isLoading?: boolean;
}

/**
 * MessageContainer - Handles message display with auto-scroll functionality
 * The actual scrolling container is the parent div in AssistantPanel
 */
const MessageContainer: React.FC<MessageContainerProps> = ({
  messages,
  isTyping,
  isLoading = false
}) => {
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive or typing status changes
  useEffect(() => {
    // Scroll the end marker into view, which will scroll the parent container
    if (endOfMessagesRef.current) {
      setTimeout(() => {
        endOfMessagesRef.current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'end'
        });
      }, 100);
    }
  }, [messages, isTyping]);

  return (
    <div className={styles.messagesWrapper}>
      {messages.map((message) => (
        <ChatBubble 
          key={message.id} 
          sender={message.sender}
        >
          {message.text}
        </ChatBubble>
      ))}
      {isTyping && <ChatbotTyping />}
      {/* Invisible marker at the end for auto-scroll */}
      <div ref={endOfMessagesRef} style={{ height: '1px' }} />
    </div>
  );
};

export default MessageContainer;
