const num = Number(prompt("Digite seu número"));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = num;
texto.innerHTML = `
<p>Raiz quadrada de ${num} é ${num ** 0.5}</p>
<p>Arredondando pra BAIXO ${Math.floor(num)}</p>
<p>Arredondando pra CIMA ${Math.ceil(num)}</p>
<p>O ${num} é NaN? ${Number.isNaN(num)}</p>
<p>O ${num} é inteiro? ${Number.isInteger(num)}</p>
<p>O ${num} com duas casas decimais ${num.toFixed(2)}</p>
`