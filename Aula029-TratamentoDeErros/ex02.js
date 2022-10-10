function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de de Date.')
    }

    if (!data) {
        data = new Date()
    }


    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    })
}

try {
    const dataTest = new Date('01-01-1970 12:58:45')
    const hora = retornaHora();
    console.log(hora)

} catch (e) {
    //tratameto de erro
    console.log(e)

} finally {
    console.log('Hava a nice day!')
}