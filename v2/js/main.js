// ===== 유니드아트 2안 — 인터랙션 =====

// 내비게이션: 스크롤 시 그림자
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// 모바일 메뉴 토글
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('is-open');
  navLinks.classList.toggle('is-open');
});
navLinks.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    navToggle.classList.remove('is-open');
    navLinks.classList.remove('is-open');
  })
);

// 스크롤 리빌 (형제 reveal끼리 순차 등장)
const reveals = document.querySelectorAll('.reveal');
reveals.forEach((el) => {
  const siblings = el.parentElement.querySelectorAll(':scope > .reveal');
  const idx = Array.prototype.indexOf.call(siblings, el);
  if (idx > 0) el.style.setProperty('--d', `${Math.min(idx * 0.1, 0.5)}s`);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);
reveals.forEach((el) => observer.observe(el));

// 히어로 패럴랙스 (살짝)
const heroContent = document.getElementById('heroContent');
window.addEventListener(
  'scroll',
  () => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      heroContent.style.transform = `translateY(${y * 0.18}px)`;
      heroContent.style.opacity = String(Math.max(0, 1 - y / (window.innerHeight * 0.7)));
    }
  },
  { passive: true }
);
