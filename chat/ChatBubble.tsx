"use client";

import React from 'react';
import { formatMessageText } from '../../utils/parsing';
import styles from './ChatBubble.module.css';

/**
 * Chat bubble component for displaying messages from different senders
 *
 * Features:
 * - Conditional styling based on sender type (user/bot/system)
 * - Smooth fade-in animation on render using CSS modules
 * - Responsive design with proper text wrapping
 * - Consistent visual hierarchy across chat interface
 * - CSS modules for proper styling architecture
 * - Markdown support for bold text (**text**)
 *
 * @component
 * @example
 * // User message
 * <ChatBubble sender="user">Hello, I need help with my payments</ChatBubble>
 *
 * // Bot response with bold text
 * <ChatBubble sender="bot">Let's explore your **Early Payout Options**</ChatBubble>
 *
 * // System notification
 * <ChatBubble sender="system">Calculation completed successfully</ChatBubble>
 */
interface ChatBubbleProps {
  /** Determines the visual style and alignment of the bubble */
  sender: 'system' | 'user' | 'bot';
  /** Content to display inside the chat bubble */
  children: React.ReactNode;
  /** Optional additional CSS classes for custom styling */
  className?: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ sender, children, className }) => {
  // Build CSS classes using CSS modules approach
  const bubbleClasses = [
    styles.chatBubble,           // Base bubble styles
    styles[`chatBubble--${sender}`], // Sender-specific styles
    className                    // Additional custom classes
  ].filter(Boolean).join(' ');

  // Render text with markdown formatting support and line breaks
  const renderTextWithFormatting = (text: string) => {
    const { text: cleanText, hasBold } = formatMessageText(text);

    // Split by newlines first to preserve paragraphs
    const lines = text.split('\n');
    
    return lines.map((line, lineIndex) => {
      if (!line.trim()) {
        // Empty line - render as spacing
        return <br key={`br-${lineIndex}`} />;
      }

      // Check if line has bold text
      const hasBoldInLine = line.includes('**');
      
      if (!hasBoldInLine) {
        return (
          <React.Fragment key={lineIndex}>
            {line}
            {lineIndex < lines.length - 1 && <br />}
          </React.Fragment>
        );
      }

      // Split by bold markers and render with formatting
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      return (
        <React.Fragment key={lineIndex}>
          {parts.map((part, partIndex) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              // Remove the ** markers and make it bold
              const boldText = part.slice(2, -2);
              return <strong key={`${lineIndex}-${partIndex}`}>{boldText}</strong>;
            }
            return <React.Fragment key={`${lineIndex}-${partIndex}`}>{part}</React.Fragment>;
          })}
          {lineIndex < lines.length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  // Handle both string and React element children
  const renderChildren = () => {
    if (typeof children === 'string') {
      return renderTextWithFormatting(children);
    }
    return children;
  };

  return (
    <div className={bubbleClasses}>
      {renderChildren()}
    </div>
  );
};

export default ChatBubble; 