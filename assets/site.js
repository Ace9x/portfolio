(()=>{const d=document,rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
// mobile nav
d.querySelectorAll('[data-navtoggle]').forEach(b=>{const n=d.getElementById(b.getAttribute('aria-controls'));b.addEventListener('click',()=>{const o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!o));n.classList.toggle('open',!o)})});
// reveal
const els=d.querySelectorAll('.rv');if(rm||!('IntersectionObserver'in window)){els.forEach(e=>e.classList.add('in'))}else{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});els.forEach(e=>io.observe(e))}
// demo forms: never send anything
d.querySelectorAll('form[data-demo]').forEach(f=>{f.addEventListener('submit',e=>{e.preventDefault();const out=f.querySelector('[data-out]');let bad=null;f.querySelectorAll('[required]').forEach(i=>{const ok=i.type==='checkbox'?i.checked:i.value.trim()!==''&&i.checkValidity();i.setAttribute('aria-invalid',String(!ok));if(!ok&&!bad)bad=i});if(bad){out.textContent='Please complete the highlighted fields.';out.className='notice err';bad.focus();return}out.textContent=f.dataset.demo||'Demo only: nothing was sent or stored. This is a concept site.';out.className='notice ok';f.reset()})});
// tabs
d.querySelectorAll('[role=tablist]').forEach(tl=>{const tabs=[...tl.querySelectorAll('[role=tab]')];const sel=t=>{tabs.forEach(x=>{const on=x===t;x.setAttribute('aria-selected',String(on));x.tabIndex=on?0:-1;d.getElementById(x.getAttribute('aria-controls')).hidden=!on})};tabs.forEach((t,i)=>{t.addEventListener('click',()=>sel(t));t.addEventListener('keydown',e=>{let j=e.key==='ArrowRight'?i+1:e.key==='ArrowLeft'?i-1:null;if(j===null)return;j=(j+tabs.length)%tabs.length;tabs[j].focus();sel(tabs[j])})})});
// chips (single-select groups)
d.querySelectorAll('[data-chips]').forEach(g=>g.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;g.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));const t=d.getElementById(g.dataset.chips);if(t)t.value=b.dataset.v||b.textContent.trim()}));
// bag counter (front-end only)
const bag=d.querySelector('[data-bag]');if(bag){let n=+(sessionStorage.getItem('ffbag')||0);bag.textContent=n;d.querySelectorAll('[data-add]').forEach(b=>b.addEventListener('click',()=>{n++;sessionStorage.setItem('ffbag',n);bag.textContent=n;const s=d.getElementById('bagmsg');if(s)s.textContent=b.dataset.add+' added to bag (demo, no checkout).'}))}
// year
d.querySelectorAll('[data-y]').forEach(e=>e.textContent=new Date().getFullYear());
})();
