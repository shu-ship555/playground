// @ts-nocheck
/**
 * 問題 01: useState
 * -----------------------------------------------
 * カウンターが正しく動きません。
 * バグが 2 箇所あります。ブラウザで動作を確認しながら修正してください。
 *
 * ヒント:
 *   - +1 ボタンを押しても数字が増えない（または文字列として連結される）
 *   - リセットが動かない
 */
// import { useState } from 'react'

// export default function Counter() {
//   // ❌ バグ 1: 初期値が数値ではなく文字列になっています
//   const [count, setCount] = useState('0')

//   return (
//     <div>
//       <p style={{ fontSize: '2rem', margin: '16px 0' }}>カウント: {count}</p>
//       {/* ❌ バグ 2: 文字列のまま演算しているため "01", "02"... になります */}
//       <button onClick={() => setCount(count + 1)}>+1</button>
//       <button onClick={() => setCount(count - 1)} style={{ marginLeft: 8 }}>-1</button>
//       <button onClick={() => setCount('0')} style={{ marginLeft: 8 }}>リセット</button>
//     </div>
//   )
// }
import { useState } from 'react'

export default function Counter() {
  // ❌ バグ 1: 初期値が数値ではなく文字列になっています
  const [count, setCount] = useState(0)

  return (
    <div>
      <p style={{ fontSize: '2rem', margin: '16px 0' }}>カウント: {count}</p>
      {/* ❌ バグ 2: 文字列のまま演算しているため "01", "02"... になります */}
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: 8 }}>-1</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: 8 }}>リセット</button>
    </div>
  )
}
