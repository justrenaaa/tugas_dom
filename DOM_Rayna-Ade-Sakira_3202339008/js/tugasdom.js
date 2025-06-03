// Ambil elemen dari HTML
const loginBtn = document.getElementById("login-btn");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("login-error");

// Saat tombol LOGIN diklik
loginBtn.addEventListener("click", function () {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Cek email/username dan password
  if ((username === "ayam@goyeng.com" || username === "ayam") && password === "dahlah") {
    alert("✅ Login berhasil!");
    errorMsg.classList.add("hidden");
  } else {
    errorMsg.classList.remove("hidden");
  }
});
