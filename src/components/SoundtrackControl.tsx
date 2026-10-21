import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';
import {
  getSharedAudio,
  playSoundtrack,
  pauseSoundtrack,
  subscribeToPlaybackState,
} from '../utils/audioManager';

export const SoundtrackControl: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const userExplicitlyPausedRef = useRef<boolean>(false);

  // Subscribe to playback state changes across the application
  useEffect(() => {
    const audio = getSharedAudio();
    const unsubscribe = subscribeToPlaybackState((playing) => {
      setIsPlaying(playing);
    });

    const onError = () => {
      setHasError(true);
      setIsPlaying(false);
    };

    audio.addEventListener('error', onError);

    return () => {
      unsubscribe();
      audio.removeEventListener('error', onError);
    };
  }, []);

  const toggleSoundtrack = async () => {
    if (isPlaying) {
      userExplicitlyPausedRef.current = true;
      pauseSoundtrack();
    } else {
      userExplicitlyPausedRef.current = false;
      await playSoundtrack();
    }
  };

  return (
    <aside
      aria-label="Wedding Soundtrack Player"
      style={{
        position: 'fixed',
        bottom: 'clamp(14px, 2.5vh, 28px)',
        right: 'clamp(14px, 2.5vw, 28px)',
        zIndex: 90,
      }}
    >
      <button
        type="button"
        onClick={toggleSoundtrack}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={
          isPlaying
            ? 'Pause wedding soundtrack'
            : 'Play wedding soundtrack'
        }
        title={
          isPlaying
            ? 'Playing: Thandhaay Song — Click to pause'
            : 'Play Wedding Soundtrack'
        }
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '9px',
          minHeight: '44px',
          padding: isHovered || isPlaying ? '10px 18px 10px 14px' : '10px 16px',
          background: isPlaying
            ? 'linear-gradient(135deg, rgba(18, 60, 53, 0.95) 0%, rgba(8, 32, 29, 0.98) 100%)'
            : 'linear-gradient(135deg, rgba(12, 43, 38, 0.90) 0%, rgba(8, 32, 29, 0.94) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: isPlaying
            ? '1.2px solid rgba(214, 178, 101, 0.85)'
            : '1px solid rgba(214, 178, 101, 0.55)',
          borderRadius: '9999px',
          boxShadow: isPlaying
            ? '0 8px 30px rgba(0, 0, 0, 0.45), 0 0 18px rgba(214, 178, 101, 0.28)'
            : '0 8px 24px rgba(0, 0, 0, 0.35), 0 0 12px rgba(214, 178, 101, 0.15)',
          cursor: 'pointer',
          color: '#FAF7F0',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          outline: 'none',
        }}
        className={`soundtrack-floating-btn ${!isPlaying ? 'soundtrack-idle-pulse' : ''}`}
      >
        {isPlaying ? (
          <>
            <Volume2 size={16} style={{ color: 'var(--gold-champagne)', flexShrink: 0 }} />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.74rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                color: '#FAF7F0',
                whiteSpace: 'nowrap',
              }}
            >
              Thandhaay Song
            </span>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'flex-end',
                gap: '2px',
                height: '11px',
                marginLeft: '2px',
              }}
              aria-hidden="true"
            >
              <span className="soundtrack-eq-bar soundtrack-eq-1" />
              <span className="soundtrack-eq-bar soundtrack-eq-2" />
              <span className="soundtrack-eq-bar soundtrack-eq-3" />
            </div>
          </>
        ) : (
          <>
            <Music size={15} style={{ color: 'var(--gold-champagne)', flexShrink: 0 }} />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.74rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                color: '#FAF7F0',
                whiteSpace: 'nowrap',
              }}
            >
              {hasError
                ? 'Soundtrack Unavailable'
                : isHovered
                ? 'Play Soundtrack'
                : 'Soundtrack'}
            </span>
            <VolumeX size={13} style={{ color: 'rgba(214, 178, 101, 0.65)', marginLeft: '2px' }} />
          </>
        )}
      </button>

      <style>{`
        .soundtrack-floating-btn:hover {
          transform: translateY(-2px);
          border-color: var(--gold-champagne);
        }
        .soundtrack-floating-btn:focus-visible {
          outline: 2px solid var(--gold-champagne);
          outline-offset: 3px;
        }

        .soundtrack-idle-pulse {
          animation: soundtrackGlowPulse 2.8s ease-in-out infinite;
        }

        @keyframes soundtrackGlowPulse {
          0%, 100% {
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35), 0 0 8px rgba(214, 178, 101, 0.15);
            border-color: rgba(214, 178, 101, 0.45);
          }
          50% {
            box-shadow: 0 8px 28px rgba(0, 0, 0, 0.45), 0 0 16px rgba(214, 178, 101, 0.35);
            border-color: rgba(214, 178, 101, 0.85);
          }
        }

        @media (max-width: 768px) {
          .soundtrack-floating-btn {
            min-height: 38px !important;
            padding: 8px 13px !important;
            gap: 7px !important;
          }
        }

        @media (max-width: 480px) {
          .soundtrack-floating-btn {
            min-height: 36px !important;
            padding: 7px 11px !important;
            gap: 6px !important;
          }
        }

        .soundtrack-eq-bar {
          width: 2px;
          background-color: var(--gold-champagne);
          border-radius: 1px;
          display: inline-block;
          animation: soundtrackEqBounce 1.2s ease-in-out infinite alternate;
        }
        .soundtrack-eq-1 { height: 4px; animation-delay: 0.1s; }
        .soundtrack-eq-2 { height: 11px; animation-delay: 0.35s; }
        .soundtrack-eq-3 { height: 7px; animation-delay: 0.2s; }

        @keyframes soundtrackEqBounce {
          0% { height: 2px; }
          50% { height: 11px; }
          100% { height: 4px; }
        }
      `}</style>
    </aside>
  );
};
