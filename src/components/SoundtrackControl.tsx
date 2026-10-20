import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';

export const SoundtrackControl: React.FC = () => {
  const [isAvailable, setIsAvailable] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasAttemptedAutoplayRef = useRef<boolean>(false);
  const userExplicitlyPausedRef = useRef<boolean>(false);

  const audioSrc = '/assets/audio/seetha_kalyana_vaibhogame.mp3';

  // Segment boundaries: 00:54 to 01:53 (59 seconds duration)
  const SEGMENT_START = 54;
  const SEGMENT_END = 113;

  // Check if the requested authorized audio file exists on the server with valid audio MIME type
  useEffect(() => {
    let isMounted = true;
    const checkAudioAvailability = async () => {
      try {
        const response = await fetch(audioSrc, { method: 'HEAD' });
        const contentType = response.headers.get('content-type') || '';
        const isAudioMime =
          response.ok &&
          !contentType.includes('text/html') &&
          (contentType.startsWith('audio/') || contentType.includes('audio') || contentType.includes('octet-stream'));

        if (isAudioMime && isMounted) {
          setIsAvailable(true);
        } else if (isMounted) {
          setIsAvailable(false);
        }
      } catch {
        if (isMounted) setIsAvailable(false);
      }
    };

    checkAudioAvailability();
    return () => {
      isMounted = false;
    };
  }, [audioSrc]);

  // Clean up audio element on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
        audioRef.current = null;
      }
    };
  }, []);

  const getOrCreateAudio = () => {
    if (!audioRef.current) {
      const audio = new Audio(audioSrc);
      audio.volume = 0.65;
      audio.preload = 'auto';
      audio.loop = false; // Custom 59-second segment loop

      // Segment boundary enforcement: loop at 1:53 (113s) back to 0:54 (54s)
      audio.addEventListener('timeupdate', () => {
        if (!audioRef.current) return;
        if (audioRef.current.currentTime >= SEGMENT_END) {
          audioRef.current.currentTime = SEGMENT_START;
        } else if (audioRef.current.currentTime < SEGMENT_START && !audioRef.current.paused) {
          audioRef.current.currentTime = SEGMENT_START;
        }
      });

      audio.addEventListener('ended', () => {
        if (!audioRef.current) return;
        audioRef.current.currentTime = SEGMENT_START;
        audioRef.current.play().catch(() => setIsPlaying(false));
      });

      audio.addEventListener('pause', () => setIsPlaying(false));
      audio.addEventListener('play', () => setIsPlaying(true));
      audio.addEventListener('error', (e) => {
        console.warn('Playback error or audio not accessible:', e);
        setIsPlaying(false);
      });

      audioRef.current = audio;
    }
    return audioRef.current;
  };

  // Attempt autoplay with sound on guest's initial visit once the asset is ready
  useEffect(() => {
    if (!isAvailable || hasAttemptedAutoplayRef.current) return;
    hasAttemptedAutoplayRef.current = true;

    const audio = getOrCreateAudio();

    const executeAutoplay = async () => {
      if (userExplicitlyPausedRef.current) return;

      // Position to 54s before attempting playback
      if (audio.currentTime < SEGMENT_START || audio.currentTime >= SEGMENT_END) {
        audio.currentTime = SEGMENT_START;
      }

      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        // Autoplay blocked by browser policy (e.g. user gesture required).
        // Gracefully keep player in ready-to-play standby state.
        setIsPlaying(false);
      }
    };

    if (audio.readyState >= 1) {
      executeAutoplay();
    } else {
      audio.addEventListener('loadedmetadata', executeAutoplay, { once: true });
    }
  }, [isAvailable]);

  const toggleSoundtrack = async () => {
    const audio = getOrCreateAudio();

    try {
      if (isPlaying) {
        userExplicitlyPausedRef.current = true;
        audio.pause();
        setIsPlaying(false);
      } else {
        userExplicitlyPausedRef.current = false;
        // Ensure playback starts within [SEGMENT_START, SEGMENT_END]
        if (audio.readyState >= 1) {
          if (audio.currentTime < SEGMENT_START || audio.currentTime >= SEGMENT_END) {
            audio.currentTime = SEGMENT_START;
          }
        } else {
          audio.addEventListener(
            'loadedmetadata',
            () => {
              if (audio.currentTime < SEGMENT_START || audio.currentTime >= SEGMENT_END) {
                audio.currentTime = SEGMENT_START;
              }
            },
            { once: true }
          );
        }

        await audio.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.warn('Audio playback restriction or interaction required:', err);
      setIsPlaying(false);
    }
  };

  // If the song is unavailable, render development badge in DEV, null in production
  if (!isAvailable) {
    if (import.meta.env.DEV) {
      return (
        <aside
          aria-label="Soundtrack Development Status"
          style={{
            position: 'fixed',
            bottom: 'clamp(20px, 3.5vh, 32px)',
            right: 'clamp(18px, 3vw, 32px)',
            zIndex: 90,
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '7px 14px',
              background: 'rgba(12, 43, 38, 0.92)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px dashed rgba(214, 178, 101, 0.45)',
              borderRadius: '9999px',
              color: '#D4E2DE',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              fontWeight: 500,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
            }}
            title="Place your authorized MP3 recording at: public/assets/audio/seetha_kalyana_vaibhogame.mp3"
          >
            <Music size={13} style={{ color: 'var(--gold-champagne)', opacity: 0.7 }} />
            <span>Soundtrack: Awaiting <code style={{ color: 'var(--gold-champagne)', fontSize: '0.68rem' }}>seetha_kalyana_vaibhogame.mp3</code></span>
          </div>
        </aside>
      );
    }
    return null;
  }

  return (
    <aside
      aria-label="Wedding Soundtrack Player"
      style={{
        position: 'fixed',
        bottom: 'clamp(20px, 3.5vh, 32px)',
        right: 'clamp(18px, 3vw, 32px)',
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
            ? 'Pause Sita Kalyanam soundtrack'
            : 'Play Sita Kalyanam soundtrack'
        }
        title={
          isPlaying
            ? 'Playing: Sita Kalyanam (0:54 – 1:53) — Click to pause'
            : 'Play Wedding Soundtrack: Sita Kalyanam (Solo)'
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
            : '1px solid rgba(214, 178, 101, 0.45)',
          borderRadius: '9999px',
          boxShadow: isPlaying
            ? '0 8px 30px rgba(0, 0, 0, 0.45), 0 0 18px rgba(214, 178, 101, 0.28)'
            : '0 8px 24px rgba(0, 0, 0, 0.35)',
          cursor: 'pointer',
          color: '#FAF7F0',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          outline: 'none',
        }}
        className="soundtrack-floating-btn"
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
              Sita Kalyanam
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
              {isHovered ? 'Play Soundtrack' : 'Soundtrack'}
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
