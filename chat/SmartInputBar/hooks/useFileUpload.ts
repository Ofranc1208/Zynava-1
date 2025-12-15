"use client";

import { useState, useRef, useCallback } from 'react';
import { FileUploadResult, UseFileUploadReturn, FileUploadState } from '../types';
import { validateFiles, generateFileId, simulateFileUpload } from '../utils';

/**
 * useFileUpload Hook - Orchestra Pattern
 *
 * Manages file upload state, validation, and upload logic
 * Provides clean interface for file upload functionality
 *
 * @hook useFileUpload
 * @author Smarter Payouts Team
 * @since 2024
 */
export const useFileUpload = (
  onFileUpload?: (file: File) => Promise<FileUploadResult>,
  onFileUploaded?: (uploadResult: FileUploadResult, file: File) => void
): UseFileUploadReturn => {
  // File upload state
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadingFiles, setUploadingFiles] = useState<Map<string, number>>(new Map());
  const [uploadErrors, setUploadErrors] = useState<Map<string, string>>(new Map());

  // Refs
  const fileInputRef = useRef<HTMLInputElement>(null);

  /**
   * Validates file type and size
   */
  const validateFile = useCallback((file: File): string | null => {
    if (file.size > 10 * 1024 * 1024) { // 10MB
      return `File size must be less than 10MB`;
    }

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'image/jpeg', 'image/jpg', 'image/png', 'image/gif',
      'text/plain'
    ];

    if (!allowedTypes.includes(file.type)) {
      return 'File type not supported. Please upload PDF, DOC, DOCX, JPG, PNG, GIF, or TXT files.';
    }

    return null;
  }, []);

  /**
   * Handles file selection from input
   */
  const handleFileSelect = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);

    if (files.length === 0) return;

    // Validate all files
    const { validFiles, errors } = validateFiles(files);

    // Show errors if any
    if (errors.length > 0) {
      alert(errors.join('\n'));
      return;
    }

    // Add valid files to selected files
    setSelectedFiles(prev => [...prev, ...validFiles]);

    // Upload files asynchronously
    validFiles.forEach(async (file) => {
      try {
        const fileId = generateFileId(file);
        
        // Start progress tracking
        setUploadingFiles(prev => new Map(prev.set(fileId, 0)));

        // Upload file (use custom handler or default simulation)
        const uploadResult = onFileUpload
          ? await onFileUpload(file)
          : await simulateFileUpload(file);

        console.log('✅ File uploaded successfully:', uploadResult);

        // Remove from selected files after successful upload
        setSelectedFiles(prev => prev.filter(f => f.name !== file.name));
        
        // Clear uploading state
        setUploadingFiles(prev => {
          const newMap = new Map(prev);
          newMap.delete(fileId);
          return newMap;
        });

        // Revoke object URL later to avoid memory leaks
        if (uploadResult?.url && uploadResult.url.startsWith('blob:')) {
          setTimeout(() => {
            try { URL.revokeObjectURL(uploadResult.url); } catch {}
          }, 60_000);
        }

        // Notify parent component about successful upload
        if (onFileUploaded) {
          onFileUploaded(uploadResult, file);
        }

        // Return the upload result so it can be used by the component
        return uploadResult;

      } catch (error) {
        console.error('❌ File upload failed:', error);
        const fileId = generateFileId(file);
        setUploadErrors(prev => new Map(prev.set(fileId, 'Upload failed. Please try again.')));
      }
    });

    // Clear input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [onFileUpload, onFileUploaded]);

  /**
   * Triggers file input click
   */
  const triggerFileUpload = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  /**
   * Removes a file from selected files (cancels upload)
   */
  const removeSelectedFile = useCallback((fileName: string) => {
    setSelectedFiles(prev => prev.filter(file => file.name !== fileName));
  }, []);

  /**
   * Uploads a file with progress tracking
   */
  const uploadFile = useCallback(async (file: File): Promise<FileUploadResult> => {
    const fileId = generateFileId(file);

    // Simulate upload progress
    const progressInterval = setInterval(() => {
      setUploadingFiles(prev => {
        const currentProgress = prev.get(fileId) || 0;
        const newProgress = Math.min(currentProgress + Math.random() * 20, 100);

        if (newProgress >= 100) {
          clearInterval(progressInterval);
          return new Map(prev.set(fileId, 100));
        }

        return new Map(prev.set(fileId, newProgress));
      });
    }, 200);

    try {
      // Use custom upload handler or default simulation
      const uploadResult = onFileUpload
        ? await onFileUpload(file)
        : await simulateFileUpload(file);

      // Clear progress on success
      setUploadingFiles(prev => {
        const newMap = new Map(prev);
        newMap.delete(fileId);
        return newMap;
      });

      return uploadResult;
    } catch (error) {
      // Set error state
      setUploadErrors(prev => new Map(prev.set(fileId, 'Upload failed. Please try again.')));
      throw error;
    } finally {
      clearInterval(progressInterval);
    }
  }, [onFileUpload]);

  return {
    selectedFiles,
    uploadingFiles,
    uploadErrors,
    triggerFileUpload,
    removeSelectedFile,
    validateFile,
    uploadFile,
    handleFileSelect,
    fileInputRef,
  };
};

export default useFileUpload;
