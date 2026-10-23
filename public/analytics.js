(()=>{
 const id='G-HXM22WWPKP',key='con-market-cookie-preferences',veto='con-market-page-denial';
 const lang=document.documentElement.lang||'vi';let loaded=false,effective=false;
 const messages={vi:{saved:'Đã lưu lựa chọn.',failed:'Không xác nhận được lưu. Phân tích đã tắt trên trang này; lựa chọn đã lưu có thể còn ở lần truy cập khác.'},en:{saved:'Choice saved.',failed:'Saving could not be confirmed. Analytics is off on this page; stored permission may remain for other visits.'},zh:{saved:'选择已保存。',failed:'无法确认保存。本页分析已关闭；其他访问可能仍使用已存授权。'},ko:{saved:'선택을 저장했습니다.',failed:'저장을 확인하지 못했습니다. 이 페이지의 분석은 꺼져 있지만 다른 방문에는 저장된 허용이 남아 있을 수 있습니다.'}};
 window.dataLayer=window.dataLayer||[];
 const gtag=(...args)=>window.dataLayer.push(args);
 function apply(grant){effective=grant;window['ga-disable-'+id]=!grant;gtag('consent','update',{analytics_storage:grant?'granted':'denied',ad_storage:'denied'});if(grant&&!loaded){loaded=true;gtag('js',new Date());gtag('config',id,{anonymize_ip:true});const script=document.createElement('script');script.async=true;script.src='https://www.googletagmanager.com/gtag/js?id='+id;document.head.appendChild(script);}}
 apply(false);
 function read(){try{return JSON.parse(localStorage.getItem(key)||'{}');}catch{return null;}}
 function hasVeto(){try{return Boolean(sessionStorage.getItem(veto));}catch{return true;}}
 const initial=read();if(initial?.analytics===true&&!hasVeto())apply(true);
 function save(choice){
  // Deny the already loaded runtime before touching persistent storage.
  apply(false);try{sessionStorage.setItem(veto,'1');}catch{}
  let saved=false;
  try{const value=JSON.stringify(choice);localStorage.setItem(key,value);if(localStorage.getItem(key)!==value)throw Error('write not retained');if(choice.analytics){sessionStorage.removeItem(veto);if(sessionStorage.getItem(veto)!==null)throw Error('veto not cleared');}saved=true;}catch{}
  if(saved&&choice.analytics)apply(true);
  if(saved&&!choice.preferences)try{localStorage.removeItem('con-market-language');}catch{}
  return {saved,effective};
 }
 window.conMarketAnalytics={save,get effective(){return effective;}};
 const analytics=document.getElementById('analytics'),preferences=document.getElementById('preferences'),feedback=document.getElementById('preference-feedback');
 if(analytics){analytics.checked=effective;preferences.checked=initial?.preferences!==false;const submit=reject=>{const result=save({analytics:reject?false:analytics.checked,preferences:reject?false:preferences.checked});analytics.checked=result.effective;if(reject)preferences.checked=false;feedback.textContent=(messages[lang]||messages.vi)[result.saved?'saved':'failed'];};document.getElementById('save-preferences').addEventListener('click',()=>submit(false));document.getElementById('reject-all').addEventListener('click',()=>submit(true));}
 window.addEventListener('storage',event=>{if(event.key===key||event.key===null){const choice=read();apply(choice?.analytics===true&&!hasVeto());if(analytics)analytics.checked=effective;}});
 document.querySelectorAll('[data-language-choice]').forEach(link=>link.addEventListener('click',()=>{try{if(read()?.preferences===true)localStorage.setItem('con-market-language',link.dataset.languageChoice);}catch{}}));
 if('serviceWorker' in navigator)navigator.serviceWorker.register('/sw.js').catch(()=>{});
})();
