const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(menuToggle){menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav?.classList.remove('open');menuToggle?.setAttribute('aria-expanded','false')}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const lightbox=document.getElementById('lightbox');const lightboxImage=document.getElementById('lightboxImage');
document.querySelectorAll('[data-lightbox]').forEach(btn=>btn.addEventListener('click',()=>{lightboxImage.src=btn.dataset.lightbox;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false')}));
function closeLightbox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');lightboxImage.src=''}
document.querySelector('.lightbox-close')?.addEventListener('click',closeLightbox);lightbox?.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox()});
const form=document.getElementById('contactForm');const toast=document.getElementById('toast');
form?.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);const service=data.get('service');const name=data.get('name');const phone=data.get('phone');const message=data.get('message');const text=`Hello NobleBridge Global,%0A%0AI'd like to make an enquiry.%0A%0AService: ${encodeURIComponent(service)}%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0ARequest: ${encodeURIComponent(message)}%0A%0AThank you.`;toast.classList.add('show');setTimeout(()=>{window.open(`https://wa.me/2349058961160?text=${text}`,'_blank','noopener,noreferrer');toast.classList.remove('show')},500)});
document.getElementById('year').textContent=new Date().getFullYear();
