// Editorial illustrations for the About page.

const CREAM = "#F7FAFD";
const INK = "#0A1F38";
const ORANGE = "#1289C6";
const INK_60 = "rgba(10,22,40,0.6)";
const INK_15 = "rgba(10,22,40,0.15)";
const PAPER_15 = "rgba(245,241,234,0.15)";
const PAPER_60 = "rgba(245,241,234,0.6)";

// Big "Resident operator inside the school" illustration.
// Rendered in dark/ink theme to match the About portrait band.
export const AboutPortraitIllustration = ({ className }) => (
  <svg
    viewBox="0 0 700 900"
    preserveAspectRatio="xMidYMid slice"
    className={`w-full h-full ${className || ""}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="ab-dots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.8" fill={PAPER_15} />
      </pattern>
      <pattern id="ab-grid" x="0" y="0" width="34" height="34" patternUnits="userSpaceOnUse">
        <path d="M 34 0 L 0 0 0 34" fill="none" stroke={PAPER_15} strokeWidth="0.6" />
      </pattern>
    </defs>
    <rect width="700" height="900" fill={INK} />
    <rect width="700" height="900" fill="url(#ab-dots)" opacity="0.5" />

    {/* Header stripe */}
    <g>
      <line x1="60" y1="90" x2="640" y2="90" stroke={PAPER_60} strokeWidth="1" />
      <text x="60" y="70" fontFamily="ui-monospace" fontSize="12" letterSpacing="4" fill={PAPER_60}>
        FIG · 02
      </text>
      <text x="640" y="70" textAnchor="end" fontFamily="ui-monospace" fontSize="12" letterSpacing="4" fill={PAPER_60}>
        RESIDENT OPERATOR
      </text>
    </g>

    {/* School building outline */}
    <g transform="translate(120 200)">
      {/* roof */}
      <path d="M -20 130 L 230 -30 L 480 130 Z" fill="none" stroke={CREAM} strokeWidth="2" />
      <circle cx="230" cy="-30" r="6" fill={ORANGE} />
      {/* body */}
      <rect x="20" y="130" width="420" height="380" fill="none" stroke={CREAM} strokeWidth="2" />
      <rect x="20" y="130" width="420" height="380" fill="url(#ab-grid)" />
      {/* pillars (columns) */}
      {[70, 155, 240, 325, 410].map((x) => (
        <line key={x} x1={x} y1="180" x2={x} y2="500" stroke={PAPER_60} strokeWidth="1" />
      ))}
      {/* horizontal floors */}
      {[220, 310, 400].map((y) => (
        <line key={y} x1="20" y1={y} x2="440" y2={y} stroke={PAPER_60} strokeWidth="1" />
      ))}
      {/* windows */}
      {[
        [90, 190],
        [175, 190],
        [260, 190],
        [345, 190],
        [90, 280],
        [345, 280],
        [175, 370],
        [260, 370],
      ].map(([x, y], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width="50"
          height="24"
          fill={i === 3 || i === 5 ? ORANGE : "none"}
          stroke={CREAM}
          strokeWidth="1.5"
        />
      ))}
      {/* door */}
      <rect x="200" y="440" width="60" height="70" fill={ORANGE} />
      <line x1="230" y1="440" x2="230" y2="510" stroke={INK} strokeWidth="1.5" />
      {/* label under building */}
      <text x="230" y="540" textAnchor="middle" fontFamily="ui-monospace" fontSize="12" letterSpacing="4" fill={PAPER_60}>
        THE SCHOOL
      </text>
    </g>

    {/* Operator ring — 3 operator dots orbiting */}
    <g transform="translate(350 620)">
      <ellipse cx="0" cy="0" rx="260" ry="60" fill="none" stroke={PAPER_60} strokeWidth="1" strokeDasharray="4 6" />
      {[-1, 0, 1].map((i) => {
        const x = i * 130;
        const orange = i === 0;
        return (
          <g key={i} transform={`translate(${x} 0)`}>
            <circle cx="0" cy="0" r="22" fill={orange ? ORANGE : CREAM} stroke={CREAM} strokeWidth="1.5" />
            <circle cx="0" cy="-6" r="6" fill={orange ? CREAM : INK} />
            <path
              d={`M -12 12 Q 0 4 12 12 Z`}
              fill={orange ? CREAM : INK}
            />
          </g>
        );
      })}
      <text x="0" y="-90" textAnchor="middle" fontFamily="ui-monospace" fontSize="11" letterSpacing="4" fill={CREAM}>
        RESIDENT SQUAD ON-GROUND
      </text>
    </g>

    {/* Bottom meta */}
    <g>
      <line x1="60" y1="800" x2="640" y2="800" stroke={PAPER_60} strokeWidth="1" />
      <text x="60" y="830" fontFamily="ui-monospace" fontSize="11" letterSpacing="3" fill={PAPER_60}>
        SINCE 2024
      </text>
      <text x="640" y="830" textAnchor="end" fontFamily="ui-monospace" fontSize="11" letterSpacing="3" fill={ORANGE}>
        NOT VENDORS · OPERATORS
      </text>
    </g>
  </svg>
);

// Editorial letter monogram card for leadership team.
// Cycles through 3 visual variants (ink, orange, hatched) using the index.
export const LeadershipMonogram = ({ name, role, index = 0 }) => {
  const initials =
    name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2) || "K";
  const variant = index % 3;
  const isOrange = variant === 1;
  const isHatched = variant === 2;
  const bg = isOrange ? ORANGE : isHatched ? CREAM : INK;
  const fg = isOrange || isHatched ? INK : CREAM;
  const accent = isOrange ? CREAM : ORANGE;

  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id={`lp-dots-${index}`} x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle
            cx="1"
            cy="1"
            r="0.8"
            fill={isHatched ? INK_15 : PAPER_15}
          />
        </pattern>
        <pattern id={`lp-hatch-${index}`} x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <line x1="0" y1="8" x2="8" y2="0" stroke={INK} strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="400" height="500" fill={bg} />
      <rect width="400" height="500" fill={`url(#lp-dots-${index})`} opacity="0.5" />
      {isHatched && (
        <rect width="400" height="500" fill={`url(#lp-hatch-${index})`} opacity="0.35" />
      )}

      {/* Top meta bar */}
      <text x="30" y="40" fontFamily="ui-monospace" fontSize="10" letterSpacing="3" fill={isOrange || isHatched ? INK_60 : PAPER_60}>
        {String(index + 1).padStart(2, "0")} · TEAM
      </text>
      <line
        x1="30"
        y1="52"
        x2="370"
        y2="52"
        stroke={isOrange || isHatched ? INK_60 : PAPER_60}
        strokeWidth="0.8"
      />

      {/* Frame */}
      <rect
        x="40"
        y="80"
        width="320"
        height="380"
        fill="none"
        stroke={fg}
        strokeWidth="1.5"
        opacity="0.4"
      />

      {/* Large italic monogram */}
      <text
        x="200"
        y="330"
        textAnchor="middle"
        fontFamily="Fraunces, serif"
        fontStyle="italic"
        fontSize="280"
        fill={fg}
        opacity={isHatched ? "0.85" : "1"}
      >
        {initials}
      </text>

      {/* Orange corner dot */}
      <circle cx="60" cy="100" r="7" fill={accent} />

      {/* Bottom mono strip */}
      <line
        x1="40"
        y1="440"
        x2="360"
        y2="440"
        stroke={fg}
        strokeWidth="0.8"
        opacity="0.6"
      />
      <text
        x="40"
        y="465"
        fontFamily="ui-monospace"
        fontSize="10"
        letterSpacing="3"
        fill={fg}
        opacity="0.9"
      >
        {(role || "OPERATOR").toUpperCase().slice(0, 30)}
      </text>
    </svg>
  );
};
