import React from 'react';

/**
 * SmartInputBar Types - Orchestra Pattern
 *
 * Type definitions for the SmartInputBar component system
 * Provides type safety for file upload, input management, and UI state
 *
 * @module SmartInputBar/types
 * @author Smarter Payouts Team
 * @since 2024
 */

// File upload related types
export interface FileUploadResult {
  url: string;
  name: string;
  size: number;
}

export interface FileUploadError {
  fileId: string;
  message: string;
}

export interface FileUploadState {
  selectedFiles: File[];
  uploadingFiles: Map<string, number>;
  uploadErrors: Map<string, string>;
}

// Input management types
export interface InputState {
  text: string;
  isFocused: boolean;
  textareaHeight: string;
}

export interface InputConfig {
  maxLength?: number;
  placeholder?: string;
  autoResize?: boolean;
}

// Mobile and keyboard detection types
export interface DeviceState {
  isMobile: boolean;
  isKeyboardVisible: boolean;
}

// Component props interfaces
export interface SmartInputBarProps {
  onFileUpload?: (file: File) => Promise<FileUploadResult>;
  onFileUploaded?: (uploadResult: FileUploadResult) => void;
  maxFileSize?: number;
  allowedTypes?: string[];
  disabled?: boolean;
  className?: string;
}

// Hook return types
export interface UseFileUploadReturn {
  selectedFiles: File[];
  uploadingFiles: Map<string, number>;
  uploadErrors: Map<string, string>;
  triggerFileUpload: () => void;
  removeSelectedFile: (fileName: string) => void;
  validateFile: (file: File) => string | null;
  uploadFile: (file: File) => Promise<FileUploadResult>;
  fileInputRef: React.RefObject<HTMLInputElement>;
  handleFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface UseInputManagerReturn {
  text: string;
  setText: (text: string) => void;
  isFocused: boolean;
  textareaHeight: string;
  handleFocus: () => void;
  handleBlur: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  handleSend: () => void;
  resetInput: () => void;
}

export interface UseDeviceDetectionReturn {
  isMobile: boolean;
  isKeyboardVisible: boolean;
}
