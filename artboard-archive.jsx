// artboard-archive.jsx — Enhanced + Responsive Edition
// ─────────────────────────────────────────────────────────────────────────────

function ArtboardArchive() {
  return (
    <div className="tk-art" style={{ paddingBottom: 80, background: "#f5f1e8" }}>
      <style>{`
        html { scroll-snap-type: y proximity; scroll-behavior: smooth; }
        .tk-art > .tk-snap { scroll-snap-align: start; scroll-snap-stop: always; }

        /* ── Entrance animations ── */
        @keyframes ar-rise {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ar-fade { from { opacity: 0; } to { opacity: 1; } }

        .ar-hero-t1 { animation: ar-rise 1s    cubic-bezier(0.16,1,0.3,1) 0.05s both; }
        .ar-hero-t2 { animation: ar-rise 1s    cubic-bezier(0.16,1,0.3,1) 0.18s both; }
        .ar-hero-ch { animation: ar-rise 0.9s  cubic-bezier(0.16,1,0.3,1) 0.28s both; }
        .ar-hero-mt { animation: ar-rise 0.85s cubic-bezier(0.16,1,0.3,1) 0.42s both; }
        .ar-hero-bt { animation: ar-rise 0.75s cubic-bezier(0.16,1,0.3,1) 0.58s both; }

        /* ── Scroll-triggered reveals ── */
        .ar-reveal {
          opacity: 0; transform: translateY(22px);
          transition: opacity 0.85s cubic-bezier(0.16,1,0.3,1),
                      transform 0.85s cubic-bezier(0.16,1,0.3,1);
        }
        .ar-reveal.in { opacity: 1; transform: translateY(0); }
        .ar-reveal.d1 { transition-delay: 0.07s; }
        .ar-reveal.d2 { transition-delay: 0.15s; }
        .ar-reveal.d3 { transition-delay: 0.24s; }

        /* ── Scroll progress bar ── */
        .ar-progress {
          position: fixed; top: 0; left: 0; height: 2px; width: 0;
          background: linear-gradient(90deg, var(--sage-deep) 0%, var(--wood) 100%);
          z-index: 9999; pointer-events: none;
          transition: width 0.06s linear;
        }

        /* ── Sticky header ── */
        .ar-header {
          position: sticky; top: 0; z-index: 100;
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          background: rgba(245,241,232,0.88);
          transition: box-shadow 0.3s ease;
        }
        .ar-header.shadow { box-shadow: 0 1px 0 rgba(26,24,22,0.14); }

        /* ── Tool rows ── */
        .ar-tool-row { transition: background 0.22s ease; }
        .ar-tool-row:hover { background: rgba(61,74,50,0.045); }
        .ar-tool-thumb {
          transition: transform 0.32s cubic-bezier(0.16,1,0.3,1), box-shadow 0.32s;
          overflow: hidden;
        }
        .ar-tool-row:hover .ar-tool-thumb {
          transform: translateY(-3px);
          box-shadow: 0 6px 18px rgba(26,24,22,0.14);
        }
        .ar-tool-arrow { transition: transform 0.26s cubic-bezier(0.16,1,0.3,1); display: inline-block; }
        .ar-tool-row:hover .ar-tool-arrow { transform: translate(4px,-4px); }
        .ar-tool-status { transition: color 0.2s; }

        /* ── Video rows ── */
        .ar-video-row { transition: background 0.18s ease; cursor: pointer; }
        .ar-video-row:hover { background: rgba(26,24,22,0.04); }
        .ar-video-thumb {
          transition: transform 0.28s cubic-bezier(0.16,1,0.3,1), box-shadow 0.28s;
          overflow: hidden;
        }
        .ar-video-row:hover .ar-video-thumb {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(26,24,22,0.16);
        }
        .ar-play-icon {
          opacity: 0; transform: scale(0.8);
          transition: opacity 0.18s, transform 0.18s cubic-bezier(0.16,1,0.3,1);
        }
        .ar-video-row:hover .ar-play-icon { opacity: 1; transform: scale(1); }

        /* ── Hero buttons ── */
        .ar-btn-filled {
          transition: transform 0.18s cubic-bezier(0.16,1,0.3,1), box-shadow 0.22s !important;
        }
        .ar-btn-filled:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 28px rgba(26,24,22,0.26) !important;
        }
        .ar-btn-outline {
          transition: background 0.18s, color 0.18s,
                      transform 0.18s cubic-bezier(0.16,1,0.3,1) !important;
        }
        .ar-btn-outline:hover {
          background: var(--ink) !important;
          color: #f5f1e8 !important;
          transform: translateY(-2px) !important;
        }

        /* ── Social links ── */
        .ar-social-row {
          transition: padding-left 0.22s cubic-bezier(0.16,1,0.3,1), background 0.18s;
        }
        .ar-social-row:hover { background: rgba(245,241,232,0.06); }
        .ar-social-arr {
          transition: transform 0.22s cubic-bezier(0.16,1,0.3,1);
          display: inline-block;
        }
        .ar-social-row:hover .ar-social-arr { transform: translateX(3px); }

        /* ── Stats ── */
        .ar-stat { transition: transform 0.26s cubic-bezier(0.16,1,0.3,1); }
        .ar-stat:hover { transform: translateY(-4px); }
        .ar-stat-n { transition: color 0.26s; }
        .ar-stat:hover .ar-stat-n { color: var(--wood-deep) !important; }

        /* ── Marquee ── */
        @keyframes ar-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ar-marquee-track { animation: ar-marquee 72s linear infinite; will-change: transform; }
        .ar-marquee-track:hover { animation-play-state: paused; }

        /* ── Contact email ── */
        .ar-email-link { transition: letter-spacing 0.3s cubic-bezier(0.16,1,0.3,1); }
        .ar-email-link:hover { letter-spacing: 0.01em !important; }

        /* ════════════════════════════════════════════════
           RESPONSIVE — tablet (≤ 1024px)
        ════════════════════════════════════════════════ */
        @media (max-width: 1024px) {
          .ar-hero-desc-text { width: auto !important; font-size: 15px !important; }
          .ar-hero-meta-r { display: none !important; }
          .ar-hero-meta-grid {
            grid-template-columns: 260px 1fr !important;
            gap: 32px !important;
          }
        }

        /* ════════════════════════════════════════════════
           RESPONSIVE — mobile (≤ 768px)
        ════════════════════════════════════════════════ */
        @media (max-width: 768px) {

          /* ── Disable scroll snap on mobile (too jarring) ── */
          html { scroll-snap-type: none !important; }
          .tk-art > .tk-snap { scroll-snap-align: none !important; }

          /* ── Header ── */
          .ar-header {
            padding: 14px 20px !important;
            grid-template-columns: 1fr auto !important;
          }
          .ar-hd-center { display: none !important; }

          /* ── Hero ── */
          .ar-hero-outer { padding: 40px 20px 48px !important; }
          .ar-hero-topgrid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          .ar-hero-t1 { font-size: clamp(40px, 10.5vw, 80px) !important; }
          .ar-hero-t2 { font-size: clamp(40px, 10.5vw, 80px) !important; }
          .ar-hero-ch {
            order: -1 !important;
            text-align: left !important;
            margin-bottom: 12px !important;
            margin-top: 0 !important;
          }
          .ar-hero-mt {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .ar-hero-meta-l { display: none !important; }
          .ar-hero-meta-r { display: none !important; }
          .ar-hero-desc-text { width: auto !important; font-size: 14px !important; line-height: 1.9 !important; }
          .ar-hero-bt {
            flex-direction: column !important;
            gap: 10px !important;
          }
          .ar-hero-bt a { text-align: center !important; }

          /* ── Section padding ── */
          .ar-section-pad { padding: 52px 20px 44px !important; }

          /* ── 260px/1fr → single col ── */
          .ar-2col-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .ar-sticky-col { position: static !important; top: auto !important; }
          .ar-section-h2 { font-size: 56px !important; }

          /* ── Tool rows: 5-col → 3-col ── */
          .ar-tool-row-grid {
            grid-template-columns: 44px 1fr 64px !important;
            gap: 10px !important;
            padding: 18px 0 !important;
          }
          .ar-tool-col-desc  { display: none !important; }
          .ar-tool-col-thumb { display: none !important; }
          .ar-tool-col-title h3 { font-size: 20px !important; }
          .ar-tool-col-title .tk-serif { font-size: 14px !important; }

          /* ── Video rows: 5-col → 3-col ── */
          .ar-video-row-grid {
            grid-template-columns: 64px 1fr 52px !important;
            gap: 10px !important;
          }
          .ar-video-col-num { display: none !important; }
          .ar-video-col-cat { display: none !important; }
          .ar-video-title { font-size: 14px !important; line-height: 1.5 !important; }

          /* ── About ── */
          .ar-about-textgrid { grid-template-columns: 1fr !important; }
          .ar-about-char { flex-direction: row !important; align-items: center !important; gap: 16px !important; }
          .ar-stats-grid { grid-template-columns: 1fr 1fr !important; }
          .ar-stat { padding-left: 0 !important; }

          /* ── Contact ── */
          .ar-contact-cols { grid-template-columns: 1fr !important; gap: 32px !important; }
          .ar-email-link { font-size: 26px !important; }
          .ar-contact-outer { padding: 52px 20px 44px !important; }

          /* ── Manifesto ── */
          .ar-marquee-track span { font-size: 26px !important; }

          /* ── Misc ── */
          .ar-hero-bookshelf { display: none !important; }
        }
      `}</style>
      <ArScrollProgress />
      <ArHeader />
      <ArHero />
      <ArManifesto />
      <ArTools />
      <ArVideos />
      <ArAbout />
      <ArContact />
    </div>
  );
}

// ── Scroll progress bar ────────────────────────────────────────────────────
function ArScrollProgress() {
  const [pct, setPct] = React.useState(0);
  React.useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docH = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight
      );
      const total = docH - window.innerHeight;
      setPct(total > 0 ? Math.min(100, (scrollTop / total) * 100) : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <div className="ar-progress" style={{ width: pct + '%' }} />;
}

// ── useReveal hook ─────────────────────────────────────────────────────────
function useReveal(ref, threshold = 0.1) {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return visible;
}

// ── Header ────────────────────────────────────────────────────────────────
function ArHeader() {
  const [shadow, setShadow] = React.useState(false);
  React.useEffect(() => {
    const update = () => setShadow(window.scrollY > 10);
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return (
    <div className={`ar-header ${shadow ? 'shadow' : ''}`} style={{
      padding: "20px 64px", borderBottom: "0.5px solid var(--ink)",
      display: "grid", gridTemplateColumns: "1fr 1fr 1fr", alignItems: "center"
    }}>
      <div className="tk-mono" style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--ink-soft)" }}>
        TAKOMARU&nbsp;·&nbsp;ARCHIVE
      </div>
      <div className="ar-hd-center" style={{ textAlign: "center", fontFamily: "var(--serif)", fontSize: 18, fontStyle: "italic", color: "var(--ink-soft)" }}>
        an index of houses, films, and tools
      </div>
      <div className="tk-mono" style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--ink-soft)", textAlign: "right" }}>
        2026.03&nbsp;·&nbsp;KYOTO
      </div>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────
function ArHero() {
  return (
    <div className="tk-snap ar-hero-outer" style={{ borderBottom: "0.5px solid var(--ink)", position: "relative", padding: "80px 64px", overflow: "hidden" }}>
      {/* Bookshelf background */}
      <div className="ar-hero-bookshelf" aria-hidden="true" style={{
        position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.18,
        background: `
          repeating-linear-gradient(180deg, transparent 0 178px, var(--ink) 178px 179.5px, transparent 179.5px 180px),
          repeating-linear-gradient(90deg,
            #6a5a44 0 22px, #8a7250 22px 24px,
            #4f6048 24px 52px, #2f3a2d 52px 54px,
            #b89a6a 54px 76px, #7a6440 76px 78px,
            #2a2520 78px 92px, #1a1612 92px 94px,
            #c2b08a 94px 124px, #8a7858 124px 126px,
            #5a4a36 126px 142px, #3a2e22 142px 144px,
            #7a8a6e 144px 178px, #5a6a52 178px 180px,
            #a8946e 180px 198px, #786040 198px 200px,
            #3a4838 200px 226px, #1f2820 226px 228px,
            #b8a888 228px 256px, #8a7a5a 256px 258px,
            #5e4a36 258px 274px, #2c2218 274px 276px,
            #9aa890 276px 308px, #6a7866 308px 310px
          ),
          var(--cream)
        `,
        backgroundSize: "auto, 310px 180px, auto",
        filter: "blur(0.4px)"
      }}></div>
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "linear-gradient(180deg, var(--cream) 0%, transparent 18%, transparent 82%, var(--cream) 100%), radial-gradient(ellipse at center, transparent 30%, var(--cream) 90%)",
        opacity: 0.78
      }}></div>

      <div style={{ position: "relative" }}>
        {/* Title + Character */}
        <div className="ar-hero-topgrid" style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "end", gap: 48 }}>
          <div>
            <h1 style={{
              fontFamily: "var(--serif)", fontWeight: 300,
              lineHeight: 0.86, letterSpacing: "-0.03em",
              color: "var(--ink)", fontSize: "120px", margin: 0
            }}>
              <span className="ar-hero-t1" style={{ display: "block" }}>タコまるの</span>
              <span className="ar-hero-t2" style={{ display: "block", fontFamily: "var(--jp-serif)", fontWeight: 300, fontSize: 120, color: "var(--sage-deep)" }}>
                家づくりのツボ
              </span>
            </h1>
          </div>
          <div className="ar-hero-ch" style={{ textAlign: "right", marginBottom: 24 }}>
            <Takomaru size={140} rot={-4} />
          </div>
        </div>

        {/* Meta strip */}
        <div className="ar-hero-mt ar-hero-meta-grid" style={{ marginTop: 40, display: "grid", gridTemplateColumns: "320px 1fr 320px", gap: 56,
            alignItems: "start", borderTop: "0.5px solid var(--ink)", paddingTop: 32 }}>
          <div className="tk-eye ar-hero-meta-l">A QUIET ARCHIVE OF<br />HOUSING, IN THREE PARTS.</div>
          <div className="ar-hero-desc-text" style={{ fontFamily: "var(--jp-serif)", fontSize: 17, lineHeight: 2.05, textAlign: "justify", width: "750px" }}>
            このサイトは、住宅を考えるための小さな書庫です。<br />
            注文住宅について、タコまるが 動画と道具で残してきたものを整理しています。<br />
            ご自由にご覧下さい。
          </div>
          <div className="ar-hero-meta-r" style={{ textAlign: "right" }}>
            <div className="tk-eye" style={{ display: "inline-block", textAlign: "left", fontSize: 11 }}>
              3 SECTIONS · 142 FILMS<br />3 TOOLS · ∞ NOTES
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="ar-hero-bt" style={{ marginTop: 40, display: "flex", gap: 16, justifyContent: "center" }}>
          <a href="#tools" className="ar-btn-filled" style={{ padding: "16px 28px", border: "0.5px solid var(--ink)",
              fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase",
              textDecoration: "none", background: "var(--ink)", color: "#f5f1e8", display: "inline-block" }}>
            道具へ — TOOLS
          </a>
          <a href="#films" className="ar-btn-outline" style={{ padding: "16px 28px", border: "0.5px solid var(--ink)", color: "var(--ink)",
              fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase",
              textDecoration: "none", display: "inline-block" }}>
            映像へ — FILMS
          </a>
          <a href="#about" className="ar-btn-outline" style={{ padding: "16px 28px", border: "0.5px solid var(--ink)", color: "var(--ink)",
              fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase",
              textDecoration: "none", display: "inline-block" }}>
            タコまる — ABOUT
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Manifesto strip ────────────────────────────────────────────────────────
function ArManifesto() {
  const quotes = [
    "図面を読むことは、本を読むことに、案外よく似ている。",
    "良い間取りは、家族の癖から生まれる。",
    "窓は壁の一部ではなく、空の一部である。",
    "天井の高さは、会話の高さを決める。",
    "収納は量ではなく、動線で考える。",
    "光は素材で、影は構造で、つくる。",
    "予算は制約ではなく、設計の地図である。",
    "玄関は、家の表紙のようなものだ。",
    "廊下は、間取りの余白である。",
    "住宅は、暮らしの製本である。",
    "庭は、もう一つの部屋だと思っている。"
  ];
  const loop = [...quotes, ...quotes];
  return (
    <div className="tk-snap" style={{ padding: "48px 0", borderBottom: "0.5px solid var(--ink)", background: "var(--sage-deep)", color: "#f5f1e8", overflow: "hidden", position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 64px 28px" }}>
        <div className="tk-mono" style={{ fontSize: 10, letterSpacing: "0.18em", color: "rgba(245,241,232,0.6)" }}>
          ARCHIVE NOTES · §00 — TAKOMARU SAYS
        </div>
        <div className="tk-mono" style={{ fontSize: 10, letterSpacing: "0.18em", color: "rgba(245,241,232,0.6)" }}>
          ※ HOVER TO PAUSE
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap", width: "max-content" }} className="ar-marquee-track">
        {loop.map((q, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 32, paddingRight: 64 }}>
            <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.16em", color: "rgba(245,241,232,0.5)" }}>
              {String((i % quotes.length) + 1).padStart(2, "0")}
            </span>
            <span style={{ fontFamily: "var(--jp-serif)", fontStyle: "italic", fontSize: 38, lineHeight: 1, fontWeight: 300 }}>
              " {q} "
            </span>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--wood)", flexShrink: 0 }}></span>
          </div>
        ))}
      </div>
      <div aria-hidden="true" style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(90deg, var(--sage-deep), transparent)", pointerEvents: "none" }}></div>
      <div aria-hidden="true" style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(270deg, var(--sage-deep), transparent)", pointerEvents: "none" }}></div>
    </div>
  );
}

// ── Tools ─────────────────────────────────────────────────────────────────
function ArTools() {
  const sectionRef = React.useRef(null);
  const visible = useReveal(sectionRef, 0.08);
  return (
    <div id="tools" className="tk-snap ar-section-pad" style={{ padding: "100px 64px 80px", borderBottom: "0.5px solid var(--ink)" }}>
      <div className="ar-2col-grid" style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 56, alignItems: "start" }}>
        <div className="ar-sticky-col" style={{ position: "sticky", top: 80 }}>
          <div className="tk-eye" style={{ color: "var(--sage-deep)" }}>§ 01</div>
          <h2 className="ar-section-h2" style={{ fontFamily: "var(--serif)", fontWeight: 300, fontStyle: "italic",
            fontSize: 80, lineHeight: 0.9, margin: "16px 0 0" }}>
            Tools
          </h2>
          <div style={{ fontFamily: "var(--jp-serif)", fontSize: 22, fontWeight: 400, marginTop: 8 }}>
            道具 / 工具
          </div>
          <div style={{ marginTop: 22, fontFamily: "var(--jp-serif)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.95 }}>
            すべてブラウザで動く、無料の小さなウェブアプリ。
            シングルページのアプリケーションとして、それぞれ独立した URL に置いてあります。
          </div>
          <div className="tk-mono" style={{ marginTop: 22, fontSize: 11, color: "var(--ink-soft)" }}>
            03 ITEMS · 順次追加
          </div>
        </div>

        <div ref={sectionRef}>
          {TOOLS.map((t, i) => (
            <div key={t.id} className={`ar-reveal d${Math.min(i+1,3)} ${visible ? 'in' : ''}`}>
              <ArToolRow t={t} i={i} />
            </div>
          ))}
          <div className={`ar-reveal d3 ${visible ? 'in' : ''}`} style={{
            marginTop: 24, padding: "32px 32px",
            border: "0.5px dashed var(--ink-soft)",
            display: "flex", justifyContent: "space-between", alignItems: "center"
          }}>
            <div>
              <div className="tk-eye">REQUEST · 04+</div>
              <div style={{ marginTop: 8, fontFamily: "var(--jp-serif)", fontSize: 16 }}>
                次に欲しい道具を、ぜひ教えてください。
              </div>
              <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 14, color: "var(--ink-soft)" }}>
                What should we build next?
              </div>
            </div>
            <a href="mailto:hello@takomaru.house" className="tk-mono" style={{ fontSize: 12,
              letterSpacing: "0.14em", color: "var(--ink)", textDecoration: "none",
              borderBottom: "0.5px solid var(--ink)", paddingBottom: 2 }}>
              SUGGEST →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArToolRow({ t, i }) {
  const href = t.url || "#";
  const linkProps = t.url ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a href={href} {...linkProps} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
      <div className="ar-tool-row ar-tool-row-grid" style={{
        display: "grid", gridTemplateColumns: "70px 1.4fr 1fr 240px 80px",
        gap: 24, alignItems: "start",
        padding: "32px 0",
        borderTop: i === 0 ? "1px solid var(--ink)" : "0.5px solid var(--rule)"
      }}>
        <div className="tk-page" style={{ fontSize: 32, color: "var(--sage-deep)" }}>{t.num}</div>
        <div className="ar-tool-col-title">
          <span className="tk-tag" style={{ borderColor: "var(--sage-deep)", color: "var(--sage-deep)" }}>{t.tag}</span>
          <h3 style={{ fontFamily: "var(--jp-serif)", fontSize: 28, fontWeight: 500,
            margin: "10px 0 4px", lineHeight: 1.25 }}>
            {t.jp}
          </h3>
          <div className="tk-serif" style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 18, color: "var(--ink-soft)" }}>
            {t.en}
          </div>
        </div>
        <div className="ar-tool-col-desc" style={{ fontFamily: "var(--jp-serif)", fontSize: 14, lineHeight: 1.85 }}>
          {t.desc}
        </div>
        <div className="ar-tool-thumb ar-tool-col-thumb" style={{ height: 100, border: "0.5px solid var(--ink)" }}>
          {t.icon === "plan" && <FloorPlan width={240} height={100} label="" showFurniture={false} />}
          {t.icon === "compare" &&
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, height: "100%", padding: 6, background: "var(--paper)" }}>
              <div className="tk-img" style={{ borderColor: "var(--ink)" }} />
              <div className="tk-img" style={{ background: `repeating-linear-gradient(135deg, rgba(179,90,58,0.12) 0 6px, rgba(0,0,0,0) 6px 14px), var(--paper)`, borderColor: "var(--rust)" }} />
            </div>
          }
          {t.icon === "pdfdiff" &&
            <svg viewBox="0 0 240 100" width="100%" height="100%" preserveAspectRatio="none" style={{ background: "var(--paper)", display: "block" }}>
              <g>
                <path d="M 14 12 L 92 12 L 104 24 L 104 88 L 14 88 Z" fill="var(--bg)" stroke="var(--ink)" strokeWidth="0.6" />
                <path d="M 92 12 L 92 24 L 104 24" fill="none" stroke="var(--ink)" strokeWidth="0.6" />
                <g fill="var(--ink-soft)">
                  <rect x="22" y="30" width="58" height="2.5" />
                  <rect x="22" y="38" width="50" height="2.5" />
                </g>
                <rect x="18" y="45" width="82" height="6" fill="var(--rust)" opacity="0.22" />
                <rect x="22" y="47" width="62" height="2.5" fill="var(--rust)" />
                <g fill="var(--ink-soft)">
                  <rect x="22" y="57" width="66" height="2.5" />
                  <rect x="22" y="65" width="46" height="2.5" />
                </g>
                <rect x="18" y="70" width="82" height="6" fill="var(--rust)" opacity="0.22" />
                <rect x="22" y="72" width="56" height="2.5" fill="var(--rust)" />
                <rect x="22" y="80" width="38" height="2.5" fill="var(--ink-soft)" />
              </g>
              <g>
                <path d="M 136 12 L 214 12 L 226 24 L 226 88 L 136 88 Z" fill="var(--bg)" stroke="var(--ink)" strokeWidth="0.6" />
                <path d="M 214 12 L 214 24 L 226 24" fill="none" stroke="var(--ink)" strokeWidth="0.6" />
                <g fill="var(--ink-soft)">
                  <rect x="144" y="30" width="58" height="2.5" />
                  <rect x="144" y="38" width="50" height="2.5" />
                </g>
                <rect x="140" y="45" width="82" height="6" fill="var(--sage-deep)" opacity="0.22" />
                <rect x="144" y="47" width="44" height="2.5" fill="var(--sage-deep)" />
                <g fill="var(--ink-soft)">
                  <rect x="144" y="57" width="66" height="2.5" />
                  <rect x="144" y="65" width="46" height="2.5" />
                </g>
                <rect x="140" y="70" width="82" height="6" fill="var(--sage-deep)" opacity="0.22" />
                <rect x="144" y="72" width="68" height="2.5" fill="var(--sage-deep)" />
                <rect x="144" y="80" width="38" height="2.5" fill="var(--ink-soft)" />
              </g>
              <g stroke="var(--ink)" strokeWidth="0.9" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <line x1="112" y1="50" x2="128" y2="50" />
                <polyline points="124,46 128,50 124,54" />
              </g>
              <g fontFamily="var(--font-mono, monospace)" fontSize="6" fill="var(--ink-soft)" textAnchor="middle">
                <text x="59" y="22">BEFORE</text>
                <text x="181" y="22">AFTER</text>
              </g>
            </svg>
          }
          {t.icon === "specs" &&
            <svg viewBox="0 0 240 100" width="100%" height="100%" preserveAspectRatio="none" style={{ background: "var(--paper)", display: "block" }}>
              <rect x="130" y="10" width="50" height="80" fill="var(--wood)" opacity="0.10" />
              <rect x="8" y="10" width="224" height="16" fill="var(--sage-deep)" opacity="0.14" />
              <g stroke="var(--ink)" strokeWidth="0.6" fill="none">
                <rect x="8" y="10" width="224" height="80" />
                <line x1="80" y1="10" x2="80" y2="90" />
                <line x1="130" y1="10" x2="130" y2="90" />
                <line x1="180" y1="10" x2="180" y2="90" />
                <line x1="8" y1="26" x2="232" y2="26" />
                <line x1="8" y1="42" x2="232" y2="42" />
                <line x1="8" y1="58" x2="232" y2="58" />
                <line x1="8" y1="74" x2="232" y2="74" />
              </g>
              <g fill="var(--ink-soft)">
                <rect x="14" y="16" width="30" height="3" />
                <rect x="93" y="16" width="24" height="3" />
                <rect x="143" y="16" width="24" height="3" />
                <rect x="193" y="16" width="24" height="3" />
                <rect x="14" y="32" width="42" height="3" />
                <rect x="14" y="48" width="52" height="3" />
                <rect x="14" y="64" width="38" height="3" />
                <rect x="14" y="80" width="48" height="3" />
              </g>
              <g stroke="var(--sage-deep)" strokeWidth="1.4" fill="none">
                <circle cx="105" cy="34" r="4" />
                <circle cx="155" cy="50" r="4" />
                <circle cx="105" cy="66" r="4" />
                <circle cx="205" cy="34" r="4" />
                <circle cx="205" cy="82" r="4" />
                <circle cx="155" cy="66" r="4" />
              </g>
              <g stroke="var(--rust)" strokeWidth="1.4" strokeLinecap="round">
                <line x1="151" y1="30" x2="159" y2="38" />
                <line x1="159" y1="30" x2="151" y2="38" />
                <line x1="101" y1="78" x2="109" y2="86" />
                <line x1="109" y1="78" x2="101" y2="86" />
                <line x1="201" y1="62" x2="209" y2="70" />
                <line x1="209" y1="62" x2="201" y2="70" />
              </g>
            </svg>
          }
          {t.icon === "land" &&
            <svg viewBox="0 0 240 100" width="100%" height="100%" style={{ background: "var(--paper)" }}>
              <g stroke="var(--ink)" strokeWidth="1" fill="none">
                <polygon points="20,80 50,30 100,40 110,80" fill="var(--bg)" />
                <polygon points="130,80 140,40 200,30 220,80" fill="var(--bg)" />
                <line x1="0" y1="90" x2="240" y2="90" strokeDasharray="3 3" />
              </g>
            </svg>
          }
        </div>
        <div style={{ textAlign: "right" }}>
          <div className="tk-mono ar-tool-status" style={{ fontSize: 10, letterSpacing: "0.12em",
            color: t.status.includes("LIVE") ? "var(--sage-deep)" : "var(--ink-soft)" }}>
            ●&nbsp;{t.status.split(" / ")[1]}
          </div>
          <div className="tk-mono" style={{ marginTop: 18, fontSize: 12 }}>
            OPEN&nbsp;<span className="ar-tool-arrow">↗</span>
          </div>
        </div>
      </div>
    </a>
  );
}

// ── Videos ────────────────────────────────────────────────────────────────
function ArVideos() {
  const sectionRef = React.useRef(null);
  const visible = useReveal(sectionRef, 0.06);
  return (
    <div id="films" className="tk-snap ar-section-pad" style={{ padding: "100px 64px 80px", borderBottom: "0.5px solid var(--ink)", background: "#efeadc" }}>
      <div className="ar-2col-grid" style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 56, alignItems: "start" }}>
        <div className="ar-sticky-col" style={{ position: "sticky", top: 80 }}>
          <div className="tk-eye" style={{ color: "var(--sage-deep)" }}>§ 02</div>
          <h2 className="ar-section-h2" style={{ fontFamily: "var(--serif)", fontWeight: 300, fontStyle: "italic",
            fontSize: 80, lineHeight: 0.9, margin: "16px 0 0" }}>
            Films
          </h2>
          <div style={{ fontFamily: "var(--jp-serif)", fontSize: 22, fontWeight: 400, marginTop: 8 }}>
            映像 / 動画
          </div>
          <div style={{ marginTop: 22, fontFamily: "var(--jp-serif)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.95 }}>
            YouTube に毎週 1 本ずつ。3 つのシリーズに分けて並べています。
          </div>
          <Takomaru size={96} style={{ marginTop: 28, transform: "rotate(6deg)" }} />
        </div>

        <div ref={sectionRef}>
          {VIDEO_CATEGORIES.map((cat, ci) => (
            <div key={cat.id} className={`ar-reveal d${Math.min(ci+1,3)} ${visible ? 'in' : ''}`}
                 style={{ marginBottom: ci < VIDEO_CATEGORIES.length - 1 ? 56 : 0 }}>
              <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 16,
                alignItems: "baseline", paddingBottom: 12, borderBottom: "1px solid var(--ink)" }}>
                <div className="tk-page" style={{ fontSize: 22, color: "var(--sage-deep)" }}>
                  S/{String(ci + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--jp-serif)", fontSize: 26, fontWeight: 500,
                    margin: 0, lineHeight: 1.2 }}>{cat.jp}</h3>
                  <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 16, color: "var(--ink-soft)" }}>
                    {cat.en} — {cat.sub}
                  </div>
                </div>
                <a href="#" className="tk-mono" style={{ fontSize: 11, letterSpacing: "0.14em",
                  color: "var(--ink)", textDecoration: "none" }}>ALL →</a>
              </div>
              <div>
                {cat.videos.map((v, vi) => (
                  <a key={vi} href="#" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                    <div className="ar-video-row ar-video-row-grid" style={{
                      display: "grid", gridTemplateColumns: "60px 80px 1fr 1fr 80px",
                      gap: 18, alignItems: "center",
                      padding: "16px 0",
                      borderBottom: "0.5px solid var(--rule)"
                    }}>
                      <span className="tk-mono ar-video-col-num" style={{ fontSize: 11, color: "var(--ink-soft)" }}>{v.num}</span>
                      <div className="ar-video-thumb" style={{ width: 80, height: 50, border: "0.5px solid var(--ink)", background: "var(--paper)", position: "relative" }}>
                        {ci === 0 && <FloorPlan width={80} height={50} label="" showFurniture={false} />}
                        {ci === 1 && <Elevation width={80} height={50} label="" />}
                        {ci === 2 &&
                          <svg viewBox="0 0 80 50" width="100%" height="100%">
                            <g stroke="var(--ink)" strokeWidth="0.8" fill="none">
                              <polygon points="6,42 16,12 64,12 74,42" fill="var(--bg)" />
                              <polygon points="32,42 32,24 48,24 48,42" fill="var(--wood)" fillOpacity="0.4" />
                            </g>
                          </svg>
                        }
                        <div className="ar-play-icon" style={{
                          position: "absolute", inset: 0, display: "flex",
                          alignItems: "center", justifyContent: "center",
                          background: "rgba(26,24,22,0.52)"
                        }}>
                          <svg viewBox="0 0 20 20" width="18" height="18">
                            <polygon points="6,4 16,10 6,16" fill="#f5f1e8" />
                          </svg>
                        </div>
                      </div>
                      <div className="ar-video-title" style={{ fontFamily: "var(--jp-serif)", fontSize: 17, lineHeight: 1.4 }}>{v.jp}</div>
                      <div className="ar-video-col-cat" style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 14, color: "var(--ink-soft)" }}>
                        {cat.en}
                      </div>
                      <div className="tk-mono" style={{ fontSize: 11, color: "var(--ink-soft)", textAlign: "right" }}>▶ {v.min}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── About ─────────────────────────────────────────────────────────────────
function ArAbout() {
  const statsRef = React.useRef(null);
  const visible = useReveal(statsRef, 0.15);
  return (
    <div id="about" className="tk-snap ar-section-pad" style={{ padding: "100px 64px 80px", borderBottom: "0.5px solid var(--ink)", position: "relative", overflow: "hidden" }}>
      {/* Background watermark */}
      <div aria-hidden="true" style={{
        position: "absolute", right: -50, top: "50%",
        transform: "translateY(-50%)",
        opacity: 0.07, pointerEvents: "none"
      }}>
        <TakoTsubo width={440} height={594} />
      </div>

      <div className="ar-2col-grid" style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 56, alignItems: "start" }}>
        <div>
          <div className="tk-eye" style={{ color: "var(--sage-deep)" }}>§ 03</div>
          <h2 className="ar-section-h2" style={{ fontFamily: "var(--serif)", fontWeight: 300, fontStyle: "italic",
            fontSize: 80, lineHeight: 0.9, margin: "16px 0 0" }}>
            About
          </h2>
          <div style={{ fontFamily: "var(--jp-serif)", fontSize: 22, fontWeight: 400, marginTop: 8 }}>
            タコまるって誰？
          </div>
        </div>
        <div>
          <div className="ar-about-textgrid" style={{ display: "grid", gridTemplateColumns: "1fr 240px", gap: 32, alignItems: "start" }}>
            <p className="tk-dropcap" style={{
              fontFamily: "var(--jp-serif)", fontSize: 17, lineHeight: 2.1,
              textAlign: "justify", margin: 0
            }}>メガネをかけた、たこやきのような何か。家づくりを始めました。
施主目線で注文住宅の話題を扱っています。 YouTube に動画を投稿し、合間に自分が欲しかった 小道具を作って並べています。 この場所はその店先のようなもので、商品はぜんぶ無料、 コーヒーもないけれど、よかったら少しだけ見ていってください。
            </p>
            <div className="ar-about-char" style={{ display: "flex", flexDirection: "column" }}>
              <Takomaru size={220} />
              <div className="tk-mono" style={{ marginTop: 6, fontSize: 10,
                letterSpacing: "0.14em", color: "var(--ink-soft)", textAlign: "center" }}>
                FIG.&nbsp;01 · TAKOMARU, c. 2026
              </div>
            </div>
          </div>

          <div ref={statsRef} className="ar-stats-grid" style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
            borderTop: "1px solid var(--ink)", borderBottom: "1px solid var(--ink)" }}>
            {[
              { n: "2025",   l: "始まり" },
              { n: "3",      l: "本の動画" },
              { n: "0.01k",  l: "登録者" },
              { n: "03 / ∞", l: "公開中の道具" }
            ].map((s, i) => (
              <div key={i} className={`ar-stat ar-reveal d${Math.min(i+1,3)} ${visible ? 'in' : ''}`}
                   style={{ padding: "24px 0", borderRight: i < 3 ? "0.5px solid var(--rule)" : "none",
                            paddingRight: 16, paddingLeft: i > 0 ? 16 : 0 }}>
                <div className="ar-stat-n" style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: 48, lineHeight: 1, color: "var(--sage-deep)" }}>{s.n}</div>
                <div className="tk-eye" style={{ marginTop: 6, fontSize: 9 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Contact ───────────────────────────────────────────────────────────────
function ArContact() {
  return (
    <div className="tk-snap ar-contact-outer" style={{ padding: "100px 64px 64px", background: "var(--ink)", color: "#f5f1e8", position: "relative", overflow: "hidden" }}>
      {/* Decorative tsubo on dark background */}
      <div aria-hidden="true" style={{
        position: "absolute", left: 32, bottom: -30,
        opacity: 0.18, pointerEvents: "none"
      }}>
        <TakoTsubo width={200} height={270} light={true} />
      </div>

      <div className="ar-2col-grid" style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 56, alignItems: "start" }}>
        <div>
          <div className="tk-eye" style={{ color: "var(--wood)" }}>§ 04</div>
          <h2 className="ar-section-h2" style={{ fontFamily: "var(--serif)", fontWeight: 300, fontStyle: "italic",
            fontSize: 80, lineHeight: 0.9, margin: "16px 0 0", color: "#f5f1e8" }}>
            Contact
          </h2>
          <div style={{ fontFamily: "var(--jp-serif)", fontSize: 22, fontWeight: 400, marginTop: 8 }}>
            連絡先 / SNS
          </div>
        </div>
        <div>
          <div className="ar-contact-cols" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <div className="tk-eye" style={{ color: "var(--wood)" }}>EMAIL</div>
              <a href="mailto:hello@takomaru.house" className="ar-email-link"
                style={{ display: "block", marginTop: 12,
                  fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 44,
                  color: "#f5f1e8", textDecoration: "underline", textUnderlineOffset: 6,
                  letterSpacing: "-0.01em" }}>
                hello@takomaru.house
              </a>
              <div style={{ marginTop: 18, fontFamily: "var(--jp-serif)", fontSize: 14, lineHeight: 2,
                color: "rgba(245,241,232,0.8)", maxWidth: 460 }}>取材・出演・コラボ・道具のリクエストはお気軽に。
返信は2〜3営業日のうちに。
              </div>
            </div>
            <div>
              <div className="tk-eye" style={{ color: "var(--wood)" }}>ELSEWHERE</div>
              <div style={{ marginTop: 12 }}>
                {[
                  { en: "YOUTUBE",   handle: "@takomaru_house" },
                  { en: "X",         handle: "@takomaru_house" },
                  { en: "INSTAGRAM", handle: "@takomaru.house" },
                  { en: "NOTE",      handle: "/takomaru" }
                ].map((s, i) => (
                  <a key={i} href="#" style={{ textDecoration: "none", color: "inherit" }}>
                    <div className="ar-social-row" style={{ display: "grid", gridTemplateColumns: "100px 1fr 24px",
                      alignItems: "baseline", padding: "14px 0",
                      borderTop: "0.5px solid rgba(245,241,232,0.3)" }}>
                      <div className="tk-eye" style={{ color: "var(--wood)" }}>{s.en}</div>
                      <div className="tk-mono" style={{ fontSize: 14, color: "#f5f1e8" }}>{s.handle}</div>
                      <div className="tk-mono ar-social-arr" style={{ color: "rgba(245,241,232,0.6)", textAlign: "right" }}>↗</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginTop: 56, paddingTop: 24, borderTop: "0.5px solid rgba(245,241,232,0.3)",
            display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="tk-mono" style={{ fontSize: 11, letterSpacing: "0.14em", color: "rgba(245,241,232,0.5)" }}>
              © 2026 TAKOMARU · ARCHIVE · KYOTO
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <Takomaru size={48} />
              <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 16, color: "rgba(245,241,232,0.7)" }}>
                — fin. —
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.ArtboardArchive = ArtboardArchive;
