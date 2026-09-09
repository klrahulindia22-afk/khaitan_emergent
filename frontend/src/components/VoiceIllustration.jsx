// Editorial placeholder illustrations for Industry Leaders "Voices".
// Rendered while awaiting real portraits/videos. Palette matches site brand.

const CREAM = "#FFFFFF";
const PAPER = "#FFFFFF";
const INK = "#0A1F38";
const ORANGE = "#1289C6";
const INK_60 = "rgba(10,22,40,0.6)";
const INK_25 = "rgba(10,22,40,0.25)";
const INK_10 = "rgba(10,22,40,0.08)";

const Frame = ({ id, kicker, role, children }) => (
  <svg
    viewBox="0 0 800 500"
    preserveAspectRatio="xMidYMid slice"
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label={`Illustrated placeholder portrait — ${role}`}
  >
    <defs>
      <pattern id={`grid-${id}`} x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
        <path d="M 28 0 L 0 0 0 28" fill="none" stroke={INK_10} strokeWidth="0.6" />
      </pattern>
      <pattern id={`dots-${id}`} x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.9" fill={INK_25} />
      </pattern>
    </defs>

    <rect width="800" height="500" fill={CREAM} />
    <rect width="800" height="500" fill={`url(#grid-${id})`} />

    {/* Header meta line */}
    <g>
      <line x1="40" y1="52" x2="760" y2="52" stroke={INK_25} strokeWidth="1" />
      <text x="40" y="38" fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="3.5" fill={INK_60}>
        FIG · {id} · PLACEHOLDER PORTRAIT
      </text>
      <text x="760" y="38" textAnchor="end" fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="3.5" fill={INK_60}>
        {kicker}
      </text>
    </g>

    {/* Foot line */}
    <g>
      <line x1="40" y1="448" x2="760" y2="448" stroke={INK_25} strokeWidth="1" />
      <text x="40" y="470" fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="3.5" fill={INK_60}>
        AWAITING FOOTAGE
      </text>
      <text x="760" y="470" textAnchor="end" fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="3.5" fill={INK_60}>
        KHAITAN EDUOPS
      </text>
    </g>

    {children}
  </svg>
);

// A — Educator / policy (Anjali) — book, arc, dotted horizon
const VoiceA = () => (
  <Frame id="01" kicker="EDUCATOR" role="Educator">
    {/* Horizon dotted ground */}
    <rect x="40" y="360" width="720" height="50" fill="url(#dots-01)" opacity="0.9" />
    {/* Torso block */}
    <g transform="translate(400 260)">
      <rect x="-140" y="20" width="280" height="180" fill={INK} />
      {/* stripe pattern collar */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((k) => (
        <line key={k} x1={-140} y1={20 + k * 18} x2={140} y2={20 + k * 18} stroke={PAPER} strokeWidth="1" opacity="0.35" />
      ))}
      {/* Head */}
      <circle cx="0" cy="-40" r="90" fill={CREAM} stroke={INK} strokeWidth="2" />
      {/* Curly hair suggestion */}
      <path d="M -80 -70 Q -70 -140 0 -132 Q 78 -140 78 -70" fill={INK} />
      <circle cx="-60" cy="-90" r="14" fill={INK} />
      <circle cx="70" cy="-90" r="14" fill={INK} />
      <circle cx="-40" cy="-115" r="10" fill={INK} />
      <circle cx="40" cy="-118" r="12" fill={INK} />
      {/* Necklace hint */}
      <circle cx="0" cy="55" r="6" fill={ORANGE} />
      <path d="M -30 30 Q 0 55 30 30" stroke={ORANGE} strokeWidth="1.4" fill="none" />
    </g>
    {/* Corner mark */}
    <g transform="translate(70 130)">
      <rect x="0" y="0" width="86" height="60" fill="none" stroke={ORANGE} strokeWidth="1.4" />
      <text x="10" y="24" fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="3" fill={ORANGE}>VOICE · 01</text>
      <text x="10" y="46" fontFamily="serif" fontStyle="italic" fontSize="20" fill={INK}>Anjali</text>
    </g>
  </Frame>
);

// B — Operator (Rohit) — floor plan grid, torso, tie
const VoiceB = () => (
  <Frame id="02" kicker="OPERATOR" role="Operator">
    {/* Left "campus map" mark */}
    <g transform="translate(80 130)">
      <rect x="0" y="0" width="130" height="130" fill="none" stroke={INK_25} strokeWidth="1" />
      <line x1="0" y1="45" x2="130" y2="45" stroke={INK_25} strokeWidth="1" />
      <line x1="0" y1="90" x2="130" y2="90" stroke={INK_25} strokeWidth="1" />
      <line x1="45" y1="0" x2="45" y2="130" stroke={INK_25} strokeWidth="1" />
      <line x1="90" y1="0" x2="90" y2="130" stroke={INK_25} strokeWidth="1" />
      <rect x="45" y="45" width="45" height="45" fill={ORANGE} />
    </g>
    {/* Portrait */}
    <g transform="translate(430 260)">
      {/* Torso — suit */}
      <path d="M -160 200 L -140 40 L -50 5 L 0 15 L 50 5 L 140 40 L 160 200 Z" fill={INK} />
      {/* Shirt V */}
      <path d="M -50 5 L 0 90 L 50 5 Z" fill={CREAM} />
      {/* Tie */}
      <path d="M -10 90 L 10 90 L 22 200 L -22 200 Z" fill={ORANGE} />
      {/* Head */}
      <circle cx="0" cy="-45" r="90" fill={CREAM} stroke={INK} strokeWidth="2" />
      {/* Hair */}
      <path d="M -78 -70 Q -60 -140 0 -140 Q 62 -140 80 -70 L 78 -55 Q 40 -95 0 -85 Q -40 -95 -78 -55 Z" fill={INK} />
      {/* Beard hint */}
      <path d="M -50 20 Q 0 50 50 20 L 42 40 Q 0 60 -42 40 Z" fill={INK_25} />
    </g>
    {/* Right mono column */}
    <g transform="translate(650 140)">
      <text x="0" y="0" fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="3" fill={INK_60}>3 CAMPUSES</text>
      <text x="0" y="22" fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="3" fill={INK_60}>1 SYSTEM</text>
      <text x="0" y="44" fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="3" fill={ORANGE}>ONE TRUTH</text>
    </g>
  </Frame>
);

// C — Standards leader (Kavita) — arcs, framework diagram
const VoiceC = () => (
  <Frame id="03" kicker="STANDARDS" role="Standards leader">
    {/* Diagram in background */}
    <g transform="translate(120 220)" opacity="0.9">
      <circle cx="0" cy="0" r="110" fill="none" stroke={INK_25} strokeWidth="1" />
      <circle cx="0" cy="0" r="72" fill="none" stroke={INK_25} strokeWidth="1" />
      <circle cx="0" cy="0" r="36" fill="none" stroke={ORANGE} strokeWidth="1.4" />
      <circle cx="0" cy="0" r="6" fill={ORANGE} />
      <line x1="-120" y1="0" x2="120" y2="0" stroke={INK_25} strokeWidth="1" />
      <line x1="0" y1="-120" x2="0" y2="120" stroke={INK_25} strokeWidth="1" />
      <text x="0" y="-130" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" letterSpacing="3" fill={INK_60}>NCF</text>
    </g>
    {/* Portrait right */}
    <g transform="translate(520 260)">
      <rect x="-130" y="30" width="260" height="180" fill={INK} />
      <path d="M -60 30 L 0 90 L 60 30 Z" fill={CREAM} />
      <circle cx="0" cy="-40" r="85" fill={CREAM} stroke={INK} strokeWidth="2" />
      {/* Bun hair back */}
      <ellipse cx="0" cy="-90" rx="70" ry="30" fill={INK} />
      <circle cx="55" cy="-70" r="22" fill={INK} />
      {/* Earrings */}
      <circle cx="-70" cy="-20" r="4" fill={ORANGE} />
      <circle cx="70" cy="-20" r="4" fill={ORANGE} />
      {/* Bindi */}
      <circle cx="0" cy="-72" r="4" fill={ORANGE} />
    </g>
  </Frame>
);

// D — Investor (Sameer) — arrow up, angular
const VoiceD = () => (
  <Frame id="04" kicker="INVESTOR" role="Investor">
    {/* Rising bars background */}
    <g transform="translate(90 380)">
      {[0, 1, 2, 3, 4, 5, 6].map((k) => (
        <rect
          key={k}
          x={k * 22}
          y={-30 - k * 22}
          width="14"
          height={30 + k * 22}
          fill={k === 6 ? ORANGE : INK}
          opacity={k === 6 ? 1 : 0.15 + k * 0.08}
        />
      ))}
    </g>
    {/* Arrow */}
    <g transform="translate(560 210)" opacity="0.9">
      <line x1="-80" y1="60" x2="60" y2="-70" stroke={ORANGE} strokeWidth="3" />
      <path d="M 60 -70 L 60 -30 L 20 -70 Z" fill={ORANGE} />
    </g>
    {/* Portrait center */}
    <g transform="translate(420 265)">
      {/* Shoulders — angular jacket */}
      <path d="M -150 210 L -120 40 L -30 10 L 30 10 L 120 40 L 150 210 Z" fill={INK} />
      {/* Lapel V + collar */}
      <path d="M -30 10 L 0 100 L 30 10 Z" fill={CREAM} />
      <path d="M -30 10 L -12 100 L 0 100 L -20 25 Z" fill={INK_25} />
      <path d="M 30 10 L 12 100 L 0 100 L 20 25 Z" fill={INK_25} />
      {/* Pocket square */}
      <rect x="-115" y="90" width="24" height="8" fill={ORANGE} />
      {/* Head */}
      <circle cx="0" cy="-45" r="88" fill={CREAM} stroke={INK} strokeWidth="2" />
      {/* Salt-and-pepper hair */}
      <path d="M -78 -70 Q -50 -140 0 -138 Q 55 -140 80 -70 L 80 -55 Q 40 -100 0 -90 Q -40 -100 -80 -55 Z" fill={INK} />
      <line x1="-70" y1="-95" x2="-30" y2="-105" stroke={CREAM} strokeWidth="2" />
      <line x1="30" y1="-105" x2="70" y2="-95" stroke={CREAM} strokeWidth="2" />
      {/* Glasses */}
      <circle cx="-35" cy="-45" r="22" fill="none" stroke={INK} strokeWidth="2" />
      <circle cx="35" cy="-45" r="22" fill="none" stroke={INK} strokeWidth="2" />
      <line x1="-13" y1="-45" x2="13" y2="-45" stroke={INK} strokeWidth="2" />
    </g>
  </Frame>
);

export const VoiceIllustration = ({ index }) => {
  const list = [VoiceA, VoiceB, VoiceC, VoiceD];
  const C = list[index % list.length];
  return <C />;
};
