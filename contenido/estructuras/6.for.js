/*for (let i = 0; i < array.length; i++) {
    const element = array[i];
}*/

let lista = ['comer','dormir','code','repetir']

for (let i = 0; i < lista.length; i++) {
//console.log(lista[i])    
}

let canasta = ['manzanas', 'naranja', 'mangos','uvas']
for (fruta of canasta) {
    //console.log(fruta)
}

const canastaDeFrutas = {
    nombre : 'manzanas',
    precio : 5,
    tipo : 'verde',
    marca : 'chanitas',

}
for (fruta in canastaDeFrutas) {
   console.log(fruta)
}

for (fruta in canastaDeFrutas) {
    console.log(`${fruta} : ${canastaDeFrutas[fruta]}`)
}

for (fruta of canastaDeFrutas) {
    console.log(fruta)
}