document.getElementById('formReparticion').addEventListener('submit', async function (e) {
  e.preventDefault(); // Evitar el comportamiento por defecto del formulario

  // Recoger los valores del formulario
  const nombre = document.getElementById('nomReparticion').value;
  const descripcion = document.getElementById('direccion').value;

  // Crear el objeto con el formato deseado
  const reparticionData = {
    nombre: nombre,
    descripcion: descripcion,
    id_estado_registro: 1 // Valor por defecto
  };

  try {
    const response = await fetch('http://179.43.118.214/reparticion/agregar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reparticionData)
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud: ' + response.statusText);
    }

    const result = await response.json();
    console.log('Repartición agregada:', result);
    alert('Repartición agregada exitosamente!');

    // Aquí puedes redirigir o limpiar el formulario si es necesario
    document.getElementById('formReparticion').reset();

  } catch (error) {
    console.error('Error:', error);
    alert('Error al agregar la repartición. Intenta de nuevo.');
  }
});