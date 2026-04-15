/**
 * 解答 01: 基本の型注釈
 */

// ✅ 文字列 → string
const userName: string = "Taro Yamada";

// ✅ 数値 → number
const userAge: number = 25;

// ✅ 数値の配列 → number[]
const scores: number[] = [90, 85, 100];

// ✅ number を返すので戻り値型は number
function double(n: number): number {
  return n * 2;
}

console.log(userName, userAge, scores, double(5));
