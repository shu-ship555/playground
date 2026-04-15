/**
 * 解答 03: <Link> コンポーネント
 *
 * ポイント:
 *   - 内部ナビゲーションには next/link の <Link> を使う
 *   - <Link> はクライアントサイドナビゲーション（フルリロードなし）
 *   - 外部 URL や mailto: などには従来の <a> タグを使う
 */

import Link from 'next/link' // ✅ next/link から import

export default function Nav() {
  return (
    <div style={{ padding: 32 }}>
      <h1>Q03: Link コンポーネント（解答）</h1>
      <p>以下のリンクは <code>&lt;Link&gt;</code> のためページ遷移が SPA になります。</p>
      <nav>
        <ul style={{ lineHeight: 2 }}>
          {/* ✅ 内部リンクは <Link> を使う */}
          <li><Link href="/">← ホームに戻る</Link></li>
          <li><Link href="/exercises/01-use-client/answer">問題 01 の解答へ</Link></li>
          <li><Link href="/exercises/02-server-fetch/answer">問題 02 の解答へ</Link></li>
        </ul>
      </nav>
    </div>
  )
}
