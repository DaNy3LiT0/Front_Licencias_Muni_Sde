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

// Mostrar Usuario en la Nav
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

// Flechas en Menu Lateral
document.querySelectorAll('[data-bs-toggle="collapse"]').forEach((link) => {
  const targetId = link.getAttribute("data-bs-target");
  const target = document.querySelector(targetId);
  const arrow = link.querySelector(".arrow");

  if (target && arrow) {
    // Registra los eventos una sola vez
    target.addEventListener("show.bs.collapse", () => {
      arrow.classList.add("rotate");
    });

    target.addEventListener("hide.bs.collapse", () => {
      arrow.classList.remove("rotate");
    });
  }
});