function toggleMenu() {
  document.getElementById('ham').classList.toggle('open');
  document.getElementById('mmenu').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('ham').classList.remove('open');
  document.getElementById('mmenu').classList.remove('open');
}
document.addEventListener('click', e => {
  if (!e.target.closest('nav') && !e.target.closest('.mob-menu')) closeMenu();
});
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {if (e.isIntersecting) e.target.classList.add('in')})
}, {threshold: 0.08});
document.querySelectorAll('.fade').forEach(el => obs.observe(el));
const secs = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links a:not(.nav-hire)');
window.addEventListener('scroll', () => {
  let cur = '';
  secs.forEach(s => {if (window.scrollY >= s.offsetTop - 90) cur = s.id});
  links.forEach(a => {a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--orange)' : ''});
}, {passive: true});
