import feedparser
import json
from datetime import datetime

FEEDS = [
    "https://feeds.bbci.co.uk/hindi/india/rss.xml",
    "https://www.thehindu.com/news/national/feeder/default.rss",
    "https://ddnews.gov.in/rss.xml",
]

news = []
for url in FEEDS:
    try:
        feed = feedparser.parse(url)
        for entry in feed.entries[:3]:
            title = entry.get("title", "").strip()
            link = entry.get("link", "").strip()
            if title and len(title) > 10:
                news.append({"title": title, "link": link})
    except:
        pass

news = news[:5]
date = datetime.now().strftime("%d %B %Y")

js = f"""// Auto-generated — {date}
(function(){{
  const dateEl = document.getElementById('ca-date');
  const listEl = document.getElementById('ca-items');
  if(dateEl) dateEl.textContent = '📅 {date}';
  if(!listEl) return;
  const NEWS = {json.dumps(news, ensure_ascii=False)};
  listEl.innerHTML = NEWS.map(n => '<li><a href="' + n.link + '" target="_blank" style="color:inherit;text-decoration:none;">' + n.title + ' →</a></li>').join('');
}})();
"""

with open("js/current-affairs.js", "w", encoding="utf-8") as f:
    f.write(js)

print(f"Done! {len(news)} news saved.")
