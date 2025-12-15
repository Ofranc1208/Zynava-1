"use client";

import React from 'react';
import styles from '../SmartInputBar.module.css';
import { getFileIcon, formatFileSize } from '../utils';

/**
 * FilePreview Component - Orchestra Pattern
 *
 * Renders individual file preview with progress, error states, and remove functionality
 * Part of the SmartInputBar component system
 *
 * @component FilePreview
 * @author Smarter Payouts Team
 * @since 2024
 */
interface FilePreviewProps {
  file: File;
  progress?: number;
  error?: string;
  onRemove: (fileName: string) => void;
  isUploading?: boolean;
}

export const FilePreview: React.FC<FilePreviewProps> = ({
  file,
  progress = 0,
  error,
  onRemove,
  isUploading = false
}) => {
  const handleRemove = () => {
    if (!isUploading) {
      onRemove(file.name);
    }
  };

  return (
    <div className={`${styles.filePreview} ${error ? styles.filePreviewError : ''}`}>
      <div className={styles.filePreviewContent}>
        <div className={styles.filePreviewIcon}>
          {getFileIcon(file.type)}
        </div>

        <div className={styles.filePreviewInfo}>
          <div className={styles.filePreviewName}>{file.name}</div>
          <div className={styles.filePreviewSize}>
            {formatFileSize(file.size)}
          </div>
        </div>

        {isUploading && (
          <div className={styles.filePreviewProgress}>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className={styles.progressText}>{Math.round(progress)}%</span>
          </div>
        )}

        {error && (
          <div className={styles.filePreviewErrorText}>{error}</div>
        )}

        <button
          className={styles.filePreviewRemove}
          onClick={handleRemove}
          disabled={isUploading}
          aria-label={`Remove ${file.name}`}
          type="button"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default FilePreview;
