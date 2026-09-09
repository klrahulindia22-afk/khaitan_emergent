// Editorial SVG illustrations for each pillar.
// Design language: cream ground, ink linework, orange accent, geometric print aesthetic.

const CREAM = "#F7FAFD";
const INK = "#0A1F38";
const ORANGE = "#1289C6";
const INK_60 = "rgba(10,22,40,0.6)";
const INK_15 = "rgba(10,22,40,0.15)";

const Frame = ({ children, className = "" }) => (
  <svg
    viewBox="0 0 800 600"
    preserveAspectRatio="xMidYMid slice"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="800" height="600" fill={CREAM} />
    <defs>
      <pattern id="dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.8" fill={INK_15} />
      </pattern>
      <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke={INK_15} strokeWidth="0.6" />
      </pattern>
    </defs>
    <rect width="800" height="600" fill="url(#dots)" opacity="0.6" />
    {children}
  </svg>
);

// 01 — Academic Excellence : stacked plans with grid & orange marks
const Academic = () => (
  <Frame>
    {/* back plan */}
    <g transform="translate(200 130)">
      <rect x="0" y="0" width="380" height="340" fill={CREAM} stroke={INK} strokeWidth="2" />
      <rect x="0" y="0" width="380" height="340" fill="url(#grid)" />
      {/* header bar */}
      <rect x="0" y="0" width="380" height="42" fill={INK} />
      <circle cx="24" cy="21" r="6" fill={ORANGE} />
      <rect x="42" y="17" width="160" height="8" fill={CREAM} />
      {/* rows */}
      {[80, 120, 160, 200, 240, 280].map((y, i) => (
        <g key={y}>
          <text x="18" y={y + 4} fontFamily="ui-monospace" fontSize="12" fill={INK_60}>
            0{i + 1}
          </text>
          <line x1="60" y1={y} x2="360" y2={y} stroke={INK} strokeWidth="1" />
          <rect x="60" y={y - 12} width={80 + (i % 3) * 40} height="4" fill={INK} />
        </g>
      ))}
      {/* accent tick column */}
      <g>
        {[80, 160, 240].map((y) => (
          <circle key={y} cx="336" cy={y - 6} r="7" fill={ORANGE} />
        ))}
      </g>
    </g>
    {/* offset second plan */}
    <g transform="translate(140 90)" opacity="0.35">
      <rect width="380" height="340" fill="none" stroke={INK} strokeWidth="1.5" />
    </g>
    {/* label */}
    <text x="200" y="500" fontFamily="ui-monospace" fontSize="12" letterSpacing="4" fill={INK_60}>
      ACADEMIC · OS
    </text>
    <line x1="200" y1="510" x2="600" y2="510" stroke={INK} strokeWidth="1" />
    <text x="200" y="530" fontFamily="ui-monospace" fontSize="11" letterSpacing="3" fill={ORANGE}>
      8 CORE MODULES
    </text>
  </Frame>
);

// 02 — Review & Accountability : dashboard dial + bar chart
const Review = () => (
  <Frame>
    <g transform="translate(120 130)">
      {/* dial */}
      <circle cx="140" cy="160" r="130" fill="none" stroke={INK} strokeWidth="1.5" />
      <circle cx="140" cy="160" r="98" fill="none" stroke={INK} strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="140" cy="160" r="66" fill={INK} />
      {/* tick marks */}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
        const x1 = 140 + Math.cos(a) * 120;
        const y1 = 160 + Math.sin(a) * 120;
        const x2 = 140 + Math.cos(a) * 130;
        const y2 = 160 + Math.sin(a) * 130;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={INK} strokeWidth="2" />;
      })}
      {/* needle */}
      <line x1="140" y1="160" x2="220" y2="90" stroke={ORANGE} strokeWidth="4" strokeLinecap="round" />
      <circle cx="140" cy="160" r="10" fill={ORANGE} />
      {/* label center */}
      <text x="140" y="164" textAnchor="middle" fontFamily="serif" fontStyle="italic" fontSize="20" fill={CREAM}>
        KPI
      </text>
      {/* bar chart to the right */}
      <g transform="translate(320 60)">
        <line x1="0" y1="230" x2="220" y2="230" stroke={INK} strokeWidth="1.5" />
        <line x1="0" y1="0" x2="0" y2="230" stroke={INK} strokeWidth="1.5" />
        {[60, 110, 90, 160, 130, 200].map((h, i) => (
          <rect
            key={i}
            x={12 + i * 34}
            y={230 - h}
            width="22"
            height={h}
            fill={i === 3 ? ORANGE : INK}
          />
        ))}
      </g>
    </g>
    <text x="120" y="500" fontFamily="ui-monospace" fontSize="12" letterSpacing="4" fill={INK_60}>
      REVIEW · MGMT
    </text>
    <line x1="120" y1="510" x2="620" y2="510" stroke={INK} strokeWidth="1" />
    <text x="120" y="530" fontFamily="ui-monospace" fontSize="11" letterSpacing="3" fill={ORANGE}>
      REAL-TIME ACCOUNTABILITY
    </text>
  </Frame>
);

// 03 — Playbook Agent : open book with orbit nodes
const Playbook = () => (
  <Frame>
    <g transform="translate(400 300)">
      {/* orbits */}
      <ellipse cx="0" cy="0" rx="240" ry="130" fill="none" stroke={INK} strokeWidth="1" strokeDasharray="3 5" />
      <ellipse cx="0" cy="0" rx="180" ry="90" fill="none" stroke={INK} strokeWidth="1" />
      {/* book */}
      <g>
        <path d="M -110 -80 L -10 -90 L -10 90 L -110 80 Z" fill={CREAM} stroke={INK} strokeWidth="2" />
        <path d="M 110 -80 L 10 -90 L 10 90 L 110 80 Z" fill={CREAM} stroke={INK} strokeWidth="2" />
        <line x1="0" y1="-90" x2="0" y2="90" stroke={INK} strokeWidth="2" />
        {/* text lines */}
        {[-60, -40, -20, 0, 20, 40, 60].map((y) => (
          <g key={y}>
            <line x1="-100" y1={y} x2="-20" y2={y - 1} stroke={INK_60} strokeWidth="1" />
            <line x1="20" y1={y - 1} x2="100" y2={y} stroke={INK_60} strokeWidth="1" />
          </g>
        ))}
      </g>
      {/* orbit nodes */}
      {[
        { x: -240, y: 0, o: false },
        { x: 240, y: 0, o: true },
        { x: -170, y: -95, o: false },
        { x: 170, y: -95, o: false },
        { x: -170, y: 95, o: true },
        { x: 170, y: 95, o: false },
      ].map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="12" fill={n.o ? ORANGE : INK} />
          {n.o && <circle cx={n.x} cy={n.y} r="20" fill="none" stroke={ORANGE} strokeWidth="1" opacity="0.4" />}
        </g>
      ))}
    </g>
    <text x="120" y="500" fontFamily="ui-monospace" fontSize="12" letterSpacing="4" fill={INK_60}>
      PLAYBOOK · AGENT
    </text>
    <line x1="120" y1="510" x2="620" y2="510" stroke={INK} strokeWidth="1" />
    <text x="120" y="530" fontFamily="ui-monospace" fontSize="11" letterSpacing="3" fill={ORANGE}>
      500–1,000 PAGES, ALWAYS ON
    </text>
  </Frame>
);

// 04 — KOSMOS ERP : stacked screens/modules
const Kosmos = () => (
  <Frame>
    {/* back panel */}
    <g transform="translate(150 100)">
      <rect x="0" y="0" width="440" height="300" fill={CREAM} stroke={INK} strokeWidth="2" />
      <rect x="0" y="0" width="440" height="36" fill={INK} />
      <circle cx="18" cy="18" r="5" fill={ORANGE} />
      <circle cx="36" cy="18" r="5" fill={CREAM} opacity="0.4" />
      <circle cx="54" cy="18" r="5" fill={CREAM} opacity="0.4" />
      {/* grid of modules */}
      {Array.from({ length: 8 }).map((_, i) => {
        const col = i % 4;
        const row = Math.floor(i / 4);
        const x = 20 + col * 100;
        const y = 60 + row * 110;
        const orange = i === 2 || i === 5;
        return (
          <g key={i}>
            <rect x={x} y={y} width="88" height="94" fill={orange ? ORANGE : "none"} stroke={INK} strokeWidth="1.5" />
            <rect x={x + 12} y={y + 12} width="30" height="30" fill={orange ? CREAM : INK} />
            <rect x={x + 12} y={y + 52} width="60" height="4" fill={orange ? CREAM : INK} />
            <rect x={x + 12} y={y + 64} width="44" height="4" fill={orange ? CREAM : INK_60} />
            <text x={x + 76} y={y + 88} fontFamily="ui-monospace" fontSize="10" fill={orange ? CREAM : INK_60}>
              {String(i + 1).padStart(2, "0")}
            </text>
          </g>
        );
      })}
    </g>
    {/* offset back rectangle */}
    <g transform="translate(120 78)" opacity="0.25">
      <rect width="440" height="300" fill="none" stroke={INK} strokeWidth="1.5" />
    </g>
    <text x="150" y="470" fontFamily="ui-monospace" fontSize="12" letterSpacing="4" fill={INK_60}>
      KOSMOS · ERP
    </text>
    <line x1="150" y1="480" x2="590" y2="480" stroke={INK} strokeWidth="1" />
    <text x="150" y="500" fontFamily="ui-monospace" fontSize="11" letterSpacing="3" fill={ORANGE}>
      8 INTEGRATED MODULES
    </text>
  </Frame>
);

// 05 — EduOps Academy : concentric rings with people/roles orbiting
const Academy = () => (
  <Frame>
    <g transform="translate(400 290)">
      {/* rings */}
      <circle cx="0" cy="0" r="200" fill="none" stroke={INK} strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="0" cy="0" r="140" fill="none" stroke={INK} strokeWidth="1" />
      <circle cx="0" cy="0" r="70" fill={INK} />
      <text x="0" y="6" textAnchor="middle" fontFamily="serif" fontStyle="italic" fontSize="22" fill={CREAM}>
        Academy
      </text>
      {/* 6 orbit dots representing tracks */}
      {Array.from({ length: 6 }).map((_, i) => {
        const a = (i / 6) * Math.PI * 2 - Math.PI / 2;
        const x = Math.cos(a) * 140;
        const y = Math.sin(a) * 140;
        const orange = i === 1 || i === 4;
        return (
          <g key={i}>
            <line x1="0" y1="0" x2={x} y2={y} stroke={INK} strokeWidth="1" opacity="0.35" />
            <circle cx={x} cy={y} r="18" fill={CREAM} stroke={INK} strokeWidth="2" />
            <circle cx={x} cy={y} r="6" fill={orange ? ORANGE : INK} />
            <text x={x} y={y + 34} textAnchor="middle" fontFamily="ui-monospace" fontSize="10" letterSpacing="2" fill={INK_60}>
              {String(i + 1).padStart(2, "0")}
            </text>
          </g>
        );
      })}
      {/* outer roles */}
      {["PROMOTER", "PRINCIPAL", "TEACHER", "STAFF"].map((r, i) => {
        const a = ((i + 0.5) / 4) * Math.PI * 2 - Math.PI / 2;
        const x = Math.cos(a) * 200;
        const y = Math.sin(a) * 200;
        return (
          <text key={r} x={x} y={y + 4} textAnchor="middle" fontFamily="ui-monospace" fontSize="10" letterSpacing="3" fill={INK}>
            {r}
          </text>
        );
      })}
    </g>
  </Frame>
);

// 06 — Transformation Services : broken to solid arrow (evolution)
const Transformation = () => (
  <Frame>
    <g transform="translate(80 260)">
      {/* baseline arrow with 4 phases */}
      <line x1="0" y1="60" x2="620" y2="60" stroke={INK} strokeWidth="1.5" />
      {/* phase markers */}
      {[0, 200, 400, 600].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy="60" r="10" fill={i === 3 ? ORANGE : INK} />
          <text x={x} y={100} textAnchor="middle" fontFamily="ui-monospace" fontSize="10" letterSpacing="3" fill={INK_60}>
            {["DIAG", "BUILD", "SCALE", "HANDOVER"][i]}
          </text>
        </g>
      ))}
      {/* transformation curve */}
      <path
        d="M 0 60 C 100 60, 100 -40, 200 -40 C 260 -40, 280 -80, 400 -80 C 500 -80, 520 -130, 600 -130"
        fill="none"
        stroke={ORANGE}
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* faint pre-state dashed */}
      <path
        d="M 0 60 L 200 40 L 400 40 L 600 60"
        fill="none"
        stroke={INK}
        strokeWidth="1"
        strokeDasharray="4 6"
        opacity="0.5"
      />
      {/* endpoint big dot */}
      <circle cx="600" cy="-130" r="16" fill={ORANGE} />
      <circle cx="600" cy="-130" r="26" fill="none" stroke={ORANGE} strokeWidth="1" opacity="0.5" />
      {/* labels */}
      <text x="620" y="-118" fontFamily="serif" fontStyle="italic" fontSize="18" fill={INK}>
        Self-run
      </text>
      <text x="-10" y="42" fontFamily="ui-monospace" fontSize="10" letterSpacing="3" fill={INK_60}>
        DAY 0
      </text>
    </g>
    <text x="80" y="500" fontFamily="ui-monospace" fontSize="12" letterSpacing="4" fill={INK_60}>
      TRANSFORMATION · 4 PHASES
    </text>
    <line x1="80" y1="510" x2="720" y2="510" stroke={INK} strokeWidth="1" />
    <text x="80" y="530" fontFamily="ui-monospace" fontSize="11" letterSpacing="3" fill={ORANGE}>
      RESIDENT SQUAD · 18 MONTHS
    </text>
  </Frame>
);

// 07 — Corporate Services : interlocking columns/buildings with ring
const Corporate = () => (
  <Frame>
    <g transform="translate(400 320)">
      {/* connecting ring */}
      <circle cx="0" cy="0" r="180" fill="none" stroke={INK} strokeWidth="1" strokeDasharray="4 6" />
      {/* central hub */}
      <circle cx="0" cy="0" r="42" fill={ORANGE} />
      <text x="0" y="6" textAnchor="middle" fontFamily="serif" fontStyle="italic" fontSize="18" fill={CREAM}>
        Group
      </text>
      {/* buildings positioned around */}
      {[-1, 0, 1].map((i) => {
        const x = i * 130;
        const y = 40;
        return (
          <g key={i} transform={`translate(${x} ${y})`}>
            {/* building */}
            <rect x="-30" y="-160" width="60" height="140" fill={CREAM} stroke={INK} strokeWidth="2" />
            {/* roof/mark */}
            <path d="M -34 -160 L 0 -190 L 34 -160 Z" fill={INK} />
            {/* windows grid */}
            {[0, 1, 2].map((r) =>
              [0, 1].map((c) => (
                <rect
                  key={`${r}-${c}`}
                  x={-20 + c * 22}
                  y={-140 + r * 32}
                  width="12"
                  height="20"
                  fill={i === 0 ? ORANGE : INK_60}
                />
              ))
            )}
            {/* line from hub */}
            <line x1="0" y1="-40" x2="0" y2="-20" stroke={INK} strokeWidth="1" />
          </g>
        );
      })}
      {/* function chips */}
      {["FINANCE", "HR", "PROCURE", "COMPLY", "BRAND"].map((k, i) => {
        const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
        const x = Math.cos(a) * 180;
        const y = Math.sin(a) * 180;
        return (
          <g key={k}>
            <circle cx={x} cy={y} r="6" fill={INK} />
            <text x={x} y={y - 14} textAnchor="middle" fontFamily="ui-monospace" fontSize="10" letterSpacing="2" fill={INK}>
              {k}
            </text>
          </g>
        );
      })}
    </g>
    <text x="120" y="510" fontFamily="ui-monospace" fontSize="12" letterSpacing="4" fill={INK_60}>
      CORPORATE · SHARED
    </text>
    <line x1="120" y1="520" x2="620" y2="520" stroke={INK} strokeWidth="1" />
    <text x="120" y="540" fontFamily="ui-monospace" fontSize="11" letterSpacing="3" fill={ORANGE}>
      ONE GROUP OFFICE · MANY CAMPUSES
    </text>
  </Frame>
);

const registry = {
  "academic-excellence": Academic,
  "review-accountability": Review,
  "playbook-agent": Playbook,
  "kosmos-erp": Kosmos,
  "eduops-academy": Academy,
  "transformation-services": Transformation,
  "corporate-services": Corporate,
};

export const PillarIllustration = ({ slug, className }) => {
  const Comp = registry[slug] || Academic;
  return (
    <div className={`w-full h-full ${className || ""}`}>
      <Comp />
    </div>
  );
};
