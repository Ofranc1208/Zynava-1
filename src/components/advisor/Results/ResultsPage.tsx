'use client'

import React, { useState, useMemo } from 'react'
import styles from './ResultsPage.module.css'
import ResultsControlBar from './ResultsControlBar'
import ResultCard from './ResultCard'
import { ComplianceBadge } from '@/src/components/shared/ComplianceBadge'
import { AffiliateDisclosure } from '@/src/components/shared/AffiliateDisclosure'
import { ALL_PRODUCTS } from './mockData'
import { rankProductsByZScore } from './zScoreAlgorithm'
import type { QuizParams, FilterState, SortBy, QuizInput, ScoredProduct } from './types'
import { DEFAULT_RESULT_COUNT, DEFAULT_SORT } from './constants'

/**
 * Props for the ResultsPage component.
 */
interface ResultsPageProps {
  quizParams: QuizParams
}

/**
 * ResultsPage - Main results display component
 * 
 * Displays personalized supplement recommendations based on the Z-SCORE™ algorithm.
 * Handles filtering, sorting, and pagination of results.
 * 
 * Features:
 * - Z-SCORE ranked product grid
 * - Filter by brand, price range, rating
 * - Sort by relevance, price, rating, or value
 * - Responsive 2-4 column grid layout
 * - Preference chips showing user selections
 * 
 * @param props - Component props containing quiz parameters
 * @returns The ResultsPage component
 */
export default function ResultsPage({ quizParams }: ResultsPageProps) {
  const [resultCount, setResultCount] = useState(DEFAULT_RESULT_COUNT)
  const [sortBy, setSortBy] = useState<SortBy>(DEFAULT_SORT)
  const [filters, setFilters] = useState<FilterState>({})
  
  // Convert quiz params to algorithm input format
  // Note: diet param is comma-separated string from URL, convert to array
  const dietPreferencesArray = quizParams.diet 
    ? quizParams.diet.split(',').filter(Boolean) 
    : ['no-preference']
  
  const quizInput: QuizInput = {
    goals: quizParams.goals || 'overall-health',
    demographic: quizParams.demographic || 'male-36-50',
    activity: quizParams.activity || 'active-lifestyle',
    dietPreferences: dietPreferencesArray,
    concerns: quizParams.concerns || 'none',
    preferences: quizParams.preferences || '',
  }
  
  // Get Z-SCORE ranked results
  const allResults = useMemo(() => {
    return rankProductsByZScore(ALL_PRODUCTS as ScoredProduct[], quizInput)
  }, [quizParams.goals, quizParams.demographic, quizParams.activity, quizParams.diet, quizParams.concerns])
  
  // Apply filters
  const filteredResults = useMemo(() => {
    let results = [...allResults]
    
    // Filter by brand
    if (filters.brand) {
      results = results.filter(r => r.brand === filters.brand)
    }
    
    // Filter by price range
    if (filters.priceRange && filters.priceRange !== 'all') {
      results = results.filter(r => {
        const price = parseFloat(r.price)
        switch (filters.priceRange) {
          case 'under-15':
            return price < 15
          case '15-30':
            return price >= 15 && price <= 30
          case 'over-30':
            return price > 30
          default:
            return true
        }
      })
    }
    
    // Filter by rating
    if (filters.rating && filters.rating !== 'all') {
      results = results.filter(r => r.rating >= parseFloat(filters.rating!))
    }
    
    // Apply sorting
    const sorted = [...results]
    switch (sortBy) {
      case 'price-asc':
        sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
        break
      case 'price-desc':
        sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
        break
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating)
        break
      case 'value':
        sorted.sort((a, b) => (b.rating / parseFloat(b.price)) - (a.rating / parseFloat(a.price)))
        break
      case 'relevance':
      default:
        // Keep original order
    }
    
    // Limit by result count
    return sorted.slice(0, resultCount)
  }, [allResults, resultCount, sortBy, filters])
  
  const results = filteredResults
  
  // Parse preferences for display
  const preferencesList = quizParams.preferences.split(',').filter(Boolean)
  // Convert diet preferences array to display format
  const dietDisplayList = dietPreferencesArray
    .filter(d => d !== 'no-preference')
    .map(d => d.replace(/-/g, ' '))
  const goalDisplay = quizParams.goals?.replace(/-/g, ' ') || 'Overall health'
  
  // Format preferences as chips
  const allPreferences: Array<{ label: string; icon: string }> = [
    ...dietDisplayList.map(diet => ({ label: diet, icon: '✓' })),
    ...preferencesList.map(pref => ({ label: pref.replace(/-/g, ' '), icon: '✓' }))
  ]

  return (
    <div className={styles.resultsContainer}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <h1 className={styles.title}>Z-SCORE™ Quality & Safety Rankings</h1>
          <p className={styles.trustMessage}>
            Quality-filtered from 30,000+ supplements based on your profile
          </p>
        </div>
        
        <div className={styles.preferencesChips}>
          {allPreferences.map((pref, idx) => (
            <span key={idx} className={styles.chip}>
              {pref.icon} {pref.label}
            </span>
          ))}
        </div>
      </div>

      {/* Compact Control Bar */}
      <ResultsControlBar 
        resultCount={resultCount}
        onResultCountChange={setResultCount}
        sortBy={sortBy}
        onSortChange={setSortBy}
        filters={filters}
        onFiltersChange={setFilters}
      />

      {/* Affiliate Disclosure */}
      <AffiliateDisclosure />

      {/* Compliance Badge */}
      <ComplianceBadge />

      {/* Results Grid */}
      <div className={styles.resultsGrid}>
        {results.length > 0 ? (
          results.map((result, index) => (
            <ResultCard 
              key={result.id} 
              product={result} 
              isTopMatch={index === 0}
            />
          ))
        ) : (
          <div className={styles.emptyState}>
            <p>No products found matching your preferences.</p>
            <a href="/" className={styles.retryButton}>
              Start New Search
            </a>
          </div>
        )}
      </div>

      {/* Why These Picks */}
      <div className={styles.whySection}>
        <h3>Why these picks?</h3>
        <p>
          Our Z-SCORE™ Quality and Safety algorithm matched these supplements to your profile based on:
          ingredient purity, third-party testing, brand reputation, demographic appropriateness,
          dietary compliance, and your wellness preferences.
        </p>
        <p style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '0.5rem', fontStyle: 'italic' }}>
          Note: Consult a healthcare provider to determine appropriate dosages for your individual needs.
        </p>
      </div>

      {/* Actions */}
      <div className={styles.actions}>
        <a href="/" className={styles.secondaryButton}>
          ← Back to Home
        </a>
        <button 
          className={styles.primaryButton}
          onClick={() => window.history.back()}
        >
          Edit My Preferences
        </button>
      </div>
    </div>
  )
}

