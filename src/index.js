import { highlightCurrentProject } from './domEvents';
import { allTasks, renderTasks } from './taskLogic';
import { allProjects, renderProjects } from './projectLogic';

renderProjects();
highlightCurrentProject();

/*const projectsList = document.getElementById('userProjects')

localStorage.setItem('projectsInList', projectsList.innerHTML);
const currentProjects = localStorage.getItem('projectsInList');
console.log(currentProjects);*/