export interface StudyLink {
  id: string
  title: string
  url: string
  source: string // More flexible to accommodate various journals and sources
  type: string // More flexible to accommodate various study types
  year: number
  educationalNotes?: string[]
  abstract?: string
  doi?: string
}

export interface IngredientStudies {
  [ingredientKey: string]: StudyLink[]
}
