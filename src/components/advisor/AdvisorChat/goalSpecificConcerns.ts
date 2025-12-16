import type { GoalId, ConcernId } from '../types'
import type { QuizOption } from '../types'

/**
 * Goal-specific Step 4 titles
 * Each goal can have its own title for Step 4
 */
export const GOAL_SPECIFIC_TITLES: Record<GoalId, string> = {
  'overall-health': 'Supplement Focus',
  'boost-immunity': 'Supplement Focus',
  'energy-vitality': 'Supplement Focus',
  'bone-joint': 'Supplement Focus',
  'heart-health': 'Supplement Focus',
  'gut-health': 'Supplement Focus',
  'sleep-stress': 'Supplement Focus',
  'brain-health': 'Supplement Focus',
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
    { id: 'gut-probiotic-balance', label: '🦠 Spore-Based Probiotic', value: 'gut-probiotic-balance' },
    { id: 'gut-digestive-enzymes', label: '🔬 Digestive Enzymes', value: 'gut-digestive-enzymes' },
    { id: 'gut-leaky-gut', label: '💊 L-Glutamine', value: 'gut-leaky-gut' },
    { id: 'gut-constipation', label: '🌾 Prebiotic Fiber', value: 'gut-constipation' },
    { id: 'gut-food-sensitivity', label: '🦠 Probiotic Balance', value: 'gut-food-sensitivity' },
    { id: 'gut-inflammation', label: '🔥 Gut Inflammation Support', value: 'gut-inflammation' },
    { id: 'gut-bloating', label: '💨 Bloating & Gas Relief', value: 'gut-bloating' },
    { id: 'none', label: '✓ None of the above', value: 'none' },
  ],
  'overall-health': [
    { id: 'overall-multivitamin', label: '💊 Daily Multivitamin', value: 'overall-multivitamin' },
    { id: 'overall-vitamin-d', label: '☀️ Vitamin D3 + K2', value: 'overall-vitamin-d' },
    { id: 'overall-omega3', label: '🐟 Omega-3 Fish Oil', value: 'overall-omega3' },
    { id: 'overall-magnesium', label: '💎 Magnesium Complex', value: 'overall-magnesium' },
    { id: 'overall-vitamin-c', label: '🍊 Vitamin C', value: 'overall-vitamin-c' },
    { id: 'overall-probiotics', label: '🦠 Probiotics', value: 'overall-probiotics' },
    { id: 'overall-b-complex', label: '⚡ B-Complex', value: 'overall-b-complex' },
    { id: 'none', label: '✓ None of the above', value: 'none' },
  ],
  'boost-immunity': [
    { id: 'immune-zinc', label: '⚡ Zinc Picolinate', value: 'immune-zinc' },
    { id: 'immune-antioxidants', label: '🍊 Vitamin C (Liposomal)', value: 'immune-antioxidants' },
    { id: 'immune-vitamin-d', label: '☀️ Vitamin D3', value: 'immune-vitamin-d' },
    { id: 'immune-elderberry', label: '🍇 Elderberry Syrup', value: 'immune-elderberry' },
    { id: 'immune-cold-flu', label: '🛡️ Quercetin', value: 'immune-cold-flu' },
    { id: 'immune-probiotics', label: '🦠 Immune Probiotics', value: 'immune-probiotics' },
    { id: 'immune-seasonal', label: '🍂 Seasonal Support Blend', value: 'immune-seasonal' },
    { id: 'none', label: '✓ None of the above', value: 'none' },
  ],
  'energy-vitality': [
    { id: 'energy-b12', label: '💉 Methylated B-Complex', value: 'energy-b12' },
    { id: 'energy-coq10', label: '⚡ CoQ10 (Ubiquinol)', value: 'energy-coq10' },
    { id: 'energy-iron', label: '🩸 Iron Bisglycinate', value: 'energy-iron' },
    { id: 'energy-fatigue', label: '💉 Vitamin B12', value: 'energy-fatigue' },
    { id: 'energy-adrenal', label: '🧠 Adrenal Support', value: 'energy-adrenal' },
    { id: 'energy-morning', label: '🌅 Morning Energy Blend', value: 'energy-morning' },
    { id: 'energy-afternoon', label: '📉 Afternoon Crash Support', value: 'energy-afternoon' },
    { id: 'none', label: '✓ None of the above', value: 'none' },
  ],
  'bone-joint': [
    { id: 'joint-mobility', label: '💪 Collagen Peptides', value: 'joint-mobility' },
    { id: 'joint-inflammation', label: '🔥 Curcumin (Turmeric)', value: 'joint-inflammation' },
    { id: 'joint-glucosamine', label: '💊 Glucosamine Chondroitin', value: 'joint-glucosamine' },
    { id: 'joint-calcium', label: '🦴 Calcium + Magnesium', value: 'joint-calcium' },
    { id: 'joint-vitamin-d', label: '☀️ Vitamin D3 + K2', value: 'joint-vitamin-d' },
    { id: 'joint-pain', label: '🏃 Joint Mobility Formula', value: 'joint-pain' },
    { id: 'joint-arthritis', label: '🦴 Arthritis Support', value: 'joint-arthritis' },
    { id: 'none', label: '✓ None of the above', value: 'none' },
  ],
  'heart-health': [
    { id: 'heart-omega3', label: '🐟 Omega-3 Fish Oil', value: 'heart-omega3' },
    { id: 'heart-coq10', label: '⚡ CoQ10', value: 'heart-coq10' },
    { id: 'heart-magnesium', label: '💊 Magnesium Glycinate', value: 'heart-magnesium' },
    { id: 'heart-circulation', label: '🔄 Beet Root Extract', value: 'heart-circulation' },
    { id: 'heart-antioxidants', label: '🛡️ Heart Antioxidants', value: 'heart-antioxidants' },
    { id: 'heart-cholesterol', label: '📊 Cholesterol Support', value: 'heart-cholesterol' },
    { id: 'heart-blood-pressure', label: '🩺 Blood Pressure Support', value: 'heart-blood-pressure' },
    { id: 'none', label: '✓ None of the above', value: 'none' },
  ],
  'sleep-stress': [
    { id: 'sleep-magnesium', label: '💊 Magnesium Glycinate', value: 'sleep-magnesium' },
    { id: 'stress-adaptogens', label: '🌿 Ashwagandha (KSM-66)', value: 'stress-adaptogens' },
    { id: 'sleep-melatonin', label: '🌙 Melatonin', value: 'sleep-melatonin' },
    { id: 'stress-anxiety', label: '🧘 L-Theanine', value: 'stress-anxiety' },
    { id: 'sleep-quality', label: '⭐ Sleep Quality Formula', value: 'sleep-quality' },
    { id: 'stress-cortisol', label: '📈 Cortisol Management', value: 'stress-cortisol' },
    { id: 'sleep-insomnia', label: '🌿 Adaptogen Blend', value: 'sleep-insomnia' },
    { id: 'none', label: '✓ None of the above', value: 'none' },
  ],
  'brain-health': [
    { id: 'brain-lion-mane', label: '🦁 Lion\'s Mane Mushroom', value: 'brain-lion-mane' },
    { id: 'brain-omega3', label: '🐟 Omega-3 (High DHA)', value: 'brain-omega3' },
    { id: 'brain-focus', label: '💊 Alpha-GPC', value: 'brain-focus' },
    { id: 'brain-ginkgo', label: '🌿 Ginkgo Biloba', value: 'brain-ginkgo' },
    { id: 'brain-memory', label: '🧠 Memory Support', value: 'brain-memory' },
    { id: 'brain-b12', label: '🎯 Focus & Concentration', value: 'brain-b12' },
    { id: 'brain-cognitive', label: '💭 Cognitive Function Formula', value: 'brain-cognitive' },
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
