'use client';

import { useState } from 'react';
import SectionHeader from '../../shared/components/SectionHeader';
import FAQList from './FAQList';
import FAQFooter from './FAQFooter';
import { COLORS } from '../../shared/styles/colorThemes';
import { SPACING_PRESETS, getContainerStyles } from '../../shared/styles/spacing';

/**
 * MiniFAQ Component - Orchestrator Pattern
 * 
 * Thin orchestrator that composes sub-components:
 * - FAQHeader: Section title and description
 * - FAQList: Accordion list of FAQ items
 * - FAQFooter: "See All FAQs" button and Mint AI chat prompt
 * 
 * Manages FAQ accordion state (which items are open).
 * 
 * @component MiniFAQ
 */
export default function MiniFAQ() {
  const [openFaqs, setOpenFaqs] = useState<Set<string>>(new Set());

  const toggleFaq = (id: string) => {
    const newOpenFaqs = new Set(openFaqs);
    if (newOpenFaqs.has(id)) {
      newOpenFaqs.delete(id);
    } else {
      newOpenFaqs.add(id);
    }
    setOpenFaqs(newOpenFaqs);
  };

  return (
    <section style={{
      ...SPACING_PRESETS.sectionCompact,
      background: COLORS.backgrounds.whiteToGray,
      borderBottom: `1px solid ${COLORS.neutral.gray200}`
    }}>
      <div style={getContainerStyles()}>
        <SectionHeader
          title="Common Questions, Clear Answers"
          titleGradientFrom={COLORS.neutral.gray800}
          titleGradientTo={COLORS.neutral.gray700}
          subtitle="Get instant answers to your most frequently asked questions"
          subtitleMaxWidth="600px"
        />
        <FAQList openFaqs={openFaqs} onToggle={toggleFaq} />
        <FAQFooter />
      </div>
    </section>
  );
}
