/**
 * SmartInputBar Utils - Orchestra Pattern
 *
 * Utility functions for file validation, upload logic, and device detection
 * Provides reusable logic for the SmartInputBar component system
 *
 * @module SmartInputBar/utils
 * @author Smarter Payouts Team
 * @since 2024
 */

import { FileUploadResult } from './types';

/**
 * Default file upload configuration
 */
export const DEFAULT_FILE_CONFIG = {
  maxFileSize: 10 * 1024 * 1024, // 10MB
  allowedTypes: [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
    'text/plain'
  ] as const,
  maxFiles: 5,
} as const;

/**
 * Validates file type and size
 */
export const validateFile = (file: File, config = DEFAULT_FILE_CONFIG): string | null => {
  if (file.size > config.maxFileSize) {
    return `File size must be less than ${config.maxFileSize / (1024 * 1024)}MB`;
  }

  if (!config.allowedTypes.includes(file.type as any)) {
    return 'File type not supported. Please upload PDF, DOC, DOCX, JPG, PNG, GIF, or TXT files.';
  }

  return null;
};

/**
 * Validates multiple files
 */
export const validateFiles = (files: File[], config = DEFAULT_FILE_CONFIG): { validFiles: File[]; errors: string[] } => {
  const validFiles: File[] = [];
  const errors: string[] = [];

  files.forEach(file => {
    const error = validateFile(file, config);
    if (error) {
      errors.push(`${file.name}: ${error}`);
    } else {
      validFiles.push(file);
    }
  });

  return { validFiles, errors };
};

/**
 * Generates a unique file ID for tracking uploads
 */
export const generateFileId = (file: File): string => {
  return `${file.name}-${file.size}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Formats file size for display
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
};

/**
 * Gets appropriate file icon based on MIME type
 */
export const getFileIcon = (mimeType: string): string => {
  if (mimeType.startsWith('image/')) {
    return '🖼️';
  }
  if (mimeType === 'application/pdf') {
    return '📕';
  }
  if (mimeType.includes('document') || mimeType.includes('word')) {
    return '📄';
  }
  if (mimeType === 'text/plain') {
    return '📝';
  }
  return '📎';
};

/**
 * Simulates file upload with progress (replace with real upload logic)
 * This is a mock implementation for demonstration
 */
export const simulateFileUpload = async (file: File): Promise<FileUploadResult> => {
  return new Promise((resolve, reject) => {
    const fileId = generateFileId(file);

    console.log(`📤 Starting simulated upload for: ${file.name} (${formatFileSize(file.size)})`);

    // Simulate upload completion after 1.5 seconds
    setTimeout(() => {
      // Simulate occasional upload failures (0% chance for better UX - disabled for production)
      if (Math.random() < 0.00) {
        console.error(`❌ Simulated upload failed for: ${file.name}`);
        reject(new Error('Upload failed. Please try again.'));
        return;
      }

      console.log(`✅ Simulated upload complete for: ${file.name}`);

      // Return mock upload result
      // Use a local object URL so previews work in development without a real CDN
      const objectUrl = URL.createObjectURL(file);
      resolve({
        url: objectUrl,
        name: file.name,
        size: file.size
      });
    }, 1500);
  });
};

/**
 * Detects if device is mobile
 */
export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;

  return window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

/**
 * Detects if virtual keyboard is visible on mobile
 */
export const isKeyboardVisible = (): boolean => {
  if (typeof window === 'undefined') return false;

  const viewport = window.visualViewport;
  if (!viewport) return false;

  return viewport.height < window.innerHeight * 0.75;
};

/**
 * Calculates optimal textarea height based on content
 */
export const calculateTextareaHeight = (
  scrollHeight: number,
  isMobile: boolean,
  minLines = 1,
  maxLines = 3
): number => {
  const lineHeight = isMobile ? 44 : 40; // iOS recommended vs desktop
  const minHeight = lineHeight * minLines;
  const maxHeight = lineHeight * maxLines;

  return Math.min(Math.max(scrollHeight, minHeight), maxHeight);
};
