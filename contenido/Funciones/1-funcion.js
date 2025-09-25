/**
 * 
 * Funciones -> js -> tipos de datos
 * 
 */
//como duenos de una empresa necesitamos calcular el descuento de los productos en oferta
function calcularDescuento(precio, porcentajeDescuento) {
    const descuento = (precio * porcentajeDescuento) / 100
    const precioConDescuento = precio - descuento
    return precioConDescuento
}

const precioOriginal = 1000
const porcentajeDescuento = 15
const precioFinal = calcularDescuento(precioOriginal, porcentajeDescuento)

console.log(`El precio final con descuento es: Q${precioFinal}`)
console.log(`El precio original era: Q${precioOriginal} y el descuento es de ${porcentajeDescuento}%`)