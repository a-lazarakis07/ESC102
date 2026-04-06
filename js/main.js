// Active nav link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { threshold: 0.3 });

sections.forEach(s => observer.observe(s));

// Project accordion
document.querySelectorAll('.project-card-header').forEach(header => {
  header.addEventListener('click', () => {
    const body = header.nextElementSibling;
    const isOpen = body.classList.contains('open');
    // close all
    document.querySelectorAll('.project-body').forEach(b => b.classList.remove('open'));
    if (!isOpen) body.classList.add('open');
  });
});

// CTMF expand/collapse
document.querySelectorAll('.ctmf-toggle').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const card = btn.closest('.ctmf-card');
    const body = card.querySelector('.ctmf-body');
    const open = body.classList.toggle('open');
    btn.textContent = open ? '[ collapse ]' : '[ expand ]';
  });
});

// Typewriter effect for hero subtitle
const tw = document.getElementById('typewriter');
if (tw) {
  const text = tw.getAttribute('data-text');
  let i = 0;
  tw.textContent = '';
  const type = () => {
    if (i < text.length) {
      tw.textContent += text[i++];
      setTimeout(type, 28);
    }
  };
  setTimeout(type, 600);
}
