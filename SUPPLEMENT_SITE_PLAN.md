# ZYNAVA — Platform Blueprint

> **The AI-driven supplement advisor that routes users to the best products across multiple trusted brands — while powering creator-led discovery.**

**Document Type:** Production Blueprint  
**Audience:** Engineers, Founders, AI Tools, Contributors  
**Generated:** December 2025  
**Version:** 1.0 — Locked for Phase 1 Build  
**Status:** ✅ BUILD-READY

> **Do not revisit strategy until:**
> - 500+ advisor completions
> - 1 creator sending traffic
> - Measured click-through rates

---

# ⚠️ PROJECT SEPARATION RULE (NON-NEGOTIABLE)

## ZYNAVA Is a Standalone Project

| Rule | Explanation |
|------|-------------|
| **No shared repository** | ZYNAVA has its own clean Git repo |
| **No shared runtime** | Separate deployment, separate domain |
| **No shared Firebase** | Separate Firebase project, separate credentials |
| **No shared env vars** | All new `.env` configuration |
| **No cross-project imports** | Never `import from '../smarterpayouts/'` |

---

## Design Principle: Decision Quality Over Volume

ZYNAVA optimizes for:
- Better decisions per user
- Fewer but higher-confidence recommendations
- Trust over monetization velocity

ZYNAVA intentionally avoids:
- Infinite product lists
- Aggressive upselling
- Gamified health decisions

**If a feature increases clicks but reduces trust, it is rejected.**

---

## How to Use This Document

This document references **SmarterPayouts** as an architectural template.

**What "reference" means:**
- Copy the PATTERN, not the file
- Adapt the LOGIC for supplements
- Rename to ZYNAVA conventions
- Create NEW files in ZYNAVA repo

**What "reference" does NOT mean:**
- Import from SmarterPayouts
- Share code at runtime
- Use SmarterPayouts Firebase
- Keep settlement-related naming

## Asset Reference Convention

Throughout this document, you'll see:

```
REFERENCE: smarterpayouts/src/components/chat/ChatInterface.tsx
CREATE:    zynava/src/components/advisor/AdvisorChat.tsx
```

This means:
1. **Open** the SmarterPayouts file to understand the pattern
2. **Create** a new file in ZYNAVA with adapted logic
3. **Never** import or link between projects

---

## 🤖 CURSOR QUICK REFERENCE: Feature → Folder Map

> **For AI coding tools:** When the user says "build X", request the corresponding SmarterPayouts folder for reference.

### ⚠️ HOW THE USER PROVIDES REFERENCE FOLDERS

**SmarterPayouts4 is NOT open in Cursor.**

It's a separate folder on the user's computer. When you need to see a reference folder:

1. **Tell the user:** "I need to see `smarterpayouts/src/components/chat/` - please copy it into the ZYNAVA project"
2. **User will:** Copy the folder from SmarterPayouts4 on their computer
3. **User will:** Drop it into `zynava/_reference/` folder (temporary, for your reading)
4. **You read:** The folder from `_reference/` to understand the pattern
5. **You create:** New files in the proper ZYNAVA locations
6. **User deletes:** The `_reference/` folder when done (it's just for your reference)

**Reference folder location in ZYNAVA:**
```
zynava/
├── _reference/              ← User drops SmarterPayouts folders here
│   └── chat/                ← Example: copied from smarterpayouts/src/components/chat/
├── app/
├── src/
└── ...
```

**NEVER** import from `_reference/`. It's only for reading patterns.
**ALWAYS** create new files in the proper ZYNAVA structure.

### When Building: ADVISOR / CHATBOT / QUIZ

```
REQUEST THIS FOLDER FROM USER:
smarterpayouts/src/components/chat/

KEY FILES TO STUDY:
- ChatInterface.tsx      → Main UI container
- ChatBubble.tsx         → Message display
- WelcomeScreen.tsx      → Initial greeting
- SmartInputBar/         → User input handling
- ChatController.tsx     → Logic orchestration

CREATE IN ZYNAVA:
zynava/src/components/advisor/
```

---

### When Building: INGREDIENT / TERRAIN EDUCATION PAGES

```
REQUEST THIS FOLDER FROM USER:
smarterpayouts/src/components/Pages/StructuredSettlementInfoHub/

KEY FILES TO STUDY:
- StructuredSettlementInfoHubPage.tsx  → Hub layout
- pages/                               → Individual article pages
- components/                          → Reusable content blocks
- data/                                → Content data structures

CREATE IN ZYNAVA:
zynava/src/components/pages/Ingredients/
zynava/src/components/pages/Terrains/
```

---

### When Building: CREATOR DASHBOARD

```
REQUEST THIS FOLDER FROM USER:
smarterpayouts/app/admin/specialists/
smarterpayouts/src/components/Pages/PerformanceDashboard/

KEY FILES TO STUDY:
- page.tsx                             → Dashboard route
- PerformanceDashboardPage.tsx         → Dashboard layout
- components/                          → Charts, tables, stats

CREATE IN ZYNAVA:
zynava/app/dashboard/
zynava/src/components/pages/CreatorDashboard/
```

---

### When Building: SEO / METADATA / STRUCTURED DATA

```
REQUEST THESE FILES FROM USER:
smarterpayouts/lib/seo/metadata.ts
smarterpayouts/src/components/SEO/StructuredData.tsx
smarterpayouts/src/lib/structured-data/
smarterpayouts/app/robots.ts
smarterpayouts/app/sitemap.ts

KEY PATTERNS:
- generateMetadata() function
- StructuredData component
- JSON-LD schema generators
- AI-friendly robots.txt

CREATE IN ZYNAVA:
zynava/lib/seo/metadata.ts
zynava/src/components/SEO/
zynava/src/lib/structured-data/
zynava/app/robots.ts
zynava/app/sitemap.ts
```

---

### When Building: FIREBASE / DATABASE

```
REQUEST THESE FILES FROM USER:
smarterpayouts/app/utils/firebase.ts
smarterpayouts/lib/firebase-admin.ts
smarterpayouts/lib/firebase/firestore.ts
smarterpayouts/firestore.rules
smarterpayouts/firestore.indexes.json

KEY PATTERNS:
- Client SDK initialization (singleton)
- Admin SDK lazy initialization
- Firestore manager pattern
- Security rules structure

CREATE IN ZYNAVA:
zynava/src/lib/firebase/client.ts
zynava/lib/firebase-admin.ts
zynava/firestore.rules
zynava/firestore.indexes.json
```

---

### When Building: NAVIGATION / LAYOUT

```
REQUEST THESE FILES FROM USER:
smarterpayouts/app/layout.tsx
smarterpayouts/app/components/Footer.tsx
smarterpayouts/src/components/Navigation/

KEY PATTERNS:
- Root layout structure
- Conditional navbar display
- Footer with inline styles
- Mobile/desktop nav switching

CREATE IN ZYNAVA:
zynava/app/layout.tsx
zynava/app/components/Footer.tsx
zynava/src/components/Navigation/
```

---

### When Building: ANALYTICS / TRACKING

```
REQUEST THIS FOLDER FROM USER:
smarterpayouts/src/components/Analytics/

KEY FILES:
- GoogleAnalytics.tsx
- GoogleTagManager.tsx

CREATE IN ZYNAVA:
zynava/src/components/Analytics/
```

---

### When Building: COOKIE CONSENT / GDPR

```
REQUEST THIS FOLDER FROM USER:
smarterpayouts/src/components/CookieConsent/

CREATE IN ZYNAVA:
zynava/src/components/CookieConsent/
```

---

### When Building: API ROUTES

```
REQUEST THESE FILES FROM USER:
smarterpayouts/app/api/openai/run-analysis/route.ts  → AI integration pattern
smarterpayouts/app/api/appointments/route.ts         → CRUD pattern
smarterpayouts/app/api/offer-captures/route.ts       → Event logging pattern

CREATE IN ZYNAVA:
zynava/app/api/advisor/route.ts
zynava/app/api/events/route.ts
zynava/app/api/creators/route.ts
```

---

# CRITICAL: WHAT ZYNAVA IS AND IS NOT

## ✅ ZYNAVA IS:

| Role | Description |
|------|-------------|
| **Supplement Advisor Platform** | AI-powered quiz that recommends supplements based on goals, not brands |
| **Multi-Affiliate Marketplace Router** | Routes users to iHerb, Amazon, or brand sites — we don't sell directly |
| **Creator-Driven Growth Engine** | YouTubers/influencers drive traffic, earn attribution, get dashboards |
| **Ingredient Intelligence Layer** | We own terrain + ingredient knowledge, not product inventory |

## ❌ ZYNAVA IS NOT:

| Misconception | Reality |
|---------------|---------|
| ~~Traditional e-commerce store~~ | We route to affiliates, not checkout |
| ~~Shopify-style inventory holder~~ | Zero inventory (except future ZYNAVA-branded products) |
| ~~Seller of record~~ | Affiliates handle fulfillment, payments, returns |
| ~~Product catalog scraper~~ | We don't store external product data |

## The Business Model

```
┌─────────────────────────────────────────────────────────────────┐
│                        ZYNAVA PLATFORM                          │
│                                                                 │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────────────┐ │
│  │   CREATOR   │───▶│   ADVISOR   │───▶│  AFFILIATE ROUTING  │ │
│  │  (YouTube)  │    │   (AI Quiz) │    │ (iHerb/Amazon/etc)  │ │
│  └─────────────┘    └─────────────┘    └─────────────────────┘ │
│         │                  │                      │             │
│         ▼                  ▼                      ▼             │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────────────┐ │
│  │  CREATOR    │    │ INGREDIENT  │    │   COMMISSION        │ │
│  │  DASHBOARD  │    │ EDUCATION   │    │   REVENUE           │ │
│  └─────────────┘    └─────────────┘    └─────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

**Revenue Sources:**
1. Affiliate commissions (iHerb: 5-10%, Amazon: 1-4%)
2. Future: ZYNAVA-branded products (higher margin)
3. Future: Brand partnerships / featured placement

---

# TABLE OF CONTENTS

## Part 1: Brand & Product Knowledge
- [Brand Overview](#brand-overview)
- [The Animal Symbol System](#the-animal-symbol-system)
- [Terrain Definitions](#terrain-definitions)
- [Ingredient Intelligence](#ingredient-intelligence)

## Part 2: Platform Architecture
- [Core Entities (Data Model)](#core-entities-data-model)
- [Page Types & ISR Strategy](#page-types--isr-strategy)
- [Supplement Advisor Architecture](#supplement-advisor-architecture)

## Part 3: Creator System
- [Creator Funnel Design](#creator-funnel-design)
- [Creator Dashboard](#creator-dashboard)
- [Attribution & Tracking](#attribution--tracking)

## Part 4: Technical Implementation
- [Reusable Assets from SmarterPayouts](#reusable-assets-from-smarterpayouts)
- [AI Search Optimization](#ai-search-optimization)
- [SEO & Crawling Gotchas](#seo--crawling-gotchas)
- [Firebase Architecture](#firebase-architecture)
- [PII Policy & Data Retention](#pii-policy--data-retention)
- [Queries & Required Indexes](#queries--required-indexes)
- [Event Taxonomy](#event-taxonomy-single-source-of-truth)

## Part 5: Risk Mitigation
- [Compliance & Safety](#compliance--safety)
- [Execution Risks & Mitigations](#execution-risks--mitigations)
- [MVP Scope (What to Build First)](#mvp-scope)

## Part 6: Build Roadmap
- [Phase 1: Foundation](#phase-1-foundation)
- [Phase 1 Definition of Done](#phase-1-definition-of-done-engineering-dod)
- [Phase 2: Creator Launch](#phase-2-creator-launch)
- [Phase 3: Scale](#phase-3-scale)

## Appendixes
- [Appendix A: Tech Stack Summary](#appendix-a-tech-stack-summary)
- [Appendix B: Environment Variables](#appendix-b-environment-variables)
- [Appendix C: Testing Strategy](#appendix-c-testing-strategy)
- [Appendix D: Deployment Checklist](#appendix-d-deployment-checklist) *(includes Local Dev Workflow)*
- [Appendix E: Affiliate Setup Guide](#appendix-e-affiliate-setup-guide)
- [Appendix F: Quick Start Commands](#appendix-f-quick-start-commands)

---

# PART 1: BRAND & PRODUCT KNOWLEDGE

---

## Brand Overview

### The Name

**ZYNAVA** (Z-Y-N-A-V-A)

Never spell it any other way.

### Mission Statement

> ZYNAVA exists to help humans perform at their peak across every terrain of life. We use AI-powered guidance and ingredient intelligence to recommend the right supplements from trusted sources — not to sell you our products.

### Brand Values

| Value | Meaning |
|-------|---------|
| **Guidance** | We recommend, we don't push |
| **Transparency** | We explain why, not just what |
| **Trust** | We link to vetted sources only |
| **Creator-First** | We empower the people you trust |

---

## The Animal Symbol System

### Philosophy

Animals dominate their terrain through specific biological advantages. ZYNAVA uses animal symbolism to represent human health systems — making complex wellness concepts memorable and premium.

**These are icons, not mascots. Premium, not childish.**

### Visual Direction

- **Style:** Bold silhouettes, vintage poster aesthetic
- **Treatment:** High-contrast, minimal, confident
- **Avoid:** Cartoons, childish illustrations, busy designs

---

## Terrain Definitions

Terrains are ZYNAVA's core organizational framework. Each terrain represents a human health system.

### Terrain 1: Cardiovascular
*Endurance, Circulation, Power*

| Animal | Symbolism |
|--------|-----------|
| **Eagle** | Circulation, vision, power |
| **Horse** | Performance, stamina |
| **Bison** | Strong heart, endurance |

**Key Ingredients:** CoQ10/Ubiquinol, Nattokinase, Omega-3, Magnesium

---

### Terrain 2: Sleep & Recovery
*Restoration, Deep Calm*

| Animal | Symbolism |
|--------|-----------|
| **Owl** | Night mastery, restoration |
| **Sloth** | Deep rest, conservation |

**Key Ingredients:** Magnesium Glycinate, Ashwagandha, L-Theanine, Melatonin

---

### Terrain 3: Cognition & Focus
*Clarity, Mental Performance*

| Animal | Symbolism |
|--------|-----------|
| **Snow Leopard** | Sharp, quiet power |
| **Fox** | Agility, quick thinking |

**Key Ingredients:** Lion's Mane, Alpha-GPC, Bacopa, Omega-3 DHA

---

### Terrain 4: Energy & Vitality
*Mitochondrial Power, Resilience*

| Animal | Symbolism |
|--------|-----------|
| **Tiger** | Explosive energy |
| **Cheetah** | Speed, mitochondrial output |

**Key Ingredients:** NAD+/NMN, B-Vitamins, Iron, CoQ10

---

### Terrain 5: Gut & Digestion
*Balance, Microbiome Health*

| Animal | Symbolism |
|--------|-----------|
| **Panda** | Calm digestion |
| **Koala** | Gentle herbivore wisdom |

**Key Ingredients:** Probiotics, L-Glutamine, Digestive Enzymes, Fiber

---

### Terrain 6: Bone, Joint & Mobility
*Foundation, Flexibility, Longevity*

| Animal | Symbolism |
|--------|-----------|
| **Elephant** | Structural strength |
| **Gazelle** | Flexibility, agility |
| **Tortoise** | Longevity |

**Key Ingredients:** Vitamin D3, K2, Calcium, Collagen, Glucosamine

---

### Terrain 7: Antioxidant & Longevity
*Cellular Protection, Aging*

| Animal | Symbolism |
|--------|-----------|
| **Cougar** | Clean strength |
| **Elk** | Vitality, endurance |

**Key Ingredients:** Glutathione, Vitamin C, Resveratrol, NAD+

---

## Ingredient Intelligence

ZYNAVA's core value is **ingredient-level knowledge**, not product catalogs.

### What We Own (Stored in Firestore)

```typescript
interface Ingredient {
  id: string;
  slug: string;                    // "magnesium-glycinate"
  name: string;                    // "Magnesium Glycinate"
  alternateNames: string[];        // ["Magnesium Bisglycinate"]
  
  // Terrain associations
  primaryTerrain: TerrainId;       // "sleep"
  secondaryTerrains: TerrainId[];  // ["cardiovascular", "stress"]
  
  // Benefits (quotable by AI)
  primaryBenefit: string;          // "Supports sleep quality and relaxation"
  benefits: string[];              // Array of benefit statements
  
  // Dosage guidance
  typicalDose: string;             // "200-400mg"
  timing: string;                  // "Before bed"
  
  // Research (for AI citation)
  researchSummary: string;
  pubmedIds: string[];             // ["28395787", "29882776"]
  
  // Safety
  contraindications: string[];
  interactions: string[];
  
  // Metadata
  animalIcon: AnimalId;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

### What We DO NOT Own

- Product prices (affiliate handles)
- Product inventory/stock (affiliate handles)
- Product images (link to affiliate)
- Product reviews (affiliate handles)

---

# PART 2: PLATFORM ARCHITECTURE

---

## Core Entities (Data Model)

### Entity Ownership Matrix

| Entity | Stored in Firestore? | Generated Dynamically? | Never Stored? |
|--------|---------------------|------------------------|---------------|
| Terrains | ✅ Yes | | |
| Ingredients | ✅ Yes | | |
| Advisor Stacks | ✅ Yes (logic only) | | |
| Affiliate Providers | ✅ Yes (config) | | |
| Affiliate Product Refs | | ✅ At runtime | |
| Creator Accounts | ✅ Yes | | |
| Referral Codes | ✅ Yes | | |
| Outbound Events | ✅ Yes (analytics) | | |
| Product Prices | | | ❌ Never |
| Product Inventory | | | ❌ Never |

---

### Entity: Terrains

```typescript
interface Terrain {
  id: string;
  slug: string;                    // "cardiovascular"
  name: string;                    // "Cardiovascular Health"
  tagline: string;                 // "Endurance, Circulation, Power"
  description: string;
  
  // Animal associations
  primaryAnimal: AnimalId;
  secondaryAnimals: AnimalId[];
  
  // Ingredient associations
  keyIngredients: IngredientId[];
  
  // SEO
  metaTitle: string;
  metaDescription: string;
  
  // Visual
  heroImage: string;
  iconUrl: string;
  
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

---

### Entity: Advisor Stacks

Stacks are **ingredient-based logic**, not product bundles.

```typescript
interface AdvisorStack {
  id: string;
  name: string;                    // "Sleep Optimization Stack"
  
  // Logic-based, not SKU-based
  targetTerrains: TerrainId[];
  requiredIngredients: IngredientId[];
  optionalIngredients: IngredientId[];
  
  // Conditions for recommendation
  conditions: {
    ageRange?: [number, number];
    goals?: GoalId[];
    concerns?: ConcernId[];
  };
  
  // Budget tiers
  budgetTiers: {
    essential: IngredientId[];     // Minimum viable stack
    optimal: IngredientId[];       // Recommended
    premium: IngredientId[];       // Maximum support
  };
  
  // Display
  description: string;
  animalIcon: AnimalId;
  
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

---

### Entity: Affiliate Providers

```typescript
interface AffiliateProvider {
  id: string;
  name: string;                    // "iHerb"
  slug: string;                    // "iherb"
  
  // Link configuration
  baseUrl: string;                 // "https://www.iherb.com"
  affiliateParam: string;          // "rcode" or "tag"
  affiliateId: string;             // Your affiliate ID
  
  // Commission info (for display)
  commissionRange: string;         // "5-10%"
  
  // Priority (for multi-affiliate routing)
  priority: number;                // 1 = highest
  
  // Status
  isActive: boolean;
  
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

---

### Entity: Affiliate Product References (Lightweight)

**These are NOT full product records. They are lightweight references resolved at runtime.**

```typescript
interface AffiliateProductRef {
  // We store minimal data
  ingredientId: string;            // Links to our ingredient
  providerId: string;              // "iherb" | "amazon"
  productPath: string;             // "/products/12345" (relative URL)
  
  // We do NOT store:
  // - price (changes constantly)
  // - stock status (changes constantly)
  // - images (use affiliate's)
  // - reviews (use affiliate's)
}
```

**Firestore Storage Plan:**

```
affiliateProductRefs/
  └── {ingredientId}_{providerId}/    // e.g., "magnesium-glycinate_iherb"
      ├── ingredientId: string
      ├── providerId: string
      ├── productPath: string         // "/pr/product-name/12345"
      ├── isActive: boolean
      ├── createdAt: timestamp
      └── updatedAt: timestamp
```

**Why this structure:**
- Composite key = unique per ingredient+provider combination
- No nested subcollections = simple queries
- `isActive` flag = can disable without deleting
- Lightweight = not a catalog, just mappings

---

### Entity: Creator Accounts

```typescript
interface CreatorAccount {
  id: string;
  
  // Profile
  displayName: string;
  slug: string;                    // URL-safe: "dr-mike"
  bio: string;
  avatarUrl: string;
  
  // Platforms
  platforms: {
    youtube?: string;              // Channel URL
    instagram?: string;
    tiktok?: string;
  };
  
  // Attribution
  referralCode: string;            // "DRMIKE" - human-readable
  referralToken: string;           // UUID for tracking
  
  // Customization
  customTerrains?: TerrainId[];    // Their focus areas
  customMessage?: string;          // Welcome message
  
  // Status
  isVerified: boolean;
  isActive: boolean;
  
  // Analytics (aggregated, no PII)
  stats: {
    totalVisitors: number;
    advisorCompletions: number;
    outboundClicks: number;
    lastActivityAt: Timestamp;
  };
  
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

---

### Entity: Referral Tracking

```typescript
interface ReferralSession {
  id: string;
  
  // Attribution
  creatorId: string;
  referralCode: string;
  
  // Session
  sessionId: string;               // Anonymous session ID
  entryPage: string;               // Where they landed
  
  // Journey (no PII)
  advisorCompleted: boolean;
  advisorResults?: {
    terrains: TerrainId[];
    ingredients: IngredientId[];
  };
  
  // Outcomes
  outboundClicks: {
    providerId: string;
    ingredientId: string;
    clickedAt: Timestamp;
  }[];
  
  createdAt: Timestamp;
  expiresAt: Timestamp;            // 30-day attribution window
}
```

---

### Entity: Outbound Events

```typescript
interface OutboundEvent {
  id: string;
  
  // What happened
  eventType: EventType;
  
  // Context
  sessionId: string;
  creatorId?: string;              // If attributed
  
  // Details
  providerId?: string;             // For affiliate clicks
  ingredientId?: string;
  terrainId?: string;
  
  // Metadata
  userAgent: string;
  timestamp: Timestamp;
}

// Canonical Event Types
type EventType = 
  | 'page_view'
  | 'advisor_step_completed'
  | 'advisor_completed'
  | 'affiliate_click'
  | 'attribution_set';
```

### Event Taxonomy (Single Source of Truth)

**All events must use these canonical types:**

| Event Type | When Fired | Required Fields |
|------------|------------|-----------------|
| `page_view` | Any page load | `sessionId`, `pageUrl`, `timestamp` |
| `advisor_step_completed` | Each advisor step | `sessionId`, `stepNumber`, `stepName`, `timestamp` |
| `advisor_completed` | Final results shown | `sessionId`, `terrainId`, `ingredientIds[]`, `timestamp` |
| `affiliate_click` | User clicks affiliate link | `sessionId`, `providerId`, `ingredientId`, `creatorId?`, `timestamp` |
| `attribution_set` | Creator attribution stored | `sessionId`, `creatorId`, `timestamp` |

**Event Payload Examples:**

```typescript
// page_view
{
  eventType: 'page_view',
  sessionId: 'abc123',
  pageUrl: '/terrains/sleep',
  referrer: 'https://youtube.com/...',
  timestamp: Timestamp.now(),
}

// advisor_step_completed
{
  eventType: 'advisor_step_completed',
  sessionId: 'abc123',
  stepNumber: 2,
  stepName: 'age_range',
  value: '36-50',
  timestamp: Timestamp.now(),
}

// advisor_completed
{
  eventType: 'advisor_completed',
  sessionId: 'abc123',
  terrainId: 'sleep',
  ingredientIds: ['magnesium-glycinate', 'ashwagandha', 'l-theanine'],
  budgetTier: 'essential',
  creatorId: 'drmike', // if attributed
  timestamp: Timestamp.now(),
}

// affiliate_click
{
  eventType: 'affiliate_click',
  sessionId: 'abc123',
  providerId: 'iherb',
  ingredientId: 'magnesium-glycinate',
  productPath: '/pr/product-name/12345',
  creatorId: 'drmike', // if attributed
  timestamp: Timestamp.now(),
}

// attribution_set
{
  eventType: 'attribution_set',
  sessionId: 'abc123',
  creatorId: 'drmike',
  source: 'landing_page', // or 'url_param'
  timestamp: Timestamp.now(),
}
```

**Validation (in API route):**

```typescript
// src/lib/events/schema.ts
import { z } from 'zod';

const EventTypeSchema = z.enum([
  'page_view',
  'advisor_step_completed', 
  'advisor_completed',
  'affiliate_click',
  'attribution_set',
]);

const BaseEventSchema = z.object({
  eventType: EventTypeSchema,
  sessionId: z.string().min(1),
  timestampMs: z.number().int().positive(), // Unix timestamp in milliseconds
  creatorId: z.string().optional(),
});

// Use this in /api/events route to validate incoming events
```

**Timestamp Convention:**
- **API boundary:** `timestampMs` (Unix milliseconds as number)
- **Firestore storage:** `timestamp` (Firestore `Timestamp`)
- **Conversion in API route:**

```typescript
// app/api/events/route.ts
import { Timestamp } from 'firebase-admin/firestore';

const validated = BaseEventSchema.parse(body);

await adminDb.collection('outboundEvents').add({
  ...validated,
  timestamp: Timestamp.fromMillis(validated.timestampMs), // Convert
  timestampMs: undefined, // Don't store raw ms
});
```

---

## Page Types & ISR Strategy

### Page Architecture

| Page Type | Route | Rendering | Revalidation | Why Safe |
|-----------|-------|-----------|--------------|----------|
| Home | `/` | Static | ISR 1hr | Content rarely changes |
| Terrain Pages | `/terrains/[slug]` | ISR | 1hr | Ingredient content stable |
| Ingredient Pages | `/ingredients/[slug]` | ISR | 1hr | Research-based, stable |
| Advisor Flow | `/advisor` | Static + API | N/A | UI static, calls `/api/advisor` for logic |
| Advisor Results | `/advisor/results` | Client-side | N/A | Generated per user |
| Creator Landing | `/c/[slug]` | ISR | 1hr | Creator profile stable |
| Creator Dashboard | `/dashboard` | Dynamic | N/A | Auth required, real-time |
| FAQ | `/faq` | Static | ISR 24hr | Rarely changes |
| About | `/about` | Static | ISR 24hr | Rarely changes |

### What Pages DO NOT Exist

| Non-Existent Page | Why |
|-------------------|-----|
| `/products/[sku]` | We don't own products — we route to affiliates |
| `/cart` | No cart — we're not a store |
| `/checkout` | No checkout — affiliates handle payment |
| `/orders` | No orders — affiliates handle fulfillment |

### ISR Configuration

```typescript
// Terrain pages
// app/terrains/[slug]/page.tsx
export const revalidate = 3600; // 1 hour

// Ingredient pages
// app/ingredients/[slug]/page.tsx
export const revalidate = 3600; // 1 hour

// Creator landing pages
// app/c/[slug]/page.tsx
export const revalidate = 3600; // 1 hour

// Static marketing pages
// app/about/page.tsx
export const revalidate = 86400; // 24 hours
```

### Sitemap Source of Truth

**The sitemap must enumerate all ISR pages.** Define the source of slugs:

| Page Type | Source of Slugs | Phase 1 | Scale |
|-----------|-----------------|---------|-------|
| Terrains | `terrains.json` in repo | ✅ | Migrate to Firestore |
| Ingredients | `ingredients.json` in repo | ✅ | Migrate to Firestore |
| Creators | Firestore query | ✅ | Firestore |

**Phase 1 Implementation (JSON in repo):**

```typescript
// data/terrains.json
[
  { "slug": "sleep", "name": "Sleep & Recovery" },
  { "slug": "energy", "name": "Energy & Vitality" },
  { "slug": "cognition", "name": "Cognition & Focus" }
]

// data/ingredients.json
[
  { "slug": "magnesium-glycinate", "name": "Magnesium Glycinate" },
  { "slug": "ashwagandha", "name": "Ashwagandha" },
  // ... 10-15 for MVP
]
```

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next';
import terrains from '@/data/terrains.json';
import ingredients from '@/data/ingredients.json';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://zynava.com';
  
  // Static pages
  const staticPages = ['', '/about', '/faq', '/advisor'].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1.0 : 0.8,
  }));
  
  // Terrain pages (from JSON)
  const terrainPages = terrains.map(terrain => ({
    url: `${baseUrl}/terrains/${terrain.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));
  
  // Ingredient pages (from JSON)
  const ingredientPages = ingredients.map(ingredient => ({
    url: `${baseUrl}/ingredients/${ingredient.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));
  
  return [...staticPages, ...terrainPages, ...ingredientPages];
}
```

**Phase 2+ (Firestore):** Replace JSON imports with Firestore reads:
```typescript
const terrainSlugs = await getTerrainSlugs(); // Firestore query, cached
```

### Creator Pages in Sitemap

**Rule:** Creator landing pages (`/c/[slug]`) are included in the sitemap **only if**:
- `isActive === true`
- `isVerified === true`

This prevents indexing draft, placeholder, or unverified creators.

```typescript
// In sitemap.ts (Phase 2+ with Firestore)
const creatorPages = await getVerifiedCreators(); // Firestore: where isActive && isVerified

const creatorSitemapEntries = creatorPages.map(creator => ({
  url: `${baseUrl}/c/${creator.slug}`,
  lastModified: new Date(),
  changeFrequency: 'weekly' as const,
  priority: 0.7,
}));
```

---

## Supplement Advisor Architecture

### ⚠️ Advisor Data Source (Phase 1 Decision)

**Choose ONE approach:**

| Option | Description | Pros | Cons |
|--------|-------------|------|------|
| **A (Recommended)** | Advisor UI is client-only, calls `/api/advisor` which reads Firestore (or cached JSON) and returns results | Scalable, easy to update | Requires API |
| **B (Faster MVP)** | Bundle small JSON dataset (3 terrains, 10-15 ingredients) in codebase, log events server-side | No API needed | Requires redeploy to update |

**Phase 1 Recommendation:** Option B for speed. Migrate to Option A when content exceeds 20 ingredients.

> **⚠️ Terminology Clarification:** In Phase 1, the Advisor uses **deterministic rules** based on ingredient and terrain logic — no LLM/AI calls. OpenAI is introduced in Phase 2 for explanation and conversational refinement, **not** for core recommendation logic. When marketing says "AI Advisor," it refers to the intelligent system, not necessarily an LLM.

### 📊 Phase 1 Data Decision (Single Source of Truth)

| Data Type | Phase 1 Source | Phase 2+ Source |
|-----------|----------------|-----------------|
| **Terrains** | `data/terrains.json` in repo | Firestore `terrains/` collection |
| **Ingredients** | `data/ingredients.json` in repo | Firestore `ingredients/` collection |
| **Advisor logic** | Hardcoded rules in `advisorService.ts` | Same (or Firestore-driven) |
| **Affiliate refs** | `data/affiliateRefs.json` in repo | Firestore `affiliateProductRefs/` |
| **Analytics/Events** | Firestore `outboundEvents/` | Firestore `outboundEvents/` |
| **Creator data** | Firestore `creators/` | Firestore `creators/` |
| **Sitemap slugs** | Read from JSON files | Read from Firestore |

**Key rule:** Content (terrains, ingredients) lives in JSON files for Phase 1. Analytics always goes to Firestore.

This prevents the team from setting up both unnecessarily.

### Advisor Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                     SUPPLEMENT ADVISOR                          │
│              "Find Your Terrain. Build Your Stack."             │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  STEP 1: PRIMARY GOALS (Multi-select, max 3)                    │
│                                                                 │
│  □ Better sleep            □ More energy                        │
│  □ Mental clarity          □ Heart health                       │
│  □ Gut health              □ Joint mobility                     │
│  □ Stress management       □ Healthy aging                      │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  STEP 2: LIFESTYLE (Quick profile)                              │
│                                                                 │
│  Age range:    ○ 25-35  ○ 36-50  ○ 51-65  ○ 65+                │
│  Activity:     ○ Low    ○ Moderate  ○ High                      │
│  Diet:         ○ Omnivore  ○ Vegetarian  ○ Vegan               │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  STEP 3: CONCERNS (Optional)                                    │
│                                                                 │
│  □ Sleep quality issues    □ Low energy                         │
│  □ Digestive sensitivity   □ Joint discomfort                   │
│  □ Stress/anxiety          □ None of the above                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  STEP 4: BUDGET PREFERENCE                                      │
│                                                                 │
│  ○ Essential (2-3 key supplements)                              │
│  ○ Optimal (4-5 recommended)                                    │
│  ○ Premium (comprehensive stack)                                │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                     PROCESSING                                   │
│                                                                 │
│  1. Map goals → Terrains                                        │
│  2. Map terrains → Ingredients                                  │
│  3. Apply lifestyle modifiers                                   │
│  4. Filter by budget tier                                       │
│  5. Resolve affiliate products (runtime)                        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                     RESULTS PAGE                                 │
│                                                                 │
│  🦉 Your Primary Terrain: SLEEP & RECOVERY                      │
│                                                                 │
│  "Like the Owl mastering the night, your stack is designed      │
│   for deep restoration and calm focus."                         │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  YOUR RECOMMENDED INGREDIENTS:                                   │
│                                                                 │
│  1. Magnesium Glycinate                                         │
│     "Supports relaxation and sleep quality"                     │
│     [View on iHerb →]  [View on Amazon →]                       │
│                                                                 │
│  2. Ashwagandha (KSM-66)                                        │
│     "Helps manage stress response"                              │
│     [View on iHerb →]  [View on Amazon →]                       │
│                                                                 │
│  3. L-Theanine                                                  │
│     "Promotes calm without drowsiness"                          │
│     [View on iHerb →]  [View on Amazon →]                       │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  ⏰ SUGGESTED ROUTINE:                                          │
│                                                                 │
│  Evening (1-2 hours before bed):                                │
│  • Magnesium Glycinate (300mg)                                  │
│  • Ashwagandha (300mg)                                          │
│  • L-Theanine (200mg)                                           │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  * These statements have not been evaluated by the FDA.         │
│    Consult your healthcare provider before starting any         │
│    supplement regimen.                                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Advisor Logic (Pseudo-code)

```typescript
// src/services/advisorService.ts

interface AdvisorInput {
  goals: GoalId[];
  ageRange: AgeRange;
  activityLevel: ActivityLevel;
  diet: DietType;
  concerns: ConcernId[];
  budgetTier: 'essential' | 'optimal' | 'premium';
}

interface AdvisorOutput {
  primaryTerrain: Terrain;
  secondaryTerrains: Terrain[];
  recommendedIngredients: IngredientRecommendation[];
  routine: RoutineStep[];
  disclaimer: string;
}

function generateRecommendations(input: AdvisorInput): AdvisorOutput {
  // 1. Map goals to terrains
  const terrains = mapGoalsToTerrains(input.goals);
  
  // 2. Get ingredients for terrains
  let ingredients = getIngredientsForTerrains(terrains);
  
  // 3. Apply lifestyle modifiers
  ingredients = applyAgeModifiers(ingredients, input.ageRange);
  ingredients = applyDietFilter(ingredients, input.diet);
  
  // 4. Apply concerns boosting
  ingredients = boostForConcerns(ingredients, input.concerns);
  
  // 5. Filter by budget tier
  ingredients = filterByBudgetTier(ingredients, input.budgetTier);
  
  // 6. Sort by relevance
  ingredients = sortByRelevanceScore(ingredients);
  
  // 7. Generate routine
  const routine = generateRoutine(ingredients);
  
  return {
    primaryTerrain: terrains[0],
    secondaryTerrains: terrains.slice(1),
    recommendedIngredients: ingredients,
    routine,
    disclaimer: HEALTH_DISCLAIMER,
  };
}
```

### Affiliate Product Resolution (Runtime)

Products are resolved **at display time**, not stored:

```typescript
// src/services/affiliateService.ts

interface AffiliateLink {
  providerId: string;
  providerName: string;
  url: string;
  trackingParams: string;
}

function resolveAffiliateLinks(
  ingredientId: string,
  creatorId?: string
): AffiliateLink[] {
  // Get active providers
  const providers = getActiveProviders();
  
  // Get product references for this ingredient
  const refs = getProductRefs(ingredientId);
  
  // Build tracked links
  return providers.map(provider => {
    const ref = refs.find(r => r.providerId === provider.id);
    if (!ref) return null;
    
    const trackingParams = buildTrackingParams({
      affiliateId: provider.affiliateId,
      creatorCode: creatorId,
      ingredientId,
    });
    
    return {
      providerId: provider.id,
      providerName: provider.name,
      url: `${provider.baseUrl}${ref.productPath}?${trackingParams}`,
      trackingParams,
    };
  }).filter(Boolean);
}
```

### ⚠️ Safety Fallback: Missing Product References

**Rule:** If no affiliate product reference exists for an ingredient:
- The ingredient is **still shown** in recommendations
- Affiliate CTAs are **hidden**
- Display: *"Check availability at trusted retailers"*

```typescript
// In results display logic
function renderIngredientCTA(ingredient: Ingredient, links: AffiliateLink[]) {
  if (links.length === 0) {
    return (
      <p style={{ color: '#6b7280', fontStyle: 'italic' }}>
        Check availability at trusted retailers like iHerb or Amazon.
      </p>
    );
  }
  
  return links.map(link => (
    <a key={link.providerId} href={link.url}>
      View on {link.providerName}
    </a>
  ));
}
```

This prevents broken UX when affiliate refs lag content additions.

---

# PART 3: CREATOR SYSTEM

---

## Creator Funnel Design

### The Complete Flow

```
┌──────────────────────────────────────────────────────────────────┐
│  STEP 1: CREATOR PROMOTION                                       │
│                                                                  │
│  YouTube Video: "My Supplement Stack for Better Sleep"           │
│                                                                  │
│  "I've partnered with ZYNAVA — they have an AI advisor that     │
│   can help you find the right supplements for YOUR goals.        │
│   Link in description: zynava.com/c/drmike"                      │
└──────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────┐
│  STEP 2: CREATOR LANDING PAGE                                    │
│                                                                  │
│  Route: /c/drmike                                                │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  🎬 Dr. Mike's Wellness Corner                              │ │
│  │                                                             │ │
│  │  "I created this page to help my community find the        │ │
│  │   right supplements. Take the quiz below — it's free       │ │
│  │   and takes 2 minutes."                                    │ │
│  │                                                             │ │
│  │            [ Start My Supplement Quiz → ]                   │ │
│  │                                                             │ │
│  │  My Focus Areas: Sleep • Energy • Cognition                │ │
│  └────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────┐
│  STEP 3: ADVISOR FLOW (with attribution persisted)               │
│                                                                  │
│  URL: /advisor?ref=drmike                                        │
│                                                                  │
│  - Creator code stored in session/cookie                         │
│  - Persists through entire flow                                  │
│  - Survives page refresh                                         │
└──────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────┐
│  STEP 4: RESULTS WITH TRACKED LINKS                              │
│                                                                  │
│  Each "View on iHerb" link includes:                             │
│  - Affiliate ID (ZYNAVA's)                                       │
│  - Creator sub-tracking (drmike)                                 │
│  - Session ID                                                    │
│  - Ingredient ID                                                 │
└──────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────┐
│  STEP 5: OUTBOUND CLICK LOGGED                                   │
│                                                                  │
│  Event stored in Firestore:                                      │
│  {                                                               │
│    eventType: 'affiliate_click',                                 │
│    creatorId: 'drmike',                                          │
│    providerId: 'iherb',                                          │
│    ingredientId: 'magnesium-glycinate',                          │
│    sessionId: 'abc123',                                          │
│    timestamp: ...                                                │
│  }                                                               │
└──────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────┐
│  STEP 6: CREATOR DASHBOARD UPDATES                               │
│                                                                  │
│  Dr. Mike logs in and sees:                                      │
│  - 1,247 visitors this month                                     │
│  - 892 advisor completions (71% rate)                            │
│  - 634 outbound clicks (71% of completions)                      │
│  - Top terrain: Sleep (43%)                                      │
│  - Estimated commission: $xxx                                    │
└──────────────────────────────────────────────────────────────────┘
```

### Attribution Persistence

```typescript
// src/lib/attribution.ts

const ATTRIBUTION_KEY = 'zynava_ref';
const SESSION_KEY = 'zynava_sid';
const ATTRIBUTION_EXPIRY = 30 * 24 * 60 * 60 * 1000; // 30 days

// Generate unique session ID
function generateSessionId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// Get or create session ID (server-first approach)
export function getSessionId(): string {
  let sessionId = getCookie(SESSION_KEY);
  if (!sessionId) {
    sessionId = generateSessionId();
    setCookie(SESSION_KEY, sessionId, 30);
  }
  return sessionId;
}

export async function setAttribution(creatorSlug: string) {
  const sessionId = getSessionId();
  
  const data = {
    creator: creatorSlug,
    sessionId,
    timestamp: Date.now(),
    expiresAt: Date.now() + ATTRIBUTION_EXPIRY,
  };
  
  // Store in localStorage (persists across sessions)
  localStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(data));
  
  // Also set cookie (for server-side access)
  setCookie(ATTRIBUTION_KEY, creatorSlug, 30);
  
  // ✅ SERVER-SIDE PERSISTENCE (solves Safari purge issue)
  // Store in Firestore via API for reliable attribution
  try {
    await fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventType: 'attribution_set',  // Matches canonical taxonomy
        sessionId,
        creatorId: creatorSlug,        // Consistent field name
        timestampMs: Date.now(),       // Matches API schema
        source: 'landing_page',
      }),
    });
  } catch (e) {
    // Silent fail - localStorage is backup
  }
}

function setCookie(name: string, value: string, days: number) {
  document.cookie = `${name}=${value}; max-age=${days * 24 * 60 * 60}; path=/; SameSite=Lax`;
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}

export function getAttribution(): string | null {
  const stored = localStorage.getItem(ATTRIBUTION_KEY);
  if (!stored) return null;
  
  const data = JSON.parse(stored);
  if (Date.now() > data.expiresAt) {
    localStorage.removeItem(ATTRIBUTION_KEY);
    return null;
  }
  
  return data.creator;
}
```

### ✅ Attribution Edge Case (Solved in Phase 1)

**Problem:** Safari/iOS can purge localStorage aggressively. Cookies may be stripped in some contexts.

**Solution (implemented above):** The `setAttribution()` function now:
1. Generates a server-issued `sessionId` immediately
2. Stores in localStorage + cookie (client backup)
3. Persists to Firestore via `/api/events` (server source of truth)

This ensures attribution survives even aggressive browser purging.

---

## Creator Dashboard

### Routes

| Route | Purpose | Auth Required | Phase |
|-------|---------|---------------|-------|
| `/dashboard` | Main dashboard | ✅ Yes | Phase 1 = "Coming Soon" stub |
| `/dashboard/analytics` | Detailed analytics | ✅ Yes | Phase 2 |
| `/dashboard/links` | Custom links | ✅ Yes | Phase 2 |
| `/dashboard/settings` | Profile settings | ✅ Yes | Phase 2 |

### ⚠️ Phase 1 Dashboard Strategy

**Do NOT build full dashboard in Phase 1.** Instead:

```typescript
// app/dashboard/page.tsx (Phase 1 stub)

export default function DashboardPage() {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1>Creator Dashboard</h1>
      <p>Coming soon — request early access below.</p>
      <a href="mailto:creators@zynava.com">Request Access</a>
    </div>
  );
}
```

**Phase 1 analytics delivery:**
- Manual Firestore queries
- Weekly email reports to first creator
- Spreadsheet tracking

**Build real dashboard only after:**
- First creator is actively sending traffic
- Manual reports become unsustainable

### Dashboard Data Model

```typescript
interface CreatorDashboardData {
  // Summary stats (aggregated, no PII)
  summary: {
    totalVisitors: number;
    advisorCompletions: number;
    completionRate: number;
    outboundClicks: number;
    clickThroughRate: number;
  };
  
  // Time series (last 30 days)
  dailyStats: {
    date: string;
    visitors: number;
    completions: number;
    clicks: number;
  }[];
  
  // Breakdowns
  topTerrains: {
    terrainId: string;
    terrainName: string;
    percentage: number;
  }[];
  
  topIngredients: {
    ingredientId: string;
    ingredientName: string;
    clicks: number;
  }[];
  
  // Affiliate breakdown
  clicksByProvider: {
    providerId: string;
    providerName: string;
    clicks: number;
    percentage: number;
  }[];
}
```

### Security Considerations

| Requirement | Implementation |
|-------------|----------------|
| No access to individual user data | Only aggregated stats |
| No PII exposure | Session IDs anonymized |
| Auth required | Firebase Auth |
| Rate limited | API rate limits |
| Audit logged | Dashboard access logged |

### Dashboard UI (Simplified)

```
┌─────────────────────────────────────────────────────────────────┐
│  ZYNAVA CREATOR DASHBOARD                    [Dr. Mike ▼]       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  📊 THIS MONTH                                                  │
│  ┌─────────────┬─────────────┬─────────────┬─────────────┐     │
│  │  VISITORS   │ COMPLETIONS │   CLICKS    │    CTR      │     │
│  │   1,247     │    892      │    634      │   71%       │     │
│  │   +12%      │   +18%      │   +15%      │   +3%       │     │
│  └─────────────┴─────────────┴─────────────┴─────────────┘     │
│                                                                 │
│  📈 DAILY TREND (Chart)                                         │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │   ▄▄  ▄▄▄ ▄▄▄▄ ▄▄▄ ▄▄▄▄▄ ▄▄▄▄ ▄▄▄ ▄▄▄▄▄▄ ▄▄▄          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  🎯 TOP TERRAINS                 🔗 CLICKS BY PARTNER          │
│  ┌───────────────────────┐      ┌───────────────────────┐      │
│  │ Sleep        43% ████ │      │ iHerb     72% ███████ │      │
│  │ Energy       28% ███  │      │ Amazon    28% ███     │      │
│  │ Cognition    18% ██   │      └───────────────────────┘      │
│  │ Other        11% █    │                                      │
│  └───────────────────────┘                                      │
│                                                                 │
│  🔗 YOUR LINKS                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Main Landing:    zynava.com/c/drmike           [Copy]   │   │
│  │ Direct Advisor:  zynava.com/advisor?ref=drmike [Copy]   │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

# PART 4: TECHNICAL IMPLEMENTATION

---

## Reference Assets from SmarterPayouts

> **REMINDER:** These are PATTERNS to copy and adapt, NOT imports.
> Create new files in the ZYNAVA repository.

### Pattern: Firebase Configuration

| Reference (SmarterPayouts) | Create (ZYNAVA) | Notes |
|---------------------------|-----------------|-------|
| `smarterpayouts/app/utils/firebase.ts` | `zynava/src/lib/firebase/client.ts` | Update config for ZYNAVA Firebase project |
| `smarterpayouts/lib/firebase-admin.ts` | `zynava/lib/firebase-admin.ts` | New service account, new project ID |

### Pattern: SEO Infrastructure

| Reference (SmarterPayouts) | Create (ZYNAVA) | Notes |
|---------------------------|-----------------|-------|
| `smarterpayouts/lib/seo/metadata.ts` | `zynava/lib/seo/metadata.ts` | Update site name, URLs, defaults |
| `smarterpayouts/src/components/SEO/StructuredData.tsx` | `zynava/src/components/SEO/StructuredData.tsx` | Copy as-is (generic) |
| `smarterpayouts/src/lib/structured-data/helpers/` | `zynava/src/lib/structured-data/helpers/` | Copy as-is (generic utilities) |
| `smarterpayouts/app/robots.ts` | `zynava/app/robots.ts` | Update domain, add `/dashboard` to disallow |
| `smarterpayouts/app/sitemap.ts` | `zynava/app/sitemap.ts` | Rewrite for terrain/ingredient routes |

### Pattern: Analytics & Compliance

| Reference (SmarterPayouts) | Create (ZYNAVA) | Notes |
|---------------------------|-----------------|-------|
| `smarterpayouts/src/components/Analytics/GoogleAnalytics.tsx` | `zynava/src/components/Analytics/GoogleAnalytics.tsx` | New GA4 measurement ID |
| `smarterpayouts/src/components/Analytics/GoogleTagManager.tsx` | `zynava/src/components/Analytics/GoogleTagManager.tsx` | New GTM container ID |
| `smarterpayouts/src/components/CookieConsent/` | `zynava/src/components/CookieConsent/` | Update branding text |

### Pattern: Advisor UI (Adapt from Chat)

| Reference (SmarterPayouts) | Create (ZYNAVA) | Notes |
|---------------------------|-----------------|-------|
| `smarterpayouts/src/components/chat/ChatInterface.tsx` | `zynava/src/components/advisor/AdvisorInterface.tsx` | Adapt for quiz flow |
| `smarterpayouts/src/components/chat/ChatBubble.tsx` | `zynava/src/components/advisor/AdvisorBubble.tsx` | Simplify for Q&A |
| `smarterpayouts/src/components/chat/WelcomeScreen.tsx` | `zynava/src/components/advisor/AdvisorWelcome.tsx` | New copy, terrain intro |
| `smarterpayouts/src/components/chat/SmartInputBar/` | `zynava/src/components/advisor/QuizInput/` | Adapt for quiz options |

### Pattern: Educational Pages

| Reference (SmarterPayouts) | Create (ZYNAVA) | Notes |
|---------------------------|-----------------|-------|
| `smarterpayouts/src/components/Pages/StructuredSettlementInfoHub/` | `zynava/src/components/pages/Ingredients/` | Ingredient education pages |
| `smarterpayouts/src/components/Pages/Faq/` | `zynava/src/components/pages/FAQ/` | Supplement-specific FAQs |
| `smarterpayouts/app/about/page.tsx` | `zynava/app/about/page.tsx` | ZYNAVA story |

### Pattern: Dashboard

| Reference (SmarterPayouts) | Create (ZYNAVA) | Notes |
|---------------------------|-----------------|-------|
| `smarterpayouts/app/admin/specialists/page.tsx` | `zynava/app/dashboard/page.tsx` | Creator dashboard |
| `smarterpayouts/src/components/Pages/PerformanceDashboard/` | `zynava/src/components/pages/CreatorDashboard/` | Analytics patterns |

### Pattern: Layout & Navigation

| Reference (SmarterPayouts) | Create (ZYNAVA) | Notes |
|---------------------------|-----------------|-------|
| `smarterpayouts/app/layout.tsx` | `zynava/app/layout.tsx` | ZYNAVA branding, nav, footer |
| `smarterpayouts/app/components/Footer.tsx` | `zynava/app/components/Footer.tsx` | ZYNAVA links, branding |
| `smarterpayouts/src/components/Navigation/` | `zynava/src/components/Navigation/` | Simplified for ZYNAVA |
| `smarterpayouts/app/components/ErrorBoundary.tsx` | `zynava/app/components/ErrorBoundary.tsx` | Copy as-is (generic) |

### New Files (No Reference — Build Fresh)

These are ZYNAVA-specific and have no equivalent in SmarterPayouts:

| Create (ZYNAVA) | Purpose |
|-----------------|---------|
| `zynava/app/terrains/[slug]/page.tsx` | Terrain education pages |
| `zynava/app/ingredients/[slug]/page.tsx` | Ingredient detail pages |
| `zynava/app/advisor/page.tsx` | Advisor quiz flow |
| `zynava/app/advisor/results/page.tsx` | Recommendation results |
| `zynava/app/c/[slug]/page.tsx` | Creator landing pages |
| `zynava/app/dashboard/page.tsx` | Creator dashboard |
| `zynava/src/services/advisorService.ts` | Recommendation logic |
| `zynava/src/services/affiliateService.ts` | Affiliate link builder |
| `zynava/src/lib/attribution.ts` | Creator tracking |
| `zynava/src/lib/compliance/guardrails.ts` | AI response safety |
| `zynava/src/lib/compliance/disclaimers.ts` | FDA/FTC text constants |
| `zynava/public/llms.txt` | AI crawler summary |

---

## ZYNAVA Project Structure (New Repository)

This is the folder structure to create in the clean ZYNAVA repository:

```
zynava/
├── _reference/                       # ⚠️ TEMPORARY: Drop SmarterPayouts folders here for Cursor to read
│   └── (delete after use)            #    Never import from here. Never commit to git.
│
├── app/                              # Next.js App Router
│   ├── layout.tsx                    # Root layout (nav, footer)
│   ├── page.tsx                      # Homepage
│   ├── globals.css                   # Global styles (minimal)
│   ├── sitemap.ts                    # Dynamic sitemap
│   ├── robots.ts                     # AI + traditional crawler rules
│   │
│   ├── api/                          # API Routes
│   │   ├── advisor/
│   │   │   └── route.ts              # Advisor logic endpoint
│   │   ├── events/
│   │   │   └── route.ts              # Outbound event tracking
│   │   └── creators/
│   │       └── route.ts              # Creator data endpoints
│   │
│   ├── terrains/
│   │   └── [slug]/
│   │       └── page.tsx              # Terrain education pages
│   │
│   ├── ingredients/
│   │   └── [slug]/
│   │       └── page.tsx              # Ingredient detail pages
│   │
│   ├── advisor/
│   │   ├── page.tsx                  # Advisor quiz flow
│   │   └── results/
│   │       └── page.tsx              # Recommendation results
│   │
│   ├── c/
│   │   └── [slug]/
│   │       └── page.tsx              # Creator landing pages
│   │
│   ├── dashboard/
│   │   ├── page.tsx                  # Creator dashboard (auth required)
│   │   ├── analytics/
│   │   │   └── page.tsx              # Detailed analytics
│   │   └── settings/
│   │       └── page.tsx              # Creator settings
│   │
│   ├── about/
│   │   └── page.tsx                  # About ZYNAVA
│   ├── faq/
│   │   └── page.tsx                  # Supplement FAQ
│   ├── privacy/
│   │   └── page.tsx                  # Privacy policy
│   └── terms/
│       └── page.tsx                  # Terms of service
│
├── src/
│   ├── components/
│   │   ├── advisor/                  # Advisor UI components
│   │   │   ├── AdvisorInterface.tsx
│   │   │   ├── AdvisorBubble.tsx
│   │   │   ├── AdvisorWelcome.tsx
│   │   │   ├── QuizStep.tsx
│   │   │   └── ResultsCard.tsx
│   │   │
│   │   ├── pages/                    # Full page components
│   │   │   ├── Home/
│   │   │   ├── Terrain/
│   │   │   ├── Ingredient/
│   │   │   ├── CreatorLanding/
│   │   │   └── CreatorDashboard/
│   │   │
│   │   ├── SEO/                      # SEO components
│   │   │   └── StructuredData.tsx
│   │   │
│   │   ├── Analytics/                # Tracking
│   │   │   ├── GoogleAnalytics.tsx
│   │   │   └── GoogleTagManager.tsx
│   │   │
│   │   ├── Navigation/               # Nav components
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── CookieConsent/            # GDPR
│   │   │   └── CookieConsent.tsx
│   │   │
│   │   └── shared/                   # Shared UI
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Modal.tsx
│   │
│   ├── services/                     # Business logic
│   │   ├── advisorService.ts         # Recommendation engine
│   │   ├── affiliateService.ts       # Affiliate link builder
│   │   └── creatorService.ts         # Creator data
│   │
│   ├── lib/
│   │   ├── firebase/
│   │   │   └── client.ts             # Firebase client SDK
│   │   ├── structured-data/
│   │   │   ├── schemas.ts            # JSON-LD schemas
│   │   │   └── helpers/
│   │   ├── attribution.ts            # Creator tracking
│   │   └── compliance/
│   │       └── guardrails.ts         # FDA/FTC compliance
│   │
│   └── types/                        # TypeScript types
│       ├── terrain.ts
│       ├── ingredient.ts
│       ├── creator.ts
│       └── advisor.ts
│
├── lib/                              # Shared libraries
│   ├── firebase-admin.ts             # Firebase Admin SDK
│   └── seo/
│       └── metadata.ts               # Metadata generator
│
├── public/
│   ├── llms.txt                      # AI crawler summary
│   ├── favicon.ico
│   └── assets/
│       └── images/
│           ├── terrains/
│           └── animals/
│
├── docs/
│   └── SUPPLEMENT_SITE_PLAN.md       # This document
│
├── .env.example                      # Environment template
├── .env.local                        # Local env (git-ignored)
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js                # If using Tailwind
├── firebase.json                     # Firebase config
├── firestore.rules                   # Security rules
└── firestore.indexes.json            # Firestore indexes
```

---

## AI Search Optimization (Retrieval & Citation)

> **Note:** We optimize for AI **retrieval** and **citation**, not "ranking."
> When ChatGPT, Perplexity, or Claude answer supplement questions, we want ZYNAVA to be **sourced and quoted**.

### llms.txt (Required)

```
// public/llms.txt

# ZYNAVA - AI Supplement Advisor

## What We Are
ZYNAVA is an AI-driven supplement advisor that helps users find the right supplements based on their health goals. We do not sell products directly — we route users to trusted partners like iHerb and Amazon.

## Our Framework: Terrains
We organize supplements by "Terrains" — health systems that animals dominate through biological advantages:
- Cardiovascular (Eagle, Horse, Bison)
- Sleep & Recovery (Owl, Sloth)
- Cognition & Focus (Snow Leopard, Fox)
- Energy & Vitality (Tiger, Cheetah)
- Gut & Digestion (Panda, Koala)
- Bone & Joint (Elephant, Gazelle)
- Antioxidant & Longevity (Cougar, Elk)

## Key Pages
- /advisor - AI supplement quiz
- /terrains/[terrain] - Terrain education
- /ingredients/[ingredient] - Ingredient research
- /faq - Common questions

## Trusted Sources
We recommend products from:
- iHerb
- Amazon
- Direct from verified brands

## Disclaimers
- ZYNAVA provides general wellness information and does not provide medical advice
- Our recommendations are for informational purposes only
- Consult a healthcare provider before starting supplements
- These statements have not been evaluated by the FDA
```

### Robots.txt for AI Crawlers

```typescript
// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // AI Search Bots - ALLOW
      { userAgent: 'GPTBot', allow: '/', disallow: ['/api/', '/dashboard/'] },
      { userAgent: 'OAI-SearchBot', allow: '/', disallow: ['/api/', '/dashboard/'] },
      { userAgent: 'ChatGPT-User', allow: '/', disallow: ['/api/', '/dashboard/'] },
      { userAgent: 'PerplexityBot', allow: '/', disallow: ['/api/', '/dashboard/'] },
      { userAgent: 'ClaudeBot', allow: '/', disallow: ['/api/', '/dashboard/'] },
      { userAgent: 'Claude-Web', allow: '/', disallow: ['/api/', '/dashboard/'] },
      { userAgent: 'Google-Extended', allow: '/', disallow: ['/api/', '/dashboard/'] },
      
      // Traditional Crawlers
      { userAgent: 'Googlebot', allow: '/', disallow: ['/api/', '/dashboard/'] },
      { userAgent: 'Bingbot', allow: '/', disallow: ['/api/', '/dashboard/'] },
      
      // Default
      { userAgent: '*', allow: '/', disallow: ['/api/', '/dashboard/'] },
    ],
    sitemap: 'https://zynava.com/sitemap.xml',
  };
}
```

### Content Structure for AI Citation

Every ingredient page should have **quotable content**:

```markdown
## Magnesium Glycinate

**What it is:** Magnesium bound to the amino acid glycine for enhanced absorption and bioavailability.

**Primary benefits:**
- Supports sleep quality and relaxation
- Promotes muscle recovery
- Helps manage stress response
- Supports healthy blood pressure

**Typical dosage:** 200-400mg daily, preferably before bed

**Best for:** People seeking better sleep, stress management, or muscle recovery

**Research:** Multiple studies show magnesium supplementation improves sleep quality, particularly in older adults (PubMed: 28395787).

**Terrain:** Sleep & Recovery 🦉

*These statements have not been evaluated by the FDA.*
```

### SEO & Crawling Gotchas

**This section declares SEO rules so nothing is missed.**

#### Canonical URLs

```typescript
// app/terrains/[slug]/page.tsx
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    alternates: {
      canonical: `https://zynava.com/terrains/${params.slug}`,
    },
  };
}
```

**Rules:**
- Every page MUST have a canonical URL
- Canonical = production domain, never localhost or preview
- No trailing slashes (match robots.txt)

#### noindex Rules

| Route | Should Index? | Notes |
|-------|---------------|-------|
| `/` | ✅ Yes | Homepage |
| `/terrains/[slug]` | ✅ Yes | Core content |
| `/ingredients/[slug]` | ✅ Yes | Core content |
| `/advisor` | ✅ Yes | Entry point |
| `/advisor/results` | ❌ No | Dynamic, user-specific |
| `/c/[slug]` | ✅ Yes (if verified) | Creator pages |
| `/dashboard/*` | ❌ No | Private |
| `/terms`, `/privacy` | ✅ Yes | Legal (required) |

```typescript
// app/advisor/results/page.tsx
export const metadata: Metadata = {
  robots: 'noindex, nofollow', // User-specific content
};

// app/dashboard/page.tsx
export const metadata: Metadata = {
  robots: 'noindex, nofollow', // Private
};
```

#### OpenGraph Defaults

```typescript
// lib/seo/metadata.ts

export const OG_DEFAULTS = {
  siteName: 'ZYNAVA',
  locale: 'en_US',
  type: 'website',
  defaultImage: {
    url: 'https://zynava.com/og-default.png',
    width: 1200,
    height: 630,
    alt: 'ZYNAVA - AI Supplement Advisor',
  },
};

// Usage in generateMetadata
openGraph: {
  ...OG_DEFAULTS,
  title: 'Sleep & Recovery Terrain',
  description: '...',
  url: `https://zynava.com/terrains/${params.slug}`,
}
```

#### Structured Data per Page Type

| Page Type | Schema Types |
|-----------|-------------|
| **Home** | `Organization`, `WebSite`, `FAQPage` |
| **Terrain** | `WebPage`, `BreadcrumbList`, `FAQPage` |
| **Ingredient** | `WebPage`, `Article`, `BreadcrumbList` |
| **Advisor** | `WebPage`, `HowTo` |
| **Creator Landing** | `WebPage`, `Person` (for creator) |
| **About** | `AboutPage`, `Organization` |

```typescript
// Terrain page example
const terrainSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Sleep & Recovery Terrain',
  description: '...',
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  },
};

// Ingredient page example
const ingredientSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Magnesium Glycinate: Benefits, Dosage, and Research',
  author: {
    '@type': 'Organization',
    name: 'ZYNAVA',
  },
  publisher: {
    '@type': 'Organization',
    name: 'ZYNAVA',
    logo: {
      '@type': 'ImageObject',
      url: 'https://zynava.com/logo.png',
    },
  },
  datePublished: '2025-01-01',
  dateModified: '2025-01-15',
};
```

#### Image Optimization

```typescript
// next.config.js
images: {
  formats: ['image/webp', 'image/avif'],
  remotePatterns: [
    { protocol: 'https', hostname: 'zynava.com' },
    // Add affiliate image domains if needed
  ],
}
```

**Rules:**
- All images use `next/image`
- Terrain/animal images stored in `/public/assets/images/`
- Alt text required (SEO + accessibility)
- Lazy load below-fold images

---

## Firebase Architecture

### Collections

```
firestore/
├── terrains/                    # Terrain definitions
│   └── {terrainId}/
├── ingredients/                 # Ingredient intelligence
│   └── {ingredientId}/
├── advisorStacks/               # Stack logic
│   └── {stackId}/
├── affiliateProviders/          # iHerb, Amazon config
│   └── {providerId}/
├── creators/                    # Creator accounts
│   └── {creatorId}/
├── referralSessions/            # Attribution tracking
│   └── {sessionId}/
├── outboundEvents/              # Click/completion events
│   └── {eventId}/
└── creatorStats/                # Aggregated daily stats
    └── {creatorId}/
        └── {date}/
```

### Security Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Public read for content
    match /terrains/{doc} { allow read: if true; }
    match /ingredients/{doc} { allow read: if true; }
    
    // Creators can read their own data
    match /creators/{creatorId} {
      allow read: if request.auth.uid == creatorId;
      allow write: if request.auth.uid == creatorId;
    }
    
    // Creator stats - only owner can read
    match /creatorStats/{creatorId}/{date} {
      allow read: if request.auth.uid == creatorId;
    }
    
    // Events - write via API only
    match /outboundEvents/{doc} {
      allow read: if false;
      allow write: if false; // API route with admin SDK
    }
    
    // Sessions - write via API only
    match /referralSessions/{doc} {
      allow read: if false;
      allow write: if false; // API route with admin SDK
    }
  }
}
```

### API Rate Limiting

| Endpoint | Limit | Per |
|----------|-------|-----|
| `/api/events` | 60 requests/min | sessionId |
| `/api/advisor` | 30 requests/min | sessionId |

**Phase 1 Implementation (In-Memory):**

```typescript
// src/lib/rateLimit.ts

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(
  key: string, 
  limit: number = 60, 
  windowMs: number = 60000
): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(key);
  
  if (!record || now > record.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  
  if (record.count >= limit) {
    return false; // Rate limited
  }
  
  record.count++;
  return true;
}

// Usage in API route:
// app/api/events/route.ts
const sessionId = body.sessionId;
if (!checkRateLimit(`events:${sessionId}`, 60)) {
  return NextResponse.json({ error: 'Rate limited' }, { status: 429 });
}
```

**Phase 2+ (Upstash Redis):**
- Replace in-memory Map with Upstash Redis for distributed rate limiting
- Works across serverless function instances

### PII Policy & Data Retention

**We NEVER Store:**
| Data Type | Reason |
|-----------|--------|
| Name | Not needed for advisor |
| Email | No accounts for users |
| Phone | Not collected |
| Date of Birth | Not collected |
| IP Address | Privacy concern |
| Diagnosis details | Liability |
| Medical history | Liability |

**What We DO Store (Anonymous):**
| Data Type | Purpose | Retention |
|-----------|---------|-----------|
| `sessionId` | Attribution tracking | 30 days |
| `creatorSlug` | Attribution | 30 days |
| `advisorInputs` | Analytics (goals, age range) | 90 days |
| `eventType` | Analytics | 90 days |
| `timestamp` | Analytics | 90 days |
| `pageUrl` | Analytics | 90 days |

**Data Retention Implementation:**

**Choose one approach:**

| Option | How | Pros | Cons |
|--------|-----|------|------|
| **A: Firestore TTL Policy** | Enable TTL on `expiresAt` field in Firebase Console | Automatic, no code | Requires adding `expiresAt` to all docs |
| **B: Scheduled Cleanup Job** | Weekly cron script deletes old docs | More control | Requires maintenance |

**Option A: Firestore TTL (Recommended)**
1. Add `expiresAt: Timestamp` field to every event doc
2. Enable TTL policy in Firebase Console → Firestore → TTL
3. Firestore automatically deletes docs when `expiresAt` passes

```typescript
// When writing events, set expiresAt
await adminDb.collection('outboundEvents').add({
  ...eventData,
  timestamp: Timestamp.now(),
  expiresAt: Timestamp.fromMillis(Date.now() + 90 * 24 * 60 * 60 * 1000), // 90 days
});
```

**Option B: Scheduled Cleanup Job**

```typescript
// scripts/cleanup-old-events.ts (run weekly via cron)
async function cleanupOldEvents() {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 90); // 90 days ago
  
  const oldEvents = await adminDb
    .collection('outboundEvents')
    .where('timestamp', '<', cutoff)
    .limit(500)
    .get();
  
  const batch = adminDb.batch();
  oldEvents.docs.forEach(doc => batch.delete(doc.ref));
  await batch.commit();
  
  console.log(`Deleted ${oldEvents.size} old events`);
}

// For referralSessions: 30-day retention
async function cleanupOldSessions() {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 30);
  
  const oldSessions = await adminDb
    .collection('referralSessions')
    .where('createdAt', '<', cutoff)
    .limit(500)
    .get();
  
  const batch = adminDb.batch();
  oldSessions.docs.forEach(doc => batch.delete(doc.ref));
  await batch.commit();
}
```

**Compliance Notes:**
- No GDPR concern: we don't collect PII
- No CCPA concern: no personal information
- If users request data deletion: nothing to delete (anonymous)

### Queries & Required Indexes

**Queries We'll Run:**

| Query | Collection | Fields | Requires Composite Index |
|-------|------------|--------|--------------------------|
| Events by creator + date range | `outboundEvents` | `creatorId`, `timestamp` | ✅ Yes |
| Events by type + date | `outboundEvents` | `eventType`, `timestamp` | ✅ Yes |
| Sessions by creator | `referralSessions` | `creatorId`, `createdAt` | ✅ Yes |
| Old events for cleanup | `outboundEvents` | `timestamp` | No (single field) |
| Creator stats by date | `creatorStats` | Direct path: `creatorStats/{id}/{date}` | No |

**firestore.indexes.json:**

```json
{
  "indexes": [
    {
      "collectionGroup": "outboundEvents",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "creatorId", "order": "ASCENDING" },
        { "fieldPath": "timestamp", "order": "DESCENDING" }
      ]
    },
    {
      "collectionGroup": "outboundEvents",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "eventType", "order": "ASCENDING" },
        { "fieldPath": "timestamp", "order": "DESCENDING" }
      ]
    },
    {
      "collectionGroup": "referralSessions",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "creatorId", "order": "ASCENDING" },
        { "fieldPath": "createdAt", "order": "DESCENDING" }
      ]
    }
  ],
  "fieldOverrides": []
}
```

---

# PART 5: RISK MITIGATION

---

## Compliance & Safety

### FDA Disclaimer (Required on Every Page)

```typescript
export const FDA_DISCLAIMER = `
*These statements have not been evaluated by the Food and Drug Administration. 
This product is not intended to diagnose, treat, cure, or prevent any disease. 
Consult your healthcare provider before starting any supplement regimen.
`;
```

### Affiliate Disclosure (FTC Required)

```typescript
export const AFFILIATE_DISCLOSURE = `
ZYNAVA is an affiliate partner of iHerb, Amazon, and other retailers. 
When you click links on this site and make a purchase, we may earn a commission 
at no additional cost to you. This helps support our free advisor tool.
`;
```

### ⚠️ Compliance Footer Block (Required Site-Wide)

**Before any creator traffic, these must exist and be visible:**

1. **`/terms`** — Terms of Service
2. **`/privacy`** — Privacy Policy  
3. **`/disclaimer`** — Health Disclaimer

**Compliance Footer Component (use in all pages):**

```typescript
// src/lib/compliance/disclaimers.ts

export const FDA_DISCLAIMER = `
*These statements have not been evaluated by the Food and Drug Administration. 
This product is not intended to diagnose, treat, cure, or prevent any disease. 
Consult your healthcare provider before starting any supplement regimen.
`;

export const AFFILIATE_DISCLOSURE = `
ZYNAVA is an affiliate partner of iHerb, Amazon, and other retailers. 
When you click links on this site and make a purchase, we may earn a commission 
at no additional cost to you. This helps support our free advisor tool.
`;
```

```typescript
// src/components/compliance/ComplianceFooter.tsx

import { FDA_DISCLAIMER, AFFILIATE_DISCLOSURE } from '@/src/lib/compliance/disclaimers';

interface Props {
  showAffiliateDisclosure?: boolean; // True on results/affiliate pages
}

export function ComplianceFooter({ showAffiliateDisclosure = false }: Props) {
  return (
    <footer style={{ 
      borderTop: '1px solid #e5e7eb', 
      padding: '24px', 
      marginTop: '48px',
      fontSize: '12px',
      color: '#6b7280',
      textAlign: 'center',
    }}>
      {/* FDA Disclaimer - ALWAYS VISIBLE */}
      <p style={{ marginBottom: '12px' }}>
        {FDA_DISCLAIMER}
      </p>
      
      {/* Affiliate Disclosure - ON RELEVANT PAGES */}
      {showAffiliateDisclosure && (
        <p style={{ marginBottom: '12px', fontStyle: 'italic' }}>
          {AFFILIATE_DISCLOSURE}
        </p>
      )}
      
      {/* Required Legal Links */}
      <div style={{ marginTop: '16px' }}>
        <a href="/terms" style={{ marginRight: '16px' }}>Terms</a>
        <a href="/privacy" style={{ marginRight: '16px' }}>Privacy</a>
        <a href="/disclaimer">Health Disclaimer</a>
      </div>
      
      <p style={{ marginTop: '12px' }}>
        © {new Date().getFullYear()} ZYNAVA. All rights reserved.
      </p>
    </footer>
  );
}
```

**Usage:**

```tsx
// Results page (has affiliate links)
<ComplianceFooter showAffiliateDisclosure={true} />

// Other pages
<ComplianceFooter />
```

**Phase 1 Requirement:** These pages and component MUST exist before any creator sends traffic.

### Language Rules

| ❌ NEVER Say | ✅ ALWAYS Say Instead |
|--------------|----------------------|
| "Treats insomnia" | "Supports sleep quality" |
| "Cures anxiety" | "Helps manage stress response" |
| "Prevents heart disease" | "Supports cardiovascular health" |
| "Clinically proven" | "Research suggests" |
| "Doctor recommended" | "Often recommended by health professionals" |
| "Take this for [condition]" | "May support [body system]" |

### AI Response Guardrails

```typescript
// src/lib/compliance/guardrails.ts

// ============================================
// BLOCKED OUTPUT PHRASES
// ============================================
const BLOCKED_PHRASES = [
  'diagnose', 'treat', 'cure', 'prevent disease',
  'prescription', 'medication', 'drug',
  'guaranteed', 'proven to', 'will definitely',
  'you should take', 'take this dose', 'mg per day',
];

// ============================================
// SENSITIVE CONDITIONS (Hard Stop)
// ============================================
const SENSITIVE_CONDITIONS = [
  // Pregnancy/Children
  'pregnant', 'pregnancy', 'breastfeeding', 'nursing',
  'child', 'children', 'kid', 'baby', 'infant', 'toddler',
  'under 18', 'teenager', 'minor',
  
  // Mental health
  'depression', 'anxiety', 'bipolar', 'schizophrenia',
  'adhd', 'add', 'ocd', 'ptsd', 'eating disorder',
  
  // Chronic conditions
  'diabetes', 'hypertension', 'high blood pressure',
  'heart disease', 'cancer', 'autoimmune',
  'thyroid', 'kidney disease', 'liver disease',
  
  // Medications
  'blood thinner', 'warfarin', 'coumadin', 'insulin',
  'antidepressant', 'ssri', 'snri', 'medication',
  'prescription', 'on meds', 'taking pills',
];

const REQUIRED_DISCLAIMER = 'Consult your healthcare provider';

// ============================================
// SENSITIVE CONDITION RESPONSE (Hard Rule)
// ============================================
const SENSITIVE_RESPONSE = `
I can share general wellness information, but for your specific situation, 
I recommend discussing with your healthcare provider before starting any supplements.

Here are some questions you might want to ask your clinician:
- Are there any supplements that could interact with my current medications?
- What's an appropriate approach given my health history?
- Are there any supplements I should avoid?
`;

export function checkSensitiveInput(userInput: string): boolean {
  const lowerInput = userInput.toLowerCase();
  return SENSITIVE_CONDITIONS.some(condition => 
    lowerInput.includes(condition)
  );
}

export function sanitizeAdvisorResponse(response: string): string {
  let sanitized = response;
  
  // Check for blocked phrases
  for (const phrase of BLOCKED_PHRASES) {
    if (response.toLowerCase().includes(phrase)) {
      sanitized = sanitized + '\n\n⚠️ ' + REQUIRED_DISCLAIMER;
      break;
    }
  }
  
  return sanitized;
}

export function getSensitiveConditionResponse(): string {
  return SENSITIVE_RESPONSE;
}
```

**Hard Rule:** If user mentions (or selects) pregnancy, breastfeeding, under 18, prescription meds, or chronic conditions:
- ❌ Do NOT provide a stack/routine
- ✅ Output: "Questions to ask your clinician" + general ingredient education only

### Creator Compliance Requirements

```markdown
## Creator Partnership Agreement (Summary)

By partnering with ZYNAVA, creators agree to:

1. ✅ Disclose affiliate relationship in all promotions
2. ✅ Use only approved language ("supports", "may help")
3. ❌ Never make medical claims
4. ❌ Never promise specific health outcomes
5. ❌ Never represent themselves as ZYNAVA employees
6. ✅ Include disclaimer in video descriptions
```

---

## Execution Risks & Mitigations

### Risk #1: Medical Advice Boundary

| Risk | Mitigation |
|------|------------|
| Claims drift into diagnosis | Hard-coded language rules in AI prompts |
| Creators oversell | Partnership agreement + monitoring |
| AI wording too specific | Response templates with guardrails |

### Risk #2: Overbuilding Too Early

| Risk | Mitigation |
|------|------------|
| Too many features | MVP scope locked (see below) |
| Creator dashboard before creators | Manual tracking first |
| Perfect data models | Start with 3 terrains, 10 ingredients |

### Risk #3: Creator Adoption Friction

| Risk | Mitigation |
|------|------------|
| Long onboarding | One-click signup |
| Confusing value prop | "Your audience gets personalized recs, you earn more" |
| "Why not just Amazon?" | Show higher conversion rates |

### Risk #4: Monetization Lag

| Risk | Mitigation |
|------|------------|
| Expecting revenue too quickly | Phase 1 = validation only |
| Burning runway | Track leading indicators first |

**Leading Indicators to Track:**
1. Advisor completion rate (target: >60%)
2. Click-through to affiliate (target: >50%)
3. Return visitors (target: >20%)

### Risk #5: Data Illusion

| Risk | Mitigation |
|------|------------|
| Over-indexing on analytics | Focus on directional signals |
| Misinterpreting small samples | Wait for 1,000+ sessions before optimizing |

---

## MVP Scope

### What to Build FIRST (Phase 1)

| Component | Scope |
|-----------|-------|
| Terrains | 3 terrains (Sleep, Energy, Cognition) |
| Ingredients | 10-15 key ingredients |
| Advisor | 4-step quiz |
| Results | Ingredient recommendations + affiliate links |
| Affiliate | iHerb only |
| Creator | 1 test partner |
| Analytics | Basic event tracking |
| Dashboard | Manual reports |

### ⚠️ Critical: First Creator = Case Study, Not Dashboard User

The first creator's role is to prove:
> "Your audience converts better here than Amazon."

**Do NOT build the dashboard for them.** Instead:
- Manual analytics (spreadsheet)
- Weekly email reports
- Personal relationship

The dashboard comes **after proof**, not before. First creator = validation partner.

### ⚡ Phase 1 Simplifications (Ship Faster)

| Simplification | Why | Upgrade Path |
|---------------|-----|--------------|
| **No OpenAI in Week 1-3** | Advisor can be deterministic rules-based using Terrain/Ingredient graph. Add OpenAI later for "explanations," not core selection. | Add OpenAI in Phase 2 for conversational polish |
| **iHerb only + 1-2 links per ingredient** | Avoid multi-provider complexity until CTR is proven. | Add Amazon after 100+ clicks tracked |
| **JSON data files (not Firestore)** | Faster iteration, no API needed. | Migrate to Firestore when content exceeds 20 ingredients |
| **No auth (guest-only)** | Advisor doesn't need accounts. | Add creator auth only when dashboard is real |

**Phase 1 is about proving signal, not building infrastructure.**

### What to Build LATER (Phase 2+)

| Component | Defer Until |
|-----------|-------------|
| All 7 terrains | Phase 2 |
| 50+ ingredients | Phase 2 |
| Multiple affiliates | Phase 2 |
| Creator dashboard | Phase 2 |
| Mobile app | Phase 3 |
| ZYNAVA products | Phase 3 |

---

# PART 6: BUILD ROADMAP

---

## Phase 1: Foundation (Weeks 1-4)

### Week 1: Infrastructure

- [ ] Set up Next.js 14 project
- [ ] Configure Firebase (Auth, Firestore)
- [ ] Copy reusable assets from SmarterPayouts
- [ ] Set up Vercel deployment
- [ ] Create base layout, nav, footer

### Week 2: Content & Data

- [ ] Create `data/terrains.json` (3 terrains)
- [ ] Create `data/ingredients.json` (10-15 ingredients)
- [ ] Create `data/affiliateRefs.json` (iHerb product mappings)
- [ ] Create terrain pages (ISR, reads from JSON)
- [ ] Create ingredient pages (ISR, reads from JSON)
- [ ] Implement SEO (metadata, schemas, robots.txt, llms.txt)

### Week 3: Advisor

- [ ] Build advisor UI (adapt from chat system)
- [ ] Implement advisor logic
- [ ] Build results page
- [ ] Integrate iHerb affiliate links
- [ ] Add disclaimers and compliance

### Week 4: Creator MVP

- [ ] Create creator landing page template
- [ ] Implement attribution tracking
- [ ] Set up event logging
- [ ] Onboard 1 test creator
- [ ] Manual analytics tracking

### Phase 1 Success Criteria

- [ ] 500+ advisor completions
- [ ] 60%+ completion rate
- [ ] 50%+ click-through to affiliate
- [ ] 1 creator driving traffic

### Phase 1 Definition of Done (Engineering DoD)

**Routes Must Exist & Work:**
- [ ] `/` — Homepage renders
- [ ] `/advisor` — Quiz flow works end-to-end
- [ ] `/advisor/results` — Results display with affiliate links
- [ ] `/terrains/[slug]` — 3 terrain pages render (sleep, energy, cognition)
- [ ] `/ingredients/[slug]` — 10-15 ingredient pages render
- [ ] `/c/[slug]` — At least 1 creator landing page works
- [ ] `/terms`, `/privacy`, `/disclaimer` — Legal pages exist

**SEO & Crawling:**
- [ ] `sitemap.xml` accessible at `/sitemap.xml`
- [ ] `robots.txt` accessible at `/robots.txt`
- [ ] `llms.txt` accessible at `/llms.txt`
- [ ] All ISR pages return 200 status

**Event Logging:**
- [ ] `page_view` events writing to Firestore
- [ ] `advisor_completed` events writing to Firestore
- [ ] `affiliate_click` events writing to Firestore
- [ ] `attribution_set` events writing to Firestore

**Compliance:**
- [ ] FDA disclaimer visible in footer on all pages
- [ ] FTC affiliate disclosure on results page
- [ ] Sensitive condition guardrails tested

**Lighthouse Targets (Optional but Recommended):**
- [ ] Performance: ≥ 80
- [ ] SEO: ≥ 90
- [ ] Best Practices: ≥ 90
- [ ] Accessibility: ≥ 85

**Deployment:**
- [ ] Vercel production deployment successful
- [ ] Custom domain configured (zynava.com)
- [ ] All environment variables set in production
- [ ] Firestore rules deployed
- [ ] First production smoke test passed

---

## Phase 2: Creator Launch (Weeks 5-8)

- [ ] Expand to all 7 terrains
- [ ] Add 50+ ingredients
- [ ] Add Amazon as second affiliate
- [ ] Build creator dashboard
- [ ] Onboard 10 creators
- [ ] Implement automated analytics

---

## Phase 3: Scale (Weeks 9+)

- [ ] Add more affiliate partners
- [ ] Implement budget tier logic
- [ ] Add routine builder
- [ ] Mobile optimization
- [ ] Consider ZYNAVA-branded products
- [ ] Brand partnership conversations

---

# DOCUMENT SUMMARY

## What This Document Covers

| Section | Purpose |
|---------|---------|
| Platform Definition | ZYNAVA is an advisor, not a store |
| Core Entities | Data models for terrains, ingredients, creators |
| Page Strategy | ISR for content, client for advisor |
| Advisor Architecture | Quiz → Logic → Affiliate routing |
| Creator System | Funnel + dashboard + attribution |
| Reusable Assets | Exactly what to copy from SmarterPayouts |
| AI Search | llms.txt, robots.txt, quotable content |
| Compliance | FDA, FTC, language rules |
| Risk Mitigation | All execution risks addressed |
| MVP Scope | What to build first |

## Key Files to Create

| File | Purpose |
|------|---------|
| `public/llms.txt` | AI crawler summary |
| `app/robots.ts` | AI + traditional crawler rules |
| `src/lib/compliance/guardrails.ts` | AI response safety |
| `src/lib/compliance/disclaimers.ts` | FDA/FTC text constants |
| `src/services/advisorService.ts` | Recommendation logic |
| `src/services/affiliateService.ts` | Link generation |
| `src/lib/attribution.ts` | Creator tracking |

---

# APPENDIX A: TECH STACK SUMMARY

## Exact Versions to Use

| Package | Version | Notes |
|---------|---------|-------|
| **Next.js** | `14.2.x` | App Router only, stable |
| **React** | `18.2.x` | Latest stable |
| **TypeScript** | `5.3.x` | Strict mode enabled |
| **Firebase** | `11.x` | Client SDK |
| **Firebase Admin** | `13.x` | Server-side only |
| **OpenAI** | `5.x` | For AI advisor |
| **Node.js** | `18.x` or `20.x` | LTS versions |

## Package.json (Starter)

```json
{
  "name": "zynava",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "next": "^14.2.29",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "firebase": "^11.8.1",
    "openai": "^5.23.2",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "@types/node": "^20.11.19",
    "@types/react": "^18.2.57",
    "@types/react-dom": "^18.2.19",
    "typescript": "^5.3.3",
    "eslint": "^8.57.1",
    "eslint-config-next": "^14.2.33"
  }
}
```

---

# APPENDIX B: ENVIRONMENT VARIABLES

## Required Environment Variables

Create `.env.local` for local development. Set these in Vercel for production.

```bash
# =============================================================================
# ZYNAVA ENVIRONMENT CONFIGURATION
# =============================================================================

# -----------------------------------------------------------------------------
# APPLICATION
# -----------------------------------------------------------------------------
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=ZYNAVA

# -----------------------------------------------------------------------------
# FIREBASE CLIENT (Public - used in browser)
# -----------------------------------------------------------------------------
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=zynava-xxxxx.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=zynava-xxxxx
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=zynava-xxxxx.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef

# -----------------------------------------------------------------------------
# FIREBASE ADMIN (Server-side only - NEVER prefix with NEXT_PUBLIC_)
# -----------------------------------------------------------------------------
# Option 1: JSON string (recommended for Vercel)
FIREBASE_SERVICE_ACCOUNT='{"type":"service_account","project_id":"zynava-xxxxx",...}'

# Option 2: Path to file (local development)
# GOOGLE_APPLICATION_CREDENTIALS=./serviceAccountKey.json

# -----------------------------------------------------------------------------
# OPENAI (Server-side only)
# -----------------------------------------------------------------------------
OPENAI_API_KEY=sk-...

# -----------------------------------------------------------------------------
# AFFILIATE PROGRAMS
# -----------------------------------------------------------------------------
IHERB_AFFILIATE_CODE=ABC123
AMAZON_AFFILIATE_TAG=zynava-20

# -----------------------------------------------------------------------------
# ANALYTICS (Public)
# -----------------------------------------------------------------------------
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# -----------------------------------------------------------------------------
# FEATURE FLAGS
# -----------------------------------------------------------------------------
NEXT_PUBLIC_ENABLE_ADVISOR=true
NEXT_PUBLIC_ENABLE_CREATOR_DASHBOARD=false
```

## Environment Variable Checklist

| Variable | Required | Where Used |
|----------|----------|------------|
| `NEXT_PUBLIC_FIREBASE_*` | ✅ Yes | Client-side Firebase |
| `FIREBASE_SERVICE_ACCOUNT` | ✅ Yes | API routes |
| `OPENAI_API_KEY` | ✅ Yes | Advisor AI |
| `IHERB_AFFILIATE_CODE` | ✅ Yes | Affiliate links |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional | Analytics |

---

# APPENDIX C: TESTING STRATEGY

## What to Test

| Component | Test Type | Priority |
|-----------|-----------|----------|
| Advisor logic | Unit tests | 🔴 High |
| Affiliate link generation | Unit tests | 🔴 High |
| Attribution tracking | Integration tests | 🔴 High |
| Creator landing pages | E2E tests | 🟡 Medium |
| ISR pages render | E2E tests | 🟡 Medium |
| Dashboard auth | Integration tests | 🟡 Medium |

## Testing Setup

```bash
# Install testing dependencies
npm install -D jest @testing-library/react @testing-library/jest-dom
npm install -D playwright  # For E2E tests
```

## Key Test Cases

### Advisor Service Tests

```typescript
// src/services/__tests__/advisorService.test.ts

describe('advisorService', () => {
  test('maps sleep goals to Sleep terrain', () => {
    const input = { goals: ['better-sleep'], ageRange: '36-50' };
    const result = generateRecommendations(input);
    expect(result.primaryTerrain.slug).toBe('sleep');
  });

  test('recommends magnesium for sleep terrain', () => {
    const input = { goals: ['better-sleep'], budgetTier: 'essential' };
    const result = generateRecommendations(input);
    const ingredientSlugs = result.ingredients.map(i => i.slug);
    expect(ingredientSlugs).toContain('magnesium-glycinate');
  });

  test('applies age modifiers for 65+', () => {
    const input = { goals: ['energy'], ageRange: '65+' };
    const result = generateRecommendations(input);
    // Should include CoQ10 for older adults
    const ingredientSlugs = result.ingredients.map(i => i.slug);
    expect(ingredientSlugs).toContain('coq10');
  });
});
```

### Affiliate Service Tests

```typescript
// src/services/__tests__/affiliateService.test.ts

describe('affiliateService', () => {
  test('generates iHerb link with affiliate code', () => {
    const link = generateAffiliateLink('magnesium-glycinate', 'iherb');
    expect(link).toContain('iherb.com');
    expect(link).toContain('rcode=ABC123');
  });

  test('includes creator attribution in link', () => {
    const link = generateAffiliateLink('magnesium-glycinate', 'iherb', 'drmike');
    expect(link).toContain('ref=drmike');
  });
});
```

### Attribution Tracking Tests

```typescript
// src/lib/__tests__/attribution.test.ts

describe('attribution', () => {
  test('stores creator code in localStorage', () => {
    setAttribution('drmike');
    expect(getAttribution()).toBe('drmike');
  });

  test('expires after 30 days', () => {
    // Mock date 31 days in future
    setAttribution('drmike');
    jest.advanceTimersByTime(31 * 24 * 60 * 60 * 1000);
    expect(getAttribution()).toBeNull();
  });
});
```

---

# APPENDIX D: DEPLOYMENT CHECKLIST

## Local Development Workflow

### Branching Strategy

```
main        → Production (auto-deploys to Vercel production)
dev         → Development (auto-deploys to Vercel preview)
feature/*   → Feature branches (create PRs to dev)
```

**Rules:**
- Never push directly to `main`
- All work happens on `feature/*` branches
- Merge to `dev` for testing
- Merge `dev` to `main` for production release

### Environment Validation

Before starting dev server, validate env vars:

```typescript
// scripts/validate-env.ts
const required = [
  'NEXT_PUBLIC_FIREBASE_API_KEY',
  'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
  'FIREBASE_SERVICE_ACCOUNT',
  'OPENAI_API_KEY',
];

const missing = required.filter(key => !process.env[key]);

if (missing.length > 0) {
  console.error('Missing required environment variables:');
  missing.forEach(key => console.error(`  - ${key}`));
  process.exit(1);
}

console.log('✅ All required env vars present');
```

Add to package.json:
```json
{
  "scripts": {
    "validate-env": "ts-node scripts/validate-env.ts",
    "dev": "npm run validate-env && next dev"
  }
}
```

### Preview Deployments & QA

Every PR to `dev` creates a Vercel preview URL. Before merging:

**QA Checklist:**
- [ ] Visit preview URL
- [ ] Test advisor flow end-to-end
- [ ] Check mobile responsiveness
- [ ] Verify no console errors
- [ ] Test at least 1 affiliate link click
- [ ] Check compliance footer visible

### Firebase Deploy Sequence

**Order matters:**

```bash
# 1. Deploy indexes FIRST (indexes take time to build)
firebase deploy --only firestore:indexes

# 2. Wait for indexes to build (check Firebase console)
# 3. Then deploy rules
firebase deploy --only firestore:rules

# 4. Deploy app to Vercel
vercel --prod
```

### First Production Smoke Test

After first production deploy, manually verify:

| Test | URL | Expected |
|------|-----|----------|
| Homepage | `/` | Loads, no errors |
| Terrain page | `/terrains/sleep` | Renders, metadata correct |
| Ingredient page | `/ingredients/magnesium-glycinate` | Renders, affiliate links work |
| Advisor start | `/advisor` | Quiz loads |
| Advisor complete | Complete quiz | Results display |
| Affiliate click | Click any "View on iHerb" | Redirects with tracking params |
| Creator page | `/c/test` | Renders (if exists) |
| Sitemap | `/sitemap.xml` | XML renders, includes pages |
| Robots | `/robots.txt` | Text renders, correct rules |
| llms.txt | `/llms.txt` | Text renders |
| Console | All pages | No JavaScript errors |
| Firestore | Firebase console | Events being written |

---

## Pre-Deployment

- [ ] All environment variables set in Vercel
- [ ] Firebase project created and configured
- [ ] Firestore security rules deployed
- [ ] Domain configured (zynava.com)
- [ ] SSL certificate active

## Deployment Steps

### 1. Connect to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Login and link project
vercel login
vercel link
```

### 2. Set Environment Variables

```bash
# Add each env var to Vercel
vercel env add NEXT_PUBLIC_FIREBASE_API_KEY
vercel env add FIREBASE_SERVICE_ACCOUNT
vercel env add OPENAI_API_KEY
# ... etc
```

Or set them in Vercel Dashboard → Settings → Environment Variables

### 3. Deploy

```bash
# Preview deployment
vercel

# Production deployment
vercel --prod
```

### 4. Post-Deployment Verification

- [ ] Homepage loads
- [ ] Advisor flow completes
- [ ] Affiliate links include tracking codes
- [ ] Creator landing pages load (`/c/test`)
- [ ] Firebase connection works
- [ ] Analytics firing
- [ ] `robots.txt` accessible
- [ ] `sitemap.xml` accessible
- [ ] `llms.txt` accessible

## Firebase Deployment

```bash
# Deploy Firestore rules and indexes
firebase deploy --only firestore:rules
firebase deploy --only firestore:indexes
```

---

# APPENDIX E: AFFILIATE SETUP GUIDE

## iHerb Affiliate Program

### Application

1. Go to: https://www.iherb.com/info/rewards
2. Apply for "iHerb Rewards Program"
3. Wait for approval (usually 1-3 days)
4. Get your affiliate code (e.g., `ABC123`)

### Link Format

```
https://www.iherb.com/pr/product-name/12345?rcode=YOUR_CODE
```

### Commission Structure

| Category | Commission |
|----------|------------|
| New customers | 5-10% |
| Returning customers | 5% |
| Cookie duration | 30 days |

---

## Amazon Associates

### Application

1. Go to: https://affiliate-program.amazon.com/
2. Create account
3. Add website (zynava.com)
4. Wait for approval
5. Get your tracking tag (e.g., `zynava-20`)

### Link Format

```
https://www.amazon.com/dp/B0XXXXXX?tag=YOUR_TAG
```

### Commission Structure

| Category | Commission |
|----------|------------|
| Health & Personal Care | 1-4.5% |
| Cookie duration | 24 hours |

---

## Tracking Creator Attribution

### URL Structure

```
# Creator landing page
https://zynava.com/c/drmike

# Advisor with attribution
https://zynava.com/advisor?ref=drmike

# Affiliate link with sub-tracking
https://www.iherb.com/pr/product/12345?rcode=ZYNAVA&subid=drmike
```

### iHerb Sub-ID Tracking

iHerb supports sub-ID tracking for creator attribution:

```
?rcode=ZYNAVA&subid=CREATOR_CODE
```

This allows you to see which creator drove each sale in iHerb's dashboard.

---

# APPENDIX F: QUICK START COMMANDS

## First 30 Minutes

```bash
# 1. Create project
npx create-next-app@14 zynava --typescript --app --eslint

# 2. Navigate to project
cd zynava

# 3. Install dependencies
npm install firebase openai zod

# 4. Create folder structure
mkdir -p src/components/advisor
mkdir -p src/components/pages
mkdir -p src/components/SEO
mkdir -p src/services
mkdir -p src/lib/firebase
mkdir -p src/lib/structured-data
mkdir -p src/types
mkdir -p lib/seo
mkdir -p public/assets/images

# 5. Create placeholder files
touch src/lib/firebase/client.ts
touch lib/firebase-admin.ts
touch src/services/advisorService.ts
touch src/services/affiliateService.ts
touch src/lib/attribution.ts
touch public/llms.txt

# 6. Copy .env.example and configure
cp .env.example .env.local

# 7. Start development
npm run dev
```

## Firebase Setup

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize project
firebase init

# Select:
# - Firestore
# - (optional) Hosting if not using Vercel

# Deploy rules
firebase deploy --only firestore:rules
```

---

**ZYNAVA Platform Blueprint**  
**Version 1.0 — December 2025**

*If ZYNAVA helps users make better decisions, money will follow.*  
*If it tries to sell first, it will fail.*
