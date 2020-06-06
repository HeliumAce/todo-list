import { addTaskDOM } from './domEvents'  

const allTasks = [];

const Task = (title, priority, project) => {
    const addTaskToList = (position) => addTaskDOM(title, priority, project, position);
    const getTitle = () => title;
    const getPriority = () => priority;
    const getProject = () => project;
    return { addTaskToList, getProject }
};

const createTask = (title, priority, project) => {
    const newTask = Task(title, priority, project);
    allTasks.push(newTask);
    render();
    console.log(newTask.getProject());
    console.log(allTasks);
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