"use client";

import * as pdfjs from 'pdfjs-dist';

// Configure worker (already set up in DocumentPreview)
if (typeof window !== 'undefined') {
  pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
}

/**
 * Extract text content from a PDF file using pdfjs-dist
 * @param file - The PDF file to extract text from
 * @returns Promise<string> - The extracted text content
 */
export async function extractPDFText(file: File): Promise<string> {
  try {
    // Convert File to ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();
    
    // Load PDF document
    const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
    
    let fullText = '';
    
    // Extract text from each page
    for (let pageNum = 1; pageNum <= Math.min(pdf.numPages, 5); pageNum++) { // Limit to first 5 pages for performance
      const page = await pdf.getPage(pageNum);
      const textContent = await page.getTextContent();
      
      // Combine text items into a single string
      const pageText = textContent.items
        .map((item: any) => item.str)
        .join(' ');
      
      fullText += pageText + '\n\n';
    }
    
    return fullText.trim();
  } catch (error) {
    console.error('Error extracting PDF text:', error);
    throw new Error('Failed to extract text from PDF');
  }
}

/**
 * Analyze PDF document using ChatGPT
 * @param pdfText - The extracted text from the PDF
 * @returns Promise<string> - ChatGPT's analysis of the document
 */
export async function analyzePDFDocument(pdfText: string): Promise<string> {
  try {
    const response = await fetch('/api/chat-gpt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'system',
            content: 'You are a structured settlement expert helping clients understand their documents. Be friendly, professional, and conversational.'
          },
          {
            role: 'user',
            content: `Please analyze this settlement document and provide a friendly, professional summary:

Document Text:
${pdfText.substring(0, 4000)} ${pdfText.length > 4000 ? '...(truncated)' : ''}

Please tell me:
1. What type of settlement document is this?
2. What insurance company issued it?
3. What are the key payment details (amount, frequency, dates)?
4. Is this the type of document that could be used for settlement calculations?

Respond in a conversational way as if you're helping a client understand their document.`
          }
        ],
        stream: false
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to analyze document');
    }

    const data = await response.json();
    return data.content || 'I was unable to analyze this document. Please contact our specialists for assistance.';
  } catch (error) {
    console.error('Error analyzing PDF document:', error);
    return 'I encountered an issue analyzing your document. Our team will review it manually and get back to you within 24 hours.';
  }
}
