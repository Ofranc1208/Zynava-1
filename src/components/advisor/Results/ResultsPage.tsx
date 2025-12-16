'use client'

import React, { useState, useMemo } from 'react'
import styles from './ResultsPage.module.css'
import ResultsControlBar from './ResultsControlBar'
import ResultCard from './ResultCard'
import { ALL_PRODUCTS, type MockResult } from './mockData'
import { rankProductsByZScore, type QuizInput, type ScoredProduct } from './zScoreAlgorithm'

interface QuizParams {
  goals: string
  demographic: string
  activity: string
  diet: string
  concerns: string
  preferences: string
}

interface ResultsPageProps {
  quizParams: QuizParams
}

interface FilterState {
  brand?: string
  priceRange?: 'all' | 'under-15' | '15-30' | 'over-30'
  rating?: 'all' | '4' | '4.5'
}

export default function ResultsPage({ quizParams }: ResultsPageProps) {
  const [resultCount, setResultCount] = useState(5)
  const [sortBy, setSortBy] = useState<'relevance' | 'price-asc' | 'price-desc' | 'rating' | 'value'>('relevance')
  const [filters, setFilters] = useState<FilterState>({})
  
  // Convert quiz params to algorithm input format
  const quizInput: QuizInput = {
    goals: quizParams.goals || 'overall-health',
    demographic: quizParams.demographic || 'male-36-50',
    activity: quizParams.activity || 'active-lifestyle',
    diet: quizParams.diet || 'no-preference',
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
  const dietDisplay = quizParams.diet?.replace(/-/g, ' ') || ''
  const goalDisplay = quizParams.goals?.replace(/-/g, ' ') || 'Overall health'
  
  // Format preferences as chips
  const allPreferences: Array<{ label: string; icon: string }> = [
    ...(dietDisplay ? [{ label: dietDisplay, icon: '✓' }] : []),
    ...preferencesList.map(pref => ({ label: pref.replace(/-/g, ' '), icon: '✓' }))
  ]

  return (
    <div className={styles.resultsContainer}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <h1 className={styles.title}>Z-SCORE™ Supplement Rankings</h1>
          <p className={styles.trustMessage}>
            Personalized from 30,000+ supplements just for you
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
          Our Z-SCORE™ algorithm matched these supplements to your profile based on:
          ingredient quality, dosage effectiveness, demographic safety, dietary compliance,
          and your shopping preferences.
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

