// @ts-nocheck
/**
 * 問題 03: useEffect
 * -----------------------------------------------
 * タイマーが猛スピードで加速していきます。
 * バグが 2 箇所あります。修正してください。
 *
 * ヒント:
 *   - 依存配列がないとレンダーのたびに setInterval が追加される
 *   - コンポーネントが消えてもタイマーが止まらない（メモリリーク）
 */
// import { useState, useEffect } from 'react'

// export default function Timer() {
//   const [seconds, setSeconds] = useState(0)

//   useEffect(() => {
//     // ❌ バグ 1: 依存配列がないため毎レンダーで新しい interval が追加される
//     // ❌ バグ 2: interval を返して止めていない（クリーンアップなし）
//     setInterval(() => {
//       setSeconds(s => s + 1)
//     }, 1000)
//   })

//   return (
//     <div>
//       <p style={{ fontSize: '2rem', margin: '16px 0' }}>経過時間: {seconds} 秒</p>
//       <button onClick={() => setSeconds(0)}>リセット</button>
//     </div>
//   )
// }

import { useState, useEffect } from 'react'

export default function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    // ❌ バグ 1: 依存配列がないため毎レンダーで新しい interval が追加される
    // ❌ バグ 2: interval を返して止めていない（クリーンアップなし）
    const interval = setInterval(() => {
      setSeconds(s => s + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <p style={{ fontSize: '2rem', margin: '16px 0' }}>経過時間: {seconds} 秒</p>
      <button onClick={() => setSeconds(0)}>リセット</button>
    </div>
  )
}