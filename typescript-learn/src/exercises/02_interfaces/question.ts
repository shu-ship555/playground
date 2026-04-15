/**
 * 問題 02: インターフェース
 * -----------------------------------------------
 * User インターフェースの定義・使い方に
 * エラーが 3 箇所あります。修正してください。
 */

interface User {
  fullName: string;
  age: number;
  email: string;
}

// ❌ 1. プロパティ名がインターフェースと一致していません（name → fullName）
const user: User = {
  name: "Hanako",
  age: 28,
  email: "hanako@example.com",
};

// ❌ 2. 関数の引数型が間違っています（string ではなく User にすべき）
function printUser(u: string): void {
  console.log(`${u.fullName} (${u.age})`);
}

// ❌ 3. 存在しないプロパティにアクセスしています
console.log(user.nickname);

printUser(user);
