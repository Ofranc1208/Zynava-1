import Link from 'next/link';
import Image from 'next/image';
import { COLORS } from '../../shared/styles/colorThemes';
import { BORDER_RADIUS } from '../../shared/styles/cardStyles';
import { SPACING } from '../../shared/styles/spacing';
import { getBodyStyles } from '../../shared/styles/typography';

export default function FAQFooter() {
  return (
    <div style={{ 
      textAlign: "center", 
      marginTop: SPACING.stack.xxl 
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: SPACING.grid.standard
      }}>
        <Link href="/faqs" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: SPACING.inline.sm,
          padding: `${SPACING.unit.md} ${SPACING.card.standard}`,
          background: COLORS.primary.gradientLight,
          color: COLORS.text.white,
          textDecoration: "none",
          borderRadius: BORDER_RADIUS.medium,
          fontWeight: "600",
          fontSize: "1rem",
          transition: "all 0.3s ease",
          boxShadow: `0 4px 12px ${COLORS.shadows.green}`,
          minWidth: "200px",
          justifyContent: "center"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = `0 8px 24px ${COLORS.shadows.green}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = `0 4px 12px ${COLORS.shadows.green}`;
        }}>
          See All FAQs
          <span style={{ fontSize: "1.2rem" }}>→</span>
        </Link>
        
        <div style={{
          width: "100%",
          maxWidth: "500px",
          padding: SPACING.card.compact,
          background: COLORS.backgrounds.greenLighter,
          borderRadius: BORDER_RADIUS.medium,
          border: `1px solid ${COLORS.borders.green}`,
          margin: "0 auto"
        }}>
          <p style={{
            margin: "0",
            ...getBodyStyles('medium', 'medium'),
            color: COLORS.primary.main,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: SPACING.inline.sm,
            flexWrap: "wrap",
            textAlign: "center"
          }}>
            <Image
              src="/assets/images/mint-mascot.png"
              alt="Mint AI"
              width={30}
              height={30}
              style={{ display: 'inline-block', flexShrink: "0" }}
            />
            <span>Still have questions? <strong>Chat with Mint AI</strong> for instant help 24/7!</span>
          </p>
        </div>
      </div>
    </div>
  );
}

