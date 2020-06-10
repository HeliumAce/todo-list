import { addTaskDOM } from './domEvents'  
import { currentProject, saveProjects } from './projectLogic'

const allTasks = [];

const Task = (title, priority, project, due, description) => {
    const addTaskToList = (position) => addTaskDOM(title, priority, project, due, description, position);
    const getTitle = () => title;
    const getPriority = () => priority;
    const getProject = () => project;
    const getDue = () => due;
    const getDescription = () => description;

    return { addTaskToList, getTitle, getPriority, getProject, getDue, getDescription }
};

const createTask = (title, priority, project, due, description) => {
    const newTask = Task(title, priority, project, due, description);
    allTasks.push(newTask);
    saveTasks();
    renderTasks();
};

const removeTask = (task) => {
    window.localStorage.clear();
    saveProjects();
    allTasks.splice(task.dataset.position, 1);
    saveTasks();
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
    for (let i=0; i<allTasks.length; i++) {
        localStorage.setItem('savedTasks'+i, JSON.stringify({
            title: allTasks[i].getTitle(),
            priority: allTasks[i].getPriority(),
            project: allTasks[i].getProject(),
            due: allTasks[i].getDue(),
            description: allTasks[i].getDescription(),
        }));  
    };
};


export {
    allTasks,
    createTask,
    removeTask,
    renderTasks
};