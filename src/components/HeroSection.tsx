import React from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { CURATED_PHOTOGRAPHS } from '../data/curatedAssets';

export const HeroSection: React.FC = () => {
  const heroPhoto = CURATED_PHOTOGRAPHS.hero;

  return (
    <section className="hero-section">
      {/* Background Image Canvas with Deep Emerald-Teal Grading */}
      <div className="hero-bg-canvas">
        <img
          src={heroPhoto.webFile}
          alt="Sethulekshmi & Aromal in Sacred Kasavu Attire"
          fetchPriority="high"
          className="hero-bg-img"
          style={{
            objectPosition: heroPhoto.focalPosition || 'center 22%',
          }}
        />

        {/* Sophisticated Multi-Stage Gradient: Deep Forest Teal Vignette */}
        <div className="hero-gradient-overlay" />

        {/* Side vignette shadows for high editorial focus */}
        <div className="hero-radial-vignette" />
      </div>

      {/* Hero Foreground Content */}
      <div className="editorial-container hero-editorial-container">
        {/* Lord Ganesha Auspicious Invocation Header */}
        <div className="hero-ganesha-block">
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
              className="hero-ganesha-img"
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
          <div className="hero-ganesha-text-row">
            {/* Left hairline accent */}
            <span className="hero-ganesha-line hero-ganesha-line-left" />
            <span style={{ color: 'var(--gold-champagne, #E9C883)', opacity: 0.5, fontSize: '0.48rem' }}>✦</span>

            <span className="hero-invocation-malayalam">
              ഓം ശ്രീ ഗണേശായ നമഃ
            </span>

            <span style={{ color: 'var(--gold-champagne, #E9C883)', opacity: 0.5, fontSize: '0.48rem' }}>✦</span>
            {/* Right hairline accent */}
            <span className="hero-ganesha-line hero-ganesha-line-right" />
          </div>
        </div>

        {/* Photographic Clearance: Protects bride's & groom's faces on mobile */}
        <div className="hero-face-protection-spacer" aria-hidden="true" />

        {/* Main Content Area: Sits naturally below faces */}
        <div className="hero-main-content">
          {/* Cinematic Names Lockup */}
          <div className="hero-names-lockup">
            <h1 className="hero-name hero-name-first">
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
            <div className="hero-name-ampersand">
              &amp;
            </div>
            <h1 className="hero-name hero-name-second">
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

          {/* Verified Date, Muhurtham & Clickable Venue Anchor Bar */}
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
          <p className="hero-invitation-text">
            Cordially invite you to celebrate our sacred wedding union &amp; Muhurtham
          </p>

          {/* Royal Golden Lotus Motif Divider */}
          <div className="hero-lotus-divider" aria-hidden="true">
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

          {/* Bottom Scroll Cue */}
          <a
            href="#union"
            aria-label="Scroll to The Union story"
            className="hero-scroll-cue"
          >
            <span className="hero-scroll-cue-text">
              Explore Journey
            </span>
            <ChevronDown size={18} style={{ animation: 'bounce 2s infinite' }} />
          </a>
        </div>
      </div>

      {/* Responsive Stylesheet */}
      <style>{`
        .hero-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background-color: #08201D;
        }

        .hero-bg-canvas {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.82) contrast(1.08) saturate(1.02);
          transform: scale(1.02);
          transition: transform 10s ease-out;
        }

        .hero-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(8, 32, 29, 0.72) 0%, rgba(12, 43, 38, 0.45) 40%, rgba(8, 32, 29, 0.88) 85%, #08201D 100%);
        }

        .hero-radial-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 40%, rgba(6, 24, 22, 0.75) 100%);
        }

        .hero-editorial-container {
          position: relative;
          z-index: 10;
          padding-top: clamp(50px, 8vh, 85px);
          padding-bottom: clamp(50px, 8vh, 85px);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
        }

        .hero-ganesha-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.6rem;
          animation: fadeIn 1.2s ease-out;
        }

        .hero-ganesha-img {
          width: auto;
          height: clamp(60px, 7.5vw, 74px);
          object-fit: contain;
          filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.65)) drop-shadow(0 1px 2px rgba(233, 200, 131, 0.25));
          transition: transform 0.3s ease, filter 0.3s ease;
          cursor: default;
        }

        .hero-ganesha-text-row {
          margin-top: 0.45rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .hero-ganesha-line {
          display: inline-block;
          width: clamp(24px, 4vw, 36px);
          height: 1px;
        }

        .hero-ganesha-line-left {
          background: linear-gradient(90deg, transparent 0%, rgba(233, 200, 131, 0.45) 100%);
        }

        .hero-ganesha-line-right {
          background: linear-gradient(90deg, rgba(233, 200, 131, 0.45) 0%, transparent 100%);
        }

        .hero-invocation-malayalam {
          font-family: 'Noto Serif Malayalam', 'Manjari', 'Anek Malayalam', serif;
          font-size: clamp(0.66rem, 1.05vw, 0.74rem);
          font-weight: 500;
          letter-spacing: 0.05em;
          color: rgba(233, 200, 131, 0.92);
          text-shadow: 0 1px 6px rgba(0, 0, 0, 0.85);
          line-height: 1.2;
        }

        /* Spacer is hidden on desktop */
        .hero-face-protection-spacer {
          display: none;
        }

        .hero-main-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
        }

        .hero-names-lockup {
          max-width: 1080px;
          margin: 0 auto 1.8rem auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .hero-name {
          font-family: var(--font-england-hand, 'England Hand DB', 'England Hand', cursive);
          font-size: clamp(3.6rem, 9vw, 7.6rem);
          font-weight: 400;
          line-height: 1.12;
          letter-spacing: 0.01em;
          color: #FFFFFF;
          text-shadow: 0 4px 30px rgba(0, 0, 0, 0.7);
          margin: 0;
          display: inline-block;
        }

        .hero-name-second {
          transform: translateX(-0.035em);
        }

        .hero-name-ampersand {
          font-family: var(--font-decorative);
          font-size: clamp(1.5rem, 3.5vw, 2.8rem);
          font-style: italic;
          color: var(--gold-champagne);
          margin: 0.2rem 0;
          text-shadow: 0 2px 20px rgba(214, 178, 101, 0.4);
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

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

        .hero-invitation-text {
          font-family: var(--font-editorial, 'Playfair Display', Georgia, serif);
          font-style: italic;
          fontSize: clamp(1.1rem, 2.3vw, 1.4rem);
          color: #FAF1DC;
          max-width: 680px;
          margin: 0 auto 1.4rem auto;
          line-height: 1.55;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.7);
        }

        .hero-lotus-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 520px;
          margin: 0 auto 1rem auto;
          gap: 14px;
        }

        .hero-scroll-cue {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          color: #A8C5BD;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .hero-scroll-cue:hover {
          color: #FFFFFF;
        }

        .hero-scroll-cue-text {
          font-family: var(--font-sans);
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          font-weight: 600;
        }

        /* Tablet Responsive (769px to 1024px) */
        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-section {
            min-height: 100vh;
          }

          .hero-bg-img {
            object-position: 50% 20% !important;
          }

          .hero-name {
            font-size: clamp(3.0rem, 6.5vw, 4.4rem);
          }

          .hero-name-ampersand {
            font-size: clamp(1.4rem, 3.0vw, 2.2rem);
          }

          .hero-anchor-bar {
            max-width: 90%;
            gap: 6px 12px;
          }
        }

        /* Mobile & Handheld Screens (<= 768px) */
        @media (max-width: 768px) {
          .hero-section {
            min-height: 100vh;
            min-height: 100dvh;
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            overflow-x: hidden;
            box-sizing: border-box;
          }

          .hero-bg-canvas {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }

          .hero-bg-img {
            object-position: 51% 10% !important;
            filter: brightness(0.85) contrast(1.06) saturate(1.02);
            transform: scale(1.01);
          }

          /* Mobile Gradient: Top vignette for Ganesha, crystal clarity over faces (20-38%), rich dark emerald below */
          .hero-gradient-overlay {
            background: linear-gradient(
              180deg,
              rgba(8, 32, 29, 0.78) 0%,
              rgba(8, 32, 29, 0.40) 10%,
              rgba(8, 32, 29, 0.08) 20%,
              rgba(8, 32, 29, 0.12) 38%,
              rgba(8, 32, 29, 0.65) 52%,
              rgba(8, 32, 29, 0.92) 72%,
              #08201D 100%
            );
          }

          .hero-radial-vignette {
            background: radial-gradient(ellipse at center, transparent 55%, rgba(6, 24, 22, 0.65) 100%);
          }

          .hero-editorial-container {
            width: 100%;
            min-height: 100vh;
            min-height: 100dvh;
            height: 100%;
            padding-top: max(16px, env(safe-area-inset-top, 16px));
            padding-bottom: max(22px, env(safe-area-inset-bottom, 22px));
            padding-left: clamp(14px, 4vw, 24px);
            padding-right: clamp(14px, 4vw, 24px);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
          }

          .hero-ganesha-block {
            margin-bottom: 0;
            padding-top: 2px;
          }

          .hero-ganesha-img {
            height: clamp(38px, 8vw, 48px);
          }

          .hero-ganesha-text-row {
            margin-top: 0.25rem;
            gap: 6px;
          }

          .hero-invocation-malayalam {
            font-size: clamp(0.66rem, 2.2vw, 0.74rem);
          }

          /* Flexible Face Protection Spacer: Expands over couple's faces naturally */
          .hero-face-protection-spacer {
            display: block;
            flex: 1 1 auto;
            min-height: clamp(80px, 18vh, 180px);
            width: 100%;
            pointer-events: none;
          }

          /* Main Content: Anchors cleanly in lower section */
          .hero-main-content {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .hero-names-lockup {
            margin: 0 auto clamp(0.5rem, 1.4vh, 0.85rem) auto;
          }

          .hero-name {
            font-size: clamp(2.15rem, 7.8vw, 2.85rem);
            line-height: 1.08;
          }

          .hero-name-ampersand {
            font-size: clamp(1.4rem, 5.2vw, 1.85rem);
            margin: 0.08rem 0;
          }

          .hero-anchor-bar {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 4px;
            padding: 8px 16px;
            border-radius: 14px;
            margin-bottom: clamp(0.5rem, 1.4vh, 0.75rem);
            max-width: min(96%, 420px);
            background: rgba(12, 43, 38, 0.88);
            border: 1px solid rgba(226, 179, 109, 0.50);
            box-shadow: 0 4px 20px rgba(4, 18, 16, 0.45);
          }

          .hero-anchor-dot {
            display: none;
          }

          .hero-anchor-item {
            font-size: clamp(0.72rem, 2.6vw, 0.82rem);
            letter-spacing: 0.07em;
            white-space: normal;
            text-align: center;
            line-height: 1.35;
          }

          .hero-venue-link {
            font-size: clamp(0.72rem, 2.6vw, 0.82rem);
            letter-spacing: 0.07em;
            padding: 3px 11px;
            border-radius: 9999px;
            margin-top: 2px;
            white-space: normal;
            text-align: center;
          }

          .hero-invitation-text {
            font-size: clamp(0.90rem, 3.2vw, 1.05rem);
            line-height: 1.45;
            margin-bottom: clamp(0.45rem, 1.2vh, 0.7rem);
            max-width: 92%;
          }

          .hero-lotus-divider {
            max-width: clamp(150px, 35vw, 220px);
            margin-bottom: clamp(0.4rem, 1.1vh, 0.65rem);
            gap: 12px;
          }

          .hero-scroll-cue {
            position: relative;
            bottom: auto;
            left: auto;
            transform: none;
            margin-top: 0.15rem;
          }

          .hero-scroll-cue-text {
            font-size: clamp(0.66rem, 2.4vw, 0.74rem);
            letter-spacing: 0.20em;
          }
        }

        /* Short mobile viewports (<= 650px height) */
        @media (max-width: 768px) and (max-height: 650px) {
          .hero-editorial-container {
            padding-top: 8px;
            padding-bottom: 14px;
          }

          .hero-ganesha-img {
            height: 32px;
          }

          .hero-ganesha-text-row {
            margin-top: 0.15rem;
          }

          .hero-face-protection-spacer {
            min-height: 60px;
            max-height: 100px;
          }

          .hero-name {
            font-size: clamp(1.85rem, 6.6vw, 2.15rem);
            line-height: 1.04;
          }

          .hero-name-ampersand {
            font-size: 1.35rem;
            margin: 0.03rem 0;
          }

          .hero-names-lockup {
            margin-bottom: 0.35rem;
          }

          .hero-anchor-bar {
            padding: 5px 12px;
            gap: 3px;
            margin-bottom: 0.35rem;
          }

          .hero-anchor-item, .hero-venue-link {
            font-size: 0.69rem;
            letter-spacing: 0.06em;
          }

          .hero-invitation-text {
            font-size: 0.86rem;
            margin-bottom: 0.35rem;
            line-height: 1.35;
          }

          .hero-lotus-divider {
            max-width: 160px;
            margin-bottom: 0.3rem;
          }

          .hero-scroll-cue-text {
            font-size: 0.62rem;
          }
        }

        /* Ultra-narrow devices <= 360px */
        @media (max-width: 360px) {
          .hero-editorial-container {
            padding-left: 10px;
            padding-right: 10px;
          }

          .hero-name {
            font-size: 2.0rem;
          }

          .hero-name-ampersand {
            font-size: 1.38rem;
          }

          .hero-anchor-bar {
            padding: 6px 8px;
            max-width: 98%;
          }

          .hero-anchor-item, .hero-venue-link {
            font-size: 0.68rem;
            letter-spacing: 0.04em;
          }

          .hero-invitation-text {
            font-size: 0.86rem;
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

