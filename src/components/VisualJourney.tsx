import React, { useState, useEffect } from 'react';
import { Camera, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { EXHIBITION_MASTERWORKS, type CuratedPhoto } from '../data/curatedAssets';

export const VisualJourney: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex((prev) => (prev !== null ? (prev + 1) % EXHIBITION_MASTERWORKS.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex((prev) => (prev !== null ? (prev - 1 + EXHIBITION_MASTERWORKS.length) % EXHIBITION_MASTERWORKS.length : null));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex]);

  const activePhoto: CuratedPhoto | null = selectedPhotoIndex !== null ? EXHIBITION_MASTERWORKS[selectedPhotoIndex] : null;

  return (
    <section
      id="gallery"
      style={{
        position: 'relative',
        backgroundColor: '#08201D',
        padding: '130px 0',
        overflow: 'hidden',
        borderTop: '1px solid rgba(168, 197, 189, 0.14)',
      }}
    >
      {/* Background Lighting Gradients */}
      <div
        className="ambient-glow-teal"
        style={{ top: '25%', left: '50%', transform: 'translateX(-50%)', opacity: 0.4 }}
      />

      <div className="editorial-container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '840px',
            margin: '0 auto 70px auto',
          }}
        >
          <div className="editorial-badge">
            <Camera size={13} style={{ color: 'var(--gold-champagne)' }} />
            <span>Curated Photographic Gallery</span>
          </div>
          <h2 className="editorial-title" style={{ marginBottom: '1.2rem', color: '#FFFFFF' }}>
            The Visual Tapestry
          </h2>
          <p className="editorial-subtitle" style={{ color: '#B2C7C1' }}>
            A strictly curated collection of master photographic studies. Captured in authentic Kerala Kasavu attire across centuries-old teak verandas, sacred granite pillars, and serene backwaters.
          </p>
        </div>

        {/* Masterworks Exhibition Grid (6 Balanced Plates) */}
        <div
          className="exhibition-cards-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '32px',
            width: '100%',
          }}
        >
          {EXHIBITION_MASTERWORKS.map((photo, index) => {
            const isLandscape = photo.orientation === 'landscape';
            const cardAspectRatio = isLandscape ? '16 / 10' : '4 / 5';

            return (
              <div
                key={photo.id}
                onClick={() => setSelectedPhotoIndex(index)}
                style={{
                  backgroundColor: 'rgba(12, 43, 38, 0.65)',
                  border: '1px solid rgba(168, 197, 189, 0.18)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  backdropFilter: 'blur(16px)',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = 'rgba(214, 178, 101, 0.5)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(168, 197, 189, 0.18)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Photo Canvas with True Orientation Aspect Ratio */}
                <div
                  className="img-emerald-frame"
                  style={{
                    aspectRatio: cardAspectRatio,
                    position: 'relative',
                    width: '100%',
                    backgroundColor: '#071C19',
                  }}
                >
                  <img
                    src={photo.webFile}
                    alt={photo.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: photo.focalPosition || (isLandscape ? 'center 35%' : 'center 18%'),
                    }}
                  />

                  {/* Inspect Overlay Trigger */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(8, 32, 29, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                    className="photo-hover-overlay"
                  >
                    <div
                      style={{
                        background: 'rgba(8, 32, 29, 0.85)',
                        backdropFilter: 'blur(8px)',
                        color: 'var(--gold-champagne)',
                        padding: '10px 20px',
                        borderRadius: 'var(--radius-full)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-sans)',
                        letterSpacing: '0.1em',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                      }}
                    >
                      <Eye size={15} />
                      View Plate
                    </div>
                  </div>
                </div>

                {/* Photo Metadata Card */}
              <div style={{ padding: '24px 26px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '8px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--gold-champagne)',
                    }}
                  >
                    {photo.subtitle}
                  </span>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontFamily: 'var(--font-sans)',
                      color: '#A8C5BD',
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    {photo.lighting}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-editorial)',
                    fontSize: '1.45rem',
                    color: '#FFFFFF',
                    margin: '0 0 8px 0',
                  }}
                >
                  {photo.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    lineHeight: 1.6,
                    color: '#B2C7C1',
                    margin: 0,
                  }}
                >
                  {photo.caption}
                </p>
              </div>
            </div>
          );
        })}
        </div>
      </div>

      {/* Fullscreen Luxury Lightbox Modal */}
      {activePhoto && selectedPhotoIndex !== null && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'rgba(4, 16, 14, 0.96)',
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '24px',
          }}
          onClick={() => setSelectedPhotoIndex(null)}
        >
          {/* Lightbox Top Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              zIndex: 110,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div
                style={{
                  color: 'var(--gold-champagne)',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                {activePhoto.subtitle}
              </div>
              <h4
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: '1.4rem',
                  color: '#FFFFFF',
                  margin: 0,
                }}
              >
                {activePhoto.title}
              </h4>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span
                style={{
                  color: '#A8C5BD',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.82rem',
                }}
              >
                Plate {selectedPhotoIndex + 1} of {EXHIBITION_MASTERWORKS.length}
              </span>
              <button
                onClick={() => setSelectedPhotoIndex(null)}
                aria-label="Close Lightbox"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(168, 197, 189, 0.3)',
                  color: '#FFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Lightbox Center: Image with Prev/Next Controls */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              padding: '20px 0',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            <button
              onClick={() =>
                setSelectedPhotoIndex(
                  (selectedPhotoIndex - 1 + EXHIBITION_MASTERWORKS.length) % EXHIBITION_MASTERWORKS.length
                )
              }
              aria-label="Previous image"
              style={{
                position: 'absolute',
                left: '20px',
                zIndex: 110,
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'rgba(12, 43, 38, 0.75)',
                border: '1px solid rgba(168, 197, 189, 0.3)',
                color: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Master Photo Display */}
            <img
              src={activePhoto.webFile}
              alt={activePhoto.title}
              style={{
                maxHeight: '75vh',
                maxWidth: '90vw',
                objectFit: 'contain',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 24px 70px rgba(0, 0, 0, 0.75)',
              }}
            />

            {/* Next Button */}
            <button
              onClick={() =>
                setSelectedPhotoIndex((selectedPhotoIndex + 1) % EXHIBITION_MASTERWORKS.length)
              }
              aria-label="Next image"
              style={{
                position: 'absolute',
                right: '20px',
                zIndex: 110,
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'rgba(12, 43, 38, 0.75)',
                border: '1px solid rgba(168, 197, 189, 0.3)',
                color: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Lightbox Bottom Caption */}
          <div
            style={{
              textAlign: 'center',
              maxWidth: '680px',
              margin: '0 auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.95rem',
                color: '#E0EAE6',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {activePhoto.caption}
            </p>
          </div>
        </div>
      )}

      {/* Hover effect CSS */}
      <style>{`
        div:hover > .photo-hover-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};
