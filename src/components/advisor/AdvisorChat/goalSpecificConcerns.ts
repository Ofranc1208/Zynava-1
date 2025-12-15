import type { GoalId, ConcernId } from '../types'
import type { QuizOption } from '../types'

/**
 * Goal-specific Step 4 titles
 * Each goal can have its own title for Step 4
 */
export const GOAL_SPECIFIC_TITLES: Record<GoalId, string> = {
  'overall-health': 'Supplement Focus',
  'boost-immunity': 'Immune Support Focus',
  'energy-vitality': 'Energy Support Focus',
  'bone-joint': 'Joint Support Focus',
  'heart-health': 'Heart Support Focus',
  'gut-health': 'Digestive Focus',
  'sleep-stress': 'Sleep & Calm Focus',
  'brain-health': 'Cognitive Focus',
}

/**
 * Get goal-specific title for Step 4
 */
export function getGoalSpecificTitle(goalId: GoalId | undefined): string {
  if (!goalId || !GOAL_SPECIFIC_TITLES[goalId]) {
    return 'Focus Areas' // Default fallback
  }
  return GOAL_SPECIFIC_TITLES[goalId]
}

/**
 * Goal-specific focus areas mapping
 * Each goal has 8 specific focus areas for Step 4
 */
export const GOAL_SPECIFIC_CONCERNS: Record<GoalId, QuizOption[]> = {
  'gut-health': [
    { id: 'gut-digestive-enzymes', label: '🔬 Digestive enzyme support', value: 'gut-digestive-enzymes' },
    { id: 'gut-probiotic-balance', label: '🦠 Probiotic balance', value: 'gut-probiotic-balance' },
    { id: 'gut-inflammation', label: '🔥 Gut inflammation', value: 'gut-inflammation' },
    { id: 'gut-bloating', label: '💨 Bloating & gas', value: 'gut-bloating' },
    { id: 'gut-constipation', label: '🚽 Constipation support', value: 'gut-constipation' },
    { id: 'gut-leaky-gut', label: '🛡️ Leaky gut support', value: 'gut-leaky-gut' },
    { id: 'gut-food-sensitivity', label: '🍽️ Food sensitivity', value: 'gut-food-sensitivity' },
    { id: 'none', label: '✓ None of the above', value: 'none' },
  ],
  'overall-health': [
    { id: 'overall-multivitamin', label: '💊 Daily Multivitamin', value: 'overall-multivitamin' },
    { id: 'overall-vitamin-d', label: '☀️ Vitamin D', value: 'overall-vitamin-d' },
    { id: 'overall-omega3', label: '🐟 Omega-3 / Fish Oil', value: 'overall-omega3' },
    { id: 'overall-probiotics', label: '🦠 Probiotics', value: 'overall-probiotics' },
    { id: 'overall-magnesium', label: '💎 Magnesium', value: 'overall-magnesium' },
    { id: 'overall-vitamin-c', label: '🍊 Vitamin C', value: 'overall-vitamin-c' },
    { id: 'overall-b-complex', label: '⚡ B-Complex', value: 'overall-b-complex' },
    { id: 'none', label: '✓ None of the above', value: 'none' },
  ],
  'boost-immunity': [
    { id: 'immune-cold-flu', label: '🤧 Cold & flu prevention', value: 'immune-cold-flu' },
    { id: 'immune-antioxidants', label: '🛡️ Antioxidant support', value: 'immune-antioxidants' },
    { id: 'immune-vitamin-d', label: '☀️ Vitamin D support', value: 'immune-vitamin-d' },
    { id: 'immune-zinc', label: '⚡ Zinc support', value: 'immune-zinc' },
    { id: 'immune-elderberry', label: '🍇 Elderberry support', value: 'immune-elderberry' },
    { id: 'immune-probiotics', label: '🦠 Immune probiotics', value: 'immune-probiotics' },
    { id: 'immune-seasonal', label: '🍂 Seasonal support', value: 'immune-seasonal' },
    { id: 'none', label: '✓ None of the above', value: 'none' },
  ],
  'energy-vitality': [
    { id: 'energy-fatigue', label: '😴 Chronic fatigue', value: 'energy-fatigue' },
    { id: 'energy-afternoon', label: '📉 Afternoon crash', value: 'energy-afternoon' },
    { id: 'energy-morning', label: '🌅 Morning energy', value: 'energy-morning' },
    { id: 'energy-b12', label: '💉 B12 support', value: 'energy-b12' },
    { id: 'energy-iron', label: '🩸 Iron support', value: 'energy-iron' },
    { id: 'energy-coq10', label: '⚡ CoQ10 support', value: 'energy-coq10' },
    { id: 'energy-adrenal', label: '🧠 Adrenal support', value: 'energy-adrenal' },
    { id: 'none', label: '✓ None of the above', value: 'none' },
  ],
  'bone-joint': [
    { id: 'joint-mobility', label: '🏃 Joint mobility', value: 'joint-mobility' },
    { id: 'joint-pain', label: '😣 Joint pain', value: 'joint-pain' },
    { id: 'joint-calcium', label: '🦴 Calcium support', value: 'joint-calcium' },
    { id: 'joint-vitamin-d', label: '☀️ Vitamin D support', value: 'joint-vitamin-d' },
    { id: 'joint-glucosamine', label: '💊 Glucosamine support', value: 'joint-glucosamine' },
    { id: 'joint-arthritis', label: '🦴 Arthritis support', value: 'joint-arthritis' },
    { id: 'joint-inflammation', label: '🔥 Joint inflammation', value: 'joint-inflammation' },
    { id: 'none', label: '✓ None of the above', value: 'none' },
  ],
  'heart-health': [
    { id: 'heart-cholesterol', label: '📊 Cholesterol support', value: 'heart-cholesterol' },
    { id: 'heart-blood-pressure', label: '🩺 Blood pressure', value: 'heart-blood-pressure' },
    { id: 'heart-omega3', label: '🐟 Omega-3 support', value: 'heart-omega3' },
    { id: 'heart-coq10', label: '⚡ CoQ10 support', value: 'heart-coq10' },
    { id: 'heart-circulation', label: '🔄 Circulation support', value: 'heart-circulation' },
    { id: 'heart-antioxidants', label: '🛡️ Heart antioxidants', value: 'heart-antioxidants' },
    { id: 'heart-magnesium', label: '💊 Magnesium support', value: 'heart-magnesium' },
    { id: 'none', label: '✓ None of the above', value: 'none' },
  ],
  'sleep-stress': [
    { id: 'sleep-insomnia', label: '😴 Insomnia support', value: 'sleep-insomnia' },
    { id: 'sleep-quality', label: '⭐ Sleep quality', value: 'sleep-quality' },
    { id: 'sleep-melatonin', label: '🌙 Melatonin support', value: 'sleep-melatonin' },
    { id: 'sleep-magnesium', label: '💊 Magnesium support', value: 'sleep-magnesium' },
    { id: 'stress-anxiety', label: '🧘 Anxiety support', value: 'stress-anxiety' },
    { id: 'stress-cortisol', label: '📈 Cortisol management', value: 'stress-cortisol' },
    { id: 'stress-adaptogens', label: '🌿 Adaptogen support', value: 'stress-adaptogens' },
    { id: 'none', label: '✓ None of the above', value: 'none' },
  ],
  'brain-health': [
    { id: 'brain-memory', label: '🧠 Memory support', value: 'brain-memory' },
    { id: 'brain-focus', label: '🎯 Focus & concentration', value: 'brain-focus' },
    { id: 'brain-omega3', label: '🐟 Omega-3 support', value: 'brain-omega3' },
    { id: 'brain-b12', label: '💉 B12 support', value: 'brain-b12' },
    { id: 'brain-ginkgo', label: '🌿 Ginkgo support', value: 'brain-ginkgo' },
    { id: 'brain-lion-mane', label: '🦁 Lion\'s mane support', value: 'brain-lion-mane' },
    { id: 'brain-cognitive', label: '💭 Cognitive function', value: 'brain-cognitive' },
    { id: 'none', label: '✓ None of the above', value: 'none' },
  ],
}

/**
 * Get goal-specific concerns for a given goal
 * Falls back to generic concerns if goal not found
 */
export function getGoalSpecificConcerns(goalId: GoalId | undefined): QuizOption[] {
  if (!goalId || !GOAL_SPECIFIC_CONCERNS[goalId]) {
    // Fallback to generic concerns (from quizData.ts)
    return [
      { id: 'sleep-quality', label: '😴 Sleep quality issues', value: 'sleep-quality' },
      { id: 'low-energy', label: '⚡ Low energy', value: 'low-energy' },
      { id: 'digestive-sensitivity', label: '🌱 Digestive sensitivity', value: 'digestive-sensitivity' },
      { id: 'joint-discomfort', label: '🦴 Joint discomfort', value: 'joint-discomfort' },
      { id: 'stress-anxiety', label: '🧘 Stress/anxiety', value: 'stress-anxiety' },
      { id: 'immune-support', label: '🛡️ Immune system support', value: 'immune-support' },
      { id: 'weight-management', label: '⚖️ Weight management', value: 'weight-management' },
      { id: 'none', label: '✓ None of the above', value: 'none' },
    ]
  }
  return GOAL_SPECIFIC_CONCERNS[goalId]
}

/**
 * Get label for a concern ID (works with both generic and goal-specific concerns)
 */
export function getConcernLabel(concernId: ConcernId, goalId?: GoalId): string {
  const concerns = getGoalSpecificConcerns(goalId)
  const concern = concerns.find(c => c.value === concernId)
  return concern?.label || concernId
}
