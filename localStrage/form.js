const form = document.getElementById('contactForm');

function validate() {
  let valid = true;

  const name = document.getElementById('name');
  const nameField = document.getElementById('nameField');
  if (!name.value.trim()) {
    nameField.classList.add('invalid');
    valid = false;
  } else {
    nameField.classList.remove('invalid');
  }

  const email = document.getElementById('email');
  const emailField = document.getElementById('emailField');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    emailField.classList.add('invalid');
    valid = false;
  } else {
    emailField.classList.remove('invalid');
  }

  const message = document.getElementById('message');
  const messageField = document.getElementById('messageField');
  if (!message.value.trim()) {
    messageField.classList.add('invalid');
    valid = false;
  } else {
    messageField.classList.remove('invalid');
  }

  return valid;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validate()) return;

  const email = document.getElementById('email').value.trim();
  localStorage.setItem('contact_email', email);

  window.location.href = 'complete.html';
});
