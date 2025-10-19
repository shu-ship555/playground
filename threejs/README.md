
three.js 練習用サンプル (npm + Vite)

このフォルダは three.js の最小サンプルです。現在は npm 管理下にあり、Vite を使って開発サーバで動かせます。


セットアップと起動 (`threejs` フォルダ内で実行):

```bash
# threejs ディレクトリに移動
cd threejs

# 依存インストール（まだなら）
npm install

# 開発用サーバ起動
npm run dev

# ブラウザで開く (Vite が表示する URL を使用)
```

代替: 軽量サーバで単にファイルを配信して試したい場合は Python の http.server も使えますが、推奨は Vite です。

備考:
- three.js はローカルの `node_modules` からインポートしています（`import * as THREE from 'three'`）。
- 本サンプルで使用しているスクリプト: `dev`, `build`, `preview`（`package.json` に定義済み）
