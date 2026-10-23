import fs from 'node:fs';
import path from 'node:path';
import {parse, serialize, parseFragment} from 'parse5';
const languages=['vi','en','zh','ko'],site='https://conmarket.org';
const routes=fs.readdirSync('dist',{recursive:true}).filter(p=>p.endsWith('.html')).map(p=>({file:p,html:fs.readFileSync(path.join('dist',p),'utf8')}));
const get=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
function set(n,k,v){n.attrs??=[];const a=n.attrs.find(a=>a.name===k);if(a)a.value=v;else n.attrs.push({name:k,value:v});}
function walk(n,fn){fn(n);for(const c of [...(n.childNodes||[])])walk(c,fn);}
function text(n){return n.nodeName==='#text'?n.value:(n.childNodes||[]).map(text).join('');}
function replaceText(n,v){n.childNodes=[{nodeName:'#text',value:v,parentNode:n}];}
const captions={vi:'Minh họa ý niệm nguyên gốc; không phải ảnh hay sơ đồ thực địa.',en:'Original conceptual illustration; not a photograph or site plan.',zh:'原创概念插画，并非现场照片或平面图。',ko:'직접 제작한 개념 삽화이며 실제 사진이나 현장 도면이 아닙니다.'};
const alt={vi:'Minh họa giỏ hàng và mái che chợ',en:'Conceptual baskets and market awnings',zh:'篮筐与市场遮棚概念插画',ko:'바구니와 시장 차양 개념 삽화'};
const urls=[];
for(const route of routes){
 const topic=route.file==='index.html'?'':route.file==='404.html'?'404/':route.file.replace(/index\.html$/,'');
 for(const lang of languages){
  const prefix=lang==='vi'?'':lang+'/';const local='/'+prefix+topic;const document=parse(route.html);
  walk(document,n=>{const cls=(get(n,'class')||'').split(/\s+/);const marker=cls.find(c=>/^lang-(vi|en|zh|ko)$/.test(c));if(marker&&marker!=='lang-'+lang&&n.parentNode)n.parentNode.childNodes=n.parentNode.childNodes.filter(c=>c!==n);});
  let head,body,html,title;const nodes=[];walk(document,n=>{nodes.push(n);if(n.tagName==='head')head=n;if(n.tagName==='body')body=n;if(n.tagName==='html')html=n;if(n.tagName==='title')title=n;});
  const titles=JSON.parse(get(html,'data-titles')||'{}'),descs=JSON.parse(get(html,'data-descs')||'{}');set(html,'lang',lang);set(html,'data-lang',lang);replaceText(title,titles[lang]||text(title));html.attrs=html.attrs.filter(a=>!['data-titles','data-descs'].includes(a.name));
  head.childNodes=head.childNodes.filter(n=>!(n.tagName==='link'&&['canonical','alternate'].includes(get(n,'rel'))));
  for(const n of nodes){
   if(n.tagName==='meta'&&['description','og:description'].includes(get(n,'name')||get(n,'property')))set(n,'content',descs[lang]||'');
   if(n.tagName==='meta'&&get(n,'property')==='og:title')set(n,'content',text(title));
   if(n.tagName==='meta'&&get(n,'property')==='og:url')set(n,'content',site+local);
   if(n.tagName==='meta'&&get(n,'property')==='og:image:alt')set(n,'content',alt[lang]);
   if(n.tagName==='a'){
    const href=get(n,'href');if(href?.startsWith('/')&&!href.startsWith('//')&&!/\.(svg|js|css|webp|png|jpg)/.test(href)&&!href.startsWith('/api/'))set(n,'href','/'+prefix+href.slice(1));
    const choice=get(n,'data-language-choice');if(choice){set(n,'href','/'+(choice==='vi'?'':choice+'/')+topic);set(n,'aria-current',choice===lang?'page':'false');}
   }
   if(n.tagName==='img'&&/con-market-(hero|hall|spices)\.svg/.test(get(n,'src')||'')){
    set(n,'alt',alt[lang]);const caption=parseFragment(`<p class="illustration-credit">${captions[lang]}</p>`).childNodes[0];const target=(get(n,'class')||'').includes('hero-photo')?n.parentNode:n;caption.parentNode=target.parentNode;const at=target.parentNode.childNodes.indexOf(target);target.parentNode.childNodes.splice(at+1,0,caption);
   }
   if(n.tagName==='script'&&get(n,'type')==='application/ld+json')n.parentNode.childNodes=n.parentNode.childNodes.filter(c=>c!==n);
  }
  const links=`<link rel="canonical" href="${site+local}">`+languages.map(l=>`<link rel="alternate" hreflang="${l}" href="${site+'/'+(l==='vi'?'':l+'/')+topic}">`).join('')+`<link rel="alternate" hreflang="x-default" href="${site+'/'+topic}">`+(topic==='404/'?'<meta name="robots" content="noindex,follow">':'');
  head.childNodes.push(...parseFragment(links).childNodes);
  const faq=[];walk(document,n=>{if(n.tagName==='details'){const q=n.childNodes.find(c=>c.tagName==='summary');const a=n.childNodes.find(c=>c.tagName==='div');if(q&&a)faq.push({'@type':'Question',name:text(q).trim(),acceptedAnswer:{'@type':'Answer',text:text(a).trim()}});}});
  const h1=nodes.find(n=>n.tagName==='h1');const schemas=[{'@context':'https://schema.org','@type':'WebPage',url:site+local,name:text(title),inLanguage:lang,isPartOf:{'@type':'WebSite',name:'Independent Con Market guide',url:site+'/'} }];
  if(!topic)schemas.push({'@context':'https://schema.org','@type':'TouristAttraction',name:'Chợ Cồn · Con Market',url:site+local,hasMap:'https://maps.app.goo.gl/MS8rWseJ7bPBQRrt8',geo:{'@type':'GeoCoordinates',latitude:16.0677927,longitude:108.2144834}});
  if(topic&&topic!=='404/')schemas.push({'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Chợ Cồn',item:site+'/'+prefix},{'@type':'ListItem',position:2,name:text(h1||title).trim(),item:site+local}]});
  if(faq.length)schemas.push({'@context':'https://schema.org','@type':'FAQPage',mainEntity:faq});
  for(const schema of schemas)head.childNodes.push(...parseFragment('<script type="application/ld+json">'+JSON.stringify(schema).replace(/</g,'\\u003c')+'</script>').childNodes);
  const target=topic==='404/'?(lang==='vi'?'404.html':prefix+'404/index.html'):prefix+(topic||'')+'index.html';fs.mkdirSync(path.dirname('dist/'+target),{recursive:true});fs.writeFileSync('dist/'+target,serialize(document));if(topic!=='404/')urls.push(site+local);
 }
}
fs.writeFileSync('dist/sitemap-0.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+urls.map(u=>'<url><loc>'+u+'</loc></url>').join('')+'</urlset>');
fs.writeFileSync('dist/sitemap-index.xml','<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>'+site+'/sitemap-0.xml</loc></sitemap></sitemapindex>');
console.log(`Localized ${routes.length} page families in four languages (${urls.length} indexable URLs).`);
