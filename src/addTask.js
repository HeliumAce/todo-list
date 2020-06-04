import { addDOMTask } from './loader'

const newTask = () => {
    addDOMTask(prompt('What do you need to do?'));
    //addDOMTask('Here is a title');
}

export {
    newTask
}