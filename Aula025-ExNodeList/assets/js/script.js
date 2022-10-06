const paragraphs = document.querySelector('.paragraphs');
const ps = paragraphs.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody)

for (p of ps) {
    console.log(p)
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#fff'; 
}