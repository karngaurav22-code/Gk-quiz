/* ════════ FIREBASE CONFIG ════════ */
const firebaseConfig = {
  apiKey: "AIzaSyAbPmBLivmSyyFB1sNbZHT6DmrDVHw1m58",
  authDomain: "gk-practice-43fd0.firebaseapp.com",
  projectId: "gk-practice-43fd0",
  storageBucket: "gk-practice-43fd0.firebasestorage.app",
  messagingSenderId: "91555221690",
  appId: "1:91555221690:web:af85ff97d336d617c9b283"
};

/* ════════ STATE ════════ */
let CU = null;
let QST = { topic:null, diff:null, count:10, qs:[], idx:0, sel:null, ok:0, fail:0 };
let firebaseApp, firebaseAuth;

/* ════════ FIREBASE INIT ════════ */
async function initFirebase(){
  const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js");
  const { getAuth, GoogleAuthProvider, signInWithPopup,
          createUserWithEmailAndPassword, signInWithEmailAndPassword,
          sendEmailVerification, updateProfile, onAuthStateChanged, signOut
        } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js");

  firebaseApp  = initializeApp(firebaseConfig);
  firebaseAuth = getAuth(firebaseApp);
  const { getDatabase, ref, set } =
await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js");

const db = getDatabase(firebaseApp);

  window._fbAuth = {
    getAuth, GoogleAuthProvider, signInWithPopup,
    createUserWithEmailAndPassword, signInWithEmailAndPassword,
    sendEmailVerification, updateProfile, onAuthStateChanged, signOut
  };

  // Auto-login if session exists
  onAuthStateChanged(firebaseAuth, user => {
    if(user && user.emailVerified){
      CU = { username: user.uid, name: user.displayName || user.email.split("@")[0], email: user.email };
      set(ref(db, 'users/' + user.uid), {
        name: user.displayName,
        email: user.email,
        lastLogin: new Date().toISOString()
      });
      loadApp();
    } else {   // 
      showAuth();
    }
  });
}

function showAuth(){
  document.getElementById("authScreen").style.display = "flex";
  document.getElementById("appScreen").style.display  = "none";
}

/* ════════ AUTH TAB SWITCH ════════ */
function switchAuthTab(t){
  document.getElementById("loginForm").style.display    = t==="login"    ? "block" : "none";
  document.getElementById("registerForm").style.display = t==="register" ? "block" : "none";
  document.querySelectorAll(".auth-tab").forEach((b,i) =>
    b.classList.toggle("active",(i===0&&t==="login")||(i===1&&t==="register"))
  );
}

/* ════════ GOOGLE LOGIN ════════ */
async function doGoogleLogin(){
  const msg = document.getElementById("loginMsg");
  try {
    const { GoogleAuthProvider, signInWithPopup } = window._fbAuth;
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(firebaseAuth, provider);
    const user = result.user;
    CU = { username: user.uid, name: user.displayName || user.email.split("@")[0], email: user.email };
    loadApp();
  } catch(e){
    msg.textContent = "Google login failed! Try again.";
    msg.className = "auth-msg error";
  }
}

/* ════════ EMAIL REGISTER ════════ */
async function doRegister(){
  const name = document.getElementById("regName").value.trim();
  const email= document.getElementById("regUser").value.trim().toLowerCase();
  const pass = document.getElementById("regPass").value;
  const msg  = document.getElementById("registerMsg");

  if(!name||!email||!pass){ msg.textContent="All fields required!"; msg.className="auth-msg error"; return; }
  if(!email.includes("@")){ msg.textContent="Enter valid email!"; msg.className="auth-msg error"; return; }
  if(pass.length < 6){ msg.textContent="Password must be 6+ characters!"; msg.className="auth-msg error"; return; }

  try {
    const { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } = window._fbAuth;
    const result = await createUserWithEmailAndPassword(firebaseAuth, email, pass);
    await updateProfile(result.user, { displayName: name });
    await sendEmailVerification(result.user);
    msg.textContent = "✅ Account created! Check your email to verify.";
    msg.className = "auth-msg success";
    document.getElementById("regName").value="";
    document.getElementById("regUser").value="";
    document.getElementById("regPass").value="";
    setTimeout(()=>switchAuthTab("login"), 2000);
  } catch(e){
    const errMap = {
      "auth/email-already-in-use": "⚠️ Email already registered! Agar Google se pehle login kiya tha toh Google button use karein.",
      "auth/invalid-email": "Invalid email address!",
      "auth/weak-password": "Password is too weak!"
    };
    msg.textContent = errMap[e.code] || "Registration failed!";
    msg.className = "auth-msg error";
  }
}

/* ════════ EMAIL LOGIN ════════ */
async function doLogin(){
  const email= document.getElementById("loginUser").value.trim().toLowerCase();
  const pass = document.getElementById("loginPass").value;
  const msg  = document.getElementById("loginMsg");

  if(!email||!pass){ msg.textContent="Enter email and password!"; msg.className="auth-msg error"; return; }

  try {
    const { signInWithEmailAndPassword } = window._fbAuth;
    const result = await signInWithEmailAndPassword(firebaseAuth, email, pass);
    if(!result.user.emailVerified){
      msg.textContent = "⚠️ Please verify your email first! Check inbox.";
      msg.className = "auth-msg error";
      const { sendEmailVerification } = window._fbAuth;
      await sendEmailVerification(result.user);
      return;
    }
    CU = { username: result.user.uid, name: result.user.displayName || email.split("@")[0], email };
    loadApp();
  } catch(e){
    const errMap = {
      "auth/user-not-found": "No account found with this email!",
      "auth/wrong-password": "Wrong password!",
      "auth/invalid-credential": "Invalid email or password!",
      "auth/too-many-requests": "Too many attempts! Try again later."
    };
    msg.textContent = errMap[e.code] || "Login failed!";
    msg.className = "auth-msg error";
  }
}

/* ════════ LOGOUT ════════ */
async function doLogout(){
  const { signOut } = window._fbAuth;
  await signOut(firebaseAuth);
  CU = null;
  showAuth();
  document.getElementById("loginUser").value="";
  document.getElementById("loginPass").value="";
  document.getElementById("loginMsg").textContent="";
}

/* ════════ SESSION (handled by onAuthStateChanged) ════════ */
function checkSession(){ return false; } // Firebase handles this

/* ════════ APP LOAD ════════ */
function loadApp(){
  document.getElementById("authScreen").style.display = "none";
  document.getElementById("appScreen").style.display  = "block";
  document.getElementById("navAvatar").textContent = CU.name[0].toUpperCase();
  document.getElementById("navUname").textContent  = CU.name;
  document.getElementById("welcomeName").textContent = CU.name.split(" ")[0];
  buildTopicGrid(); buildDiff(); buildCount();
  updateHomeBanner(); switchTab("home");
}

/* ════════ STORAGE (local, keyed by Firebase UID) ════════ */
function getHistory(){ try{ return JSON.parse(localStorage.getItem("bq_history")||"{}"); }catch(e){return{};} }
function saveHistory(h){ localStorage.setItem("bq_history", JSON.stringify(h)); }
function getUsers(){ return {}; }

/* ════════ TOPIC GRID ════════ */
function buildTopicGrid(){
  const g = document.getElementById("topicGrid"); g.innerHTML="";
  TOPICS_CFG.forEach(t=>{
    if(t.isCategory){
      const header = document.createElement("div");
      header.style.cssText="grid-column:1/-1;margin-top:16px;margin-bottom:4px;";
      header.innerHTML=`<div style="display:flex;align-items:center;gap:8px;cursor:pointer;padding:8px 12px;border-radius:10px;background:var(--card);border:1px solid var(--border);" onclick="toggleCategory('${t.id}',this)">
        <span style="font-size:16px">${t.icon}</span>
        <span style="font-size:13px;font-weight:700;color:var(--text)">${t.name}</span>
        <span style="margin-left:auto;font-size:11px;color:var(--text2)" id="cat-arrow-${t.id}">▼</span>
      </div>`;
      g.appendChild(header);
    } else if(t.id==="all"){
      const d = document.createElement("div");
      d.className="topic-card"; d.dataset.id="all"; d.dataset.cat="all";
      d.style.cssText="grid-column:1/-1;margin-top:8px;";
      d.innerHTML=`<div class="tc-check-mark">✓</div><div class="tc-icon">${t.icon}</div><div class="tc-name">${t.name}</div><div class="tc-cnt">${QDATA.length} questions</div>`;
      d.onclick=()=>selTopic("all");
      g.appendChild(d);
    } else {
      const cnt = QDATA.filter(q=>q.topic===t.id).length;
      const d = document.createElement("div");
      d.className="topic-card"; d.dataset.id=t.id; d.dataset.cat=t.cat||"";
      d.innerHTML=`<div class="tc-check-mark">✓</div><div class="tc-icon">${t.icon}</div><div class="tc-name">${t.name}</div><div class="tc-cnt">${cnt} Qs</div>`;
      d.onclick=()=>selTopic(t.id);
      g.appendChild(d);
    }
  });
}

function toggleCategory(catId){
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
