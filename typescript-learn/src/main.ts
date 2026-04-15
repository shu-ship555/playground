import './style.css'

const exercises = [
  {
    id: '01',
    title: '基本の型注釈',
    hint: '変数・配列・関数の戻り値に正しい型を付けよう',
    path: 'src/exercises/01_basic_types/',
  },
  {
    id: '02',
    title: 'インターフェース',
    hint: 'インターフェースの定義と利用側を一致させよう',
    path: 'src/exercises/02_interfaces/',
  },
  {
    id: '03',
    title: '関数の型',
    hint: '引数・戻り値・コールバックに正しい型注釈を付けよう',
    path: 'src/exercises/03_functions/',
  },
]

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div style="max-width:640px;margin:60px auto;padding:0 24px;font-family:sans-serif;color:#1a1a1a">
    <h1 style="font-size:1.8rem;margin-bottom:8px">TypeScript 学習</h1>
    <p style="color:#555;margin-bottom:40px">
      各問題の <code>question.ts</code> を IDE で開き、<strong>赤い波線（型エラー）</strong>をすべて修正してください。<br>
      答えは <code>answer.ts</code> に書いてあります。
    </p>
    <ul style="list-style:none;padding:0;display:flex;flex-direction:column;gap:16px">
      ${exercises.map(ex => `
        <li style="border:1px solid #e0e0e0;border-radius:10px;padding:20px 24px">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:6px">
            <span style="background:#0f172a;color:#fff;font-size:0.75rem;font-weight:700;padding:3px 10px;border-radius:99px">Q${ex.id}</span>
            <strong style="font-size:1rem">${ex.title}</strong>
          </div>
          <p style="margin:0 0 12px;color:#666;font-size:0.9rem">${ex.hint}</p>
          <div style="display:flex;gap:8px;font-size:0.8rem">
            <code style="background:#fef3c7;padding:4px 10px;border-radius:6px;color:#92400e">${ex.path}question.ts ← 問題</code>
            <code style="background:#d1fae5;padding:4px 10px;border-radius:6px;color:#065f46">${ex.path}answer.ts ← 解答</code>
          </div>
        </li>
      `).join('')}
    </ul>
  </div>
`
