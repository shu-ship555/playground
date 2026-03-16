// =============================
// ① preventDefault のデモ
// =============================

// --- リンク ---
const linkDefault = document.getElementById('link-default');
const linkPrevented = document.getElementById('link-prevented');
const linkLog = document.getElementById('link-log');

linkDefault.addEventListener('click', () => {
  addLog(linkLog, '✅ デフォルト：リンクへ移動します', 'ok');
});

linkPrevented.addEventListener('click', (e) => {
  e.preventDefault(); // ← ブラウザのデフォルト動作（遷移）をキャンセル
  addLog(linkLog, '🚫 preventDefault：移動をキャンセルしました', 'blocked');
});

// --- チェックボックス ---
const checkDefault = document.getElementById('check-default');
const checkPrevented = document.getElementById('check-prevented');
const checkLog = document.getElementById('check-log');

checkDefault.addEventListener('click', () => {
  addLog(checkLog, `✅ デフォルト：チェック状態 = ${checkDefault.checked}`, 'ok');
});

checkPrevented.addEventListener('click', (e) => {
  e.preventDefault(); // ← チェックが入るデフォルト動作をキャンセル
  addLog(checkLog, '🚫 preventDefault：チェックをキャンセルしました', 'blocked');
});


// =============================
// ② stopPropagation のデモ
// =============================

// --- バブリングあり ---
const outerDefault = document.getElementById('outer-default');
const middleDefault = document.getElementById('middle-default');
const innerDefault = document.getElementById('inner-default');
const bubbleLog = document.getElementById('bubble-log');

innerDefault.addEventListener('click', () => {
  addLog(bubbleLog, '1️⃣ 子 (button#inner) でキャッチ', 'ok');
});
middleDefault.addEventListener('click', () => {
  addLog(bubbleLog, '2️⃣ 親 (div#middle) へバブリング', 'warn');
});
outerDefault.addEventListener('click', () => {
  addLog(bubbleLog, '3️⃣ 祖父 (div#outer) へバブリング', 'warn');
});

// --- stopPropagation あり ---
const outerStopped = document.getElementById('outer-stopped');
const middleStopped = document.getElementById('middle-stopped');
const innerStopped = document.getElementById('inner-stopped');
const stopLog = document.getElementById('stop-log');

innerStopped.addEventListener('click', (e) => {
  e.stopPropagation(); // ← ここで伝播を止める
  addLog(stopLog, '1️⃣ 子 (button#inner) でキャッチ', 'ok');
  addLog(stopLog, '🛑 stopPropagation：ここで伝播を止めました', 'blocked');
});
middleStopped.addEventListener('click', () => {
  addLog(stopLog, '2️⃣ 親 (div#middle) へバブリング ← 届かないはず', 'warn');
});
outerStopped.addEventListener('click', () => {
  addLog(stopLog, '3️⃣ 祖父 (div#outer) へバブリング ← 届かないはず', 'warn');
});


// =============================
// ログリセット
// =============================
document.getElementById('reset-btn').addEventListener('click', () => {
  [linkLog, checkLog, bubbleLog, stopLog].forEach(el => {
    el.innerHTML = '← クリックしてみよう';
    el.className = 'log';
  });
  checkDefault.checked = false;
  checkPrevented.checked = false;
});


// =============================
// ユーティリティ
// =============================
function addLog(logEl, message, type) {
  // 初期テキストをクリア
  if (logEl.dataset.init !== 'done') {
    logEl.innerHTML = '';
    logEl.dataset.init = 'done';
  }
  const line = document.createElement('div');
  line.textContent = message;
  line.classList.add('log-line', `log-${type}`);
  logEl.appendChild(line);
}
