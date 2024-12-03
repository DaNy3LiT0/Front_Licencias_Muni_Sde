document.getElementById('formAltaPersona').addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar el comportamiento por defecto del formulario

    // Recoger los valores del formulario
    const apellido = document.getElementById('apellido').value;
    const nombres = document.getElementById('nombres').value;
    const dni = document.getElementById('dni').value;
    const domicilio = document.getElementById('domicilio').value;
    const fechaNac = new Date(document.getElementById('fecha_nac').value).toUTCString();
    const telefono = document.getElementById('telefono').value;
    const edad = parseInt(document.getElementById('edad').value);
    const genero = document.getElementById('genero').value;
    const antiguedad = parseInt(document.getElementById('antiguedad').value);
    const email = "example@example.com"; // Cambiar según sea necesario
    const idReparticion = 1; // Valor fijo como se indicó
    const idEstadoRegistro = 1; // Valor por defecto

    // Validar antigüedad
    if (antiguedad <= 0) {
        alert("La antigüedad debe ser un valor positivo.");
        return;
    }

    // Crear el contenido del modal
    const modalContent = `
        <strong>Apellido:</strong> ${apellido}<br>
        <strong>Nombres:</strong> ${nombres}<br>
        <strong>DNI:</strong> ${dni}<br>
        <strong>Domicilio:</strong> ${domicilio}<br>
        <strong>Fecha de Nac:</strong> ${fechaNac}<br>
        <strong>Teléfono:</strong> ${telefono}<br>
        <strong>Edad:</strong> ${edad}<br>
        <strong>Género:</strong> ${genero}<br>
        <strong>Antigüedad:</strong> ${antiguedad}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Id Repartición:</strong> ${idReparticion}<br> <!-- Agregado aquí -->
    `;
    document.getElementById('modalContent').innerHTML = modalContent;

    // Mostrar el modal
    const confirmModal = new bootstrap.Modal(document.getElementById('confirmModal'));
    confirmModal.show();

    // Manejar el evento de confirmar el envío
    document.getElementById('confirmSubmit').onclick = async function () {
        // Crear el objeto de datos
        const personaData = [
            [null, apellido, nombres, dni, domicilio, fechaNac, telefono, new Date().toUTCString(), new Date().toUTCString(), edad, genero, antiguedad, email, idReparticion, idEstadoRegistro]
        ];

        // Enviar los datos al endpoint
        try {
            const response = await fetch('http://179.43.118.214/persona', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(personaData)
            });

            if (response.ok) {
                alert("Datos enviados correctamente.");
                document.getElementById("formAltaPersona").reset();
                confirmModal.hide();
            } else {
                const errorResponse = await response.text();
                console.error("Error en la respuesta:", errorResponse);
                alert("Error al enviar los datos. Intente nuevamente.");
            }
        } catch (error) {
            console.error("Error al enviar datos:", error);
            alert("No se pudo conectar al servidor. Verifica tu conexión a Internet.");
        }
    };
});