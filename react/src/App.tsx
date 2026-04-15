import { useState } from 'react'
import CounterQuestion from './exercises/01_counter/Question'
import CounterAnswer from './exercises/01_counter/Answer'
import GreetingQuestion from './exercises/02_greeting/Question'
import GreetingAnswer from './exercises/02_greeting/Answer'
import TimerQuestion from './exercises/03_timer/Question'
import TimerAnswer from './exercises/03_timer/Answer'

const exercises = [
  {
    id: '01',
    title: 'useState — カウンター',
    hint: '+1 ボタンを押したとき何が起きる？',
    Question: CounterQuestion,
    Answer: CounterAnswer,
  },
  {
    id: '02',
    title: 'Props の型定義 — Greeting',
    hint: '来年の年齢は正しく表示されている？',
    Question: GreetingQuestion,
    Answer: GreetingAnswer,
  },
  {
    id: '03',
    title: 'useEffect — タイマー',
    hint: 'タイマーがどんどん速くなっていない？',
    Question: TimerQuestion,
    Answer: TimerAnswer,
  },
]

type Tab = 'question' | 'answer'

const btn = (active: boolean, subtle = false) => ({
  padding: '7px 18px',
  borderRadius: 8,
  border: `1px solid ${active ? (subtle ? '#111' : '#2563eb') : '#d1d5db'}`,
  background: active ? (subtle ? '#111' : '#2563eb') : '#fff',
  color: active ? '#fff' : '#374151',
  cursor: 'pointer',
  fontWeight: active ? 700 : 400,
  fontSize: '0.9rem',
})

export default function App() {
  const [selected, setSelected] = useState(0)
  const [tab, setTab] = useState<Tab>('question')

  const ex = exercises[selected]
  const Component = tab === 'question' ? ex.Question : ex.Answer

  return (
    <div style={{ maxWidth: 680, margin: '48px auto', padding: '0 24px', fontFamily: 'sans-serif', color: '#111' }}>
      <h1 style={{ fontSize: '1.8rem', marginBottom: 6 }}>React 学習</h1>
      <p style={{ color: '#6b7280', marginBottom: 32 }}>
        問題タブで壊れた動作を確認し、コードを修正したら解答タブと見比べよう。
      </p>

      {/* 問題セレクター */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
        {exercises.map((e, i) => (
          <button
            key={e.id}
            onClick={() => { setSelected(i); setTab('question') }}
            style={btn(selected === i)}
          >
            Q{e.id}
          </button>
        ))}
      </div>

      {/* タイトル & ヒント */}
      <h2 style={{ fontSize: '1.2rem', marginBottom: 4 }}>Q{ex.id}: {ex.title}</h2>
      <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: 16 }}>💡 {ex.hint}</p>

      {/* 問題 / 解答タブ */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        {(['question', 'answer'] as Tab[]).map(t => (
          <button key={t} onClick={() => setTab(t)} style={btn(tab === t, true)}>
            {t === 'question' ? '問題（壊れてる）' : '解答（正しい）'}
          </button>
        ))}
      </div>

      {/* コンポーネント表示 */}
      <div style={{ border: '1px solid #e5e7eb', borderRadius: 10, padding: 28, minHeight: 120 }}>
        <Component />
      </div>

      {/* ファイルパス */}
      <p style={{ marginTop: 12, fontSize: '0.78rem', color: '#9ca3af' }}>
        📁 src/exercises/{`0${ex.id}_${ex.id === '01' ? 'counter' : ex.id === '02' ? 'greeting' : 'timer'}`}/{tab === 'question' ? 'Question' : 'Answer'}.tsx
      </p>
    </div>
  )
}
