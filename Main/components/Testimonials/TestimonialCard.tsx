import { createFloatHover } from '../../shared/styles/hoverEffects';
import { getTestimonialCardStyles } from '../../shared/styles/cardStyles';
import { TEXT_PRESETS, TYPOGRAPHY, ICON_SIZES } from '../../shared/styles/typography';
import { COLORS } from '../../shared/styles/colorThemes';

interface TestimonialCardProps {
  text: string;
  author: string;
  rating: number;
  avatar?: string;
}

export default function TestimonialCard({ text, author, rating, avatar }: TestimonialCardProps) {
  return (
    <div style={{ width: "100%" }}>
      <div 
        style={getTestimonialCardStyles({ cursor: "pointer" })}
        {...createFloatHover({
          translateY: -8,
          scale: 1.02,
          shadowColor: 'rgba(5, 150, 105, 0.15)',
          shadowSize: '0 20px 40px',
          borderColor: '#047857'
        })}
      >
        <div style={{
          position: "absolute",
          top: "1.5rem",
          right: "2rem",
          fontSize: "2rem",
          color: "#047857",
          opacity: "0.3"
        }}>
          "
        </div>
        
        <div style={{
          display: "flex",
          gap: "0.25rem",
          marginBottom: "1.5rem"
        }}>
          {[...Array(5)].map((_, i) => (
            <span key={i} style={{
              color: i < rating ? "#fbbf24" : "#d1d5db",
              fontSize: "1.25rem"
            }}>
              ★
            </span>
          ))}
        </div>
        
        <p style={{
          ...TEXT_PRESETS.testimonialText,
          color: COLORS.text.secondary,
          marginBottom: "2rem",
          flex: "1"
        }}>
          "{text}"
        </p>
        
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem"
        }}>
          <div style={{
            width: ICON_SIZES.medium,
            height: ICON_SIZES.medium,
            borderRadius: "50%",
            background: COLORS.primary.gradient,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: COLORS.text.white,
            fontSize: TYPOGRAPHY.fontSize.heading.h5,
            fontWeight: TYPOGRAPHY.fontWeight.semibold,
            boxShadow: `0 4px 12px ${COLORS.shadows.green}`
          }}>
            {avatar || author.charAt(0).toUpperCase()}
          </div>
          
          <div>
            <h6 style={{
              margin: "0",
              ...TEXT_PRESETS.testimonialAuthor,
              color: COLORS.text.primary
            }}>
              {author}
            </h6>
            <p style={{
              margin: "0",
              ...TEXT_PRESETS.cardSubtext,
              color: COLORS.text.tertiary
            }}>
              Satisfied Client
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

