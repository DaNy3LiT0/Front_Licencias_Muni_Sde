console.log("Archivo obtenerReparticion.js cargado correctamente"); // Verificar carga del archivo

document.addEventListener("DOMContentLoaded", function () {
  const selectReparticion = document.getElementById("reparticion");

  if (!selectReparticion) {
    console.error("Elemento selectReparticion no encontrado en el DOM");
    return;
  }

  async function obtenerReparticiones() {
    console.log("Obteniendo reparticiones...");

    try {
      const response = await fetch("http://179.43.118.214/reparticion");

      if (!response.ok) {
        throw new Error("Error al obtener las reparticiones");
      }

      const data = await response.json();
      console.log("Datos obtenidos:", data);

      selectReparticion.innerHTML =
        '<option value="" disabled selected>Seleccione una repartición</option>';

      if (data.length === 0) {
        const option = document.createElement("option");
        option.value = "";
        option.textContent = "No hay reparticiones disponibles";
        selectReparticion.appendChild(option);
      } else {
        data.forEach((reparticion) => {
          const option = document.createElement("option");
          option.value = reparticion.Id_Reparticion;
          option.textContent = reparticion.Nombres;
          selectReparticion.appendChild(option);
        });
      }
    } catch (error) {
      console.error("Error:", error);
      selectReparticion.innerHTML =
        '<option value="" disabled selected>Error al cargar reparticiones</option>';
    }
  }

  obtenerReparticiones();
});
