/**
 * 問題 01: 基本の型注釈
 * -----------------------------------------------
 * 型エラーが 4 箇所あります。
 * IDE の赤い波線を手がかりに、すべて修正してください。
 * 答えを確認したいときは answer.ts を見てみましょう。
 */

// ❌ 1. 文字列を number 型の変数に代入しています
const userName: number = "Taro Yamada";

// ❌ 2. 数値を string 型の変数に代入しています
const userAge: string = 25;

// ❌ 3. number[] に文字列要素が混じっています
const scores: number[] = [90, "85", 100];

// ❌ 4. 関数の戻り値型が実装と合っていません（number を返すのに string と宣言）
function double(n: number): string {
  return n * 2;
}

// 動作確認（型が正しければ TS エラーなし）
console.log(userName, userAge, scores, double(5));
