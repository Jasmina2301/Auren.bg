(function () {
  function init() {
    var headers = document.querySelectorAll('.site-header .header-inner');
    headers.forEach(function (inner) {
      var nav = inner.querySelector('.site-nav');
      if (!nav) return;

      var btn = inner.querySelector('.menu-toggle');
      if (!btn) {
        btn = document.createElement('button');
        btn.className = 'menu-toggle';
        btn.type = 'button';
        btn.setAttribute('aria-label', 'Отвори меню');
        btn.setAttribute('aria-expanded', 'false');
        btn.innerHTML = '&#9776;';
        nav.parentNode.insertBefore(btn, nav);
      }

      btn.addEventListener('click', function () {
        var open = nav.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        btn.innerHTML = open ? '&times;' : '&#9776;';
      });

      nav.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          if (window.innerWidth <= 920) {
            nav.classList.remove('is-open');
            btn.setAttribute('aria-expanded', 'false');
            btn.innerHTML = '&#9776;';
          }
        });
      });

      window.addEventListener('resize', function () {
        if (window.innerWidth > 920) {
          nav.classList.remove('is-open');
          btn.setAttribute('aria-expanded', 'false');
          btn.innerHTML = '&#9776;';
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
