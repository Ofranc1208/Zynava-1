import { TEXT_PRESETS } from '../../shared/styles/typography';
import { COLORS } from '../../shared/styles/colorThemes';

export default function HeroHeading() {
  return (
    <>
      <h1 id="hero-heading" style={{
        ...TEXT_PRESETS.heroTitle,
        color: COLORS.primary.dark,
        marginBottom: "1rem"
      }}>
        Curious What Your Future Payments Are Worth Today?
      </h1>
      
      <p style={{
        ...TEXT_PRESETS.heroSubtitle,
        color: COLORS.neutral.gray700,
        maxWidth: "600px",
        margin: "0 auto 1.5rem"
      }}>
        Discover how a <strong>Court-Approved Process</strong> with zero upfront costs may help you turn future payments into a lump sum payout <strong>do it yourself</strong> in seconds.
      </p>
    </>
  );
}

