'use client'

import styles from './ChatBubble.module.css'

interface ChatBubbleProps {
  message: React.ReactNode
  sender: 'advisor' | 'user'
  timestamp: Date
}

export default function ChatBubble({ message, sender, timestamp }: ChatBubbleProps) {
  return (
    <div className={`${styles.bubble} ${styles[sender]}`}>
      <div className={styles.messageContent}>
        {message}
      </div>
      <div className={styles.timestamp}>
        {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  )
}

