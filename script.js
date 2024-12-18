// Función para agregar valores a la pantalla
function agregar(valor) {
    let pantalla = document.getElementById('pantalla');
    pantalla.value += valor;
}


// Función para borrar pantalla
function borrar() {
    let pantalla = document.getElementById('pantalla');
    pantalla.value = '';
}

// Función para calcular el resultado
function calcular() {
    let pantalla = document.getElementById('pantalla');
    let resultado = eval(pantalla.value); 
    pantalla.value = resultado; 
}


// Función para cambiar entre modo oscuro y claro
document.getElementById('toggleMode').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    const modo = document.body.classList.contains('light-mode') ? 'Modo Claro' : 'Modo Oscuro';
    document.getElementById('modo').textContent = modo;
});


// Función para habilitar el teclado
document.addEventListener('keydown', function(event) {
    if (event.key >= 0 && event.key <= 9) {
        agregar(event.key); // Agregar números
    } else if (event.key === 'Enter') {
        calcular(); // Calcular con Enter
    } else if (event.key === 'Backspace') {
        borrar(); // Borrar con Backspace
    } else if ('+-*/.'.includes(event.key)) {
        agregar(event.key); // Agregar operadores
    }
});
