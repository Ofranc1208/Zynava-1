"use client";

import OpenAI from 'openai';

interface DocumentAnalysis {
  isSettlementDocument: boolean;
  documentType?: string;
  insuranceCompany?: string;
  paymentDetails?: {
    amount?: string;
    frequency?: string;
    startDate?: string;
    endDate?: string;
  };
  analysis: string;
}

/**
 * Advanced Document Analyzer using OpenAI Assistants API
 */
export class DocumentAnalyzer {
  private openai: OpenAI;
  private assistantId: string;
  private vectorStoreId: string;

  constructor() {
    if (typeof window === 'undefined') {
      // Server-side - use API key from environment
      this.openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });
    } else {
      // Client-side - use session token or similar
      this.openai = new OpenAI({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true
      });
    }

    this.assistantId = process.env.NEXT_PUBLIC_OPENAI_ASSISTANT_ID || '';
    this.vectorStoreId = process.env.NEXT_PUBLIC_OPENAI_VECTOR_STORE_ID || '';
  }

  /**
   * Analyze a document using OpenAI Assistants API
   */
  async analyzeDocument(file: File): Promise<DocumentAnalysis> {
    try {
      console.log('📄 Analyzing document with OpenAI Assistants:', file.name);

      // Step 1: Upload file to OpenAI
      const fileUpload = await this.uploadFileToOpenAI(file);

      // Step 2: Create thread with the file
      const thread = await this.createThreadWithFile(fileUpload.id);

      // Step 3: Run analysis with assistant
      const run = await this.runAnalysis(thread.id);

      // Step 4: Get analysis results
      const analysis = await this.getAnalysisResults(thread.id, run.id);

      // Step 5: Clean up (optional - files are auto-cleaned)
      await this.cleanup(fileUpload.id, thread.id);

      return this.parseAnalysis(analysis);
    } catch (error) {
      console.error('❌ Document analysis failed:', error);
      throw new Error('Failed to analyze document');
    }
  }

  private async uploadFileToOpenAI(file: File): Promise<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('purpose', 'assistants');

    const response = await fetch('/api/openai/upload-file', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload file to OpenAI');
    }

    return await response.json();
  }

  private async createThreadWithFile(fileId: string): Promise<any> {
    const response = await fetch('/api/openai/create-thread', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fileId,
        instructions: `You are a settlement document expert. Analyze this document and determine:

1. Is this a settlement document? (structured settlement, annuity, life insurance policy, etc.)
2. What type of document is it?
3. What insurance company issued it?
4. What are the key payment details (amount, frequency, dates)?
5. Can this document be used for settlement calculations?

Respond in a conversational way as if helping a client understand their document.`
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create analysis thread');
    }

    return await response.json();
  }

  private async runAnalysis(threadId: string): Promise<any> {
    const response = await fetch('/api/openai/run-analysis', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        threadId,
        assistantId: this.assistantId,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to run document analysis');
    }

    return await response.json();
  }

  private async getAnalysisResults(threadId: string, runId: string): Promise<string> {
    const response = await fetch(`/api/openai/get-results?threadId=${threadId}&runId=${runId}`);

    if (!response.ok) {
      throw new Error('Failed to get analysis results');
    }

    const data = await response.json();
    return data.content || 'Unable to analyze document content.';
  }

  private async cleanup(fileId: string, threadId: string): Promise<void> {
    // Optional: Clean up resources after analysis
    try {
      await fetch('/api/openai/cleanup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fileId, threadId }),
      });
    } catch (error) {
      console.warn('Cleanup failed:', error);
    }
  }

  private parseAnalysis(analysis: string): DocumentAnalysis {
    // Simple parsing - in production, you'd use more sophisticated NLP
    const isSettlementDocument = analysis.toLowerCase().includes('settlement') ||
                                analysis.toLowerCase().includes('annuity') ||
                                analysis.toLowerCase().includes('insurance');

    return {
      isSettlementDocument,
      analysis,
    };
  }
}
