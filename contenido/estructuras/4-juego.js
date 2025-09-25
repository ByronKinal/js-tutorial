/**
 *         se solicite un numero a usuario para adivinar un numero secreto que sera generado aleatoriamente entre el rando 1 y 10
 */

const numeroSecreto = Math.floor(Math.random() * 11 -1  )
const numeroJugador = parseInt(prompt("adivina el numero entre 1 y 10"))
console.log(`El numero ingresado fue  ${numeroJugador}`)
if (numeroJugador == numeroSecreto) {
    console.log('felicidades ganastes')
} else if (numeroJugador < numeroSecreto){
    console.log('El numero secreto es mayor')
} else {
    console.log('El numero secreto es menor')
}
console.log('El numero secreto era '+ numeroSecreto)

