import { useRef } from 'react';
import StatRibbon from './StatRibbon';
import { useCounterAnimation } from './useCounterAnimation';
import { SITE_STATS } from '../../data/siteConfig';

export default function StatsGrid() {
  const clientRef = useRef<HTMLDivElement>(null);
  const payoutRef = useRef<HTMLDivElement>(null);
  const daysRef = useRef<HTMLDivElement>(null);
  const statesRef = useRef<HTMLDivElement>(null);

  useCounterAnimation([
    { ref: clientRef, target: 400, suffix: '+' },
    { ref: payoutRef, target: 50, prefix: '$', suffix: '+ Million' },
    { ref: daysRef, target: 30 },
    { ref: statesRef, target: 49, suffix: '+' },
  ]);

  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      gap: "1rem"
    }}>
      <StatRibbon ref={clientRef} icon="🤝" ariaLabel="Clients Helped" label="Clients Helped" />
      <StatRibbon ref={payoutRef} icon="💵" ariaLabel="Future Payments Exchanged" label="Future Payments Exchanged" />
      <StatRibbon 
        ref={daysRef} 
        icon="⏱️" 
        ariaLabel={SITE_STATS.avgDays.description} 
        label={SITE_STATS.avgDays.label}
        href={SITE_STATS.avgDays.link}
        description={SITE_STATS.avgDays.description}
      />
      <StatRibbon 
        ref={statesRef} 
        icon="🌎" 
        ariaLabel={SITE_STATS.statesCovered.description} 
        label={SITE_STATS.statesCovered.label}
        href={SITE_STATS.statesCovered.link}
        description={SITE_STATS.statesCovered.description}
      />
    </div>
  );
}

