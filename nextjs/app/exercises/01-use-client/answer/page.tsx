'use client' // ✅ クライアントコンポーネントとして宣言

/**
 * 解答 01: 'use client' ディレクティブ
 *
 * ポイント:
 *   - useState / useEffect など React フックを使うファイルは
 *     先頭に 'use client' を書いてクライアントコンポーネントにする
 *   - 'use client' はファイル先頭（import より前）に書く必要がある
 */

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div style={{ padding: 32 }}>
      <h1>Q01: use client（解答）</h1>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}
