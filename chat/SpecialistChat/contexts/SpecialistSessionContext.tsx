/**
 * Specialist Session Context
 *
 * Enhanced session management for specialist chat interactions.
 * Extends the existing chat session functionality with specialist-specific
 * tracking and context management.
 */

import React, { createContext, useContext, ReactNode } from 'react';

export interface SpecialistSessionData {
  sessionId: string;
  userIntent: 'live_chat' | 'sms' | 'phone_call' | 'calculator' | null;
  complexityScore: number;
  preferredContactMethod: 'chat' | 'sms' | 'phone' | null;
  handoffTriggers: string[];
  conversationTranscript: Array<{
    id: string;
    type: 'user' | 'bot' | 'system';
    content: string;
    timestamp: string;
  }>;
  specialistAssigned: boolean;
  handoffCompleted: boolean;
  metadata: {
    source: string;
    startTime: string;
    deviceInfo: string;
    userAgent: string;
  };
}

export interface SpecialistSessionContextType {
  sessionData: SpecialistSessionData;
  updateSessionData: (updates: Partial<SpecialistSessionData>) => void;
  addMessageToTranscript: (message: { type: 'user' | 'bot' | 'system'; content: string }) => void;
  incrementComplexityScore: (points: number) => void;
  addHandoffTrigger: (trigger: string) => void;
  markHandoffCompleted: () => void;
  resetSession: () => void;
}

const SpecialistSessionContext = createContext<SpecialistSessionContextType | undefined>(undefined);

/**
 * Default session data structure
 */
const createDefaultSessionData = (): SpecialistSessionData => ({
  sessionId: `specialist_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
  userIntent: null,
  complexityScore: 0,
  preferredContactMethod: null,
  handoffTriggers: [],
  conversationTranscript: [],
  specialistAssigned: false,
  handoffCompleted: false,
  metadata: {
    source: 'specialist-button',
    startTime: new Date().toISOString(),
    deviceInfo: typeof window !== 'undefined' ? `${window.screen.width}x${window.screen.height}` : 'unknown',
    userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'unknown'
  }
});

/**
 * Specialist Session Provider Component
 */
export const SpecialistSessionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sessionData, setSessionData] = React.useState<SpecialistSessionData>(createDefaultSessionData);

  const updateSessionData = React.useCallback((updates: Partial<SpecialistSessionData>) => {
    setSessionData(prev => ({ ...prev, ...updates }));
  }, []);

  const addMessageToTranscript = React.useCallback((message: { type: 'user' | 'bot' | 'system'; content: string }) => {
    const newMessage = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      ...message,
      timestamp: new Date().toISOString()
    };

    setSessionData(prev => ({
      ...prev,
      conversationTranscript: [...prev.conversationTranscript, newMessage]
    }));
  }, []);

  const incrementComplexityScore = React.useCallback((points: number) => {
    setSessionData(prev => ({
      ...prev,
      complexityScore: Math.min(prev.complexityScore + points, 10) // Cap at 10
    }));
  }, []);

  const addHandoffTrigger = React.useCallback((trigger: string) => {
    setSessionData(prev => ({
      ...prev,
      handoffTriggers: prev.handoffTriggers.includes(trigger)
        ? prev.handoffTriggers
        : [...prev.handoffTriggers, trigger]
    }));
  }, []);

  const markHandoffCompleted = React.useCallback(() => {
    setSessionData(prev => ({
      ...prev,
      handoffCompleted: true,
      specialistAssigned: true
    }));
  }, []);

  const resetSession = React.useCallback(() => {
    setSessionData(createDefaultSessionData());
  }, []);

  const contextValue: SpecialistSessionContextType = {
    sessionData,
    updateSessionData,
    addMessageToTranscript,
    incrementComplexityScore,
    addHandoffTrigger,
    markHandoffCompleted,
    resetSession
  };

  return (
    <SpecialistSessionContext.Provider value={contextValue}>
      {children}
    </SpecialistSessionContext.Provider>
  );
};

/**
 * Hook to use specialist session context
 */
export const useSpecialistSession = (): SpecialistSessionContextType => {
  const context = useContext(SpecialistSessionContext);
  if (context === undefined) {
    throw new Error('useSpecialistSession must be used within a SpecialistSessionProvider');
  }
  return context;
};

/**
 * Utility functions for session analysis
 */
export const analyzeSessionForHandoff = (sessionData: SpecialistSessionData): {
  shouldHandoff: boolean;
  confidence: number;
  reasons: string[];
} => {
  const reasons: string[] = [];
  let confidence = 0;

  // Check handoff triggers
  if (sessionData.handoffTriggers.length > 0) {
    reasons.push(`Explicit handoff triggers: ${sessionData.handoffTriggers.join(', ')}`);
    confidence += 0.3;
  }

  // Check complexity score
  if (sessionData.complexityScore >= 7) {
    reasons.push(`High complexity score: ${sessionData.complexityScore}/10`);
    confidence += 0.4;
  }

  // Check user intent
  if (sessionData.userIntent && ['live_chat', 'phone_call'].includes(sessionData.userIntent)) {
    reasons.push(`Clear intent for human interaction: ${sessionData.userIntent}`);
    confidence += 0.3;
  }

  // Check transcript for keywords
  const transcriptText = sessionData.conversationTranscript
    .map(msg => msg.content.toLowerCase())
    .join(' ');

  const specialistKeywords = ['specialist', 'human', 'person', 'agent', 'help', 'confused'];
  const keywordMatches = specialistKeywords.filter(keyword =>
    transcriptText.includes(keyword)
  );

  if (keywordMatches.length > 0) {
    reasons.push(`Specialist keywords detected: ${keywordMatches.join(', ')}`);
    confidence += 0.2;
  }

  return {
    shouldHandoff: confidence >= 0.5,
    confidence: Math.min(confidence, 1),
    reasons
  };
};

/**
 * Session persistence utilities
 */
export const saveSpecialistSession = (sessionData: SpecialistSessionData): void => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(`specialist-session-${sessionData.sessionId}`, JSON.stringify(sessionData));
    } catch (error) {
      console.warn('[SpecialistSession] Failed to save session to localStorage:', error);
    }
  }
};

export const loadSpecialistSession = (sessionId: string): SpecialistSessionData | null => {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem(`specialist-session-${sessionId}`);
      return saved ? JSON.parse(saved) : null;
    } catch (error) {
      console.warn('[SpecialistSession] Failed to load session from localStorage:', error);
      return null;
    }
  }
  return null;
};

export const clearSpecialistSession = (sessionId: string): void => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(`specialist-session-${sessionId}`);
    } catch (error) {
      console.warn('[SpecialistSession] Failed to clear session from localStorage:', error);
    }
  }
};

