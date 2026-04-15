// @ts-nocheck
/**
 * 問題 03: <Link> コンポーネント
 * -----------------------------------------------
 * ナビゲーションが機能していますが、Next.js の推奨方法ではありません。
 * <a> タグを正しいコンポーネントに置き換えてください。
 *
 * ヒント:
 *   - <a> タグは毎回フルページリロードが発生する
 *   - Next.js には内部ナビゲーション用のコンポーネントがある
 *   - DevTools の Network タブでリロードの有無を比較してみよう
 */

// ❌ next/link を import していない

export default function Nav() {
  return (
    <div style={{ padding: 32 }}>
      <h1>Q03: Link コンポーネント</h1>
      <p>以下のリンクは <code>&lt;a&gt;</code> タグのためフルリロードが発生します。</p>
      <nav>
        <ul style={{ lineHeight: 2 }}>
          {/* ❌ 内部リンクに <a> タグを使っている */}
          <li><a href="/">← ホームに戻る</a></li>
          <li><a href="/exercises/01-use-client/answer">問題 01 の解答へ</a></li>
          <li><a href="/exercises/02-server-fetch/answer">問題 02 の解答へ</a></li>
        </ul>
      </nav>
    </div>
  )
}
