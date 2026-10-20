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
      id="epilogue"
      style={{
        position: 'relative',
        background: 'radial-gradient(ellipse at 50% 28%, #0F352E 0%, #0A2622 35%, #061A17 70%, #041210 100%)',
        padding: 'clamp(55px, 6.5vh, 80px) 0 50px 0',
        overflow: 'hidden',
        borderTop: '1px solid rgba(168, 197, 189, 0.14)',
      }}
    >
      {/* Sacred Geometry Mandala & Yantra Background (Royal Emerald & Kasavu Gold) */}
      <svg
        viewBox="0 0 1600 1300"
        preserveAspectRatio="xMidYMin slice"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1,
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Isometric Diamond Grid Texture in Royal Mint & Gold */}
          <pattern id="epilogueSacredGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 0 30 L 30 0 L 60 30 L 30 60 Z" fill="none" stroke="rgba(168, 197, 189, 0.05)" strokeWidth="0.8" />
            <path d="M 0 0 L 60 60 M 60 0 L 0 60" fill="none" stroke="rgba(214, 178, 101, 0.03)" strokeWidth="0.5" />
          </pattern>

          {/* Central Warm Kasavu Gold & Royal Emerald Ambient Spotlight */}
          <radialGradient id="epilogueSpotlight" cx="50%" cy="28%" r="48%">
            <stop offset="0%" stopColor="#D6B265" stopOpacity="0.18" />
            <stop offset="30%" stopColor="#1B4F46" stopOpacity="0.22" />
            <stop offset="65%" stopColor="#0A2622" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#041210" stopOpacity="0" />
          </radialGradient>

          {/* Golden Lotus Multi-Stop Metallic Gradient */}
          <linearGradient id="lotusGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF4DF" />
            <stop offset="30%" stopColor="#E9C883" />
            <stop offset="70%" stopColor="#CA944B" />
            <stop offset="100%" stopColor="#966023" />
          </linearGradient>
        </defs>

        {/* Isometric Diamond Grid Texture */}
        <rect width="100%" height="100%" fill="url(#epilogueSacredGrid)" />

        {/* Central Luminous Spotlight */}
        <rect width="100%" height="100%" fill="url(#epilogueSpotlight)" />

        {/* Sacred Geometry Linework centered at (800, 360) behind master photo */}
        <g>
          {/* Concentric Circles */}
          <circle cx="800" cy="360" r="130" fill="none" stroke="rgba(214, 178, 101, 0.16)" strokeWidth="1.2" />
          <circle cx="800" cy="360" r="185" fill="none" stroke="rgba(214, 178, 101, 0.08)" strokeWidth="0.8" strokeDasharray="4 6" />
          <circle cx="800" cy="360" r="260" fill="none" stroke="rgba(214, 178, 101, 0.12)" strokeWidth="1" />
          <circle cx="800" cy="360" r="360" fill="none" stroke="rgba(214, 178, 101, 0.07)" strokeWidth="0.8" strokeDasharray="6 8" />
          <circle cx="800" cy="360" r="480" fill="none" stroke="rgba(214, 178, 101, 0.05)" strokeWidth="0.8" />
          <circle cx="800" cy="360" r="640" fill="none" stroke="rgba(214, 178, 101, 0.03)" strokeWidth="0.8" strokeDasharray="8 12" />

          {/* Intersecting Yantra Squares & Diamonds */}
          <rect x="635" y="195" width="330" height="330" fill="none" stroke="rgba(214, 178, 101, 0.09)" strokeWidth="1" transform="rotate(45 800 360)" />
          <rect x="575" y="135" width="450" height="450" fill="none" stroke="rgba(214, 178, 101, 0.06)" strokeWidth="0.8" />
          <rect x="475" y="35" width="650" height="650" fill="none" stroke="rgba(214, 178, 101, 0.04)" strokeWidth="0.8" transform="rotate(45 800 360)" />

          {/* Radiating Rays Across Axes */}
          <line x1="0" y1="360" x2="1600" y2="360" stroke="rgba(214, 178, 101, 0.08)" strokeWidth="0.8" />
          <line x1="800" y1="0" x2="800" y2="1300" stroke="rgba(214, 178, 101, 0.08)" strokeWidth="0.8" />
          <line x1="-200" y1="-640" x2="1800" y2="1360" stroke="rgba(214, 178, 101, 0.05)" strokeWidth="0.8" />
          <line x1="-200" y1="1360" x2="1800" y2="-640" stroke="rgba(214, 178, 101, 0.05)" strokeWidth="0.8" />
        </g>
      </svg>

      <div className="editorial-container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Curated Closing Visual Spread */}
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto 44px auto',
            textAlign: 'center',
          }}
        >
          {/* Master Showcase: Center-Balanced Grand Medallion Flanked by Royal Blessings */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(20px, 3.5vw, 48px)',
              marginBottom: '32px',
              flexWrap: 'wrap',
            }}
          >
            {/* Left Blessing Wing: Sacred Heritage & Lineage */}
            <div
              style={{
                flex: '1 1 240px',
                maxWidth: '290px',
                textAlign: 'right',
                padding: '24px 22px',
                background: 'linear-gradient(135deg, rgba(15, 53, 46, 0.65) 0%, rgba(8, 32, 29, 0.8) 100%)',
                border: '1px solid rgba(214, 178, 101, 0.28)',
                borderRadius: '18px',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--gold-champagne)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: '8px',
                }}
              >
                <span>Sacred Lineage</span>
                <span>✦</span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: '1.25rem',
                  color: '#FFFFFF',
                  lineHeight: 1.25,
                  marginBottom: '8px',
                }}
              >
                Two Families, One Enduring Bond
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8rem',
                  color: '#B0CBC4',
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                Rooted in centuries-old Kerala traditions, surrounded by the eternal blessings of our beloved elders.
              </p>
            </div>

            {/* Center: Grand Circular Medallion (Large Imperial Circle Model) */}
            <div
              style={{
                position: 'relative',
                width: 'clamp(340px, 44vw, 540px)',
                height: 'clamp(340px, 44vw, 540px)',
                maxWidth: '92vw',
                flex: '0 0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Outer Concentric Ornamental Dashed Gold Ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-22px',
                  borderRadius: '50%',
                  border: '1.5px dashed rgba(214, 178, 101, 0.5)',
                  pointerEvents: 'none',
                  animation: 'spinSlow 100s linear infinite',
                }}
              />

              {/* Middle Luminous Kasavu Gold Ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-11px',
                  borderRadius: '50%',
                  border: '2px solid rgba(214, 178, 101, 0.75)',
                  boxShadow: '0 0 45px rgba(214, 178, 101, 0.3), inset 0 0 25px rgba(214, 178, 101, 0.15)',
                  pointerEvents: 'none',
                }}
              />

              {/* 8 Auspicious Cardinal & Diagonal Star Pips */}
              <div style={{ position: 'absolute', top: '-28px', color: 'rgba(233, 200, 131, 0.95)', fontSize: '13px', pointerEvents: 'none', textShadow: '0 0 10px rgba(214, 178, 101, 0.8)' }}>✦</div>
              <div style={{ position: 'absolute', bottom: '-28px', color: 'rgba(233, 200, 131, 0.95)', fontSize: '13px', pointerEvents: 'none', textShadow: '0 0 10px rgba(214, 178, 101, 0.8)' }}>✦</div>
              <div style={{ position: 'absolute', left: '-28px', color: 'rgba(233, 200, 131, 0.95)', fontSize: '13px', pointerEvents: 'none', textShadow: '0 0 10px rgba(214, 178, 101, 0.8)' }}>✦</div>
              <div style={{ position: 'absolute', right: '-28px', color: 'rgba(233, 200, 131, 0.95)', fontSize: '13px', pointerEvents: 'none', textShadow: '0 0 10px rgba(214, 178, 101, 0.8)' }}>✦</div>
              <div style={{ position: 'absolute', top: '7%', left: '7%', color: 'rgba(233, 200, 131, 0.75)', fontSize: '10px', pointerEvents: 'none' }}>✧</div>
              <div style={{ position: 'absolute', top: '7%', right: '7%', color: 'rgba(233, 200, 131, 0.75)', fontSize: '10px', pointerEvents: 'none' }}>✧</div>
              <div style={{ position: 'absolute', bottom: '7%', left: '7%', color: 'rgba(233, 200, 131, 0.75)', fontSize: '10px', pointerEvents: 'none' }}>✧</div>
              <div style={{ position: 'absolute', bottom: '7%', right: '7%', color: 'rgba(233, 200, 131, 0.75)', fontSize: '10px', pointerEvents: 'none' }}>✧</div>

              {/* Clean Large Circular Image Frame (Circle Model) */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '4px solid rgba(233, 200, 131, 0.92)',
                  boxShadow: '0 25px 65px rgba(0, 0, 0, 0.8), inset 0 0 0 3px rgba(8, 32, 29, 0.85)',
                  backgroundColor: '#FAF5EE',
                }}
              >
                <img
                  src="/assets/images/SA.png"
                  alt="Sethulekshmi & Aromal"
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center center',
                    display: 'block',
                  }}
                />
              </div>
            </div>

            {/* Right Blessing Wing: The Muhurtham & Celebration Dawn */}
            <div
              style={{
                flex: '1 1 240px',
                maxWidth: '290px',
                textAlign: 'left',
                padding: '24px 22px',
                background: 'linear-gradient(135deg, rgba(15, 53, 46, 0.65) 0%, rgba(8, 32, 29, 0.8) 100%)',
                border: '1px solid rgba(214, 178, 101, 0.28)',
                borderRadius: '18px',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--gold-champagne)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: '8px',
                }}
              >
                <span>✦</span>
                <span>Auspicious Dawn</span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: '1.25rem',
                  color: '#FFFFFF',
                  lineHeight: 1.25,
                  marginBottom: '8px',
                }}
              >
                Sunday, October 25, 2026
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8rem',
                  color: '#B0CBC4',
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                Santhi Auditorium, Konni, Pathanamthitta &bull; Stepping forward into a lifetime of shared laughter and love.
              </p>
            </div>
          </div>

          {/* Auspicious Divine Invocation Emblem (Inspired by Reference) */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
            <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 24 6 C 26 10, 31 12, 33 16 C 35 20, 34 26, 31 30 C 29 33, 27 34, 25 36 C 24 37, 23 39, 24 41 C 24 42, 23 43, 22 43 C 21 42, 20 40, 21 38 C 22 35, 25 33, 27 31 C 30 28, 30 23, 29 19 C 27 15, 24 13, 24 9"
                stroke="url(#lotusGoldGrad)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M 24 6 C 22 10, 17 12, 15 16 C 13 20, 14 26, 17 30 C 18 31, 20 32, 21 32"
                stroke="url(#lotusGoldGrad)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M 18 19 C 14 19, 11 22, 12 26 C 13 29, 16 30, 19 28"
                stroke="url(#lotusGoldGrad)"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <path
                d="M 30 19 C 34 19, 37 22, 36 26 C 35 29, 32 30, 29 28"
                stroke="url(#lotusGoldGrad)"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <circle cx="24" cy="14" r="1.5" fill="#FFF2D6" />
              <path d="M 22 8 Q 24 4 26 8" stroke="url(#lotusGoldGrad)" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
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

          {/* Sacred Golden Lotus Divider Motif (Exact Element from Reference Design) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              maxWidth: '460px',
              margin: '36px auto 0 auto',
            }}
          >
            <div
              style={{
                flex: 1,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(214, 178, 101, 0.75))',
              }}
            />
            {/* 3-Petal Lotus / Kalasam Blossom */}
            <svg width="36" height="22" viewBox="0 0 36 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 18 2 C 15 9, 15 15, 18 20 C 21 15, 21 9, 18 2 Z"
                fill="url(#lotusGoldGrad)"
              />
              <path
                d="M 18 20 C 13 18, 7 14, 5 7 C 9 6, 15 12, 18 20 Z"
                fill="url(#lotusGoldGrad)"
                opacity="0.9"
              />
              <path
                d="M 18 20 C 23 18, 29 14, 31 7 C 27 6, 21 12, 18 20 Z"
                fill="url(#lotusGoldGrad)"
                opacity="0.9"
              />
              <circle cx="18" cy="20" r="1.8" fill="#FFF4DF" />
            </svg>
            <div
              style={{
                flex: 1,
                height: '1px',
                background: 'linear-gradient(90deg, rgba(214, 178, 101, 0.75), transparent)',
              }}
            />
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
