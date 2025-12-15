/**
 * Firebase Connection Test
 *
 * Simple test to verify Firebase connection is working
 * Run this in browser console or as a quick test
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { getDatabase, ref, set, get } from 'firebase/database';

// Your Firebase config (from .env.local)
const firebaseConfig = {
  apiKey: "AIzaSyBnK2w5R8oMniWF-N5LScQJgG4CNXxq3Sg",
  authDomain: "smarterwebsite-3d25d.firebaseapp.com",
  projectId: "smarterwebsite-3d25d",
  storageBucket: "smarterwebsite-3d25d.firebasestorage.app",
  messagingSenderId: "295883487525",
  appId: "1:295883487525:web:f84c5615dd5e8e878702cc",
  measurementId: "G-1YT0WLQRDT",
  databaseURL: "https://www.usa.gov/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Test Firestore
const db = getFirestore(app);

// Test Realtime Database
const rtdb = getDatabase(app);

export async function testFirebaseConnection() {
  console.log('🔥 Testing Firebase Connection...');

  try {
    // Test 1: Firestore write/read (with timeout)
    console.log('📝 Testing Firestore...');
    const testDocRef = doc(db, 'test', 'connection-test');

    try {
      await Promise.race([
        setDoc(testDocRef, {
          message: 'Firebase connection test',
          timestamp: new Date()
        }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Firestore write timeout')), 10000)
        )
      ]);

      const testDocSnap = await Promise.race([
        getDoc(testDocRef),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Firestore read timeout')), 5000)
        )
      ]);

      if (testDocSnap.exists()) {
        console.log('✅ Firestore write/read successful:', testDocSnap.data());
        // Update the test results for the UI
        if (typeof window !== 'undefined' && (window as any).updateTestResults) {
          (window as any).updateTestResults('firestore', true);
        }
      } else {
        console.log('❌ Firestore read failed');
        if (typeof window !== 'undefined' && (window as any).updateTestResults) {
          (window as any).updateTestResults('firestore', false);
        }
        return false;
      }
    } catch (firestoreError) {
      console.log('❌ Firestore test failed:', firestoreError);
      if (typeof window !== 'undefined' && (window as any).updateTestResults) {
        (window as any).updateTestResults('firestore', false);
      }
      return false;
    }

    // Test 2: Realtime Database write/read (with timeout)
    console.log('📡 Testing Realtime Database...');
    const testRef = ref(rtdb, 'test/connection-test');

    try {
      await Promise.race([
        set(testRef, {
          message: 'Realtime DB connection test',
          timestamp: Date.now()
        }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Realtime DB write timeout')), 10000)
        )
      ]);

      const snapshot = await Promise.race([
        get(testRef),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Realtime DB read timeout')), 5000)
        )
      ]);

      if (snapshot.exists()) {
        console.log('✅ Realtime Database write/read successful:', snapshot.val());
        // Update the test results for the UI
        if (typeof window !== 'undefined' && (window as any).updateTestResults) {
          (window as any).updateTestResults('realtimeDb', true);
        }
      } else {
        console.log('❌ Realtime Database read failed');
        if (typeof window !== 'undefined' && (window as any).updateTestResults) {
          (window as any).updateTestResults('realtimeDb', false);
        }
        return false;
      }
    } catch (realtimeError) {
      console.log('❌ Realtime Database test failed:', realtimeError);
      if (typeof window !== 'undefined' && (window as any).updateTestResults) {
        (window as any).updateTestResults('realtimeDb', false);
      }
      return false;
    }

    console.log('🎉 All Firebase tests passed! Connection is working correctly.');
    return true;

  } catch (error) {
    console.error('❌ Firebase connection test failed:', error);
    return false;
  }
}

// For browser console testing
if (typeof window !== 'undefined') {
  (window as any).testFirebaseConnection = testFirebaseConnection;
}
