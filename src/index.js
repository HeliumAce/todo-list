import { highlightCurrentProject } from './domEvents';
import { allTasks, createTask } from './taskLogic';
import { allProjects, renderProjects } from './projectLogic';

renderProjects();
highlightCurrentProject();

const loadTasks = (() => {
    for (let i=0; i<window.localStorage.length; i++) {
        const retrieveTasks = JSON.parse(localStorage.getItem("savedTasks"+i));
        console.log(retrieveTasks);
        console.log(retrieveTasks.title, retrieveTasks.priority, retrieveTasks.project, retrieveTasks.due, retrieveTasks.description);
        createTask(retrieveTasks.title, retrieveTasks.priority, retrieveTasks.project, retrieveTasks.due, retrieveTasks.description);
    };
    console.log(allTasks);
    //renderTasks();
})();

/*const projectsList = document.getElementById('userProjects')

localStorage.setItem('projectsInList', projectsList.innerHTML);
const currentProjects = localStorage.getItem('projectsInList');
console.log(currentProjects);*/