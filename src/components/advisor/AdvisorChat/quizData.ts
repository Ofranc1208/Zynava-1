import React from 'react'
import type { AdvisorStep } from '../types'

export const QUIZ_STEPS: Record<string, AdvisorStep> = {
  welcome: {
    id: 'welcome',
    type: 'welcome',
    message: "Hi! I'm your Zynava Supplement Advisor. I'll help you find the right supplements based on your goals. Let's get started!",
    isComplete: false,
  },
  goals: {
    id: 'goals',
    type: 'goals',
    message: "Primary Wellness Goal",
    options: [
      { id: 'overall-health', label: '💪 Overall Wellness', value: 'overall-health' },
      { id: 'boost-immunity', label: '🛡️ Boost Immunity', value: 'boost-immunity' },
      { id: 'energy-vitality', label: '⚡ Energy & Vitality', value: 'energy-vitality' },
      { id: 'bone-joint', label: '🦴 Bone & Joint Health', value: 'bone-joint' },
      { id: 'heart-health', label: '❤️ Heart Health', value: 'heart-health' },
      { id: 'gut-health', label: '🌱 Gut Health', value: 'gut-health' },
      { id: 'sleep-stress', label: '😴 Sleep & Stress Relief', value: 'sleep-stress' },
      { id: 'brain-health', label: '🧠 Brain Health', value: 'brain-health' },
    ],
    isComplete: false,
  },
  demographics: {
    id: 'demographics',
    type: 'demographics',
    message: "About You",
    options: [
      // Row 1: Age 18-35
      { id: 'male-18-35', label: 'Male 18-35', value: 'male-18-35' },
      { id: 'female-18-35', label: 'Female 18-35', value: 'female-18-35' },
      // Row 2: Age 36-50
      { id: 'male-36-50', label: '36-50', value: 'male-36-50' },
      { id: 'female-36-50', label: '36-50', value: 'female-36-50' },
      // Row 3: Age 51-65
      { id: 'male-51-65', label: '51-65', value: 'male-51-65' },
      { id: 'female-51-65', label: '51-65', value: 'female-51-65' },
      // Row 4: Age 65+
      { id: 'male-65-plus', label: '65+', value: 'male-65-plus' },
      { id: 'female-65-plus', label: '65+', value: 'female-65-plus' },
    ],
    isComplete: false,
  },
  lifestyle: {
    id: 'lifestyle',
    type: 'lifestyle',
    message: "Activity Level",
    options: [
      { id: 'activity-power-lifter', label: '💪 Power Lifter', value: 'power-lifter' },
      { id: 'activity-endurance-athlete', label: '🏃‍♂️ Endurance Athlete', value: 'endurance-athlete' },
      { id: 'activity-regular-gym', label: '🏋️ Regular Gym Goer', value: 'regular-gym-goer' },
      { id: 'activity-active-lifestyle', label: '🚶‍♂️ Active Lifestyle', value: 'active-lifestyle' },
      { id: 'activity-light-exercise', label: '🧘‍♀️ Light Exercise', value: 'light-exercise' },
      { id: 'activity-desk-worker', label: '💺 Desk Worker', value: 'desk-worker' },
      { id: 'activity-low-activity', label: '🛋️ Low Activity', value: 'low-activity' },
      { id: 'activity-recovery', label: '🩹 Recovery/Injury', value: 'recovery-injury' },
    ],
    isComplete: false,
  },
  diet: {
    id: 'diet',
    type: 'diet',
    message: "Dietary Preferences",
    options: [
      { id: 'diet-no-preference', label: '🍽️ No Preference', value: 'no-preference' },
      { id: 'diet-vegan', label: '🌱 Vegan', value: 'vegan' },
      { id: 'diet-vegetarian', label: '🥗 Vegetarian', value: 'vegetarian' },
      { id: 'diet-gluten-free', label: '🌾 Gluten-Free', value: 'gluten-free' },
      { id: 'diet-sugar-free', label: '🚫 Sugar-Free', value: 'sugar-free' },
      { id: 'diet-kosher', label: '✡️ Kosher', value: 'kosher' },
      { id: 'diet-halal', label: '☪️ Halal', value: 'halal' },
      { id: 'diet-non-gmo', label: '🌿 Non-GMO/Organic', value: 'non-gmo-organic' },
    ],
    isComplete: false,
  },
  concerns: {
    id: 'concerns',
    type: 'concerns',
    message: 'Health Concerns',
    options: [
      { id: 'sleep-quality', label: '😴 Sleep quality issues', value: 'sleep-quality' },
      { id: 'low-energy', label: '⚡ Low energy', value: 'low-energy' },
      { id: 'digestive-sensitivity', label: '🌱 Digestive sensitivity', value: 'digestive-sensitivity' },
      { id: 'joint-discomfort', label: '🦴 Joint discomfort', value: 'joint-discomfort' },
      { id: 'stress-anxiety', label: '🧘 Stress/anxiety', value: 'stress-anxiety' },
      { id: 'immune-support', label: '🛡️ Immune system support', value: 'immune-support' },
      { id: 'weight-management', label: '⚖️ Weight management', value: 'weight-management' },
      { id: 'none', label: '✓ None of the above', value: 'none' },
    ],
    isComplete: false,
  },
  budget: {
    id: 'budget',
    type: 'budget',
    message: "Buying Preferences",
    options: [
      { id: 'pref-budget-friendly', label: '💰 Budget Friendly', value: 'budget-friendly' },
      { id: 'pref-premium-quality', label: '💎 Premium Quality', value: 'premium-quality' },
      { id: 'pref-subscribe-save', label: '📦 Subscribe & Save', value: 'subscribe-save' },
      { id: 'pref-free-shipping', label: '🚚 Free Shipping', value: 'free-shipping' },
      { id: 'pref-new-arrivals', label: '✨ New Arrivals', value: 'new-arrivals' },
      { id: 'pref-on-sale', label: '🏷️ On Sale', value: 'on-sale' },
      { id: 'pref-bundle-deals', label: '🎁 Bundle Deals', value: 'bundle-deals' },
    ],
    isComplete: false,
  },
}

export const STEP_ORDER = ['welcome', 'goals', 'demographics', 'lifestyle', 'diet', 'concerns', 'budget'] as const

