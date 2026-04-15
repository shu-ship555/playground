/**
 * 解答 02: サーバーコンポーネントでのデータ取得
 *
 * ポイント:
 *   - App Router のデフォルトはサーバーコンポーネント
 *   - async にすれば await fetch() を直接書ける
 *   - useState / useEffect / 'use client' が不要になり、コードがシンプルになる
 *   - データはサーバー側で取得済みなので初期表示でローディング状態がない
 */

type User = { id: number; name: string }

// ✅ async Server Component: await で直接データを取得できる
export default async function UserList() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users?_limit=3',
    { cache: 'force-cache' }
  )
  const users: User[] = await res.json()

  return (
    <div style={{ padding: 32 }}>
      <h1>Q02: サーバーコンポーネントでデータ取得（解答）</h1>
      <ul>
        {users.map(u => <li key={u.id}>{u.name}</li>)}
      </ul>
    </div>
  )
}
