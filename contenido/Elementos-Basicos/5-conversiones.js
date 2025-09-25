/**
 * Conversiones -> explicitas e implicitas
 * 
 */

// conversion explicita type casting
const String = "54"
const numero = parseInt(String)
console.log(typeof tring)
console.log(typeof numero)

const float = parseFloat(3.14)
console.log(typeof float)

const binario = '1010'
const decimal = parseInt(binario, 2)
console.log(decimal)

const hexa = 'CAFE'
const decimalhex = parseInt(hexa, 16)
console.log(decimalhex)

//conversion implicita
const resultado = 5 + '5'
console.log(resultado)
console.log(typeof resultado)

const sumaBoolean = '3' + true
console.log(sumaBoolean)
const sumaConNumero = 2 + true
console.log(sumaConNumero)
const valorString = '20'
const valorNumero = 10
const valorBoolean = true
console.log('---Conversion implicita---')
console.log(valorString + valorString)
console.log(valorString + valorNumero)
console.log(valorString + valorBoolean)

console.log(valorNumero + valorNumero)
console.log(valorNumero + valorString)
console.log(valorNumero + valorBoolean)

console.log(valorBoolean + valorBoolean)
console.log(valorBoolean + valorString)