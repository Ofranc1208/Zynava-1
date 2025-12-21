# ZYNAVA Affiliate Network Integration Readiness Audit

**Date:** January 2025  
**Purpose:** Assess current state and identify gaps before affiliate network integration

---

## Executive Summary

**Tech Stack Detected:**
- **Framework:** Next.js 14.2.22 (App Router)
- **Language:** TypeScript 5.5.4
- **React:** 18.3.1
- **Build Tool:** Next.js built-in Webpack
- **Styling:** CSS Modules + Inline Styles

**Overall Readiness Score: 6.5/10**

---

## 1. Project Structure & Routes

### ✅ Framework & Architecture
- **Location:** Next.js 14 App Router structure
- **Status:** Well-organized, modern architecture
- **Key Routes Identified:**
  - `/` - Home/Landing (`app/page.tsx` → `src/views/Home/HomePage.tsx`)
  - `/advisor` - Advisor quiz entry (`app/advisor/page.tsx` - placeholder)
  - `/advisor/results` - Results page (`app/advisor/results/page.tsx` → `src/components/advisor/Results/ResultsPage.tsx`)
  - `/about` - About page (`app/about/page.tsx` → `src/views/About/AboutPage.tsx`)
  - `/contact` - Contact page (`app/contact/page.tsx` → `src/views/Contact/ContactPage.tsx`)
  - `/faq` - FAQ page (`app/faq/page.tsx` → `src/views/FAQ/FaqPage.tsx`)

### ⚠️ Missing Routes
- No dedicated product detail pages
- No price comparison view (multi-retailer comparison)
- Advisor quiz is placeholder (actual quiz in modal: `src/components/advisor/AdvisorChat/`)

---

## 2. Legal/Compliance Pages Readiness

### ✅ Privacy Policy
- **Location:** `app/privacy/page.tsx`
- **Status:** ✅ **COMPLETE** - Comprehensive, includes affiliate tracking section
- **Quality:** Excellent - covers GDPR/CCPA, cookies, third-party tracking, affiliate disclosure
- **Last Updated:** December 2025

### ✅ Terms of Service
- **Location:** `app/terms/page.tsx`
- **Status:** ✅ **COMPLETE** - Full terms with affiliate relationship section
- **Quality:** Good - covers platform purpose, user responsibilities, affiliate relationships, liability

### ✅ Affiliate Disclosure
- **Location:** `app/affiliate-disclosure/page.tsx`
- **Status:** ✅ **COMPLETE** - FTC-compliant disclosure
- **Quality:** Good - clear, transparent
- **Also in Footer:** `app/components/Footer.tsx` (line 61) - disclosure snippet

### ✅ Medical/Health Disclaimer
- **Location:** `app/disclaimer/page.tsx`
- **Status:** ✅ **COMPLETE** - Comprehensive medical disclaimer
- **Quality:** Excellent - clear warnings, no medical claims

### ✅ About Page
- **Location:** `app/about/page.tsx` → `src/views/About/AboutPage.tsx`
- **Status:** ✅ **COMPLETE** - Explains what ZYNAVA does
- **Quality:** Good - clear value proposition

### ✅ Contact Page
- **Location:** `app/contact/page.tsx` → `src/views/Contact/ContactPage.tsx`
- **Status:** ✅ **COMPLETE** - Contact form and information
- **Quality:** Good - includes affiliate partnership contact option

### ✅ Editorial Policy
- **Location:** `app/editorial-policy/page.tsx`
- **Status:** ✅ **EXISTS** - Mentions affiliate firewall

### 📊 Legal Pages Readiness Score: **9/10**
**Strengths:** All required pages exist and are comprehensive  
**Minor Gap:** Could add affiliate disclosure more prominently on results pages

---

## 3. Affiliate-Related Code Audit

### ❌ No Affiliate Network Configuration
- **Status:** ❌ **NOT FOUND**
- **Missing:**
  - No config files for CJ, Impact, ShareASale, Amazon
  - No environment variables (`.env` files not in repo)
  - No affiliate ID storage
  - No network-specific link builders

### ❌ No Link Builder Utilities
- **Status:** ❌ **NOT FOUND**
- **Missing:**
  - No deep linking tools
  - No affiliate URL generation
  - No tracking parameter builders
  - No multi-network link manager

### ❌ No Product Feed Integration
- **Status:** ❌ **NOT FOUND**
- **Missing:**
  - No feed processors (XML/CSV)
  - No API clients for affiliate networks
  - No feed sync services
  - No product matching logic

### ⚠️ Text References Only
- **Found:** Multiple mentions of "affiliate" in:
  - `app/privacy/page.tsx` (line 99-115) - Mentions CJ, Amazon, iHerb
  - `app/terms/page.tsx` (line 65-72) - Mentions affiliate relationships
  - `app/affiliate-disclosure/page.tsx` - Full disclosure page
  - `src/lib/prompts/zynavaKnowledge.ts` (line 52-53) - AI knowledge base mentions affiliates
  - `src/components/shared/ComplianceBadge.tsx` - Mentions affiliate commission
- **Status:** Text-only, no implementation

### 📊 Affiliate Code Readiness Score: **0/10**
**Gap:** Zero technical implementation - only text references

---

## 4. Data Model Readiness

### ✅ Product Model Exists
- **Location:** `src/components/advisor/Results/scoring/types.ts`
- **Interface:** `ScoredProduct` (lines 22-69)

**Current Fields:**
```typescript
interface ScoredProduct {
  // Basic product info
  id: string
  title: string
  brand: string
  vendor: string          // ✅ Has vendor field
  price: string
  originalPrice?: string
  badges: string[]
  benefit: string
  image: string
  // ... scoring fields
  // ... dietary flags
  // ... quality certifications
}
```

### ❌ Missing Affiliate Fields
**Current State:** Has `vendor: string` but no affiliate link fields

**What's Missing:**
- ❌ No `affiliateUrl` field
- ❌ No `affiliateLinks[]` array (for multi-retailer)
- ❌ No `networkId` field (CJ, Impact, etc.)
- ❌ No `affiliateId` field
- ❌ No `commissionRate` field
- ❌ No `productUrl` field (base URL before affiliate params)

### ⚠️ Algorithm Mentions Affiliate URLs
- **Location:** `supplement-engine/ALGORITHM.txt`
- **Found:** References to `affiliateUrl` in algorithm (lines 710, 910, 1136, 1230, 1382)
- **Status:** Algorithm expects it, but TypeScript types don't include it

### ❌ No Affiliate Provider Model
- **Missing:** No `AffiliateProvider` interface
- **Missing:** No `AffiliateLink` interface
- **Missing:** No database schema for affiliate providers

### 📊 Data Model Readiness Score: **3/10**
**Strengths:** Product model exists with vendor field  
**Gaps:** No affiliate link fields, no provider model, algorithm expects fields that don't exist in types

---

## 5. Front-End Readiness

### ✅ Results Page Structure
- **Location:** `src/components/advisor/Results/ResultsPage.tsx`
- **Status:** ✅ **EXISTS** - Full results page with filtering/sorting

### ✅ Result Card Component
- **Location:** `src/components/advisor/Results/ResultCard.tsx`
- **Status:** ⚠️ **PLACEHOLDER** - Has CTA button but uses alert

**Current Implementation (lines 68-71):**
```typescript
const handleViewProduct = () => {
  // Placeholder - will link to actual vendor in production
  alert(`This would open ${title} on ${vendor}.\n\nThis is a placeholder - real affiliate links coming soon!`)
}
```

**Button Location (lines 141-146):**
```tsx
<button 
  className={styles.ctaButton}
  onClick={handleViewProduct}
>
  View on {vendor}
</button>
```

### ✅ UI Components Ready
- **ResultCard** has:
  - ✅ CTA button styled and positioned
  - ✅ Vendor display (`Available on {vendor}`)
  - ✅ Price display
  - ✅ Product badges
  - ✅ Z-SCORE display
- **Missing:**
  - ❌ No affiliate link integration
  - ❌ No price comparison (multiple retailers)
  - ❌ No "Buy on [Retailer]" buttons (only single vendor)

### ⚠️ Mock Data Structure
- **Location:** `src/components/advisor/Results/mockData.ts`
- **Status:** Has vendor field (Amazon, iHerb, Vitamin Shoppe, etc.)
- **Note:** Mock data includes vendor names but no URLs

### ❌ No Affiliate Disclosure on Results
- **Status:** ❌ **MISSING**
- **Gap:** No disclosure snippet on results page
- **Recommendation:** Add disclosure above/below results list

### 📊 Front-End Readiness Score: **5/10**
**Strengths:** UI components exist, CTA buttons ready  
**Gaps:** Placeholder links, no multi-retailer comparison, no disclosure on results page

---

## 6. Overall Readiness Assessment

### Readiness Scores Summary

| Category | Score | Status |
|----------|-------|--------|
| **Legal/Compliance Pages** | 9/10 | ✅ Ready |
| **Technical Integration** | 0/10 | ❌ Not Started |
| **Data Model** | 3/10 | ⚠️ Partial |
| **Front-End/UX** | 5/10 | ⚠️ Partial |
| **Overall** | **6.5/10** | ⚠️ Needs Work |

### ✅ What's Already Strong

1. **Legal Foundation:** All required pages exist and are comprehensive
   - Privacy Policy with affiliate tracking section
   - Terms of Service with affiliate disclosure
   - Dedicated Affiliate Disclosure page
   - Medical Disclaimer
   - Footer disclosure snippet

2. **UI Components:** Results page structure is ready
   - ResultCard component with CTA button
   - Vendor display
   - Price display
   - Professional styling

3. **Product Model:** Basic structure exists
   - ScoredProduct interface with vendor field
   - Algorithm expects affiliate URLs (mentions in ALGORITHM.txt)

4. **Content:** Mentions affiliates appropriately
   - Privacy policy explains affiliate tracking
   - Terms explain affiliate relationships
   - FAQ addresses affiliate questions

### ❌ What's Clearly Missing

1. **Zero Technical Implementation:**
   - No affiliate network configuration
   - No link builder utilities
   - No product feed integration
   - No API clients

2. **Data Model Gaps:**
   - No affiliate URL fields in ScoredProduct
   - No AffiliateProvider model
   - No AffiliateLink model
   - Algorithm expects fields that don't exist in TypeScript

3. **Front-End Gaps:**
   - CTA buttons use placeholder alerts
   - No multi-retailer price comparison
   - No affiliate disclosure on results page
   - No "Buy on [Retailer]" buttons (only single vendor)

4. **Infrastructure:**
   - No environment variable setup
   - No database/Firebase setup visible
   - No feed processing pipeline

---

## 7. Next-Step Roadmap

### Phase 1: Minimal Changes for Network Applications (Week 1-2)

**Goal:** Get website ready to apply to affiliate networks

#### Tasks:

1. **Add Affiliate Disclosure to Results Page**
   - **File:** `src/components/advisor/Results/ResultsPage.tsx`
   - **Action:** Add disclosure component above/below results list
   - **Reference:** Use text from `app/affiliate-disclosure/page.tsx`

2. **Verify Footer Disclosure Visibility**
   - **File:** `app/components/Footer.tsx`
   - **Status:** ✅ Already exists (line 61)
   - **Action:** Verify it's visible on all pages

3. **Add Contact Email to Footer (if missing)**
   - **File:** `app/components/Footer.tsx`
   - **Action:** Ensure business email is visible

4. **Verify HTTPS/SSL**
   - **Action:** Confirm production site has valid SSL certificate
   - **Check:** No mixed content warnings

5. **Review Privacy Policy Affiliate Section**
   - **File:** `app/privacy/page.tsx` (lines 99-115)
   - **Status:** ✅ Already mentions CJ, Amazon, iHerb
   - **Action:** Verify it's comprehensive enough

6. **Create `.env.example` Template**
   - **File:** Create `env.example` in root
   - **Action:** Document required affiliate environment variables (for future use)

**Phase 1 Deliverable:** Website ready for affiliate network applications

---

### Phase 2: Basic Affiliate Link Integration (Weeks 3-6)

**Goal:** Replace placeholder links with real affiliate links (no feeds yet)

#### Tasks:

1. **Create Affiliate Configuration System**
   - **File:** `src/lib/affiliate/config.ts` (NEW)
   - **Action:** Create config interface for affiliate providers
   ```typescript
   interface AffiliateProvider {
     id: string
     name: string
     networkId: 'cj' | 'impact' | 'shareasale' | 'amazon'
     affiliateId: string
     baseUrl: string
     commissionRate: number
   }
   ```

2. **Create Link Builder Utilities**
   - **File:** `src/lib/affiliate/linkBuilder.ts` (NEW)
   - **Action:** Build functions to generate affiliate links
   - **Networks:** CJ, Impact, ShareASale, Amazon
   - **Function:** `generateAffiliateLink(provider, productUrl, trackingParams)`

3. **Add Environment Variables**
   - **File:** `.env.local` (create)
   - **Variables:**
     ```
     NEXT_PUBLIC_CJ_AFFILIATE_ID=...
     NEXT_PUBLIC_IMPACT_AFFILIATE_ID=...
     NEXT_PUBLIC_SHAREASALE_AFFILIATE_ID=...
     NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG=...
     ```

4. **Extend ScoredProduct Type**
   - **File:** `src/components/advisor/Results/scoring/types.ts`
   - **Action:** Add affiliate fields:
   ```typescript
   affiliateUrl?: string
   affiliateLinks?: {
     retailerId: string
     networkId: string
     url: string
     commissionRate: number
   }[]
   ```

5. **Update ResultCard Component**
   - **File:** `src/components/advisor/Results/ResultCard.tsx`
   - **Action:** Replace alert with real affiliate link
   - **Change:** `handleViewProduct()` to open affiliate URL
   - **Add:** External link icon, `rel="nofollow sponsored"`

6. **Create Affiliate Link Service**
   - **File:** `src/lib/affiliate/affiliateService.ts` (NEW)
   - **Action:** Service to generate links for products
   - **Function:** `getAffiliateLink(product, vendor)`

7. **Update Mock Data (Temporary)**
   - **File:** `src/components/advisor/Results/mockData.ts`
   - **Action:** Add placeholder affiliate URLs for testing
   - **Note:** Will be replaced by real data later

8. **Add Affiliate Disclosure Component**
   - **File:** `src/components/shared/AffiliateDisclosure.tsx` (NEW)
   - **Action:** Reusable disclosure component
   - **Usage:** Add to results page

9. **Test Link Generation**
   - **Action:** Create test page to verify link generation
   - **File:** `app/test-affiliate/page.tsx` (NEW, remove before production)

10. **Update Algorithm Integration**
    - **File:** `src/components/advisor/Results/zScoreAlgorithm.ts`
    - **Action:** Ensure algorithm output includes affiliate URLs when available

**Phase 2 Deliverable:** Real affiliate links working on results page

---

### Phase 3: Product Feeds & Multi-Network Integration (Weeks 7-12)

**Goal:** Integrate product feeds and support multiple networks per product

#### Tasks:

1. **Design Database Schema**
   - **File:** Create `docs/affiliate-schema.md` (NEW)
   - **Action:** Document AffiliateProvider and AffiliateLink models
   - **Consider:** Firebase Firestore structure (if using Firebase)

2. **Create Feed Processor Interface**
   - **File:** `src/lib/affiliate/feedProcessor.ts` (NEW)
   - **Action:** Interface for parsing XML/CSV feeds
   - **Networks:** CJ, Impact, ShareASale

3. **Implement CJ Feed Processor**
   - **File:** `src/lib/affiliate/processors/cjProcessor.ts` (NEW)
   - **Action:** Parse CJ XML/CSV feeds
   - **Function:** `parseCJFeed(feedData)`

4. **Implement Impact Feed Processor**
   - **File:** `src/lib/affiliate/processors/impactProcessor.ts` (NEW)
   - **Action:** Parse Impact feeds/API
   - **Function:** `parseImpactFeed(feedData)`

5. **Create Feed Sync Service**
   - **File:** `src/lib/affiliate/feedSync.ts` (NEW)
   - **Action:** Service to download and process feeds
   - **Function:** `syncFeed(networkId, retailerId)`

6. **Build Product Matching Logic**
   - **File:** `src/lib/affiliate/productMatcher.ts` (NEW)
   - **Action:** Match feed products to your product database
   - **Strategy:** Match by ingredient, brand, name similarity

7. **Create Multi-Retailer Price Comparison**
   - **File:** `src/components/advisor/Results/PriceComparison.tsx` (NEW)
   - **Action:** Component showing same product from multiple retailers
   - **Display:** Price, shipping, commission rate

8. **Update ResultCard for Multi-Retailer**
   - **File:** `src/components/advisor/Results/ResultCard.tsx`
   - **Action:** Show multiple "Buy on [Retailer]" buttons
   - **Change:** Replace single vendor with retailer list

9. **Create Affiliate Provider Admin (Optional)**
   - **File:** `app/admin/affiliates/page.tsx` (NEW)
   - **Action:** Admin interface to manage affiliate providers
   - **Features:** Add providers, test links, view stats

10. **Implement Feed Update Scheduler**
    - **File:** `src/lib/affiliate/scheduler.ts` (NEW)
    - **Action:** Schedule daily/weekly feed updates
    - **Note:** May need API route or cron job

11. **Add Network Priority System**
    - **File:** `src/lib/affiliate/networkPriority.ts` (NEW)
    - **Action:** Logic to choose best network when multiple available
    - **Factors:** Commission rate, feed quality, availability

12. **Create Link Verification System**
    - **File:** `src/lib/affiliate/linkVerifier.ts` (NEW)
    - **Action:** Verify affiliate links are valid
    - **Function:** `verifyLink(url)` - check if link is accessible

**Phase 3 Deliverable:** Product feeds integrated, multi-network support, price comparison

---

## File Reference Quick Links

### Legal Pages
- Privacy: `app/privacy/page.tsx`
- Terms: `app/terms/page.tsx`
- Affiliate Disclosure: `app/affiliate-disclosure/page.tsx`
- Disclaimer: `app/disclaimer/page.tsx`
- Footer: `app/components/Footer.tsx`

### Results/Product Components
- Results Page: `src/components/advisor/Results/ResultsPage.tsx`
- Result Card: `src/components/advisor/Results/ResultCard.tsx`
- Product Types: `src/components/advisor/Results/scoring/types.ts`
- Mock Data: `src/components/advisor/Results/mockData.ts`

### Algorithm
- Algorithm Doc: `supplement-engine/ALGORITHM.txt`
- Algorithm Types: `src/components/advisor/Results/scoring/types.ts`

### New Files to Create (Phase 2)
- `src/lib/affiliate/config.ts`
- `src/lib/affiliate/linkBuilder.ts`
- `src/lib/affiliate/affiliateService.ts`
- `src/components/shared/AffiliateDisclosure.tsx`
- `.env.local` (not in repo)

### New Files to Create (Phase 3)
- `src/lib/affiliate/feedProcessor.ts`
- `src/lib/affiliate/processors/cjProcessor.ts`
- `src/lib/affiliate/processors/impactProcessor.ts`
- `src/lib/affiliate/feedSync.ts`
- `src/lib/affiliate/productMatcher.ts`
- `src/components/advisor/Results/PriceComparison.tsx`

---

## Summary

**Current State:** Legal pages are ready, but zero technical implementation exists for affiliate integration.

**Immediate Priority:** Phase 1 (minimal changes) to get ready for network applications.

**Biggest Gaps:**
1. No affiliate link generation code
2. No affiliate URL fields in data model
3. Placeholder CTA buttons (alerts instead of links)
4. No product feed infrastructure

**Estimated Timeline:**
- Phase 1: 1-2 weeks (can apply to networks after this)
- Phase 2: 3-4 weeks (basic links working)
- Phase 3: 6-8 weeks (full feed integration)

---

**Last Updated:** January 2025  
**Next Review:** After Phase 1 completion

