import React from 'react';

interface WeddingMonogramProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  theme?: 'dark' | 'cream';
}

export const WeddingMonogram: React.FC<WeddingMonogramProps> = ({
  size = 320,
  className = '',
  style = {},
  theme = 'dark',
}) => {
  const isCream = theme === 'cream';
  const kasavuGradId = isCream ? 'monogramKasavuGoldCream' : 'monogramKasavuGold';
  const champagneGradId = isCream ? 'monogramChampagneCream' : 'monogramChampagne';
  const shadowId = isCream ? 'monogramShadowCream' : 'monogramCrispShadow';
  const leafStroke = isCream ? '#5C3408' : '#8A5A22';
  const berryFill = isCream ? '#ECCF9E' : '#FDF4E3';

  return (
    <div
      className={`wedding-monogram-emblem ${className}`}
      style={{
        width: size,
        height: size,
        maxWidth: '100%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: 'transparent',
        border: 'none',
        padding: 0,
        ...style,
      }}
      aria-label="Sethulekshmi and Aromal Wedding Monogram Crest"
    >
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', overflow: 'visible' }}
      >
        <defs>
          {/* Dark Background: Rich Warm Kasavu & Amber Gold */}
          <linearGradient id="monogramKasavuGold" x1="15%" y1="0%" x2="85%" y2="100%">
            <stop offset="0%" stopColor="#FDF4E3" />
            <stop offset="25%" stopColor="#E9C883" />
            <stop offset="55%" stopColor="#CA944B" />
            <stop offset="85%" stopColor="#DCA85C" />
            <stop offset="100%" stopColor="#966023" />
          </linearGradient>

          <linearGradient id="monogramChampagne" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B87B32" />
            <stop offset="45%" stopColor="#FAF1DC" />
            <stop offset="100%" stopColor="#E2B36D" />
          </linearGradient>

          <filter id="monogramCrispShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#041210" floodOpacity="0.45" />
          </filter>

          {/* Light Cream Background: High-Contrast Rich Kasavu Gold Foil Letterpress */}
          <linearGradient id="monogramKasavuGoldCream" x1="15%" y1="0%" x2="85%" y2="100%">
            <stop offset="0%" stopColor="#C98B32" />
            <stop offset="25%" stopColor="#B37522" />
            <stop offset="60%" stopColor="#875114" />
            <stop offset="85%" stopColor="#A86E20" />
            <stop offset="100%" stopColor="#633909" />
          </linearGradient>

          <linearGradient id="monogramChampagneCream" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7A4811" />
            <stop offset="45%" stopColor="#B87B2E" />
            <stop offset="100%" stopColor="#8A5216" />
          </linearGradient>

          <filter id="monogramShadowCream" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodColor="#1B4F46" floodOpacity="0.15" />
          </filter>

          {/* Arc Path for the Top-Right Curved Names: Radius 154 at Center (200, 200) */}
          <path id="monogramNameArc" d="M 125,76 A 154 154 0 0 1 354,200" fill="none" />
        </defs>

        {/* Top-Right Arc Accent Lines flanking the names */}
        <path
          d="M 98,104 A 164 164 0 0 1 124,78"
          stroke={`url(#${kasavuGradId})`}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M 353,190 A 164 164 0 0 1 364,228"
          stroke={`url(#${kasavuGradId})`}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Curved Couple Names Along the Arc */}
        <text fill={`url(#${champagneGradId})`} filter={`url(#${shadowId})`}>
          <textPath
            href="#monogramNameArc"
            startOffset="50%"
            textAnchor="middle"
            fontFamily="'Cormorant Garamond', 'Playfair Display', Georgia, serif"
            fontSize="15.5"
            fontWeight="600"
            letterSpacing="3.5"
          >
            SETHULEKSHMI &amp; AROMAL
          </textPath>
        </text>

        {/* Smooth Circular Arc Framing (Lower Right) */}
        <path
          d="M 195,355 A 155 155 0 0 0 354,200"
          stroke={`url(#${kasavuGradId})`}
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.85"
        />

        {/* Bottom-Left Botanical Laurel / Olive Leaf Branch */}
        <path
          d="M 58,175 A 155 155 0 0 0 195,355"
          stroke={`url(#${kasavuGradId})`}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Delicate Golden Leaves along the stem */}
        <g fill={`url(#${kasavuGradId})`} stroke={leafStroke} strokeWidth="0.25">
          {/* Leaf 1 (Top tip of branch) */}
          <path d="M 58,175 Q 46,160 52,148 Q 63,158 58,175 Z" />

          {/* Pair 2 */}
          <path d="M 61,200 Q 42,192 41,180 Q 55,182 61,200 Z" />
          <path d="M 62,204 Q 78,194 82,183 Q 71,192 62,204 Z" />

          {/* Pair 3 */}
          <path d="M 67,234 Q 45,234 40,222 Q 56,220 67,234 Z" />
          <path d="M 70,238 Q 88,232 94,220 Q 82,228 70,238 Z" />

          {/* Pair 4 */}
          <path d="M 77,268 Q 54,275 46,264 Q 63,257 77,268 Z" />
          <path d="M 81,272 Q 102,270 110,258 Q 96,263 81,272 Z" />

          {/* Pair 5 */}
          <path d="M 94,300 Q 72,314 62,305 Q 79,293 94,300 Z" />
          <path d="M 99,303 Q 120,305 130,294 Q 114,295 99,303 Z" />

          {/* Pair 6 */}
          <path d="M 120,328 Q 100,347 89,341 Q 103,326 120,328 Z" />
          <path d="M 125,330 Q 146,336 156,326 Q 139,322 125,330 Z" />

          {/* Pair 7 (Base near bottom center) */}
          <path d="M 155,347 Q 138,369 127,366 Q 139,348 155,347 Z" />
          <path d="M 160,348 Q 180,358 190,349 Q 174,342 160,348 Z" />

          {/* Subtle Warm Pearl Berry Accents */}
          <circle cx="53" cy="190" r="2" fill={berryFill} />
          <circle cx="50" cy="226" r="2.2" fill={berryFill} />
          <circle cx="58" cy="265" r="2.2" fill={berryFill} />
          <circle cx="76" cy="305" r="2" fill={berryFill} />
          <circle cx="106" cy="338" r="2" fill={berryFill} />
        </g>

        {/* Central Monogram: Letter 'S' (Top-Left) */}
        <text
          x="135"
          y="195"
          fontFamily="'Cormorant Garamond', 'Playfair Display', Georgia, serif"
          fontSize="132"
          fontWeight="600"
          fill={`url(#${kasavuGradId})`}
          filter={`url(#${shadowId})`}
          textAnchor="middle"
        >
          S
        </text>

        {/* Central Monogram: Letter 'A' (Bottom-Right) */}
        <text
          x="268"
          y="305"
          fontFamily="'Cormorant Garamond', 'Playfair Display', Georgia, serif"
          fontSize="132"
          fontWeight="600"
          fill={`url(#${kasavuGradId})`}
          filter={`url(#${shadowId})`}
          textAnchor="middle"
        >
          A
        </text>

        {/* Central Ampersand Ligature (&) - Flowing Calligraphy Flourish */}
        <text
          x="200"
          y="244"
          fontFamily="'Great Vibes', 'England Hand DB', cursive"
          fontSize="122"
          fontStyle="italic"
          fill={`url(#${champagneGradId})`}
          filter={`url(#${shadowId})`}
          textAnchor="middle"
        >
          &amp;
        </text>
      </svg>
    </div>
  );
};
