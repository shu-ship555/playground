/**
 * 解答 03: useEffect
 *
 * ポイント:
 *   - 第 2 引数に [] を渡すと「マウント時のみ実行」になる
 *   - クリーンアップ関数を return することでアンマウント時に interval を止められる
 */
import { useState, useEffect } from 'react'

export default function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds(s => s + 1)
    }, 1000)

    // ✅ クリーンアップ関数で interval を止める
    return () => clearInterval(id)
  }, []) // ✅ 依存配列 [] で初回マウント時のみ実行

  return (
    <div>
      <p style={{ fontSize: '2rem', margin: '16px 0' }}>経過時間: {seconds} 秒</p>
      <button onClick={() => setSeconds(0)}>リセット</button>
    </div>
  )
}
