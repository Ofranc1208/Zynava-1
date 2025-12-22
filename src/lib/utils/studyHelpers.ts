import { SUPPLEMENT_STUDIES } from '../content/researchSources'
import { StudyLink } from '../content/studyTypes'

// Central ingredient registry - maps human labels to canonical study keys
// Prevents "looks like it should match, but doesn't" normalization issues
const INGREDIENT_KEY_MAP: Record<string, string> = {
  // Magnesium variants
  'magnesium (as glycinate)': 'magnesium-glycinate',
  'magnesium glycinate': 'magnesium-glycinate',
  'magnesium (glycinate)': 'magnesium-glycinate',
  'magnesium citrate': 'magnesium',
  'magnesium oxide': 'magnesium',
  'magnesium chloride': 'magnesium',
  'magnesium sulfate': 'magnesium',

  // Vitamin D variants
  'vitamin d3 (cholecalciferol)': 'vitamin-d3',
  'vitamin d-3 (cholecalciferol)': 'vitamin-d3',
  'vitamin d3': 'vitamin-d3',
  'vitamin d': 'vitamin-d',
  'cholecalciferol': 'vitamin-d3',

  // Omega-3 variants
  'omega-3 (epa/dha)': 'omega-3',
  'omega-3 fatty acids': 'omega-3-fatty-acids',
  'fish oil': 'omega-3',
  'epa/dha': 'omega-3',
  'epa': 'omega-3',
  'dha': 'omega-3',

  // Ashwagandha variants
  'ashwagandha (ksm-66)': 'ashwagandha',
  'ashwagandha ksm-66': 'ashwagandha',
  'ashwagandha root': 'ashwagandha',
  'withania somnifera': 'ashwagandha',

  // L-Theanine variants
  'l-theanine': 'l-theanine',
  'theanine': 'l-theanine',

  // Probiotics variants
  'probiotics': 'probiotics',
  'lactobacillus': 'probiotics',
  'bifidobacterium': 'probiotics',
  'synbiotics': 'probiotics',
  'prebiotics': 'probiotics',

  // Creatine variants
  'creatine': 'creatine',
  'creatine monohydrate': 'creatine',

  // Antioxidants variants
  'antioxidants': 'antioxidants',
  'vitamin c': 'vitamin-c',
  'vitamin e': 'antioxidants',
  'beta-carotene': 'antioxidants',
  'polyphenols': 'antioxidants',

  // Arginine variants
  'arginine': 'arginine',
  'l-arginine': 'arginine',

  // Vitamin B12 variants
  'vitamin b12': 'vitamin-b12',
  'b12': 'vitamin-b12',
  'cobalamin': 'vitamin-b12',
  'methylcobalamin': 'vitamin-b12',

  // Folate variants
  'folate': 'folate',
  'vitamin b9': 'folate',
  'folic acid': 'folate',
}

// Type-safe filter interface
export interface StudyFilters {
  source: string
  type: string
  yearRange: string
}

export function getStudiesForIngredient(ingredient: string): StudyLink[] {
  // First check the central registry for exact matches
  const registryKey = INGREDIENT_KEY_MAP[ingredient.toLowerCase()]
  if (registryKey) {
    return SUPPLEMENT_STUDIES[registryKey] || []
  }

  // Fallback to slugification for unknown ingredients
  const normalizedKey = ingredient.toLowerCase().replace(/[^a-z0-9-]/g, '-')
  return SUPPLEMENT_STUDIES[normalizedKey] || []
}

export function getStudiesForProduct(ingredients: string[]): StudyLink[] {
  const allStudies: StudyLink[] = []

  ingredients.forEach(ingredient => {
    const studies = getStudiesForIngredient(ingredient)
    allStudies.push(...studies.slice(0, 2)) // Max 2 per ingredient
  })

  // Remove duplicates and limit to 4 total
  const uniqueStudies = allStudies.filter((study, index, self) =>
    index === self.findIndex(s => s.id === study.id)
  )

  return uniqueStudies.slice(0, 4)
}

export function searchStudies(query: string, filters: StudyFilters): StudyLink[] {
  const allStudies = Object.values(SUPPLEMENT_STUDIES).flat()

  return allStudies.filter(study => {
    // Empty query shows all studies (library view), non-empty query filters results
    const matchesQuery = query === '' ||
      study.title.toLowerCase().includes(query.toLowerCase()) ||
      study.educationalNotes?.some(note =>
        note.toLowerCase().includes(query.toLowerCase())
      )

    const matchesSource = !filters.source || study.source === filters.source
    const matchesType = !filters.type || study.type === filters.type

    // Year range filter implementation
    let matchesYear = true
    if (filters.yearRange) {
      switch (filters.yearRange) {
        case '2020-Present':
          matchesYear = study.year >= 2020
          break
        case '2015-2019':
          matchesYear = study.year >= 2015 && study.year <= 2019
          break
        case '2010-2014':
          matchesYear = study.year >= 2010 && study.year <= 2014
          break
        case 'Before 2010':
          matchesYear = study.year < 2010
          break
      }
    }

    return matchesQuery && matchesSource && matchesType && matchesYear
  })
}
