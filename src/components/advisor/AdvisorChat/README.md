# AdvisorChat Module

The interactive supplement advisor quiz and chat interface.

## 📁 Architecture

```
AdvisorChat/
├── index.ts              # Barrel exports for the module
├── AdvisorChat.tsx       # Main orchestrator component
├── AdvisorChat.module.css
│
├── controller/           # State Management Layer
│   ├── index.ts          # Controller exports
│   ├── useAdvisorQuiz.ts # Main quiz state hook
│   ├── useQuizSelection.ts # Selection state helper
│   └── quizData.ts       # Quiz step definitions
│
├── components/           # UI Components Layer
│   ├── index.ts          # Component exports
│   ├── ChatBubble.tsx    # Chat message bubble
│   ├── QuizButton.tsx    # Option selection button
│   ├── QuizStepRenderer.tsx # Renders quiz questions
│   ├── ProgressIndicator.tsx # Progress bar
│   ├── WelcomeSequence.tsx # Animated welcome messages
│   ├── ReviewStep.tsx    # Review selections before submit
│   ├── ProcessingAnimation.tsx # Loading animation
│   ├── AdvisorInputBar.tsx # Chat text input
│   └── TypingIndicator.tsx # "Z is typing..." indicator
│
└── data/                 # Static Data Layer
    ├── index.ts          # Data exports
    └── goalSpecificConcerns.ts # Goal-specific options
```

## 🎯 Design Principles

### Separation of Concerns

| Layer | Purpose | Contains |
|-------|---------|----------|
| **Controller** | State management | Hooks, step definitions |
| **Components** | UI presentation | React components, CSS modules |
| **Data** | Static configuration | Lookup tables, mappings |

### Single Source of Truth

- **Types**: All types defined in `../types.ts`
- **Quiz Steps**: Defined once in `controller/quizData.ts`
- **Goal Concerns**: Dynamically loaded from `data/goalSpecificConcerns.ts`

## 🔄 Quiz Flow

```
Welcome → Goals → Demographics → Lifestyle → Diet → Concerns → Budget → Review → Processing → Results
```

## 📦 Usage

### Basic Import
```tsx
import { AdvisorChat } from '@/src/components/advisor/AdvisorChat'

function MyPage() {
  return <AdvisorChat onClose={() => console.log('closed')} />
}
```

### Using the Quiz Hook
```tsx
import { useAdvisorQuiz } from '@/src/components/advisor/AdvisorChat/controller'

const {
  currentStep,
  input,
  handleGoalSelect,
  handleNext,
  canProceed
} = useAdvisorQuiz((completedInput) => {
  // Handle quiz completion
  console.log('User selections:', completedInput)
})
```

### Individual Components
```tsx
import { 
  ChatBubble, 
  QuizButton, 
  ProgressIndicator 
} from '@/src/components/advisor/AdvisorChat/components'
```

## 🔗 Dependencies

- **Internal**: `../types.ts` for type definitions
- **External**: `next/navigation` for routing to results
- **Styling**: CSS Modules with Inter font family

## 📝 Key Types

```typescript
interface AdvisorInput {
  goals: GoalId[]
  demographic?: DemographicId
  activityLevel?: ActivityLevel
  diet?: DietType
  concerns: ConcernId[]
  shoppingPreferences: ShoppingPreference[]
}
```

## 🎨 Styling

All components use CSS Modules with:
- **Brand color**: `#ff6b35` (Zynava orange)
- **Font**: Inter (industry standard for chat interfaces)
- **Responsive**: Mobile-first with breakpoints at 390px, 480px, 768px

## 🧪 Testing

Test page available at: `/advisor/test-animation`

