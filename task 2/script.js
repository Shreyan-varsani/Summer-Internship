const taskInput =
document.getElementById("taskInput");

const taskDate =
document.getElementById("taskDate");

const taskTime =
document.getElementById("taskTime");

const priority =
document.getElementById("priority");

const taskList =
document.getElementById("taskList");

const today =
new Date().toISOString().split("T")[0];

taskDate.min = today;

let tasks =
JSON.parse(
localStorage.getItem("missions")
) || [];

renderTasks();

document
.getElementById("addBtn")
.addEventListener(
"click",
addTask
);

function addTask(){

const title =
taskInput.value.trim();

const date =
taskDate.value;

const time =
taskTime.value;

const level =
priority.value;

if(
!title ||
!date ||
!time
){
alert(
"Fill all fields"
);
return;
}

const selected =
new Date(
date + "T" + time
);

if(
selected < new Date()
){
alert(
"Cannot select past date or time"
);
return;
}

tasks.push({

id:Date.now(),

title,

date,

time,

priority:level,

completed:false

});

saveTasks();

taskInput.value="";
taskDate.value="";
taskTime.value="";

renderTasks();
}

function renderTasks(
filter="all"
){

taskList.innerHTML="";

let filtered =
tasks;

if(filter!=="all"){

filtered =
tasks.filter(
task=>
task.priority===filter
);

}

const searchText =
document
.getElementById(
"searchInput"
)
.value
.toLowerCase();

filtered =
filtered.filter(
task=>

task.title
.toLowerCase()
.includes(searchText)

);

filtered.forEach(task=>{

const li =
document.createElement("li");

li.className =
`task ${task.priority}`;

const deadline =
new Date(
task.date + "T" + task.time
);

const now =
new Date();

let countdownText="";

if(deadline > now){

const diff =
deadline - now;

const days =
Math.floor(
diff /
(1000*60*60*24)
);

const hours =
Math.floor(
(diff %
(1000*60*60*24))
/
(1000*60*60)
);

countdownText =
`${days}d ${hours}h left`;

}
else{

countdownText =
"Overdue";
}

li.innerHTML=`

<div class="task-info">

<div class="task-title
${task.completed ?
'completed':''}
">

${task.title}

</div>

<div class="task-meta">

📅 ${task.date}

⏰ ${task.time}

</div>

<div class="countdown
${countdownText==='Overdue'
?
'overdue'
:
''}">

${countdownText}

</div>

</div>

<div class="actions">

<button
class="complete-btn">

✓

</button>

<button
class="delete-btn">

🗑

</button>

</div>

`;

li
.querySelector(
".complete-btn"
)
.onclick=()=>{

task.completed =
!task.completed;

saveTasks();

renderTasks();
};

li
.querySelector(
".delete-btn"
)
.onclick=()=>{

tasks =
tasks.filter(
t =>
t.id !== task.id
);

saveTasks();

renderTasks();
};

taskList
.appendChild(li);

});

updateStats();
}

function updateStats(){

const total =
tasks.length;

const completed =
tasks.filter(
task =>
task.completed
).length;

const pending =
total - completed;

document
.getElementById(
"totalTasks"
)
textContent = total;

document
.getElementById(
"completedTasks"
)
textContent = completed;

document
.getElementById(
"pendingTasks"
)
textContent = pending;

const percent =
total===0
? 0
:
(completed/total)*100;

document
.getElementById(
"progressBar"
)
.style.width =
percent + "%";

if(
completed===total &&
total>0
){

setTimeout(()=>{

alert(
"🎉 All Missions Completed!"
);

},300);

}
}

function saveTasks(){

localStorage.setItem(
"missions",
JSON.stringify(tasks)
);

}

document
.getElementById(
"searchInput"
)
.addEventListener(
"keyup",
()=>{

renderTasks();

});

document
.querySelectorAll(
".filter-btn"
)
.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

renderTasks(
btn.dataset.filter
);

});

});