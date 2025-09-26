function sumarArreglo(numeros) {
    let suma = 0
    
    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i]
    }
    
    return suma
}

let arreglo1 = [1, 2, 3, 4, 5]
let resultado1 = sumarArreglo(arreglo1)
console.log('La suma de [1, 2, 3, 4, 5] es: ' + resultado1)

let arreglo2 = [10, 20, 30]
let resultado2 = sumarArreglo(arreglo2)
console.log('La suma de [10, 20, 30] es: ' + resultado2)
