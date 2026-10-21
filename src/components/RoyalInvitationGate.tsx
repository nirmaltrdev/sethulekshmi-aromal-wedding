import React, { useState } from 'react';
import { playSoundtrack } from '../utils/audioManager';

export interface RoyalInvitationGateProps {
  onOpened?: () => void;
}

export const RoyalInvitationGate: React.FC<RoyalInvitationGateProps> = ({ onOpened }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpening, setIsOpening] = useState<boolean>(false);

  const handleOpenInvitation = async () => {
    if (isOpening || isOpen) return;
    setIsOpening(true);

    // 1. Start audio immediately in direct response to user gesture (satisfies all browser policies)
    await playSoundtrack();

    if (onOpened) {
      onOpened();
    }

    // 2. Smoothly complete the opening transition
    setTimeout(() => {
      setIsOpen(true);
    }, 850);
  };

  if (isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Royal Wedding Invitation"
      className={`royal-gate-backdrop ${isOpening ? 'royal-gate-backdrop-opening' : ''}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // env() insets only take effect once the document viewport opts in with viewport-fit=cover
        padding: `calc(clamp(12px, 2.5vh, 28px) + env(safe-area-inset-top, 0px))
          calc(clamp(14px, 4vw, 36px) + env(safe-area-inset-right, 0px))
          calc(clamp(12px, 2.5vh, 28px) + env(safe-area-inset-bottom, 0px))
          calc(clamp(14px, 4vw, 36px) + env(safe-area-inset-left, 0px))`,
        backgroundColor: '#031713',
        backgroundImage: `
          radial-gradient(circle at 50% 45%, rgba(20, 68, 58, 0.92) 0%, rgba(5, 26, 22, 0.98) 60%, #020C0A 100%)
        `,
        overflowX: 'hidden',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        transition: 'opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.85s ease',
        opacity: isOpening ? 0 : 1,
        visibility: isOpen ? 'hidden' : 'visible',
      }}
    >
      {/* Sacred Geometric Mandala & Constellation Backdrop matching Reference Image */}
      <svg
        className="royal-gate-sacred-geometry"
        viewBox="0 0 1200 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.28,
          pointerEvents: 'none',
        }}
      >
        <defs>
          <radialGradient id="sacredMandalaGlow" cx="50%" cy="45%" r="48%">
            <stop offset="0%" stopColor="#E9C883" stopOpacity="0.45" />
            <stop offset="45%" stopColor="#2A6B5E" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#031713" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Center Glow */}
        <rect width="1200" height="900" fill="url(#sacredMandalaGlow)" />

        {/* Concentric Sacred Yantra Circles centered on S & A Logo (y=400) */}
        <g stroke="rgba(214, 178, 101, 0.32)" strokeWidth="0.8" fill="none">
          <circle cx="600" cy="400" r="95" strokeWidth="0.6" strokeDasharray="2 3" />
          <circle cx="600" cy="400" r="130" strokeWidth="1" />
          <circle cx="600" cy="400" r="165" strokeWidth="0.6" />
          <circle cx="600" cy="400" r="230" strokeWidth="0.8" strokeDasharray="4 6" />
          <circle cx="600" cy="400" r="320" strokeWidth="0.5" />
          <circle cx="600" cy="400" r="420" strokeWidth="0.4" />

          {/* Horizontal Sacred Axis */}
          <line x1="80" y1="400" x2="1120" y2="400" stroke="rgba(214, 178, 101, 0.35)" strokeWidth="0.8" />

          {/* Symmetrical Geometric Intersecting Rays */}
          <line x1="200" y1="120" x2="1000" y2="680" strokeWidth="0.4" strokeDasharray="3 4" />
          <line x1="200" y1="680" x2="1000" y2="120" strokeWidth="0.4" strokeDasharray="3 4" />
          <line x1="600" y1="80" x2="600" y2="720" strokeWidth="0.5" strokeDasharray="2 3" />

          {/* 8-Petal Sacred Yantra Polygon */}
          <polygon
            points="600,270 692,308 730,400 692,492 600,530 508,492 470,400 508,308"
            strokeWidth="0.6"
            stroke="rgba(214, 178, 101, 0.25)"
          />
        </g>
      </svg>

      {/* Radiant Golden Starburst Nodes on Horizontal Axis */}
      <span className="royal-starburst royal-starburst-left" />
      <span className="royal-starburst royal-starburst-right" />

      {/* Central Content Composition - margin: auto ensures safe scrolling on mobile with no cutoff */}
      <div
        className={`royal-gate-content ${isOpening ? 'royal-content-opening' : ''}`}
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          maxWidth: '860px',
          width: '100%',
          minWidth: 0,
          zIndex: 2,
          margin: 'auto',
        }}
      >
        {/* 1. Auspicious Lord Ganesha Header */}
        <div className="royal-ganesha-block">
          <div
            style={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Ambient Halo behind Ganesha */}
            <div
              className="royal-ganesha-halo"
              style={{
                position: 'absolute',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(233, 200, 131, 0.45) 0%, transparent 70%)',
                filter: 'blur(8px)',
                pointerEvents: 'none',
              }}
            />
            <img
              src="/assets/images/lord_ganesha_gold.png"
              alt="Lord Ganesha"
              className="royal-ganesha-img"
              style={{
                position: 'relative',
                height: 'auto',
                display: 'inline-block',
                filter: 'drop-shadow(0 3px 10px rgba(0, 0, 0, 0.75)) drop-shadow(0 0 12px rgba(233, 200, 131, 0.55))',
              }}
            />
          </div>

          {/* Invocation Text in Malayalam with Flanking Hairlines */}
          <div
            className="royal-invocation-row"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              className="royal-invocation-line"
              style={{
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(233, 200, 131, 0.65))',
              }}
            />
            <span
              className="royal-invocation-malayalam"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: 'var(--gold-champagne, #E9C883)',
                letterSpacing: '0.04em',
                fontWeight: 500,
                textShadow: '0 0 8px rgba(233, 200, 131, 0.25)',
              }}
            >
              ഓം ശ്രീ ഗണേശായ നമഃ
            </span>
            <span
              className="royal-invocation-line"
              style={{
                height: '1px',
                background: 'linear-gradient(90deg, rgba(233, 200, 131, 0.65), transparent)',
              }}
            />
          </div>

          {/* Subtitle: AUSPICIOUS WEDDING INVITATION */}
          <div
            className="royal-invocation-sub"
            style={{
              fontFamily: "'Plus Jakarta Sans', var(--font-sans), sans-serif",
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(233, 200, 131, 0.82)',
            }}
          >
            Auspicious Wedding Invitation
          </div>
        </div>

        {/* 2. Central S & A Monogram Emblem */}
        <div
          className="royal-monogram-container"
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Ambient Golden Radial Halo behind Logo */}
          <div
            className="royal-logo-halo"
            style={{
              position: 'absolute',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(233, 200, 131, 0.35) 0%, rgba(26, 85, 74, 0.45) 50%, transparent 75%)',
              filter: 'blur(20px)',
              pointerEvents: 'none',
            }}
          />

          {/* Monogram Outer Golden Rim Ring */}
          <div
            className="royal-monogram-ring"
            style={{
              position: 'relative',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(233, 200, 131, 0.75) 0%, rgba(138, 102, 38, 0.4) 50%, rgba(233, 200, 131, 0.8) 100%)',
              boxShadow: `
                0 12px 30px rgba(0, 0, 0, 0.75),
                0 0 24px rgba(233, 200, 131, 0.32),
                inset 0 0 16px rgba(233, 200, 131, 0.18)
              `,
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundColor: '#07241E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src="/assets/images/sa_monogram_logo.png"
                alt="Sethulekshmi & Aromal S&A Logo"
                style={{
                  width: '95%',
                  height: '95%',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        </div>

        {/* 3. Couple Names in Fluid Luxury Calligraphy Script */}
        <div
          className="royal-names-wrapper"
          style={{
            padding: '0 8px',
            width: '100%',
            minWidth: 0,
          }}
        >
          <h1 className="royal-gate-title">
            <span className="royal-gate-name-group">
              <span className="royal-gate-name-wrap">Sethulekshmi S</span>
              <span className="royal-gate-amp-wrap">&amp;</span>
            </span>
            <span className="royal-gate-name-wrap royal-gate-second-name">
              Aromal Kurup
            </span>
          </h1>
        </div>

        {/* 4. Traditional Golden Lotus Flourish Divider matching Reference */}
        <div
          className="royal-lotus-divider"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <span
            style={{
              flex: 1,
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(233, 200, 131, 0.7))',
            }}
          />
          {/* Detailed Golden Lotus SVG Motif */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              filter: 'drop-shadow(0 0 6px rgba(233, 200, 131, 0.5))',
            }}
          >
            <svg
              className="royal-lotus-svg"
              width="24"
              height="15"
              viewBox="0 0 26 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M13 1C13 1 10.2 6.2 10.2 10.5C10.2 12.8 11.4 14.2 13 14.2C14.6 14.2 15.8 12.8 15.8 10.5C15.8 6.2 13 1 13 1Z"
                fill="#F7E2AC"
              />
              <path
                d="M13 6.5C10.5 8.2 5.5 10.8 6.4 13.5C7.2 14.8 9.4 14.4 11 13C12.1 12.1 12.6 10 13 6.5Z"
                fill="#E2BC66"
              />
              <path
                d="M13 6.5C15.5 8.2 20.5 10.8 19.6 13.5C18.8 14.8 16.6 14.4 15 13C13.9 12.1 13.4 10 13 6.5Z"
                fill="#E2BC66"
              />
              <path
                d="M13 9C9.5 10.8 2.8 12.5 3.6 14.8C4.3 15.6 6.8 15.2 9.2 14C10.6 13.2 12 11.6 13 9Z"
                fill="#BE9038"
              />
              <path
                d="M13 9C16.5 10.8 23.2 12.5 22.4 14.8C21.7 15.6 19.2 15.2 16.8 14C15.4 13.2 14 11.6 13 9Z"
                fill="#BE9038"
              />
            </svg>
          </div>
          <span
            style={{
              flex: 1,
              height: '1px',
              background: 'linear-gradient(90deg, rgba(233, 200, 131, 0.7), transparent)',
            }}
          />
        </div>

        {/* 5. Glowing Royal Action Button: OPEN INVITATION */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <button
            type="button"
            onClick={handleOpenInvitation}
            className="royal-open-invitation-action-btn"
          >
            <span>Open Invitation</span>
          </button>
        </div>
      </div>

      <style>{`
        /* Vertical Rhythm & Element Sizing (tuned per viewport in the media queries below) */
        .royal-gate-content {
          padding: clamp(8px, 1.6vh, 20px) 0;
          transform: scale(1) translateY(0);
          filter: none;
          transition: transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), filter 0.85s ease;
        }
        .royal-gate-content.royal-content-opening {
          transform: scale(1.04) translateY(-10px);
          filter: blur(8px);
        }
        .royal-ganesha-block {
          margin-bottom: clamp(3px, 1vh, 8px);
        }
        .royal-ganesha-halo {
          width: 54px;
          height: 54px;
        }
        .royal-ganesha-img {
          width: clamp(30px, 5vh, 46px);
        }
        .royal-invocation-row {
          gap: 8px;
          margin-top: 4px;
        }
        .royal-invocation-line {
          width: clamp(16px, 3.5vw, 32px);
        }
        .royal-invocation-malayalam {
          font-size: clamp(0.70rem, 2.2vw, 0.82rem);
        }
        .royal-invocation-sub {
          font-size: clamp(0.54rem, 1.6vw, 0.62rem);
          margin-top: 3px;
        }
        .royal-monogram-container {
          margin: clamp(4px, 1.3vh, 14px) 0;
        }
        .royal-names-wrapper {
          margin: clamp(2px, 0.7vh, 8px) 0 clamp(4px, 1.2vh, 12px) 0;
        }
        .royal-lotus-divider {
          gap: 12px;
          max-width: 240px;
          margin: 0 auto clamp(6px, 1.8vh, 16px) auto;
        }
        .royal-lotus-svg {
          width: 24px;
          height: 15px;
        }

        /* Monogram Responsive Sizing */
        .royal-monogram-ring {
          width: clamp(88px, 18vh, 185px);
          height: clamp(88px, 18vh, 185px);
          padding: 2px;
        }
        .royal-logo-halo {
          width: clamp(110px, 22vh, 225px);
          height: clamp(110px, 22vh, 225px);
          animation: logoHaloPulse 4s ease-in-out infinite alternate;
        }

        /* Couple Names Typography */
        .royal-gate-title {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          column-gap: 0.35em;
          row-gap: 0.08em;
          font-family: 'Alex Brush', 'Great Vibes', cursive;
          /* Sized so both names + ampersand always fit on one balanced row (~12.8em wide) */
          font-size: clamp(1.6rem, min(4.2vw, 7vh), 3.6rem);
          line-height: 1.15;
          font-weight: 400;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: 0.01em;
          text-shadow:
            0 4px 18px rgba(0, 0, 0, 0.8),
            0 0 28px rgba(233, 200, 131, 0.35),
            0 0 50px rgba(233, 200, 131, 0.15);
        }

        /* Grouping Sethulekshmi S & together so & never gets orphaned */
        .royal-gate-name-group {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
        }

        .royal-gate-name-wrap {
          white-space: nowrap;
          display: inline-block;
        }

        .royal-gate-second-name {
          white-space: nowrap;
          display: inline-block;
        }

        .royal-gate-amp-wrap {
          font-family: 'Great Vibes', cursive;
          font-size: 0.88em;
          color: var(--gold-champagne, #E9C883);
          padding: 0 0.12em;
          display: inline-block;
        }

        /* Action Button Styling - Accessible 44-48px touch target */
        .royal-open-invitation-action-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 44px;
          padding: clamp(9px, 1.6vh, 12px) clamp(24px, 5.5vw, 34px);
          background: linear-gradient(180deg, #F8E3A5 0%, #E2BC66 50%, #C6983C 100%);
          color: #07241E;
          font-family: 'Plus Jakarta Sans', var(--font-sans), sans-serif;
          font-size: clamp(0.72rem, 1.8vw, 0.78rem);
          font-weight: 750;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          border: 1px solid rgba(255, 235, 185, 0.85);
          border-radius: 9999px;
          box-shadow:
            0 0 22px rgba(226, 188, 102, 0.45),
            0 6px 18px rgba(0, 0, 0, 0.5),
            inset 0 1px 2px rgba(255, 255, 255, 0.65);
          cursor: pointer;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
          transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
          outline: none;
          user-select: none;
          animation: royalButtonGlowPulse 3s ease-in-out infinite alternate;
        }

        @media (hover: hover) {
          .royal-open-invitation-action-btn:hover {
            transform: translateY(-2px) scale(1.025);
            box-shadow: 0 0 45px rgba(226, 188, 102, 0.75), 0 14px 34px rgba(0, 0, 0, 0.65);
            background: linear-gradient(180deg, #FFF0BE 0%, #E8C472 50%, #D1A346 100%);
            border-color: #FFFFFF;
          }
        }

        .royal-open-invitation-action-btn:focus-visible {
          outline: 2px solid #FFF4D0;
          outline-offset: 4px;
        }

        .royal-open-invitation-action-btn:focus-visible {
          outline: 2px solid #FFFFFF;
          outline-offset: 3px;
          box-shadow: 0 0 30px rgba(233, 200, 131, 0.8);
        }

        .royal-open-invitation-action-btn:active {
          transform: translateY(0) scale(0.96);
          box-shadow: 0 0 15px rgba(226, 188, 102, 0.5), 0 4px 10px rgba(0, 0, 0, 0.6);
        }

        @keyframes royalButtonGlowPulse {
          0% {
            box-shadow:
              0 0 16px rgba(226, 188, 102, 0.35),
              0 6px 18px rgba(0, 0, 0, 0.5),
              inset 0 1px 2px rgba(255, 255, 255, 0.6);
          }
          100% {
            box-shadow:
              0 0 28px rgba(226, 188, 102, 0.6),
              0 8px 22px rgba(0, 0, 0, 0.55),
              inset 0 1px 2px rgba(255, 255, 255, 0.8);
          }
        }

        @keyframes logoHaloPulse {
          0% {
            transform: scale(0.96);
            opacity: 0.65;
          }
          100% {
            transform: scale(1.08);
            opacity: 1;
          }
        }

        .royal-starburst {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #FFF4D0;
          box-shadow: 0 0 16px 4px rgba(233, 200, 131, 0.8), 0 0 35px 8px rgba(214, 178, 101, 0.4);
          pointer-events: none;
        }

        .royal-starburst-left {
          top: 45%;
          left: 12%;
          animation: starburstPulse 3s ease-in-out infinite alternate;
        }

        .royal-starburst-right {
          top: 45%;
          right: 12%;
          animation: starburstPulse 3s ease-in-out infinite alternate 1.5s;
        }

        @keyframes starburstPulse {
          0% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.3);
            opacity: 1;
          }
        }

        /* Tablets and Medium Screens (<= 768px) */
        @media (max-width: 768px) {
          .royal-starburst {
            display: none;
          }
          .royal-gate-title {
            font-size: clamp(1.95rem, 6.8vw, 2.5rem);
            line-height: 1.15;
          }
          .royal-lotus-divider {
            max-width: 210px;
          }
        }

        /* Mobile Screens (<= 480px) */
        @media (max-width: 480px) {
          .royal-gate-content {
            padding: 6px 0;
          }
          .royal-gate-title {
            font-size: clamp(1.85rem, 7.2vw, 2.3rem);
            line-height: 1.12;
          }
          .royal-gate-amp-wrap {
            font-size: 0.82em;
            padding: 0 0.1em;
          }
          .royal-monogram-ring {
            width: clamp(110px, 34vw, 145px);
            height: clamp(110px, 34vw, 145px);
          }
          .royal-logo-halo {
            width: clamp(130px, 42vw, 175px);
            height: clamp(130px, 42vw, 175px);
          }
          .royal-lotus-divider {
            max-width: 180px;
          }
        }

        /* Short screens & Landscape mobile devices (<= 620px height, not portrait) */
        @media (max-height: 620px) and (min-aspect-ratio: 17/20) {
          .royal-gate-content {
            padding: 4px 0;
          }
          .royal-ganesha-block {
            margin-bottom: 2px;
          }
          .royal-ganesha-img {
            width: clamp(26px, 6.5vh, 36px);
          }
          .royal-monogram-container {
            margin: 1vh 0;
          }
          .royal-monogram-ring {
            width: clamp(80px, 21vh, 130px);
            height: clamp(80px, 21vh, 130px);
          }
          .royal-logo-halo {
            width: clamp(100px, 26vh, 160px);
            height: clamp(100px, 26vh, 160px);
          }
          .royal-names-wrapper {
            margin: 2px 0 4px 0;
          }
          .royal-gate-title {
            flex-direction: row;
            column-gap: 0.3em;
            font-size: clamp(1.4rem, min(4.2vw, 8vh), 2.6rem);
            line-height: 1.15;
          }
          .royal-gate-amp-wrap {
            font-size: 0.88em;
            margin: 0;
            padding: 0 0.1em;
          }
          .royal-lotus-divider {
            margin: 0 auto 6px auto;
          }
          .royal-open-invitation-action-btn {
            padding: 8px 24px;
            font-size: 0.72rem;
          }
        }

        /*
          Short touch screens (landscape phones). Sized in vh rather than px: without device-width
          viewport metadata, px are shrunk to fit a virtual layout, while vh still tracks the real screen.
          Short desktop windows (fine pointer) keep the px-based rules above.
        */
        @media (max-height: 620px) and (min-aspect-ratio: 17/20) and (pointer: coarse) {
          .royal-gate-content {
            padding: 1vh 0;
          }
          .royal-ganesha-block {
            margin-bottom: 0.5vh;
          }
          .royal-ganesha-halo {
            width: 11vh;
            height: 11vh;
          }
          .royal-ganesha-img {
            width: 8vh;
          }
          .royal-invocation-row {
            gap: 2vh;
            margin-top: 0.8vh;
          }
          .royal-invocation-line {
            width: 6vh;
          }
          .royal-invocation-malayalam {
            font-size: max(0.7rem, 3.9vh);
          }
          .royal-invocation-sub {
            font-size: max(0.56rem, 3.2vh);
            margin-top: 0.6vh;
          }
          .royal-monogram-container {
            margin: 1.5vh 0;
          }
          .royal-monogram-ring {
            width: 20vh;
            height: 20vh;
          }
          .royal-logo-halo {
            width: 25vh;
            height: 25vh;
          }
          .royal-gate-title {
            font-size: max(1.4rem, min(8.5vh, 6vw));
          }
          .royal-lotus-divider {
            gap: 3vh;
            max-width: 56vh;
            margin: 0 auto 1.5vh auto;
          }
          .royal-lotus-svg {
            width: 6vh;
            height: 3.75vh;
          }
          .royal-open-invitation-action-btn {
            gap: 2vh;
            min-height: max(44px, 15vh);
            padding: 0 8vh;
            font-size: max(0.72rem, 3.7vh);
          }
          .royal-starburst {
            width: 2.4vh;
            height: 2.4vh;
            box-shadow: 0 0 5vh 1.2vh rgba(233, 200, 131, 0.8), 0 0 10vh 2.4vh rgba(214, 178, 101, 0.4);
          }
        }

        /*
          Portrait phones & tablets. Everything is sized from one fluid unit (--u) derived from the
          viewport's width and height, so the composition keeps the same proportions whether the
          browser lays the page out at device width or at a zoomed-out virtual width.
          --u lives on the backdrop so the starbursts (siblings of the content) can use it too.
        */
        @media (max-aspect-ratio: 17/20) {
          .royal-gate-backdrop {
            --u: min(1vw, 0.64vh);
          }
          .royal-gate-content {
            padding: calc(var(--u) * 2) 0;
          }
          .royal-starburst {
            display: block;
            width: calc(var(--u) * 2);
            height: calc(var(--u) * 2);
            box-shadow:
              0 0 calc(var(--u) * 4) var(--u) rgba(233, 200, 131, 0.8),
              0 0 calc(var(--u) * 9) calc(var(--u) * 2) rgba(214, 178, 101, 0.4);
          }
          .royal-starburst-left {
            left: 8%;
          }
          .royal-starburst-right {
            right: 8%;
          }
          .royal-ganesha-block {
            margin-bottom: calc(var(--u) * 2.5);
          }
          .royal-ganesha-halo {
            width: calc(var(--u) * 15);
            height: calc(var(--u) * 15);
          }
          .royal-ganesha-img {
            width: calc(var(--u) * 12);
          }
          .royal-invocation-row {
            gap: calc(var(--u) * 2.2);
            margin-top: calc(var(--u) * 1.4);
          }
          .royal-invocation-line {
            width: calc(var(--u) * 7);
          }
          .royal-invocation-malayalam {
            font-size: max(11px, calc(var(--u) * 3.9));
          }
          /* vw floors keep text and the button usable when --u is height-limited on short phones */
          .royal-invocation-sub {
            font-size: max(9px, calc(var(--u) * 2.8), 2.85vw);
            margin-top: calc(var(--u) * 1.1);
          }
          .royal-monogram-container {
            margin: calc(var(--u) * 3.5) 0;
          }
          .royal-monogram-ring {
            width: calc(var(--u) * 42);
            height: calc(var(--u) * 42);
            padding: max(2px, calc(var(--u) * 0.6));
          }
          .royal-logo-halo {
            width: calc(var(--u) * 52);
            height: calc(var(--u) * 52);
          }
          .royal-names-wrapper {
            margin: var(--u) 0 calc(var(--u) * 2.5) 0;
          }
          /* Deliberate three-line stack: name / ampersand / name */
          .royal-gate-title {
            flex-direction: column;
            gap: 0;
            font-size: max(1.75rem, calc(var(--u) * 12));
            line-height: 1.12;
          }
          .royal-gate-amp-wrap {
            font-size: 0.72em;
            line-height: 1;
            margin: calc(var(--u) * -0.6) 0;
            padding: 0;
          }
          .royal-lotus-divider {
            gap: calc(var(--u) * 3);
            max-width: calc(var(--u) * 56);
            margin: 0 auto calc(var(--u) * 4) auto;
          }
          .royal-lotus-svg {
            width: calc(var(--u) * 6.5);
            height: calc(var(--u) * 4);
          }
          .royal-open-invitation-action-btn {
            gap: calc(var(--u) * 2);
            min-height: max(44px, calc(var(--u) * 12.5), 13.75vw);
            padding: calc(var(--u) * 3) calc(var(--u) * 9.5);
            font-size: max(0.75rem, calc(var(--u) * 3.6), 3.75vw);
          }
        }

        /* Portrait tablets: a gentler unit and button so the phone stack doesn't balloon */
        @media (min-aspect-ratio: 7/10) and (max-aspect-ratio: 17/20) {
          .royal-gate-backdrop {
            --u: min(0.66vw, 0.46vh);
          }
          .royal-invocation-sub {
            font-size: max(9px, calc(var(--u) * 2.8));
          }
          .royal-open-invitation-action-btn {
            min-height: max(44px, calc(var(--u) * 11));
            padding: calc(var(--u) * 2.6) calc(var(--u) * 8);
            font-size: max(0.75rem, calc(var(--u) * 3.2));
          }
        }

        /* Prefer the small viewport height so mobile browser toolbars never crowd the button */
        @supports (height: 1svh) {
          @media (max-aspect-ratio: 17/20) {
            .royal-gate-backdrop {
              --u: min(1vw, 0.64svh);
            }
          }
          @media (min-aspect-ratio: 7/10) and (max-aspect-ratio: 17/20) {
            .royal-gate-backdrop {
              --u: min(0.66vw, 0.46svh);
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .royal-logo-halo,
          .royal-starburst,
          .royal-open-invitation-action-btn {
            animation: none;
          }
          .royal-open-invitation-action-btn {
            transition: none;
          }
          .royal-open-invitation-action-btn:hover,
          .royal-open-invitation-action-btn:active {
            transform: none;
          }
          /* Skip the zoom + blur on open; the backdrop keeps its plain opacity fade */
          .royal-gate-content {
            transition: none;
          }
          .royal-gate-content.royal-content-opening {
            transform: none;
            filter: none;
          }
        }
      `}</style>
    </div>
  );
};
