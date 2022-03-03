const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputPeso = event.target.querySelector("#peso");
  const inputAltura = event.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResult("Peso inválido", false);
    return;
  }

  if (!altura) {
    setResult("Altura inválida", false);
    return;
  }

  const imc = calcImc(peso, altura);
  const nivelImc = imcMessage(imc);

  const msgUserFormat = `Seu IMC é ${imc} (${nivelImc})`;

  setResult(msgUserFormat, true);
});

function calcImc(peso, altura) {
  const imc = peso / (altura ** 2);

  return imc.toFixed(2);
}

function imcMessage(imc) {
  const message = [
    "Muito abaixo do peso",
    "Abaixo do peso",
    "Peso normal",
    "Acima do peso",
    "Obesidade I",
    "Obesidade II",
    "Obesidade III",
  ];

  if (imc >= 40) return message[6];
  if (imc >= 35) return message[5];
  if (imc >= 30) return message[4];
  if (imc >= 25) return message[3];
  if (imc >= 18.5) return message[2];
  if (imc >= 17) return message[1];
  if (imc < 17) return message[0];
}

//criando paragrafo
function createParagraph() {
  const p = document.createElement("p");

  return p;
}

function setResult(msg, isValid) {
  const result = document.querySelector("#result");
  result.innerHTML = "";

  const p = createParagraph();

  if (isValid) {
    p.classList.add("p-result-right");

  } else {
    p.classList.add("p-result-wrong");
  }

  p.innerHTML = msg;

  //inserindo p na div result
  result.appendChild(p);
}
