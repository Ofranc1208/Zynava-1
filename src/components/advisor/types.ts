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

export type AgeRange = '25-35' | '36-50' | '51-65' | '65+'

export type ActivityLevel = 'very-active' | 'moderately-active' | 'lightly-active' | 'sedentary'

export type DietType = 'no-preference' | 'vegan' | 'gluten-free'

export type ConcernId =
  | 'sleep-quality'
  | 'low-energy'
  | 'digestive-sensitivity'
  | 'joint-discomfort'
  | 'stress-anxiety'
  | 'none'

export type BudgetTier = 'budget-conscious' | 'moderate-spending' | 'premium-quality'

export interface AdvisorInput {
  goals: GoalId[]
  ageRange?: AgeRange
  activityLevel?: ActivityLevel
  diet?: DietType
  concerns: ConcernId[]
  budgetTier?: BudgetTier
}

export interface AdvisorStep {
  id: string
  type: 'welcome' | 'goals' | 'lifestyle' | 'diet' | 'concerns' | 'budget' | 'processing' | 'results'
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

