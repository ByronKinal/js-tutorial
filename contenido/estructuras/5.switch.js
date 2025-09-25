let comprar = 'Mangos';

switch (comprar) {
    case "Naranjas":
        console.log('las naranjas esta a Q10 la mano')
        break;
    case"Manzanas":
        console.log('las manzanas cuesta Q5 la unidad')
        break
    case"Platanos":
        console.log('las platanos cuesta Q15 la unidad')
        break
    case 'Mangos':
    case 'Papayas':
    console.log(`Los mangos y las papayas valen Q20`)    
    break
    default:
        console.log(`lo sentimos no contamos con ${comprar}`)
        break;
}