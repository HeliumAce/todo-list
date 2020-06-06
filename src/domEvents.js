import { createTask, removeTask } from './taskLogic'
import { createProject, setCurrentProject } from './projectLogic'

const taskButtonClick = (() => {
    const addTaskButton = document.getElementById('addTask');
    addTaskButton.addEventListener('click', () => {
        showModal();
    });    
})();

const showModal = () => {
    const addTaskModal = document.getElementById('addTaskModal');
    addTaskModal.style.display = 'block';
};

const hideModal = () => {
    const addTaskModal = document.getElementById('addTaskModal');
    addTaskModal.style.display = 'none';
};

const submitButtonClick = (() => {
    const submitTaskButton = document.getElementById('submitTask');
    const taskName = document.getElementById('taskName');
    const taskPriority = document.getElementById('priority');
    const projectName = document.getElementById('selectProject');
    submitTaskButton.addEventListener('click', (e) => {
        //console.log(taskName.value);
        createTask(taskName.value, taskPriority.value, projectName.value);
        hideModal();
        e.preventDefault();
    });
})();

/*const addTaskDOM = (title, priority, project, position) => {
    const list = document.getElementById('list');   
    const task = document.createElement('div');
    const taskRadio = document.createElement('input');
    const taskTitle = document.createElement('div');
    const taskPriority = document.createElement('div');

    taskRadio.type = 'radio';

    task.setAttribute('class', 'task');
    task.setAttribute('data-position', position);
    taskRadio.setAttribute('class', 'taskRadio');
    taskTitle.setAttribute('class', 'taskTitle');
    taskPriority.setAttribute('class', 'taskPriority');

    taskTitle.innerHTML = title;
    taskPriority.innerHTML = priority;

    list.appendChild(task);
    task.appendChild(taskRadio);
    task.appendChild(taskTitle);
    task.appendChild(taskPriority);

    taskRadio.addEventListener('click', () => {
        removeTask(task);
    });
};*/

const addTaskDOM = (title, priority, project, position) => {
    const list = document.getElementById('list');   
    const task = document.createElement('div');
    const taskRadio = document.createElement('input');
    const taskTitle = document.createElement('div');
    const taskPriority = document.createElement('div');

    taskRadio.type = 'radio';

    task.setAttribute('class', 'task');
    task.setAttribute('data-position', position);
    taskRadio.setAttribute('class', 'taskRadio');
    taskTitle.setAttribute('class', 'taskTitle');
    taskPriority.setAttribute('class', 'taskPriority');

    taskTitle.innerHTML = title;
    taskPriority.innerHTML = priority;

    list.appendChild(task);
    task.appendChild(taskRadio);
    task.appendChild(taskTitle);
    task.appendChild(taskPriority);

    taskRadio.addEventListener('click', () => {
        removeTask(task);
    });
};

//Projects DOM events start here

const projectButtonClick = (() => {
    const createProjectButton = document.getElementById('createProject');
    createProjectButton.addEventListener('click', () => {
        showProjectsModal();
    });    
})();

const showProjectsModal = () => {
    const createProjectModal = document.getElementById('createProjectModal');
    createProjectModal.style.display = 'block';
};

const hideProjectsModal = () => {
    const createProjectModal = document.getElementById('createProjectModal');
    createProjectModal.style.display = 'none';
};

const createProjectButtonClick = (() => {
    const createProjectButton = document.getElementById('submitProject');
    const projectName = document.getElementById('projectName');
    createProjectButton.addEventListener('click', (e) => {
        createProject(projectName.value);
        //addProjectToDropdown(projectName.value);
        hideProjectsModal();
        e.preventDefault();
    });
})();

const addProjectsDOM = (project) => {
    const projectList = document.getElementById('userProjects');
    const projectNav = document.createElement('li');
    projectNav.setAttribute('class', 'project');
    projectNav.innerHTML = project;
    projectNav.setAttribute('id', project)
    projectList.appendChild(projectNav);

    const projectSelect = document.getElementById('selectProject');
    const projectOption = document.createElement('option');
    projectOption.setAttribute('value', project);
    projectOption.innerHTML = project;
    projectSelect.appendChild(projectOption);

    projectNav.addEventListener('click', () => {
        setCurrentProject(projectNav);
    });
};

const allTasksDOM = (() => {
    const allTasks = document.getElementById('All tasks');
    allTasks.addEventListener('click', () => {
        setCurrentProject(allTasks);
    });
})();

/* const addProjectToDropdown = (projectName) => {
    const projectDropdown = document.getElementById('selectProject');
    const newProject = document.createElement('option');
    newProject.setAttribute('value', projectName);
    newProject.innerHTML = projectName;
    projectDropdown.appendChild(newProject);
} */

    /*const projectSelect = document.getElementById('selectProject');
    const projectOption = document.createElement('option');
    projectOption.setAttribute('value', project);
    projectOption.innerHTML = project;
    projectSelect.appendChild(projectOption);*/

export {
    addTaskDOM,
    addProjectsDOM
};


