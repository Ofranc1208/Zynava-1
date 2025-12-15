"use client";

import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Configure PDF.js worker (pdfjs-dist v4 uses ESM worker: pdf.worker.min.mjs)
// We self-host the worker in /public to avoid CDN 404 for .mjs
if (typeof window !== 'undefined') {
  pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
}

interface DocumentPreviewProps {
  fileUrl: string;
  fileName: string;
  mimeType: string;
  className?: string;
}

/**
 * DocumentPreview Component
 * 
 * Renders a thumbnail preview of uploaded documents:
 * - PDF files: Shows first page as thumbnail
 * - Images: Shows the actual image
 * - Other files: Shows file icon with name
 * 
 * @component
 */
export const DocumentPreview: React.FC<DocumentPreviewProps> = ({
  fileUrl,
  fileName,
  mimeType,
  className = '',
}) => {
  const [error, setError] = useState<string | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setError(null);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error('Error loading PDF:', error);
    setError('Failed to load PDF preview');
  };

  // Render based on file type
  if (mimeType.startsWith('image/')) {
    // Image preview
    return (
      <div className={`document-preview image-preview ${className}`}>
        <img
          src={fileUrl}
          alt={fileName}
          style={{
            maxWidth: '100%',
            maxHeight: '200px',
            borderRadius: '8px',
            objectFit: 'contain',
            display: 'block',
          }}
          onError={(e) => {
            console.error('Error loading image:', e);
            setError('Failed to load image');
          }}
        />
      </div>
    );
  }

  if (mimeType === 'application/pdf') {
    // PDF preview
    return (
      <div className={`document-preview pdf-preview ${className}`}>
        {error ? (
          <div
            style={{
              padding: '20px',
              textAlign: 'center',
              background: '#f3f4f6',
              borderRadius: '8px',
              color: '#6b7280',
            }}
          >
            <span>📄</span>
            <div style={{ marginTop: '8px', fontSize: '12px' }}>{error}</div>
          </div>
        ) : (
          <Document
            file={fileUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={
              <div
                style={{
                  padding: '20px',
                  textAlign: 'center',
                  background: '#f3f4f6',
                  borderRadius: '8px',
                }}
              >
                <div className="loading-spinner" style={{ margin: '0 auto' }} />
                <div style={{ marginTop: '8px', fontSize: '12px', color: '#6b7280' }}>
                  Loading preview...
                </div>
              </div>
            }
          >
            <Page
              pageNumber={1}
              width={250}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              loading=""
            />
          </Document>
        )}
        {numPages && numPages > 1 && (
          <div
            style={{
              marginTop: '4px',
              fontSize: '11px',
              color: '#6b7280',
              textAlign: 'center',
            }}
          >
            Page 1 of {numPages}
          </div>
        )}
      </div>
    );
  }

  // Fallback for other file types
  return (
    <div
      className={`document-preview fallback-preview ${className}`}
      style={{
        padding: '20px',
        textAlign: 'center',
        background: '#f3f4f6',
        borderRadius: '8px',
      }}
    >
      <div style={{ fontSize: '32px', marginBottom: '8px' }}>
        {mimeType.includes('word') || mimeType.includes('document') ? '📄' : '📎'}
      </div>
      <div style={{ fontSize: '12px', color: '#6b7280', wordBreak: 'break-word' }}>
        {fileName}
      </div>
    </div>
  );
};

export default DocumentPreview;

