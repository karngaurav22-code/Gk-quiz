(function(){

  const dateEl = document.getElementById('ca-date');
  const listEl = document.getElementById('ca-items');

  // Aaj ki date
  const today = new Date();
  const d = String(today.getDate()).padStart(2,'0');
  const m = today.toLocaleString('hi-IN',{month:'long'});
  const y = today.getFullYear();
  if(dateEl) dateEl.textContent = '📅 ' + d + ' ' + m + ' ' + y;
  if(!listEl) return;

  // Vercel API se news fetch karo
  fetch('/api/news')
    .then(r => r.json())
    .then(data => {
      if(data.news && data.news.length){
        listEl.innerHTML = data.news
          .map(t => '<li>' + t + '</li>')
          .join('');
      } else {
        listEl.innerHTML = '<li>Aaj ki news load nahi hui, baad mein try karein</li>';
      }
    })
    .catch(() => {
      listEl.innerHTML = '<li>News load nahi hui, internet check karein</li>';
    });

})();
