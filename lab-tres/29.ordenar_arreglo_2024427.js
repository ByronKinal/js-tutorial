function ordenarArreglo(numeros) {
    let arregloOrdenado = []
    for (let i = 0; i < numeros.length; i++) {
        arregloOrdenado[i] = numeros[i]
    }
    
    for (let i = 0; i < arregloOrdenado.length; i++) {
        for (let j = 0; j < arregloOrdenado.length - 1; j++) {
            if (arregloOrdenado[j] > arregloOrdenado[j + 1]) {
                let temp = arregloOrdenado[j]
                arregloOrdenado[j] = arregloOrdenado[j + 1]
                arregloOrdenado[j + 1] = temp
            }
        }
    }
    
    return arregloOrdenado
}

let numeros1 = [5, 2, 8, 1, 9]
console.log('Arreglo original: [' + numeros1 + ']')
let ordenado1 = ordenarArreglo(numeros1)
console.log('Arreglo ordenado: [' + ordenado1 + ']')
