// @ts-nocheck
/**
 * 問題 01: 'use client' ディレクティブ
 * -----------------------------------------------
 * このページを開くと Next.js がエラーを出します。
 * 原因を特定して修正してください。
 *
 * ヒント:
 *   - useState はクライアント側でのみ使える React フック
 *   - App Router のデフォルトはサーバーコンポーネント
 *   - クライアントコンポーネントにするにはファイル先頭に何かが必要
 */

// ❌ 'use client' がないため、useState を使っているのにサーバーコンポーネントとして扱われる

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div style={{ padding: 32 }}>
      <h1>Q01: use client</h1>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}
