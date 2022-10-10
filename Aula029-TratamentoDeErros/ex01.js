function sum(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números');
    }

    return x + y;
}

try {
    console.log(sum(4, 5))
    console.log(sum(4, '5'))

} catch(error) {
    console.log(error)
    console.log('Algo de inesperado ocorreu');
}