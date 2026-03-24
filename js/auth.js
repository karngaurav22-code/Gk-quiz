/* ════════ STATE ════════ */
let CU = null; // current user
let QST = { topic:null, diff:null, count:10, qs:[], idx:0, sel:null, ok:0, fail:0 };

/* ════════ AUTH ════════ */
function getUsers(){ try{ return JSON.parse(localStorage.getItem("bq_users")||"{}"); }catch(e){return{};} }
function saveUsers(u){ localStorage.setItem("bq_users", JSON.stringify(u)); }
function getHistory(){ try{ return JSON.parse(localStorage.getItem("bq_history")||"{}"); }catch(e){return{};} }
function saveHistory(h){ localStorage.setItem("bq_history", JSON.stringify(h)); }

function switchAuthTab(t){
  document.getElementById("loginForm").style.display = t==="login"?"block":"none";
  document.getElementById("registerForm").style.display = t==="register"?"block":"none";
  document.querySelectorAll(".auth-tab").forEach((b,i) => b.classList.toggle("active", (i===0&&t==="login")||(i===1&&t==="register")));
}

function doRegister(){
  const name = document.getElementById("regName").value.trim();
  const user = document.getElementById("regUser").value.trim().toLowerCase();
  const pass = document.getElementById("regPass").value;
  const msg = document.getElementById("registerMsg");
  if(!name||!user||!pass){ msg.textContent="All fields required!"; msg.className="auth-msg error"; return; }
  if(user.length<3){ msg.textContent="Username must be 3+ characters!"; msg.className="auth-msg error"; return; }
  if(pass.length<4){ msg.textContent="Password must be 4+ characters!"; msg.className="auth-msg error"; return; }
  const users = getUsers();
  if(users[user]){ msg.textContent="Username already taken!"; msg.className="auth-msg error"; return; }
  users[user] = { name, pass, joined: Date.now() };
  saveUsers(users);
  msg.textContent="Account created! Please login."; msg.className="auth-msg success";
  setTimeout(()=>switchAuthTab("login"),1200);
}

function doLogin(){
  const user = document.getElementById("loginUser").value.trim().toLowerCase();
  const pass = document.getElementById("loginPass").value;
  const msg = document.getElementById("loginMsg");
  if(!user||!pass){ msg.textContent="Enter username and password!"; msg.className="auth-msg error"; return; }
  const users = getUsers();
  if(!users[user]||users[user].pass!==pass){ msg.textContent="Invalid username or password!"; msg.className="auth-msg error"; return; }
  CU = { username: user, name: users[user].name };
  localStorage.setItem("bq_session", JSON.stringify(CU));
  loadApp();
}

function doLogout(){
  CU = null; localStorage.removeItem("bq_session");
  document.getElementById("appScreen").style.display = "none";
  document.getElementById("authScreen").style.display = "flex";
  document.getElementById("loginUser").value=""; document.getElementById("loginPass").value="";
  document.getElementById("loginMsg").textContent="";
}

function checkSession(){
  try{
    const s = JSON.parse(localStorage.getItem("bq_session")||"null");
    const users = getUsers();
    if(s && users[s.username]){ CU = s; loadApp(); return true; }
  }catch(e){}
  return false;
}

/* ════════ APP LOAD ════════ */
function loadApp(){
  document.getElementById("authScreen").style.display = "none";
  document.getElementById("appScreen").style.display = "block";
  // Nav
  document.getElementById("navAvatar").textContent = CU.name[0].toUpperCase();
  document.getElementById("navUname").textContent = CU.name;
  document.getElementById("welcomeName").textContent = CU.name.split(" ")[0];
  buildTopicGrid(); buildDiff(); buildCount();
  updateHomeBanner(); switchTab("home");
}

function buildTopicGrid(){
  const g = document.getElementById("topicGrid"); g.innerHTML="";
  let activeCategory = null;

  TOPICS_CFG.forEach(t=>{
    if(t.isCategory){
      // Category header
      const header = document.createElement("div");
      header.style.cssText="grid-column:1/-1;margin-top:16px;margin-bottom:4px;";
      header.innerHTML=`<div style="display:flex;align-items:center;gap:8px;cursor:pointer;padding:8px 12px;border-radius:10px;background:var(--card);border:1px solid var(--border);" onclick="toggleCategory('${t.id}',this)">
        <span style="font-size:16px">${t.icon}</span>
        <span style="font-size:13px;font-weight:700;color:var(--text)">${t.name}</span>
        <span style="margin-left:auto;font-size:11px;color:var(--text2)" id="cat-arrow-${t.id}">▼</span>
      </div>`;
      g.appendChild(header);
      activeCategory = t.id;
    } else if(t.id==="all"){
      // All topics card — always visible
      const cnt = QDATA.length;
      const d = document.createElement("div");
      d.className="topic-card"; d.dataset.id="all"; d.dataset.cat="all";
      d.style.cssText="grid-column:1/-1;margin-top:8px;";
      d.innerHTML=`<div class="tc-check-mark">✓</div><div class="tc-icon">${t.icon}</div><div class="tc-name">${t.name}</div><div class="tc-cnt">${cnt} questions</div>`;
      d.onclick=()=>selTopic("all");
      g.appendChild(d);
    } else {
      // Normal topic card
      const cnt = QDATA.filter(q=>q.topic===t.id).length;
      const d = document.createElement("div");
      d.className="topic-card"; d.dataset.id=t.id; d.dataset.cat=t.cat||"";
      d.innerHTML=`<div class="tc-check-mark">✓</div><div class="tc-icon">${t.icon}</div><div class="tc-name">${t.name}</div><div class="tc-cnt">${cnt} Qs</div>`;
      d.onclick=()=>selTopic(t.id);
      g.appendChild(d);
    }
  });
}

function toggleCategory(catId, headerEl){
  const arrow = document.getElementById("cat-arrow-"+catId);
  const cards = document.querySelectorAll(`.topic-card[data-cat="${catId}"]`);
  const isOpen = arrow.textContent==="▼";
  arrow.textContent = isOpen ? "▶" : "▼";
  cards.forEach(c=>{ c.style.display = isOpen ? "none" : ""; });
}

function buildDiff(){
  const g=document.getElementById("diffGrp"); g.innerHTML="";
  ["All","Easy","Medium","Hard","UPSC"].forEach((d,i)=>{
    const b=document.createElement("button");
    b.className="pill"+(i===0?" on":""); b.textContent=d;
    b.onclick=()=>{ QST.diff=d==="All"?null:d.toLowerCase(); document.querySelectorAll("#diffGrp .pill").forEach(x=>x.classList.remove("on")); b.classList.add("on"); };
    g.appendChild(b);
  });
  QST.diff=null;
}

function buildCount(){
  const g=document.getElementById("countGrp"); g.innerHTML="";
  [5,10,15,20].forEach((c,i)=>{
    const b=document.createElement("button");
    b.className="pill"+(i===1?" on":""); b.textContent=c;
    b.onclick=()=>{ QST.count=c; document.querySelectorAll("#countGrp .pill").forEach(x=>x.classList.remove("on")); b.classList.add("on"); };
    g.appendChild(b);
  });
  QST.count=10;
}

function selTopic(id){
  QST.topic=id;
  document.querySelectorAll(".topic-card").forEach(c=>c.classList.remove("sel"));
  document.querySelector(`.topic-card[data-id="${id}"]`).classList.add("sel");
  document.getElementById("startBtn").disabled=false;
}

function updateHomeBanner(){
  const hist = getHistory();
  const myHist = hist[CU.username]||[];
  const total = myHist.reduce((s,h)=>s+h.correct,0);
  const quizzes = myHist.length;
  const best = myHist.length>0?Math.max(...myHist.map(h=>h.pct)):0;
  document.getElementById("totalCorrect").textContent=total;
  document.getElementById("totalQuizzes").textContent=quizzes;
  document.getElementById("bestScore").textContent=best+"%";
}

/* ════════ TABS ════════ */
function switchTab(t){
  document.querySelectorAll(".tab-page").forEach(p=>p.classList.remove("active"));
  document.querySelectorAll(".nav-tab").forEach(b=>b.classList.remove("active"));
  const page=document.getElementById("page-"+t);
  const tab=document.getElementById("tab-"+t);
  if(page) page.classList.add("active");
  if(tab) tab.classList.add("active");
  if(t==="history") buildHistory();
  if(t==="leaderboard") buildLeaderboard();
}

/* ════════ QUIZ ════════ */
