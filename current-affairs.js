/* ════════════════════════════════════════════════
   CURRENT AFFAIRS WIDGET
   File: js/current-affairs.js
   Kahan add karo: index.html mein protect.js se PEHLE
════════════════════════════════════════════════ */

(function(){

  // ── Aaj ki date set karo ──
  const today  = new Date();
  const day    = String(today.getDate()).padStart(2,'0');
  const month  = today.toLocaleString('hi-IN', { month: 'long' });
  const year   = today.getFullYear();

  const dateEl = document.getElementById('ca-date');
  const listEl = document.getElementById('ca-items');

  if(dateEl) dateEl.textContent = '📅 ' + day + ' ' + month + ' ' + year;
  if(!listEl) return; // Widget page par nahi hai toh exit

  // ── Free RSS Sources (CORS proxy use karta hai) ──
  const FEEDS = [
    'https://feeds.bbci.co.uk/hindi/india/rss.xml',
    'https://www.thehindu.com/news/national/feeder/default.rss',
    'https://feeds.feedburner.com/ndtvnews-india-news'
  ];
  const PROXY = 'https://api.rss2json.com/v1/api.json?rss_url=';

  async function loadNews(){
    listEl.innerHTML = '<li>⏳ News load ho rahi hai...</li>';
    const all = [];

    for(const feed of FEEDS){
      try{
        const res  = await fetch(PROXY + encodeURIComponent(feed));
        const data = await res.json();
        if(data.items){
          data.items.slice(0, 2).forEach(item => {
            if(item.title) all.push(item.title);
          });
        }
      } catch(e){ /* agar ek feed fail ho toh skip karo */ }
    }

    if(!all.length){
      listEl.innerHTML = '<li>Aaj ki current affairs ke liye neeche click karein</li>';
      return;
    }

    listEl.innerHTML = all.slice(0, 5).map(title => {
      const t = title.length > 85 ? title.slice(0, 85) + '…' : title;
      return '<li>' + t + '</li>';
    }).join('');
  }

  loadNews();

})();
