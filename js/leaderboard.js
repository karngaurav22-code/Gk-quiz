/* ════════ LEADERBOARD (Cross-Device via Firebase) ════════ */

const FB_URL = "https://gk-by-gaurav-default-rtdb.firebaseio.com";

async function pushScoreToGlobal(){
  const hist = getHistory();
  const myHist = hist[CU.username]||[];
  if(!myHist.length) return;
  const quizzes = myHist.length;
  const avg = Math.round(myHist.reduce((s,x)=>s+x.pct,0)/quizzes);
  const best = Math.max(...myHist.map(x=>x.pct));
  const correct = myHist.reduce((s,x)=>s+x.correct,0);
  const total = myHist.reduce((s,x)=>s+x.total,0);
  const score = Math.round(avg * Math.log(quizzes+1));
  const payload = { name: CU.name, quizzes, avg, best, correct, total, score, updated: Date.now() };
  try {
    await fetch(`${FB_URL}/leaderboard/${CU.username}.json`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  } catch(e){}
}

async function fetchGlobalScores(){
  try {
    const res = await fetch(`${FB_URL}/leaderboard.json`);
    if(!res.ok) return null;
    const data = await res.json();
    if(!data) return null;
    return Object.entries(data).map(([u,d])=>({ u, ...d }));
  } catch(e){ return null; }
}

function mergeScores(globalScores){
  const hist = getHistory();
  const users = getUsers();
  const map = {};
  if(globalScores){ globalScores.forEach(s=>{ map[s.u]=s; }); }
  Object.keys(hist).forEach(u=>{
    const h = hist[u]||[];
    if(!h.length) return;
    const quizzes = h.length;
    const avg = Math.round(h.reduce((s,x)=>s+x.pct,0)/quizzes);
    const best = Math.max(...h.map(x=>x.pct));
    const correct = h.reduce((s,x)=>s+x.correct,0);
    const total = h.reduce((s,x)=>s+x.total,0);
    const score = Math.round(avg * Math.log(quizzes+1));
    const name = users[u]?.name || map[u]?.name || u;
    map[u] = { u, name, quizzes, avg, best, correct, total, score };
  });
  return Object.values(map).sort((a,b)=>b.score-a.score);
}

function renderLeaderboard(scores){
  const medals = ['🥇','🥈','🥉'];
  const podiumEl = document.getElementById("lbPodium");
  const lbTable = document.getElementById("lbTable");

  if(!scores.length){
    podiumEl.innerHTML="";
    lbTable.innerHTML=`<div class="empty-state"><span class="empty-icon">🏆</span><div class="empty-text">No scores yet!<br>Be the first to complete a quiz.</div></div>`;
    return;
  }

  const top3 = scores.slice(0,3);
  let podiumOrder;
  if(top3.length===1){ podiumOrder=[{s:top3[0],rank:0,cls:'p1'}]; }
  else if(top3.length===2){ podiumOrder=[{s:top3[1],rank:1,cls:'p2'},{s:top3[0],rank:0,cls:'p1'}]; }
  else { podiumOrder=[{s:top3[1],rank:1,cls:'p2'},{s:top3[0],rank:0,cls:'p1'},{s:top3[2],rank:2,cls:'p3'}]; }

  podiumEl.innerHTML = podiumOrder.map(({s,rank,cls})=>{
    const avatarBg=`hsl(${(s.u.charCodeAt(0)*40)%360},65%,42%)`;
    const isMe=s.u===CU.username;
    return `<div class="podium-card ${cls}">
      <div class="podium-crown">👑</div>
      <div class="podium-avatar" style="background:${avatarBg}">${s.name[0].toUpperCase()}</div>
      <div class="podium-rank">${medals[rank]}</div>
      <div class="podium-name">${s.name}${isMe?' ✦':''}</div>
      <div class="podium-score">${s.avg}%</div>
      <div class="podium-detail">${s.quizzes} quiz${s.quizzes!==1?'zes':''}</div>
    </div>`;
  }).join("");

  lbTable.innerHTML = scores.map((s,i)=>{
    const rank=i+1;
    const isMe=s.u===CU.username;
    const avatarBg=`hsl(${(s.u.charCodeAt(0)*40)%360},65%,42%)`;
    const rankDisplay=rank<=3?medals[rank-1]:`<span style="font-weight:700;color:var(--text2)">${rank}</span>`;
    return `<div class="lb-row ${isMe?"me":""}">
      <div class="lb-rank">${rankDisplay}</div>
      <div class="lb-avatar" style="background:${avatarBg}">${s.name[0].toUpperCase()}</div>
      <div class="lb-name">${s.name}${isMe?'<span class="lb-you">YOU</span>':""}</div>
      <div class="lb-stats">
        <div class="lb-score">${s.avg}%</div>
        <div class="lb-detail">${s.quizzes} quiz${s.quizzes!==1?'zes':''} · Best: ${s.best}%</div>
      </div>
    </div>`;
  }).join("");
}

async function syncAndBuild(){
  const btn=document.getElementById("syncBtn");
  if(btn){btn.disabled=true;btn.textContent="Syncing…";}
  const globalScores=await fetchGlobalScores();
  const merged=mergeScores(globalScores);
  renderLeaderboard(merged);
  if(btn){btn.disabled=false;btn.textContent="↻ Refresh";}
}

async function buildLeaderboard(){
  document.getElementById("lbTable").innerHTML=`<div class="lb-loading">Loading global rankings…</div>`;
  document.getElementById("lbPodium").innerHTML="";
  await syncAndBuild();
}

/* ════════ INIT ════════ */
