const createDOM = () => {

    const container = document.getElementById('container');
    const header = document.createElement('header');
    const navigation = document.createElement('nav');
    const main = document.createElement('main');

    main.setAttribute('id', 'main');

    container.appendChild(header);
    container.appendChild(navigation);
    container.appendChild(main);

    return { addDOMList, addDOMTask }
    
};

const addDOMList = () => {
    const main = document.getElementById('main');
    const list = document.createElement('div');
    list.setAttribute('id', 'list');
    main.appendChild(list);
};

const addDOMTask = (title) => {
    const list = document.getElementById('list');
    const task = document.createElement('div');
    const taskTitle = document.createElement('div');


    task.setAttribute('class', 'task');
    taskTitle.setAttribute('class', 'taskTitle');

    taskTitle.innerHTML = title;

    list.appendChild(task);
    task.appendChild(taskTitle);
}

export {
    createDOM,
    addDOMList,
    addDOMTask
}

//createDOM.addDOMList();
//createDOM.addDOMTask();


