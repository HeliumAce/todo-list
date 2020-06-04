import { addTaskDOM } from './domEvents'

const Task = (title, priority) => {
    const addTaskToList = () => addTaskDOM(title, priority);
    //const addTaskToList = () => console.log('add task to list');
    console.log(title);
    return { addTaskToList }
};

const createTask = (title, priority) => {
    const newTask = Task(title, priority);
    newTask.addTaskToList();
};

export {
    createTask
}