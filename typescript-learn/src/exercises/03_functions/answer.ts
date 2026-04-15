/**
 * 解答 03: 関数の型
 */

// ✅ 引数に明示的な型注釈を付ける
function greet(name: string, age: number): string {
  return `こんにちは、${name}さん（${age}歳）`;
}

// ✅ 戻り値型を number にする
function add(a: number, b: number): number {
  return a + b;
}

// ✅ コールバックは「number を受け取り number を返す関数」型
function applyToAll(nums: number[], fn: (n: number) => number): number[] {
  return nums.map(fn);
}

console.log(greet("Taro", 30));
console.log(add(3, 4));
console.log(applyToAll([1, 2, 3], (n) => n * 2));
