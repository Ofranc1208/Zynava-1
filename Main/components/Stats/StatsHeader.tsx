import { getHeadingStyles } from '../../shared/styles/typography';
import { COLORS } from '../../shared/styles/colorThemes';

export default function StatsHeader() {
  return (
    <h2 style={{ 
      ...getHeadingStyles('h3'),
      color: COLORS.primary.dark,
      marginBottom: "2.5rem",
      textAlign: "center"
    }}>
      Trusted Nationwide
    </h2>
  );
}

