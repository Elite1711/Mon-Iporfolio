// =============================================
//  ELITE PORTFOLIO — Script principal
// =============================================

// --- Theme Toggle ---
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function setTheme(dark) {
  document.body.classList.toggle('dark', dark);
  themeIcon.className = dark ? 'fas fa-sun' : 'fas fa-moon';
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') setTheme(true);

themeBtn.addEventListener('click', () => {
  setTheme(!document.body.classList.contains('dark'));
});

// --- Burger Menu ---
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// --- Skills Animation on Scroll ---
const skillsSection = document.getElementById('skills');
let skillsAnimated = false;

function animateSkills() {
  if (skillsAnimated) return;
  const rect = skillsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.85) {
    skillsSection.querySelector('.skills-categories').classList.add('skills-animated');
    skillsAnimated = true;
  }
}

window.addEventListener('scroll', animateSkills);
animateSkills();

// --- Back to Top ---
const backTop = document.getElementById('back-top');
window.addEventListener('scroll', () => {
  backTop.classList.toggle('show', window.scrollY > 400);
});

// --- Contact Form (basic) ---
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    btn.innerHTML = '<i class="fas fa-check"></i> Message envoyé !';
    btn.style.background = '#10b981';
    setTimeout(() => {
      btn.innerHTML = 'Envoyer le message <i class="fas fa-paper-plane"></i>';
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}

// --- Smooth active nav link on scroll ---
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-item');

function updateNav() {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });
  navItems.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}
window.addEventListener('scroll', updateNav);
