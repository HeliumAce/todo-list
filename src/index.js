import { highlightCurrentProject } from './domEvents';
import { createTask, allTasks } from './taskLogic';
import { renderProjects, allProjects, createProject } from './projectLogic';
    
    renderProjects();
    highlightCurrentProject();

const loadProjects = (() => {
    const retrieveProjects = JSON.parse(localStorage.getItem('savedProjects'));
    for (let i=1; i<retrieveProjects.length; i++) {
        createProject(retrieveProjects[i]);
    }
    renderProjects();
    highlightCurrentProject();
})();

const loadTasks = (() => {
    for (let i=0; i<window.localStorage.length; i++) {
        const retrieveTasks = JSON.parse(localStorage.getItem("savedTasks"+i));
        //console.log(retrieveTasks.title, retrieveTasks.priority, retrieveTasks.project, retrieveTasks.due, retrieveTasks.description);
        createTask(retrieveTasks.title, retrieveTasks.priority, retrieveTasks.project, retrieveTasks.due, retrieveTasks.description);
    };
})();