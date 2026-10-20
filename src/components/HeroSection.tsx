import React from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { CURATED_PHOTOGRAPHS } from '../data/curatedAssets';

export const HeroSection: React.FC = () => {
  const heroPhoto = CURATED_PHOTOGRAPHS.hero;

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#08201D',
      }}
    >
      {/* Background Image Canvas with Deep Emerald-Teal Grading */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <img
          src={heroPhoto.webFile}
          alt="Sethulekshmi & Aromal in Sacred Kasavu Attire"
          fetchPriority="high"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: heroPhoto.focalPosition || 'center 22%',
            filter: 'brightness(0.82) contrast(1.08) saturate(1.02)',
            transform: 'scale(1.02)',
            transition: 'transform 10s ease-out',
          }}
        />

        {/* Sophisticated Multi-Stage Gradient: Deep Forest Teal Vignette */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(8, 32, 29, 0.72) 0%, rgba(12, 43, 38, 0.45) 40%, rgba(8, 32, 29, 0.88) 85%, #08201D 100%)',
          }}
        />

        {/* Side vignette shadows for high editorial focus */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at center, transparent 40%, rgba(6, 24, 22, 0.75) 100%)',
          }}
        />
      </div>

      {/* Hero Foreground Content */}
      <div
        className="editorial-container"
        style={{
          position: 'relative',
          zIndex: 10,
          paddingTop: 'clamp(50px, 8vh, 85px)',
          paddingBottom: 'clamp(50px, 8vh, 85px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Lord Ganesha Auspicious Invocation Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.6rem',
            animation: 'fadeIn 1.2s ease-out',
          }}
        >
          {/* Sacred Lord Ganesha Emblem - Prominent, Crisp & Elegant */}
          <div
            style={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/assets/images/lord_ganesha_gold.png"
              alt="Lord Ganesha - Sree Ganeshaya Namah"
              style={{
                width: 'auto',
                height: 'clamp(60px, 7.5vw, 74px)',
                objectFit: 'contain',
                filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.65)) drop-shadow(0 1px 2px rgba(233, 200, 131, 0.25))',
                transition: 'transform 0.3s ease, filter 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.04)';
                e.currentTarget.style.filter = 'drop-shadow(0 3px 8px rgba(0, 0, 0, 0.8)) drop-shadow(0 1px 4px rgba(233, 200, 131, 0.4))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.filter = 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.65)) drop-shadow(0 1px 2px rgba(233, 200, 131, 0.25))';
              }}
            />
          </div>

          {/* Delicate Traditional Invocation with Royal Hairline Accents */}
          <div
            style={{
              marginTop: '0.45rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            {/* Left hairline accent */}
            <span
              style={{
                display: 'inline-block',
                width: 'clamp(24px, 4vw, 36px)',
                height: '1px',
                background: 'linear-gradient(90deg, transparent 0%, rgba(233, 200, 131, 0.45) 100%)',
              }}
            />
            <span style={{ color: 'var(--gold-champagne, #E9C883)', opacity: 0.5, fontSize: '0.48rem' }}>✦</span>

            <span
              style={{
                fontFamily: "'Noto Serif Malayalam', 'Manjari', 'Anek Malayalam', serif",
                fontSize: 'clamp(0.66rem, 1.05vw, 0.74rem)',
                fontWeight: 500,
                letterSpacing: '0.05em',
                color: 'rgba(233, 200, 131, 0.92)',
                textShadow: '0 1px 6px rgba(0, 0, 0, 0.85)',
                lineHeight: 1.2,
              }}
            >
              ഓം ശ്രീ ഗണേശായ നമഃ
            </span>

            <span style={{ color: 'var(--gold-champagne, #E9C883)', opacity: 0.5, fontSize: '0.48rem' }}>✦</span>
            {/* Right hairline accent */}
            <span
              style={{
                display: 'inline-block',
                width: 'clamp(24px, 4vw, 36px)',
                height: '1px',
                background: 'linear-gradient(90deg, rgba(233, 200, 131, 0.45) 0%, transparent 100%)',
              }}
            />
          </div>
        </div>

        {/* Cinematic Names Lockup */}
        <div
          style={{
            maxWidth: '1080px',
            margin: '0 auto 1.8rem auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-england-hand, 'England Hand DB', 'England Hand', cursive)",
              fontSize: 'clamp(3.6rem, 9vw, 7.6rem)',
              fontWeight: 400,
              lineHeight: 1.12,
              letterSpacing: '0.01em',
              color: '#FFFFFF',
              textShadow: '0 4px 30px rgba(0, 0, 0, 0.7)',
              margin: 0,
              display: 'inline-block',
            }}
          >
            <span
              style={{
                fontFamily: "'Great Vibes', 'Alex Brush', cursive",
                fontSize: '1.08em',
                marginRight: '-0.02em',
                display: 'inline-block',
                verticalAlign: 'baseline',
              }}
            >
              S
            </span>
            ethulekshmi
          </h1>
          <div
            style={{
              fontFamily: 'var(--font-decorative)',
              fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)',
              fontStyle: 'italic',
              color: 'var(--gold-champagne)',
              margin: '0.2rem 0',
              textShadow: '0 2px 20px rgba(214, 178, 101, 0.4)',
              lineHeight: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            &amp;
          </div>
          <h1
            style={{
              fontFamily: "var(--font-england-hand, 'England Hand DB', 'England Hand', cursive)",
              fontSize: 'clamp(3.6rem, 9vw, 7.6rem)',
              fontWeight: 400,
              lineHeight: 1.12,
              letterSpacing: '0.01em',
              color: '#FFFFFF',
              textShadow: '0 4px 30px rgba(0, 0, 0, 0.7)',
              margin: 0,
              display: 'inline-block',
              transform: 'translateX(-0.035em)',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                WebkitTextStroke: '0.6px #FFFFFF',
                paintOrder: 'stroke fill',
              }}
            >
              A
            </span>
            romal
          </h1>
        </div>

        {/* Verified Date, Muhurtham & Clickable Venue Anchor Bar - UI/UX Inspired by Reference Pill */}
        <div className="hero-anchor-bar">
          <div className="hero-anchor-item">
            <span>Sunday, October 25, 2026</span>
          </div>

          <span className="hero-anchor-dot" aria-hidden="true">•</span>

          <div className="hero-anchor-item">
            <span>Muhurtham: 12:08 PM – 12:30 PM IST</span>
          </div>

          <span className="hero-anchor-dot" aria-hidden="true">•</span>

          {/* Interactive Verified Google Maps Venue Link */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Santhi+Auditorium+Eliyarackal+Konni+Pathanamthitta+Kerala+689691"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-venue-link"
            aria-label="View wedding venue Santhi Auditorium, Konni on Google Maps (opens in new tab)"
            title="Click to view Santhi Auditorium, Konni in Google Maps for directions"
          >
            <span>Santhi Auditorium, Konni</span>
            <ArrowUpRight size={10} style={{ color: 'var(--gold-champagne)', opacity: 0.9, flexShrink: 0 }} />
          </a>
        </div>

        {/* Warm Invitation Line */}
        <p
          style={{
            fontFamily: "var(--font-editorial, 'Playfair Display', Georgia, serif)",
            fontStyle: 'italic',
            fontSize: 'clamp(1.1rem, 2.3vw, 1.4rem)',
            color: '#FAF1DC',
            maxWidth: '680px',
            margin: '0 auto 1.4rem auto',
            lineHeight: 1.55,
            textShadow: '0 2px 14px rgba(0, 0, 0, 0.7)',
          }}
        >
          Cordially invite you to celebrate our sacred wedding union &amp; Muhurtham
        </p>

        {/* Royal Golden Lotus Motif Divider */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '520px',
            margin: '0 auto 1rem auto',
            gap: '14px',
          }}
          aria-hidden="true"
        >
          <div
            style={{
              flex: 1,
              height: '1px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(226, 179, 109, 0.6) 100%)',
            }}
          />
          <svg
            width="34"
            height="24"
            viewBox="0 0 34 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ flexShrink: 0 }}
          >
            <defs>
              <linearGradient id="heroLotusGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FDF4E3" />
                <stop offset="35%" stopColor="#E9C883" />
                <stop offset="70%" stopColor="#CA944B" />
                <stop offset="100%" stopColor="#966023" />
              </linearGradient>
            </defs>
            {/* Center Upright Petal */}
            <path
              d="M 17,2 C 19.2,6 19.5,12.5 17,16 C 14.5,12.5 14.8,6 17,2 Z"
              fill="url(#heroLotusGold)"
            />
            {/* Left Petal */}
            <path
              d="M 15.5,16 C 11.5,14 6.5,10.5 8,5.5 C 11.2,7 14.2,11.5 15.5,16 Z"
              fill="url(#heroLotusGold)"
            />
            {/* Right Petal */}
            <path
              d="M 18.5,16 C 22.5,14 27.5,10.5 26,5.5 C 22.8,7 19.8,11.5 18.5,16 Z"
              fill="url(#heroLotusGold)"
            />
            {/* Base Cup / Crescent */}
            <path
              d="M 11,16.5 C 13.5,18.5 20.5,18.5 23,16.5 C 21.5,19.2 12.5,19.2 11,16.5 Z"
              fill="url(#heroLotusGold)"
            />
            {/* Base Pearl */}
            <circle cx="17" cy="21.5" r="1.6" fill="url(#heroLotusGold)" />
          </svg>
          <div
            style={{
              flex: 1,
              height: '1px',
              background: 'linear-gradient(90deg, rgba(226, 179, 109, 0.6) 0%, transparent 100%)',
            }}
          />
        </div>

      </div>

      {/* Bottom Scroll Cue */}
      <a
        href="#union"
        aria-label="Scroll to The Union story"
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          color: '#A8C5BD',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#A8C5BD')}
      >
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          Explore Journey
        </span>
        <ChevronDown size={18} style={{ animation: 'bounce 2s infinite' }} />
      </a>

      {/* Inline styles for venue link, anchor bar & bounce animation */}
      <style>{`
        .hero-anchor-bar {
          display: inline-flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 6px 14px;
          background: rgba(12, 43, 38, 0.82);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(226, 179, 109, 0.6);
          box-shadow: 0 0 0 2px rgba(226, 179, 109, 0.12), 0 6px 20px rgba(4, 18, 16, 0.4);
          border-radius: 9999px;
          padding: 5px 18px;
          margin-bottom: 1.2rem;
          max-width: 95%;
          box-sizing: border-box;
          transition: all 0.3s ease;
        }

        .hero-anchor-item {
          display: flex;
          align-items: center;
          color: #FDF4E3;
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: clamp(0.62rem, 0.88vw, 0.71rem);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .hero-anchor-dot {
          color: var(--gold-champagne, #E9C883);
          font-size: 0.65rem;
          opacity: 0.8;
          display: inline-block;
          margin: 0 1px;
        }

        .hero-venue-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #FAF1DC;
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: clamp(0.62rem, 0.88vw, 0.71rem);
          letter-spacing: 0.11em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 2px 8px;
          border-radius: 9999px;
          background: rgba(214, 178, 101, 0.12);
          border: 1px solid rgba(214, 178, 101, 0.4);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          white-space: nowrap;
          cursor: pointer;
        }

        .hero-venue-link:hover {
          background: rgba(214, 178, 101, 0.26);
          border-color: var(--gold-champagne);
          color: #FFFFFF;
          transform: translateY(-1px);
          box-shadow: 0 3px 10px rgba(214, 178, 101, 0.22);
        }

        .hero-venue-link:focus-visible {
          outline: 2px solid var(--gold-champagne);
          outline-offset: 2px;
        }

        @media (max-width: 768px) {
          .hero-anchor-bar {
            border-radius: var(--radius-md);
            padding: 8px 14px;
            gap: 6px 10px;
          }
          .hero-anchor-dot {
            display: none;
          }
          .hero-anchor-item, .hero-venue-link {
            font-size: 0.65rem;
            letter-spacing: 0.08em;
            white-space: normal;
            text-align: center;
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(6px); }
          60% { transform: translateY(3px); }
        }
      `}</style>
    </section>
  );
};
