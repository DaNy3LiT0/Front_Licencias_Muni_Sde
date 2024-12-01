let currentPage = 1;
const itemsPerPage = 5;

async function cargarDatos() {
  try {
    const response = await fetch('http://179.43.118.214/persona');
    if (!response.ok) {
      throw new Error('No se pudo cargar los datos: ' + response.statusText);
    }

    const personas = await response.json();
    console.log(personas);

    if (!Array.isArray(personas) || personas.length === 0 || !Array.isArray(personas[0])) {
      throw new Error('El formato de los datos no es el esperado');
    }

    // Total de entradas
    const totalEntries = personas.length;

    // Total de páginas
    const totalPages = Math.ceil(totalEntries / itemsPerPage);
    mostrarPaginas(totalPages);

    // Mostrar los datos de la página actual
    mostrarDatos(personas);

    // Actualizar el texto de entradas
    const entriesInfo = document.getElementById('entries-info');
    entriesInfo.textContent = `Mostrando ${Math.min(itemsPerPage, totalEntries)} de ${totalEntries} entradas`;
  } catch (error) {
    console.error('Error:', error);
    const tbody = document.querySelector('table tbody');
    tbody.innerHTML = `<tr><td colspan="5" class="text-center text-danger">Error al cargar los datos</td></tr>`;
  }
}

function mostrarDatos(personas) {
  const tbody = document.querySelector('table tbody');
  tbody.innerHTML = ''; // Limpiar el contenido actual

  // Calcular el rango de elementos a mostrar
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, personas.length);

  for (let i = startIndex; i < endIndex; i++) {
    const persona = personas[i];
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${persona[0]}</td> <!-- Id_Persona -->
      <td>${persona[1]}</td> <!-- Apellido -->
      <td>${persona[2]}</td> <!-- Nombres -->
      <td>${persona[3]}</td> <!-- DNI -->
      <td>
        <a href="#" class="text-primary"><i class="fas fa-eye"></i></a>
        <a href="#" class="text-warning mx-2"><i class="fas fa-edit"></i></a>
        <a href="#" class="text-danger"><i class="fas fa-trash"></i></a>
      </td>
    `;
    tbody.appendChild(tr);
  }
}

function mostrarPaginas(totalPages) {
  const pagination = document.querySelector('.pagination');
  pagination.innerHTML = ''; // Limpiar la paginación actual

  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement('li');
    li.className = 'page-item';
    li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
    li.addEventListener('click', (e) => {
      e.preventDefault();
      currentPage = i;
      cargarDatos(); // Cargar datos de la nueva página
    });
    pagination.appendChild(li);
  }
}

// Cargar los datos cuando el documento esté listo
document.addEventListener('DOMContentLoaded', cargarDatos);