function calcularPromedio(numeros) {
    let suma = 0
    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i]
    }
    
    let promedio = suma / numeros.length
    return promedio
}

let calificaciones = [85, 90, 78, 92, 88]
let promedio1 = calcularPromedio(calificaciones)
console.log('Calificaciones: [' + calificaciones + ']')
console.log('Promedio de calificaciones: ' + promedio1)

let edades = [15, 17, 16, 18]
let promedio2 = calcularPromedio(edades)
console.log('Edades: [' + edades + ']')
console.log('Promedio de edades: ' + promedio2)
