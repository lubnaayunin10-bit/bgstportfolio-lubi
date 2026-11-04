
/* =====================================================================
   4) ENGINE (no need to edit below this line)
   ===================================================================== */
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const BY = Object.fromEntries(WORKS.map(w => [w.id, {...w, ...(FILES[w.id]||{})}]));
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* ---- Social icons ---- */
const ICONS = {
  linkedin:'<svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11.5H3zM10 9.75h3.8v1.6h.06c.53-1 1.84-2.06 3.78-2.06 4.04 0 4.78 2.66 4.78 6.12v5.8h-4v-5.15c0-1.23-.02-2.8-1.7-2.8-1.7 0-1.96 1.33-1.96 2.7v5.25h-4z"/></svg>',
  instagram:'<svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM17.3 5.8a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z"/></svg>',
  tiktok:'<svg viewBox="0 0 24 24"><path d="M16.6 2h-3.2v13.3a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .8.1V9.2a6.1 6.1 0 1 0 5.3 6.1V8.6a7.4 7.4 0 0 0 4.3 1.4V6.8a4.3 4.3 0 0 1-4.3-4.8z"/></svg>',
  whatsapp:'<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.2 14.8l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 0 1 12 4zm-3 3.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.7 1.2 2.9c.1.2 2 3.1 4.9 4.3 2.4 1 2.9.8 3.4.7.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4l-.5-.3-1.8-.9c-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.5-1.8-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.3.3-.4.1-.2 0-.3 0-.5l-.8-2c-.2-.5-.4-.5-.6-.5z"/></svg>'
};
$$('[data-socials]').forEach(box => {
  Object.keys(ICONS).forEach(k => {
    if (!LINKS[k]) return;
    const a = document.createElement('a');
    a.href = LINKS[k]; a.target = '_blank'; a.rel = 'noopener';
    a.setAttribute('aria-label', k); a.innerHTML = ICONS[k]; box.appendChild(a);
  });
});
$$('[data-link]').forEach(a => {
  const u = LINKS[a.dataset.link];
  if (u) { a.href = u; a.target = '_blank'; a.rel = 'noopener'; } else a.style.display = 'none';
});
if (PROFILE_PHOTO) $('#avatar').innerHTML = `<img src="${esc(PROFILE_PHOTO)}" alt="Lubna Qurrotu A’yunin">`;
$('#yr').textContent = new Date().getFullYear();

/* ---- Photo frames: one frame per slide; photo = images[i], caption = slides[i] ---- */
function framesOf(w) {
  const imgs = w.images || [], sl = w.slides || [];
  const n = Math.max(sl.length, imgs.length, 1);
  return Array.from({ length: n }, (_, i) => ({ 
    img: sl[i]?.img || imgs[i] || '', 
    cap: sl[i] || { t: w.title, b: [w.summary] } 
  }));
}
function frameHTML(w, f) {
  // Gunakan f.img jika ada, atau fallback ke f.cap.img dari slides, atau w.icon jika tidak ada gambar
  const imageSrc = f.img || f.cap.img;
  return `<div class="fr">
    ${imageSrc ? `<img src="${esc(imageSrc)}" alt="${esc(f.cap.t)}" class="w-full h-full object-cover" loading="lazy" draggable="false">` : `<div class="ph-in"><span>${w.icon}</span><small>${esc(f.cap.t)}</small></div>`}
  </div>`;
}
// hide a broken photo so the placeholder behind it shows
document.addEventListener('error', e => { if (e.target.tagName === 'IMG' && e.target.closest('.fr')) e.target.style.display = 'none'; }, true);

/* swipe + mouse-drag + scroll-sync for any .track */
let dragMoved = false;
function initTrack(track, onIndex) {
  const idx = () => Math.round(track.scrollLeft / Math.max(track.clientWidth, 1));
  track.addEventListener('scroll', () => onIndex(idx()), { passive: true });
  let d = null;
  track.addEventListener('pointerdown', e => {
    if (e.pointerType !== 'mouse') return;
    d = { x: e.clientX, s: track.scrollLeft, m: false };
  });
  track.addEventListener('pointermove', e => {
    if (!d) return;
    const dx = e.clientX - d.x;
    if (!d.m && Math.abs(dx) > 5) { d.m = true; track.style.scrollSnapType = 'none'; track.setPointerCapture(e.pointerId); }
    if (d.m) track.scrollLeft = d.s - dx;
  });
  const end = () => {
    if (!d) return;
    if (d.m) {
      dragMoved = true; setTimeout(() => dragMoved = false, 60);
      const i = idx(); track.style.scrollSnapType = '';
      track.scrollTo({ left: i * track.clientWidth, behavior: 'smooth' });
    }
    d = null;
  };
  track.addEventListener('pointerup', end); track.addEventListener('pointercancel', end);
}
const slideTo = (track, i) => track.scrollTo({ left: i * track.clientWidth, behavior: 'smooth' });

/* ---- Render work cards ---- */
function card(w) {
  const tools = w.skills.slice(0, 4).join(' · ');
  const fr = framesOf(w), multi = fr.length > 1;
  return `<article class="card tilt work" tabindex="0" role="button" aria-label="Open ${esc(w.title)}" data-id="${w.id}" ${w.sub ? `data-c="${w.sub}"` : ''}>
    <div class="ico">${w.icon}</div>
    <span class="tag">${esc(w.kind)}</span>
    <h3>${esc(w.title)}</h3>
    <p class="meta">${esc(w.org)} · ${esc(w.period)}</p>
    <p>${esc(w.summary)}</p>
    <p class="stack">${esc(tools)}</p>
    <div class="thumbs">
      <div class="track">${fr.map(f => frameHTML(w, f)).join('')}</div>
      ${multi ? `<button type="button" class="tn prev" aria-label="Previous photo">‹</button><button type="button" class="tn next" aria-label="Next photo">›</button>
      <span class="tdots">${fr.map((_, i) => `<i class="${i ? '' : 'on'}"></i>`).join('')}</span>` : ''}
    </div>
    <span class="open">Open overlay <i>→</i></span>
  </article>`;
}
$$('[data-render]').forEach(box => {
  box.innerHTML = WORKS.filter(w => w.cat === box.dataset.render).map(card).join('');
});
$$('.work .thumbs').forEach(t => {
  const track = $('.track', t), dots = $$('.tdots i', t);
  initTrack(track, i => dots.forEach((d, k) => d.classList.toggle('on', k === i)));
  const step = d => { const n = track.children.length, cur = Math.round(track.scrollLeft / track.clientWidth); slideTo(track, (cur + d + n) % n); };
  const p = $('.prev', t), n = $('.next', t);
  if (p) { p.onclick = () => step(-1); n.onclick = () => step(1); }
});

/* ---- Filters ---- */
$$('.filters button').forEach(b => b.addEventListener('click', () => {
  $$('.filters button').forEach(x => x.classList.remove('on')); b.classList.add('on');
  $$('#projects .card').forEach(c => c.hidden = !(b.dataset.f === 'all' || c.dataset.c === b.dataset.f));
}));

/* ---- Overlay ---- */
const modal = $('#modal'), stage = $('#m-stage'), tabs = $('#m-tabs');
let lastFocus = null, slideIdx = 0, slideList = [];

function embedSrc(u) {
  if (/\.pptx?($|\?)/i.test(u)) return 'https://view.officeapps.live.com/op/embed.aspx?src=' + encodeURIComponent(new URL(u, location.href).href);
  return u;
}
/* Photos inside the frame; the numbered caption sits BELOW the frame and changes per photo */
function slidesView(w) {
  slideList = framesOf(w); slideIdx = 0;
  stage.innerHTML = `<div class="deck">
      <div class="pframe"><div class="track" id="ptrack">${slideList.map(f => frameHTML(w, f)).join('')}</div></div>
      <div class="deck-bar"><button type="button" id="prev" aria-label="Previous photo">‹</button><span id="dots"></span><button type="button" id="next" aria-label="Next photo">›</button></div>
      <div class="slide" id="slide" aria-live="polite"></div>
    </div>`;
  $('#prev').onclick = () => go(-1); $('#next').onclick = () => go(1);
  initTrack($('#ptrack'), i => { if (i !== slideIdx && slideList[i]) { slideIdx = i; paint(); } });
  paint();
}
function paint() {
  const s = slideList[slideIdx].cap, n = slideList.length;
  $('#slide').innerHTML = `<small>${String(slideIdx + 1).padStart(2, '0')} / ${String(n).padStart(2, '0')}</small><h4>${esc(s.t)}</h4><ul>${s.b.map(x => `<li>${esc(x)}</li>`).join('')}</ul>`;
  $('#dots').innerHTML = slideList.map((_, i) => `<i class="${i === slideIdx ? 'on' : ''}"></i>`).join('');
}
function go(d) { slideTo($('#ptrack'), (slideIdx + d + slideList.length) % slideList.length); }
function embedView(w) { stage.innerHTML = `<iframe src="${esc(embedSrc(w.embed))}" title="${esc(w.title)}" allowfullscreen loading="lazy"></iframe>`; }
function openWork(id) {
  const w = BY[id]; if (!w) return;
  lastFocus = document.activeElement;
  $('#m-kind').textContent = w.kind;
  $('#m-title').textContent = w.title;
  $('#m-meta').textContent = `${w.org} · ${w.period}`;
  $('#m-sum').textContent = w.summary;
  $('#m-high').innerHTML = w.highlights.map(h => `<li>${esc(h)}</li>`).join('');
  $('#m-skills').innerHTML = w.skills.map(s => `<span>${esc(s)}</span>`).join('');
  $('#m-links').innerHTML = (w.links || []).map(l => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join('');
  const modes = [['Photos and summary', () => slidesView(w)]];
  if (w.embed) modes.push(['Original file', () => embedView(w)]);
  tabs.innerHTML = modes.length > 1 ? modes.map((m, i) => `<button type="button" class="${i ? '' : 'on'}" data-i="${i}">${m[0]}</button>`).join('') : '';
  $$('button', tabs).forEach(b => b.onclick = () => { $$('button', tabs).forEach(x => x.classList.remove('on')); b.classList.add('on'); modes[b.dataset.i][1](); });
  modes[0][1]();
  modal.hidden = false; document.body.classList.add('lock');
  requestAnimationFrame(() => modal.classList.add('show'));
  $('.m-close').focus();
}
function closeWork() {
  modal.classList.remove('show'); document.body.classList.remove('lock');
  setTimeout(() => { modal.hidden = true; stage.innerHTML = ''; }, 260);
  if (lastFocus) lastFocus.focus();
}
document.addEventListener('click', e => {
  if (e.target.closest('.tn') || dragMoved) return;
  const c = e.target.closest('.work'); if (c) return openWork(c.dataset.id);
  const o = e.target.closest('[data-open]'); if (o) return openWork(o.dataset.open);
  if (e.target.closest('[data-close]')) closeWork();
});
document.addEventListener('keydown', e => {
  if (modal.hidden) {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList && e.target.classList.contains('work')) { e.preventDefault(); openWork(e.target.dataset.id); }
    return;
  }
  if (e.key === 'Escape') closeWork();
  if (e.key === 'ArrowRight' && $('#ptrack')) go(1);
  if (e.key === 'ArrowLeft' && $('#ptrack')) go(-1);
  if (e.key === 'Tab') {
    const f = $$('button,a[href],iframe', modal).filter(x => x.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

/* ---- Mobile menu ---- */
$$('.nav nav a').forEach(a => a.addEventListener('click', () => document.body.classList.remove('menu')));

/* ---- Background: floating library, fireflies, bookshelf dividers ---- */
const rnd = (a, b) => a + Math.random() * (b - a);
const small = innerWidth < 760;
const fl = $('#floaters');
const FLOATERS = ['📚','📖','📕','📗','📘','📙','📜','🌿','🍃','🦕','🦖','🦴','🥚','🪶','🔖'];
for (let i = 0; i < (small ? 16 : 34); i++) {
  const s = document.createElement('span');
  s.textContent = FLOATERS[Math.floor(Math.random() * FLOATERS.length)];
  s.style.cssText = `left:${rnd(0,98)}%;font-size:${rnd(1.2,3.6)}rem;opacity:${rnd(.12,.3)};animation-duration:${rnd(18,40)}s;animation-delay:-${rnd(0,40)}s;--dx:${rnd(-80,80)}px;--rot:${rnd(-40,40)}deg`;
  fl.appendChild(s);
}
const ff = $('#fireflies');
for (let i = 0; i < (small ? 14 : 30); i++) {
  const s = document.createElement('i');
  s.style.cssText = `left:${rnd(0,100)}%;top:${rnd(5,95)}%;animation-duration:${rnd(5,12)}s;animation-delay:-${rnd(0,12)}s`;
  ff.appendChild(s);
}
const SPINES = ['#7a2e1d','#1d4a2c','#d4961c','#3a2a14','#8a5d08','#2f6b3f','#a8431f','#f5c04a','#0e2a1a','#6b4a12'];
$$('[data-shelf]').forEach(sh => {
  for (let i = 0; i < 90; i++) {
    const b = document.createElement('span');
    const h = rnd(46, 92);
    b.style.cssText = `height:${h}px;width:${rnd(9,22)}px;background:linear-gradient(90deg,rgba(0,0,0,.35),transparent 30%,rgba(255,255,255,.12) 55%,rgba(0,0,0,.3)),${SPINES[Math.floor(Math.random()*SPINES.length)]};${Math.random()<.08?`transform:rotate(${rnd(-14,14)}deg);transform-origin:bottom`:''}`;
    if (Math.random() < .35) b.innerHTML = '<u></u>';
    sh.appendChild(b);
  }
});

/* ---- Reveal on scroll and skill bars ---- */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); const s = e.target.querySelector('.skills'); if (s) s.classList.add('go'); io.unobserve(e.target); }
}), { threshold: .12 });
$$('section:not(.hero) .card, section h2, .stat, .shelf').forEach(el => { el.classList.add('reveal'); io.observe(el); });

/* ---- 3D tilt, hero parallax, dino cursor ---- */
$$('.tilt').forEach(c => {
  c.addEventListener('mousemove', e => {
    const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    c.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(6px)`;
  });
  c.addEventListener('mouseleave', () => c.style.transform = '');
});
const st = $('#stage');
addEventListener('mousemove', e => {
  const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
  st.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 10}deg)`;
  document.documentElement.style.setProperty('--px', (x * 24).toFixed(1) + 'px');
  document.documentElement.style.setProperty('--py', (y * 16).toFixed(1) + 'px');
});
const dc = $('#dino-cursor'); let last = 0;
addEventListener('mousemove', e => {
  dc.style.transform = `translate(${e.clientX - 6}px,${e.clientY - 6}px)`;
  const n = Date.now();
  if (n - last > 140) {
    last = n; const p = document.createElement('span');
    p.className = 'paw'; p.textContent = '🐾'; p.style.left = e.clientX + 'px'; p.style.top = e.clientY + 'px';
    document.body.appendChild(p); setTimeout(() => p.remove(), 1100);
  }
});
