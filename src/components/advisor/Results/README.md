# Results Module (`src/components/advisor/Results/`)

This module displays personalized supplement recommendations based on the Z-SCORE™ Quality and Safety algorithm. It processes quiz answers to rank and filter products from a curated database.

**COMPLIANCE NOTE**: This algorithm evaluates QUALITY and SAFETY only. We do NOT evaluate or recommend dosages - that is a medical decision for healthcare providers based on individual patient needs.

## 📁 Folder Structure

```
src/components/advisor/Results/
├── index.ts                  # Barrel exports
├── types.ts                  # UI-related type definitions
├── constants.ts              # UI-related constants
├── README.md                 # This documentation
│
├── ResultsPage.tsx           # Main page component
├── ResultsPage.module.css
├── ResultCard.tsx            # Individual product card
├── ResultCard.module.css
├── ResultsControlBar.tsx     # Filter/sort controls
├── ResultsControlBar.module.css
├── ResultsFilters.tsx        # Additional filter UI
├── ResultsFilters.module.css
│
├── mockData.ts               # Mock product database (1200+ products)
├── zScoreAlgorithm.ts        # Main algorithm orchestrator
│
└── scoring/                  # Z-SCORE algorithm components
    ├── index.ts              # Barrel exports for scoring
    ├── types.ts              # Algorithm type definitions
    ├── constants.ts          # Algorithm constants & reference data
    ├── ingredientScorer.ts   # Ingredient match scoring (0-35 pts)
    ├── goalScorer.ts         # Goal alignment scoring (0-15 pts)
    ├── demographicScorer.ts  # Age/gender fit scoring (0-15 pts)
    ├── activityScorer.ts     # Lifestyle fit scoring (0-10 pts)
    ├── qualityScorer.ts      # Brand & review scoring (0-15 pts)
    ├── dietaryScorer.ts      # Diet compliance scoring (0-10 pts)
    └── diversityFilter.ts    # Result variety enforcement
```

## 🧮 Z-SCORE™ Quality and Safety Algorithm

The Z-SCORE™ algorithm ranks supplements based on QUALITY and SAFETY. Each product receives a score from 0-100 points, calculated from six components:

### Score Components

| Component | Points | Description |
|-----------|--------|-------------|
| **Ingredient Quality & Purity** | 0-45 | Third-party testing, clean label, organic, ingredient quality |
| **Goal Alignment** | 0-15 | Relevance to user's primary wellness goal |
| **Demographic Appropriateness** | 0-10 | Suitability for user's age/gender |
| **Activity Fit** | 0-5 | Match with user's activity level |
| **Brand Quality** | 0-15 | Brand tier + review ratings |
| **Dietary Compliance** | 0-10 | Compliance with dietary preferences (vegan, gluten-free, etc.) |
| **Safety Penalties** | 0-30 (deducted) | Contraindications and safety concerns (future) |

### Algorithm Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│                         Quiz Completion                             │
│  User answers: Goals, Demographics, Activity, Diet, Concerns        │
└─────────────────────────────────┬───────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    1. Determine Target Ingredients                  │
│  Maps concerns → specific ingredients (e.g., sleep → magnesium)     │
└─────────────────────────────────┬───────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    2. Score All Products                            │
│  Calculate 6 component scores for each product in database          │
└─────────────────────────────────┬───────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    3. Hard Filter                                   │
│  Remove products with 0 ingredient match OR wrong goal category     │
└─────────────────────────────────┬───────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    4. Sort by Z-SCORE                               │
│  Highest scores first, enforce minimum 1-point gap between ranks    │
└─────────────────────────────────┬───────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    5. Apply Diversity Filter                        │
│  Max 2 per brand, max 2 per primary ingredient, ensure variety      │
└─────────────────────────────────┬───────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    6. Return Ranked Results                         │
│  Top products with Z-SCORE, match reasons, and score breakdown      │
└─────────────────────────────────────────────────────────────────────┘
```

## 🎯 Key Features

### Ingredient Quality Scoring
- Maps user concerns to target ingredients (e.g., "sleep-quality" → magnesium, l-theanine, melatonin)
- Checks product's `masterIngredients` array for matches
- Evaluates quality indicators: third-party testing, clean label, organic, non-GMO
- **Does NOT evaluate dosage** - that is a medical decision for healthcare providers

### Quality Multipliers
```typescript
// Quality bonuses applied:
BASE: 0.6           // Base score for any matched ingredient
THIRD_PARTY_TESTED: +0.15  // Third-party testing certification
CLEAN_LABEL: +0.10         // No fillers or unnecessary additives
ORGANIC: +0.10             // Certified organic ingredients
NON_GMO: +0.05             // Non-GMO verification
```

### Brand Quality Tiers
- **Tier A** (6 pts): Premium clinical-grade brands (Nordic Naturals, Pure Encapsulations, etc.)
- **Tier B** (4 pts): Quality mainstream brands (NOW Foods, Nature Made, etc.)
- **Tier C** (2 pts): Generic/unknown brands

### Diversity Rules
- Max 2 products from same brand in results
- Max 2 products with same primary ingredient
- Ensures variety in recommendations

## 📦 Component Overview

### `ResultsPage.tsx`
Main orchestrator that:
- Extracts quiz params from URL
- Calls `rankProductsByZScore()` with user input
- Manages filter/sort state
- Renders header, control bar, product grid, and footer

### `ResultCard.tsx`
Displays individual product with:
- Z-SCORE badge (top right)
- Top Match badge (first result)
- Product image placeholder
- Brand, title, rating, price
- Match reasons (why this product fits)
- CTA button

### `ResultsControlBar.tsx`
Filter controls including:
- Result count (5, 10, 20, 50)
- Brand filter
- Price range filter
- Rating filter
- Sort options

### `zScoreAlgorithm.ts`
Thin orchestrator that:
- Coordinates all scoring components
- Combines individual scores into total Z-SCORE
- Applies hard filtering and diversity rules
- Returns ranked, diverse results

## 🔌 Usage

```tsx
import { ResultsPage } from '@/src/components/advisor/Results'

// In app/advisor/results/page.tsx:
<ResultsPage quizParams={{
  goals: 'sleep-stress',
  demographic: 'female-36-50',
  activity: 'active-lifestyle',
  diet: 'vegan,gluten-free',  // Comma-separated for multi-select
  concerns: 'sleep-quality',
  preferences: 'budget-friendly',
}} />
```

## 📊 Mock Data

The `mockData.ts` file contains 1200+ mock products organized by category:
- Heart Health / Omega-3
- Sleep & Stress
- Immunity
- Gut Health
- Energy & Vitality
- Bone & Joint
- Brain Health
- Overall Wellness
- Weight Management

Each product includes:
- Basic info (title, brand, price, rating)
- `masterIngredients` for matching
- `goalTags` for goal alignment
- `demographicScores` for age/gender appropriateness
- `activityScores` for lifestyle fit
- `brandTier` for quality scoring
- Quality flags (thirdPartyTested, cleanLabel)
- Dietary flags (isVegan, isGlutenFree, isOrganic, isNonGMO)

## ✅ Code Quality

- **Type Safety**: Full TypeScript with strict types
- **Modular Scoring**: Each scoring component is isolated and testable
- **Constants Centralized**: All magic numbers in `constants.ts`
- **Barrel Exports**: Clean imports via `index.ts` files
- **Documentation**: JSDoc on key functions
- **Responsive**: CSS modules with mobile-first approach

