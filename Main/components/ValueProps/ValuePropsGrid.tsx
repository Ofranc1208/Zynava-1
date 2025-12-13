import ValuePropCard from './ValuePropCard';
import { SPACING } from '../../shared/styles/spacing';

interface ValuePropsGridProps {
  isMounted: boolean;
  gridColumns: string;
}

export default function ValuePropsGrid({ isMounted, gridColumns }: ValuePropsGridProps) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: isMounted ? gridColumns : "1fr",
      gap: SPACING.grid.spacious,
      alignItems: "stretch"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: SPACING.grid.comfortable,
        height: "100%"
      }}>
        <ValuePropCard
          icon="AI"
          iconBg="linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)"
          iconColor="#059669"
          title="AI-Powered Instant Quotes"
          description="Get accurate valuations in seconds using our proprietary machine learning algorithms trained on thousands of settlements."
          borderColor="#059669"
          hoverShadowColor="rgba(5, 150, 105, 0.15)"
        />

        <ValuePropCard
          icon="🛡️"
          iconBg="linear-gradient(135deg, #f3e8ff 0%, #ede9fe 100%)"
          iconColor="#7c3aed"
          title="Zero Privacy Compromise"
          description="Start your evaluation without providing personal information. Your privacy is protected throughout the entire process."
          borderColor="#7c3aed"
          hoverShadowColor="rgba(124, 58, 237, 0.15)"
        />
      </div>

      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: SPACING.grid.comfortable,
        height: "100%"
      }}>
        <ValuePropCard
          icon="⚖️"
          iconBg="linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)"
          iconColor="#dc2626"
          title="Full Legal Support"
          description="Our experienced legal team manages all court procedures, ensuring 100% compliance and fastest possible approval."
          borderColor="#dc2626"
          hoverShadowColor="rgba(220, 38, 38, 0.15)"
        />

        <ValuePropCard
          icon="24/7"
          iconBg="linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)"
          iconColor="#0891b2"
          title="Always Accessible"
          description="Access our platform anytime, anywhere. Mobile-optimized for seamless experience across all devices."
          borderColor="#0891b2"
          hoverShadowColor="rgba(8, 145, 178, 0.15)"
        />
      </div>
    </div>
  );
}

