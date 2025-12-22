import React from 'react'
import { StudyLink } from '@/src/lib/content/studyTypes'
import styles from './StudyCard.module.css'

interface StudyCardProps {
  study: StudyLink
  showAbstract?: boolean
  compact?: boolean
}

export default function StudyCard({ study, showAbstract = false, compact = false }: StudyCardProps) {
  return (
    <a
      href={study.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.studyCard} ${compact ? styles.compact : ''}`}
    >
      <div className={styles.studyHeader}>
        <span className={styles.sourceBadge}>{study.source}</span>
        <span className={styles.studyType}>{study.type.replace('-', ' ')}</span>
        <span className={styles.year}>{study.year}</span>
      </div>

      <h4 className={styles.studyTitle}>{study.title}</h4>

      {study.educationalNotes && (
        <div className={styles.educationalNotes}>
          {study.educationalNotes.slice(0, compact ? 2 : 3).map((note, index) => (
            <span key={index} className={styles.note}>• {note}</span>
          ))}
        </div>
      )}

      {showAbstract && study.abstract && (
        <p className={styles.abstract}>{study.abstract}</p>
      )}

      <span className={styles.externalLink}>Read Study ↗</span>
    </a>
  )
}
