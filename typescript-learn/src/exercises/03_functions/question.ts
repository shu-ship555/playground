/**
 * 問題 03: 関数の型
 * -----------------------------------------------
 * 関数の引数・戻り値・コールバックの型定義に
 * エラーが 3 箇所あります。修正してください。
 */

// ❌ 1. 引数に型注釈がありません（暗黙的 any）
function greet(name, age) {
  return `こんにちは、${name}さん（${age}歳）`;
}

// ❌ 2. 戻り値型が実装と合っていません（number を返すのに boolean と宣言）
function add(a: number, b: number): boolean {
  return a + b;
}

// ❌ 3. コールバックの型が間違っています（string ではなく関数型にすべき）
function applyToAll(nums: number[], fn: string): number[] {
  return nums.map(fn);
}

console.log(greet("Taro", 30));
console.log(add(3, 4));
console.log(applyToAll([1, 2, 3], (n) => n * 2));
