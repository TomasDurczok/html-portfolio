/**
 * Karviná redesign – minimal interactive layer
 * (prototype only; production would integrate with Marwel CMS)
 */

(function () {
  'use strict';

  // Mobile menu
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileClose = document.querySelector('.mobile-nav__close');

  function openMobileNav() {
    mobileNav?.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    mobileNav?.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  menuToggle?.addEventListener('click', openMobileNav);
  mobileClose?.addEventListener('click', closeMobileNav);
  mobileNav?.addEventListener('click', (e) => {
    if (e.target === mobileNav) closeMobileNav();
  });

  // Desktop mega menu
  document.querySelectorAll('.nav-item > button').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const item = btn.closest('.nav-item');
      const wasOpen = item.classList.contains('is-open');

      document.querySelectorAll('.nav-item.is-open').forEach((el) => {
        el.classList.remove('is-open');
      });

      if (!wasOpen) item.classList.add('is-open');
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.nav-item.is-open').forEach((el) => {
      el.classList.remove('is-open');
    });
  });

  // Hero slider
  const slides = document.querySelectorAll('.hero__slide');
  const dots = document.querySelectorAll('.hero__dot');
  let currentSlide = 0;
  let slideInterval;

  function goToSlide(index) {
    if (!slides.length) return;
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle('is-active', i === currentSlide));
    dots.forEach((d, i) => d.classList.toggle('is-active', i === currentSlide));
  }

  function startSlider() {
    if (slides.length <= 1) return;
    slideInterval = setInterval(() => goToSlide(currentSlide + 1), 6000);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      clearInterval(slideInterval);
      goToSlide(i);
      startSlider();
    });
  });

  if (slides.length) {
    goToSlide(0);
    startSlider();
  }

  // News tabs
  document.querySelectorAll('.news-tabs').forEach((tabBar) => {
    const buttons = tabBar.querySelectorAll('.news-tabs__btn');
    const panels = tabBar.parentElement.querySelectorAll('.news-panel');

    buttons.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        buttons.forEach((b) => b.classList.remove('is-active'));
        panels.forEach((p) => p.classList.remove('is-active'));
        btn.classList.add('is-active');
        panels[i]?.classList.add('is-active');
      });
    });
  });

  // Skeleton demo – remove after simulated load
  const skeletonBlocks = document.querySelectorAll('[data-skeleton]');
  if (skeletonBlocks.length) {
    setTimeout(() => {
      skeletonBlocks.forEach((el) => {
        el.removeAttribute('data-skeleton');
        el.classList.remove('is-loading');
      });
    }, 800);
  }
})();
