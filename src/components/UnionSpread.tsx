import React from 'react';
import { Compass, Sparkles } from 'lucide-react';
import { CURATED_PHOTOGRAPHS } from '../data/curatedAssets';
import { WeddingMonogram } from './WeddingMonogram';

export const UnionSpread: React.FC = () => {
  const primaryPhoto = CURATED_PHOTOGRAPHS.storyPrimary;
  const detailPhoto = CURATED_PHOTOGRAPHS.storyDetail;

  return (
    <section
      id="union"
      style={{
        position: 'relative',
        backgroundColor: '#0C2B26',
        padding: '120px 0',
        overflow: 'hidden',
        borderTop: '1px solid rgba(168, 197, 189, 0.12)',
      }}
    >
      {/* Subtle Ambient Radial Glow */}
      <div
        className="ambient-glow-teal"
        style={{ top: '10%', left: '-150px', opacity: 0.6 }}
      />
      <div
        className="ambient-glow-teal"
        style={{ bottom: '10%', right: '-150px', opacity: 0.5 }}
      />

      <div className="editorial-container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header with Right S & A Monogram Crest (Clean & Borderless) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
            marginBottom: '70px',
            flexWrap: 'wrap',
          }}
        >
          {/* Left Text Block */}
          <div style={{ flex: '1 1 520px', maxWidth: '680px' }}>
            <div className="editorial-badge">
              <Compass size={13} style={{ color: 'var(--gold-champagne)' }} />
              <span>The Sacred Union &amp; Heritage</span>
            </div>
            <h2
              className="editorial-title"
              style={{ marginBottom: '1.2rem', color: '#FFFFFF' }}
            >
              Two Lineages, One Eternal Tapestry
            </h2>
            <p className="editorial-subtitle" style={{ color: '#B2C7C1' }}>
              Rooted in the timeless traditions of Kerala and surrounded by the love of our families,
              Sethulekshmi and Aromal celebrate the sacred coming together of two homes, two legacies, and a lifetime of devotion.
            </p>
          </div>

          {/* Right S & A Monogram Crest (Clean & Borderless) */}
          <div
            style={{
              flex: '0 0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
            }}
          >
            <WeddingMonogram size={320} />
          </div>
        </div>

        {/* Master Editorial Layout: Diptych & Asymmetric Lineage Grid */}
        <div
          className="union-layout-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '40px',
            alignItems: 'center',
            marginBottom: '80px',
          }}
        >
          {/* Left Column: Curated Photography Composition */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '620px', margin: '0 auto' }}>
            {/* Main Architectural Master Photo (Landscape 3:2) */}
            <div
              className="img-emerald-frame"
              style={{
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 20px 50px rgba(4, 18, 16, 0.5)',
                border: '1px solid rgba(168, 197, 189, 0.2)',
                aspectRatio: '3 / 2',
              }}
            >
              <img
                src={primaryPhoto.webFile}
                alt={primaryPhoto.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: primaryPhoto.focalPosition || 'center 28%',
                }}
              />
            </div>

            {/* Inset Detail Frame: Artisanal Kasavu Embroidery (Portrait 3:4) */}
            <div
              className="img-emerald-frame union-detail-frame"
              style={{
                position: 'absolute',
                bottom: '-24px',
                right: '-16px',
                width: '36%',
                aspectRatio: '3 / 4',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.65)',
                border: '2px solid rgba(214, 178, 101, 0.55)',
              }}
            >
              <img
                src={detailPhoto.webFile}
                alt={detailPhoto.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: detailPhoto.focalPosition || 'center 18%',
                }}
              />
            </div>
          </div>

          {/* Right Column: Verified Lineage & Sacred Provenance */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {/* Bride Lineage Card */}
            <div
              style={{
                backgroundColor: 'rgba(18, 60, 53, 0.5)',
                border: '1px solid rgba(168, 197, 189, 0.18)',
                borderRadius: 'var(--radius-md)',
                padding: '28px',
                backdropFilter: 'blur(16px)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-champagne)',
                  fontWeight: 700,
                  marginBottom: '6px',
                }}
              >
                The Bride
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: '2rem',
                  color: '#FFFFFF',
                  margin: '0 0 10px 0',
                }}
              >
                Sethulekshmi S
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.92rem',
                  color: '#D4E2DE',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Daughter of <strong>Mrs. Bindhu M G</strong> &amp; <strong>Mr. Suresh Madhavan Nair</strong>
                <br />
                <span style={{ color: '#A8C5BD', fontSize: '0.86rem' }}>
                  Suresh Bhavan, Achencovil, Kollam
                </span>
              </p>
            </div>

            {/* Groom Lineage Card */}
            <div
              style={{
                backgroundColor: 'rgba(18, 60, 53, 0.5)',
                border: '1px solid rgba(168, 197, 189, 0.18)',
                borderRadius: 'var(--radius-md)',
                padding: '28px',
                backdropFilter: 'blur(16px)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-champagne)',
                  fontWeight: 700,
                  marginBottom: '6px',
                }}
              >
                The Groom
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: '2rem',
                  color: '#FFFFFF',
                  margin: '0 0 10px 0',
                }}
              >
                Aromal Kurup
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.92rem',
                  color: '#D4E2DE',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Son of <strong>Mrs. Jayasree</strong> &amp; <strong>Mr. Santhosh Kurup</strong>
                <br />
                <span style={{ color: '#A8C5BD', fontSize: '0.86rem' }}>
                  Thempamkoottathil (H), Iravon, Konni
                </span>
              </p>
            </div>

            {/* Cultural Epigram */}
            <div
              style={{
                borderLeft: '2px solid var(--gold-champagne)',
                paddingLeft: '20px',
                marginTop: '10px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontStyle: 'italic',
                  fontSize: '1.15rem',
                  color: '#F4EDE0',
                  lineHeight: 1.6,
                  margin: '0 0 6px 0',
                }}
              >
                &ldquo;Where tradition embraces grace, and two journeys converge into an everlasting devotion.&rdquo;
              </p>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  color: 'var(--gold-champagne)',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                തുലാം 08, 1201 • Sacred Malayalam Calendar
              </div>
            </div>
          </div>
        </div>

        {/* Formal Wedding Invitation Card to Esteemed Guests */}
        <div
          style={{
            maxWidth: '960px',
            margin: '0 auto 60px auto',
            backgroundColor: 'rgba(18, 60, 53, 0.65)',
            border: '1.5px solid rgba(214, 178, 101, 0.45)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(28px, 4vw, 44px)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), 0 0 24px rgba(214, 178, 101, 0.12)',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.74rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold-champagne)',
              fontWeight: 700,
              marginBottom: '14px',
            }}
          >
            <Sparkles size={13} style={{ color: 'var(--gold-champagne)' }} />
            <span>Formal Wedding Invitation</span>
            <Sparkles size={13} style={{ color: 'var(--gold-champagne)' }} />
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(1.7rem, 3.2vw, 2.4rem)',
              color: '#FFFFFF',
              marginBottom: '18px',
              lineHeight: 1.25,
            }}
          >
            A Warm Invitation to Our Cherished Guests
          </h3>

          <p
            style={{
              fontFamily: 'var(--font-editorial)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.05rem, 1.8vw, 1.22rem)',
              color: '#F4EDE0',
              lineHeight: 1.7,
              maxWidth: '800px',
              margin: '0 auto 24px auto',
            }}
          >
            &ldquo;With the divine grace of the Almighty and the heartfelt blessings of our revered elders, we cordially invite your esteemed presence with family on the auspicious occasion of the marriage of our daughter <strong>Sethulekshmi S</strong> with <strong>Aromal Kurup</strong>. Kindly grace the occasion with your prayers and presence, and join us for the grand traditional Kerala Sadya feast.&rdquo;
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '24px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(168, 197, 189, 0.2)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.86rem',
              color: '#D4E2DE',
            }}
          >
            <div style={{ flex: '1 1 260px', maxWidth: '380px' }}>
              <span style={{ color: 'var(--gold-champagne)', fontWeight: 600, display: 'block', marginBottom: '4px', letterSpacing: '0.05em' }}>
                Bride&rsquo;s Parents
              </span>
              <div style={{ fontWeight: 600, color: '#FFFFFF' }}>Mrs. Bindhu M G &amp; Mr. Suresh Madhavan Nair</div>
              <div style={{ fontSize: '0.8rem', color: '#A8C5BD', marginTop: '2px' }}>Suresh Bhavan, Achencovil, Kollam</div>
            </div>

            <div style={{ flex: '1 1 260px', maxWidth: '380px' }}>
              <span style={{ color: 'var(--gold-champagne)', fontWeight: 600, display: 'block', marginBottom: '4px', letterSpacing: '0.05em' }}>
                Groom&rsquo;s Parents
              </span>
              <div style={{ fontWeight: 600, color: '#FFFFFF' }}>Mrs. Jayasree &amp; Mr. Santhosh Kurup</div>
              <div style={{ fontSize: '0.8rem', color: '#A8C5BD', marginTop: '2px' }}>Thempamkoottathil (H), Iravon, Konni</div>
            </div>
          </div>
        </div>

        {/* Subtle Hairline Separation */}
        <div className="hairline-divider" />
      </div>

      <style>{`
        @media (min-width: 900px) {
          .union-layout-grid {
            grid-template-columns: 1.05fr 0.95fr !important;
          }
        }
        @media (max-width: 600px) {
          .union-detail-frame {
            width: 32% !important;
            bottom: -14px !important;
            right: 0px !important;
          }
        }
      `}</style>
    </section>
  );
};
