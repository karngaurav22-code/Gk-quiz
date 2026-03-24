let currentUser = null;

function switchTab(tab){

document.querySelectorAll(".tab-page").forEach(p=>p.classList.remove("active"));

document.querySelectorAll(".nav-tab").forEach(b=>b.classList.remove("active"));

document.getElementById("page-"+tab).classList.add("active");

document.getElementById("tab-"+tab).classList.add("active");

}



function buildTopicGrid(){

const topics=[...new Set(QDATA.map(q=>q.topic))];

let html="";

topics.forEach(t=>{

html+=`
<div class="topic-card" onclick="selectTopic('${t}')">

<div class="tc-name">${t}</div>

</div>
`;

});

document.getElementById("topicGrid").innerHTML=html;

}



let selectedTopic=null;

function selectTopic(t){

selectedTopic=t;

document.getElementById("startBtn").disabled=false;

}



let quiz=[];

let qIndex=0;

let score=0;



function startQuiz(){

quiz=QDATA.filter(q=>q.topic===selectedTopic);

qIndex=0;

score=0;

switchTab("quiz");

loadQ();

}



function loadQ(){

let q=quiz[qIndex];

document.getElementById("qText").innerText=q.q;



let html="";

q.opts.forEach((o,i)=>{

html+=`
<button class="opt-btn" onclick="answer(${i})">

${o}

</button>
`;

});

document.getElementById("optsList").innerHTML=html;

}



function answer(i){

if(i===quiz[qIndex].ans){

score++;

}



nextQ();

}



function nextQ(){

qIndex++;



if(qIndex>=quiz.length){

alert("score: "+score);

switchTab("home");

return;

}



loadQ();

}



document.addEventListener("DOMContentLoaded",()=>{

buildTopicGrid();

});
