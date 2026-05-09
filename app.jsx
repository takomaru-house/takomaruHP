// app.jsx — wires DesignCanvas + Tweaks
// ----------------------------------------------------------------------------

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": ["#faf8f3","#1a1816","#c69e6c","#5b6b4a"],
  "fontPair": "serif-jp",
  "charSize": 1,
  "charPlay": true
}/*EDITMODE-END*/;

const PALETTES = [
  ["#faf8f3","#1a1816","#c69e6c","#5b6b4a"],   // wood-natural (default)
  ["#fff8ec","#2a2620","#e07b3b","#3d5a3d"],   // タコまる調和 (orange × green)
  ["#f4eee4","#1c1815","#8a6740","#7a8a4a"],   // earthy
  ["#ededeb","#0e0e0d","#7a7a78","#1a1a1a"],   // monotone
];

const FONT_PAIRS = {
  "serif-jp": {
    label: "Cormorant × NotoSerifJP",
    serif: '"Cormorant Garamond", "Noto Serif JP", serif',
    jpSerif: '"Noto Serif JP", serif',
    sans: '"Noto Sans JP", system-ui, sans-serif',
  },
  "modern": {
    label: "Helvetica × NotoSansJP",
    serif: 'Georgia, "Noto Serif JP", serif',
    jpSerif: '"Noto Sans JP", system-ui, sans-serif',
    sans: '"Helvetica Neue", "Noto Sans JP", system-ui, sans-serif',
  },
  "editorial": {
    label: "Playfair × NotoSerifJP",
    serif: '"Cormorant Garamond", "Noto Serif JP", serif',
    jpSerif: '"Noto Serif JP", serif',
    sans: '"Noto Serif JP", "Cormorant Garamond", serif',
  },
};

function applyTweaks(t){
  const root = document.documentElement;
  const p = t.palette || PALETTES[0];
  root.style.setProperty("--bg", p[0]);
  root.style.setProperty("--ink", p[1]);
  root.style.setProperty("--wood", p[2]);
  root.style.setProperty("--sage", p[3]);
  // derive related tones
  root.style.setProperty("--paper", mix(p[0], p[2], 0.18));
  root.style.setProperty("--ink-soft", mix(p[1], p[0], 0.32));
  root.style.setProperty("--rule", mix(p[1], p[0], 0.78));
  root.style.setProperty("--wood-deep", mix(p[2], p[1], 0.45));
  root.style.setProperty("--sage-deep", mix(p[3], p[1], 0.45));
  root.style.setProperty("--rust", mix("#b35a3a", p[1], 0.18));

  const fp = FONT_PAIRS[t.fontPair] || FONT_PAIRS["serif-jp"];
  root.style.setProperty("--serif", fp.serif);
  root.style.setProperty("--jp-serif", fp.jpSerif);
  root.style.setProperty("--sans", fp.sans);

  root.style.setProperty("--char-scale", String(t.charSize ?? 1));
  document.body.classList.toggle("char-static", !t.charPlay);
}

// hex mix (0..1) helper — very small, no validation
function mix(a, b, f){
  const ah = a.replace("#",""), bh = b.replace("#","");
  const ar = parseInt(ah.slice(0,2),16), ag = parseInt(ah.slice(2,4),16), ab = parseInt(ah.slice(4,6),16);
  const br = parseInt(bh.slice(0,2),16), bg = parseInt(bh.slice(2,4),16), bb = parseInt(bh.slice(4,6),16);
  const r = Math.round(ar + (br - ar) * f);
  const g = Math.round(ag + (bg - ag) * f);
  const bl = Math.round(ab + (bb - ab) * f);
  return "#" + [r,g,bl].map(x => x.toString(16).padStart(2,"0")).join("");
}

function App(){
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => { applyTweaks(t); }, [t]);

  return (
    <>
      <div data-screen-label="Takomaru Home — Quiet Archive">
        <ArtboardArchive/>
      </div>

      <TweaksPanel>
        <TweakSection label="配色 / Palette" />
        <TweakColor
          label="パレット"
          value={t.palette}
          options={PALETTES}
          onChange={(v) => setTweak("palette", v)}
        />

        <TweakSection label="タイポグラフィ / Type" />
        <TweakRadio
          label="ペアリング"
          value={t.fontPair}
          options={Object.keys(FONT_PAIRS)}
          onChange={(v) => setTweak("fontPair", v)}
        />

        <TweakSection label="タコまる / Character" />
        <TweakSlider
          label="サイズ"
          value={t.charSize}
          min={0.5} max={1.6} step={0.05} unit="×"
          onChange={(v) => setTweak("charSize", v)}
        />
        <TweakToggle
          label="ふわふわ動き"
          value={t.charPlay}
          onChange={(v) => setTweak("charPlay", v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
