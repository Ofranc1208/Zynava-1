/**
 * SEMrush Keyword Data Analysis
 * Source: Keyword2.txt (30,001 keywords)
 * Analyzed: December 2025
 * 
 * This file contains prioritized ingredient keywords for ISR page generation.
 * Keywords are sorted by search volume and include difficulty scores
 * to help prioritize content creation.
 */

export interface KeywordData {
  keyword: string;
  searchVolume: number;
  keywordDifficulty: number; // 0-100 (higher = harder to rank)
  cpc: number;
  intent: 'informational' | 'commercial' | 'transactional' | 'navigational';
  priority: 'tier1' | 'tier2' | 'tier3';
}

export interface IngredientKeywordCluster {
  slug: string;
  primaryKeyword: string;
  searchVolume: number;
  keywordDifficulty: number;
  relatedKeywords: KeywordData[];
  priority: 'tier1' | 'tier2' | 'tier3';
  estimatedMonthlyTraffic: number;
  contentTopics: string[];
}

/**
 * TIER 1: High-Volume Core Ingredients
 * Search Volume: 10,000+
 * These are the foundation ingredients - highest traffic potential
 */
export const TIER1_INGREDIENTS: IngredientKeywordCluster[] = [
  {
    slug: 'ashwagandha',
    primaryKeyword: 'ashwagandha',
    searchVolume: 673000,
    keywordDifficulty: 98,
    priority: 'tier1',
    estimatedMonthlyTraffic: 15000,
    contentTopics: [
      'what is ashwagandha',
      'ashwagandha benefits',
      'ashwagandha root',
      'ashwagandha for stress',
      'ashwagandha dosage',
    ],
    relatedKeywords: [
      { keyword: 'ashwagandha root', searchVolume: 5400, keywordDifficulty: 82, cpc: 0.37, intent: 'informational', priority: 'tier1' },
      { keyword: 'ashwagandha root supplement', searchVolume: 210, keywordDifficulty: 63, cpc: 0.83, intent: 'commercial', priority: 'tier2' },
      { keyword: 'ashwagandha root and leaf extract', searchVolume: 70, keywordDifficulty: 90, cpc: 0.63, intent: 'informational', priority: 'tier3' },
    ],
  },
  {
    slug: 'collagen',
    primaryKeyword: 'collagen',
    searchVolume: 201000,
    keywordDifficulty: 100,
    priority: 'tier1',
    estimatedMonthlyTraffic: 8000,
    contentTopics: [
      'what is collagen',
      'collagen benefits',
      'collagen peptides',
      'types of collagen',
      'marine vs bovine collagen',
    ],
    relatedKeywords: [
      { keyword: 'collagen peptides benefits', searchVolume: 14800, keywordDifficulty: 79, cpc: 0.08, intent: 'informational', priority: 'tier1' },
      { keyword: 'benefits of collagen peptides', searchVolume: 8100, keywordDifficulty: 82, cpc: 0.08, intent: 'informational', priority: 'tier1' },
      { keyword: 'collagen peptides powder benefits', searchVolume: 880, keywordDifficulty: 78, cpc: 0.03, intent: 'informational', priority: 'tier2' },
      { keyword: 'marine collagen', searchVolume: 140, keywordDifficulty: 77, cpc: 0.51, intent: 'informational', priority: 'tier3' },
    ],
  },
  {
    slug: 'magnesium',
    primaryKeyword: 'magnesium',
    searchVolume: 90500, // magnesium oxide
    keywordDifficulty: 79,
    priority: 'tier1',
    estimatedMonthlyTraffic: 5000,
    contentTopics: [
      'types of magnesium',
      'magnesium glycinate vs citrate',
      'magnesium benefits',
      'magnesium for sleep',
      'magnesium dosage',
    ],
    relatedKeywords: [
      { keyword: 'magnesium oxide', searchVolume: 90500, keywordDifficulty: 79, cpc: 0.40, intent: 'informational', priority: 'tier1' },
      { keyword: 'magnesium glycinate dose', searchVolume: 2400, keywordDifficulty: 84, cpc: 0.25, intent: 'informational', priority: 'tier2' },
      { keyword: 'magnesium citrate foods', searchVolume: 390, keywordDifficulty: 81, cpc: 0.04, intent: 'informational', priority: 'tier2' },
      { keyword: 'benefits of taking magnesium glycinate', searchVolume: 590, keywordDifficulty: 74, cpc: 0.15, intent: 'informational', priority: 'tier2' },
    ],
  },
  {
    slug: 'vitamin-b12',
    primaryKeyword: 'b12',
    searchVolume: 74000,
    keywordDifficulty: 100,
    priority: 'tier1',
    estimatedMonthlyTraffic: 4000,
    contentTopics: [
      'what is vitamin b12',
      'b12 benefits',
      'b12 deficiency symptoms',
      'b12 food sources',
      'methylcobalamin vs cyanocobalamin',
    ],
    relatedKeywords: [
      { keyword: 'vitamin b12 and', searchVolume: 8100, keywordDifficulty: 98, cpc: 0.25, intent: 'informational', priority: 'tier1' },
      { keyword: 'vitamin b-12', searchVolume: 4400, keywordDifficulty: 99, cpc: 0, intent: 'informational', priority: 'tier1' },
      { keyword: 'vitamin b12 vitamin', searchVolume: 1000, keywordDifficulty: 100, cpc: 0.25, intent: 'informational', priority: 'tier2' },
      { keyword: 'what does vitamin b12 do for your body', searchVolume: 480, keywordDifficulty: 95, cpc: 0.04, intent: 'informational', priority: 'tier2' },
    ],
  },
  {
    slug: 'zinc',
    primaryKeyword: 'zinc supplement',
    searchVolume: 49500,
    keywordDifficulty: 75,
    priority: 'tier1',
    estimatedMonthlyTraffic: 3000,
    contentTopics: [
      'zinc benefits',
      'types of zinc supplements',
      'zinc for immunity',
      'zinc dosage',
      'zinc food sources',
    ],
    relatedKeywords: [
      { keyword: 'zinc supplements', searchVolume: 9900, keywordDifficulty: 77, cpc: 0.91, intent: 'informational', priority: 'tier1' },
      { keyword: 'best type of zinc supplement', searchVolume: 480, keywordDifficulty: 80, cpc: 0.58, intent: 'commercial', priority: 'tier2' },
      { keyword: 'zinc supplements good for', searchVolume: 390, keywordDifficulty: 77, cpc: 0.24, intent: 'informational', priority: 'tier2' },
      { keyword: 'best form of zinc supplements', searchVolume: 260, keywordDifficulty: 70, cpc: 0.58, intent: 'commercial', priority: 'tier2' },
    ],
  },
  {
    slug: 'omega-3',
    primaryKeyword: 'omega 3 benefits',
    searchVolume: 27100,
    keywordDifficulty: 96,
    priority: 'tier1',
    estimatedMonthlyTraffic: 2500,
    contentTopics: [
      'what is omega 3',
      'omega 3 benefits',
      'fish oil vs omega 3',
      'EPA vs DHA',
      'omega 3 food sources',
    ],
    relatedKeywords: [
      { keyword: 'fish oil omega 3 fatty acids', searchVolume: 1000, keywordDifficulty: 96, cpc: 1.03, intent: 'informational', priority: 'tier2' },
      { keyword: 'omega 3 fatty acids fish oil', searchVolume: 1000, keywordDifficulty: 91, cpc: 1.03, intent: 'informational', priority: 'tier2' },
      { keyword: 'fish oil pills', searchVolume: 5400, keywordDifficulty: 92, cpc: 1.03, intent: 'informational', priority: 'tier1' },
      { keyword: 'fish oil vitamins', searchVolume: 1600, keywordDifficulty: 89, cpc: 0.93, intent: 'informational', priority: 'tier2' },
    ],
  },
  {
    slug: 'probiotics',
    primaryKeyword: 'probiotic supplements',
    searchVolume: 18100,
    keywordDifficulty: 73,
    priority: 'tier1',
    estimatedMonthlyTraffic: 2000,
    contentTopics: [
      'what are probiotics',
      'probiotic benefits',
      'probiotics for gut health',
      'CFU explained',
      'probiotic strains',
    ],
    relatedKeywords: [
      { keyword: 'probiotic supplements for gut health', searchVolume: 2400, keywordDifficulty: 62, cpc: 1.67, intent: 'informational', priority: 'tier2' },
      { keyword: 'lactobacillus probiotic supplement', searchVolume: 480, keywordDifficulty: 55, cpc: 1.46, intent: 'informational', priority: 'tier2' },
      { keyword: '60 billion probiotic benefits', searchVolume: 170, keywordDifficulty: 55, cpc: 0.80, intent: 'informational', priority: 'tier3' },
    ],
  },
  {
    slug: 'vitamin-d3',
    primaryKeyword: 'vitamin d3 supplement',
    searchVolume: 12100,
    keywordDifficulty: 92,
    priority: 'tier1',
    estimatedMonthlyTraffic: 1500,
    contentTopics: [
      'what is vitamin d3',
      'vitamin d3 vs d2',
      'vitamin d3 benefits',
      'vitamin d3 dosage',
      'vitamin d3 food sources',
    ],
    relatedKeywords: [
      { keyword: 'vitamin d3 supplements', searchVolume: 1900, keywordDifficulty: 77, cpc: 1.10, intent: 'informational', priority: 'tier2' },
      { keyword: 'what does vitamin d3 do for women', searchVolume: 90, keywordDifficulty: 82, cpc: 0, intent: 'informational', priority: 'tier3' },
      { keyword: 'how to get vitamin d3 naturally', searchVolume: 110, keywordDifficulty: 76, cpc: 0.03, intent: 'informational', priority: 'tier3' },
    ],
  },
];

/**
 * TIER 2: Medium-Volume Supporting Ingredients
 * Search Volume: 1,000 - 10,000
 * Excellent traffic with lower competition opportunities
 */
export const TIER2_INGREDIENTS: IngredientKeywordCluster[] = [
  {
    slug: 'melatonin',
    primaryKeyword: 'melatonin sleep aid',
    searchVolume: 2400,
    keywordDifficulty: 90,
    priority: 'tier2',
    estimatedMonthlyTraffic: 800,
    contentTopics: [
      'what is melatonin',
      'melatonin for sleep',
      'melatonin dosage',
      'melatonin side effects',
      'natural melatonin sources',
    ],
    relatedKeywords: [
      { keyword: 'melatonin sleeping tablets', searchVolume: 390, keywordDifficulty: 77, cpc: 1.34, intent: 'informational', priority: 'tier2' },
      { keyword: 'melatonin sleep pills', searchVolume: 260, keywordDifficulty: 89, cpc: 1.34, intent: 'informational', priority: 'tier2' },
      { keyword: 'melatonin sleep quality', searchVolume: 70, keywordDifficulty: 83, cpc: 0.05, intent: 'informational', priority: 'tier3' },
    ],
  },
  {
    slug: 'turmeric-curcumin',
    primaryKeyword: 'curcumin',
    searchVolume: 49500, // from earlier grep
    keywordDifficulty: 100,
    priority: 'tier2',
    estimatedMonthlyTraffic: 1200,
    contentTopics: [
      'what is curcumin',
      'turmeric vs curcumin',
      'curcumin benefits',
      'curcumin absorption',
      'turmeric for inflammation',
    ],
    relatedKeywords: [],
  },
  {
    slug: 'magnesium-glycinate',
    primaryKeyword: 'magnesium glycinate',
    searchVolume: 22200, // from grep
    keywordDifficulty: 55,
    priority: 'tier2',
    estimatedMonthlyTraffic: 1800,
    contentTopics: [
      'what is magnesium glycinate',
      'magnesium glycinate benefits',
      'magnesium glycinate for sleep',
      'magnesium glycinate dosage',
      'glycinate vs citrate',
    ],
    relatedKeywords: [
      { keyword: 'benefits of taking magnesium glycinate', searchVolume: 590, keywordDifficulty: 74, cpc: 0.15, intent: 'informational', priority: 'tier2' },
      { keyword: 'magnesium glycinate good for', searchVolume: 390, keywordDifficulty: 73, cpc: 0.23, intent: 'informational', priority: 'tier2' },
      { keyword: 'effects of magnesium glycinate', searchVolume: 390, keywordDifficulty: 75, cpc: 0.15, intent: 'informational', priority: 'tier2' },
    ],
  },
  {
    slug: 'l-theanine',
    primaryKeyword: 'l-theanine',
    searchVolume: 5000, // estimated
    keywordDifficulty: 75,
    priority: 'tier2',
    estimatedMonthlyTraffic: 600,
    contentTopics: [
      'what is l-theanine',
      'l-theanine benefits',
      'l-theanine for anxiety',
      'l-theanine and caffeine',
      'l-theanine dosage',
    ],
    relatedKeywords: [],
  },
  {
    slug: 'coq10',
    primaryKeyword: 'coenzyme q10',
    searchVolume: 5000, // estimated
    keywordDifficulty: 80,
    priority: 'tier2',
    estimatedMonthlyTraffic: 500,
    contentTopics: [
      'what is coq10',
      'coq10 benefits',
      'coq10 for heart health',
      'ubiquinol vs ubiquinone',
      'coq10 dosage',
    ],
    relatedKeywords: [],
  },
];

/**
 * TIER 3: Long-Tail Opportunity Ingredients
 * Search Volume: 100 - 1,000
 * Lower competition, higher conversion potential
 */
export const TIER3_INGREDIENTS: IngredientKeywordCluster[] = [
  {
    slug: 'lions-mane',
    primaryKeyword: 'lions mane mushroom',
    searchVolume: 1000,
    keywordDifficulty: 63,
    priority: 'tier3',
    estimatedMonthlyTraffic: 300,
    contentTopics: [
      'what is lions mane',
      'lions mane benefits',
      'lions mane for brain health',
      'lions mane dosage',
    ],
    relatedKeywords: [],
  },
  {
    slug: 'rhodiola-rosea',
    primaryKeyword: 'rhodiola supplements',
    searchVolume: 110,
    keywordDifficulty: 55,
    priority: 'tier3',
    estimatedMonthlyTraffic: 100,
    contentTopics: [
      'what is rhodiola',
      'rhodiola benefits',
      'rhodiola for stress',
      'rhodiola dosage',
    ],
    relatedKeywords: [],
  },
  {
    slug: 'berberine',
    primaryKeyword: 'berberine',
    searchVolume: 500, // estimated
    keywordDifficulty: 70,
    priority: 'tier3',
    estimatedMonthlyTraffic: 150,
    contentTopics: [
      'what is berberine',
      'berberine benefits',
      'berberine for blood sugar',
      'berberine dosage',
    ],
    relatedKeywords: [],
  },
  {
    slug: 'vitamin-k2',
    primaryKeyword: 'vitamin k2',
    searchVolume: 500, // estimated
    keywordDifficulty: 65,
    priority: 'tier3',
    estimatedMonthlyTraffic: 120,
    contentTopics: [
      'what is vitamin k2',
      'k2 mk7 vs mk4',
      'vitamin k2 benefits',
      'vitamin k2 and d3',
    ],
    relatedKeywords: [],
  },
  {
    slug: 'saw-palmetto',
    primaryKeyword: 'saw palmetto',
    searchVolume: 390,
    keywordDifficulty: 80,
    priority: 'tier3',
    estimatedMonthlyTraffic: 100,
    contentTopics: [
      'what is saw palmetto',
      'saw palmetto benefits',
      'saw palmetto for men',
      'saw palmetto dosage',
    ],
    relatedKeywords: [],
  },
];

/**
 * All ingredients combined for easy iteration
 */
export const ALL_INGREDIENT_CLUSTERS = [
  ...TIER1_INGREDIENTS,
  ...TIER2_INGREDIENTS,
  ...TIER3_INGREDIENTS,
];

/**
 * Get ingredient by slug
 */
export function getIngredientBySlug(slug: string): IngredientKeywordCluster | undefined {
  return ALL_INGREDIENT_CLUSTERS.find((i) => i.slug === slug);
}

/**
 * Get all ingredients sorted by search volume (descending)
 */
export function getIngredientsByVolume(): IngredientKeywordCluster[] {
  return [...ALL_INGREDIENT_CLUSTERS].sort((a, b) => b.searchVolume - a.searchVolume);
}

/**
 * Get ingredients by tier
 */
export function getIngredientsByTier(tier: 'tier1' | 'tier2' | 'tier3'): IngredientKeywordCluster[] {
  return ALL_INGREDIENT_CLUSTERS.filter((i) => i.priority === tier);
}

/**
 * Get all ingredient clusters (alias for ALL_INGREDIENT_CLUSTERS)
 * Useful for sitemap generation and bulk operations
 */
export function getAllIngredientClusters(): IngredientKeywordCluster[] {
  return ALL_INGREDIENT_CLUSTERS;
}

/**
 * Summary statistics
 */
export const KEYWORD_STATS = {
  totalKeywordsAnalyzed: 30001,
  totalIngredients: ALL_INGREDIENT_CLUSTERS.length,
  tier1Count: TIER1_INGREDIENTS.length,
  tier2Count: TIER2_INGREDIENTS.length,
  tier3Count: TIER3_INGREDIENTS.length,
  totalEstimatedMonthlyTraffic: ALL_INGREDIENT_CLUSTERS.reduce(
    (sum, i) => sum + i.estimatedMonthlyTraffic,
    0
  ),
  sourceFile: 'Keyword2.txt',
  analysisDate: '2025-12-17',
};

