import Link from 'next/link'

const exercises = [
  {
    id: '01',
    slug: '01-use-client',
    title: "'use client' ディレクティブ",
    description: 'useState を使うコンポーネントに必要な設定を追加する',
  },
  {
    id: '02',
    slug: '02-server-fetch',
    title: 'サーバーコンポーネントでデータ取得',
    description: 'useEffect を使わず async/await で直接 fetch する',
  },
  {
    id: '03',
    slug: '03-link',
    title: '<Link> コンポーネント',
    description: '内部ナビゲーションに <a> ではなく <Link> を使う',
  },
]

export default function Home() {
  return (
    <main style={{ maxWidth: 640, margin: '60px auto', padding: '0 24px', fontFamily: 'sans-serif', color: '#111' }}>
      <h1 style={{ fontSize: '1.8rem', marginBottom: 8 }}>Next.js 学習</h1>
      <p style={{ color: '#6b7280', marginBottom: 40 }}>
        各問題の <strong>問題ページ</strong> でエラーや不具合を確認し、
        自分でコードを修正してみましょう。答えは <strong>解答ページ</strong> にあります。
      </p>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {exercises.map(ex => (
          <li
            key={ex.id}
            style={{ border: '1px solid #e5e7eb', borderRadius: 10, padding: '20px 24px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
              <span style={{
                background: '#0f172a', color: '#fff',
                fontSize: '0.72rem', fontWeight: 700,
                padding: '3px 10px', borderRadius: 99,
              }}>
                Q{ex.id}
              </span>
              <strong>{ex.title}</strong>
            </div>
            <p style={{ margin: '0 0 14px', color: '#6b7280', fontSize: '0.9rem' }}>{ex.description}</p>
            <div style={{ display: 'flex', gap: 8 }}>
              <Link
                href={`/exercises/${ex.slug}/question`}
                style={{
                  padding: '6px 16px', borderRadius: 7,
                  border: '1px solid #d1d5db',
                  background: '#fff', color: '#374151',
                  textDecoration: 'none', fontSize: '0.9rem',
                }}
              >
                問題（壊れてる）
              </Link>
              <Link
                href={`/exercises/${ex.slug}/answer`}
                style={{
                  padding: '6px 16px', borderRadius: 7,
                  border: '1px solid #2563eb',
                  background: '#2563eb', color: '#fff',
                  textDecoration: 'none', fontSize: '0.9rem',
                }}
              >
                解答（正しい）
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
