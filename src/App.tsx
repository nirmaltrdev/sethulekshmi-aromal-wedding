import React from 'react';
import { HeroSection } from './components/HeroSection';
import { UnionSpread } from './components/UnionSpread';
import { CelebrationEvents } from './components/CelebrationEvents';
import { VisualJourney } from './components/VisualJourney';
import { DestinationGuide } from './components/DestinationGuide';
import { CinematicEpilogue } from './components/CinematicEpilogue';
import { SoundtrackControl } from './components/SoundtrackControl';

export const App: React.FC = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#08201D',
        color: '#F7F4EE',
      }}
    >
      {/* Main Cinematic Wedding Experience */}
      <main>
        {/* Hero Section & Muhurtham Anchor */}
        <HeroSection />

        {/* Lineage, Heritage & The Sacred Union */}
        <UnionSpread />

        {/* Celebrations & Auspicious Muhurtham Itinerary */}
        <CelebrationEvents />

        {/* Curated Photographic Tapestry & Lightbox */}
        <VisualJourney />

        {/* The Destination & Transit Concierge */}
        <DestinationGuide />
      </main>

      {/* Cinematic Epilogue & Family Host Directory */}
      <CinematicEpilogue />

      {/* Refined Floating Soundtrack Control for Seetha Kalyana Vaibhogame */}
      <SoundtrackControl />
    </div>
  );
};

export default App;
