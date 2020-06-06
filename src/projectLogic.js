import { addProjectsDOM } from './domEvents'

const allProjects = [];
let currentProject = 'All tasks';

const renderProjects = () => {
    const projectList = document.getElementById('userProjects');
    projectList.innerHTML = '';
    for (let i = 0; i < allProjects.length; i++) {
        let project = allProjects[i]
        addProjectsDOM(project);
    }
};

const createProject = (project) => {
    allProjects.push(project);
    renderProjects();
    console.log(allProjects)
};

const setCurrentProject = (projectNav) => {
    currentProject = projectNav.id
    console.log(currentProject);
}

export {
    renderProjects,
    createProject,
    setCurrentProject
};