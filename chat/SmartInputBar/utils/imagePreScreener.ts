"use client";

/**
 * Pre-screen images before sending to expensive OpenAI Vision API
 * This saves API credits by filtering out irrelevant documents
 */

interface PreScreenResult {
  shouldAnalyze: boolean;
  reason?: string;
  quickResponse?: string;
}

/**
 * Quick check if image is likely a settlement document
 * Uses basic heuristics to avoid expensive API calls for garbage uploads
 */
export async function preScreenImage(file: File): Promise<PreScreenResult> {
  // Check 1: File size validation (too small = probably not a document)
  const minSize = 10 * 1024; // 10KB minimum
  const maxSize = 10 * 1024 * 1024; // 10MB maximum
  
  if (file.size < minSize) {
    return {
      shouldAnalyze: false,
      reason: 'File too small',
      quickResponse: `This image seems too small to be a settlement document. Please upload a clear photo or scan of your benefits letter, payment schedule, or settlement agreement.`
    };
  }

  if (file.size > maxSize) {
    return {
      shouldAnalyze: false,
      reason: 'File too large',
      quickResponse: `This file is quite large. Please upload a compressed version or a clear photo of your settlement document (under 10MB).`
    };
  }

  // Check 2: File type validation
  const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  if (!validTypes.includes(file.type)) {
    return {
      shouldAnalyze: false,
      reason: 'Invalid file type',
      quickResponse: `Please upload your document as a JPG, PNG, or WebP image. For best results, use a clear photo or scan of your benefits letter.`
    };
  }

  // Check 3: Filename heuristics (optional but helpful)
  const fileName = file.name.toLowerCase();
  const settlementKeywords = [
    'benefit', 'settlement', 'annuity', 'payment', 'insurance',
    'metlife', 'structured', 'letter', 'verification', 'schedule'
  ];
  
  const hasRelevantKeyword = settlementKeywords.some(keyword => 
    fileName.includes(keyword)
  );

  // If filename suggests it might be relevant, proceed
  if (hasRelevantKeyword) {
    console.log('✅ [PreScreener] Filename suggests settlement document');
    return { shouldAnalyze: true };
  }

  // Check 4: Generic image names (screenshot, photo, etc.) - proceed with caution
  const genericNames = ['screenshot', 'photo', 'image', 'img', 'pic', 'scan'];
  const isGenericName = genericNames.some(name => fileName.includes(name));

  if (isGenericName || fileName.match(/^[a-z0-9]{1,10}\.(jpg|png|jpeg)$/i)) {
    console.log('⚠️ [PreScreener] Generic filename, will analyze but warn user');
    return { shouldAnalyze: true };
  }

  // If we get here, it's probably worth analyzing
  // Better to have false positives than miss legitimate documents
  console.log('✅ [PreScreener] Passed basic checks, proceeding to analysis');
  return { shouldAnalyze: true };
}

/**
 * Generate a cache key for the image to avoid re-analyzing
 */
export function generateImageCacheKey(file: File): string {
  return `img_${file.name}_${file.size}_${file.lastModified}`;
}

/**
 * Check if we've already analyzed this image
 */
export function getCachedAnalysis(cacheKey: string): string | null {
  try {
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      const { analysis, timestamp } = JSON.parse(cached);
      // Cache valid for 1 hour
      if (Date.now() - timestamp < 60 * 60 * 1000) {
        console.log('✅ [Cache] Using cached analysis');
        return analysis;
      }
    }
  } catch (error) {
    console.warn('[Cache] Error reading cache:', error);
  }
  return null;
}

/**
 * Cache the analysis result
 */
export function cacheAnalysis(cacheKey: string, analysis: string): void {
  try {
    sessionStorage.setItem(cacheKey, JSON.stringify({
      analysis,
      timestamp: Date.now()
    }));
    console.log('✅ [Cache] Analysis cached');
  } catch (error) {
    console.warn('[Cache] Error writing cache:', error);
  }
}

/**
 * Estimate if document looks like a settlement document based on quick checks
 */
export function quickSettlementCheck(fileName: string): {
  confidence: 'high' | 'medium' | 'low';
  message: string;
} {
  const fn = fileName.toLowerCase();
  
  // High confidence keywords
  const highConfidence = [
    'benefit', 'settlement', 'annuity', 'structured',
    'metlife', 'insurance', 'payment schedule'
  ];
  
  if (highConfidence.some(kw => fn.includes(kw))) {
    return {
      confidence: 'high',
      message: 'This looks like a settlement document. Analyzing...'
    };
  }

  // Medium confidence - generic document names
  const mediumConfidence = ['letter', 'document', 'scan', 'form'];
  if (mediumConfidence.some(kw => fn.includes(kw))) {
    return {
      confidence: 'medium',
      message: 'Analyzing document...'
    };
  }

  // Low confidence - might not be relevant
  return {
    confidence: 'low',
    message: 'Checking if this is a settlement-related document...'
  };
}

