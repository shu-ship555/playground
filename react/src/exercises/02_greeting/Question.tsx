// @ts-nocheck
/**
 * 問題 02: Props の型定義
 * -----------------------------------------------
 * 「来年は ○ 歳」の表示がおかしくなっています。
 * バグが 2 箇所あります。修正してください。
 *
 * ヒント:
 *   - ブラウザで見ると年齢が "251" のような文字列になっている
 *   - Props の型定義がないため TypeScript が誤りを検出できていない
 */

// // ❌ バグ 1: Props の型定義がない（name と age の型が不明）
// function Greeting({ name, age }) {
//   return (
//     <div>
//       <h2>こんにちは、{name}さん！</h2>
//       {/* age が文字列のため + 演算が文字列結合になる → "25" + 1 = "251" */}
//       <p>来年は {age + 1} 歳になります。</p>
//     </div>
//   )
// }

// export default function App() {
//   // ❌ バグ 2: age に数値ではなく文字列 "25" を渡している
//   return <Greeting name="Taro" age="25" />
// }

type GreetingProps = {
  name: string,
  age: number
}

// ❌ バグ 1: Props の型定義がない（name と age の型が不明）
function Greeting({ name, age }: GreetingProps) {
  return (
    <div>
      <h2>こんにちは、{name}さん！</h2>
      {/* age が文字列のため + 演算が文字列結合になる → "25" + 1 = "251" */}
      <p>来年は {age + 1} 歳になります。</p>
    </div>
  )
}

export default function App() {
  // ❌ バグ 2: age に数値ではなく文字列 "25" を渡している
  return <Greeting name="Taro" age={25} />
}
