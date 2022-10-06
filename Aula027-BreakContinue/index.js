const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (number of numbers) {
    if (number === 2) {
        console.log('Pulei o num 2')
        continue;
    }

    if (number === 7) {
        console.log('parei antes do 7');
        break;
    }

    console.log(number)
}