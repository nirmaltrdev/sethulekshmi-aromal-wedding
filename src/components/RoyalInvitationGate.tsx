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
        padding: 'clamp(12px, 2.5vh, 28px) clamp(14px, 4vw, 36px)',
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
          maxWidth: '680px',
          width: '100%',
          zIndex: 2,
          margin: 'auto',
          padding: 'clamp(8px, 1.6vh, 20px) 0',
          transition: 'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), filter 0.85s ease',
          transform: isOpening ? 'scale(1.04) translateY(-10px)' : 'scale(1) translateY(0)',
          filter: isOpening ? 'blur(8px)' : 'none',
        }}
      >
        {/* 1. Auspicious Lord Ganesha Header */}
        <div className="royal-ganesha-block" style={{ marginBottom: 'clamp(3px, 1vh, 8px)' }}>
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
              style={{
                position: 'absolute',
                width: '54px',
                height: '54px',
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
                width: 'clamp(34px, 5vh, 46px)',
                height: 'auto',
                display: 'inline-block',
                filter: 'drop-shadow(0 3px 10px rgba(0, 0, 0, 0.75)) drop-shadow(0 0 12px rgba(233, 200, 131, 0.55))',
              }}
            />
          </div>

          {/* Invocation Text in Malayalam with Flanking Hairlines */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '4px',
            }}
          >
            <span
              style={{
                width: 'clamp(16px, 3.5vw, 32px)',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(233, 200, 131, 0.65))',
              }}
            />
            <span
              className="royal-invocation-malayalam"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(0.70rem, 2.2vw, 0.82rem)',
                color: 'var(--gold-champagne, #E9C883)',
                letterSpacing: '0.04em',
                fontWeight: 500,
                textShadow: '0 0 8px rgba(233, 200, 131, 0.25)',
              }}
            >
              ഓം ശ്രീ ഗണേശായ നമഃ
            </span>
            <span
              style={{
                width: 'clamp(16px, 3.5vw, 32px)',
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
              fontSize: 'clamp(0.54rem, 1.6vw, 0.62rem)',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(233, 200, 131, 0.82)',
              marginTop: '3px',
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
            margin: 'clamp(6px, 1.3vh, 14px) 0',
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
              padding: '2px',
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
            margin: 'clamp(2px, 0.7vh, 8px) 0 clamp(6px, 1.2vh, 12px) 0',
            padding: '0 8px',
            width: '100%',
          }}
        >
          <h1 className="royal-gate-title">
            <span className="royal-gate-name-wrap">Sethulekshmi S</span>
            <span className="royal-gate-amp-wrap">&amp;</span>
            <span className="royal-gate-name-wrap">Aromal Kurup</span>
          </h1>
        </div>

        {/* 4. Traditional Golden Lotus Flourish Divider matching Reference */}
        <div
          className="royal-lotus-divider"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            width: '100%',
            maxWidth: '240px',
            margin: '0 auto clamp(8px, 1.8vh, 16px) auto',
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

        {/* 5. Glowing Royal Action Button: OPEN ROYAL INVITATION */}
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
        /* Monogram Responsive Sizing */
        .royal-monogram-ring {
          width: clamp(120px, 18vh, 185px);
          height: clamp(120px, 18vh, 185px);
        }
        .royal-logo-halo {
          width: clamp(150px, 22vh, 225px);
          height: clamp(150px, 22vh, 225px);
          animation: logoHaloPulse 4s ease-in-out infinite alternate;
        }

        /* Couple Names Typography */
        .royal-gate-title {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          column-gap: 0.35em;
          row-gap: 0.1em;
          font-family: 'Alex Brush', 'Great Vibes', cursive;
          font-size: clamp(2.0rem, 5.2vw, 3.6rem);
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

        .royal-gate-name-wrap {
          white-space: nowrap;
          display: inline-block;
        }

        .royal-gate-amp-wrap {
          font-family: 'Great Vibes', cursive;
          font-size: 0.88em;
          color: var(--gold-champagne, #E9C883);
          padding: 0 0.1em;
          display: inline-block;
        }

        /* Action Button Styling */
        .royal-open-invitation-action-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 42px;
          padding: clamp(9px, 1.6vh, 12px) clamp(24px, 5.5vw, 34px);
          background: linear-gradient(180deg, #F8E3A5 0%, #E2BC66 50%, #C6983C 100%);
          color: #07241E;
          font-family: 'Plus Jakarta Sans', var(--font-sans), sans-serif;
          font-size: clamp(0.72rem, 1.9vw, 0.78rem);
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

        .royal-open-invitation-action-btn:hover {
          transform: translateY(-2px) scale(1.025);
          box-shadow: 0 0 45px rgba(226, 188, 102, 0.75), 0 14px 34px rgba(0, 0, 0, 0.65);
          background: linear-gradient(180deg, #FFF0BE 0%, #E8C472 50%, #D1A346 100%);
          border-color: #FFFFFF;
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

        /* Mobile Screens (<= 640px) */
        @media (max-width: 640px) {
          .royal-starburst {
            display: none;
          }
          .royal-gate-title {
            flex-direction: column;
            gap: 0;
            font-size: clamp(1.85rem, 7.8vw, 2.45rem);
            line-height: 1.1;
          }
          .royal-gate-amp-wrap {
            font-size: 0.76em;
            margin: -2px 0;
            padding: 0;
          }
          .royal-monogram-ring {
            width: clamp(120px, 17vh, 155px);
            height: clamp(120px, 17vh, 155px);
          }
          .royal-logo-halo {
            width: clamp(140px, 20vh, 185px);
            height: clamp(140px, 20vh, 185px);
          }
          .royal-lotus-divider {
            max-width: 200px;
          }
        }

        /* Short screens & Landscape mobile devices (<= 620px height) */
        @media (max-height: 620px) {
          .royal-gate-content {
            padding: 4px 0 !important;
          }
          .royal-ganesha-block {
            margin-bottom: 2px !important;
          }
          .royal-ganesha-img {
            width: 30px !important;
          }
          .royal-monogram-container {
            margin: 4px 0 !important;
          }
          .royal-monogram-ring {
            width: 95px !important;
            height: 95px !important;
          }
          .royal-logo-halo {
            width: 120px !important;
            height: 120px !important;
          }
          .royal-names-wrapper {
            margin: 2px 0 4px 0 !important;
          }
          .royal-gate-title {
            font-size: 1.65rem !important;
            flex-direction: row !important;
            gap: 0.25em !important;
          }
          .royal-gate-amp-wrap {
            margin: 0 !important;
          }
          .royal-lotus-divider {
            margin: 0 auto 6px auto !important;
          }
          .royal-open-invitation-action-btn {
            min-height: 36px;
            padding: 6px 20px;
            font-size: 0.70rem;
          }
        }
      `}</style>
    </div>
  );
};
