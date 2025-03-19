// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// hacer un array para almacenar nombres
let amigos = [];

// Verificar entrada del amigo y habilitar/deshabilitar el botón
function verificarEntradaDeAmigo() {
    let nombreDeAmigo = document.getElementById('amigo').value.trim(); // Obtener el valor del input
    let botonAgregar = document.getElementById('agregar');

    // Habilitar o deshabilitar el botón según la entrada
    botonAgregar.disabled = nombreDeAmigo === "";
}

// Función para validar que el nombre solo contenga letras
function validarNombre(nombre) {
    const regex = /^[A-Za-záéíóúÁÉÍÓÚÑñ\s]+$/; // Expresión regular para letras y espacios
    return regex.test(nombre);
}

// Agregar amigo a la lista
function agregarAmigo() {
    let nombreDeAmigo = document.getElementById('amigo').value.trim(); // Obtener el valor del input y eliminar espacios

    // Verificar si el campo está vacío
    if (nombreDeAmigo === "") {
        alert("Por favor, ingrese un nombre."); // Alerta si no se ha ingresado un nombre
        return; // Salir de la función
    } 

    // Validar que el nombre solo contenga letras
    if (!validarNombre(nombreDeAmigo)) {
        alert("El nombre solo debe contener letras."); // Alerta si el nombre contiene caracteres no válidos
        return; // Salir de la función
    }

    // Convertir el nombre a minúsculas para la comparación
    let nombreEnMinusculas = nombreDeAmigo.toLowerCase();

    // Verificar si el nombre ya existe en la lista (sin importar mayúsculas/minúsculas)
    if (!amigos.map(nombre => nombre.toLowerCase()).includes(nombreEnMinusculas)) {
        amigos.push(nombreDeAmigo); // Agregar el nombre a la lista de amigos
        document.getElementById('listaAmigos').innerHTML += `<li>${nombreDeAmigo}</li>`; // Mostrar el nombre en la lista
        document.getElementById('amigo').value = ""; // Limpiar el campo de entrada
        verificarEntradaDeAmigo(); // Verificar nuevamente la entrada para habilitar/deshabilitar el botón
    } else {
        alert("Este nombre ya fue agregado."); // Alerta si el nombre ya existe
    }
}

// Sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Por favor, añade algunos nombres."); // Alerta si no hay amigos
        return; // Salir de la función
    }

    // Lógica para sortear un amigo
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    
    // Mostrar el nombre en "incógnito"
    let nombreOculto = 'x'.repeat(amigoSorteado.length); // Crear una cadena de 'x' del mismo tamaño que el nombre
    document.getElementById('resultado').innerHTML = `<li>${nombreOculto}</li>`; // Mostrar el nombre oculto

    // Eliminar el amigo sorteado de la lista
    amigos = amigos.filter(nombre => nombre !== amigoSorteado); // Filtrar el amigo sorteado
    document.getElementById('listaAmigos').innerHTML = amigos.map(nombre => `<li>${nombre}</li>`).join(''); // Actualizar la lista de amigos

    // Mostrar el nombre real después de un breve retraso
    setTimeout(() => {
        document.getElementById('resultado').innerHTML = `<li>${amigoSorteado}</li>`; // Mostrar el amigo sorteado
    }, 2000); // Cambiar el nombre después de 2 segundos
}