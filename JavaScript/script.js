let tasks = [];

function idGenerator(){
    return Math.floor(Math.random() * 9000);
};

function creatMyTask(){
    let taskName = document.getElementById('inputStyle').value;

    let task = {
        id: idGenerator(),
        name: taskName
    };

    if(taskName == '' || !taskName.trim()){
        return alert('please, enter a valid name for your task!');
    }

    else{
    tasks.push(task);
    addLocalStorage(tasks);
    };
};

let inputStyle = document.getElementById('inputStyle');
inputStyle.addEventListener('keydown', function(event){
    if (event.key == "Enter") {
        creatMyTask();
    };
});

function updateScreen(){
    let list = '<ul>'

    tasks.forEach(task => {
        list += '<li id=' + task.id + '><h3 id="nameTask">' + task.name + '</h3><div><button class="action" onclick=deleteTask(this) id= ' + task.id + '><i class="fa fa-trash"></i></button></div></li>';
    });
    list += '</ul>';

document.getElementById('tasksList').innerHTML = list;
document.getElementById('inputStyle').value = '';

};

function deleteTask(element){
    let confirmation = window.confirm('Are you sure you want to delete this task?');
    if(confirmation){
    tasks = tasks.filter(task=>task.id!=element.getAttribute('id'));
    };
    addLocalStorage(tasks);
};

function cleanAll(){
    let confirmation = window.confirm('Are you sure you want to delete all tasks?');
    if (confirmation){
    tasks = [];
    };
    addLocalStorage(tasks);
};

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