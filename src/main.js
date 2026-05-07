// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  menuOpen = !menuOpen;
  if (menuOpen) {
    navLinks.style.cssText = [
      'display:flex',
      'flex-direction:column',
      'position:fixed',
      'top:0', 'left:0', 'right:0', 'bottom:0',
      'background:rgba(26,26,20,0.97)',
      'align-items:center',
      'justify-content:center',
      'gap:2.5rem',
      'z-index:999',
    ].join(';');
    navLinks.querySelectorAll('a').forEach(a => {
      a.style.cssText = 'font-size:1.1rem;color:rgba(247,243,236,0.8);letter-spacing:0.2em;';
    });
  } else {
    navLinks.removeAttribute('style');
    navLinks.querySelectorAll('a').forEach(a => a.removeAttribute('style'));
  }
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    menuOpen = false;
    navLinks.removeAttribute('style');
    navLinks.querySelectorAll('a').forEach(link => link.removeAttribute('style'));
  });
});
