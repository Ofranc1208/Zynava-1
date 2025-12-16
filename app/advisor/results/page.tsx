'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import ResultsPage from '@/src/components/advisor/Results/ResultsPage'

function ResultsContent() {
  const searchParams = useSearchParams()
  
  // Extract quiz params from URL
  const quizParams = {
    goals: searchParams.get('goals') || '',
    demographic: searchParams.get('demographic') || '',
    activity: searchParams.get('activity') || '',
    diet: searchParams.get('diet') || '',
    concerns: searchParams.get('concerns') || '',
    preferences: searchParams.get('preferences') || '',
  }

  return <ResultsPage quizParams={quizParams} />
}

export default function AdvisorResultsPage() {
  return (
    <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading your picks...</div>}>
      <ResultsContent />
    </Suspense>
  )
}

