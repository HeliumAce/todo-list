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
    const dueDate = document.getElementById('dueDate');
    const description = document.getElementById('description');
    submitTaskButton.addEventListener('click', (e) => {
        //console.log(taskName.value);
        createTask(taskName.value, taskPriority.value, projectName.value, dueDate.value, description.value);
        hideModal();
        e.preventDefault();
    });
})();

const addTaskDOM = (title, priority, project, due, description, position) => {
    const list = document.getElementById('list');   
    const task = document.createElement('div');
    const taskTop = document.createElement('div');
    const taskBottom = document.createElement('div');
    const taskRadio = document.createElement('input');
    const taskTitle = document.createElement('div');
    const taskProject = document.createElement('div');
    const taskPriority = document.createElement('div');
    const taskDue = document.createElement('div');
    const taskDescription = document.createElement('div');

    taskRadio.type = 'radio';

    task.setAttribute('class', 'task');
    task.setAttribute('data-position', position);
    taskTop.setAttribute('class', 'taskTop');
    taskBottom.setAttribute('class', 'taskBottom');
    taskRadio.setAttribute('class', 'taskRadio');
    taskTitle.setAttribute('class', 'taskTitle');
    taskProject.setAttribute('class', 'taskProject');
    taskPriority.setAttribute('class', 'taskPriority');
    taskDue.setAttribute('class', 'taskDue');
    taskDescription.setAttribute('class', 'taskDescription');

    taskTitle.innerHTML = title;
    taskPriority.innerHTML = `<strong>Priority: </strong> ${priority}`;
    taskProject.innerHTML = `<strong>Project: </strong> ${project}`;
    taskDue.innerHTML = `<strong>Complete by: </strong> ${due}`;
    taskDescription.innerHTML = `<strong>Description: </strong><br> <p>${description}</p>`;;

    list.appendChild(task);
    task.appendChild(taskTop);
    task.appendChild(taskBottom);
    taskTop.appendChild(taskRadio);
    taskTop.appendChild(taskTitle);
    taskTop.appendChild(taskProject);
    taskTop.appendChild(taskPriority);
    taskTop.appendChild(taskDue);
    taskBottom.appendChild(taskDescription);

    task.addEventListener('click', () => {
        expandDescription(taskBottom);
    });
    
    taskRadio.addEventListener('click', () => {
        removeTask(task);
    });
};

const expandDescription = (taskBottom) => {
    if (taskBottom.style.display === 'block') {
        taskBottom.style.display = 'none';
    } else {
        taskBottom.style.display = 'block';
    };
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

export {
    addTaskDOM,
    addProjectsDOM
};


