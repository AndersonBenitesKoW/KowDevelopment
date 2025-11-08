// CommonJS para evitar problemas ESM
const { XMLParser } = require("fast-xml-parser");

const FEEDS_BY_CAT = {
  tech: [
    "https://es.wired.com/rss",
    "https://revistabyte.es/feed/",
    "https://www.xataka.com/tag/inteligencia-artificial/rss",
    "https://www.technologyreview.es/feed",
    "https://blog.google/technology/ai/rss/"
  ],
  bitcoin: [
    "https://www.criptonoticias.com/feed/",
    "https://es.cointelegraph.com/rss",
    "https://www.diariobitcoin.com/feed/"
  ],
  business: [
    "https://www.eleconomista.es/rss/rss-economia.php",
    "https://www.expansion.com/rss/economia.html",
    "https://www.construible.es/feed",
    "https://www.construirenciudad.com/feed"
  ]
};

const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "@_" });
const decodeHtml = (s = "") => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const tryGet = (obj, ...paths) => { for (const p of paths){ const v=p.split(".").reduce((a,k)=>(a?a[k]:undefined),obj); if(v) return v;} return null; };

async function getOgImage(url){
  try {
    const html = await fetch(url, { headers: { "user-agent": "Mozilla/5.0" } }).then(r => r.text());
    const m = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)
          || html.match(/<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i);
    return m ? m[1] : null;
  } catch { return null; }
}

async function normalizeItem(item, sourceName){
  const title = decodeHtml(item.title || "");
  const link  = decodeHtml(item.link || item.guid || tryGet(item, "id", "url") || "");
  const publishedAt = item.pubDate || item.published || item.updated || tryGet(item, "dc:date") || "";
  const raw = item.description || tryGet(item, "content:encoded") || tryGet(item, "summary") || "";
  const description = decodeHtml(String(raw).replace(/<[^>]+>/g, "")).slice(0, 240);

  let image = tryGet(item, "media:content.@_url")
           || tryGet(item, "media:thumbnail.@_url")
           || tryGet(item, "enclosure.@_url")
           || tryGet(item, "enclosure.url")
           || tryGet(item, "image.@_href")
           || tryGet(item, "image.url") || null;

  if (!image && link) image = await getOgImage(link);

  return {
    title,
    url: link,
    urlToImage: image || null,
    publishedAt,
    source: { name: decodeHtml(tryGet(item, "source.#text") || tryGet(item, "source") || sourceName) },
    description
  };
}

async function parseFeed(url){
  const res = await fetch(url, { headers: { "user-agent": "Mozilla/5.0" } });
  const xml = await res.text();
  const json = parser.parse(xml);
  const channel = json.rss?.channel || json.feed || json["rdf:RDF"];
  let items = channel?.item || channel?.entry || [];
  if (!Array.isArray(items)) items = [items];

  const sourceName = decodeHtml(channel?.title || channel?.["dc:title"] || new URL(url).hostname);
  const out = [];
  for (const it of items.slice(0, 12)) out.push(await normalizeItem(it, sourceName));
  return out;
}

function dedupe(arr){
  const seen = new Set();
  return arr.filter(x => {
    const k = (x.url || "") + "|" + (x.title || "");
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

exports.handler = async (event) => {
  try {
    const category = (event.queryStringParameters?.category || "tech").toLowerCase();
    const feeds = FEEDS_BY_CAT[category] || FEEDS_BY_CAT.tech;

    const lists = await Promise.allSettled(feeds.map(parseFeed));
    const all = lists.filter(r => r.status === "fulfilled").flatMap(r => r.value);

    const clean = dedupe(all.filter(n => n.title && n.url));
    clean.sort((a, b) => new Date(b.publishedAt || 0) - new Date(a.publishedAt || 0));

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=600", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify(clean.slice(0, 12))
    };
  } catch (e) {
    return { statusCode: 500, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ error: e.message }) };
  }
};
