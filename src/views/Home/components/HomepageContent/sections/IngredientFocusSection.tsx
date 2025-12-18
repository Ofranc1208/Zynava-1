'use client'

import styles from '../HomepageContent.module.css'

/**
 * IngredientFocusSection - Highlights ingredient-first approach
 */
export default function IngredientFocusSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Ingredient-Focused Guidance</h2>

      <div className={styles.cardAlt}>
        <h3 className={styles.cardTitleMedium}>Why Ingredients Matter More Than Brands</h3>
        <p className={styles.cardTextSpaced}>
          Marketing often matters more than formulation in the supplement industry. Brand prestige and celebrity endorsements don't reflect actual ingredient quality. ZYNAVA inverts this dynamic by focusing entirely on what's inside the bottle.
        </p>
        <p className={styles.cardText}>
          Understanding ingredients transforms supplement shopping from guessing to informed decision-making. You see ingredient forms, doses, and what research tells us about each one. You become a more critical consumer across all your wellness choices.
        </p>
      </div>
    </section>
  )
}

