import React from 'react'
import type { AdvisorStep } from '../../types'

export const QUIZ_STEPS: Record<string, AdvisorStep> = {
  welcome: {
    id: 'welcome',
    type: 'welcome',
    message: "Hi! I'm your Zynava Supplement Advisor. I'll help you find the right supplements based on your goals. Let's get started!",
    isComplete: false,
  },

  // =============================================================================
  // STEP 1: Primary Goal (10 options)
  // =============================================================================
  goals: {
    id: 'goals',
    type: 'goals',
    message: "Primary Wellness Goal",
    options: [
      { id: 'overall-health', label: 'Overall Wellness', value: 'overall-health', image: '/assets/images/Overall Wellness.png' },
      { id: 'boost-immunity', label: 'Boost Immunity', value: 'boost-immunity', image: '/assets/images/Boost Immunity.png' },
      { id: 'energy-vitality', label: 'Energy & Vitality', value: 'energy-vitality', image: '/assets/images/Energy & Vitality.png' },
      { id: 'sleep-stress', label: 'Sleep & Stress Relief', value: 'sleep-stress', image: '/assets/images/icons8-sleep-100.png' },
      { id: 'gut-health', label: 'Gut Health', value: 'gut-health', image: '/assets/images/icons8-digest-48.png' },
      { id: 'heart-health', label: 'Heart Health', value: 'heart-health', image: '/assets/images/icons8-heart-100.png' },
      { id: 'brain-health', label: 'Brain Health', value: 'brain-health', image: '/assets/images/icons8-mental-health-64.png' },
      { id: 'bone-joint', label: 'Bone & Joint Health', value: 'bone-joint', image: '/assets/images/Bone .png' },
      { id: 'muscle-performance', label: 'Muscle & Performance', value: 'muscle-performance', image: '/assets/images/icons8-muscle-100.png' },
      { id: 'weight-management', label: 'Weight Management', value: 'weight-management', image: '/assets/images/icons8-weight-loss-64.png' },
    ],
    isComplete: false,
  },

  // =============================================================================
  // STEP 2: Profile (Sex + Age Range - fast chips, no big cards)
  // =============================================================================
  demographics: {
    id: 'demographics',
    type: 'demographics',
    message: "About You",
    options: [
      // Sex options with images
      { id: 'sex-male', label: 'Male', value: 'male', image: '/assets/images/icons8-male-100.png' },
      { id: 'sex-female', label: 'Female', value: 'female', image: '/assets/images/icons8-female-100.png' },
      // Age Range options (6 options)
      { id: 'age-18-29', label: '18–29', value: '18-29' },
      { id: 'age-30-39', label: '30–39', value: '30-39' },
      { id: 'age-40-49', label: '40–49', value: '40-49' },
      { id: 'age-50-59', label: '50–59', value: '50-59' },
      { id: 'age-60-69', label: '60–69', value: '60-69' },
      { id: 'age-70-plus', label: '70+', value: '70+' },
      // Skip option
      { id: 'skip-demographics', label: '⏭️ Skip this step', value: 'skip' },
    ],
    isComplete: false,
  },

  // =============================================================================
  // STEP 3: Activity Level (9 options)
  // =============================================================================
  lifestyle: {
    id: 'lifestyle',
    type: 'lifestyle',
    message: "Activity Level",
    options: [
      { id: 'activity-power-lifter', label: 'Power Lifter', value: 'power-lifter', image: '/assets/images/icons8-weightlifting-80.png' },
      { id: 'activity-endurance-athlete', label: 'Endurance Athlete', value: 'endurance-athlete', image: '/assets/images/icons8-athletes-64.png' },
      { id: 'activity-regular-gym', label: 'Regular Gym Goer', value: 'regular-gym-goer', image: '/assets/images/regulargymgoer.png' },
      { id: 'activity-active-lifestyle', label: 'Active Lifestyle', value: 'active-lifestyle', image: '/assets/images/Active.png' },
      { id: 'activity-light-exercise', label: 'Light Exercise', value: 'light-exercise', image: '/assets/images/LightExcercise.png' },
      { id: 'activity-desk-worker', label: 'Desk Worker', value: 'desk-worker', image: '/assets/images/Desk.png' },
      { id: 'activity-low-activity', label: 'Low Activity', value: 'low-activity', image: '/assets/images/lowactivity.png' },
      { id: 'activity-recovery', label: 'Recovery / Injury', value: 'recovery-injury', image: '/assets/images/Recovery.png' },
      { id: 'skip-lifestyle', label: '⏭️ Skip this step', value: 'skip' },
    ],
    isComplete: false,
  },

  // =============================================================================
  // STEP 4: Dietary Preferences (9 options - removed Kosher)
  // =============================================================================
  diet: {
    id: 'diet',
    type: 'diet',
    message: "Dietary Preferences",
    options: [
      { id: 'diet-no-preference', label: 'No Preference', value: 'no-preference', image: '/assets/images/No prefrence.png' },
      { id: 'diet-vegan', label: 'Vegan', value: 'vegan', image: '/assets/images/Vegan.png' },
      { id: 'diet-vegetarian', label: 'Vegetarian', value: 'vegetarian', image: '/assets/images/Vegeterian .png' },
      { id: 'diet-gluten-free', label: 'Gluten-Free', value: 'gluten-free', image: '/assets/images/glutenfree.png' },
      { id: 'diet-dairy-free', label: 'Dairy-Free', value: 'dairy-free', image: '/assets/images/icons8-dairy-free-64.png' },
      { id: 'diet-sugar-free', label: 'Sugar-Free', value: 'sugar-free', image: '/assets/images/icons8-sugar-free-64.png' },
      { id: 'diet-keto', label: 'Keto / Low-Carb', value: 'keto-low-carb', image: '/assets/images/icons8-keto-64.png' },
      { id: 'diet-halal', label: 'Halal', value: 'halal', image: '/assets/images/icons8-halal-64.png' },
      { id: 'diet-non-gmo', label: 'Non-GMO', value: 'non-gmo-organic', image: '/assets/images/icons8-non-gmo-64.png' },
    ],
    isComplete: false,
  },

  // =============================================================================
  // STEP 5: Supplement Focus (Dynamic based on Step 1)
  // Default options shown here - actual options come from goalSpecificConcerns.ts
  // =============================================================================
  concerns: {
    id: 'concerns',
    type: 'concerns',
    message: 'Supplement Focus',
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

  // =============================================================================
  // STEP 6: Format Order (9 options - multi-select up to 3)
  // =============================================================================
  format: {
    id: 'format',
    type: 'format',
    message: "Format Order",
    options: [
      { id: 'format-capsules', label: '💊 Capsules', value: 'capsules', description: 'Easy swallow' },
      { id: 'format-tablets', label: '⚪ Tablets', value: 'tablets', description: 'Standard' },
      { id: 'format-gummies', label: '🧸 Gummies', value: 'gummies', description: 'Taste focused' },
      { id: 'format-powder', label: '🥣 Powder', value: 'powder', description: 'Mix into smoothies/water' },
      { id: 'format-liquid', label: '💧 Liquid', value: 'liquid', description: 'Fast absorption' },
      { id: 'format-softgels', label: '💊 Softgels', value: 'softgels', description: 'Better absorption for oils' },
      { id: 'format-chewables', label: '🍬 Chewables', value: 'chewables', description: 'Non-gummy chew' },
      { id: 'format-single-serve', label: '🎒 Single-Serve Packs', value: 'single-serve-packs', description: 'On-the-go' },
      { id: 'format-no-preference', label: '✓ No Preference', value: 'no-preference' },
    ],
    isComplete: false,
  },

  // =============================================================================
  // STEP 7: Buying Preferences (9 options with trust signals)
  // =============================================================================
  budget: {
    id: 'budget',
    type: 'budget',
    message: "Buying Preferences",
    options: [
      { id: 'pref-budget-friendly', label: '💰 Budget Friendly', value: 'budget-friendly' },
      { id: 'pref-premium-quality', label: '💎 Premium Quality', value: 'premium-quality' },
      { id: 'pref-subscribe-save', label: '📦 Subscribe & Save', value: 'subscribe-save' },
      { id: 'pref-free-shipping', label: '🚚 Free Shipping', value: 'free-shipping' },
      { id: 'pref-bundle-deals', label: '🎁 Bundle Deals', value: 'bundle-deals' },
      { id: 'pref-on-sale', label: '🏷️ On Sale / Clearance', value: 'on-sale' },
      { id: 'pref-new-arrivals', label: '✨ New Arrivals', value: 'new-arrivals' },
      { id: 'pref-usa-made', label: '🇺🇸 USA Manufactured', value: 'usa-manufactured' },
      { id: 'pref-third-party', label: '🔬 Third-Party Tested', value: 'third-party-tested' },
    ],
    isComplete: false,
  },
}

// Updated step order: 7 steps total (welcome, goals, demographics, lifestyle, diet, concerns, format, budget)
export const STEP_ORDER = ['welcome', 'goals', 'demographics', 'lifestyle', 'diet', 'concerns', 'format', 'budget'] as const
