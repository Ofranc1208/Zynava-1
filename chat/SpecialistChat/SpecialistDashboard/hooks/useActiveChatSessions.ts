/**
 * useActiveChatSessions Hook
 * 
 * Manages real-time listening and filtering of chat sessions for a specialist.
 * Handles both waiting (incoming) and active (assigned) chats.
 */

import { useState, useEffect, useRef } from 'react';
import { realtimeManager } from '../../../../../../services/chat';
import type { LiveChatSession } from '../../../../../../services/chat';

export const useActiveChatSessions = (specialistId: string) => {
  const [activeChats, setActiveChats] = useState<LiveChatSession[]>([]);
  const [incomingChat, setIncomingChat] = useState<LiveChatSession | null>(null);
  const sessionListenerUnsubscribe = useRef<(() => void) | null>(null);

  useEffect(() => {
    const setupRealtimeListener = () => {
      console.log('[useActiveChatSessions] Setting up real-time listener for:', specialistId);
      
      // Set up real-time listener for all chat sessions
      sessionListenerUnsubscribe.current = realtimeManager.onSessionsUpdate((sessions) => {
        const allSessions = Object.values(sessions);
        console.log('[useActiveChatSessions] 📊 Total sessions in DB:', allSessions.length);
        
        // Filter sessions that are:
        // 1. Assigned to this specialist OR
        // 2. Waiting for assignment (status === 'waiting')
        const relevantSessions = allSessions.filter((session: any) => {
          const isAssignedToMe = session.specialistId === specialistId;
          const isWaitingForAssignment = session.status === 'waiting' && !session.specialistId;
          return isAssignedToMe || isWaitingForAssignment;
        });

        console.log('[useActiveChatSessions] 🔍 Relevant sessions for', specialistId, ':', relevantSessions.length);

        // Separate waiting chats from active chats
        const waitingChats = relevantSessions.filter((s: any) => s.status === 'waiting');
        const myActiveChats = relevantSessions.filter((s: any) => 
          s.status === 'active' && s.specialistId === specialistId
        );

        console.log('[useActiveChatSessions] ⏳ Waiting chats:', waitingChats.length);
        console.log('[useActiveChatSessions] ✅ Active chats:', myActiveChats.length);

        // Helper to convert ChatSession to LiveChatSession
        const convertToLiveChatSession = (session: any): LiveChatSession => ({
          ...session,
          createdAt: new Date(session.createdAt),
          updatedAt: new Date(session.updatedAt),
          lastMessageAt: new Date(session.lastMessageAt)
        });

        // If there's a new waiting chat, show the incoming alert
        if (waitingChats.length > 0 && !incomingChat) {
          const newestWaitingChat = waitingChats[0];
          console.log('[useActiveChatSessions] 🔔 New incoming chat detected:', newestWaitingChat);
          setIncomingChat(convertToLiveChatSession(newestWaitingChat));
        }

        // Update active chats list
        setActiveChats(myActiveChats.map(convertToLiveChatSession));
      });
    };

    setupRealtimeListener();

    // Cleanup: Unsubscribe from real-time listener
    return () => {
      console.log('[useActiveChatSessions] 🧹 Cleaning up real-time listener...');
      if (sessionListenerUnsubscribe.current) {
        sessionListenerUnsubscribe.current();
      }
    };
  }, [specialistId, incomingChat]);

  const clearIncomingChat = () => {
    setIncomingChat(null);
  };

  return {
    activeChats,
    incomingChat,
    clearIncomingChat
  };
};

