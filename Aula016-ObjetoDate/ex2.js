function formatDate(data) {
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const hour = data.getHours();
    const min = data.getMinutes();

    return `${dia}/${mes}/${ano} ${hour}:${min} `
}

const data = new Date();
const dataBrasil = formatDate(data);

console.log(dataBrasil);