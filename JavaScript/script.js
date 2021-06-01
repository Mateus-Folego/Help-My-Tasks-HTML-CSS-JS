
let tasks = [];

function idGenerator(){

    return Math.floor(Math.random() * 1000)
};

function creatMyTask(){
    let taskName = document.getElementById('inputStyle').value;

    let task = {
        id: idGenerator(),
        name: taskName
    };

tasks.push(task);

addLocalStorage(tasks);

};

function updateScreen(){
    let list = '<ul>';

    tasks.forEach(task => {
        list += '<li id='+task.id+'>'+task.name+'<button class="action" onclick=deleteTask(this) id= '+task.id+'><i class="fa fa-trash"></i></button></li>';
    });

    list += "</ul>";
    
document.getElementById('tasksList').innerHTML = list;
document.getElementById('inputStyle').value = '';

};

function deleteTask(element){
    tasks = tasks.filter(task=>task.id!=element.getAttribute('id'));
 
    addLocalStorage(tasks);

};

function cleanAll(){
    tasks = [];
    addLocalStorage(tasks);
}

function addLocalStorage(tasks){
    localStorage.setItem('tasks', JSON.stringify(tasks));

    updateScreen();
};

function getFromLocalStorage(){
    const tasksload = localStorage.getItem('tasks');

    if(tasksload){
        tasks = JSON.parse(tasksload);

        updateScreen();

    };  
};

getFromLocalStorage();
