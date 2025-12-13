import StepCard from './StepCard';
import { SPACING } from '../../shared/styles/spacing';

interface StepGridProps {
  isMounted: boolean;
  gridColumns: string;
}

export default function StepGrid({ isMounted, gridColumns }: StepGridProps) {
  return (
    <div style={{
      display: isMounted ? "grid" : "block",
      gridTemplateColumns: isMounted ? gridColumns : "1fr",
      gap: SPACING.grid.comfortable,
      alignItems: "stretch",
      textAlign: "center",
      height: "100%"
    }}>
      <StepCard
        to="/mint-chat-active?type=calculate&source=main-process-step1"
        icon="1"
        title="Get Instant Quote"
        text="Our AI-powered platform analyzes your settlement and provides an instant, personalized quote with no personal information required."
      />
      <StepCard
        to="/review-offer"
        icon="2"
        title="Review Terms"
        text="Compare our transparent offer with competitors. No hidden fees, no pressure tactics - just clear, honest pricing and terms."
      />
      <StepCard
        to="/court-approval"
        icon="3"
        title="Legal Process"
        text="Our experienced legal team handles all court filings and proceedings while keeping you informed every step of the way."
      />
      <StepCard
        to="/get-your-cash"
        icon="4"
        title="Receive Funds"
        text="Get your money fast via secure wire transfer or certified check - typically within 2-5 business days after approval."
      />
    </div>
  );
}

