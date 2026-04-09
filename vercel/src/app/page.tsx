export default function Home() {
  return (
    <main className="max-w-2xl mx-auto p-8 font-sans">
      <h1 className="text-3xl font-bold mb-2">Vercel + Next.js デプロイ学習サンプル</h1>
      <p className="text-gray-500 mb-8">デプロイの仕組みを確認するためのプロジェクトです</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">デプロイの仕組み</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>GitHub にコードを push する</li>
          <li>Vercel が変更を検知して自動でビルドを開始（CI/CD）</li>
          <li>
            <code className="bg-gray-100 px-1 rounded">npm run build</code> が実行され静的ファイルと
            Serverless Function が生成される
          </li>
          <li>Edge Network にデプロイされ、世界中から低レイテンシでアクセス可能になる</li>
          <li>PR ごとに Preview URL が発行される（本番とは別環境）</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Next.js の主要な出力形式</h2>
        <div className="space-y-3">
          <div className="border rounded p-3">
            <p className="font-medium">静的ページ (SSG)</p>
            <p className="text-sm text-gray-600">
              ビルド時にHTMLを生成。CDNにキャッシュされ最速。このページがそれにあたる。
            </p>
          </div>
          <div className="border rounded p-3">
            <p className="font-medium">サーバーレンダリング (SSR)</p>
            <p className="text-sm text-gray-600">
              リクエストごとにサーバー側でHTMLを生成。
              <code className="bg-gray-100 px-1 rounded">export const dynamic = &apos;force-dynamic&apos;</code>
              で有効化。Vercel では Serverless Function として動作。
            </p>
          </div>
          <div className="border rounded p-3">
            <p className="font-medium">API ルート</p>
            <p className="text-sm text-gray-600">
              <code className="bg-gray-100 px-1 rounded">src/app/api/</code> 以下に置くと Serverless Function になる。
              <a href="/api/hello" className="text-blue-600 underline ml-1">
                /api/hello を試す
              </a>
            </p>
          </div>
          <div className="border rounded p-3">
            <p className="font-medium">Edge Runtime</p>
            <p className="text-sm text-gray-600">
              <code className="bg-gray-100 px-1 rounded">export const runtime = &apos;edge&apos;</code> で Edge Network 上で動作。
              起動が高速だが Node.js API の一部は使えない。
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">重要なファイル・設定</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>
            <code className="bg-gray-100 px-1 rounded">vercel.json</code> — ルーティング・ビルド設定・環境変数の上書き
          </li>
          <li>
            <code className="bg-gray-100 px-1 rounded">next.config.ts</code> — Next.js の動作設定（画像最適化・リダイレクトなど）
          </li>
          <li>
            <code className="bg-gray-100 px-1 rounded">.env.local</code> — ローカル専用の環境変数（git管理外）
          </li>
          <li>
            <code className="bg-gray-100 px-1 rounded">.env.production</code> — 本番環境の環境変数（Vercel Dashboard でも設定可能）
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">デプロイ手順（初回）</h2>
        <pre className="bg-gray-900 text-green-400 rounded p-4 text-sm overflow-x-auto">
          {`# Vercel CLI をインストール
npm i -g vercel

# プロジェクトをデプロイ（対話形式でセットアップ）
vercel

# 本番デプロイ
vercel --prod`}
        </pre>
      </section>
    </main>
  );
}
