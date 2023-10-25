document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".form.login");
  const signupForm = document.querySelector(".form.signup");
  const loginLink = document.querySelector(".link.login-link");
  const signupLink = document.querySelector(".link.signup-link");

  loginLink.addEventListener("click", () => {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
  });

  signupLink.addEventListener("click", () => {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
  });
});