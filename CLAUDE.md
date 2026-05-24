# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

タコマルHP（Takomaru HP）は、住宅設計のアーカイブ・教育プラットフォームのホームページです。React + JSX で書かれたコンポーネントが、カスタムバンドラーにより単一の `index.html` に埋め込まれて配布されます。

## Build System

**ビルドツールは `index.html` 内に内蔵されたカスタムバンドラーを使用しています。**

- `index.html`（約20MB）がプロジェクト全体の成果物
- JSXファイルをbase64エンコードしてHTML内のmanifestスクリプトに埋め込む形式
- ページロード時にBabelがJSXをブラウザ上でトランスパイルする
- `npm run build` のような標準的なビルドコマンドは存在しない

### JSXを編集してindex.htmlに反映する手順

1. JSXファイル（`app.jsx`, `artboard-archive.jsx`等）を編集
2. `index.html` 内の該当するmanifestエントリを更新する
   - `<script type="__bundler/manifest">` 内のJSON
   - 対象ファイルのbase64エンコードされた`data`フィールドを置き換える
3. ブラウザでindex.htmlを直接開いて確認

### 開発フロー（推奨）

JSXを直接開発するための簡易サーバーを立てる場合：
```powershell
# Python（インストール済みの場合）
python -m http.server 8080

# Node.js（インストール済みの場合）
npx serve .
```
ブラウザで `http://localhost:8080` を開く。

## Architecture

```
index.html          # 全コンポーネントをbase64埋め込みした成果物（配布用）
app.jsx             # アプリルート。テーマ変数とTweaksPanelを統合
design-canvas.jsx   # Figmaライクなパン/ズームビューポート。アートボード管理
artboard-archive.jsx # ランディングページ本体（ヒーロー、ツール紹介、動画カタログ）
tweaks-panel.jsx    # 右下固定のデザイン調整パネル（カラー/フォント/スケール）
shared.jsx          # SVGコンポーネント群（FloorPlan, Elevation等）＋定数データ
styles.css          # CSSカスタムプロパティ（デザイントークン）＋ユーティリティクラス
```

### データフロー

- `App` が `TWEAK_DEFAULTS`（パレット・フォント・キャラスケール）をstateで管理
- `TweaksPanel` がUIを描画し、変更を `onTweak` コールバックで `App` に返す
- `App` がCSSカスタムプロパティ（`--bg`, `--ink`, `--wood`等）をdocument.rootに動的適用
- アートボード配置は `.design-canvas.state.json` に永続化

### デザイントークン（styles.css）

カラーパレットはCSSカスタムプロパティで管理：
- `--bg`, `--paper`：背景系
- `--ink`, `--ink-soft`：文字色
- `--wood`, `--wood-deep`：アクセント（暖色）
- `--sage`, `--sage-deep`：アクセント（緑系）
- `--rust`：強調色
- `--rule`：罫線・区切り

フォントファミリー：
- `--font-serif`: Cormorant Garamond + Noto Serif JP
- `--font-jp-serif`: Noto Serif JP
- `--font-sans`: Noto Sans JP + system-ui
- `--font-mono`: JetBrains Mono

## Deployment

GitHub Pages（Public リポジトリ）で公開する場合、`index.html` をリポジトリルートに置くだけで配信可能。
