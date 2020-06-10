import { addProjectsDOM } from './domEvents'
import { renderTasks } from './taskLogic'

const allProjects = ['All tasks'];
let currentProject = 'All tasks';

const renderProjects = () => {
    const projectList = document.getElementById('userProjects');
    const projectDropdown = document.getElementById('selectProject');
    projectList.innerHTML = '';
    projectDropdown.innerHTML = ''
    for (let i = 0; i < allProjects.length; i++) {
        let project = allProjects[i]
        addProjectsDOM(project);
    }
};

const createProject = (project) => {
    allProjects.push(project);
    renderProjects();
    saveProjects();
};

const setCurrentProject = (projectNav) => {
    currentProject = projectNav.id
    renderTasks();
};

const saveProjects = () => {
    localStorage.setItem('savedProjects', JSON.stringify(allProjects));
    //console.log(allProjects);
};

export {
    renderProjects,
    createProject,
    saveProjects,
    setCurrentProject,
    currentProject,
    allProjects
};