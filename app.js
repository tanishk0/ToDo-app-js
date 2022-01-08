const addBtn = document.querySelector('.to-do-input span');
const input = document.querySelector('.to-do-input input');
const completedBtn = document.querySelector('.to-dos li span');

// Adding a task
addBtn.addEventListener('click', addItem);

function addItem(e){
    const ToDos = document.querySelector('.to-dos');
    const newLi = document.createElement('li');
    const checkBtn = document.createElement('span');
    const newP = document.createElement('p');
    const checkIcon = document.createElement('img');
    checkIcon.src = '../images/icon-check.svg';
    const delBtn = document.createElement('span.delete');
    delBtn.innerHTML = '<img class="delete" src="../images/icon-cross.svg">';

    const items = document.querySelector('.items');
    const completedTasks = document.querySelector('.completed');
    const allTasks = document.querySelector('.all');
    const activeTasks = document.querySelector('.active');
    const clearComp = document.querySelector('.clear-comp');
    
    let todoCount = 0;
    // Adding new task
    if(input.value !== ''){
        newP.textContent = input.value;
        input.value = '';
        ToDos.appendChild(newLi); 
        newLi.appendChild(checkBtn);
        newLi.appendChild(newP);
        newLi.appendChild(delBtn);
    }
    //increase todo count on adding a new task
    if(newLi.classList !== 'complete'){
        todoCount+=1;
    }
    else{
        todoCount--;
    }
    items.innerHTML = todoCount + ' items left';
    // Completing a task
    checkBtn.addEventListener('click', function(){
        newP.style.textDecoration = 'line-through';
        newP.style.color = 'hsl(234, 11%, 52%)';
        newLi.classList.add('complete');
        checkBtn.classList.add('comp');
        checkBtn.appendChild(checkIcon);
    });
    // deleting a task
    delBtn.addEventListener('click', ()=>{
        newLi.remove()
    });
    // hiding completed task on clicking
    completedTasks.addEventListener('click', ()=>{
        if(newLi.classList == 'complete'){
            newLi.style.display = 'flex';
        }
        else{
            newLi.style.display = 'none';
        }
        completedTasks.style.color = 'rgb(71,71,255)';
        activeTasks.style.color = 'hsl(234, 11%, 52%)';
        allTasks.style.color = 'hsl(234, 11%, 52%)';
    });
    // showing all tasks
    allTasks.addEventListener('click', ()=>{
        newLi.style.display = 'flex';
        completedTasks.style.color = 'hsl(234, 11%, 52%)';
        activeTasks.style.color = 'hsl(234, 11%, 52%)';
        allTasks.style.color = 'rgb(71,71,255)';
    });
    //showing active tasks  only
    activeTasks.addEventListener('click', ()=>{
        if(newLi.classList == 'complete'){
            newLi.style.display = 'none';
        }
        else{
            newLi.style.display = 'flex';
        }
        completedTasks.style.color = 'hsl(234, 11%, 52%)';
        activeTasks.style.color = 'rgb(71,71,255)';
        allTasks.style.color = 'hsl(234, 11%, 52%)';
    });
    clearComp.addEventListener('click', ()=>{
        if(newLi.classList == 'complete'){
            newLi.remove();
        }
    })
}
















