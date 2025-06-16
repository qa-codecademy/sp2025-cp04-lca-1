const loginBtnDesktop = document.querySelector(
  ".header-language-wrapper-desktop .header-login"
);
const loginBtnMobile = document.querySelector(
  ".header-language-wrapper-mobile .header-login"
);
const loginPopup = document.getElementById("login-popup");
const loginCloseBtn = document.getElementById("login-close-btn");

function openLoginPopup() {
  loginPopup.classList.add("active");
}

function closeLoginPopup() {
  loginPopup.classList.remove("active");
}

loginBtnDesktop.addEventListener("click", openLoginPopup);

loginBtnMobile.addEventListener("click", openLoginPopup);

loginCloseBtn.addEventListener("click", closeLoginPopup);

loginPopup.addEventListener("click", (e) => {
  if (e.target === loginPopup) {
    closeLoginPopup();
  }
});

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Login form submitted!");
  closeLoginPopup();
});

const showRegisterLink = document.getElementById("show-register-form");
const showLoginLink = document.getElementById("show-login-form");
const loginFormContainer = document.getElementById("login-form-container");
const registerFormContainer = document.getElementById(
  "register-form-container"
);

showRegisterLink.addEventListener("click", (e) => {
  e.preventDefault();
  loginFormContainer.style.display = "none";
  registerFormContainer.style.display = "block";
});

showLoginLink.addEventListener("click", (e) => {
  e.preventDefault();
  registerFormContainer.style.display = "none";
  loginFormContainer.style.display = "block";
});

document
  .getElementById("register-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Registration form submitted!");
    registerFormContainer.style.display = "none";
    loginFormContainer.style.display = "block";
  });
