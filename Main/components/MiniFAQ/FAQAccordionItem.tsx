import { createFAQHover } from '../../shared/styles/hoverEffects';
import { TEXT_PRESETS } from '../../shared/styles/typography';
import { COLORS } from '../../shared/styles/colorThemes';
import { BORDER_RADIUS } from '../../shared/styles/cardStyles';
import { SPACING } from '../../shared/styles/spacing';

interface FAQAccordionItemProps {
  faq: {
    id: string;
    question: string;
    answer: string;
  };
  isOpen: boolean;
  onToggle: (id: string) => void;
  isLastItem: boolean;
}

export default function FAQAccordionItem({ faq, isOpen, onToggle, isLastItem }: FAQAccordionItemProps) {
  return (
    <div style={{
      borderBottom: !isLastItem ? "1px solid #f3f4f6" : "none"
    }}>
      <button
        onClick={() => onToggle(faq.id)}
        style={{
          width: "100%",
          padding: SPACING.card.standard,
          background: "transparent",
          border: "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          transition: "all 0.3s ease",
          textAlign: "left"
        }}
        {...createFAQHover()}
      >
        <h5 style={{
          margin: "0",
          ...TEXT_PRESETS.faqQuestion,
          color: COLORS.text.primary,
          flex: "1",
          paddingRight: "1rem"
        }}>
          {faq.question}
        </h5>
        <div style={{
          width: "24px",
          height: "24px",
          borderRadius: BORDER_RADIUS.circle,
          background: COLORS.primary.gradientLight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: COLORS.text.white,
          fontSize: "1rem",
          fontWeight: "600",
          transition: "transform 0.3s ease",
          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          flexShrink: "0"
        }}>
          {isOpen ? "−" : "+"}
        </div>
      </button>
      
      {isOpen && (
        <div style={{
          padding: `0 ${SPACING.card.standard} ${SPACING.card.standard}`,
          background: COLORS.backgrounds.lightGray,
          borderTop: `1px solid ${COLORS.neutral.gray100}`
        }}>
          <div style={{
            ...TEXT_PRESETS.faqAnswer,
            color: COLORS.text.secondary
          }}>
            {faq.answer}
          </div>
        </div>
      )}
    </div>
  );
}

