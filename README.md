# Playground

各種ツール・ライブラリ・技術をサンドボックス環境で試すためのリポジトリです。

ルートディレクトリ直下に技術ごとのディレクトリを作成し、それぞれ独立した環境でお試し実装を行っています。

## ディレクトリ構成

```
playground/
├── threejs/   # Three.js × Vite による 3D 描画の練習環境
└── testJs/    # バニラ JavaScript の動作確認用スニペット
```

## 各ディレクトリの概要

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

### `testJs/`
バニラ JavaScript の動作確認・スニペット置き場です。現在は電卓 UI のサンプルが入っています。

| 項目 | 内容 |
| :--- | :--- |
| **技術** | HTML / CSS / Vanilla JS |
| **依存関係** | なし（npm 不要） |
| **主な内容** | 電卓 UI（四則演算） |

**起動方法**
```bash
# ブラウザで index.html を直接開く
open testJs/index.html

# または任意のローカルサーバ経由で確認
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
