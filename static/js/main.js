(function () {
  'use strict';

  /* ── 1. Active nav link ─────────────────────────────────── */
  function setActiveLinks() {
    var path = window.location.pathname.replace(/\/$/, '');
    // Normalise: strip .html suffix for comparison
    var pathBase = path.replace(/\.html$/, '');

    document.querySelectorAll('.desktop-nav a, .mobile-nav a').forEach(function (a) {
      var href = a.getAttribute('href') || '';
      var hrefBase = href.replace(/\.html$/, '').replace(/\/$/, '');

      var isHome = (hrefBase === '' || hrefBase === 'index' || hrefBase === '/index');
      var pageIsHome = (pathBase === '' || pathBase === '/index' || pathBase === '/');

      var active = isHome ? pageIsHome : (hrefBase && pathBase.endsWith(hrefBase));

      if (active) {
        a.classList.add('active');
      } else {
        a.classList.remove('active');
      }
    });
  }

  /* ── 2. Mobile menu toggle ──────────────────────────────── */
  function initMobileMenu() {
    var btn = document.querySelector('.hamburger-btn');
    var menu = document.querySelector('.mobile-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('open');
      btn.classList.toggle('open', isOpen);
      btn.setAttribute('aria-expanded', String(isOpen));
      btn.setAttribute('aria-label', isOpen ? 'بستن منو' : 'باز کردن منو');
    });

    // Close on link click
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── 3. Smooth scroll for anchor links ──────────────────── */
  function initSmoothScroll() {
    document.addEventListener('click', function (e) {
      var target = e.target.closest('a[href^="#"]');
      if (!target) return;
      var id = target.getAttribute('href').slice(1);
      var el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  /* ── Init ───────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    setActiveLinks();
    initMobileMenu();
    initSmoothScroll();
  });
})();
