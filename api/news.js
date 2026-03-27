export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const feeds = [
    'https://feeds.bbci.co.uk/hindi/india/rss.xml',
    'https://www.thehindu.com/news/national/feeder/default.rss',
    'https://feeds.feedburner.com/ndtvnews-india-news'
  ];

  const news = [];

  for(const url of feeds){
    try{
      const r = await fetch(url);
      const text = await r.text();
      const matches = text.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>|<title>(.*?)<\/title>/g);
      if(matches){
        matches.slice(1, 4).forEach(m => {
          const t = m.replace(/<title><!\[CDATA\[/, '')
                     .replace(/\]\]><\/title>/, '')
                     .replace(/<title>/, '')
                     .replace(/<\/title>/, '')
                     .trim();
          if(t && t.length > 10) news.push(t);
        });
      }
    } catch(e){}
  }

  res.status(200).json({ news: news.slice(0, 5) });
}
