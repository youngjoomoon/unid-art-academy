// ===== 유니드아트 미술학원 =====

// 모바일 메뉴 토글
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('is-open');
  navToggle.classList.toggle('is-open');
});

// 메뉴 항목 클릭 시 모바일 메뉴 닫기
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle.classList.remove('is-open');
  });
});

// 스크롤 시 헤더 그림자 + 맨 위로 버튼
const header = document.getElementById('header');
const toTop = document.getElementById('toTop');

window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 10);
  toTop.classList.toggle('is-visible', window.scrollY > 500);
}, { passive: true });

// 스크롤 리빌 애니메이션
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
