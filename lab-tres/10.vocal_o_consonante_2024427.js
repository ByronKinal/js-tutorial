function esVocalOConsonante(caracter) {
    if (caracter == 'a' || caracter == 'e' || caracter == 'i' || caracter == 'o' || caracter == 'u' || caracter == 'A' || caracter == 'E' || caracter == 'I' || caracter == 'O' || caracter == 'U') {
        console.log('La letra "' + caracter + '" es una vocal')
    } else {
        console.log('La letra "' + caracter + '" es una consonante')
    }
}

esVocalOConsonante('a')
esVocalOConsonante('b')
