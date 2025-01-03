const inputBox = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
function addTask(){
    if(inputBox.value === '')
    {
        alert('Please enter something in text box');
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskList.appendChild(li);
        inputBox.value = '';
        let span = document.createElement("span");
        span.innerHTML = '\u00d7'
        li.appendChild(span);
        save();
    }
}
const taskInput = document.getElementById('taskInput');
  
  // Add an event listener for keydown
taskInput.addEventListener('keydown', function(event) {
if (event.key === 'Enter') {
    addTask();
    // event.preventDefault(); // Prevents default form submission (if inside a form)
}
});

taskList.addEventListener("click", (e) =>
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
    }
    save();
}, false)
function save(){
    localStorage.setItem("data", taskList.innerHTML)
}
function showTask(){
    let data = localStorage.getItem("data");
    if(data)
    {
        taskList.innerHTML = data;
    }
}

showTask();