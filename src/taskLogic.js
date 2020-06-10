import { addTaskDOM } from './domEvents'  
import { currentProject } from './projectLogic'

const allTasks = [];

const Task = (title, priority, project, due, description) => {
    const addTaskToList = (position) => addTaskDOM(title, priority, project, due, description, position);
    const getProject = () => project;

    return { addTaskToList, getProject }
};

const createTask = (title, priority, project, due, description) => {
    const newTask = Task(title, priority, project, due, description);
    allTasks.push(newTask);
    saveTasks();
    renderTasks();
};

const removeTask = (task) => {
    allTasks.splice(task.dataset.position, 1);
    renderTasks();
};

const renderTasks = () => {
    let currentList = document.getElementById('list')
    currentList.innerHTML = '';
    for (let i = 0; i < allTasks.length; i++) {
        let currentTask = allTasks[i];
        let taskProject = allTasks[i].getProject();
        let position = i;
        if (currentProject === 'All tasks') {
            currentTask.addTaskToList(position);
        } else if (taskProject === currentProject) {
            currentTask.addTaskToList(position);
        };
    };
};

const saveTasks = () => {
    localStorage.setItem('savedTasks', JSON.stringify(allTasks));
};

const loadTasks = (() => {
    const retrieveTasks = JSON.parse(localStorage.getItem("savedTasks") || "[]");
    console.log(retrieveTasks);
    //renderTasks();
})();

export {
    allTasks,
    createTask,
    removeTask,
    renderTasks
};