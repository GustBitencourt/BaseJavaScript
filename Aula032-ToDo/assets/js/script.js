const input = document.querySelector('.input_tarefa');
const btnAdd = document.querySelector('.btn_add');
const containerTarefa = document.querySelector('.tarefas');

function criaLiElement() {
    const li = document.createElement('li');
    li.classList.add('tarefaLi');

    return li;
}

function limpaInput() {
    input.value = '';
    input.focus();
}

function delButton(li) {
    li.innerText += ' ';
    const delBtn = document.createElement('button');
    delBtn.innerText = 'X';
    delBtn.setAttribute('class', 'apagar');
    delBtn.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(delBtn);
}

function criaTarefa(inputValue) {
    const li = criaLiElement();
    li.innerHTML = inputValue;

    containerTarefa.appendChild(li);
    delButton(li);
    limpaInput();
    salvaTarefas();
}

function salvaTarefas() {
    const liTarefas = containerTarefa.querySelectorAll('li');
    const listaDeTarefas = [];

    for (tarefa of liTarefas) {
        let textoTarefa = tarefa.innerText;
        //excluido o botão para adicionar ao array
        textoTarefa = textoTarefa.replace('X', '').trim();

        listaDeTarefas.push(textoTarefa);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}


input.addEventListener('keypress', (event) => {
    if(event.keyCode === 13) {
        if(!input.value) {
            alert('Nenhuma tarefa adicionada!');
            return;
        }
    }
})


btnAdd.addEventListener('click', (event) => {
    event.preventDefault();

    if(!input.value) {
        alert('Nenhuma tarefa adicionada!');
        return;
    }

    criaTarefa(input.value);
})

document.addEventListener('click', (event) => {
    const elementClicked = event.target;

    if(elementClicked.classList.contains('apagar')) {
        elementClicked.parentElement.remove();
        salvaTarefas();
    }
})

function getTarefas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}

getTarefas();