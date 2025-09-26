// Laboratorio 3 - Ejercicios JavaScript
// Estudiante: Carnet 2024427

// Ejercicio 9: Programa que determine si un número es par o impar
// Autor: 2024427
function ejercicio9() {
    let resultado = '';
    let numero = 8;
    
    if (numero % 2 == 0) {
        resultado += 'El número ' + numero + ' es par<br>';
    } else {
        resultado += 'El número ' + numero + ' es impar<br>';
    }

    let otroNumero = 15;
    if (otroNumero % 2 == 0) {
        resultado += 'El número ' + otroNumero + ' es par<br>';
    } else {
        resultado += 'El número ' + otroNumero + ' es impar<br>';
    }
    
    document.getElementById('resultado9').innerHTML = resultado;
}

// Ejercicio 10: Función que determine si un carácter es vocal o consonante
// Autor: 2024427
function esVocalOConsonante(caracter) {
    if (caracter == 'a' || caracter == 'e' || caracter == 'i' || caracter == 'o' || caracter == 'u' || caracter == 'A' || caracter == 'E' || caracter == 'I' || caracter == 'O' || caracter == 'U') {
        return 'La letra "' + caracter + '" es una vocal';
    } else {
        return 'La letra "' + caracter + '" es una consonante';
    }
}

function ejercicio10() {
    let resultado = '';
    resultado += esVocalOConsonante('a') + '<br>';
    resultado += esVocalOConsonante('b') + '<br>';
    
    document.getElementById('resultado10').innerHTML = resultado;
}

// Ejercicio 19: Programa que encuentre el primer múltiplo de 7 en rango 1-100
// Autor: 2024427
function ejercicio19() {
    let resultado = '';
    
    for (let i = 1; i <= 100; i++) {
        if (i % 7 == 0) {
            resultado = 'El primer múltiplo de 7 es: ' + i;
            i = 100;
        }
    }
    
    document.getElementById('resultado19').innerHTML = resultado;
}

// Ejercicio 20: Función que sume todos los elementos de un arreglo
// Autor: 2024427
function sumarArreglo(numeros) {
    let suma = 0;
    
    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }
    
    return suma;
}

function ejercicio20() {
    let resultado = '';
    
    let arreglo1 = [1, 2, 3, 4, 5];
    let resultado1 = sumarArreglo(arreglo1);
    resultado += 'La suma de [1, 2, 3, 4, 5] es: ' + resultado1 + '<br>';

    let arreglo2 = [10, 20, 30];
    let resultado2 = sumarArreglo(arreglo2);
    resultado += 'La suma de [10, 20, 30] es: ' + resultado2 + '<br>';
    
    document.getElementById('resultado20').innerHTML = resultado;
}

// Ejercicio 29: Programa que ordene un arreglo de números de menor a mayor
// Autor: 2024427
function ordenarArreglo(numeros) {
    let arregloOrdenado = [];
    for (let i = 0; i < numeros.length; i++) {
        arregloOrdenado[i] = numeros[i];
    }
    
    for (let i = 0; i < arregloOrdenado.length; i++) {
        for (let j = 0; j < arregloOrdenado.length - 1; j++) {
            if (arregloOrdenado[j] > arregloOrdenado[j + 1]) {
                let temp = arregloOrdenado[j];
                arregloOrdenado[j] = arregloOrdenado[j + 1];
                arregloOrdenado[j + 1] = temp;
            }
        }
    }
    
    return arregloOrdenado;
}

function ejercicio29() {
    let resultado = '';
    
    let numeros1 = [5, 2, 8, 1, 9];
    resultado += 'Arreglo original: [' + numeros1 + ']<br>';
    let ordenado1 = ordenarArreglo(numeros1);
    resultado += 'Arreglo ordenado: [' + ordenado1 + ']<br>';
    
    document.getElementById('resultado29').innerHTML = resultado;
}

// Ejercicio 30: Función que calcule la media aritmética de un arreglo
// Autor: 2024427
function calcularPromedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }
    
    let promedio = suma / numeros.length;
    return promedio;
}

function ejercicio30() {
    let resultado = '';
    
    let calificaciones = [85, 90, 78, 92, 88];
    let promedio1 = calcularPromedio(calificaciones);
    resultado += 'Calificaciones: [' + calificaciones + ']<br>';
    resultado += 'Promedio de calificaciones: ' + promedio1 + '<br><br>';

    let edades = [15, 17, 16, 18];
    let promedio2 = calcularPromedio(edades);
    resultado += 'Edades: [' + edades + ']<br>';
    resultado += 'Promedio de edades: ' + promedio2 + '<br>';
    
    document.getElementById('resultado30').innerHTML = resultado;
}