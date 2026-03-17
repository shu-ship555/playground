const email = localStorage.getItem('contact_email');

if (email) {
  document.getElementById('emailDisplay').textContent = email;
} else {
  document.getElementById('emailDisplay').textContent = '（メールアドレスが見つかりません）';
}

localStorage.removeItem('contact_email');
