/**
 * SmartInputBar Module - Orchestra Pattern
 *
 * Clean export interface for the SmartInputBar component system.
 * This module provides a centralized export point for all SmartInputBar-related
 * components, types, utilities, and hooks.
 *
 * @module SmartInputBar
 * @author Smarter Payouts Team
 * @since 2024
 */

// Main component exports
export { SmartInputBar } from './SmartInputBar';

// Component exports
export { FilePreview } from './components/FilePreview';

// Hook exports
export { useFileUpload } from './hooks/useFileUpload';
export { useInputManager } from './hooks/useInputManager';
export { useDeviceDetection } from './hooks/useDeviceDetection';

// Type exports
export type {
  FileUploadResult,
  FileUploadError,
  FileUploadState,
  InputState,
  InputConfig,
  DeviceState,
  SmartInputBarProps,
  UseFileUploadReturn,
  UseInputManagerReturn,
  UseDeviceDetectionReturn
} from './types';

// Utility exports
export {
  validateFile,
  validateFiles,
  generateFileId,
  formatFileSize,
  getFileIcon,
  simulateFileUpload,
  isMobileDevice,
  isKeyboardVisible,
  calculateTextareaHeight,
  DEFAULT_FILE_CONFIG
} from './utils';
