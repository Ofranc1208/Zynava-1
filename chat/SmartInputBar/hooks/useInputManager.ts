"use client";

import { useState, useRef, useCallback, useEffect } from 'react';
import { UseInputManagerReturn, InputConfig } from '../types';
import { calculateTextareaHeight } from '../utils';

/**
 * useInputManager Hook - Orchestra Pattern
 *
 * Manages text input state, auto-resize, focus handling, and send logic
 * Provides clean interface for input functionality
 *
 * @hook useInputManager
 * @author Smarter Payouts Team
 * @since 2024
 */
export const useInputManager = (
  onSend?: (text: string) => void,
  config: InputConfig = {}
): UseInputManagerReturn => {
  const {
    maxLength = 1000,
    placeholder = "Type a message...",
    autoResize = true
  } = config;

  // Input state
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [textareaHeight, setTextareaHeight] = useState('auto');

  // Refs
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  /**
   * Auto-resize textarea based on content
   */
  useEffect(() => {
    if (!autoResize || !textareaRef.current) return;

    const textarea = textareaRef.current;

    // Reset height to auto to get the correct scrollHeight
    textarea.style.height = 'auto';

    // Calculate new height with min/max constraints
    const scrollHeight = textarea.scrollHeight;
    const isMobile = window.innerWidth <= 768;
    const newHeight = calculateTextareaHeight(scrollHeight, isMobile);

    textarea.style.height = `${newHeight}px`;
    setTextareaHeight(`${newHeight}px`);
  }, [text, autoResize]);

  /**
   * Handles focus events
   */
  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  /**
   * Handles blur events
   */
  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  /**
   * Enhanced keyboard handling for modern chat UX
   * Enter sends, Shift+Enter creates new line
   */
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent default new line
      handleSend();
    }
  }, []);

  /**
   * Handles message sending with validation and cleanup
   */
  const handleSend = useCallback(() => {
    if (text.trim() && onSend) {
      onSend(text);
      setText('');

      // Reset textarea height after sending
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        setTextareaHeight('auto');
      }
    }
  }, [text, onSend]);

  /**
   * Resets input state
   */
  const resetInput = useCallback(() => {
    setText('');
    setIsFocused(false);

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      setTextareaHeight('auto');
    }
  }, []);

  return {
    text,
    setText,
    isFocused,
    textareaHeight,
    handleFocus,
    handleBlur,
    handleKeyDown,
    handleSend,
    resetInput,
  };
};

export default useInputManager;
