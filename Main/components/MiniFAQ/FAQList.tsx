import FAQAccordionItem from './FAQAccordionItem';
import { miniFAQData } from '../../data/miniFAQData';
import { COLORS } from '../../shared/styles/colorThemes';
import { BORDER_RADIUS, BOX_SHADOWS } from '../../shared/styles/cardStyles';

interface FAQListProps {
  openFaqs: Set<string>;
  onToggle: (id: string) => void;
}

export default function FAQList({ openFaqs, onToggle }: FAQListProps) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "800px"
      }}>
        <div style={{
          background: COLORS.backgrounds.white,
          borderRadius: BORDER_RADIUS.xlarge,
          boxShadow: BOX_SHADOWS.large,
          border: `1px solid ${COLORS.neutral.gray200}`,
          overflow: "hidden"
        }}>
          {miniFAQData.map((faq, index) => (
            <FAQAccordionItem
              key={faq.id}
              faq={faq}
              isOpen={openFaqs.has(faq.id)}
              onToggle={onToggle}
              isLastItem={index === miniFAQData.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

