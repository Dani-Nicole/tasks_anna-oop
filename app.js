const form = document.querySelector('form')
console.log(form)
const taskList = document.querySelector('.collection');

form.addEventListener('submit', addTask)
taskList.addEventListener('click', deleteTask);

function deleteTask(e){
   if(e.target.textContent == 'X'){
       if(confirm("Do you want to delete this task?")){
           e.target.parentElement.remove();
       }
   }
}

function addTask(event) {
    // user input
    const taskText = document.querySelector('#task').value
    console.log(taskText)

    //add DOM element - begin
    let li = document.createElement('li')
    li.className ='collection-item'
    let liText = document.createTextNode(taskText)
    li.appendChild(liText)

    let a =document.createElement('a')
    a.className ="teal-text lighten-2 secondary-content"
    let aText = document.createTextNode('X')
    a.appendChild(aText)
    a.setAttribute('href', '#')

    li.appendChild(a)

    // //create link element
    // const link = document.createElement('a');
    // //set href atribute
    // link.setAttribute('href', '#')
    // //add css style
    // link.className = 'secondary-content';
    // //add x text to link
    // link.appendChild(document.createTextNode('X'));
    // //add link to <li>
    // li.appendChild(link);


    const ul = document.querySelector('ul')
    ul.appendChild(li)
    //add DOM element - begin

    //add task to localStorage
    let tasks //array for user inputs
    if(localStorage.getItem('tasks') == null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.push(taskText)
    localStorage.setItem('tasks', JSON.stringify(tasks))

    document.querySelector('#task').value = ''
    event.preventDefault()
}