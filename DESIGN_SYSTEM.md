# ZYNAVA Design System Documentation

This document outlines the design language, typography, colors, spacing, and component patterns used throughout the ZYNAVA platform. Use this as a reference when creating new pages to ensure consistency.

---

## Table of Contents

1. [Typography](#typography)
2. [Color Palette](#color-palette)
3. [Spacing & Layout](#spacing--layout)
4. [Card Components](#card-components)
5. [Grid Systems](#grid-systems)
6. [Component Patterns](#component-patterns)
7. [Responsive Breakpoints](#responsive-breakpoints)

---

## Typography

### Font Family
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Font Sizes

#### Main Section Headings (H2)
- **Size:** `1.75rem` (28px)
- **Weight:** `700` (Bold)
- **Color:** `#374151` (Dark Gray)
- **Alignment:** `center`
- **Margin Bottom:** `2rem`
- **Usage:** Primary section titles (e.g., "Why ZYNAVA Exists", "What ZYNAVA Does")

#### Large Card Headings (H3)
- **Size:** `1.3rem` (20.8px)
- **Weight:** `600` (Semi-bold)
- **Color:** `#374151` (Dark Gray)
- **Margin Bottom:** `1.5rem`
- **Usage:** Main headings within large content cards

#### Medium Card Headings (H3)
- **Size:** `1.2rem` (19.2px)
- **Weight:** `600` (Semi-bold)
- **Color:** `#374151` (Dark Gray)
- **Margin Bottom:** `1rem`
- **Usage:** Subsection headings within cards

#### Small Card Headings (H3)
- **Size:** `1.05rem` (16.8px)
- **Weight:** `600` (Semi-bold)
- **Color:** `#374151` (Dark Gray)
- **Margin Bottom:** `0.75rem`
- **Usage:** Headings in smaller feature cards

#### Body Text
- **Size:** `0.9rem` (14.4px)
- **Weight:** `400` (Regular)
- **Color:** `#6b7280` (Light Gray)
- **Line Height:** `1.6`
- **Usage:** All paragraph text, card descriptions

#### Disclaimer Text
- **Size:** `0.8rem` (12.8px)
- **Weight:** `400` (Regular)
- **Color:** `#744210` (Dark Brown/Amber)
- **Line Height:** `1.6`
- **Usage:** Legal disclaimers, important notices

#### CTA Paragraph
- **Size:** `0.95rem` (15.2px)
- **Weight:** `400` (Regular)
- **Color:** `#6b7280` (Light Gray)
- **Line Height:** `1.7`
- **Usage:** Call-to-action introductory text

---

## Color Palette

### Primary Colors

#### Text Colors
- **Dark Gray (Primary Text):** `#374151`
  - Usage: All headings, important text
- **Light Gray (Body Text):** `#6b7280`
  - Usage: Paragraph text, descriptions
- **Dark Brown/Amber (Disclaimer):** `#744210`
  - Usage: Legal disclaimers, warnings

#### Accent Colors
- **Orange (Primary Accent):** `#ff6b35`
  - Usage: Card borders, numbered badges, CTAs
- **Light Blue (Badge Background):** `#eff6ff`
  - Usage: Number badge backgrounds

#### Background Colors
- **White (Card Background):** `#ffffff`
- **Light Gray (Card Background Alt):** `#fafbfc`
- **Gradient Background:** `linear-gradient(135deg, #fafbfc 0%, #f3f4f6 100%)`
- **Disclaimer Background:** `#fffbf0`
- **Disclaimer Border:** `#fde68a`

#### Border Colors
- **Card Border:** `#e5e7eb`
- **Accent Border:** `#ff6b35` (4px solid, left border)

---

## Spacing & Layout

### Container
- **Max Width:** `1100px`
- **Padding:** `3rem 1.5rem` (48px vertical, 24px horizontal)
- **Margin:** `0 auto` (centered)

### Section Spacing
- **Section Margin Bottom:** `3rem` (48px)
- **Final Section Margin Bottom:** `2rem` (32px)

### Card Spacing
- **Card Padding:** `2rem` (32px)
- **Card Margin Bottom:** `2rem` (32px)
- **Card Gap (Grid):** `2rem` (32px)

### Internal Spacing
- **Heading Margin Bottom (H2):** `2rem`
- **Heading Margin Bottom (H3 Large):** `1.5rem`
- **Heading Margin Bottom (H3 Medium):** `1rem`
- **Heading Margin Bottom (H3 Small):** `0.75rem`
- **Paragraph Margin Bottom:** `1rem` (when multiple paragraphs)
- **Paragraph Margin Bottom (Final):** `0` or `0.5rem`

---

## Card Components

### Standard Card
```javascript
{
  background: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: '12px',
  padding: '2rem',
  marginBottom: '2rem',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.3s ease'
}
```

### Accent Border Card
```javascript
{
  ...standardCard,
  borderLeft: '4px solid #ff6b35'
}
```

### Alt Background Card
```javascript
{
  ...standardCard,
  background: '#fafbfc'
}
```

### Gradient Background Card
```javascript
{
  ...standardCard,
  background: 'linear-gradient(135deg, #fafbfc 0%, #f3f4f6 100%)'
}
```

### Disclaimer Card
```javascript
{
  background: '#fffbf0',
  border: '1px solid #fde68a',
  borderRadius: '8px',
  padding: '1.5rem',
  maxWidth: '750px',
  margin: '0 auto',
  textAlign: 'left'
}
```

---

## Grid Systems

### Three Column Grid (Auto-fit)
```javascript
{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '2rem'
}
```

### Three Column Grid (Process Steps)
```javascript
{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem'
}
```

### Multi-Column Grid (Feature Cards)
```javascript
{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '2rem'
}
```

---

## Component Patterns

### Numbered Badge
```javascript
{
  background: '#eff6ff',
  width: '45px',
  height: '45px',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '1rem',
  fontSize: '1.25rem',
  fontWeight: 700,
  color: '#ff6b35'
}
```

### Section Structure
```javascript
<section style={{ marginBottom: '3rem' }}>
  <h2 style={{
    fontSize: '1.75rem',
    fontWeight: 700,
    marginBottom: '2rem',
    color: '#374151',
    textAlign: 'center'
  }}>
    Section Title
  </h2>
  
  {/* Content */}
</section>
```

### Card with Heading
```javascript
<div style={{...cardStyle}}>
  <h3 style={{
    fontSize: '1.2rem', // Adjust based on hierarchy
    fontWeight: 600,
    marginBottom: '1rem',
    color: '#374151'
  }}>
    Card Heading
  </h3>
  <p style={{
    fontSize: '0.9rem',
    color: '#6b7280',
    margin: 0
  }}>
    Card content text...
  </p>
</div>
```

---

## Responsive Breakpoints

### Mobile First Approach
- Default styles target mobile devices
- Use `min-width` media queries for larger screens

### Recommended Breakpoints
- **Mobile:** `< 768px` (default)
- **Tablet:** `≥ 768px`
- **Desktop:** `≥ 1024px`

### Grid Responsiveness
- Grids use `auto-fit` with `minmax()` for automatic responsiveness
- Minimum column widths:
  - Large cards: `320px`
  - Process cards: `300px`
  - Feature cards: `280px`

---

## Content Guidelines

### Paragraph Length
- **Maximum:** 150 words per paragraph
- **Ideal:** 80-120 words
- **Purpose:** Better readability and AI processing

### Heading Hierarchy
1. **H2:** Main section titles (centered, 1.75rem)
2. **H3:** Card and subsection headings (left-aligned, 1.05rem - 1.3rem)

### Text Alignment
- **Headings (H2):** `center`
- **All other text:** `left` (default)
- **CTA sections:** `center` for heading and intro, `left` for disclaimer

---

## Design Principles

### Visual Hierarchy
1. Use consistent font sizes to establish clear hierarchy
2. Dark gray for headings, light gray for body text
3. Orange accent for emphasis and interactive elements

### Consistency
- Always use the same card style for similar content types
- Maintain consistent spacing between sections
- Use the same color palette throughout

### Readability
- Keep paragraphs under 150 words
- Use adequate line height (1.6-1.7)
- Ensure sufficient contrast between text and background

### Modern & Clean
- Subtle shadows and borders
- Generous white space
- Professional color scheme
- No excessive decoration

---

## Example Usage

### Complete Section Example
```javascript
<section style={{ marginBottom: '3rem' }}>
  <h2 style={{
    fontSize: '1.75rem',
    fontWeight: 700,
    marginBottom: '2rem',
    color: '#374151',
    textAlign: 'center'
  }}>
    Section Title
  </h2>

  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
    <div style={{
      background: '#ffffff',
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      padding: '2rem',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)'
    }}>
      <h3 style={{
        fontSize: '1.05rem',
        fontWeight: 600,
        marginBottom: '0.75rem',
        color: '#374151'
      }}>
        Card Title
      </h3>
      <p style={{
        fontSize: '0.9rem',
        color: '#6b7280',
        margin: 0
      }}>
        Card description text here...
      </p>
    </div>
  </div>
</section>
```

---

## Quick Reference

### Font Sizes
- H2: `1.75rem`
- H3 Large: `1.3rem`
- H3 Medium: `1.2rem`
- H3 Small: `1.05rem`
- Body: `0.9rem`
- Disclaimer: `0.8rem`

### Colors
- Dark Gray: `#374151`
- Light Gray: `#6b7280`
- Orange: `#ff6b35`
- White: `#ffffff`
- Light Background: `#fafbfc`

### Spacing
- Section: `3rem`
- Card Padding: `2rem`
- Card Gap: `2rem`
- Heading Bottom: `1rem - 2rem`

---

**Last Updated:** 2025
**Version:** 1.0

