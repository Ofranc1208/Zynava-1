import Link from 'next/link';
import Image from 'next/image';
import { createFloatHover } from '../../shared/styles/hoverEffects';
import { TEXT_PRESETS, ICON_SIZES, TYPOGRAPHY } from '../../shared/styles/typography';
import { COLORS } from '../../shared/styles/colorThemes';
import { BORDER_RADIUS, BOX_SHADOWS } from '../../shared/styles/cardStyles';
import { SPACING } from '../../shared/styles/spacing';

interface MintAIFeaturedCardProps {
  isMobile: boolean;
}

export default function MintAIFeaturedCard({ isMobile }: MintAIFeaturedCardProps) {
  return (
    <div style={{ marginBottom: SPACING.stack.xxl }}>
      <Link href="/mint-intelligent-chat?chat=open&feature=calculator" style={{ textDecoration: "none", color: "inherit" }}>
        <div style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
          borderRadius: BORDER_RADIUS.xlarge,
          padding: SPACING.card.standard,
          boxShadow: BOX_SHADOWS.medium,
          border: `1px solid ${COLORS.neutral.gray200}`,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          gap: isMobile ? SPACING.grid.standard : SPACING.grid.comfortable,
          textAlign: "center",
          transition: "all 0.3s ease",
          cursor: "pointer",
          position: "relative",
          overflow: "hidden"
        }}
        {...createFloatHover({
          translateY: -4,
          scale: 1,
          shadowColor: COLORS.shadows.blue,
          shadowSize: '0 12px 32px',
          borderColor: COLORS.accent.blue
        })}>
          
          <div style={{
            width: ICON_SIZES.large,
            height: ICON_SIZES.large,
            borderRadius: BORDER_RADIUS.large,
            background: COLORS.backgrounds.blueLight,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `2px solid ${COLORS.borders.blue}`,
            flexShrink: 0,
            position: "relative"
          }}>
            <Image
              src="/assets/images/mint-mascot.png"
              alt="Mint AI Assistant"
              width={40}
              height={40}
              style={{ display: 'inline-block' }}
            />
          </div>
          
          <div style={{ flex: 1, maxWidth: "400px" }}>
            <div style={{
              display: "inline-block",
              background: COLORS.titleGradients.grayToBlue,
              color: COLORS.text.white,
              padding: `${SPACING.unit.xxs} ${SPACING.unit.sm}`,
              borderRadius: BORDER_RADIUS.small,
              fontSize: "0.75rem",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: SPACING.unit.sm
            }}>
              🔥 FEATURED AI TOOL
            </div>
            <h3 style={{
              ...TEXT_PRESETS.cardTitle,
              color: COLORS.text.primary,
              marginBottom: "0.5rem"
            }}>
              Chat with Mint AI Assistant
            </h3>
            <p style={{
              ...TEXT_PRESETS.cardText,
              color: COLORS.text.secondary,
              margin: 0
            }}>
              Get instant answers about your settlement, legal requirements, and personalized guidance from our industry-first AI assistant.
            </p>
          </div>
          
          <div style={{
            width: "40px",
            height: "40px",
            borderRadius: BORDER_RADIUS.small,
            background: COLORS.titleGradients.grayToBlue,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: COLORS.text.white,
            fontSize: TYPOGRAPHY.fontSize.heading.h5,
            flexShrink: 0,
            transition: "transform 0.3s ease",
            boxShadow: `0 4px 12px ${COLORS.shadows.blueLight}`
          }}>
            →
          </div>
        </div>
      </Link>
    </div>
  );
}

