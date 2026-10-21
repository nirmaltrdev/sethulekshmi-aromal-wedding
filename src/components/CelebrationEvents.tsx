import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Navigation, Sparkles } from 'lucide-react';
import { CURATED_PHOTOGRAPHS } from '../data/curatedAssets';
import { WeddingMonogram } from './WeddingMonogram';

interface EventCountdownProps {
  targetDate: string;
  eventTitle: string;
  venue?: string;
  location?: string;
}

const EventCountdown: React.FC<EventCountdownProps> = ({ targetDate, eventTitle, venue, location }) => {
  const target = new Date(targetDate).getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTime = () => {
      const diff = target - Date.now();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [target]);

  const units = [
    { label: 'DAYS', value: String(timeLeft.days).padStart(2, '0') },
    { label: 'HOURS', value: String(timeLeft.hours).padStart(2, '0') },
    { label: 'MINUTES', value: String(timeLeft.minutes).padStart(2, '0') },
    { label: 'SECONDS', value: String(timeLeft.seconds).padStart(2, '0') },
  ];

  const shortTitle = eventTitle.includes('Muhurtham')
    ? 'Auspicious Muhurtham'
    : eventTitle.includes('Gathering')
      ? 'Blessing Gathering'
      : eventTitle;

  const isGathering = eventTitle.includes('Gathering');

  // Generate .ics calendar file for this event
  const downloadEventIcs = () => {
    const dtStart = isGathering ? '20261024T123000Z' : '20261025T063800Z'; // 6:00 PM IST / 12:08 PM IST
    const dtEnd = isGathering ? '20261024T160000Z' : '20261025T100000Z';
    const summary = `Sethulekshmi & Aromal | ${eventTitle}`;
    const desc = isGathering
      ? 'Intimate familial pre-wedding gathering at Suresh Bhavan, Achencovil, Kollam.'
      : 'Sacred Kerala Wedding Muhurtham (12:08 PM - 12:30 PM IST) at Santhi Auditorium, Konni.';
    const loc = venue && location
      ? `${venue}, ${location}`
      : isGathering
        ? 'Suresh Bhavan, Achencovil, Kollam, Kerala'
        : 'Santhi Auditorium, Eliyarackal, Konni, Pathanamthitta, Kerala 689691';

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//The Sacred Kerala Wedding//Sethulekshmi and Aromal//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:wedding-${isGathering ? 'prewedding' : 'muhurtham'}-2026@kerala.in`,
      `DTSTART:${dtStart}`,
      `DTEND:${dtEnd}`,
      `SUMMARY:${summary}`,
      `DESCRIPTION:${desc}`,
      `LOCATION:${loc}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${eventTitle.replace(/\s+/g, '_')}_Sethulekshmi_and_Aromal.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Google Calendar URL
  const googleDates = isGathering
    ? '20261024T123000Z/20261024T160000Z'
    : '20261025T063800Z/20261025T100000Z';
  const googleSummary = encodeURIComponent(`Sethulekshmi & Aromal | ${eventTitle}`);
  const googleDetails = encodeURIComponent(
    isGathering
      ? 'Intimate familial pre-wedding gathering to invoke sacred blessings at Suresh Bhavan, Achencovil, Kollam.'
      : 'The sacred wedding ceremony and Muhurtham of Sethulekshmi S & Aromal Kurup at Santhi Auditorium, Konni.'
  );
  const googleLocation = encodeURIComponent(
    venue && location
      ? `${venue}, ${location}`
      : isGathering
        ? 'Suresh Bhavan, Achencovil, Kollam, Kerala'
        : 'Santhi Auditorium, Eliyarackal, Konni, Pathanamthitta, Kerala 689691'
  );
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${googleSummary}&dates=${googleDates}&details=${googleDetails}&location=${googleLocation}`;

  return (
    <div
      style={{
        padding: '16px 20px',
        backgroundColor: '#0C2B26',
        borderRadius: 'var(--radius-md, 14px)',
        marginBottom: '20px',
        boxShadow: '0 10px 28px rgba(12, 43, 38, 0.16)',
        border: '1.5px solid rgba(214, 178, 101, 0.45)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#D4AF37',
              boxShadow: '0 0 8px #D4AF37',
              display: 'inline-block',
            }}
          />
          <span
            style={{
              fontSize: '0.68rem',
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--gold-champagne, #E9C883)',
            }}
          >
            Countdown to {shortTitle}
          </span>
        </div>
        <span
          style={{
            fontSize: '0.62rem',
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.7)',
          }}
        >
          Live Timer
        </span>
      </div>

      {/* 4 Counter Boxes - Styled exactly after Hero Countdown */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px',
        }}
      >
        {units.map((u) => (
          <div
            key={u.label}
            style={{
              backgroundColor: 'rgba(8, 32, 29, 0.85)',
              border: '1px solid rgba(214, 178, 101, 0.28)',
              borderRadius: '10px',
              padding: '8px 4px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-editorial, 'Playfair Display', Georgia, serif)",
                fontSize: 'clamp(1.2rem, 2.3vw, 1.6rem)',
                fontWeight: 600,
                color: '#FFFFFF',
                lineHeight: 1.1,
              }}
            >
              {u.value}
            </div>
            <div
              style={{
                fontSize: '0.58rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                letterSpacing: '0.14em',
                color: 'var(--gold-champagne, #E9C883)',
                marginTop: '3px',
              }}
            >
              {u.label}
            </div>
          </div>
        ))}
      </div>

      {/* Save Calendar Action Buttons */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          marginTop: '14px',
          paddingTop: '12px',
          borderTop: '1px solid rgba(214, 178, 101, 0.2)',
        }}
      >
        <button
          onClick={downloadEventIcs}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '8px 18px',
            background: 'linear-gradient(135deg, #ECC875 0%, #C5A059 100%)',
            color: '#08201D',
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: '0.74rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            borderRadius: '9999px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            boxShadow: '0 4px 14px rgba(214, 178, 101, 0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = '0 6px 18px rgba(214, 178, 101, 0.45)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 14px rgba(214, 178, 101, 0.3)';
          }}
          title="Download .ics calendar file"
        >
          <Calendar size={13} />
          Save Date (.ICS)
        </button>

        <a
          href={googleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '8px 18px',
            background: 'rgba(18, 60, 53, 0.65)',
            color: '#FFFFFF',
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: '0.74rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            borderRadius: '9999px',
            border: '1px solid rgba(214, 178, 101, 0.45)',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.backgroundColor = 'rgba(35, 92, 82, 0.85)';
            e.currentTarget.style.borderColor = 'var(--gold-champagne)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.backgroundColor = 'rgba(18, 60, 53, 0.65)';
            e.currentTarget.style.borderColor = 'rgba(214, 178, 101, 0.45)';
          }}
        >
          Google Calendar
        </a>
      </div>
    </div>
  );
};

export const CelebrationEvents: React.FC = () => {
  const events = [
    {
      category: 'Blessing Ceremony',
      title: 'Pre-Wedding Gathering',
      date: 'Saturday, October 24, 2026',
      time: '6:00 PM Onwards',
      countdownDate: '2026-10-24T18:00:00+05:30',
      venue: 'Suresh Bhavan',
      location: 'Achencovil, Kollam District',
      description: 'An intimate familial gathering to invoke sacred blessings and commence the matrimonial festivities with prayers, laughter, and cherished customs.',
      photo: CURATED_PHOTOGRAPHS.preWedding,
      dressCode: {
        theme: 'Pastel Ethnic & Kasavu Highlights',
        colors: ['#F5EBE6', '#D6B265', '#98B2AA'],
      },
      mapUrl: 'https://maps.google.com/?q=9.244347,76.833207',
      badge: 'Familial Blessings',
    },
    {
      category: 'Sacred Muhurtham',
      title: 'The Sacred Muhurtham',
      date: 'Sunday, October 25, 2026',
      time: '12:08 PM – 12:30 PM IST',
      countdownDate: '2026-10-25T12:08:00+05:30',
      arrival: 'Guest Welcome & Seating from 11:00 AM',
      venue: 'Santhi Auditorium',
      location: 'Eliyarackal, Konni, Pathanamthitta',
      description: 'The sacred Vedic rites, exchange of hand-woven floral garlands, and tying of the holy Thali at the auspicious hour ordained by the stars.',
      photo: CURATED_PHOTOGRAPHS.muhurtham,
      dressCode: {
        theme: 'Traditional Kerala Kasavu & Gold Attire',
        colors: ['#FFFFFF', '#D4AF37', '#B8860B'],
      },
      mapUrl: 'https://maps.google.com/?q=Santhi+Auditorium+Konni+Kerala',
      badge: 'Auspicious Muhurtham',
      featured: true,
    },
    {
      category: 'Traditional Feast',
      title: 'Royal Kerala Sadya Feast',
      date: 'Sunday, October 25, 2026',
      time: '12:30 PM – 3:30 PM IST',
      venue: 'Santhi Auditorium Banquet Hall',
      location: 'Eliyarackal, Konni',
      description: 'A grand feast served on fresh banana leaves featuring over 24 traditional Kerala delicacies, including Aviyal, Thoran, and celebratory Parippu & Payasam.',
      photo: CURATED_PHOTOGRAPHS.sadya,
      dressCode: {
        theme: 'Celebratory Festive Attire',
        colors: ['#FFFFFF', '#E6C280', '#2E6F40'],
      },
      mapUrl: 'https://maps.google.com/?q=Santhi+Auditorium+Konni+Kerala',
      badge: 'Traditional Feast',
      isFeast: true,
    },
  ];

  return (
    <section
      id="ceremonies"
      className="theme-luminous-cream"
      style={{
        padding: '130px 0',
        overflow: 'hidden',
      }}
    >
      <div className="editorial-container">
        {/* Section Header with Left Monogram Emblem and Right-Aligned Text Block */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
            marginBottom: '80px',
            flexWrap: 'wrap',
          }}
        >
          {/* Left Side: S & A Monogram Crest (Same Clean UI) */}
          <div
            style={{
              flex: '0 0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 0,
            }}
          >
            <WeddingMonogram size={300} theme="cream" />
          </div>

          {/* Right Side: The Sacred Celebrations Text Block (Right-Aligned) */}
          <div
            style={{
              flex: '1 1 520px',
              maxWidth: '680px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              textAlign: 'right',
            }}
          >
            <div className="editorial-badge" style={{ marginLeft: 'auto', marginRight: 0 }}>
              <Sparkles size={13} style={{ color: '#1B4F46' }} />
              <span>Itinerary of Celebrations</span>
            </div>
            <h2
              className="editorial-title"
              style={{
                marginBottom: '1.2rem',
                textAlign: 'right',
              }}
            >
              The Sacred Celebrations
            </h2>
            <p
              className="editorial-subtitle"
              style={{
                textAlign: 'right',
                marginLeft: 'auto',
                marginRight: 0,
              }}
            >
              Every moment has been thoughtfully orchestrated in accordance with Vedic tradition and familial hospitality.
              Please join us for each auspicious chapter.
            </p>
          </div>
        </div>

        {/* 3 Bespoke Event Compositions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
          {events.map((event, idx) => {
            const isReverse = idx % 2 === 1; // Alternates image left / right across all 4 acts
            return (
              <div
                key={event.title}
                className={`event-card-container ${isReverse ? 'event-card-reverse' : ''} ${!event.photo ? 'no-photo-grid' : ''}`}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: event.featured
                    ? '2px solid rgba(214, 178, 101, 0.65)'
                    : '1px solid rgba(12, 43, 38, 0.1)',
                  overflow: 'hidden',
                  boxShadow: event.featured
                    ? '0 24px 60px rgba(12, 43, 38, 0.08)'
                    : '0 12px 35px rgba(0, 0, 0, 0.03)',
                  display: 'grid',
                  gridTemplateColumns: event.photo ? undefined : '1fr',
                  transition: 'all 0.35s ease',
                  width: '100%',
                }}
              >
                {/* Event Visual Plate if Photo Exists */}
                {event.photo && (
                  <div
                    className="event-photo-frame img-emerald-frame"
                    style={{
                      position: 'relative',
                      width: '100%',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={event.photo.webFile}
                      alt={event.photo.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: event.photo.focalPosition || 'center 20%',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        background: 'rgba(8, 32, 29, 0.78)',
                        backdropFilter: 'blur(8px)',
                        color: 'var(--gold-champagne)',
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 700,
                        letterSpacing: '0.18em',
                        padding: '5px 14px',
                        borderRadius: 'var(--radius-full)',
                        textTransform: 'uppercase',
                        zIndex: 2,
                      }}
                    >
                      {event.category}
                    </div>
                  </div>
                )}

                {/* Event Content Block */}
                <div
                  style={{
                    padding: '40px 36px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '12px',
                      }}
                    >
                      {!event.photo && (
                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontFamily: 'var(--font-sans)',
                            fontWeight: 700,
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            color: '#235C52',
                          }}
                        >
                          {event.category}
                        </span>
                      )}
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-sans)',
                          fontWeight: 600,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          padding: '4px 10px',
                          borderRadius: 'var(--radius-full)',
                          backgroundColor: event.featured
                            ? 'rgba(214, 178, 101, 0.2)'
                            : 'rgba(12, 43, 38, 0.06)',
                          color: event.featured ? '#8C6820' : '#1B4F46',
                        }}
                      >
                        {event.badge}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-editorial)',
                        fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)',
                        color: '#08201D',
                        margin: '0 0 16px 0',
                      }}
                    >
                      {event.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.94rem',
                        lineHeight: 1.65,
                        color: '#4A635D',
                        marginBottom: '26px',
                      }}
                    >
                      {event.description}
                    </p>

                    {/* Timing & Venue Logistics */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '16px',
                        padding: '20px',
                        backgroundColor: 'var(--cream-pure)',
                        borderRadius: 'var(--radius-md)',
                        marginBottom: '24px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                        <Calendar size={18} style={{ color: '#235C52', marginTop: '2px' }} />
                        <div>
                          <div style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#667C76', fontWeight: 600 }}>
                            Date
                          </div>
                          <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#08201D' }}>
                            {event.date}
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                        <Clock size={18} style={{ color: '#235C52', marginTop: '2px' }} />
                        <div>
                          <div style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#667C76', fontWeight: 600 }}>
                            Time &amp; Muhurtham
                          </div>
                          <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#08201D' }}>
                            {event.time}
                          </div>
                          {event.arrival && (
                            <div style={{ fontSize: '0.78rem', color: '#8C6820', marginTop: '2px' }}>
                              {event.arrival}
                            </div>
                          )}
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                        <MapPin size={18} style={{ color: '#235C52', marginTop: '2px' }} />
                        <div>
                          <div style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#667C76', fontWeight: 600 }}>
                            Venue &amp; Location
                          </div>
                          <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#08201D' }}>
                            {event.venue}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: '#667C76' }}>
                            {event.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Live Ceremony Countdown Timer (Only on events with countdownDate, leaving Traditional Feast unchanged) */}
                    {event.countdownDate && (
                      <EventCountdown
                        targetDate={event.countdownDate}
                        eventTitle={event.title}
                        venue={event.venue}
                        location={event.location}
                      />
                    )}
                  </div>

                  {/* Bottom Row: Dress Code Swatches & Google Maps Navigation */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                      paddingTop: '16px',
                      borderTop: '1px solid rgba(12, 43, 38, 0.08)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#667C76' }}>
                        Suggested Attire:
                      </span>
                      <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#08201D' }}>
                        {event.dressCode.theme}
                      </span>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        {event.dressCode.colors.map((c, i) => (
                          <div
                            key={i}
                            style={{
                              width: '14px',
                              height: '14px',
                              borderRadius: '50%',
                              backgroundColor: c,
                              border: '1px solid rgba(0, 0, 0, 0.15)',
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    <a
                      href={event.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 18px',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'rgba(12, 43, 38, 0.06)',
                        color: '#08201D',
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        transition: 'all 0.25s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#08201D';
                        e.currentTarget.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(12, 43, 38, 0.06)';
                        e.currentTarget.style.color = '#08201D';
                      }}
                    >
                      <Navigation size={13} />
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .event-card-container {
            grid-template-columns: minmax(320px, 420px) 1fr !important;
          }
          .event-card-reverse {
            grid-template-columns: 1fr minmax(320px, 420px) !important;
          }
          .event-card-container.no-photo-grid {
            grid-template-columns: 1fr !important;
          }
          .event-card-reverse .event-photo-frame {
            order: 2 !important;
          }
          .event-photo-frame {
            min-height: 420px !important;
            height: 100% !important;
          }
        }
        @media (max-width: 899px) {
          .event-photo-frame {
            aspect-ratio: 4 / 3 !important;
            min-height: 240px !important;
            max-height: 380px !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
