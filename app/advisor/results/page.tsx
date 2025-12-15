'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import type { AdvisorInput } from '@/src/components/advisor/types'

export default function AdvisorResultsPage() {
  const searchParams = useSearchParams()
  const [quizData, setQuizData] = useState<AdvisorInput | null>(null)

  useEffect(() => {
    // Parse URL params into quiz data
    const goals = searchParams.get('goals')?.split(',').filter(Boolean) || []
    const activity = searchParams.get('activity') || ''
    const diet = searchParams.get('diet') || ''
    const concerns = searchParams.get('concerns')?.split(',').filter(Boolean) || []
    const preferences = searchParams.get('preferences')?.split(',').filter(Boolean) || []

    setQuizData({
      goals: goals as any[],
      activityLevel: activity as any,
      diet: diet as any,
      concerns: concerns as any[],
      shoppingPreferences: preferences as any[],
    })
  }, [searchParams])

  if (!quizData) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        fontFamily: 'Inter, sans-serif'
      }}>
        <p>Loading your results...</p>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      padding: '2rem 1rem',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        padding: '2rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
      }}>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 700,
          color: '#1f2937',
          marginBottom: '1rem'
        }}>
          Your Supplement Recommendations
        </h1>
        
        <div style={{
          marginTop: '2rem',
          padding: '1.5rem',
          backgroundColor: '#f9fafb',
          borderRadius: '8px',
          border: '1px solid #e5e7eb'
        }}>
          <h2 style={{
            fontSize: '1.25rem',
            fontWeight: 600,
            color: '#374151',
            marginBottom: '1rem'
          }}>
            Your Preferences
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {quizData.goals.length > 0 && (
              <p><strong>Goals:</strong> {quizData.goals.join(', ')}</p>
            )}
            {quizData.activityLevel && (
              <p><strong>Activity Level:</strong> {quizData.activityLevel}</p>
            )}
            {quizData.diet && (
              <p><strong>Diet:</strong> {quizData.diet}</p>
            )}
            {quizData.concerns.length > 0 && (
              <p><strong>Concerns:</strong> {quizData.concerns.join(', ')}</p>
            )}
            {quizData.shoppingPreferences.length > 0 && (
              <p><strong>Preferences:</strong> {quizData.shoppingPreferences.join(', ')}</p>
            )}
          </div>
        </div>

        <div style={{
          marginTop: '2rem',
          padding: '2rem',
          textAlign: 'center',
          color: '#6b7280'
        }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
            Product recommendations will be displayed here
          </p>
          <p style={{ fontSize: '0.9rem' }}>
            This page will show filtered supplement products based on your quiz answers.
          </p>
        </div>
      </div>
    </div>
  )
}

