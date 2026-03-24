function showRegister() {
  document.getElementById("loginForm").classList.remove("active");
  document.getElementById("registerForm").classList.add("active");
}

function showLogin() {
  document.getElementById("registerForm").classList.remove("active");
  document.getElementById("loginForm").classList.add("active");
}

// Simulasi Register
document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const tgl = document.getElementById("tglLahir").value;
  const nik = document.getElementById("nik").value;
  const password = document.getElementById("password").value;

  // Simpan ke localStorage
  localStorage.setItem("user", JSON.stringify({ nama, tgl, nik, password }));

  alert("Registrasi berhasil!");
  showLogin();
});

// Simulasi Login
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nik = document.getElementById("loginNIK").value;
  const password = document.getElementById("loginPassword").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.nik === nik && user.password === password) {
    alert("Login berhasil! Selamat datang " + user.nama);
  } else {
    alert("NIK atau Password salah!");
  }
});
