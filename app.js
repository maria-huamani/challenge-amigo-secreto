// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar amigo
function agregarAmigo() {
    const inputNombre = document.getElementById('amigo').value.trim().toLowerCase(); // Convertir a minúsculas

    // Validar que el campo no esté vacío
    if (inputNombre === '') {
        alert('Por favor, escribe un nombre válido');
        return; // Salir de la función si está vacío
    }

    // Validar que el nombre solo contenga letras
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/; // Permite letras y espacios
    if (!regex.test(inputNombre)) {
        alert('Por favor, el nombre solo debe contener letras');
        return; // Salir de la función si no es válido
    }

    // Verificar si el nombre ya está en la lista
    if (amigos.includes(inputNombre)) {
        alert('Este nombre ya ha sido agregado');
        return; // Salir de la función si el nombre ya existe
    }

    // Si pasa las validaciones, añadir el amigo a la lista
    amigos.push(inputNombre); // Agregar el nombre a la lista de amigos
    const listaAmigos = document.getElementById('listaAmigos');
    const nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = inputNombre.charAt(0).toUpperCase() + inputNombre.slice(1); // Mostrar con la primera letra en mayúscula

    // Crear elemento "X" para eliminar
    const eliminarX = document.createElement('span');
    eliminarX.textContent = ' X'; // Añadir un espacio antes de la "X" para separación
    eliminarX.style.cursor = 'pointer'; // Cambiar el cursor para indicar que es clickeable
    eliminarX.onclick = function() {
        eliminarAmigo(inputNombre, nuevoAmigo); // Llamar a la función eliminarAmigo
    };

    nuevoAmigo.appendChild(eliminarX); // Agregar la "X" al elemento de la lista
    listaAmigos.appendChild(nuevoAmigo);
    
    // Limpiar el campo de entrada
    document.getElementById('amigo').value = '';
}

// Función para eliminar amigo
function eliminarAmigo(nombre, elemento) {
    amigos = amigos.filter(amigo => amigo !== nombre); // Eliminar el nombre de la lista
    elemento.remove(); // Eliminar el elemento de la lista en el DOM
}

// Función para sortear amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Por favor, añade algunos nombres."); // Alerta si no hay amigos
        return; // Salir de la función
    }
    // Lógica para sortear un amigo
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    amigos = amigos.filter(nombre => nombre !== amigoSorteado); // Filtrar el amigo sorteado

    // Mostrar el mensaje con el nombre del amigo sorteado
    document.getElementById('resultado').innerHTML = `El amigo secreto es: ${amigoSorteado.charAt(0).toUpperCase() + amigoSorteado.slice(1)}`; // Mostrar el amigo sorteado
    document.getElementById('listaAmigos').innerHTML = amigos.map(nombre => `${nombre.charAt(0).toUpperCase() + nombre.slice(1)} <span style="cursor: pointer;" onclick="eliminarAmigo('${nombre}', this.parentNode);">X</span>`).join('<br>'); // Actualizar la lista de amigos
}

function reiniciarJuego() {
    amigos = []; // Reiniciar la lista de amigos
    document.getElementById('listaAmigos').innerHTML = ''; // Limpiar la lista en el DOM
    document.getElementById('resultado').innerHTML = ''; // Limpiar el resultado
    alert('El juego ha sido reiniciado.'); // Mensaje de confirmación
}
// Agregar evento de escucha para la tecla "Enter" después de que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('amigo').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            agregarAmigo(); // Llamar a la función agregarAmigo si se presiona "Enter"
        }
    });
});
