import Link from 'next/link';
import { getBodyStyles, TYPOGRAPHY } from '../../shared/styles/typography';
import { COLORS } from '../../shared/styles/colorThemes';

export default function HeroFooterText() {
  return (
    <p style={{
      ...getBodyStyles('medium', 'regular'),
      color: COLORS.neutral.gray500,
      maxWidth: "500px",
      margin: "0 auto 0 auto"
    }}>
      Get your{' '}
      <Link href="/mint-chat-active?type=calculate&source=main-hero-footer" style={{
        color: COLORS.primary.dark,
        textDecoration: "underline",
        fontWeight: TYPOGRAPHY.fontWeight.medium
      }}>
        instant quote
      </Link>{' '}
      in 2 minutes. <strong>Private, secure, no personal data required.</strong>
    </p>
  );
}

