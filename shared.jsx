// shared.jsx — Takomaru, SVG illustrations, sample data
// ----------------------------------------------------------------------------

const TAKOMARU_SRC = (typeof window !== 'undefined' && window.__resources && window.__resources.takomaruPng) || "assets/takomaru.png";

// ── Takomaru sprite ─────────────────────────────────────────────────────────
function Takomaru({ size = 200, style = {}, rot = 0, flip = false }){
  return (
    <img
      src={TAKOMARU_SRC}
      alt="タコまる"
      className="tk-takomaru"
      style={{
        width: size, height: size, objectFit: "contain",
        transform: `rotate(${rot}deg) scaleX(${flip ? -1 : 1})`,
        ...style
      }}
    />
  );
}

// ── Architectural floor plan (looks like a real 間取り図) ──────────────────
function FloorPlan({ width = 380, height = 260, label = "PLAN — 1F", showFurniture = true }){
  // grid units
  const u = 28;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="100%"
         style={{ background: "var(--paper)", display: "block" }}>
      {/* faint grid */}
      <defs>
        <pattern id="fp-grid" width={u} height={u} patternUnits="userSpaceOnUse">
          <path d={`M ${u} 0 L 0 0 0 ${u}`} fill="none" stroke="rgba(31,24,16,0.06)" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width={width} height={height} fill="url(#fp-grid)"/>

      {/* outer wall */}
      <g stroke="var(--ink)" strokeWidth="2.4" fill="none">
        <rect x="20" y="30" width={width - 40} height={height - 60}/>
      </g>
      {/* inner walls */}
      <g stroke="var(--ink)" strokeWidth="1.4" fill="none">
        <line x1={width * 0.42} y1="30" x2={width * 0.42} y2={height - 30}/>
        <line x1={width * 0.42} y1={height * 0.55} x2={width - 20} y2={height * 0.55}/>
        <line x1="20" y1={height * 0.65} x2={width * 0.42} y2={height * 0.65}/>
        {/* door arcs */}
        <path d={`M ${width * 0.42} ${height * 0.40} A 24 24 0 0 1 ${width * 0.42 + 24} ${height * 0.40 + 24}`}/>
        <path d={`M ${width * 0.70} ${height * 0.55} A 22 22 0 0 0 ${width * 0.70} ${height * 0.55 - 22}`}/>
      </g>
      {/* windows */}
      <g stroke="var(--ink)" strokeWidth="1.2">
        <line x1="60" y1="30" x2="120" y2="30" strokeWidth="3"/>
        <line x1="60" y1="30" x2="120" y2="30" stroke="var(--bg)" strokeWidth="1.4"/>
        <line x1={width - 110} y1={height - 30} x2={width - 60} y2={height - 30} strokeWidth="3"/>
        <line x1={width - 110} y1={height - 30} x2={width - 60} y2={height - 30} stroke="var(--bg)" strokeWidth="1.4"/>
      </g>

      {showFurniture && (
        <g stroke="var(--wood-deep)" strokeWidth="1" fill="none">
          {/* sofa */}
          <rect x={width * 0.50} y={height * 0.10} width="80" height="34" rx="3"/>
          <rect x={width * 0.50 + 4} y={height * 0.10 + 4} width="34" height="26" rx="2"/>
          <rect x={width * 0.50 + 42} y={height * 0.10 + 4} width="34" height="26" rx="2"/>
          {/* dining table */}
          <rect x={width * 0.62} y={height * 0.62} width="60" height="36" rx="2"/>
          <circle cx={width * 0.62 + 12} cy={height * 0.62 - 8} r="6"/>
          <circle cx={width * 0.62 + 48} cy={height * 0.62 - 8} r="6"/>
          <circle cx={width * 0.62 + 12} cy={height * 0.62 + 44 + 6} r="6"/>
          <circle cx={width * 0.62 + 48} cy={height * 0.62 + 44 + 6} r="6"/>
          {/* bed */}
          <rect x="40" y="60" width="80" height="50" rx="2"/>
          <rect x="44" y="64" width="72" height="14" rx="1" fill="var(--wood)" fillOpacity="0.25"/>
          {/* desk */}
          <rect x="40" y={height * 0.70} width="56" height="22"/>
        </g>
      )}

      {/* room labels */}
      <g fontFamily="var(--mono)" fontSize="9" fill="var(--ink-soft)" letterSpacing="0.08em">
        <text x={width * 0.20} y={height * 0.45}>BEDROOM</text>
        <text x={width * 0.20} y={height * 0.78}>ENTRY</text>
        <text x={width * 0.62} y={height * 0.30}>LIVING</text>
        <text x={width * 0.65} y={height * 0.85}>DINING</text>
      </g>
      {/* dimension */}
      <g stroke="var(--ink-soft)" strokeWidth="0.5" fontFamily="var(--mono)" fontSize="9" fill="var(--ink-soft)">
        <line x1="20" y1={height - 16} x2={width - 20} y2={height - 16}/>
        <line x1="20" y1={height - 19} x2="20" y2={height - 13}/>
        <line x1={width - 20} y1={height - 19} x2={width - 20} y2={height - 13}/>
        <text x={width / 2 - 16} y={height - 5} fill="var(--ink-soft)">9,100 mm</text>
      </g>

      {/* corner mark */}
      <text x="22" y="22" fontFamily="var(--mono)" fontSize="9" fill="var(--ink-soft)" letterSpacing="0.12em">{label}</text>
      <text x={width - 22} y="22" textAnchor="end" fontFamily="var(--mono)" fontSize="9" fill="var(--ink-soft)">N ↑</text>
    </svg>
  );
}

// ── Architectural elevation (外観) ──────────────────────────────────────────
function Elevation({ width = 380, height = 260, label = "ELEV — SOUTH" }){
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="100%"
         style={{ background: "var(--paper)", display: "block" }}>
      <g stroke="var(--ink)" strokeWidth="1.6" fill="none">
        {/* ground */}
        <line x1="0" y1={height - 30} x2={width} y2={height - 30} strokeWidth="2.4"/>
        {/* house body */}
        <polygon points={`60,${height - 30} 60,120 ${width / 2},60 ${width - 60},120 ${width - 60},${height - 30}`} fill="var(--bg)"/>
        {/* roof line shadow */}
        <line x1="60" y1="120" x2={width - 60} y2="120"/>
        {/* windows */}
        <rect x="92" y="150" width="50" height="60"/>
        <line x1="117" y1="150" x2="117" y2="210"/>
        <line x1="92" y1="180" x2="142" y2="180"/>
        <rect x={width - 142} y="150" width="50" height="60"/>
        <line x1={width - 117} y1="150" x2={width - 117} y2="210"/>
        <line x1={width - 142} y1="180" x2={width - 92} y2="180"/>
        {/* door */}
        <rect x={width / 2 - 22} y={height - 30 - 70} width="44" height="70"/>
        <circle cx={width / 2 - 14} cy={height - 30 - 36} r="1.2" fill="var(--ink)"/>
        {/* chimney */}
        <rect x={width * 0.62} y="78" width="18" height="42"/>
      </g>
      {/* trees / landscape */}
      <g stroke="var(--sage)" strokeWidth="1" fill="none">
        <circle cx="28" cy={height - 50} r="14"/>
        <line x1="28" y1={height - 36} x2="28" y2={height - 30}/>
        <circle cx={width - 24} cy={height - 60} r="20"/>
        <line x1={width - 24} y1={height - 40} x2={width - 24} y2={height - 30}/>
      </g>
      {/* dimension */}
      <g stroke="var(--ink-soft)" strokeWidth="0.5" fontFamily="var(--mono)" fontSize="9" fill="var(--ink-soft)">
        <line x1={width - 50} y1={height - 30} x2={width - 50} y2="60"/>
        <line x1={width - 53} y1={height - 30} x2={width - 47} y2={height - 30}/>
        <line x1={width - 53} y1="60" x2={width - 47} y2="60"/>
        <text x={width - 44} y={(height - 30 + 60) / 2} fill="var(--ink-soft)">7,200</text>
      </g>
      <text x="14" y="20" fontFamily="var(--mono)" fontSize="9" fill="var(--ink-soft)" letterSpacing="0.12em">{label}</text>
      <text x={width - 14} y="20" textAnchor="end" fontFamily="var(--mono)" fontSize="9" fill="var(--ink-soft)">SCALE 1/100</text>
    </svg>
  );
}

// ── Window-view (interior frame as imagery) ─────────────────────────────────
function WindowView({ height = 260, label = "INTERIOR / SOUTH WINDOW" }){
  return (
    <div style={{ position: "relative", height, background: "var(--paper)", border: "1px solid var(--rule)", overflow: "hidden" }}>
      {/* sky gradient */}
      <div style={{
        position: "absolute", inset: "8% 14% 32% 14%",
        background: "linear-gradient(180deg, #e8dcc4 0%, #d8c9a8 60%, #b69a72 100%)"
      }}/>
      {/* horizon hill */}
      <svg viewBox="0 0 400 200" preserveAspectRatio="none"
           style={{ position: "absolute", inset: "30% 14% 32% 14%", width: "auto", height: "auto" }}>
        <path d="M0,140 C80,90 200,150 320,80 L400,120 L400,200 L0,200 Z" fill="var(--sage)" opacity="0.55"/>
        <path d="M0,170 C100,130 220,180 400,150 L400,200 L0,200 Z" fill="var(--sage-deep)" opacity="0.65"/>
      </svg>
      {/* mullions */}
      <div style={{ position: "absolute", inset: "8% 14% 32% 14%", display: "grid", gridTemplate: "1fr 1fr / 1fr 1fr 1fr", pointerEvents: "none" }}>
        {[0,1,2,3,4,5].map(i => (
          <div key={i} style={{ borderRight: i % 3 !== 2 ? "2px solid var(--ink)" : "none", borderBottom: i < 3 ? "2px solid var(--ink)" : "none" }}/>
        ))}
      </div>
      {/* frame */}
      <div style={{ position: "absolute", inset: "8% 14% 32% 14%", border: "5px solid var(--ink)", pointerEvents: "none" }}/>
      {/* floor / sill */}
      <div style={{ position: "absolute", left: "8%", right: "8%", bottom: 0, height: "32%",
        background: "linear-gradient(180deg, var(--wood) 0%, var(--wood-deep) 100%)" }}/>
      <div style={{ position: "absolute", left: "8%", right: "8%", top: "68%", height: "8px", background: "var(--ink)" }}/>
      {/* small chair silhouette */}
      <svg viewBox="0 0 80 80" style={{ position: "absolute", right: "20%", bottom: "8%", width: 80, height: 80 }}>
        <g stroke="var(--ink)" strokeWidth="2" fill="none">
          <line x1="20" y1="10" x2="20" y2="60"/>
          <line x1="60" y1="30" x2="60" y2="60"/>
          <line x1="20" y1="35" x2="60" y2="35"/>
          <line x1="20" y1="60" x2="60" y2="60"/>
          <line x1="22" y1="60" x2="22" y2="76"/>
          <line x1="58" y1="60" x2="58" y2="76"/>
        </g>
      </svg>
      {/* lamp */}
      <svg viewBox="0 0 60 200" style={{ position: "absolute", left: "16%", bottom: "0", width: 36, height: 160 }}>
        <g stroke="var(--ink)" strokeWidth="2" fill="none">
          <path d="M10,30 L50,30 L40,70 L20,70 Z" fill="var(--wood)"/>
          <line x1="30" y1="70" x2="30" y2="180"/>
          <ellipse cx="30" cy="190" rx="20" ry="4" fill="var(--ink)"/>
        </g>
      </svg>
      <div className="tk-img-label">{label}</div>
    </div>
  );
}

// ── Isometric house silhouette ──────────────────────────────────────────────
function IsoHouse({ size = 220 }){
  return (
    <svg viewBox="0 0 240 200" width={size} height={size * 200 / 240}>
      <g stroke="var(--ink)" strokeWidth="1.4" fill="none" strokeLinejoin="round">
        {/* base */}
        <polygon points="40,140 120,180 200,140 120,100" fill="var(--paper)"/>
        {/* left wall */}
        <polygon points="40,140 120,180 120,110 40,70" fill="var(--bg)"/>
        {/* right wall */}
        <polygon points="200,140 120,180 120,110 200,70" fill="var(--paper)"/>
        {/* roof left */}
        <polygon points="40,70 120,30 120,110" fill="var(--wood)" fillOpacity="0.4"/>
        {/* roof right */}
        <polygon points="200,70 120,30 120,110" fill="var(--wood)" fillOpacity="0.7"/>
        {/* windows */}
        <rect x="56" y="92" width="14" height="14"/>
        <rect x="86" y="108" width="14" height="14"/>
        <rect x="138" y="108" width="14" height="14"/>
        <rect x="170" y="92" width="14" height="14"/>
      </g>
    </svg>
  );
}

// ── Furniture mark icons (chair, table, lamp etc.) for tool/category ────────
function FurnitureMark({ kind = "chair", size = 32 }){
  const common = { stroke: "var(--ink)", strokeWidth: 1.5, fill: "none" };
  if (kind === "chair") return (
    <svg viewBox="0 0 32 32" width={size} height={size}>
      <g {...common}>
        <line x1="9" y1="6" x2="9" y2="22"/>
        <line x1="22" y1="14" x2="22" y2="22"/>
        <line x1="9" y1="16" x2="22" y2="16"/>
        <line x1="9" y1="22" x2="22" y2="22"/>
        <line x1="10" y1="22" x2="10" y2="28"/>
        <line x1="21" y1="22" x2="21" y2="28"/>
      </g>
    </svg>
  );
  if (kind === "lamp") return (
    <svg viewBox="0 0 32 32" width={size} height={size}>
      <g {...common}>
        <path d="M10,8 L22,8 L19,18 L13,18 Z"/>
        <line x1="16" y1="18" x2="16" y2="28"/>
        <line x1="11" y1="28" x2="21" y2="28"/>
      </g>
    </svg>
  );
  if (kind === "door") return (
    <svg viewBox="0 0 32 32" width={size} height={size}>
      <g {...common}>
        <rect x="9" y="5" width="14" height="22"/>
        <circle cx="20" cy="16" r="0.8" fill="var(--ink)"/>
      </g>
    </svg>
  );
  if (kind === "plan") return (
    <svg viewBox="0 0 32 32" width={size} height={size}>
      <g {...common}>
        <rect x="6" y="6" width="20" height="20"/>
        <line x1="16" y1="6" x2="16" y2="26"/>
        <line x1="16" y1="16" x2="26" y2="16"/>
      </g>
    </svg>
  );
  if (kind === "compare") return (
    <svg viewBox="0 0 32 32" width={size} height={size}>
      <g {...common}>
        <rect x="4" y="6" width="10" height="20"/>
        <rect x="18" y="6" width="10" height="20"/>
      </g>
    </svg>
  );
  if (kind === "land") return (
    <svg viewBox="0 0 32 32" width={size} height={size}>
      <g {...common}>
        <polygon points="4,24 12,12 22,18 28,8 28,24"/>
        <line x1="4" y1="24" x2="28" y2="24"/>
      </g>
    </svg>
  );
  if (kind === "play") return (
    <svg viewBox="0 0 32 32" width={size} height={size}>
      <g {...common}>
        <polygon points="11,8 24,16 11,24" fill="var(--ink)"/>
      </g>
    </svg>
  );
  return null;
}

// ── data ────────────────────────────────────────────────────────────────────
const TOOLS = [
  { id: "madori", num: "01", icon: "plan",
    jp: "間取り生成ツール", en: "Floor Plan Generator",
    desc: "敷地条件と要件を入力すると、複数パターンの間取りを生成して比較できる。",
    tag: "GENERATOR", status: "公開中 / LIVE" },
  { id: "diff", num: "02", icon: "compare",
    jp: "PDF差分検出ツール", en: "PDF Diff Detector",
    desc: "改訂前後の図面PDFを重ねて、変更箇所を視覚的にハイライト。打ち合わせの工数を圧縮。",
    tag: "UTILITY", status: "公開中 / LIVE" },
  { id: "land", num: "03", icon: "land",
    jp: "土地形状シミュレータ", en: "Site Shape Simulator",
    desc: "旗竿地・整形地・傾斜地など、土地形状ごとの建築可能ボリュームを試算。",
    tag: "SIMULATOR", status: "近日公開 / SOON" },
];

const VIDEO_CATEGORIES = [
  {
    id: "madori-explain",
    jp: "間取り解説", en: "Plan Critique",
    sub: "実際の間取り図を1枚ずつ読み解く。",
    videos: [
      { num: "#142", jp: "30坪・南玄関・3LDKを徹底解説", min: "18:24" },
      { num: "#138", jp: "回遊動線、本当に必要？", min: "12:08" },
      { num: "#129", jp: "畳コーナーの使いどころ", min: "09:51" },
    ],
  },
  {
    id: "facade",
    jp: "外観から考えよう", en: "Start From The Façade",
    sub: "立面と外構から逆算する家づくり。",
    videos: [
      { num: "#117", jp: "黒い家・白い家、10年後の差", min: "14:33" },
      { num: "#108", jp: "片流れ vs 寄棟、コスト比較", min: "11:47" },
      { num: "#101", jp: "外観で失敗しないための6原則", min: "16:02" },
    ],
  },
  {
    id: "land",
    jp: "土地の形状", en: "On The Land",
    sub: "注文住宅は土地で8割決まる。",
    videos: [
      { num: "#091", jp: "旗竿地、避けるべきか？", min: "13:18" },
      { num: "#085", jp: "南北に細長い土地の攻略法", min: "15:06" },
      { num: "#078", jp: "傾斜地のコストはどこに乗る", min: "10:42" },
    ],
  },
];

// ── Takotsubo (octopus pot) illustration ───────────────────────────────────
// Traditional Japanese unglazed pottery, hand-drawn line-art style.
// light=true: inverts to cream lines for use on dark backgrounds.
function TakoTsubo({ width = 200, height = 270, style = {}, light = false }) {
  const stroke  = light ? "rgba(245,241,232,0.9)" : "var(--ink)";
  const fill    = light ? "rgba(245,241,232,0.08)" : "var(--wood)";
  const fillOp  = light ? 1 : 0.16;
  const hatchOp = light ? 0.18 : 0.28;
  const shadeOp = light ? 0.12 : 0.18;

  return (
    <svg viewBox="0 0 180 240" width={width} height={height}
         style={style} aria-hidden="true">

      {/* ── Body fill ── */}
      <path
        d="M 90 218
           C 65 218, 18 190, 18 155
           C 18 115, 28 86, 40 76
           C 40 56, 54 32, 66 29
           Q 90 21, 114 29
           C 126 32, 140 56, 140 76
           C 152 86, 162 115, 162 155
           C 162 190, 115 218, 90 218 Z"
        fill={fill} fillOpacity={fillOp}
        stroke={stroke} strokeWidth="1.6" strokeLinejoin="round"
      />

      {/* ── Rim outer ellipse (the lip) ── */}
      <ellipse cx="90" cy="29" rx="26" ry="9"
        fill={fill} fillOpacity={fillOp * 0.8}
        stroke={stroke} strokeWidth="1.2" />

      {/* ── Opening inner (the hole) ── */}
      <ellipse cx="90" cy="23" rx="20" ry="6.5"
        fill={light ? "rgba(245,241,232,0.12)" : "rgba(26,24,22,0.10)"}
        stroke={stroke} strokeWidth="0.8" />

      {/* ── Wheel-throwing texture lines ── */}
      <ellipse cx="90" cy="84"  rx="48" ry="7"  fill="none" stroke={stroke} strokeWidth="0.5" strokeOpacity={hatchOp} />
      <ellipse cx="90" cy="112" rx="60" ry="9"  fill="none" stroke={stroke} strokeWidth="0.5" strokeOpacity={hatchOp * 0.9} />
      <ellipse cx="90" cy="140" rx="68" ry="10" fill="none" stroke={stroke} strokeWidth="0.5" strokeOpacity={hatchOp * 0.85} />
      <ellipse cx="90" cy="168" rx="62" ry="9"  fill="none" stroke={stroke} strokeWidth="0.5" strokeOpacity={hatchOp * 0.75} />
      <ellipse cx="90" cy="192" rx="50" ry="7"  fill="none" stroke={stroke} strokeWidth="0.4" strokeOpacity={hatchOp * 0.6} />

      {/* ── Side shading curves (right face darker) ── */}
      <path d="M 132 79 C 150 104, 155 132, 150 162 C 146 182, 136 200, 122 212"
        fill="none" stroke={stroke} strokeWidth="0.8" strokeOpacity={shadeOp} />
      <path d="M 140 92 C 155 118, 158 148, 152 176"
        fill="none" stroke={stroke} strokeWidth="0.5" strokeOpacity={shadeOp * 0.7} />

      {/* ── Ground shadow ellipse ── */}
      <ellipse cx="90" cy="226" rx="52" ry="9"
        fill={stroke} fillOpacity={light ? 0.12 : 0.06} />

      {/* ── Small label ── */}
      <text x="90" y="238" textAnchor="middle"
        fontFamily="var(--mono)" fontSize="8" letterSpacing="0.14em"
        fill={stroke} fillOpacity={light ? 0.35 : 0.3}>
        TAKOTSUBO
      </text>
    </svg>
  );
}

// expose for other Babel scripts
Object.assign(window, {
  Takomaru, FloorPlan, Elevation, WindowView, IsoHouse, FurnitureMark,
  TakoTsubo,
  TOOLS, VIDEO_CATEGORIES,
});
