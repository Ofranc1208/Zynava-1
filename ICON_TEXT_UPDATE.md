# Icon and Text Update Guide

This document provides a comprehensive guide for updating icons and text in the Supplement Advisor quiz, specifically for the Primary Wellness Goal step (Step 1).

## Overview

The quiz system supports two types of icons:
1. **Emoji Icons** - Simple text-based emojis (e.g., 🛡️, ⚡, 🌱)
2. **Image Icons** - PNG/image files from the public folder (e.g., Overall Wellness.png)

## File Structure

### Core Files to Modify

1. **`src/components/advisor/AdvisorChat/controller/quizData.ts`**
   - Contains all quiz step definitions and their options
   - Location of goal options with labels and images

2. **`src/components/advisor/types.ts`**
   - Defines the `QuizOption` interface
   - Specifies which fields are available for options (label, value, image, description)

3. **`src/components/advisor/AdvisorChat/components/QuizButton.tsx`**
   - React component that renders individual quiz options
   - Handles emoji extraction and image display logic
   - Determines when to show image vs. emoji

4. **`src/components/advisor/AdvisorChat/components/QuizButton.module.css`**
   - Styles for quiz buttons
   - Image sizing and layout adjustments

## How to Update Icons and Text

### Option 1: Using Emoji Icons (No Image)

For goals without custom images, use the emoji format:

**File:** `src/components/advisor/AdvisorChat/controller/quizData.ts`

```typescript
goals: {
  id: 'goals',
  type: 'goals',
  message: "Primary Wellness Goal",
  options: [
    { id: 'boost-immunity', label: '🛡️ Boost Immunity', value: 'boost-immunity' },
    { id: 'energy-vitality', label: '⚡ Energy & Vitality', value: 'energy-vitality' },
    // ... more options
  ],
  isComplete: false,
},
```

**Format:** `{emoji} {Text Label}`

**Steps:**
1. Open `quizData.ts`
2. Find the goal option you want to update in the `goals.options` array
3. Update the `label` field with the desired emoji and text
4. The emoji will automatically be extracted and displayed above the text
5. No image property needed

### Option 2: Using Image Icons

For goals with custom images, use the image format:

**File:** `src/components/advisor/AdvisorChat/controller/quizData.ts`

```typescript
goals: {
  id: 'goals',
  type: 'goals',
  message: "Primary Wellness Goal",
  options: [
    { 
      id: 'overall-health', 
      label: 'Overall Wellness', 
      value: 'overall-health', 
      image: '/assets/images/Overall Wellness.png' 
    },
    // ... more options
  ],
  isComplete: false,
},
```

**Format:** Just the text label (no emoji), plus `image` property pointing to PNG file

**Steps:**
1. Add your PNG image to the `public/assets/images/` folder
2. Open `quizData.ts`
3. Find the goal option or create a new one
4. Update the `label` field with ONLY the text (no emoji)
5. Add `image: '/assets/images/YourFileName.png'`
6. The image will automatically be displayed at 36x36px
7. The emoji from the label will NOT appear (image takes precedence)

## Image Specifications

### Size and Format
- **Recommended Size:** 36x36 pixels (or larger - will be scaled down)
- **Format:** PNG (supports transparency)
- **Location:** `public/assets/images/`
- **File Name:** Use descriptive names (e.g., "Overall Wellness.png")

### Display Style
- Images are centered in the button
- Images maintain aspect ratio (object-fit: contain)
- Display size is hardcoded to 36x36px (25% smaller than original emoji size for better proportions)

## Component Logic

### QuizButton Component Flow

1. **Check if image is provided:**
   - If `image` prop exists → Display image, set `displayLabel` to just text
   - If no image → Continue to emoji extraction

2. **Check if demographic button:**
   - If value starts with "male-" or "female-" → Special formatting for sex/age

3. **Extract emoji from label:**
   - Splits label at first space
   - Checks if first part is an emoji
   - If emoji found → Displays as icon above text
   - If no emoji → Shows only text

### CSS Classes

- **`.quizButton`** - Base button styling
- **`.quizButton.withImage`** - Applied when image is provided (adjusts gap to 4px)
- **`.label`** - Text styling (font-weight: 700 for image buttons)
- **`.image`** - Image styling (36x36px, object-fit: contain)

## Text Styling

### Current Styling for Image Buttons
- **Font Weight:** 700 (bold)
- **Color:** #374151 (dark gray)
- **Font Size:** 0.95rem
- **Line Height:** 1.3

### How to Change Text Styling

Edit `src/components/advisor/AdvisorChat/components/QuizButton.module.css`:

```css
.quizButton.withImage .label {
  font-weight: 700;      /* Change to 600 for less bold */
  color: #374151;        /* Change to #1f2937 for darker black */
  /* Other properties... */
}
```

## Step-by-Step Example: Add New Goal with Image

### Scenario: Add "Custom Wellness" goal with custom image

1. **Add image to public folder:**
   - Save PNG file to: `public/assets/images/Custom Wellness.png`

2. **Update quizData.ts:**
   - Open `src/components/advisor/AdvisorChat/controller/quizData.ts`
   - Find the `goals.options` array
   - Add new option:
   ```typescript
   { 
     id: 'custom-wellness', 
     label: 'Custom Wellness', 
     value: 'custom-wellness',
     image: '/assets/images/Custom Wellness.png'
   }
   ```

3. **Update types.ts (if needed):**
   - Open `src/components/advisor/types.ts`
   - Add to `GoalId` type union: `| 'custom-wellness'`
   - This ensures TypeScript knows about the new goal

4. **Test in browser:**
   - Refresh the development server
   - Check if image displays correctly at 36x36px
   - Verify text appears below image with correct styling

## Step-by-Step Example: Change Icon from Image to Emoji

### Scenario: Change "Overall Wellness" from image to emoji

1. **Remove image property from quizData.ts:**
   ```typescript
   // BEFORE:
   { id: 'overall-health', label: 'Overall Wellness', value: 'overall-health', image: '/assets/images/Overall Wellness.png' }

   // AFTER:
   { id: 'overall-health', label: '🌍 Overall Wellness', value: 'overall-health' }
   ```

2. **Result:**
   - Image will not display
   - Emoji 🌍 will be extracted and shown above text
   - Text "Overall Wellness" will display below emoji

## Troubleshooting

### Image not displaying
- Check file path is correct: `/assets/images/FileName.png`
- Verify PNG file exists in `public/assets/images/`
- Check browser console for 404 errors
- Ensure file name matches exactly (case-sensitive)

### Emoji showing with image
- This shouldn't happen - remove emoji from label if image is provided
- Label should be text-only when using image

### Text not styling correctly
- Check if `.quizButton.withImage .label` CSS is applied
- Verify CSS changes are saved and browser is refreshed
- Check for conflicting CSS rules

### Button height inconsistent
- Image buttons have `.withImage` class applied automatically
- If height changes unexpectedly, check QuizStepRenderer.module.css for min-height settings

## Related Files

- **Quiz Step Renderer:** `src/components/advisor/AdvisorChat/components/QuizStepRenderer.tsx`
  - Passes image prop to QuizButton

- **Quiz Data:** `src/components/advisor/AdvisorChat/controller/quizData.ts`
  - Central location for all quiz options

- **Types:** `src/components/advisor/types.ts`
  - Defines QuizOption interface with image property

- **Button Styles:** `src/components/advisor/AdvisorChat/components/QuizButton.module.css`
  - Controls button appearance and sizing

## Quick Reference

| Aspect | Emoji Method | Image Method |
|--------|--------------|--------------|
| Label Format | `"🛡️ Boost Immunity"` | `"Overall Wellness"` |
| Image Property | Not needed | `/assets/images/name.png` |
| Display Size | 1.8rem emoji | 36x36px image |
| Color | Automatic | Dark gray (#374151) |
| Font Weight | 600 | 700 |
| File Location | N/A | `public/assets/images/` |

## Future Enhancements

- Support for SVG icons
- Dynamic sizing configuration
- Color customization per option
- Icon animation support

