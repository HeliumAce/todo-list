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
};

const setCurrentProject = (projectNav) => {
    currentProject = projectNav.id
    renderTasks();
}

export {
    renderProjects,
    createProject,
    setCurrentProject,
    currentProject
};