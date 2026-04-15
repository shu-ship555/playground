'use client'
// @ts-nocheck
/**
 * 問題 02: サーバーコンポーネントでのデータ取得
 * -----------------------------------------------
 * このページは動きますが、Next.js の App Router らしくありません。
 * 'use client' + useEffect を使わずに書き直してください。
 *
 * ヒント:
 *   - サーバーコンポーネントではコンポーネント関数を async にできる
 *   - async にすると関数内で直接 await fetch() が書ける
 *   - useEffect・useState・'use client' はすべて不要になる
 */

// ❌ クライアントパターン: useEffect でデータ取得している
import { useState, useEffect } from 'react'

type User = { id: number; name: string }

export default function UserList() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?_limit=3')
      .then(r => r.json())
      .then(setUsers)
  }, [])

  return (
    <div style={{ padding: 32 }}>
      <h1>Q02: サーバーコンポーネントでデータ取得</h1>
      <ul>
        {users.map(u => <li key={u.id}>{u.name}</li>)}
      </ul>
    </div>
  )
}
