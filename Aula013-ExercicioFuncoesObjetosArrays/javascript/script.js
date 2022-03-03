function escopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    //onde depositaremos as informações do form
    const pessoasSalvas = [];
    

    function handleForm(event) {
        event.preventDefault();

        //            diminuindo o escopo da busca para o que ta dentro de form
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');
        const peso = form.querySelector('.peso');


        pessoasSalvas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value,
            peso: peso.value
        })

        resultado.innerHTML +=`
        <h2>${nome.value} ${sobrenome.value}</h2>
        <p>Tem ${idade.value} anos e pesa ${peso.value} Kgs</p>
        `
    }

    form.addEventListener('submit', handleForm);
}
escopo()