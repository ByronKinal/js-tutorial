var palabras = [
    'JAVASCRIPT', 'PROGRAMACION', 'DESARROLLO', 'COMPUTADORA', 'TECNOLOGIA',
    'INTERNET', 'NAVEGADOR', 'ALGORITMO', 'VARIABLES', 'FUNCIONES',
    'APLICACION', 'SOFTWARE', 'HARDWARE', 'SISTEMAS', 'PROYECTO',
    'CODIGO', 'LENGUAJE', 'FRAMEWORK', 'BIBLIOTECA', 'SERVIDOR'
];

var palabraSecreta = '';
var palabraConGuiones = [];
var letrasYaUsadas = [];
var intentosQueFaltan = 7;
var juegoAcabado = false;

var partesDelCuerpo = ['cabeza', 'cuerpo', 'pierna-izquierda', 'pierna-derecha', 'brazo-izquierdo', 'brazo-derecho'];

function empezarJuego() {
    palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
    palabraConGuiones = [];
    
    for (var i = 0; i < palabraSecreta.length; i++) {
        palabraConGuiones.push('_');
    }
    
    letrasYaUsadas = [];
    intentosQueFaltan = 7;
    juegoAcabado = false;
    
    mostrarPalabraEnPantalla();
    crearBotonesDeLetras();
    mostrarIntentosRestantes();
    mostrarLetrasUsadas();
    esconderMensaje();
    esconderPartesDelCuerpo();
}

function crearBotonesDeLetras() {
    var letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    var contenedor = document.getElementById('botones-letras');
    contenedor.innerHTML = '';
    
    for (var i = 0; i < letras.length; i++) {
        var letra = letras[i];
        var boton = document.createElement('button');
        boton.innerHTML = letra;
        boton.setAttribute('class', 'boton-letra');
        boton.setAttribute('onclick', 'probarLetra("' + letra + '")');
        contenedor.appendChild(boton);
    }
}

function probarLetra(letra) {
    if (juegoAcabado) return;
    
    for (var i = 0; i < letrasYaUsadas.length; i++) {
        if (letrasYaUsadas[i] === letra) return;
    }
    
    letrasYaUsadas.push(letra);
    
    var laLetraEstaEnLaPalabra = false;
    for (var i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] === letra) {
            palabraConGuiones[i] = letra;
            laLetraEstaEnLaPalabra = true;
        }
    }
    
    var botonQueSeClickeo = buscarBoton(letra);
    botonQueSeClickeo.disabled = true;
    
    if (laLetraEstaEnLaPalabra) {
        botonQueSeClickeo.className = 'boton-letra correcto';
        verificarSiGane();
    } else {
        botonQueSeClickeo.className = 'boton-letra incorrecto';
        restarIntento();
    }
    
    mostrarPalabraEnPantalla();
    mostrarLetrasUsadas();
}

function restarIntento() {
    intentosQueFaltan--;
    mostrarIntentosRestantes();
    dibujarParteDelCuerpo();
    
    if (intentosQueFaltan === 0) {
        perdi();
    }
}

function dibujarParteDelCuerpo() {
    var cualParte = 7 - intentosQueFaltan - 1;
    if (cualParte >= 0 && cualParte < partesDelCuerpo.length) {
        var parte = document.getElementById(partesDelCuerpo[cualParte]);
        parte.className = 'parte-cuerpo';
    }
}

function verificarSiGane() {
    var yaAdivineTodo = true;
    for (var i = 0; i < palabraConGuiones.length; i++) {
        if (palabraConGuiones[i] === '_') {
            yaAdivineTodo = false;
            break;
        }
    }
    
    if (yaAdivineTodo) {
        gane();
    }
}

function gane() {
    juegoAcabado = true;
    var intentosQueUse = 7 - intentosQueFaltan;
    mostrarMensaje('¡Felicidades! Adivinaste la palabra "' + palabraSecreta + '" en ' + intentosQueUse + ' intentos', 'ganar');
    deshabilitarTodosLosBotones();
}

function perdi() {
    juegoAcabado = true;
    mostrarMensaje('¡Perdiste! La palabra era: "' + palabraSecreta + '"', 'perder');
    deshabilitarTodosLosBotones();
    
    for (var i = 0; i < palabraSecreta.length; i++) {
        palabraConGuiones[i] = palabraSecreta[i];
    }
    mostrarPalabraEnPantalla();
}

function mostrarPalabraEnPantalla() {
    var contenedor = document.getElementById('palabra-secreta');
    contenedor.innerHTML = '';
    
    for (var i = 0; i < palabraConGuiones.length; i++) {
        var espacio = document.createElement('div');
        espacio.className = 'espacio-letra';
        espacio.textContent = palabraConGuiones[i] === '_' ? '' : palabraConGuiones[i];
        contenedor.appendChild(espacio);
    }
}

function mostrarIntentosRestantes() {
    document.getElementById('intentos').textContent = intentosQueFaltan;
}

function mostrarLetrasUsadas() {
    var texto = letrasYaUsadas.length === 0 ? 'Ninguna' : letrasYaUsadas.join(', ');
    document.getElementById('letras-usadas').textContent = texto;
}

function mostrarMensaje(texto, tipo) {
    var mensaje = document.getElementById('mensaje');
    mensaje.textContent = texto;
    mensaje.className = tipo;
}

function esconderMensaje() {
    var mensaje = document.getElementById('mensaje');
    mensaje.className = 'oculto';
}

function buscarBoton(letra) {
    var botones = document.getElementById('botones-letras').querySelectorAll('.boton-letra');
    for (var i = 0; i < botones.length; i++) {
        if (botones[i].textContent === letra) {
            return botones[i];
        }
    }
}

function deshabilitarTodosLosBotones() {
    var botones = document.getElementById('botones-letras').querySelectorAll('.boton-letra');
    for (var i = 0; i < botones.length; i++) {
        botones[i].disabled = true;
    }
}

function esconderPartesDelCuerpo() {
    for (var i = 0; i < partesDelCuerpo.length; i++) {
        var parte = document.getElementById(partesDelCuerpo[i]);
        parte.className = 'oculto';
    }
}

window.onload = function() {
    empezarJuego();
    document.getElementById('nuevo-juego').onclick = empezarJuego;
};