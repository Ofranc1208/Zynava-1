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
    message: "What is your primary wellness goal?",
    options: [
      { id: 'overall-health', label: '💪 Overall Health & Wellness', value: 'overall-health' },
      { id: 'boost-immunity', label: '🛡️ Boost Immunity', value: 'boost-immunity' },
      { id: 'energy-vitality', label: '⚡ Energy & Vitality', value: 'energy-vitality' },
      { id: 'bone-joint', label: '🦴 Bone & Joint Health', value: 'bone-joint' },
      { id: 'heart-health', label: '❤️ Heart Health', value: 'heart-health' },
      { id: 'gut-health', label: '🌱 Gut Health', value: 'gut-health' },
      { id: 'sleep-stress', label: '😴 Sleep & Stress Relief', value: 'sleep-stress' },
      { id: 'brain-health', label: '🧠 Brain Health & Memory', value: 'brain-health' },
    ],
    isComplete: false,
  },
  lifestyle: {
    id: 'lifestyle',
    type: 'lifestyle',
    message: React.createElement(
      React.Fragment,
      null,
      'How would you rate your ',
      React.createElement('strong', null, 'activity level'),
      '?'
    ),
    options: [
      { id: 'activity-very-active', label: '🏃‍♂️ Very Active (Exercise 5+ times/week)', value: 'very-active', description: 'Activity level' },
      { id: 'activity-moderately-active', label: '🚶‍♂️ Moderately Active (Exercise 2-4 times/week)', value: 'moderately-active', description: 'Activity level' },
      { id: 'activity-lightly-active', label: '🧘‍♀️ Lightly Active (Exercise 1-2 times/week)', value: 'lightly-active', description: 'Activity level' },
      { id: 'activity-sedentary', label: '💺 Sedentary (Little to no exercise)', value: 'sedentary', description: 'Activity level' },
    ],
    isComplete: false,
  },
  diet: {
    id: 'diet',
    type: 'diet',
    message: "What are your dietary preferences?",
    options: [
      { id: 'diet-no-preference', label: '🍽️ No Preference', value: 'no-preference', description: 'Diet type' },
      { id: 'diet-vegan', label: '🌱 Vegan', value: 'vegan', description: 'Diet type' },
      { id: 'diet-gluten-free', label: '🌾 Gluten-Free', value: 'gluten-free', description: 'Diet type' },
    ],
    isComplete: false,
  },
  concerns: {
    id: 'concerns',
    type: 'concerns',
    message: 'Any specific concerns? (Optional)',
    options: [
      { id: 'sleep-quality', label: 'Sleep quality issues', value: 'sleep-quality' },
      { id: 'low-energy', label: 'Low energy', value: 'low-energy' },
      { id: 'digestive-sensitivity', label: 'Digestive sensitivity', value: 'digestive-sensitivity' },
      { id: 'joint-discomfort', label: 'Joint discomfort', value: 'joint-discomfort' },
      { id: 'stress-anxiety', label: 'Stress/anxiety', value: 'stress-anxiety' },
      { id: 'none', label: 'None of the above', value: 'none' },
    ],
    isComplete: false,
  },
  budget: {
    id: 'budget',
    type: 'budget',
    message: "What's your budget range for supplements?",
    options: [
      { id: 'budget-conscious', label: '💰 Budget Conscious', value: 'budget-conscious', description: 'Essential supplements' },
      { id: 'moderate-spending', label: '💳 Moderate Spending', value: 'moderate-spending', description: 'Balanced approach' },
      { id: 'premium-quality', label: '💎 Premium Quality', value: 'premium-quality', description: 'Comprehensive stack' },
    ],
    isComplete: false,
  },
}

export const STEP_ORDER = ['welcome', 'goals', 'lifestyle', 'diet', 'concerns', 'budget'] as const

