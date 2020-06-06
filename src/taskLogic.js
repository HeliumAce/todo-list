import { addTaskDOM } from './domEvents'

const allTasks = [];

const Task = (title, priority) => {
    const addTaskToList = (position) => addTaskDOM(title, priority, position);
    const getTitle = () => title;
    const getPriority = () => priority;
    return { addTaskToList, getTitle, getPriority }
};

const createTask = (title, priority) => {
    const newTask = Task(title, priority);
    allTasks.push(newTask);
    render();
};

const removeTask = (task) => {
    allTasks.splice(task.dataset.position, 1);
    render();
};

const render = () => {
    let currentList = document.getElementById('list')
    currentList.innerHTML = '';
    for (let i = 0; i < allTasks.length; i++) {
        let currentTask = allTasks[i];
        let position = i;
        currentTask.addTaskToList(position);
    }
};

export {
    createTask,
    removeTask
};