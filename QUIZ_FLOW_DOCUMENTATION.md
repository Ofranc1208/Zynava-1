# Zynava Supplement Advisor - Complete Quiz Flow Documentation

## Overview

The Zynava Supplement Advisor is a multi-step quiz that helps users find the right supplements based on their wellness goals, demographics, lifestyle, dietary preferences, health concerns, and buying preferences.

---

## Quiz Flow Structure

The quiz follows this step order:
1. **Welcome** - Introduction message
2. **Goals** (Step 1) - Primary Wellness Goal selection
3. **Demographics** (Step 2) - Age and Gender selection
4. **Lifestyle** (Step 3) - Activity Level selection
5. **Diet** (Step 4) - Dietary Preferences selection
6. **Concerns** (Step 5) - Supplement Focus (dynamic based on Step 1)
7. **Budget** (Step 6) - Buying Preferences (multi-select, max 3)

---

## Step 2: Demographics - "About You"

### Display Information
- **Step Title**: "About You"
- **Step Number**: 2 of 6
- **Progress**: 33% (Step 2 of 6)
- **Selection Type**: Single selection (required)

### Options Available

The demographics step combines **gender** and **age range** into a single selection. All options are displayed in a 4x2 grid layout:

#### Age Range: 18-35
- 👨 **Male, 18-35** → `value: 'male-18-35'`
- 👩 **Female, 18-35** → `value: 'female-18-35'`

#### Age Range: 36-50
- 👨 **Male, 36-50** → `value: 'male-36-50'`
- 👩 **Female, 36-50** → `value: 'female-36-50'`

#### Age Range: 51-65
- 👨 **Male, 51-65** → `value: 'male-51-65'`
- 👩 **Female, 51-65** → `value: 'female-51-65'`

#### Age Range: 65+
- 👨 **Male, 65+** → `value: 'male-65-plus'`
- 👩 **Female, 65+** → `value: 'female-65-plus'`

### Data Structure

**Type Definition**: `DemographicId`
```typescript
type DemographicId = 
  | 'male-18-35'
  | 'male-36-50'
  | 'male-51-65'
  | 'male-65-plus'
  | 'female-18-35'
  | 'female-36-50'
  | 'female-51-65'
  | 'female-65-plus'
```

**Stored in**: `AdvisorInput.demographic?: DemographicId`

### Validation & Progression
- **Required**: Yes - User must select one option to proceed
- **Auto-advance**: Yes - Automatically moves to Step 3 after selection
- **Back button**: Available (returns to Step 1)

---

## Step 3: Lifestyle - "Activity Level"

### Display Information
- **Step Title**: "Activity Level"
- **Step Number**: 3 of 6
- **Progress**: 50% (Step 3 of 6)
- **Selection Type**: Single selection (required)

### Options Available

All 8 options are displayed in a grid layout:

1. 💪 **Power Lifter** → `value: 'power-lifter'`
2. 🏃‍♂️ **Endurance Athlete** → `value: 'endurance-athlete'`
3. 🏋️ **Regular Gym Goer** → `value: 'regular-gym-goer'`
4. 🚶‍♂️ **Active Lifestyle** → `value: 'active-lifestyle'`
5. 🧘‍♀️ **Light Exercise** → `value: 'light-exercise'`
6. 💺 **Desk Worker** → `value: 'desk-worker'`
7. 🛋️ **Low Activity** → `value: 'low-activity'`
8. 🩹 **Recovery/Injury** → `value: 'recovery-injury'`

### Data Structure

**Type Definition**: `ActivityLevel`
```typescript
type ActivityLevel = 
  | 'power-lifter' 
  | 'endurance-athlete' 
  | 'regular-gym-goer' 
  | 'active-lifestyle' 
  | 'light-exercise' 
  | 'desk-worker' 
  | 'low-activity' 
  | 'recovery-injury'
```

**Stored in**: `AdvisorInput.activityLevel?: ActivityLevel`

### Validation & Progression
- **Required**: Yes - User must select one option to proceed
- **Auto-advance**: Yes - Automatically moves to Step 4 after selection
- **Back button**: Available (returns to Step 2)

---

## Step 4: Diet - "Dietary Preferences"

### Display Information
- **Step Title**: "Dietary Preferences"
- **Step Number**: 4 of 6
- **Progress**: 67% (Step 4 of 6)
- **Selection Type**: Single selection (required)

### Options Available

All 8 options are displayed in a grid layout:

1. 🍽️ **No Preference** → `value: 'no-preference'`
2. 🌱 **Vegan** → `value: 'vegan'`
3. 🥗 **Vegetarian** → `value: 'vegetarian'`
4. 🌾 **Gluten-Free** → `value: 'gluten-free'`
5. 🚫 **Sugar-Free** → `value: 'sugar-free'`
6. ✡️ **Kosher** → `value: 'kosher'`
7. ☪️ **Halal** → `value: 'halal'`
8. 🌿 **Non-GMO/Organic** → `value: 'non-gmo-organic'`

### Data Structure

**Type Definition**: `DietType`
```typescript
type DietType = 
  | 'no-preference' 
  | 'vegan' 
  | 'vegetarian' 
  | 'gluten-free' 
  | 'sugar-free' 
  | 'kosher' 
  | 'halal' 
  | 'non-gmo-organic'
```

**Stored in**: `AdvisorInput.diet?: DietType`

### Validation & Progression
- **Required**: Yes - User must select one option to proceed
- **Auto-advance**: Yes - Automatically moves to Step 5 after selection
- **Back button**: Available (returns to Step 3)

---

## Step 5: Concerns - "Supplement Focus" (Dynamic)

### Display Information
- **Step Title**: "Supplement Focus" (same for all goals)
- **Step Number**: 5 of 6
- **Progress**: 83% (Step 5 of 6)
- **Selection Type**: Multi-select (can select multiple, but "None" clears all)

### Dynamic Behavior

**This step is DYNAMIC** - the options shown depend on the user's selection from **Step 1 (Goals)**.

The system uses `getGoalSpecificConcerns(goalId)` to fetch the appropriate supplement options based on the selected wellness goal.

### Options by Wellness Goal

#### 1. 💪 Overall Wellness
**Title**: "Supplement Focus"

1. 💊 **Daily Multivitamin** → `value: 'overall-multivitamin'`
2. ☀️ **Vitamin D3 + K2** → `value: 'overall-vitamin-d'`
3. 🐟 **Omega-3 Fish Oil** → `value: 'overall-omega3'`
4. 💎 **Magnesium Complex** → `value: 'overall-magnesium'`
5. 🍊 **Vitamin C** → `value: 'overall-vitamin-c'`
6. 🦠 **Probiotics** → `value: 'overall-probiotics'`
7. ⚡ **B-Complex** → `value: 'overall-b-complex'`
8. ✓ **None of the above** → `value: 'none'`

#### 2. 🛡️ Boost Immunity
**Title**: "Supplement Focus"

1. ⚡ **Zinc Picolinate** → `value: 'immune-zinc'`
2. 🍊 **Vitamin C (Liposomal)** → `value: 'immune-antioxidants'`
3. ☀️ **Vitamin D3** → `value: 'immune-vitamin-d'`
4. 🍇 **Elderberry Syrup** → `value: 'immune-elderberry'`
5. 🛡️ **Quercetin** → `value: 'immune-cold-flu'`
6. 🦠 **Immune Probiotics** → `value: 'immune-probiotics'`
7. 🍂 **Seasonal Support Blend** → `value: 'immune-seasonal'`
8. ✓ **None of the above** → `value: 'none'`

#### 3. ⚡ Energy & Vitality
**Title**: "Supplement Focus"

1. 💉 **Methylated B-Complex** → `value: 'energy-b12'`
2. ⚡ **CoQ10 (Ubiquinol)** → `value: 'energy-coq10'`
3. 🩸 **Iron Bisglycinate** → `value: 'energy-iron'`
4. 💉 **Vitamin B12** → `value: 'energy-fatigue'`
5. 🧠 **Adrenal Support** → `value: 'energy-adrenal'`
6. 🌅 **Morning Energy Blend** → `value: 'energy-morning'`
7. 📉 **Afternoon Crash Support** → `value: 'energy-afternoon'`
8. ✓ **None of the above** → `value: 'none'`

#### 4. 🦴 Bone & Joint Health
**Title**: "Supplement Focus"

1. 💪 **Collagen Peptides** → `value: 'joint-mobility'`
2. 🔥 **Curcumin (Turmeric)** → `value: 'joint-inflammation'`
3. 💊 **Glucosamine Chondroitin** → `value: 'joint-glucosamine'`
4. 🦴 **Calcium + Magnesium** → `value: 'joint-calcium'`
5. ☀️ **Vitamin D3 + K2** → `value: 'joint-vitamin-d'`
6. 🏃 **Joint Mobility Formula** → `value: 'joint-pain'`
7. 🦴 **Arthritis Support** → `value: 'joint-arthritis'`
8. ✓ **None of the above** → `value: 'none'`

#### 5. ❤️ Heart Health
**Title**: "Supplement Focus"

1. 🐟 **Omega-3 Fish Oil** → `value: 'heart-omega3'`
2. ⚡ **CoQ10** → `value: 'heart-coq10'`
3. 💊 **Magnesium Glycinate** → `value: 'heart-magnesium'`
4. 🔄 **Beet Root Extract** → `value: 'heart-circulation'`
5. 🛡️ **Heart Antioxidants** → `value: 'heart-antioxidants'`
6. 📊 **Cholesterol Support** → `value: 'heart-cholesterol'`
7. 🩺 **Blood Pressure Support** → `value: 'heart-blood-pressure'`
8. ✓ **None of the above** → `value: 'none'`

#### 6. 🌱 Gut Health
**Title**: "Supplement Focus"

1. 🦠 **Spore-Based Probiotic** → `value: 'gut-probiotic-balance'`
2. 🔬 **Digestive Enzymes** → `value: 'gut-digestive-enzymes'`
3. 💊 **L-Glutamine** → `value: 'gut-leaky-gut'`
4. 🌾 **Prebiotic Fiber** → `value: 'gut-constipation'`
5. 🦠 **Probiotic Balance** → `value: 'gut-food-sensitivity'`
6. 🔥 **Gut Inflammation Support** → `value: 'gut-inflammation'`
7. 💨 **Bloating & Gas Relief** → `value: 'gut-bloating'`
8. ✓ **None of the above** → `value: 'none'`

#### 7. 😴 Sleep & Stress Relief
**Title**: "Supplement Focus"

1. 💊 **Magnesium Glycinate** → `value: 'sleep-magnesium'`
2. 🌿 **Ashwagandha (KSM-66)** → `value: 'stress-adaptogens'`
3. 🌙 **Melatonin** → `value: 'sleep-melatonin'`
4. 🧘 **L-Theanine** → `value: 'stress-anxiety'`
5. ⭐ **Sleep Quality Formula** → `value: 'sleep-quality'`
6. 📈 **Cortisol Management** → `value: 'stress-cortisol'`
7. 🌿 **Adaptogen Blend** → `value: 'sleep-insomnia'`
8. ✓ **None of the above** → `value: 'none'`

#### 8. 🧠 Brain Health
**Title**: "Supplement Focus"

1. 🦁 **Lion's Mane Mushroom** → `value: 'brain-lion-mane'`
2. 🐟 **Omega-3 (High DHA)** → `value: 'brain-omega3'`
3. 💊 **Alpha-GPC** → `value: 'brain-focus'`
4. 🌿 **Ginkgo Biloba** → `value: 'brain-ginkgo'`
5. 🧠 **Memory Support** → `value: 'brain-memory'`
6. 🎯 **Focus & Concentration** → `value: 'brain-b12'`
7. 💭 **Cognitive Function Formula** → `value: 'brain-cognitive'`
8. ✓ **None of the above** → `value: 'none'`

### Data Structure

**Type Definition**: `ConcernId` (includes all goal-specific concern IDs)

**Stored in**: `AdvisorInput.concerns: ConcernId[]` (array of selected concerns)

### Selection Logic

- **Multi-select**: Users can select multiple supplements
- **"None" behavior**: If user selects "None of the above", it clears all other selections and sets `concerns: ['none']`
- **Deselection**: Users can click a selected option again to deselect it
- **Auto-advance**: Yes - Automatically moves to Step 6 after any selection

### Validation & Progression
- **Required**: Yes - User must select at least one option (or "None")
- **Auto-advance**: Yes - Automatically moves to Step 6 after selection
- **Back button**: Available (returns to Step 4)

---

## Step 6: Budget - "Buying Preferences"

### Display Information
- **Step Title**: "Buying Preferences"
- **Step Number**: 6 of 6
- **Progress**: 100% (Step 6 of 6)
- **Selection Type**: Multi-select (max 3 selections)
- **Subtitle**: "Add up to 3"

### Options Available

All 7 options are displayed in a grid layout:

1. 💰 **Budget Friendly** → `value: 'budget-friendly'`
2. 💎 **Premium Quality** → `value: 'premium-quality'`
3. 📦 **Subscribe & Save** → `value: 'subscribe-save'`
4. 🚚 **Free Shipping** → `value: 'free-shipping'`
5. ✨ **New Arrivals** → `value: 'new-arrivals'`
6. 🏷️ **On Sale** → `value: 'on-sale'`
7. 🎁 **Bundle Deals** → `value: 'bundle-deals'`

### Data Structure

**Type Definition**: `ShoppingPreference`
```typescript
type ShoppingPreference = 
  | 'budget-friendly'
  | 'premium-quality'
  | 'free-shipping'
  | 'new-arrivals'
  | 'on-sale'
  | 'bundle-deals'
  | 'subscribe-save'
```

**Stored in**: `AdvisorInput.shoppingPreferences: ShoppingPreference[]` (array, max 3 items)

### Selection Logic

- **Multi-select**: Users can select up to 3 preferences
- **Max limit**: Once 3 selections are made, additional selections are blocked
- **Toggle behavior**: Users can click a selected option again to deselect it
- **Continue button**: When 1-3 preferences are selected, a "Continue" button appears showing "X of 3" count
- **No auto-advance**: User must manually click "Continue" to proceed

### Price Matrix / Budget Preferences

The buying preferences are not traditional price ranges, but rather shopping behaviors and preferences:

| Preference | Description | Use Case |
|------------|-------------|----------|
| **Budget Friendly** | User prioritizes lower-priced options | Price-conscious shoppers |
| **Premium Quality** | User wants high-end, quality products | Quality-focused shoppers |
| **Subscribe & Save** | User interested in subscription discounts | Recurring purchase customers |
| **Free Shipping** | User wants free shipping options | Shipping cost sensitivity |
| **New Arrivals** | User interested in latest products | Early adopters |
| **On Sale** | User wants discounted products | Deal seekers |
| **Bundle Deals** | User interested in product bundles | Value shoppers |

### Validation & Progression
- **Required**: No - User can proceed with 0-3 selections
- **Auto-advance**: No - Requires manual "Continue" button click
- **Back button**: Available (returns to Step 5)
- **Final step**: Clicking "Continue" completes the quiz and triggers processing

---

## Complete Data Flow

### AdvisorInput Structure

All quiz responses are stored in a single `AdvisorInput` object:

```typescript
interface AdvisorInput {
  goals: GoalId[]                    // Step 1: Single goal selected
  demographic?: DemographicId         // Step 2: Age + Gender
  ageRange?: AgeRange                 // Reserved for future use
  activityLevel?: ActivityLevel        // Step 3: Activity level
  diet?: DietType                     // Step 4: Dietary preference
  concerns: ConcernId[]               // Step 5: Selected supplements (multi)
  shoppingPreferences: ShoppingPreference[]  // Step 6: Buying preferences (max 3)
}
```

### Step Connection Flow

```
Step 1 (Goals)
    ↓
Step 2 (Demographics) - Independent
    ↓
Step 3 (Lifestyle) - Independent
    ↓
Step 4 (Diet) - Independent
    ↓
Step 5 (Concerns) - DYNAMIC based on Step 1 selection
    ↓
Step 6 (Budget) - Independent
    ↓
Processing & Results
```

### Dynamic Step 5 Logic

The system uses the following logic to determine Step 5 options:

1. **Get selected goal** from `input.goals[0]`
2. **Call** `getGoalSpecificConcerns(goalId)` 
3. **Return** the appropriate 8 supplement options for that goal
4. **Display** with title "Supplement Focus"

**File**: `src/components/advisor/AdvisorChat/goalSpecificConcerns.ts`

**Function**: `getGoalSpecificConcerns(goalId: GoalId | undefined): QuizOption[]`

---

## Display Components

### QuizStepRenderer

**Location**: `src/components/advisor/AdvisorChat/QuizStepRenderer.tsx`

**Responsibilities**:
- Renders the current quiz step
- Handles option selection
- Shows progress indicator
- Manages back button visibility
- Handles multi-select vs single-select logic
- Shows "Continue" button for budget step

### Progress Indicator

**Component**: `ProgressIndicator`
- Shows current step number (e.g., "Step 2 of 6")
- Shows percentage (e.g., "33%")
- Visual progress bar

### QuizButton

**Component**: `QuizButton`
- Displays each option with icon and label
- Handles selected/unselected states
- Supports multi-select toggle behavior
- Visual feedback on click

---

## Age & Demographics Matrix

### Age Ranges

| Age Range | Label | Value Format |
|-----------|-------|--------------|
| 18-35 | 18-35 | `18-35` |
| 36-50 | 36-50 | `36-50` |
| 51-65 | 51-65 | `51-65` |
| 65+ | 65+ | `65+` |

### Gender Options

| Gender | Icon | Included in Value |
|--------|------|-------------------|
| Male | 👨 | `male-{age-range}` |
| Female | 👩 | `female-{age-range}` |

### Complete Demographics Matrix

| Age | Male Value | Female Value | Display |
|-----|------------|--------------|---------|
| 18-35 | `male-18-35` | `female-18-35` | 👨 Male, 18-35 / 👩 Female, 18-35 |
| 36-50 | `male-36-50` | `female-36-50` | 👨 Male, 36-50 / 👩 Female, 36-50 |
| 51-65 | `male-51-65` | `female-51-65` | 👨 Male, 51-65 / 👩 Female, 51-65 |
| 65+ | `male-65-plus` | `female-65-plus` | 👨 Male, 65+ / 👩 Female, 65+ |

**Total Combinations**: 8 (4 age ranges × 2 genders)

---

## Validation Rules Summary

| Step | Required | Auto-Advance | Max Selections | Special Rules |
|------|----------|--------------|----------------|---------------|
| **Step 1: Goals** | Yes | Yes | 1 | Single selection only |
| **Step 2: Demographics** | Yes | Yes | 1 | Single selection only |
| **Step 3: Lifestyle** | Yes | Yes | 1 | Single selection only |
| **Step 4: Diet** | Yes | Yes | 1 | Single selection only |
| **Step 5: Concerns** | Yes | Yes | Multiple | "None" clears all others |
| **Step 6: Budget** | No | No | 3 | Manual "Continue" required |

---

## File Structure

### Core Files

1. **`src/components/advisor/AdvisorChat/quizData.ts`**
   - Defines all static quiz steps (Steps 1-4, 6)
   - Contains STEP_ORDER array
   - Defines all option labels and values

2. **`src/components/advisor/AdvisorChat/goalSpecificConcerns.ts`**
   - Defines dynamic Step 5 options for each goal
   - Contains GOAL_SPECIFIC_TITLES
   - Contains GOAL_SPECIFIC_CONCERNS mapping
   - Functions: `getGoalSpecificConcerns()`, `getGoalSpecificTitle()`

3. **`src/components/advisor/types.ts`**
   - All TypeScript type definitions
   - AdvisorInput interface
   - All enum-like types (GoalId, DemographicId, etc.)

4. **`src/components/advisor/AdvisorQuizController.tsx`**
   - Main quiz state management hook
   - Handles all selection logic
   - Manages step progression
   - Validation logic

5. **`src/components/advisor/AdvisorChat/QuizStepRenderer.tsx`**
   - Renders quiz steps
   - Handles dynamic Step 5 logic
   - Progress indicator
   - Option selection UI

---

## Key Implementation Details

### Dynamic Step 5 Implementation

```typescript
// In QuizStepRenderer.tsx
const dynamicOptions = step.id === 'concerns' && input.goals.length > 0
  ? getGoalSpecificConcerns(input.goals[0] as GoalId)
  : step.options

const dynamicTitle = step.id === 'concerns' && input.goals.length > 0
  ? getGoalSpecificTitle(input.goals[0] as GoalId)
  : step.message
```

### Multi-Select Logic (Step 5 & 6)

**Step 5 (Concerns)**:
- Multiple selections allowed
- "None" option clears all others
- Can deselect by clicking again

**Step 6 (Budget)**:
- Maximum 3 selections
- Can deselect by clicking again
- Shows "X of 3" counter when selections made

### Selection Handlers

All selection handlers are in `AdvisorQuizController.tsx`:
- `handleGoalSelect()` - Single selection
- `handleDemographicSelect()` - Single selection
- `handleLifestyleSelect()` - Single selection
- `handleDietSelect()` - Single selection
- `handleConcernSelect()` - Multi-select with "None" logic
- `handleBudgetSelect()` - Multi-select with max 3 limit

---

## Summary

The Zynava Supplement Advisor quiz is a 6-step process that:

1. **Captures wellness goals** (Step 1)
2. **Collects demographics** (Step 2) - Age + Gender in 8 combinations
3. **Assesses activity level** (Step 3) - 8 lifestyle options
4. **Identifies dietary needs** (Step 4) - 8 dietary preference options
5. **Shows goal-specific supplements** (Step 5) - Dynamic 8 options based on Step 1
6. **Captures buying preferences** (Step 6) - Up to 3 preferences from 7 options

The system uses dynamic content loading for Step 5, ensuring users see relevant supplement options based on their primary wellness goal. All data is collected into a single `AdvisorInput` object that can be used for product recommendations and filtering.

