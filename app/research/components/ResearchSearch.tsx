'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { SUPPLEMENT_STUDIES } from '@/src/lib/content/researchSources'
import styles from '../research.module.css'

interface ResearchSearchProps {
  initialQuery: string
  onSearch: (query: string) => void
}

export default function ResearchSearch({ initialQuery, onSearch }: ResearchSearchProps) {
  const router = useRouter()
  const [query, setQuery] = useState(initialQuery)
  const [suggestions, setSuggestions] = useState<string[]>([])

  const allIngredients = Object.keys(SUPPLEMENT_STUDIES)

  // Memoize search handler to prevent dependency issues
  const triggerSearch = useCallback((searchTerm: string) => {
    if (searchTerm) {
      onSearch(searchTerm)
    }
  }, [onSearch])

  // Auto-search when initialQuery changes (coming from product card)
  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery)
      triggerSearch(initialQuery)
    }
  }, [initialQuery, triggerSearch])

  const handleInputChange = (value: string) => {
    setQuery(value)

    if (value.length > 1) {
      const matches = allIngredients
        .filter(ingredient =>
          ingredient.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 6)
      setSuggestions(matches)
    } else {
      setSuggestions([])
    }
  }

  const handleFindMore = () => {
    if (query) {
      onSearch(query)
      router.replace(`/research?q=${encodeURIComponent(query)}`)
      setSuggestions([])
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleFindMore()
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion)
    onSearch(suggestion)
    router.replace(`/research?q=${encodeURIComponent(suggestion)}`)
    setSuggestions([])
  }

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchInputContainer}>
        <label htmlFor="research-search" className={styles.searchLabel}>
          Search Supplement Studies
        </label>
        <input
          id="research-search"
          name="research-search"
          type="text"
          placeholder="Type ingredient to find studies..."
          value={query}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyDown={handleKeyDown}
          className={styles.searchInput}
          autoComplete="off"
        />
        <button onClick={handleFindMore} className={styles.searchButton}>
          Find More
        </button>
      </div>

      {suggestions.length > 0 && (
        <div className={styles.suggestions}>
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className={styles.suggestionItem}
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
