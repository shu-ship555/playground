# Playground

各種ツール・ライブラリ・技術をサンドボックス環境で試すためのリポジトリです。

ルートディレクトリ直下に技術ごとのディレクトリを作成し、それぞれ独立した環境でお試し実装を行っています。

## ディレクトリ構成

```
playground/
├── react/                          # React × Vite × TypeScript の学習環境
├── nextjs/                         # Next.js App Router × TypeScript の学習環境
├── typescript-learn/               # TypeScript (Vanilla) × Vite の学習環境
├── threejs/                        # Three.js × Vite による 3D 描画の練習環境
├── astro/                          # Astro フレームワークの学習環境
├── wp/                             # WordPress × Docker のローカル開発環境
├── localStrage/                    # localStorage を使ったフォーム実装のサンプル
└── preventDefault_stopPropagation/ # イベント伝播・デフォルト動作制御のサンプル
```

## 各ディレクトリの概要

### `react/`
React の基礎を Vite + TypeScript 環境で学ぶためのサンドボックスです。

| 項目 | 内容 |
| :--- | :--- |
| **Framework** | React v19 |
| **Bundler** | Vite v6 |
| **言語** | TypeScript |
| **主な内容** | コンポーネント、useState、useEffect、Props など基礎構文の練習 |

**セットアップ**
```bash
cd react
npm install
npm run dev
```

---

### `nextjs/`
Next.js App Router の仕組みを TypeScript で学ぶためのサンドボックスです。

| 項目 | 内容 |
| :--- | :--- |
| **Framework** | Next.js v16（App Router） |
| **言語** | TypeScript |
| **主な内容** | ページルーティング、Server / Client Components、データフェッチ、レイアウト構造 |

**セットアップ**
```bash
cd nextjs
npm install
npm run dev
```

---

### `typescript-learn/`
TypeScript の型システムや構文を Vite 環境で手を動かしながら学ぶためのサンドボックスです。

| 項目 | 内容 |
| :--- | :--- |
| **Bundler** | Vite v6 |
| **言語** | TypeScript (Vanilla) |
| **主な内容** | 型注釈、インターフェース、ジェネリクス、型ガード、ユーティリティ型などの練習 |

**セットアップ**
```bash
cd typescript-learn
npm install
npm run dev
```

---

### `threejs/`
Three.js を Vite + npm 管理下で動かすための練習環境です。

| 項目 | 内容 |
| :--- | :--- |
| **Framework** | [Three.js](https://threejs.org/) v0.180 |
| **Bundler** | Vite v7 |
| **主な内容** | WebGL レンダラー、PerspectiveCamera、OrbitControls、アニメーションループ |

**セットアップ**
```bash
cd threejs
npm install
npm run dev
```

---

### `astro/`
[Astro](https://astro.build/) フレームワークの Minimal テンプレートを使った学習環境です。

| 項目 | 内容 |
| :--- | :--- |
| **Framework** | Astro |
| **言語** | TypeScript |
| **主な内容** | 静的サイト生成、コンポーネント構造の学習 |

**セットアップ**
```bash
cd astro
npm install
npm run dev
```

---

### `wp/`
WordPress を Docker Compose で動かすローカル開発環境です。

| 項目 | 内容 |
| :--- | :--- |
| **技術** | WordPress / Docker Compose |
| **主な内容** | WordPress テーマ・プラグイン開発のローカル環境 |

**起動方法**
```bash
cd wp
npm start      # docker compose up -d
npm stop       # docker compose down
npm run logs   # ログ確認
```

---

### `localStrage/`
`localStorage` を活用したフォーム実装のサンプルです。入力値の一時保存や復元などを確認できます。

| 項目 | 内容 |
| :--- | :--- |
| **技術** | HTML / CSS / Vanilla JS |
| **依存関係** | なし（npm 不要） |
| **主な内容** | お問い合わせフォーム × localStorage による入力値の保存 |

**起動方法**
```bash
open localStrage/index.html
```

---

### `preventDefault_stopPropagation/`
`event.preventDefault()` と `event.stopPropagation()` の動作を確認するためのサンプルです。

| 項目 | 内容 |
| :--- | :--- |
| **技術** | HTML / CSS / Vanilla JS |
| **依存関係** | なし（npm 不要） |
| **主な内容** | イベントのデフォルト動作キャンセルとイベント伝播停止の比較 |

**起動方法**
```bash
open preventDefault_stopPropagation/index.html
```

---

## 新しい環境を追加する場合

```bash
# ルートに新しいディレクトリを作成して環境を構築する
mkdir <tool-name>
cd <tool-name>
# 必要に応じて npm init / フレームワーク導入など
```

## Contact

ご連絡・お問い合わせは下記までお願いします。Git に関するものは Issue に残していただいても大丈夫です。

https://adhesive-form-ca1.notion.site/134c792be686808c8bb0e4342fe0625d
