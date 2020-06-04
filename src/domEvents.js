import { createTask } from './taskLogic'

const taskButtonClick = (() => {
    const addTaskButton = document.getElementById('addTask');
    addTaskButton.addEventListener('click', () => {
        showModal();
    });    
})();

const showModal = () => {
    const addTaskModal = document.getElementById('modalSheet');
    addTaskModal.style.display = 'block';
};

const hideModal = () => {
    const addTaskModal = document.getElementById('modalSheet');
    addTaskModal.style.display = 'none';
};

const submitButtonClick = (() => {
    const submitTaskButton = document.getElementById('submitTask');
    const taskName = document.getElementById('taskName');
    const taskPriority = document.getElementById('priority');
    //const formInputs = document.getElementsByTagName('form');
    submitTaskButton.addEventListener('click', (e) => {
        //console.log(taskName.value);
        createTask(taskName.value, taskPriority.value);
        hideModal();
        e.preventDefault();
    });
})();

const addTaskDOM = (title, priority) => {
    const list = document.getElementById('list');   
    const task = document.createElement('div');
    const taskTitle = document.createElement('div');
    const taskPriority = document.createElement('div');


    task.setAttribute('class', 'task');
    taskTitle.setAttribute('class', 'taskTitle');
    taskPriority.setAttribute('class', 'taskPriority');

    taskTitle.innerHTML = title;
    taskPriority.innerHTML = priority;

    list.appendChild(task);
    task.appendChild(taskTitle);
    task.appendChild(taskPriority);
};

export {
    addTaskDOM
};


