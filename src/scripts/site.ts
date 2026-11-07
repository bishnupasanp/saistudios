const qs = <T extends Element>(s:string)=>document.querySelector<T>(s);
const qsa = <T extends Element>(s:string)=>[...document.querySelectorAll<T>(s)];
const menu=qs<HTMLButtonElement>('.menu-toggle');
const nav=qs<HTMLElement>('#navigation');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close menu':'Open menu');nav?.classList.toggle('open',open);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){const wasOpen=menu?.getAttribute('aria-expanded')==='true';menu?.setAttribute('aria-expanded','false');menu?.setAttribute('aria-label','Open menu');nav?.classList.remove('open');if(wasOpen)menu?.focus();}});
const filters=qsa<HTMLButtonElement>('[data-filter]');
filters.forEach(button=>button.addEventListener('click',()=>{filters.forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});[...(button.closest('.work-section')?.querySelectorAll<HTMLElement>('[data-project]')||[])].forEach(card=>{card.hidden=button.dataset.filter!=='All'&&card.dataset.category!==button.dataset.filter;});}));
const requestedCategory=new URLSearchParams(window.location.search).get('category');
filters.find(button=>button.dataset.filter===requestedCategory)?.click();
const hub=qs<HTMLElement>('.service-universe');
const hubToggle=qs<HTMLButtonElement>('.hub-motion-toggle');
hubToggle?.addEventListener('click',()=>{const paused=hubToggle.getAttribute('aria-pressed')!=='true';hubToggle.setAttribute('aria-pressed',String(paused));hubToggle.textContent=paused?'Resume motion':'Pause motion';hub?.classList.toggle('hub-paused',paused);});
const dialog=qs<HTMLDialogElement>('#lightbox');
const media=qs<HTMLElement>('#lightbox-media');
let activeIndex=0;
let returnFocus:HTMLElement|null=null;
const visibleProjects=()=>qsa<HTMLButtonElement>('[data-project]').filter(p=>!p.hidden);
function showProject(index:number){const items=visibleProjects();if(!items.length||!media)return;activeIndex=(index+items.length)%items.length;const p=items[activeIndex];media.replaceChildren();qs('#lightbox-title')!.textContent=p.dataset.title||'';qs('#lightbox-category')!.textContent=p.dataset.category||'';
const youtube=p.dataset.youtube||'';const video=p.dataset.video||'';
if(/^[A-Za-z0-9_-]{11}$/.test(youtube)){const frame=document.createElement('iframe');frame.src='https://www.youtube-nocookie.com/embed/'+youtube+'?autoplay=1';frame.title=p.dataset.title||'Portfolio film';frame.allow='autoplay; encrypted-media; picture-in-picture';frame.allowFullscreen=true;frame.referrerPolicy='strict-origin-when-cross-origin';media.append(frame);}
else if(/^\/videos\/[a-zA-Z0-9_./-]+\.(mp4|webm)$/i.test(video)&&!video.includes('..')){const player=document.createElement('video');player.src=video;player.controls=true;player.autoplay=true;player.playsInline=true;media.append(player);}
else{const img=document.createElement('img');img.src=p.dataset.image||'/images/client/logo.webp';img.alt=p.dataset.title||'Sai Studios';if(p.dataset.kind==='photo'){img.className='photo-view';media.append(img);}else{img.className='master-cover';const note=document.createElement('div');note.className='film-pending';const label=document.createElement('p');label.textContent='View the full-resolution original in Google Drive. Google may request sign-in or access.';note.append(label);media.append(img,note);}}
const drive=p.dataset.drive||'';if(/^https:\/\/drive\.google\.com\/file\/d\/[A-Za-z0-9_-]+\/view$/.test(drive)){const link=document.createElement('a');link.className='film-source-link';link.href=drive;link.target='_blank';link.rel='noopener noreferrer';link.textContent=(p.dataset.preview?'45-second preview · ':'')+'Open full film in Google Drive ↗';media.append(link);}}
qsa<HTMLButtonElement>('[data-project]').forEach(p=>p.addEventListener('click',()=>{returnFocus=p;showProject(visibleProjects().indexOf(p));dialog?.showModal();document.body.classList.add('modal-open');}));
const closeLightbox=()=>dialog?.close();
qs('.lightbox-close')?.addEventListener('click',closeLightbox);
dialog?.addEventListener('click',e=>{if(e.target===dialog)closeLightbox();});
dialog?.addEventListener('close',()=>{media?.replaceChildren();document.body.classList.remove('modal-open');returnFocus?.focus();});
qs('#film-prev')?.addEventListener('click',()=>showProject(activeIndex-1));
qs('#film-next')?.addEventListener('click',()=>showProject(activeIndex+1));
dialog?.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();showProject(activeIndex-1);}if(e.key==='ArrowRight'){e.preventDefault();showProject(activeIndex+1);}});
const form=qs<HTMLFormElement>('#booking-form');
const tabs=qsa<HTMLButtonElement>('[data-path]');
const select=qs<HTMLSelectElement>('#package-select');
let pathway='Wedding';
function setPath(tab:HTMLButtonElement){pathway=tab.dataset.path||'Wedding';tabs.forEach(t=>{const active=t===tab;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;});qs('#booking-panel')?.setAttribute('aria-labelledby',tab.id);qs<HTMLElement>('#package-label')!.hidden=pathway!=='Wedding';qs<HTMLElement>('#project-label')!.hidden=pathway==='Wedding';qs('#estimate-label')!.textContent=pathway==='Wedding'?'PACKAGE ESTIMATE':'TAILORED TO YOUR PROJECT';updateEstimate();}
function updateEstimate(){const price=Number(select?.selectedOptions[0]?.dataset.price||0);const amount=qs('#estimate-amount');if(amount)amount.textContent=pathway==='Wedding'&&price?'NPR '+new Intl.NumberFormat('en-IN').format(price):'Let’s talk';}
tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>setPath(tab));tab.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();const next=tabs[(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length];setPath(next);next.focus();}});});
select?.addEventListener('change',updateEstimate);
if(form){const params=new URLSearchParams(window.location.search);const requested=params.get('service');const initial=tabs.find(t=>t.dataset.path===requested);if(initial)setPath(initial);const packageId=params.get('package');if(select&&packageId&&[...select.options].some(o=>o.value===packageId)){select.value=packageId;updateEstimate();}}
const dateInput=qs<HTMLInputElement>('input[name="date"]');
if(dateInput){const today=new Date();dateInput.min=[today.getFullYear(),String(today.getMonth()+1).padStart(2,'0'),String(today.getDate()).padStart(2,'0')].join('-');}
const clean=(value:FormDataEntryValue|null,max=120)=>String(value||'').replace(/[<>\x00-\x1F\x7F]/g,'').trim().slice(0,max);
form?.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);if(data.get('company_fax_hp'))return;const name=clean(data.get('name'),80),phone=clean(data.get('phone'),20),date=clean(data.get('date'),10),location=clean(data.get('location'));const status=qs<HTMLElement>('#form-message')!;
if(!/^[\p{L}\p{M} .'-]{2,80}$/u.test(name)||!/^[+0-9 ()-]{7,20}$/.test(phone)||!/^\d{4}-\d{2}-\d{2}$/.test(date)||date<(dateInput?.min||'')||location.length<2){status.textContent='Please check your name, phone, date and location.';return;}
const details=pathway==='Wedding'?select?.selectedOptions[0]?.textContent:clean(data.get('message'),1000);
const message=['Namaste Sai Studios!','Service: '+pathway,'Name: '+name,'Phone: '+phone,'Date: '+date,'Location: '+location,'Details: '+(details||'Please help me plan my project.'),'Please confirm availability, final pricing and booking terms.'].join('\n');
const link=document.createElement('a');link.href='https://wa.me/9779848036062?text='+encodeURIComponent(message);link.target='_blank';link.rel='noopener noreferrer';link.click();status.textContent='Your enquiry is ready in WhatsApp. Send it there to reach our team.';});

const motionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
if(!motionPreference.matches&&'IntersectionObserver' in window){
 const revealed=qsa<HTMLElement>('.section-heading,.editorial-grid>article,.service-grid>a,.project,.price-card,.team-card,.photograph-card,.home-story-grid,.kit-layout>div,.studio-photo-row,.contact-information,.booking-form,.inquiry-band .container');
 document.documentElement.classList.add('motion-ready');
 const watcher=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');watcher.unobserve(entry.target);}});},{threshold:0.08,rootMargin:'0px 0px -24px 0px'});
 revealed.forEach((element,i)=>{element.classList.add('reveal','reveal-delay-'+(i%3));watcher.observe(element);});
 motionPreference.addEventListener('change',e=>{if(e.matches){document.documentElement.classList.remove('motion-ready');watcher.disconnect();}},{once:true});
}
const header=qs<HTMLElement>('.header');
let headerRaised=false;
const updateHeader=()=>{const raised=window.scrollY>24;if(raised!==headerRaised){header?.classList.toggle('is-scrolled',raised);headerRaised=raised;}};
window.addEventListener('scroll',updateHeader,{passive:true});updateHeader();


filters.forEach(button=>button.addEventListener('click',()=>{if(motionPreference.matches)return;qsa<HTMLElement>('.work-section [data-project]:not([hidden])').forEach((card,i)=>card.animate([{opacity:.2,transform:'translateY(10px)'},{opacity:1,transform:'translateY(0)'}],{duration:320,delay:Math.min(i,5)*35,easing:'cubic-bezier(.2,.7,.2,1)'}));}));
