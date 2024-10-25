let usuario = ""; // variable para almacenar el usuario actual

// función para cerrar sesión
function cerrarSesion() {
  usuario = ""; // resetear usuario
  window.location.href = "login.html"; // redirigir a la página de login
}

// función para inicializar el dropdown
function initDropdown() {
  const dropdownMenu = document.querySelector(".dropdown-menu");
  dropdownMenu.addEventListener("click", (e) => {
    if (e.target.classList.contains("dropdown-item")) {
      if (e.target.textContent === "Cerrar sesión") {
        cerrarSesion();
      } else if (e.target.textContent === "Configuración") {
        // agregar lógica para la configuración aquí
      }
    }
  });
}

// inicializar el dropdown cuando se carga la página
document.addEventListener("DOMContentLoaded", () => {
  initDropdown();
  mostrarUsuario();

  // Agregar evento de clic al elemento Cerrar Sesión
  document
    .getElementById("cerrar-sesion")
    .addEventListener("click", cerrarSesion);
});

// Función para mostrar el nombre del usuario en el mensaje de bienvenida
function mostrarUsuarioBienvenida() {
  const username = localStorage.getItem("username");
  if (username) {
    document.getElementById("username-bienvenida").textContent = username;
  } else {
    // Redirigir al usuario a la página de login si no ha iniciado sesión
    window.location.href = "login.html";
  }
}

// Llamar a las funciones después de que el usuario inicie sesión
document.addEventListener("DOMContentLoaded", () => {
  initDropdown();
  mostrarUsuarioBienvenida();
});