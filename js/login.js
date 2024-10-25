const usuarios = {};

// Leer el archivo usuarios.txt y cargar las credenciales en un objeto
fetch('usuarios.txt')
  .then(response => response.text())
  .then(text => {
    const lines = text.split('\n');
    lines.forEach(line => {
      const [usuario, contraseña] = line.trim().split(':');
      usuarios[usuario] = contraseña;
    });
    console.log('Objeto usuarios:', usuarios);
  });

// Obtengo los elementos de entrada
const usuarioInput = document.getElementById('usuario');
const contraseñaInput = document.getElementById('contraseña');
const errorMessage = document.getElementById('error-message');

// Verificar las credenciales del usuario que intenta ingresar
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const usuario = usuarioInput.value.trim();
  const contraseña = contraseñaInput.value.trim();

  console.log('Input values:', usuario, contraseña);

  if (!usuario || !contraseña) {
    errorMessage.textContent = 'Por favor, ingrese ambos campos';
    return;
  }

  if (!usuarios[usuario] || usuarios[usuario] !== contraseña) {
    console.log('Authentication failed:', usuario, contraseña);
    errorMessage.textContent = 'Credenciales incorrectas';
    return;
  }

  localStorage.setItem('username', usuario); // almacenar el nombre del usuario en el storage
  window.location.href = 'index.html';
});