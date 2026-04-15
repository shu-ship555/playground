/**
 * 解答 01: useState
 *
 * ポイント:
 *   - useState の初期値は扱いたいデータの型に合わせる（数値なら 0）
 *   - 更新関数には「前の値を受け取る関数形式」を使うと安全
 */
import { useState } from 'react'

export default function Counter() {
  // ✅ 初期値を数値の 0 にする
  const [count, setCount] = useState(0)

  return (
    <div>
      <p style={{ fontSize: '2rem', margin: '16px 0' }}>カウント: {count}</p>
      {/* ✅ 関数形式で前の値を受け取って更新 */}
      <button onClick={() => setCount(prev => prev + 1)}>+1</button>
      <button onClick={() => setCount(prev => prev - 1)} style={{ marginLeft: 8 }}>-1</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: 8 }}>リセット</button>
    </div>
  )
}
