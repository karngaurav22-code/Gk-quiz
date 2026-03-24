let timerInterval = null;

function startTimer(){
  let t = 30;
  const el = document.getElementById("qTimer");
  if(!el) return;
  el.textContent = t;
  el.className = "q-timer";
  clearInterval(timerInterval);
  timerInterval = setInterval(()=>{
    t--;
    el.textContent = t;
    if(t <= 10) el.className = "q-timer danger";
    else if(t <= 20) el.className = "q-timer warning";
    if(t <= 0){
      clearInterval(timerInterval);
      autoNext();
    }
  }, 1000);
}

function stopTimer(){
  clearInterval(timerInterval);
}

function autoNext(){
  const q = QST.qs[QST.idx];
  document.querySelectorAll(".opt-btn").forEach((b,i)=>{
    b.disabled = true;
    if(i === q.ans) b.classList.add("correct");
    else b.classList.add("dim");
  })
  
  QST.sel = q.ans + 1;
  QST.fail++;
  document.getElementById("explText").textContent = q.exp;
  document.getElementById("explBox").style.display = "block";
  document.getElementById("checkBtn").style.display = "none";
  const isLast = QST.idx >= QST.qs.length - 1;
  const nb = document.getElementById("nextBtn");
  nb.textContent = isLast ? "See Results →" : "Next →";
  nb.style.display = "block";
}

/* ════════ QUIZ ════════ */
function startQuiz(){
  let pool = QST.topic==="all"?[...QDATA]:QDATA.filter(q=>q.topic===QST.topic);
  if(QST.diff) pool=pool.filter(q=>q.level===QST.diff);
  if(!pool.length){ alert("No questions found! Try different settings."); return; }
  pool=pool.sort(()=>Math.random()-.5);
  QST.qs=pool.slice(0,Math.min(QST.count,pool.length)).map(q=>{
    // Shuffle options while keeping correct answer tracked
    const correctText = q.opts[q.ans]; // save correct answer TEXT
    const shuffled = [...q.opts].sort(()=>Math.random()-.5);
    const newAns = shuffled.indexOf(correctText); // find new position
    return {topic:q.topic,tn:q.tn,level:q.level,q:q.q,exp:q.exp, opts:shuffled, ans:newAns};
  });
  QST.idx=0; QST.ok=0; QST.fail=0; QST.sel=null;
  document.getElementById("quizPanel").style.display="block";
  document.getElementById("resultsPanel").style.display="none";
  // Switch to quiz page directly
  document.querySelectorAll(".tab-page").forEach(p=>p.classList.remove("active"));
  document.querySelectorAll(".nav-tab").forEach(b=>b.classList.remove("active"));
  document.getElementById("page-quiz").classList.add("active");
  renderQ();
}

function renderQ(){
  const q=QST.qs[QST.idx]; QST.sel=null;
  const pct=(QST.idx/QST.qs.length)*100;
  document.getElementById("progFill").style.width=pct+"%";
  document.getElementById("qPtext").textContent=`${QST.idx+1} / ${QST.qs.length}`;
  document.getElementById("qTopicPill").textContent=q.tn;
  const lvl=document.getElementById("lvlBadge");
  const lmap={easy:"Easy",medium:"Medium",hard:"Hard",upsc:"UPSC Level"};
  lvl.textContent=lmap[q.level]; lvl.className="lvl-badge lv-"+q.level;
  document.getElementById("qText").textContent=q.q;
  const ol=document.getElementById("optsList"); ol.innerHTML="";
  q.opts.forEach((opt,i)=>{
    const b=document.createElement("button");
    b.className="opt-btn"; b.type="button";
    b.innerHTML=`<span class="opt-ltr">${String.fromCharCode(65+i)}</span><span>${opt}</span>`;
    b.onclick=()=>pickOpt(i); ol.appendChild(b);
  });
  document.getElementById("explBox").style.display="none";
  document.getElementById("checkBtn").style.display="none";
  document.getElementById("nextBtn").style.display="none";
  //startTimer();
}

function pickOpt(i){
  if(QST.sel!==null && document.querySelectorAll(".opt-btn")[0].disabled) return;
  document.querySelectorAll(".opt-btn").forEach(b=>b.classList.remove("sel"));
  document.querySelectorAll(".opt-btn")[i].classList.add("sel");
  QST.sel=i; document.getElementById("checkBtn").style.display="block";
}

function checkAns(){
  if(QST.sel===null) return;
  //stopTimer();
  const q=QST.qs[QST.idx];
  document.querySelectorAll(".opt-btn").forEach((b,i)=>{
    b.disabled=true; b.classList.remove("sel");
    if(i===q.ans) b.classList.add("correct");
    else if(i===QST.sel) b.classList.add("wrong");
    else b.classList.add("dim");
  });
  if(QST.sel===q.ans) QST.ok++; else QST.fail++;
  document.getElementById("explText").textContent=q.exp;
  document.getElementById("explBox").style.display="block";
  document.getElementById("checkBtn").style.display="none";
  const isLast=QST.idx>=QST.qs.length-1;
  const nb=document.getElementById("nextBtn");
  nb.textContent=isLast?"See Results →":"Next →"; nb.style.display="block";
}

function nextQ(){
  QST.idx++;
  if(QST.idx>=QST.qs.length){ showResults(); return; }
  renderQ();
}

function showResults(){
  document.getElementById("quizPanel").style.display="none";
  document.getElementById("resultsPanel").style.display="block";
  const total=QST.ok+QST.fail;
  const pct=total>0?Math.round((QST.ok/total)*100):0;
  document.getElementById("resEmoji").textContent=pct>=80?"🏆":pct>=60?"🎯":"📚";
  document.getElementById("resTitle").textContent=pct>=80?"Excellent!":pct>=60?"Good Work!":"Keep Practicing!";
  document.getElementById("resSub").textContent=`${total} questions • ${QST.qs[0].tn} • Score: ${pct}%`;
  document.getElementById("ringPct").textContent=pct+"%";
  document.getElementById("rRight").textContent=QST.ok;
  document.getElementById("rWrong").textContent=QST.fail;
  document.getElementById("rTotal").textContent=total;
  const C=2*Math.PI*62;
  setTimeout(()=>{ document.getElementById("ringFg").style.strokeDashoffset=C-(pct/100)*C; },200);
  // Save to history
  saveQuizResult(pct, total);
  updateHomeBanner();
  // Writing questions
  const tid=QST.topic==="all"?null:QST.topic;
  let wqs=[];
  if(tid&&WRITING_Q[tid]) wqs=WRITING_Q[tid];
  else{ Object.values(WRITING_Q).forEach(a=>wqs.push(...a)); wqs=wqs.sort(()=>Math.random()-.5).slice(0,3); }
  const ws=document.getElementById("writingSection");
  ws.innerHTML=wqs.length?`<div class="writing-section">
    <div class="writing-sec-head"><span class="writing-badge-hd">✍️ Answer Writing</span><span style="font-size:12px;color:var(--text3)">UPSC Level — Write yourself</span></div>
    ${wqs.map((w,i)=>`<div class="writing-card"><div class="w-meta"><span class="w-num">Q.${i+1}</span><span class="w-marks">${w.marks}</span></div><div class="w-q">${w.q}</div><div class="w-hint">💭 Key points: ${w.hint}</div></div>`).join("")}
  </div>`:"";
}

function saveQuizResult(pct, total){
  const hist=getHistory();
  if(!hist[CU.username]) hist[CU.username]=[];
  hist[CU.username].unshift({
    topic: QST.qs[0]?.tn||"Mixed",
    topicId: QST.topic||"all",
    correct: QST.ok, wrong: QST.fail, total, pct,
    diff: QST.diff||"All",
    date: Date.now()
  });
  if(hist[CU.username].length>100) hist[CU.username]=hist[CU.username].slice(0,100);
  saveHistory(hist);
  pushScoreToGlobal();
}

function retryQuiz(){
  QST.idx=0; QST.ok=0; QST.fail=0; QST.sel=null;
  QST.qs=QST.qs.sort(()=>Math.random()-.5);
  document.getElementById("resultsPanel").style.display="none";
  document.getElementById("quizPanel").style.display="block";
  renderQ();
}

/* ════════ HISTORY ════════ */
/* ════════ HISTORY ════════ */
function buildHistory(){
  const hist=getHistory();
  const myHist=hist[CU.username]||[];
  // Stats
  const total=myHist.reduce((s,h)=>s+h.total,0);
  const correct=myHist.reduce((s,h)=>s+h.correct,0);
  const best=myHist.length>0?Math.max(...myHist.map(h=>h.pct)):0;
  const avg=myHist.length>0?Math.round(myHist.reduce((s,h)=>s+h.pct,0)/myHist.length):0;
  document.getElementById("myStats").innerHTML=`
    <div class="mstat"><span class="mstat-val" style="color:var(--blue)">${myHist.length}</span><span class="mstat-lbl">Total Quizzes</span></div>
    <div class="mstat"><span class="mstat-val" style="color:var(--green)">${correct}</span><span class="mstat-lbl">Total Correct</span></div>
    <div class="mstat"><span class="mstat-val" style="color:var(--yellow)">${best}%</span><span class="mstat-lbl">Best Score</span></div>
    <div class="mstat"><span class="mstat-val" style="color:var(--purple)">${avg}%</span><span class="mstat-lbl">Avg Score</span></div>
    <div class="mstat"><span class="mstat-val" style="color:var(--text2)">${total}</span><span class="mstat-lbl">Total Questions</span></div>
  `;
  const hl=document.getElementById("histList");
  if(!myHist.length){ hl.innerHTML=`<div class="empty-state"><span class="empty-icon">📋</span><div class="empty-text">No quizzes yet!<br>Start your first quiz from the Home tab.</div></div>`; return; }
  hl.innerHTML=myHist.map(h=>{
    const color=h.pct>=80?"var(--green)":h.pct>=60?"var(--yellow)":"var(--red)";
    const d=new Date(h.date);
    const ds=d.toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});
    return `<div class="hist-item">
      <div class="hist-score-ring" style="color:${color};border-color:${color}">${h.pct}%</div>
      <div class="hist-info">
        <div class="hist-topic">${h.topic}</div>
        <div class="hist-meta">✅ ${h.correct} correct &nbsp;❌ ${h.wrong} wrong &nbsp;• ${h.diff}</div>
      </div>
      <div class="hist-date">${ds}</div>
    </div>`;
  }).join("");
}

function clearMyHistory(){
  if(!confirm("Clear all your quiz history?")) return;
  const hist=getHistory();
  hist[CU.username]=[];
  saveHistory(hist);
  buildHistory(); updateHomeBanner();
}

/* ════════ LEADERBOARD (Cross-Device via Firebase) ════════ */
/* ════════ INIT ════════ */
window.addEventListener("DOMContentLoaded",()=>{
  if(!checkSession()){
    document.getElementById("authScreen").style.display="flex";
    document.getElementById("appScreen").style.display="none";
  }
  // Enter key support
  ["loginUser","loginPass"].forEach(id=>document.getElementById(id).addEventListener("keypress",e=>{ if(e.key==="Enter") doLogin(); }));
  ["regName","regUser","regPass"].forEach(id=>document.getElementById(id).addEventListener("keypress",e=>{ if(e.key==="Enter") doRegister(); }));
});
