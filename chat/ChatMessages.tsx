"use client";

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useChat } from '../../contexts/ChatContext';
import { Message } from '../../hooks/useConversationalForm';
import ChatBubble from './ChatBubble';
import ChatbotTyping from '../../components/chatbot/ChatbotTyping';
import DocumentPreview from './DocumentPreview';
import { LiveChatQueue } from './SpecialistChat/LiveChatQueue';
import GuaranteedCalculationLink from '../calculator/guaranteedstep/shared/GuaranteedCalculationLink';
import ContactInfo from './ContactInfo/ContactInfo';
import OscarFrancisCard from './OscarFrancisCard';
import SaharBakhshCard from './SaharBakhshCard';
import QuoteButton from './QuoteButton';
import ProcessStepsCard from './ProcessStepsCard/ProcessStepsCard';
import LocationCard from './LocationCard/LocationCard';
import CallNowCard from './CallNowCard';
import BookAppointmentCard from './BookAppointmentCard';
import styles from './ChatBubble.module.css';
// import { parseAIResponse } from '../../utils/parsing'; // No longer needed for text messages

const ChatMessages = () => {
  const { visibleMessages, isTyping, initializeLiveChat, setVisibleMessages } = useChat();
  const containerRef = useRef<HTMLDivElement>(null);
  const autoScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Safety check: ensure visibleMessages is always an array
  const messages = Array.isArray(visibleMessages) ? visibleMessages : [];

  // Auto-scroll to bottom when new messages arrive (always)
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current.parentElement;
    if (!container) return;

    // Clear any pending auto-scroll
    if (autoScrollTimeoutRef.current) {
      clearTimeout(autoScrollTimeoutRef.current);
    }

    // Always scroll to bottom when new messages arrive
    autoScrollTimeoutRef.current = setTimeout(() => {
      if (container) {
        container.scrollTo({
          top: container.scrollHeight,
          behavior: 'smooth'
        });
      }
    }, 100);

    return () => {
      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current);
      }
    };
  }, [messages, isTyping]);

  // Component hydrator - converts serializable component data back to JSX
  const hydrateComponent = (componentType: string, componentData: Record<string, any>) => {
    switch (componentType) {
      case 'CalculationLink':
        return (
          <div
            style={componentData.style}
            onClick={() => {
              window.location.href = componentData.href;
            }}
          >
            {componentData.text}
          </div>
        );
      case 'GuaranteedCalculationLink':
        return (
          <GuaranteedCalculationLink
            text={componentData.text}
            href={componentData.href}
            sessionId={componentData.sessionId}
          />
        );
      case 'ContactInfo':
        return <ContactInfo {...componentData} />;
      case 'OscarFrancisCard':
        return <OscarFrancisCard {...componentData} />;
      case 'SaharBakhshCard':
        return <SaharBakhshCard {...componentData} />;
      case 'QuoteButton':
        return <QuoteButton {...componentData} />;
      case 'ProcessStepsCard':
        return <ProcessStepsCard {...componentData} />;
      case 'LocationCard':
        return <LocationCard {...componentData} />;
      case 'CallNowCard':
        return <CallNowCard {...componentData} />;
      case 'BookAppointmentCard':
        return <BookAppointmentCard {...componentData} />;
      // Add more component types here as needed
      default:
        console.warn(`Unknown component type: ${componentType}`);
        return <div>Unknown component type: {componentType}</div>;
    }
  };

  // Handle queue specialist assignment
  const handleSpecialistAssigned = useCallback(async (specialistName: string) => {
    console.log('[ChatMessages] Specialist assigned from queue:', specialistName);
    
    // Session is already initialized in ChatContext - no need to call again
    // The real-time listener in useLiveChat will handle the specialist assignment
    console.log('[ChatMessages] ✅ Specialist connection established via real-time listener');
  }, []);

  // Master renderer for all message types
  const renderMessage = (msg: Message) => {
    switch (msg.type) {
      case 'queue':
        // Render the premium queue experience
        return (
          <div key={msg.id} style={{ marginBottom: '0.5rem' }}> {/* 50% smaller from 1rem */}
                 <LiveChatQueue
                   onAssigned={handleSpecialistAssigned}
                   initialQueuePosition={4}
                   initialWaitTime={420}
                   sessionId={msg.sessionId}
                 />
          </div>
        );
      case 'text':
        return (
          <ChatBubble key={msg.id} sender={msg.sender}>
            {msg.text}
          </ChatBubble>
        );
      case 'file':
        // Map file message sender to ChatBubble compatible sender
        const fileSender = msg.sender === 'assistant' ? 'bot' : msg.sender as 'user' | 'bot' | 'system';

        return (
          <ChatBubble key={msg.id} sender={fileSender}>
            <div className={styles.fileMessage}>
              {/* Document thumbnail preview */}
              <div className={styles.filePreviewContainer}>
                <DocumentPreview
                  fileUrl={msg.content.url}
                  fileName={msg.content.name}
                  mimeType={msg.content.mime}
                  className={styles.documentThumbnail}
                />
              </div>
              
              {/* File info below preview */}
              <div className={styles.fileInfo}>
                <div className={styles.fileName}>
                  <strong>Document uploaded:</strong> {msg.content.name}
                </div>
                <div className={styles.fileMeta}>
                  {(msg.content.size / 1024).toFixed(1)} KB • Uploaded successfully ✓
                </div>
              </div>
            </div>
          </ChatBubble>
        );
      case 'component':
        // Handle both legacy JSX components and new serializable components
        if (msg.component) {
          // Legacy JSX component
          return <div key={msg.id}>{msg.component}</div>;
        } else if (msg.componentType && msg.componentData) {
          // New serializable component - hydrate it
          return <div key={msg.id}>{hydrateComponent(msg.componentType, msg.componentData)}</div>;
        } else {
          console.warn('Component message missing both component and componentType/componentData:', msg);
          return null;
        }
      default:
        return null;
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        padding: '20px',
        paddingBottom: '32px', // Add extra bottom spacing to prevent sticking to input bar
        height: '100%', // Fill available space from CSS Grid parent
        overflow: 'visible' // Remove scrollbar, let parent handle layout
      }}
    >
      {messages.map(renderMessage)}
      {isTyping && <ChatbotTyping />}
      {/* Add extra spacing at the bottom for better visual separation */}
      <div style={{ height: '20px', flexShrink: 0 }} />
    </div>
  );
};

export default ChatMessages; 