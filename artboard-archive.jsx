// artboard-archive.jsx — Variant C: Minimalist Archive / Index
// Catalog-like, mostly type, dense list of contents, almost like a book index.
// Sage accent, generous negative space, character used sparingly.
// ----------------------------------------------------------------------------

function ArtboardArchive() {
  return (
    <div className="tk-art" style={{ paddingBottom: 80, background: "#f5f1e8" }}>
      <style>{`
        html { scroll-snap-type: y proximity; scroll-behavior: smooth; }
        .tk-art > .tk-snap { scroll-snap-align: start; scroll-snap-stop: always; }
      `}</style>
      <ArHeader />
      <ArHero />
      <ArManifesto />
      <ArTools />
      <ArVideos />
      <ArAbout />
      <ArContact />
    </div>);

}

function ArHeader() {
  return (
    <div style={{
      padding: "20px 64px", borderBottom: "0.5px solid var(--ink)",
      display: "grid", gridTemplateColumns: "1fr 1fr 1fr", alignItems: "center"
    }}>
      <div className="tk-mono" style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--ink-soft)" }}>
        TAKOMARU&nbsp;·&nbsp;ARCHIVE
      </div>
      <div style={{ textAlign: "center", fontFamily: "var(--serif)", fontSize: 18, fontStyle: "italic", color: "var(--ink-soft)" }}>
        an index of houses, films, and tools
      </div>
      <div className="tk-mono" style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--ink-soft)", textAlign: "right" }}>
        2026.03 · KYOTO · JP/EN
      </div>
    </div>);

}

// ── Hero ───────────────────────────────────────────────────────────────────
function ArHero() {
  return (
    <div className="tk-snap" style={{ borderBottom: "0.5px solid var(--ink)", position: "relative", padding: "80px 64px", overflow: "hidden" }}>
      {/* Bookshelf background */}
      <div aria-hidden="true" style={{
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
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "end", gap: 48 }}>
        <div>
          <h1 style={{
              fontFamily: "var(--serif)", fontWeight: 300, fontStyle: "italic",
              lineHeight: 0.86, letterSpacing: "-0.03em",
              color: "var(--ink)", fontSize: "120px", margin: "0px"
            }}>
            Takomaru,<br />
            <span style={{ fontStyle: "normal", fontFamily: "var(--jp-serif)", fontWeight: 300,
                fontSize: 180, color: "var(--sage-deep)" }}>たこまる</span>
          </h1>
        </div>
        <div style={{ textAlign: "right", marginBottom: 24 }}>
          <Takomaru size={140} rot={-4} />
        </div>
      </div>

      <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "320px 1fr 320px", gap: 56,
          alignItems: "start", borderTop: "0.5px solid var(--ink)", paddingTop: 32 }}>
        <div className="tk-eye">A QUIET ARCHIVE OF<br />HOUSING, IN THREE PARTS.</div>
        <div style={{ fontFamily: "var(--jp-serif)", fontSize: 17, lineHeight: 2.05, textAlign: "justify", width: "750px" }}>このサイトは、住宅を考えるための小さな書庫です。<br />
注文住宅について、タコまるが 動画と道具で残してきたものを整理していますa。<br />
ご自由にご覧下さい。


          </div>
        <div style={{ textAlign: "right" }}>
          <div className="tk-eye" style={{ display: "inline-block", textAlign: "left", fontSize: 11 }}>
            3 SECTIONS · 142 FILMS<br />3 TOOLS · ∞ NOTES
          </div>
        </div>
      </div>

      <div style={{ marginTop: 40, display: "flex", gap: 16, justifyContent: "center" }}>
        <a href="#tools" style={{ padding: "16px 28px", border: "0.5px solid var(--ink)", color: "var(--ink)",
            fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase",
            textDecoration: "none", background: "var(--ink)", color: "#f5f1e8" }}>
          道具へ — TOOLS
        </a>
        <a href="#films" style={{ padding: "16px 28px", border: "0.5px solid var(--ink)", color: "var(--ink)",
            fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase",
            textDecoration: "none" }}>
          映像へ — FILMS
        </a>
        <a href="#about" style={{ padding: "16px 28px", border: "0.5px solid var(--ink)", color: "var(--ink)",
            fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase",
            textDecoration: "none" }}>
          タコまる — ABOUT
        </a>
      </div>
      </div>
    </div>);

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
      <style>{`
        @keyframes ar-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ar-marquee-track { animation: ar-marquee 60s linear infinite; will-change: transform; }
        .ar-marquee-track:hover { animation-play-state: paused; }
      `}</style>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 64px 28px" }}>
        <div className="tk-mono" style={{ fontSize: 10, letterSpacing: "0.18em", color: "rgba(245,241,232,0.6)" }}>
          ARCHIVE NOTES · §00 — TAKOMARU SAYS
        </div>
        <div className="tk-mono" style={{ fontSize: 10, letterSpacing: "0.18em", color: "rgba(245,241,232,0.6)" }}>
          ※ HOVER TO PAUSE
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap" }} className="ar-marquee-track">
        {loop.map((q, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 32, paddingRight: 64 }}>
            <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.16em", color: "rgba(245,241,232,0.5)" }}>
              {String((i % quotes.length) + 1).padStart(2, "0")}
            </span>
            <span style={{ fontFamily: "var(--jp-serif)", fontStyle: "italic", fontSize: 38, lineHeight: 1, fontWeight: 300 }}>
              “ {q} ”
            </span>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--wood)", flexShrink: 0 }}></span>
          </div>
        ))}
      </div>
      <div aria-hidden="true" style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(90deg, var(--sage-deep), transparent)", pointerEvents: "none" }}></div>
      <div aria-hidden="true" style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(270deg, var(--sage-deep), transparent)", pointerEvents: "none" }}></div>
    </div>);

}

// ── Tools — index style ────────────────────────────────────────────────────
function ArTools() {
  return (
    <div id="tools" className="tk-snap" style={{ padding: "100px 64px 80px", borderBottom: "0.5px solid var(--ink)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 56, alignItems: "start" }}>
        <div style={{ position: "sticky", top: 24 }}>
          <div className="tk-eye" style={{ color: "var(--sage-deep)" }}>§ 01</div>
          <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontStyle: "italic",
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

        <div>
          {TOOLS.map((t, i) => <ArToolRow key={t.id} t={t} i={i} />)}
          <div style={{
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
    </div>);

}

function ArToolRow({ t, i }) {
  return (
    <a href="#" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
      <div style={{
        display: "grid", gridTemplateColumns: "70px 1.4fr 1fr 240px 80px",
        gap: 24, alignItems: "start",
        padding: "32px 0",
        borderTop: i === 0 ? "1px solid var(--ink)" : "0.5px solid var(--rule)"
      }}>
        <div className="tk-page" style={{ fontSize: 32, color: "var(--sage-deep)" }}>{t.num}</div>
        <div>
          <span className="tk-tag" style={{ borderColor: "var(--sage-deep)", color: "var(--sage-deep)" }}>{t.tag}</span>
          <h3 style={{ fontFamily: "var(--jp-serif)", fontSize: 28, fontWeight: 500,
            margin: "10px 0 4px", lineHeight: 1.25 }}>
            {t.jp}
          </h3>
          <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 18, color: "var(--ink-soft)" }}>
            {t.en}
          </div>
        </div>
        <div style={{ fontFamily: "var(--jp-serif)", fontSize: 14, lineHeight: 1.85 }}>
          {t.desc}
        </div>
        <div style={{ height: 100, border: "0.5px solid var(--ink)" }}>
          {t.icon === "plan" && <FloorPlan width={240} height={100} label="" showFurniture={false} />}
          {t.icon === "compare" &&
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, height: "100%", padding: 6, background: "var(--paper)" }}>
              <div className="tk-img" style={{ borderColor: "var(--ink)" }} />
              <div className="tk-img" style={{ background: `repeating-linear-gradient(135deg, rgba(179,90,58,0.12) 0 6px, rgba(0,0,0,0) 6px 14px), var(--paper)`, borderColor: "var(--rust)" }} />
            </div>
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
          <div className="tk-mono" style={{ fontSize: 10, letterSpacing: "0.12em",
            color: t.status.includes("LIVE") ? "var(--sage-deep)" : "var(--ink-soft)" }}>
            ●&nbsp;{t.status.split(" / ")[1]}
          </div>
          <div className="tk-mono" style={{ marginTop: 18, fontSize: 12 }}>OPEN ↗</div>
        </div>
      </div>
    </a>);

}

// ── Videos — index ─────────────────────────────────────────────────────────
function ArVideos() {
  const allVideos = [].concat(...VIDEO_CATEGORIES.map((c) => c.videos.map((v) => ({ ...v, cat: c }))));
  return (
    <div id="films" className="tk-snap" style={{ padding: "100px 64px 80px", borderBottom: "0.5px solid var(--ink)", background: "#efeadc" }}>
      <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 56, alignItems: "start" }}>
        <div>
          <div className="tk-eye" style={{ color: "var(--sage-deep)" }}>§ 02</div>
          <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontStyle: "italic",
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

        <div>
          {VIDEO_CATEGORIES.map((cat, ci) =>
          <div key={cat.id} style={{ marginBottom: ci < VIDEO_CATEGORIES.length - 1 ? 56 : 0 }}>
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
                {cat.videos.map((v, vi) =>
              <a key={vi} href="#" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "60px 80px 1fr 1fr 80px",
                  gap: 18, alignItems: "center",
                  padding: "16px 0",
                  borderBottom: "0.5px solid var(--rule)"
                }}>
                      <span className="tk-mono" style={{ fontSize: 11, color: "var(--ink-soft)" }}>{v.num}</span>
                      <div style={{ width: 80, height: 50, border: "0.5px solid var(--ink)", overflow: "hidden", background: "var(--paper)" }}>
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
                      </div>
                      <div style={{ fontFamily: "var(--jp-serif)", fontSize: 17, lineHeight: 1.4 }}>{v.jp}</div>
                      <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 14, color: "var(--ink-soft)" }}>
                        {cat.en}
                      </div>
                      <div className="tk-mono" style={{ fontSize: 11, color: "var(--ink-soft)", textAlign: "right" }}>▶ {v.min}</div>
                    </div>
                  </a>
              )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>);

}

// ── About ──────────────────────────────────────────────────────────────────
function ArAbout() {
  return (
    <div id="about" className="tk-snap" style={{ padding: "100px 64px 80px", borderBottom: "0.5px solid var(--ink)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 56, alignItems: "start" }}>
        <div>
          <div className="tk-eye" style={{ color: "var(--sage-deep)" }}>§ 03</div>
          <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontStyle: "italic",
            fontSize: 80, lineHeight: 0.9, margin: "16px 0 0" }}>
            About
          </h2>
          <div style={{ fontFamily: "var(--jp-serif)", fontSize: 22, fontWeight: 400, marginTop: 8 }}>
            タコまるって誰？
          </div>
        </div>
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 240px", gap: 32, alignItems: "start" }}>
            <p className="tk-dropcap" style={{
              fontFamily: "var(--jp-serif)", fontSize: 17, lineHeight: 2.1,
              textAlign: "justify", margin: 0
            }}>メガネをかけた、たこやきのような何か。家づくりを始めました。
施主目線で注文住宅の話題を扱っています。 YouTube に動画を投稿し、合間に自分が欲しかった 小道具を作って並べています。 この場所はその店先のようなもので、商品はぜんぶ無料、 コーヒーもないけれど、よかったら少しだけ見ていってください。






            </p>
            <div>
              <Takomaru size={220} />
              <div className="tk-mono" style={{ marginTop: 6, fontSize: 10,
                letterSpacing: "0.14em", color: "var(--ink-soft)", textAlign: "center" }}>
                FIG.&nbsp;01 · TAKOMARU, c. 2026
              </div>
            </div>
          </div>

          <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
            borderTop: "1px solid var(--ink)", borderBottom: "1px solid var(--ink)" }}>
            {[
            { n: "2025", l: "始まり" },
            { n: "3", l: "本の動画" },
            { n: "0.01k", l: "登録者" },
            { n: "03 / ∞", l: "公開中の道具" }].
            map((s, i) =>
            <div key={i} style={{ padding: "24px 0", borderRight: i < 3 ? "0.5px solid var(--rule)" : "none", paddingRight: 16, paddingLeft: i > 0 ? 16 : 0 }}>
                <div style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: 48, lineHeight: 1, color: "var(--sage-deep)" }}>{s.n}</div>
                <div className="tk-eye" style={{ marginTop: 6, fontSize: 9 }}>{s.l}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>);

}

// ── Contact ────────────────────────────────────────────────────────────────
function ArContact() {
  return (
    <div className="tk-snap" style={{ padding: "100px 64px 64px", background: "var(--ink)", color: "#f5f1e8" }}>
      <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 56, alignItems: "start" }}>
        <div>
          <div className="tk-eye" style={{ color: "var(--wood)" }}>§ 04</div>
          <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontStyle: "italic",
            fontSize: 80, lineHeight: 0.9, margin: "16px 0 0", color: "#f5f1e8" }}>
            Contact
          </h2>
          <div style={{ fontFamily: "var(--jp-serif)", fontSize: 22, fontWeight: 400, marginTop: 8 }}>
            連絡先 / SNS
          </div>
        </div>
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <div className="tk-eye" style={{ color: "var(--wood)" }}>EMAIL</div>
              <a href="mailto:hello@takomaru.house"
              style={{ display: "block", marginTop: 12,
                fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 44,
                color: "#f5f1e8", textDecoration: "underline", textUnderlineOffset: 6 }}>
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
                { en: "YOUTUBE", handle: "@takomaru_house" },
                { en: "X", handle: "@takomaru_house" },
                { en: "INSTAGRAM", handle: "@takomaru.house" },
                { en: "NOTE", handle: "/takomaru" }].
                map((s, i) =>
                <a key={i} href="#" style={{ textDecoration: "none", color: "inherit" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "100px 1fr 24px",
                    alignItems: "baseline", padding: "14px 0",
                    borderTop: "0.5px solid rgba(245,241,232,0.3)" }}>
                      <div className="tk-eye" style={{ color: "var(--wood)" }}>{s.en}</div>
                      <div className="tk-mono" style={{ fontSize: 14, color: "#f5f1e8" }}>{s.handle}</div>
                      <div className="tk-mono" style={{ color: "rgba(245,241,232,0.6)", textAlign: "right" }}>↗</div>
                    </div>
                  </a>
                )}
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
    </div>);

}

window.ArtboardArchive = ArtboardArchive;