import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, ChevronDown, Sparkles, ArrowUpRight } from 'lucide-react';
import { CURATED_PHOTOGRAPHS } from '../data/curatedAssets';

export const HeroSection: React.FC = () => {
  // Target: Sunday, October 25, 2026, 12:08:00 PM IST
  const targetDate = new Date('2026-10-25T12:08:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  // Generate .ics calendar invite
  const downloadCalendarInvite = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//The Sacred Kerala Wedding//Sethulekshmi and Aromal//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'UID:wedding-sethulekshmi-aromal-2026@kerala.in',
      'DTSTART:20261025T063800Z', // 12:08 PM IST = 06:38 AM UTC
      'DTEND:20261025T100000Z',   // 03:30 PM IST = 10:00 AM UTC
      'SUMMARY:Sethulekshmi & Aromal | The Sacred Kerala Wedding',
      'DESCRIPTION:Sacred Wedding Muhurtham (12:08 PM - 12:30 PM) followed by Traditional Kerala Sadya at Santhi Auditorium, Konni.',
      'LOCATION:Santhi Auditorium, Eliyarackal, Konni, Pathanamthitta, Kerala 689691',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Sethulekshmi_and_Aromal_Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Sethulekshmi & Aromal | The Sacred Kerala Wedding'
  )}&dates=20261025T063800Z/20261025T100000Z&details=${encodeURIComponent(
    'The sacred wedding ceremony of Sethulekshmi S & Aromal Kurup. Muhurtham: 12:08 PM - 12:30 PM IST, followed by Royal Kerala Sadya.'
  )}&location=${encodeURIComponent(
    'Santhi Auditorium, Eliyarackal, Konni, Pathanamthitta, Kerala 689691'
  )}`;

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
        {/* Sacred Prelude Badge */}
        <div
          className="editorial-badge"
          style={{
            marginBottom: '1.5rem',
            animation: 'fadeIn 1s ease-out',
            borderColor: 'rgba(168, 197, 189, 0.3)',
            backgroundColor: 'rgba(12, 43, 38, 0.65)',
          }}
        >
          <Sparkles size={12} style={{ color: 'var(--gold-champagne)' }} />
          <span>With Divine Blessings of God &amp; Family</span>
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

        {/* Warm Invitation Line */}
        <p
          style={{
            fontFamily: 'var(--font-editorial)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.05rem, 2.2vw, 1.3rem)',
            color: '#F4EDE0',
            maxWidth: '680px',
            margin: '0 auto 1.8rem auto',
            lineHeight: 1.5,
            textShadow: '0 2px 14px rgba(0, 0, 0, 0.6)',
          }}
        >
          Cordially invite you to celebrate our sacred wedding union &amp; Muhurtham
        </p>

        {/* Verified Date, Muhurtham & Clickable Venue Anchor Bar */}
        <div className="hero-anchor-bar">
          <div className="hero-anchor-item">
            <Calendar size={16} style={{ color: 'var(--gold-champagne)', flexShrink: 0 }} />
            <span>Sunday, October 25, 2026</span>
          </div>

          <span className="hero-anchor-dot" aria-hidden="true" />

          <div className="hero-anchor-item">
            <Clock size={16} style={{ color: 'var(--gold-champagne)', flexShrink: 0 }} />
            <span>Muhurtham: 12:08 PM – 12:30 PM IST</span>
          </div>

          <span className="hero-anchor-dot" aria-hidden="true" />

          {/* Interactive Verified Google Maps Venue Link */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Santhi+Auditorium+Eliyarackal+Konni+Pathanamthitta+Kerala+689691"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-venue-link"
            aria-label="View wedding venue Santhi Auditorium, Konni on Google Maps (opens in new tab)"
            title="Click to view Santhi Auditorium, Konni in Google Maps for directions"
          >
            <MapPin size={15} style={{ color: 'var(--gold-champagne)', flexShrink: 0 }} />
            <span>Santhi Auditorium, Konni</span>
            <ArrowUpRight size={13} style={{ color: 'var(--gold-champagne)', opacity: 0.85, flexShrink: 0 }} />
          </a>
        </div>

        {/* Live Muhurtham Countdown Counter */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(70px, 100px))',
            gap: '12px',
            marginBottom: '2.8rem',
          }}
        >
          {[
            { label: 'DAYS', value: timeLeft.days },
            { label: 'HOURS', value: timeLeft.hours },
            { label: 'MINUTES', value: timeLeft.minutes },
            { label: 'SECONDS', value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: 'rgba(18, 60, 53, 0.55)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(168, 197, 189, 0.18)',
                borderRadius: 'var(--radius-md)',
                padding: '12px 6px',
                textAlign: 'center',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  lineHeight: 1,
                  marginBottom: '4px',
                }}
              >
                {String(item.value).padStart(2, '0')}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.22em',
                  fontWeight: 700,
                  color: '#A8C5BD',
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Action Controls: Add to Calendar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
          }}
        >
          <button
            onClick={downloadCalendarInvite}
            className="btn-emerald-gold"
            title="Download .ics calendar file"
          >
            <Calendar size={15} />
            Save Date (.ICS)
          </button>

          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-emerald-outline"
            style={{ fontSize: '0.78rem' }}
          >
            Google Calendar
          </a>
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
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 12px 22px;
          background: rgba(12, 43, 38, 0.76);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(168, 197, 189, 0.24);
          border-radius: 9999px;
          padding: 8px 18px 8px 24px;
          margin-bottom: 2.5rem;
          box-shadow: 0 8px 30px rgba(4, 18, 16, 0.35);
          max-width: 95%;
          box-sizing: border-box;
        }

        .hero-anchor-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #FFFFFF;
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 0.88rem;
          letter-spacing: 0.03em;
          white-space: nowrap;
        }

        .hero-anchor-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: rgba(168, 197, 189, 0.4);
          display: inline-block;
        }

        .hero-venue-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #F7E7CE;
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 0.88rem;
          letter-spacing: 0.03em;
          text-decoration: none;
          padding: 5px 12px;
          border-radius: 9999px;
          background: rgba(214, 178, 101, 0.12);
          border: 1px solid rgba(214, 178, 101, 0.35);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          white-space: nowrap;
          cursor: pointer;
        }

        .hero-venue-link:hover {
          background: rgba(214, 178, 101, 0.25);
          border-color: var(--gold-champagne);
          color: #FFFFFF;
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(214, 178, 101, 0.25);
        }

        .hero-venue-link:focus-visible {
          outline: 2px solid var(--gold-champagne);
          outline-offset: 2px;
        }

        @media (max-width: 768px) {
          .hero-anchor-bar {
            border-radius: var(--radius-md);
            padding: 12px 16px;
            gap: 10px 14px;
          }
          .hero-anchor-dot {
            display: none;
          }
          .hero-anchor-item, .hero-venue-link {
            font-size: 0.82rem;
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
