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
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(14px, 3vh, 28px) clamp(16px, 4vw, 36px)',
        backgroundColor: '#031713',
        backgroundImage: `
          radial-gradient(circle at 50% 45%, rgba(20, 68, 58, 0.92) 0%, rgba(5, 26, 22, 0.98) 60%, #020C0A 100%)
        `,
        overflowX: 'hidden',
        overflowY: 'auto',
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

      {/* Central Content Composition */}
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
          padding: 'clamp(10px, 2vh, 20px) 0',
          transition: 'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), filter 0.85s ease',
          transform: isOpening ? 'scale(1.04) translateY(-10px)' : 'scale(1) translateY(0)',
          filter: isOpening ? 'blur(8px)' : 'none',
        }}
      >
        {/* 1. Auspicious Lord Ganesha Header */}
        <div style={{ marginBottom: 'clamp(4px, 1vh, 8px)' }}>
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
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(233, 200, 131, 0.45) 0%, transparent 70%)',
                filter: 'blur(8px)',
                pointerEvents: 'none',
              }}
            />
            <img
              src="/assets/images/lord_ganesha_gold.png"
              alt="Lord Ganesha"
              style={{
                position: 'relative',
                width: 'clamp(36px, 5.5vh, 48px)',
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
                width: 'clamp(18px, 3.5vw, 30px)',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(233, 200, 131, 0.65))',
              }}
            />
            <span
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(0.62rem, 1.1vw, 0.72rem)',
                color: 'var(--gold-champagne, #E9C883)',
                letterSpacing: '0.06em',
                fontWeight: 500,
                textShadow: '0 0 8px rgba(233, 200, 131, 0.25)',
              }}
            >
              ഓം ശ്രീ ഗണേശായ നമഃ
            </span>
            <span
              style={{
                width: 'clamp(18px, 3.5vw, 30px)',
                height: '1px',
                background: 'linear-gradient(90deg, rgba(233, 200, 131, 0.65), transparent)',
              }}
            />
          </div>

          {/* Subtitle: AUSPICIOUS WEDDING INVITATION */}
          <div
            style={{
              fontFamily: "'Plus Jakarta Sans', var(--font-sans), sans-serif",
              fontSize: 'clamp(0.50rem, 0.85vw, 0.58rem)',
              fontWeight: 600,
              letterSpacing: '0.26em',
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
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'clamp(6px, 1.4vh, 14px) 0',
          }}
        >
          {/* Ambient Golden Radial Halo behind Logo */}
          <div
            className="royal-logo-halo"
            style={{
              position: 'absolute',
              width: 'clamp(170px, 24vh, 230px)',
              height: 'clamp(170px, 24vh, 230px)',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(233, 200, 131, 0.35) 0%, rgba(26, 85, 74, 0.45) 50%, transparent 75%)',
              filter: 'blur(20px)',
              pointerEvents: 'none',
            }}
          />

          {/* Monogram Outer Golden Rim Ring */}
          <div
            style={{
              position: 'relative',
              width: 'clamp(145px, 21vh, 195px)',
              height: 'clamp(145px, 21vh, 195px)',
              borderRadius: '50%',
              padding: '2px',
              background: 'linear-gradient(135deg, rgba(233, 200, 131, 0.75) 0%, rgba(138, 102, 38, 0.4) 50%, rgba(233, 200, 131, 0.8) 100%)',
              boxShadow: `
                0 14px 35px rgba(0, 0, 0, 0.75),
                0 0 26px rgba(233, 200, 131, 0.32),
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
          style={{
            margin: 'clamp(2px, 0.8vh, 8px) 0 clamp(6px, 1.2vh, 12px) 0',
            padding: '0 10px',
            width: '100%',
          }}
        >
          <h1
            style={{
              fontFamily: "'Alex Brush', 'Great Vibes', cursive",
              fontSize: 'clamp(2.2rem, 5.8vh, 3.8rem)',
              lineHeight: 1.12,
              fontWeight: 400,
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '0.01em',
              textShadow: `
                0 4px 18px rgba(0, 0, 0, 0.8),
                0 0 28px rgba(233, 200, 131, 0.35),
                0 0 50px rgba(233, 200, 131, 0.15)
              `,
              whiteSpace: 'normal',
              wordBreak: 'break-word',
            }}
          >
            Sethulekshmi S{' '}
            <span
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: '0.88em',
                color: 'var(--gold-champagne, #E9C883)',
                padding: '0 0.1em',
              }}
            >
              &amp;
            </span>{' '}
            Aromal Kurup
          </h1>
        </div>

        {/* 4. Traditional Golden Lotus Flourish Divider matching Reference */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            width: '100%',
            maxWidth: '260px',
            margin: '0 auto clamp(10px, 2vh, 18px) auto',
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
              width="26"
              height="16"
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
            style={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '7px',
              padding: '8px 20px',
              minWidth: 'auto',
              background: 'linear-gradient(180deg, #F8E3A5 0%, #E2BC66 50%, #C6983C 100%)',
              color: '#07241E',
              fontFamily: "'Plus Jakarta Sans', var(--font-sans), sans-serif",
              fontSize: '0.70rem',
              fontWeight: 750,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              border: '1px solid rgba(255, 235, 185, 0.8)',
              borderRadius: '9999px',
              boxShadow: `
                0 0 20px rgba(226, 188, 102, 0.42),
                0 6px 16px rgba(0, 0, 0, 0.5),
                inset 0 1px 2px rgba(255, 255, 255, 0.6)
              `,
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              outline: 'none',
              userSelect: 'none',
            }}
          >
            <span>Open  Invitation</span>
          </button>

          {/* Subtext in Italic Serif */}
          {/* <p
            style={{
              margin: 'clamp(8px, 1.4vh, 12px) 0 0 0',
              fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontStyle: 'italic',
              fontSize: 'clamp(0.80rem, 1.6vw, 0.92rem)',
              color: 'rgba(247, 226, 172, 0.88)',
              letterSpacing: '0.03em',
              textShadow: '0 2px 6px rgba(0, 0, 0, 0.7)',
            }}
          >
            Tap to enter the celebration with soundtrack
          </p> */}
        </div>
      </div>

      <style>{`
        .royal-open-invitation-action-btn:hover {
          transform: translateY(-2px) scale(1.025);
          box-shadow: 0 0 45px rgba(226, 188, 102, 0.75), 0 14px 34px rgba(0, 0, 0, 0.65) !important;
          background: linear-gradient(180deg, #FFF0BE 0%, #E8C472 50%, #D1A346 100%) !important;
          border-color: #FFFFFF !important;
        }

        .royal-open-invitation-action-btn:active {
          transform: translateY(0) scale(0.99);
        }

        .royal-logo-halo {
          animation: logoHaloPulse 4s ease-in-out infinite alternate;
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

        @media (max-width: 600px) {
          .royal-starburst {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
