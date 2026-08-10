// ============ Mobile nav ============
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.classList.toggle('is-open', isOpen);
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ============ Header scroll state ============
const header = document.getElementById('siteHeader');
const onScroll = () => {
  header.classList.toggle('scrolled', window.scrollY > 12);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ============ Typewriter role text ============
const roles = ['Cientista da Computação', 'Criador de conteúdo', 'Especialista em produto'];
const typedEl = document.getElementById('typedRole');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (typedEl) {
  if (prefersReducedMotion) {
    typedEl.textContent = roles[0];
  } else {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const tick = () => {
      const current = roles[roleIndex];

      if (!deleting) {
        charIndex++;
        typedEl.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, 1500);
          return;
        }
      } else {
        charIndex--;
        typedEl.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      setTimeout(tick, deleting ? 35 : 60);
    };
    tick();
  }
}

// ============ Scroll reveal ============
const revealTargets = document.querySelectorAll(
  '.about-grid, .link-grid, .channel-card, .contact-inner, .section-title, .section-lede'
);
revealTargets.forEach(el => el.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  revealTargets.forEach(el => observer.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add('is-visible'));
}

// ============ Footer year ============
document.getElementById('year').textContent = new Date().getFullYear();
