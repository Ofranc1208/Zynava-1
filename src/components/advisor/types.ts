// Advisor Quiz Types

export type GoalId = 
  | 'overall-health'
  | 'boost-immunity'
  | 'energy-vitality'
  | 'bone-joint'
  | 'heart-health'
  | 'gut-health'
  | 'sleep-stress'
  | 'brain-health'

export type AgeRange = '18-35' | '36-50' | '51-65' | '65+'

// Demographics - combined gender and age bracket
export type DemographicId = 
  | 'male-18-35'
  | 'male-36-50'
  | 'male-51-65'
  | 'male-65-plus'
  | 'female-18-35'
  | 'female-36-50'
  | 'female-51-65'
  | 'female-65-plus'

export type ActivityLevel = 
  | 'power-lifter' 
  | 'endurance-athlete' 
  | 'regular-gym-goer' 
  | 'active-lifestyle' 
  | 'light-exercise' 
  | 'desk-worker' 
  | 'low-activity' 
  | 'recovery-injury'

export type DietType = 
  | 'no-preference' 
  | 'vegan' 
  | 'vegetarian' 
  | 'gluten-free' 
  | 'sugar-free' 
  | 'kosher' 
  | 'halal' 
  | 'non-gmo-organic'

export type ConcernId =
  // Generic concerns (fallback)
  | 'sleep-quality'
  | 'low-energy'
  | 'digestive-sensitivity'
  | 'joint-discomfort'
  | 'stress-anxiety'
  | 'immune-support'
  | 'weight-management'
  | 'none'
  // Gut health specific
  | 'gut-digestive-enzymes'
  | 'gut-probiotic-balance'
  | 'gut-inflammation'
  | 'gut-bloating'
  | 'gut-constipation'
  | 'gut-leaky-gut'
  | 'gut-food-sensitivity'
  // Overall health specific (supplement types)
  | 'overall-multivitamin'
  | 'overall-vitamin-d'
  | 'overall-omega3'
  | 'overall-probiotics'
  | 'overall-magnesium'
  | 'overall-vitamin-c'
  | 'overall-b-complex'
  // Immunity specific
  | 'immune-cold-flu'
  | 'immune-antioxidants'
  | 'immune-vitamin-d'
  | 'immune-zinc'
  | 'immune-elderberry'
  | 'immune-probiotics'
  | 'immune-seasonal'
  // Energy specific
  | 'energy-fatigue'
  | 'energy-afternoon'
  | 'energy-morning'
  | 'energy-b12'
  | 'energy-iron'
  | 'energy-coq10'
  | 'energy-adrenal'
  // Joint specific
  | 'joint-mobility'
  | 'joint-pain'
  | 'joint-calcium'
  | 'joint-vitamin-d'
  | 'joint-glucosamine'
  | 'joint-arthritis'
  | 'joint-inflammation'
  // Heart specific
  | 'heart-cholesterol'
  | 'heart-blood-pressure'
  | 'heart-omega3'
  | 'heart-coq10'
  | 'heart-circulation'
  | 'heart-antioxidants'
  | 'heart-magnesium'
  // Sleep/stress specific
  | 'sleep-insomnia'
  | 'sleep-melatonin'
  | 'sleep-magnesium'
  | 'stress-cortisol'
  | 'stress-adaptogens'
  // Brain specific
  | 'brain-memory'
  | 'brain-focus'
  | 'brain-omega3'
  | 'brain-b12'
  | 'brain-ginkgo'
  | 'brain-lion-mane'
  | 'brain-cognitive'

export type ShoppingPreference = 
  | 'budget-friendly'
  | 'premium-quality'
  | 'free-shipping'
  | 'new-arrivals'
  | 'on-sale'
  | 'bundle-deals'
  | 'subscribe-save'

export interface AdvisorInput {
  goals: GoalId[]
  demographic?: DemographicId
  ageRange?: AgeRange
  activityLevel?: ActivityLevel
  diet?: DietType
  concerns: ConcernId[]
  shoppingPreferences: ShoppingPreference[]
}

export interface AdvisorStep {
  id: string
  type: 'welcome' | 'goals' | 'demographics' | 'lifestyle' | 'diet' | 'concerns' | 'budget' | 'processing' | 'results'
  message: string | React.ReactNode
  options?: QuizOption[]
  isComplete: boolean
}

export interface QuizOption {
  id: string
  label: string
  value: string
  description?: string
}

export interface AdvisorMessage {
  id: string
  type: 'text' | 'quiz-step' | 'component'
  sender: 'advisor' | 'user'
  text?: string
  step?: AdvisorStep
  component?: React.ReactNode
  timestamp: Date
}

