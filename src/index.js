document.addEventListener("DOMContentLoaded", () => {
    taskSubmit.addEventListener('submit', addTask);
});


 const taskSubmit = document.getElementById('create-task-form')


 function addTask(e){
    e.preventDefault();
    const newTask = document.querySelector('#new-task-description').value;
    let newList = document.querySelector('#tasks');
    let newLi = document.createElement('li');
    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute("id", "delete");
    deleteBtn.innerText = " X";
    deleteBtn.addEventListener('click', () => newLi.remove());
    newLi.innerText = newTask;
    newList.append(newLi);
    newLi.append(deleteBtn);
    taskSubmit.reset();
};

function dropDown(e) {
    e.preventDefault();
    let priority = ['Low', 'Medium', 'High'];
    let select = document.createElement("select");
    select.setAttribute("id", "selector");
    for (const input of priority){
        let option = document.createElement('option');
        option.innerText = input;
        select.appendChild(option);
    }
    newLi.append(select);
    select.addEventListener('click', dropDown);
}
 
