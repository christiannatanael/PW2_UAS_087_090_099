const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');
signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

// elemen formulir sign-up
const signUpForm = document.querySelector('.form-wrapper.sign-up form');

// event listener untuk submit form signup
signUpForm.addEventListener('submit', function (event) {

  // ke login.html
  window.location.href = 'index.html';

  event.preventDefault();
});

// elemen formulir login
const loginForm = document.querySelector('.form-wrapper.sign-in form');

// event listener untuk submit form login
loginForm.addEventListener('submit', function (event) {
  // Tambahkan kode untuk memproses login di sini

  // arahkan pengguna ke Mainpage/index.html
  window.location.href = 'Mainpage/index.html';

  // aksi default agar form tidak di-submit secara normal
  event.preventDefault();
});
