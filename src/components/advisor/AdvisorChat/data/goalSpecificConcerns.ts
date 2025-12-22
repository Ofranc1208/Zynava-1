import type { GoalId, ConcernId, QuizOption } from '../../types'
import { QUIZ_STEPS } from '../controller/quizData'

/**
 * Goal-specific Step 5 titles
 * Each goal can have its own title for the Supplement Focus step
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
  'muscle-performance': 'Performance Focus',
  'weight-management': 'Weight Control Focus',
}

/**
 * Get goal-specific title for Step 5
 */
export function getGoalSpecificTitle(goalId: GoalId | undefined): string {
  if (!goalId || !GOAL_SPECIFIC_TITLES[goalId]) {
    return 'Supplement Focus' // Default fallback
  }
  return GOAL_SPECIFIC_TITLES[goalId]
}

/**
 * Goal-specific focus areas mapping
 * Each goal has specific focus areas for Step 5
 */
export const GOAL_SPECIFIC_CONCERNS: Record<GoalId, QuizOption[]> = {
  // --- 1. Overall Wellness (Generalist) ---
  'overall-health': [
    { id: 'overall-multivitamin', label: '💊 Daily Multivitamin', value: 'overall-multivitamin' },
    { id: 'overall-vitamin-d', label: '☀️ Vitamin D3 + K2', value: 'overall-vitamin-d' },
    { id: 'overall-omega3', label: '🐟 Omega-3 Fish Oil', value: 'overall-omega3' },
    { id: 'overall-magnesium', label: '💎 Magnesium Complex', value: 'overall-magnesium' },
    { id: 'overall-vitamin-c', label: '🍊 Vitamin C', value: 'overall-vitamin-c' },
    { id: 'overall-probiotics', label: '🦠 Probiotics', value: 'overall-probiotics' },
    { id: 'overall-b-complex', label: '⚡ B-Complex', value: 'overall-b-complex' },
    { id: 'overall-greens', label: '🥬 Superfood Greens', value: 'overall-greens' },
    { id: 'overall-collagen', label: '💪 Collagen Peptides', value: 'overall-collagen' },
    { id: 'none', label: '✓ None of the above', value: 'none' },
  ],

  // --- 2. Boost Immunity (Protector) ---
  'boost-immunity': [
    { id: 'immune-zinc', label: '⚡ Zinc Picolinate', value: 'immune-zinc' },
    { id: 'immune-antioxidants', label: '🍊 Vitamin C (Liposomal)', value: 'immune-antioxidants' },
    { id: 'immune-vitamin-d', label: '☀️ Vitamin D3', value: 'immune-vitamin-d' },
    { id: 'immune-elderberry', label: '🍇 Elderberry Syrup', value: 'immune-elderberry' },
    { id: 'immune-cold-flu', label: '🛡️ Quercetin', value: 'immune-cold-flu' },
    { id: 'immune-probiotics', label: '🦠 Immune Probiotics', value: 'immune-probiotics' },
    { id: 'immune-seasonal', label: '🍂 Seasonal Support Blend', value: 'immune-seasonal' },
    { id: 'immune-mushroom', label: '🍄 Mushroom Complex', value: 'immune-mushroom' },
    { id: 'immune-nac', label: '🧪 NAC (N-Acetyl Cysteine)', value: 'immune-nac' },
    { id: 'none', label: '✓ None of the above', value: 'none' },
  ],

  // --- 3. Energy & Vitality (The Tired) ---
  'energy-vitality': [
    { id: 'energy-b12', label: '💉 Methylated B-Complex', value: 'energy-b12' },
    { id: 'energy-coq10', label: '⚡ CoQ10 (Ubiquinol)', value: 'energy-coq10' },
    { id: 'energy-iron', label: '🩸 Iron Bisglycinate', value: 'energy-iron' },
    { id: 'energy-fatigue', label: '💉 Vitamin B12', value: 'energy-fatigue' },
    { id: 'energy-adrenal', label: '🧠 Adrenal Support', value: 'energy-adrenal' },
    { id: 'energy-morning', label: '🌅 Morning Energy Blend', value: 'energy-morning' },
    { id: 'energy-afternoon', label: '📉 Afternoon Crash Support', value: 'energy-afternoon' },
    { id: 'energy-beetroot', label: '🔴 Beet Root Powder', value: 'energy-beetroot' },
    { id: 'energy-electrolytes', label: '💧 Electrolytes', value: 'energy-electrolytes' },
    { id: 'none', label: '✓ None of the above', value: 'none' },
  ],

  // --- 4. Sleep & Stress (The Insomniac) ---
  'sleep-stress': [
    { id: 'sleep-magnesium', label: '💊 Magnesium Glycinate', value: 'sleep-magnesium' },
    { id: 'stress-adaptogens', label: '🌿 Ashwagandha (KSM-66)', value: 'stress-adaptogens' },
    { id: 'sleep-melatonin', label: '🌙 Melatonin', value: 'sleep-melatonin' },
    { id: 'stress-anxiety', label: '🧘 L-Theanine', value: 'stress-anxiety' },
    { id: 'sleep-quality', label: '⭐ Sleep Quality Formula', value: 'sleep-quality' },
    { id: 'stress-cortisol', label: '📈 Cortisol Management', value: 'stress-cortisol' },
    { id: 'sleep-insomnia', label: '🌿 Adaptogen Blend', value: 'sleep-insomnia' },
    { id: 'sleep-gaba', label: '🧠 GABA', value: 'sleep-gaba' },
    { id: 'sleep-tart-cherry', label: '🍒 Tart Cherry Extract', value: 'sleep-tart-cherry' },
    { id: 'none', label: '✓ None of the above', value: 'none' },
  ],

  // --- 5. Gut Health (The Bloated) ---
  'gut-health': [
    { id: 'gut-probiotic-balance', label: '🦠 Spore-Based Probiotic', value: 'gut-probiotic-balance' },
    { id: 'gut-digestive-enzymes', label: '🔬 Digestive Enzymes', value: 'gut-digestive-enzymes' },
    { id: 'gut-leaky-gut', label: '💊 L-Glutamine', value: 'gut-leaky-gut' },
    { id: 'gut-constipation', label: '🌾 Prebiotic Fiber', value: 'gut-constipation' },
    { id: 'gut-food-sensitivity', label: '🦠 Probiotic Balance', value: 'gut-food-sensitivity' },
    { id: 'gut-inflammation', label: '🔥 Gut Inflammation Support', value: 'gut-inflammation' },
    { id: 'gut-bloating', label: '💨 Bloating & Gas Relief', value: 'gut-bloating' },
    { id: 'gut-greens', label: '🥬 Gut Health Greens', value: 'gut-greens' },
    { id: 'gut-colostrum', label: '🥛 Colostrum', value: 'gut-colostrum' },
    { id: 'none', label: '✓ None of the above', value: 'none' },
  ],

  // --- 6. Heart Health (Longevity) ---
  'heart-health': [
    { id: 'heart-omega3', label: '🐟 Omega-3 Fish Oil', value: 'heart-omega3' },
    { id: 'heart-coq10', label: '⚡ CoQ10', value: 'heart-coq10' },
    { id: 'heart-magnesium', label: '💊 Magnesium Glycinate', value: 'heart-magnesium' },
    { id: 'heart-circulation', label: '🔄 Beet Root Extract', value: 'heart-circulation' },
    { id: 'heart-antioxidants', label: '🛡️ Heart Antioxidants', value: 'heart-antioxidants' },
    { id: 'heart-cholesterol', label: '📊 Cholesterol Support', value: 'heart-cholesterol' },
    { id: 'heart-blood-pressure', label: '🩺 Blood Pressure Support', value: 'heart-blood-pressure' },
    { id: 'heart-garlic', label: '🧄 Aged Garlic Extract', value: 'heart-garlic' },
    { id: 'heart-k2', label: '🦴 Vitamin K2 (MK-7)', value: 'heart-k2' },
    { id: 'none', label: '✓ None of the above', value: 'none' },
  ],

  // --- 7. Brain Health (The Thinker) ---
  'brain-health': [
    { id: 'brain-lion-mane', label: '🦁 Lion\'s Mane Mushroom', value: 'brain-lion-mane' },
    { id: 'brain-omega3', label: '🐟 Omega-3 (High DHA)', value: 'brain-omega3' },
    { id: 'brain-focus', label: '💊 Alpha-GPC', value: 'brain-focus' },
    { id: 'brain-ginkgo', label: '🌿 Ginkgo Biloba', value: 'brain-ginkgo' },
    { id: 'brain-memory', label: '🧠 Memory Support', value: 'brain-memory' },
    { id: 'brain-b12', label: '🎯 Focus & Concentration', value: 'brain-b12' },
    { id: 'brain-cognitive', label: '💭 Cognitive Function Formula', value: 'brain-cognitive' },
    { id: 'brain-choline', label: '🥚 CDP Choline', value: 'brain-choline' },
    { id: 'brain-magnesium', label: '🧠 Magnesium L-Threonate', value: 'brain-magnesium' },
    { id: 'none', label: '✓ None of the above', value: 'none' },
  ],

  // --- 8. Bone & Joint (The Mover) ---
  'bone-joint': [
    { id: 'joint-mobility', label: '💪 Collagen Peptides', value: 'joint-mobility' },
    { id: 'joint-inflammation', label: '🔥 Curcumin (Turmeric)', value: 'joint-inflammation' },
    { id: 'joint-glucosamine', label: '💊 Glucosamine Chondroitin', value: 'joint-glucosamine' },
    { id: 'joint-calcium', label: '🦴 Calcium + Magnesium', value: 'joint-calcium' },
    { id: 'joint-vitamin-d', label: '☀️ Vitamin D3 + K2', value: 'joint-vitamin-d' },
    { id: 'joint-pain', label: '🏃 Joint Mobility Formula', value: 'joint-pain' },
    { id: 'joint-arthritis', label: '🦴 Arthritis Support', value: 'joint-arthritis' },
    { id: 'joint-msm', label: '⚕️ MSM', value: 'joint-msm' },
    { id: 'joint-fishoil', label: '🐟 High-EPA Fish Oil', value: 'joint-fishoil' },
    { id: 'none', label: '✓ None of the above', value: 'none' },
  ],

  // --- 9. Muscle & Performance (The Builder) [NEW] ---
  'muscle-performance': [
    { id: 'muscle-whey', label: '🥤 Whey Protein', value: 'muscle-whey' },
    { id: 'muscle-creatine', label: '💪 Creatine Monohydrate', value: 'muscle-creatine' },
    { id: 'muscle-preworkout', label: '⚡ Pre-Workout', value: 'muscle-preworkout' },
    { id: 'muscle-bcaa', label: '🔄 BCAAs / EAAs', value: 'muscle-bcaa' },
    { id: 'muscle-plant', label: '🌱 Plant Protein', value: 'muscle-plant' },
    { id: 'muscle-casein', label: '🌙 Casein Protein', value: 'muscle-casein' },
    { id: 'muscle-mass', label: '🏋️ Mass Gainer', value: 'muscle-mass' },
    { id: 'muscle-test', label: '🧪 Testosterone Support', value: 'muscle-test' },
    { id: 'muscle-glutamine', label: '💊 L-Glutamine', value: 'muscle-glutamine' },
    { id: 'muscle-pump', label: '🩸 Nitric Oxide / Pump', value: 'muscle-pump' },
    { id: 'none', label: '✓ None of the above', value: 'none' },
  ],

  // --- 10. Weight Management (The Slimmer) [NEW] ---
  'weight-management': [
    { id: 'weight-fatburner', label: '🔥 Thermogenic Fat Burner', value: 'weight-fatburner' },
    { id: 'weight-protein', label: '🥤 Meal Replacement Shake', value: 'weight-protein' },
    { id: 'weight-fiber', label: '🌾 Fiber / Glucomannan', value: 'weight-fiber' },
    { id: 'weight-cla', label: '💊 CLA (Conjugated Linoleic Acid)', value: 'weight-cla' },
    { id: 'weight-carnitine', label: '⚡ L-Carnitine', value: 'weight-carnitine' },
    { id: 'weight-appetite', label: '🍽️ Appetite Suppressant', value: 'weight-appetite' },
    { id: 'weight-metabolism', label: '🏃 Metabolism Booster', value: 'weight-metabolism' },
    { id: 'weight-acv', label: '🍎 Apple Cider Vinegar', value: 'weight-acv' },
    { id: 'weight-tea', label: '🍵 Green Tea Extract', value: 'weight-tea' },
    { id: 'weight-keto', label: '🥑 Keto Support / BHB', value: 'weight-keto' },
    { id: 'none', label: '✓ None of the above', value: 'none' },
  ],
}

/**
 * Get goal-specific concerns for a given goal
 * Falls back to generic concerns from quizData.ts if goal not found
 */
export function getGoalSpecificConcerns(goalId: GoalId | undefined): QuizOption[] {
  if (!goalId || !GOAL_SPECIFIC_CONCERNS[goalId]) {
    // Return empty or default if needed
    return []
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
