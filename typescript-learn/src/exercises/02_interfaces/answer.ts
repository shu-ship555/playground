/**
 * 解答 02: インターフェース
 */

interface User {
  fullName: string;
  age: number;
  email: string;
}

// ✅ インターフェース通り fullName を使う
const user: User = {
  fullName: "Hanako",
  age: 28,
  email: "hanako@example.com",
};

// ✅ 引数の型を User にする
function printUser(u: User): void {
  console.log(`${u.fullName} (${u.age})`);
}

// ✅ User に存在するプロパティのみアクセス可
console.log(user.email);

printUser(user);
