import React, { useState } from 'react';
import { MapPin, Navigation, Train, Plane, Car, Compass, Layers, Map as MapIcon, Sparkles } from 'lucide-react';

export const DestinationGuide: React.FC = () => {
  const [viewMode, setViewMode] = useState<'panorama' | 'map'>('panorama');
  return (
    <section
      id="destination"
      style={{
        position: 'relative',
        backgroundColor: '#0C2B26',
        padding: '130px 0',
        overflow: 'hidden',
        borderTop: '1px solid rgba(168, 197, 189, 0.12)',
      }}
    >
      <div className="editorial-container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '70px' }}>
          <div className="editorial-badge">
            <Compass size={13} style={{ color: 'var(--gold-champagne)' }} />
            <span>Destination &amp; Transit Concierge</span>
          </div>
          <h2 className="editorial-title" style={{ marginBottom: '1.2rem', color: '#FFFFFF' }}>
            The Destination
          </h2>
          <p className="editorial-subtitle" style={{ color: '#B2C7C1' }}>
            Nestled in the lush foothills of the Western Ghats along the sacred Achencovil river,
            Konni welcomes you for our matrimonial celebration at Santhi Auditorium.
          </p>
        </div>

        {/* 2-Column Architectural Layout: Venue Logistics & Interactive Map */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '40px',
            alignItems: 'stretch',
          }}
        >
          {/* Left Column: Venue Details & Transit Routes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Santhi Auditorium Official Card */}
            <div
              style={{
                backgroundColor: 'rgba(18, 60, 53, 0.55)',
                border: '1px solid rgba(168, 197, 189, 0.2)',
                borderRadius: 'var(--radius-lg)',
                padding: '34px',
                backdropFilter: 'blur(16px)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--gold-champagne)',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}
              >
                <MapPin size={16} />
                Ceremony Venue
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: '2.2rem',
                  color: '#FFFFFF',
                  margin: '0 0 10px 0',
                }}
              >
                Santhi Auditorium
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  color: '#D4E2DE',
                  lineHeight: 1.6,
                  margin: '0 0 20px 0',
                }}
              >
                Eliyarackal, Konni, Pathanamthitta District, Kerala 689691
              </p>

              <div
                style={{
                  display: 'inline-block',
                  backgroundColor: 'rgba(35, 92, 82, 0.4)',
                  border: '1px solid rgba(168, 197, 189, 0.25)',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-sans)',
                  color: '#A8C5BD',
                  marginBottom: '24px',
                }}
              >
                GPS: 9.2319° N, 76.8488° E
              </div>

              <div>
                <a
                  href="https://maps.google.com/?q=Santhi+Auditorium+Eliyarackal+Konni+Kerala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-emerald-gold"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Navigation size={16} />
                  Open Live Turn-by-Turn GPS
                </a>
              </div>
            </div>

            {/* Transit Route Breakdown */}
            <div
              style={{
                backgroundColor: 'rgba(18, 60, 53, 0.35)',
                border: '1px solid rgba(168, 197, 189, 0.15)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
              }}
            >
              <h4
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: '1.25rem',
                  color: '#FFFFFF',
                  margin: 0,
                }}
              >
                Arrival &amp; Transit Guide
              </h4>

              {/* By Rail */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(35, 92, 82, 0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-champagne)',
                    flexShrink: 0,
                  }}
                >
                  <Train size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#FFFFFF' }}>
                    Nearest Railway Stations
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#B2C7C1', lineHeight: 1.5 }}>
                    <strong>Chengannur (CNGR)</strong>: 38 km (~55 mins)
                    <br />
                    <strong>Thiruvalla (TRVL)</strong>: 42 km (~60 mins)
                  </div>
                </div>
              </div>

              {/* By Air */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(35, 92, 82, 0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-champagne)',
                    flexShrink: 0,
                  }}
                >
                  <Plane size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#FFFFFF' }}>
                    Nearest International Airports
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#B2C7C1', lineHeight: 1.5 }}>
                    <strong>Trivandrum International (TRV)</strong>: 102 km (~2.5 hrs)
                    <br />
                    <strong>Cochin International (COK)</strong>: 124 km (~3.2 hrs)
                  </div>
                </div>
              </div>

              {/* By Road */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(35, 92, 82, 0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-champagne)',
                    flexShrink: 0,
                  }}
                >
                  <Car size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#FFFFFF' }}>
                    Parking &amp; Guest Valet
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#B2C7C1', lineHeight: 1.5 }}>
                    Dedicated guest parking is available within the Santhi Auditorium premises at Eliyarackal junction.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Destination Visual Showcase & Interactive Map */}
          <div
            style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid rgba(168, 197, 189, 0.22)',
              minHeight: '480px',
              position: 'relative',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#09211D',
            }}
          >
            {/* View Mode Toggle Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 18px',
                backgroundColor: 'rgba(12, 43, 38, 0.95)',
                borderBottom: '1px solid rgba(168, 197, 189, 0.15)',
                zIndex: 4,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={14} style={{ color: 'var(--gold-champagne)' }} />
                <span style={{ fontSize: '0.78rem', color: '#D4E2DE', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Konni, Pathanamthitta
                </span>
              </div>

              <div style={{ display: 'flex', gap: '6px' }}>
                <button
                  type="button"
                  onClick={() => setViewMode('panorama')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: 'none',
                    backgroundColor: viewMode === 'panorama' ? 'var(--gold-champagne)' : 'rgba(255, 255, 255, 0.08)',
                    color: viewMode === 'panorama' ? '#08201D' : '#A8C5BD',
                  }}
                >
                  <Layers size={13} />
                  Panorama
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('map')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: 'none',
                    backgroundColor: viewMode === 'map' ? 'var(--gold-champagne)' : 'rgba(255, 255, 255, 0.08)',
                    color: viewMode === 'map' ? '#08201D' : '#A8C5BD',
                  }}
                >
                  <MapIcon size={13} />
                  Satellite Map
                </button>
              </div>
            </div>

            {/* View Body */}
            <div style={{ position: 'relative', flex: 1, minHeight: '440px', overflow: 'hidden' }}>
              {viewMode === 'panorama' ? (
                <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '440px' }}>
                  <img
                    src="/assets/images/konni_kerala_landscape.jpg"
                    alt="Konni Kerala Western Ghats Landscape"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      minHeight: '440px',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(8, 32, 29, 0.88) 0%, rgba(8, 32, 29, 0.2) 50%, rgba(8, 32, 29, 0.4) 100%)',
                    }}
                  />

                  {/* Top Floating Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      background: 'rgba(8, 32, 29, 0.8)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(214, 178, 101, 0.35)',
                      color: 'var(--gold-champagne)',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-full)',
                      textTransform: 'uppercase',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <MapPin size={13} />
                    Foothills of Western Ghats
                  </div>

                  {/* Bottom Content Plate */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '24px',
                      left: '24px',
                      right: '24px',
                      background: 'rgba(12, 43, 38, 0.85)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(168, 197, 189, 0.25)',
                      borderRadius: 'var(--radius-md)',
                      padding: '20px',
                    }}
                  >
                    <div style={{ fontSize: '0.74rem', color: 'var(--gold-champagne)', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '6px' }}>
                      Achencovil River Valley • Konni
                    </div>
                    <p style={{ color: '#E4EFEA', fontSize: '0.88rem', lineHeight: 1.5, margin: '0 0 14px 0' }}>
                      Renowned for its emerald teak plantations, pristine forest reserves, and the serene Achencovil river flowing toward the Arabian Sea.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
                      <a
                        href="https://maps.google.com/?q=Santhi+Auditorium+Eliyarackal+Konni+Kerala"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '7px 16px',
                          borderRadius: 'var(--radius-full)',
                          backgroundColor: 'var(--gold-champagne)',
                          color: '#08201D',
                          fontSize: '0.76rem',
                          fontWeight: 700,
                          textDecoration: 'none',
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                        }}
                      >
                        <Navigation size={12} />
                        Get Venue Route
                      </a>
                      <button
                        type="button"
                        onClick={() => setViewMode('map')}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '7px 14px',
                          borderRadius: 'var(--radius-full)',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          color: '#FFFFFF',
                          fontSize: '0.76rem',
                          fontWeight: 600,
                          border: 'none',
                          cursor: 'pointer',
                        }}
                      >
                        <MapIcon size={12} />
                        View Live Map
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  title="Santhi Auditorium Konni Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15744.13778502388!2d76.8385623!3d9.2319225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b063d8985ec2f4d%3A0xc3f173b22b1dc831!2sKonni%2C%20Kerala!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '440px', display: 'block' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
