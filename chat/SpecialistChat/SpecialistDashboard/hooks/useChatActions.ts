/**
 * useChatActions Hook
 * 
 * Manages all chat-related actions: accepting, declining, ending chats, and sending messages.
 */

import { useState } from 'react';
import { liveChatService } from '../../../../../../services/chat';

export const useChatActions = (
  specialistId: string,
  onChatAccepted: (sessionId: string) => void,
  onChatDeclined: () => void
) => {
  const [isSending, setIsSending] = useState(false);

  const acceptChat = async (sessionId: string) => {
    try {
      console.log('[useChatActions] ✅ Accepting chat:', sessionId, 'for specialist:', specialistId);
      
      // Assign this specific specialist to the session
      await liveChatService.assignSpecialist(sessionId, specialistId);
      
      // Notify parent component
      onChatAccepted(sessionId);
      
      console.log('[useChatActions] ✅ Chat accepted successfully');
    } catch (err) {
      console.error('[useChatActions] ❌ Failed to accept chat:', err);
      throw new Error('Failed to accept chat. Please try again.');
    }
  };

  const declineChat = async (sessionId: string) => {
    try {
      console.log('[useChatActions] ❌ Declining chat:', sessionId);
      
      // Update session status to 'cancelled' so it doesn't keep appearing
      await liveChatService.endLiveChatSession(sessionId, 'cancelled');
      
      // Dismiss the alert
      onChatDeclined();
      
      console.log('[useChatActions] ✅ Chat declined and session cancelled');
    } catch (err) {
      console.error('[useChatActions] Failed to decline chat:', err);
      throw new Error('Failed to decline chat. Please try again.');
    }
  };

  const endChat = async (sessionId: string) => {
    try {
      console.log('[useChatActions] 🔚 Ending chat:', sessionId);
      await liveChatService.endLiveChatSession(sessionId, 'completed');
      console.log('[useChatActions] ✅ Chat ended successfully');
    } catch (err) {
      console.error('[useChatActions] Failed to end chat:', err);
      throw new Error('Failed to end chat. Please try again.');
    }
  };

  const sendMessage = async (sessionId: string, message: string) => {
    if (!message.trim() || isSending) {
      return;
    }

    try {
      setIsSending(true);
      console.log('[useChatActions] 📤 Sending message:', message);

      await liveChatService.sendMessage(
        sessionId,
        message.trim(),
        specialistId,
        'specialist'
      );

      console.log('[useChatActions] ✅ Message sent successfully');
    } catch (err) {
      console.error('[useChatActions] ❌ Failed to send message:', err);
      throw new Error('Failed to send message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return {
    acceptChat,
    declineChat,
    endChat,
    sendMessage,
    isSending
  };
};

