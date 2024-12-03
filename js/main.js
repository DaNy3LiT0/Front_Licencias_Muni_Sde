console.log("Archivo main.js cargado correctamente"); // Verificar carga del archivo

let usuario = ""; // variable para almacenar el usuario actual

// función para cerrar sesión
function cerrarSesion() {
  usuario = ""; // resetear usuario
  console.log("Sesión cerrada"); // Depuración
  window.location.href = "login.html"; // redirigir a la página de login
}

// función para inicializar el dropdown
function initDropdown() {
  console.log("Inicializando dropdown"); // Depuración
  const dropdownMenu = document.querySelector(".dropdown-menu");
  if (dropdownMenu) {
    dropdownMenu.addEventListener("click", (e) => {
      if (e.target.classList.contains("dropdown-item")) {
        if (e.target.textContent === "Cerrar sesión") {
          cerrarSesion();
        } else if (e.target.textContent === "Configuración") {
          console.log("Abriendo configuración"); // Agrega lógica para configuración
        }
      }
    });
  } else {
    console.error("Dropdown menu no encontrado");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initDropdown();
  mostrarUsuario();
});

// Mostrar Usuario en la Nav
function mostrarUsuario() {
  const username = localStorage.getItem("username");
  if (username) {
    console.log("Usuario encontrado:", username); // Depuración
    const userElement = document.getElementById("username");
    if (userElement) {
      userElement.textContent = username;
    } else {
      console.error("Elemento username no encontrado");
    }
  } else {
    console.warn("Usuario no encontrado en localStorage. Redirigiendo al login.");
    window.location.href = "login.html";
  }
}

// Flechas en Menu Lateral
document.querySelectorAll('[data-bs-toggle="collapse"]').forEach((link) => {
  const targetId = link.getAttribute("data-bs-target");
  const target = document.querySelector(targetId);
  const arrow = link.querySelector(".arrow");

  if (target && arrow) {
    target.addEventListener("show.bs.collapse", () => {
      arrow.classList.add("rotate");
    });

    target.addEventListener("hide.bs.collapse", () => {
      arrow.classList.remove("rotate");
    });
  } else {
    console.warn("No se encontró el target o la flecha para:", targetId);
  }
});
