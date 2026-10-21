// Centralized Audio Manager for Wedding Soundtrack
const audioSrc = '/assets/audio/weddingsong.mp3';

let sharedAudio: HTMLAudioElement | null = null;
type PlayStateListener = (isPlaying: boolean) => void;
const listeners: Set<PlayStateListener> = new Set();

export const getSharedAudio = (): HTMLAudioElement => {
  if (!sharedAudio && typeof window !== 'undefined') {
    sharedAudio = new Audio(audioSrc);
    sharedAudio.volume = 0.65;
    sharedAudio.preload = 'auto';
    sharedAudio.loop = true;

    sharedAudio.addEventListener('play', () => {
      listeners.forEach((listener) => listener(true));
    });

    sharedAudio.addEventListener('pause', () => {
      listeners.forEach((listener) => listener(false));
    });

    sharedAudio.addEventListener('ended', () => {
      if (sharedAudio) {
        sharedAudio.currentTime = 0;
        sharedAudio.play().catch(() => {});
      }
    });
  }
  return sharedAudio!;
};

export const subscribeToPlaybackState = (listener: PlayStateListener): (() => void) => {
  listeners.add(listener);
  // Emit current state immediately
  if (sharedAudio) {
    listener(!sharedAudio.paused);
  }
  return () => {
    listeners.delete(listener);
  };
};

export const playSoundtrack = async (): Promise<boolean> => {
  const audio = getSharedAudio();
  try {
    audio.muted = false;
    await audio.play();
    return true;
  } catch (err) {
    console.warn('Playback error:', err);
    return false;
  }
};

export const pauseSoundtrack = (): void => {
  if (sharedAudio) {
    sharedAudio.pause();
  }
};

export const isSoundtrackPlaying = (): boolean => {
  return sharedAudio ? !sharedAudio.paused : false;
};
