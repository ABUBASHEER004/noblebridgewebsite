const qs = (s) => document.querySelector(s);
const qsa = (s) => [...document.querySelectorAll(s)];

qs('#year').textContent = new Date().getFullYear();

const navToggle = qs('.nav-toggle');
const nav = qs('.nav');
navToggle?.addEventListener('click', () => nav.classList.toggle('open'));
qsa('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const itemField = qs('#itemField');
qsa('.order-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    itemField.value = btn.dataset.item || '';
    qs('#order').scrollIntoView({behavior:'smooth'});
    setTimeout(() => itemField.focus(), 450);
  });
});
qsa('[data-item-link]').forEach(btn => {
  btn.addEventListener('click', () => setTimeout(() => { itemField.value = btn.dataset.itemLink || ''; }, 250));
});
qsa('[data-service]').forEach(btn => {
  btn.addEventListener('click', () => setTimeout(() => { itemField.value = btn.dataset.service || ''; }, 250));
});

qs('#orderForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const message = [
    'Hello NobleBridge Global, I would like to make an enquiry/order.',
    `Name: ${data.get('name')}`,
    `Phone: ${data.get('phone')}`,
    `Request type: ${data.get('type')}`,
    `Item/service: ${data.get('item') || 'Not specified'}`,
    `Quantity: ${data.get('quantity') || '1'}`,
    `Preferred delivery area: ${data.get('location') || 'Not specified'}`,
    `Details: ${data.get('details') || 'Not specified'}`
  ].join('\n');
  const url = 'https://wa.me/2349058961160?text=' + encodeURIComponent(message);
  window.open(url, '_blank', 'noopener');
});

const modal = qs('#cacModal');
const openCac = qs('#openCac');
const closeCac = qs('#closeCac');
openCac?.addEventListener('click', () => { modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); });
closeCac?.addEventListener('click', () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); });
modal?.addEventListener('click', (e) => { if(e.target.dataset.close) { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); }});
document.addEventListener('keydown', (e) => { if(e.key === 'Escape') { modal?.classList.remove('open'); modal?.setAttribute('aria-hidden','true'); }});

// Subtle reveal animation
const revealEls = qsa('.pillar,.product-card,.project-card,.document-card,.order-form,.promo-inner');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){ entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
    });
  }, {threshold:.08});
  revealEls.forEach(el => { el.classList.add('reveal'); observer.observe(el); });
}
