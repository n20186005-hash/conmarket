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
const captions={vi:'Ảnh thực tế Chợ Cồn từ tư liệu hình ảnh đã xuất hiện trên website.',en:'Real Con Market photograph restored from the site’s earlier photo archive.',zh:'从本站早期图片档案恢复的昆市场实景照片。',ko:'사이트의 이전 사진 자료에서 복원한 꼰 시장 실경 사진입니다.'};
const alt={
 hero:{vi:'Ảnh lối vào Chợ Cồn tại Đà Nẵng',en:'Photograph of the entrance to Con Market, Da Nang',zh:'越南岘港昆市场入口实拍照片',ko:'다낭 꼰 시장 입구 실경 사진'},
 hall:{vi:'Ảnh lối đi và khu ăn uống bên trong Chợ Cồn',en:'Photograph of the indoor food hall at Con Market',zh:'岘港昆市场内部餐饮通道实拍照片',ko:'꼰 시장 내부 음식 구역 사진'},
 spices:{vi:'Ảnh quầy hàng khô và gia vị tại Chợ Cồn',en:'Photograph of dried goods and spice stalls at Con Market',zh:'岘港昆市场干货与香料摊位实拍照片',ko:'꼰 시장 건어물 및 향신료 가게 사진'}
};
const urls=[];
const legalTopics=new Set(['chinh-sach-rieng-tu/','dieu-khoan-su-dung/','tuy-chon-cookie/']);
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
   if(n.tagName==='meta'&&get(n,'property')==='og:image:alt')set(n,'content',alt.hero[lang]);
   if(n.tagName==='img'&&get(n,'data-alt-'+lang)){set(n,'alt',get(n,'data-alt-'+lang));n.attrs=n.attrs.filter(a=>!a.name.startsWith('data-alt-'));}
   if(n.tagName==='a'){
    const href=get(n,'href');if(href?.startsWith('/')&&!href.startsWith('//')&&!/\.(svg|js|css|webp|png|jpg)/.test(href)&&!href.startsWith('/api/'))set(n,'href','/'+prefix+href.slice(1));
    const choice=get(n,'data-language-choice');if(choice){set(n,'href','/'+(choice==='vi'?'':choice+'/')+topic);set(n,'aria-current',choice===lang?'page':'false');}
   }
   if(n.tagName==='img'&&/con-market-(hero|hall|spices)\.svg/.test(get(n,'src')||'')){
    const kind=(get(n,'src')||'').match(/con-market-(hero|hall|spices)\.svg/)[1];set(n,'alt',alt[kind][lang]);const caption=parseFragment(`<p class="illustration-credit">${captions[lang]}</p>`).childNodes[0];const target=(get(n,'class')||'').includes('hero-photo')?n.parentNode:n;caption.parentNode=target.parentNode;const at=target.parentNode.childNodes.indexOf(target);target.parentNode.childNodes.splice(at+1,0,caption);
   }
   if(n.tagName==='script'&&get(n,'type')==='application/ld+json')n.parentNode.childNodes=n.parentNode.childNodes.filter(c=>c!==n);
  }
  const noindex=topic==='404/'||legalTopics.has(topic);
  const links=`<link rel="canonical" href="${site+local}">`+languages.map(l=>`<link rel="alternate" hreflang="${l}" href="${site+'/'+(l==='vi'?'':l+'/')+topic}">`).join('')+`<link rel="alternate" hreflang="x-default" href="${site+'/en/'+topic}">`+(noindex?'<meta name="robots" content="noindex,follow">':'');
  head.childNodes.push(...parseFragment(links).childNodes);
  const faq=[];walk(document,n=>{if(n.tagName==='details'){const q=n.childNodes.find(c=>c.tagName==='summary');const a=n.childNodes.find(c=>c.tagName==='div');if(q&&a)faq.push({'@type':'Question',name:text(q).trim(),acceptedAnswer:{'@type':'Answer',text:text(a).trim()}});}});
  const h1=nodes.find(n=>n.tagName==='h1');const schemas=[{'@context':'https://schema.org','@type':'WebPage',url:site+local,name:text(title),inLanguage:lang,isPartOf:{'@type':'WebSite',name:'Independent Con Market guide',url:site+'/'} }];
  if(!topic)schemas.push({'@context':'https://schema.org','@type':'TouristAttraction',name:'Chợ Cồn · Con Market',url:site+local,hasMap:'https://maps.app.goo.gl/MS8rWseJ7bPBQRrt8',geo:{'@type':'GeoCoordinates',latitude:16.0677927,longitude:108.2144834}});
  if(topic&&topic!=='404/')schemas.push({'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Chợ Cồn',item:site+'/'+prefix},{'@type':'ListItem',position:2,name:text(h1||title).trim(),item:site+local}]});
  if(faq.length)schemas.push({'@context':'https://schema.org','@type':'FAQPage',mainEntity:faq});
  for(const schema of schemas)head.childNodes.push(...parseFragment('<script type="application/ld+json">'+JSON.stringify(schema).replace(/</g,'\\u003c')+'</script>').childNodes);
  const target=topic==='404/'?(lang==='vi'?'404.html':prefix+'404/index.html'):prefix+(topic||'')+'index.html';fs.mkdirSync(path.dirname('dist/'+target),{recursive:true});fs.writeFileSync('dist/'+target,serialize(document));if(!noindex)urls.push(site+local);
 }
}
fs.writeFileSync('dist/sitemap-0.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+urls.map(u=>'<url><loc>'+u+'</loc></url>').join('')+'</urlset>');
fs.writeFileSync('dist/sitemap-index.xml','<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>'+site+'/sitemap-0.xml</loc></sitemap></sitemapindex>');
console.log(`Localized ${routes.length} page families in four languages (${urls.length} indexable URLs).`);
