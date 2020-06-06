import { addTaskDOM } from './domEvents'  
import { currentProject } from './projectLogic'

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

export {
    createTask,
    removeTask,
    renderTasks
};