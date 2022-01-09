const form = document.getElementById('formularioTarefas');
const taskList = document.getElementById('tarefas');

form.onsubmit = function (e) {
    e.preventDefault();
    const inputField = document.getElementById('inputTask');
    if(inputField.value!=''){
        addTask(inputField.value);
    }
    else{
        alert('Tarefa vazia')
    }
    form.reset(); 
};

function addTask(description) {
    const taskContainer = document.createElement('div');
    const newTask = document.createElement('input');
    const taskLabel = document.createElement('label');
    const taskDescriptionNode = document.createTextNode(description);

    newTask.setAttribute('type', 'checkbox');
    newTask.setAttribute('class', 'confere');
    newTask.setAttribute('name', description);
    newTask.setAttribute('id', description);

    taskLabel.setAttribute('for', description);
    taskLabel.setAttribute('class', "descricaoTarefa");
    taskLabel.appendChild(taskDescriptionNode);

    taskContainer.classList.add('task-item');
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(taskLabel);

    taskList.appendChild(taskContainer);
}