function mostrarUsuario() {
  const username = localStorage.getItem("username");
  if (username) {
    document.getElementById("username").textContent = username;
  } else {
    // Redirigir al usuario a la página de login si no ha iniciado sesión
    window.location.href = "login.html";
  }
}

document.addEventListener("DOMContentLoaded", mostrarUsuario);