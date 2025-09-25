/**
 * Tipo de dato number 
 */
//1. entero y decimal
const enter = 33
const decimal = 3.34
const cientifica = 5e4
const infinito = Infinity
const noEsNumero = NaN

// Operacopmes arot,etocas
// 1. suma, resta, multiplicacion y division
const suma = 5 + 6
const resta = 10 - 10
const multiplicacion = 3 * 4
const division = 16/4
const modulo = 16 % 8
const exponenciacion = 2**4
//Pa presicion en javaScript
const resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado.toFixed(1) == 0.3)
//Operaciones avanzadas
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-5)
const aleatorio = Math.floor(Math.random()*20)
console.log(aleatorio)

//lenguajes de programacion:
//Copilados:java(JVM -> .java -> .class), C, C++ (C -> .c -> .exe)
//Interpretado: javaScript -> lee -> ejecuta linea por linea

const numero = 2
const booleano = true
const texto = "hola"
//conversion implicita
console.log(numero+booleano)
