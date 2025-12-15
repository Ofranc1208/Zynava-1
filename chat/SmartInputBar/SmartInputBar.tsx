"use client";

import React, { useRef } from 'react';
import { useChat } from '../../../contexts/ChatContext';
import { FileMessage } from '../../../hooks/useConversationalForm';
import { SmartInputBarProps } from './types';
import { useFileUpload } from './hooks/useFileUpload';
import { useInputManager } from './hooks/useInputManager';
import { useDeviceDetection } from './hooks/useDeviceDetection';
import FilePreview from './components/FilePreview';
import { extractPDFText, analyzePDFDocument } from './utils/pdfExtractor';
import styles from './SmartInputBar.module.css';

/**
 * Smart Input Bar Component - Orchestra Pattern (2025 Edition)
 *
 * Modern chat input following 2025 UX best practices:
 * - Minimal, clean design with subtle shadows and rounded corners
 * - Adaptive height with multiline support (1-3 lines)
 * - Sticky positioning relative to keyboard/safe area on mobile
 * - Enhanced accessibility with proper touch targets (44px+)
 * - Smooth transitions and animations
 * - Dark mode and theme awareness
 * - Auto-growing textarea with scroll fallback
 * - Contextual states and visual feedback
 * - File upload functionality with progress indicators
 *
 * Uses Orchestra pattern for clean separation of concerns:
 * - useFileUpload: File upload state and logic
 * - useInputManager: Text input state and logic
 * - useDeviceDetection: Mobile/keyboard detection
 * - FilePreview: File preview rendering
 *
 * @component SmartInputBar
 * @version 2025.2.0
 * @author Smarter Payouts Team
 * @since 2024
 *
 * @example
 * <SmartInputBar />
 *
 * @example
 * <SmartInputBar
 *   onFileUpload={customUploadHandler}
 *   maxFileSize={5 * 1024 * 1024}
 * />
 */
export const SmartInputBar: React.FC<SmartInputBarProps> = ({
  onFileUpload,
  maxFileSize,
  allowedTypes,
  disabled = false,
  className,
}) => {
  // Chat context integration
  const { sendMessage, isLoading } = useChat();

  // Custom hooks for separation of concerns
  const { isMobile, isKeyboardVisible } = useDeviceDetection();
  
  // Device detection for mobile file handling
  // File input configuration for iOS picker (capture handled via attribute)
  
  // Handle file upload completion - send to chat and analyze PDFs
  const handleFileUploaded = React.useCallback(async (uploadResult: any, file?: File) => {
    // Detect MIME type from file or extension
    let mimeType = 'application/octet-stream';
    if (file && file.type) {
      mimeType = file.type;
    } else if (uploadResult.name) {
      // Fallback: detect from extension
      const ext = uploadResult.name.split('.').pop()?.toLowerCase();
      const mimeMap: Record<string, string> = {
        'pdf': 'application/pdf',
        'doc': 'application/msword',
        'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'jpg': 'image/jpeg',
        'jpeg': 'image/jpeg',
        'png': 'image/png',
        'gif': 'image/gif',
        'txt': 'text/plain',
      };
      mimeType = mimeMap[ext || ''] || mimeType;
    }
    
    // Create FileMessage object
    const fileMessage: FileMessage = {
      id: `file-${Date.now()}`,
      type: 'file',
      content: {
        name: uploadResult.name,
        url: uploadResult.url,
        mime: mimeType,
        size: uploadResult.size,
        // Store the actual file for analysis (PDFs and images for preprocessing)
        ...(file && (mimeType === 'application/pdf' || mimeType.startsWith('image/')) && { _file: file })
      },
      sender: 'user',
      createdAt: new Date().toISOString(),
    };
    
    // Send file message to chat context (PDF analysis will be handled there)
    sendMessage(fileMessage);
  }, [sendMessage]);
  
  const {
    selectedFiles,
    uploadingFiles,
    uploadErrors,
    triggerFileUpload,
    removeSelectedFile,
    fileInputRef,
    handleFileSelect,
  } = useFileUpload(onFileUpload, handleFileUploaded);

  const {
    text,
    setText,
    isFocused,
    textareaHeight,
    handleFocus,
    handleBlur,
    handleKeyDown,
    handleSend,
    resetInput,
  } = useInputManager(
    (text) => {
      if (text.trim() && !isLoading) {
        sendMessage(text);
        resetInput();
      }
    },
    {
      maxLength: 1000,
      placeholder: "Type a message...",
      autoResize: true,
    }
  );

  // Refs for DOM manipulation
  const containerRef = useRef<HTMLDivElement>(null);

  // Dynamic class names with enhanced states
  const containerClasses = [
    styles.inputContainer,
    isMobile ? styles.mobileContainer : styles.desktopContainer,
    isKeyboardVisible ? styles.keyboardVisible : '',
    isLoading || disabled ? styles.loading : '',
    isFocused ? styles.focused : '',
    className || ''
  ].filter(Boolean).join(' ');

  const textareaClasses = [
    styles.inputField,
    isMobile ? styles.mobileInput : styles.desktopInput,
    isFocused ? styles.inputFocused : ''
  ].filter(Boolean).join(' ');

  const sendButtonClasses = [
    styles.sendButton,
    isMobile ? styles.mobileButton : styles.desktopButton,
    text.trim() || selectedFiles.length > 0 ? styles.sendButtonActive : styles.sendButtonInactive
  ].filter(Boolean).join(' ');

  return (
    <>
      {/* Hidden file input - iOS native picker (Take Photo / Photo Library / Browse) */}
      {/* Remove capture attribute to show iOS action sheet instead of forcing camera */}
      <input
        ref={fileInputRef}
        type="file"
        accept={isMobile ? "image/*" : "image/*,.pdf,.doc,.docx,.txt"}
        {...(!isMobile && { multiple: true })}
        onChange={handleFileSelect}
        style={{ display: 'none' }}
        aria-label="File upload input"
      />

      <div
        ref={containerRef}
        className={containerClasses}
        data-mobile={isMobile}
        data-keyboard-visible={isKeyboardVisible}
        data-focused={isFocused}
      >
        {/* File previews - shown above input when files are selected */}
        {selectedFiles.length > 0 && (
          <div className={styles.filePreviewsContainer}>
            {selectedFiles.map((file) => {
              const fileId = `${file.name}-${Date.now()}`;
              const isUploading = uploadingFiles.has(fileId);
              const progress = uploadingFiles.get(fileId) || 0;
              const error = uploadErrors.get(fileId);

              return (
                <FilePreview
                  key={fileId}
                  file={file}
                  progress={progress}
                  error={error}
                  isUploading={isUploading}
                  onRemove={removeSelectedFile}
                />
              );
            })}
          </div>
        )}

        {/* Input wrapper for better styling control */}
        <div className={styles.inputWrapper}>
          <textarea
            className={textareaClasses}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Type a message..."
            disabled={isLoading || disabled}
            rows={1}
            maxLength={1000}
            data-testid="chat-input"
            // Modern textarea attributes
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="sentences"
            spellCheck="true"
            aria-label="Message input"
            style={{ height: textareaHeight }}
          />
        </div>

        {/* Action buttons container */}
        <div className={styles.actionsContainer}>
          {/* Attachment button (minimal design) */}
          <button
            className={styles.attachButton}
            onClick={triggerFileUpload}
            disabled={isLoading || disabled}
            aria-label="Attach file"
            title="Attach file"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66L9.64 16.2a2 2 0 0 1-2.83-2.83l8.49-8.49"/>
            </svg>
          </button>

          {/* Send button with modern icon */}
          <button
            className={sendButtonClasses}
            onClick={handleSend}
            disabled={isLoading || disabled || (!text.trim() && selectedFiles.length === 0)}
            data-testid="send-button"
            aria-label="Send message"
            type="button"
          >
            {isLoading ? (
              <div className={styles.loadingSpinner} />
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m22 2-7 20-4-9-9-4 20-7z"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </>
  );
};
