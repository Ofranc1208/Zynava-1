/**
 * useSpecialistSession Hook
 * 
 * Manages specialist authentication, profile data, and online/offline status.
 */

import { useState, useEffect } from 'react';
import { specialistService } from '../../../../../../services/chat';
import type { SpecialistProfile } from '../../../../../../services/chat';

export const useSpecialistSession = (specialistId: string) => {
  const [specialist, setSpecialist] = useState<SpecialistProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeSpecialist = async () => {
      try {
        console.log('[useSpecialistSession] 🚀 Initializing specialist:', specialistId);
        setLoading(true);
        
        // Get specialist profile
        console.log('[useSpecialistSession] 📋 Getting specialist profile...');
        const specialistData = await specialistService.getSpecialist(specialistId);
        console.log('[useSpecialistSession] 📋 Specialist data received:', specialistData);
        
        if (!specialistData) {
          console.error('[useSpecialistSession] ❌ Specialist not found:', specialistId);
          setError('Specialist not found. Please register first.');
          setLoading(false);
          return;
        }

        // Set specialist status to online FIRST
        console.log('[useSpecialistSession] 🟢 Setting specialist online...');
        await specialistService.updateSpecialistStatus(specialistId, 'online');

        // Then update the UI with the online status
        console.log('[useSpecialistSession] ✅ Specialist initialized successfully');
        setSpecialist({
          ...specialistData,
          status: 'online'
        });

        setLoading(false);
      } catch (err) {
        console.error('[useSpecialistSession] ❌ Failed to initialize specialist:', err);
        setError('Failed to load dashboard. Please try again.');
        setLoading(false);
      }
    };

    initializeSpecialist();

    // Cleanup: Set specialist offline
    return () => {
      console.log('[useSpecialistSession] 🧹 Setting specialist offline...');
      if (specialistId) {
        specialistService.updateSpecialistStatus(specialistId, 'offline').catch(console.error);
      }
    };
  }, [specialistId]);

  return { specialist, loading, error };
};

