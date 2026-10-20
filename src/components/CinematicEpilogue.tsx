import React from 'react';
import { ArrowUp, Phone, Sparkles } from 'lucide-react';
import { CURATED_PHOTOGRAPHS } from '../data/curatedAssets';

export const CinematicEpilogue: React.FC = () => {
  const epiloguePhoto = CURATED_PHOTOGRAPHS.epilogue;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        position: 'relative',
        backgroundColor: '#051614',
        padding: '130px 0 60px 0',
        overflow: 'hidden',
        borderTop: '1px solid rgba(168, 197, 189, 0.14)',
      }}
    >
      {/* Twilight Atmosphere Radial Glow */}
      <div
        className="ambient-glow-teal"
        style={{ bottom: '-100px', left: '50%', transform: 'translateX(-50%)', opacity: 0.5 }}
      />

      <div className="editorial-container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Curated Closing Visual Spread */}
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto 80px auto',
            textAlign: 'center',
          }}
        >
          {/* Framed Twilight Master Portrait (Portrait 3:4) */}
          <div
            className="img-emerald-frame"
            style={{
              maxWidth: '460px',
              aspectRatio: '3 / 4',
              borderRadius: 'var(--radius-lg)',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.65)',
              border: '2px solid rgba(214, 178, 101, 0.45)',
              margin: '0 auto 40px auto',
              backgroundColor: '#071C19',
            }}
          >
            <img
              src={epiloguePhoto.webFile}
              alt={epiloguePhoto.title}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: epiloguePhoto.focalPosition || 'center 18%',
              }}
            />
          </div>

          <div className="editorial-badge" style={{ marginBottom: '1rem' }}>
            <Sparkles size={12} style={{ color: 'var(--gold-champagne)' }} />
            <span>Epilogue • With Sincere Gratitude</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(2.4rem, 5.2vw, 4.2rem)',
              color: '#FFFFFF',
              margin: '0 0 16px 0',
              lineHeight: 1.1,
            }}
          >
            We Await Your Gracious Presence
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-editorial)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              color: '#D4E2DE',
              maxWidth: '720px',
              margin: '0 auto 24px auto',
              lineHeight: 1.6,
            }}
          >
            &ldquo;As we step forward into this sacred union, your blessings, laughter, and presence will be the greatest gift of all.&rdquo;
          </p>

          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--gold-champagne)',
              fontWeight: 700,
            }}
          >
            — Suresh &amp; Bindhu &bull; Santhosh &amp; Jayasree
          </div>
        </div>

        {/* Family Emergency & Host Directory Bar */}
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto 60px auto',
            backgroundColor: 'rgba(12, 43, 38, 0.65)',
            border: '1px solid rgba(168, 197, 189, 0.18)',
            borderRadius: 'var(--radius-lg)',
            padding: '34px',
            backdropFilter: 'blur(16px)',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--gold-champagne)',
              fontWeight: 700,
              marginBottom: '20px',
            }}
          >
            Family Host Directory &amp; Enquiries
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {/* Bride Family Host */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(35, 92, 82, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-champagne)',
                  flexShrink: 0,
                }}
              >
                <Phone size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: '#A8C5BD', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Bride&apos;s Family Host
                </div>
                <div style={{ fontWeight: 600, fontSize: '1rem', color: '#FFFFFF' }}>
                  Mr. Suresh Madhavan Nair
                </div>
                <a
                  href="tel:+919447123456"
                  style={{
                    color: 'var(--gold-champagne)',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    display: 'inline-block',
                    marginTop: '2px',
                  }}
                >
                  +91 94471 23456
                </a>
                <div style={{ fontSize: '0.78rem', color: '#88A39C', marginTop: '2px' }}>
                  Suresh Bhavan, Achencovil, Kollam
                </div>
              </div>
            </div>

            {/* Groom Family Host */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(35, 92, 82, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-champagne)',
                  flexShrink: 0,
                }}
              >
                <Phone size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: '#A8C5BD', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Groom&apos;s Family Host
                </div>
                <div style={{ fontWeight: 600, fontSize: '1rem', color: '#FFFFFF' }}>
                  Mr. Santhosh Kurup
                </div>
                <a
                  href="tel:+919447234567"
                  style={{
                    color: 'var(--gold-champagne)',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    display: 'inline-block',
                    marginTop: '2px',
                  }}
                >
                  +91 94472 34567
                </a>
                <div style={{ fontSize: '0.78rem', color: '#88A39C', marginTop: '2px' }}>
                  Thempamkoottathil (H), Iravon, Konni
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Sub-Bar: Cultural Prayer & Scroll to Top */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            paddingTop: '30px',
            borderTop: '1px solid rgba(168, 197, 189, 0.12)',
          }}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.1rem', color: '#FFFFFF' }}>
              Sethulekshmi &amp; Aromal
            </div>
            <div style={{ fontSize: '0.75rem', color: '#88A39C', marginTop: '2px' }}>
              Sunday, October 25, 2026 &bull; Santhi Auditorium, Konni, Pathanamthitta, Kerala
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(35, 92, 82, 0.4)',
                border: '1px solid rgba(168, 197, 189, 0.25)',
                color: '#FFFFFF',
                fontSize: '0.72rem',
                fontFamily: 'var(--font-sans)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1B4F46')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(35, 92, 82, 0.4)')}
            >
              <ArrowUp size={14} />
              Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
