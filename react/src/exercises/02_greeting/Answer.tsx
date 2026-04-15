/**
 * 解答 02: Props の型定義
 *
 * ポイント:
 *   - Props の型を type または interface で定義する
 *   - JSX に数値を渡すときは {} で囲む（文字列リテラルではない）
 *   - 型定義があれば「string を渡した」ミスをコンパイル時に検出できる
 */

// ✅ Props 型を定義する
type GreetingProps = {
  name: string
  age: number
}

function Greeting({ name, age }: GreetingProps) {
  return (
    <div>
      <h2>こんにちは、{name}さん！</h2>
      {/* ✅ age が number なので number + number = 正しく計算される */}
      <p>来年は {age + 1} 歳になります。</p>
    </div>
  )
}

export default function App() {
  {/* ✅ age に数値 {25} を渡す */}
  return <Greeting name="Taro" age={25} />
}
