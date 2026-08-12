/* ==========================================================================
   Vortex — shared site behaviour.
   Renders the header + footer on every page, then runs page-specific render.
   Set `data-page="<key>"` on <body> to mark the active nav item.
   ========================================================================== */
(function () {
  var V = window.VORTEX;
  var page = document.body.getAttribute('data-page') || '';

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function el(id) { return document.getElementById(id); }
  function isExternal(href) { return /^(https?:|mailto:)/.test(href); }
  function extAttr(href) { return isExternal(href) && !/^mailto:/.test(href) ? ' target="_blank" rel="noopener"' : ''; }
  window.vxEsc = esc;

  /* ---------- header ---------- */
  var headerHost = el('site-header');
  if (headerHost) {
    var navLinks = V.nav.map(function (n) {
      return '<a href="' + n.href + '"' + (n.key === page ? ' class="active" aria-current="page"' : '') + '>' + esc(n.label) + '</a>';
    }).join('');

    headerHost.innerHTML =
      '<a class="skip" href="#main">Skip to content</a>' +
      '<header>' +
        '<div class="wrap"><nav>' +
          '<a class="brand" href="index.html" aria-label="Vortex — home">' +
            '<img class="logo-mark" src="assets/img/vortex-mark.png" alt="">' +
            '<img class="logo-word" src="assets/img/vortex-wordmark.png" alt="Vortex">' +
          '</a>' +
          '<div class="links">' + navLinks + '</div>' +
          '<div class="nav-right">' +
            '<a class="src" href="' + V.site.github + '" target="_blank" rel="noopener">View on GitHub</a>' +
            '<button class="burger" id="burger" aria-label="Toggle navigation" aria-expanded="false">☰</button>' +
          '</div>' +
        '</nav></div>' +
        '<div class="mobile-menu" id="mobile-menu">' +
          V.nav.map(function (n) {
            return '<a href="' + n.href + '"' + (n.key === page ? ' class="active"' : '') + '>' + esc(n.label) + '</a>';
          }).join('') +
          '<a href="' + V.site.github + '" target="_blank" rel="noopener">View on GitHub ↗</a>' +
        '</div>' +
      '</header>';

    var burger = el('burger'), menu = el('mobile-menu');
    if (burger && menu) {
      burger.addEventListener('click', function () {
        var open = menu.classList.toggle('open');
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        burger.textContent = open ? '✕' : '☰';
      });
    }
  }

  /* ---------- footer ---------- */
  var footerHost = el('site-footer');
  if (footerHost) {
    footerHost.innerHTML =
      '<footer><div class="wrap">' +
        '<div class="foot-grid">' +
          '<div class="foot-brand">' +
            '<div class="brand">' +
              '<img class="logo-mark" src="assets/img/vortex-mark.png" alt="">' +
              '<img class="logo-word" src="assets/img/vortex-wordmark.png" alt="Vortex">' +
            '</div>' +
            '<p>An open-source RISC-V GPGPU — hardware, compiler, driver, and runtime — built for GPU architecture research.</p>' +
          '</div>' +
          '<div class="foot-col"><h4>Project</h4>' +
            '<a href="publications.html">Publications</a>' +
            '<a href="news.html">News</a>' +
            '<a href="tutorials.html">Workshop &amp; Tutorial</a>' +
            '<a href="blog.html">Blog</a>' +
          '</div>' +
          '<div class="foot-col"><h4>Get started</h4>' +
            '<a href="' + V.site.readme + '" target="_blank" rel="noopener">Build &amp; run Vortex ↗</a>' +
            '<a href="' + V.site.tutorialRepo + '" target="_blank" rel="noopener">Tutorial materials ↗</a>' +
            '<a href="publications.html#cite">How to cite</a>' +
            '<a href="' + V.site.licenseUrl + '" target="_blank" rel="noopener">' + esc(V.site.license) + ' ↗</a>' +
          '</div>' +
          '<div class="foot-col"><h4>Connect</h4>' +
            '<a href="teams.html">Teams</a>' +
            '<a href="community.html">Community</a>' +
            '<a href="' + V.site.github + '" target="_blank" rel="noopener">GitHub ↗</a>' +
            '<a href="' + V.site.mailingListForm + '" target="_blank" rel="noopener">Mailing list ↗</a>' +
            '<a href="mailto:' + V.site.contact + '">' + V.site.contact + '</a>' +
          '</div>' +
        '</div>' +
        '<div class="foot-bot">' +
          '<div>© ' + new Date().getFullYear() + ' Vortex · ' + esc(V.site.org) +
            ' · Released under the <a href="' + V.site.licenseUrl + '" target="_blank" rel="noopener">' + esc(V.site.license) + '</a></div>' +
          '<div><a class="mono" href="' + V.site.github + '" target="_blank" rel="noopener">github.com/vortexgpgpu</a></div>' +
        '</div>' +
      '</div></footer>';
  }

  /* ---------- renderers ---------- */
  function pubCard(p, opts) {
    opts = opts || {};
    var id = 'ab-' + Math.random().toString(36).slice(2, 9);
    var acts = [];
    (p.extra || []).forEach(function (x) {
      acts.push('<a href="' + x.href + '" target="_blank" rel="noopener">' + esc(x.label) + ' ↗</a>');
    });
    if (p.abstract && !opts.noAbstract) {
      acts.push('<button type="button" data-toggle="' + id + '">Show abstract</button>');
    }
    // The whole card is clickable when a publisher link exists. The title is a
    // real anchor so the link is keyboard-accessible and screen-reader friendly.
    var title = p.link
      ? '<h3><a class="pub-title" href="' + p.link + '" target="_blank" rel="noopener">' + esc(p.title) + '</a></h3>'
      : '<h3>' + esc(p.title) + '</h3>';
    var badge = p.link
      ? '<span class="go-hint" aria-hidden="true">Open ↗</span>'
      : '<span class="vn vn-muted">' + esc(p.note || 'Link unavailable') + '</span>';

    return '<article class="pub' + (p.link ? ' is-linked' : '') + '" data-year="' + p.year + '"' +
      (p.link ? ' data-href="' + p.link + '"' : '') + '>' +
      '<div class="top"><span class="yr">' + p.year + '</span><span class="vn">' + esc(p.venue) + '</span>' + badge + '</div>' +
      title +
      '<div class="au">' + esc(p.authors) + '</div>' +
      (p.abstract && !opts.noAbstract ? '<div class="ab" id="' + id + '">' + esc(p.abstract) + '</div>' : '') +
      (acts.length ? '<div class="acts">' + acts.join('') + '</div>' : '') +
      '</article>';
  }

  /* abstract toggle */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-toggle]');
    if (!btn) return;
    e.stopPropagation();
    var box = el(btn.getAttribute('data-toggle'));
    if (!box) return;
    var shown = box.classList.toggle('show');
    btn.textContent = shown ? 'Hide abstract' : 'Show abstract';
  });

  /* whole-card click → target page (ignores clicks on nested links/buttons
     and on text the user is selecting) */
  document.addEventListener('click', function (e) {
    var card = e.target.closest('.pub[data-href], .fcard[data-href], .person[data-href]');
    if (!card) return;
    if (e.target.closest('a, button')) return;
    var sel = w_getSelection();
    if (sel && String(sel).length > 0) return;
    window.open(card.getAttribute('data-href'), '_blank', 'noopener');
  });
  function w_getSelection() {
    try { return window.getSelection(); } catch (err) { return null; }
  }

  /* copy-to-clipboard for BibTeX blocks */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-copy]');
    if (!btn) return;
    var pre = el(btn.getAttribute('data-copy'));
    if (!pre) return;
    var text = pre.textContent;
    var done = function () {
      var old = btn.textContent;
      btn.textContent = 'Copied';
      setTimeout(function () { btn.textContent = old; }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { legacyCopy(text, done); });
    } else {
      legacyCopy(text, done);
    }
  });
  function legacyCopy(text, done) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'absolute';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); done(); } catch (err) { /* ignore */ }
    document.body.removeChild(ta);
  }

  /* News is always displayed newest-first regardless of array order in data.js
     (dates are ISO YYYY-MM-DD, so a plain string sort is correct). */
  function newsSorted() {
    return V.news.slice().sort(function (a, b) { return a.date < b.date ? 1 : a.date > b.date ? -1 : 0; });
  }
  function newsItem(n, i) {
    return '<article class="tl-item' + (i === 0 ? ' recent' : '') + '">' +
      '<div class="dt">' + esc(n.date) + '</div><h3>' + esc(n.title) + '</h3>' +
      (n.note ? '<p>' + esc(n.note) + '</p>' : '') +
      (n.href ? '<a class="more" href="' + n.href + '"' + extAttr(n.href) + '>' + esc(n.cta || 'Read more') + ' →</a>' : '') +
      '</article>';
  }

  /* Publications are always displayed newest-first, so entries can be appended
     to the array in any order. Array.prototype.sort is stable, so the relative
     order inside a year is whatever data.js lists. */
  function pubsSorted() {
    return V.publications.slice().sort(function (a, b) { return b.year - a.year; });
  }

  function personCard(p) {
    var name = p.site
      ? '<a class="person-link" href="' + p.site + '" target="_blank" rel="noopener">' + esc(p.name) + '</a>'
      : esc(p.name);
    return '<div class="person' + (p.site ? ' is-linked' : '') + '"' +
      (p.site ? ' data-href="' + p.site + '"' : '') + '>' +
      '<img src="' + p.img + '" alt="' + esc(p.name) + '" loading="lazy">' +
      '<div class="nm">' + name + '</div>' +
      '<div class="rl">' + esc([p.role, p.org].filter(Boolean).join(' · ')) + '</div>' +
      (p.email ? '<div class="em">' + esc(p.email) + '</div>' : '') +
      (p.site ? '<div class="hp">Homepage ↗</div>' : '') +
      '</div>';
  }

  /* ---------- page: home ---------- */
  if (page === 'home') {
    if (el('intro')) el('intro').textContent = V.intro;
    if (el('stats')) el('stats').innerHTML = V.highlights.map(function (h) {
      return '<div class="stat"><div class="k">' + esc(h.k) + '</div><div class="v">' + esc(h.v) + '</div><div class="d">' + esc(h.d) + '</div></div>';
    }).join('');
    if (el('features')) el('features').innerHTML = V.features.map(function (f) {
      return '<article class="fcard' + (f.href ? ' is-linked' : '') + '"' +
        (f.href ? ' data-href="' + f.href + '"' : '') + '>' +
        '<div class="ic">' + f.icon + '</div>' +
        (f.href
          ? '<h3><a class="fcard-title" href="' + f.href + '" target="_blank" rel="noopener">' + esc(f.title) + '</a></h3>'
          : '<h3>' + esc(f.title) + '</h3>') +
        '<p>' + esc(f.body) + '</p>' +
        (f.cta ? '<div class="fcta mono">' + esc(f.cta) + ' ↗</div>' : '') +
        '</article>';
    }).join('');
    if (el('feat')) el('feat').innerHTML =
      '<div class="feat"><div><div class="tag">Featured News</div><h3>' + esc(V.featured.title) + '</h3>' +
      '<div class="date">' + esc(V.featured.date) + '</div></div>' +
      '<a class="btn btn-white" href="' + V.featured.href + '">See details</a></div>';
    if (el('devmeet') && V.devMeeting) {
      var m = V.devMeeting;
      el('devmeet').innerHTML =
        '<div class="feat feat-alt"><div><div class="tag">' + esc(m.tag) + '</div>' +
        '<h3>' + esc(m.title) + '</h3>' +
        '<p class="feat-body">' + esc(m.body) + '</p></div>' +
        '<a class="btn btn-white" href="' + m.href + '" target="_blank" rel="noopener">' + esc(m.cta) + '</a></div>';
    }
    if (el('pubs')) {
      // Publications flagged `selected: true` in data.js, shown oldest-first so
      // the list reads as a progression: core ISA → graphics → compiler → tensor cores.
      var sel = pubsSorted().filter(function (p) { return p.selected; }).reverse();
      if (!sel.length) sel = pubsSorted().slice(0, 4);
      el('pubs').innerHTML = sel.map(function (p) { return pubCard(p, { noAbstract: true }); }).join('');
    }
    if (el('home-news')) el('home-news').innerHTML = newsSorted().slice(0, 4).map(newsItem).join('');
  }

  /* ---------- page: publications ---------- */
  if (page === 'publications') {
    var citeHost = el('cite-list');
    if (citeHost && V.citations) {
      citeHost.innerHTML = V.citations.map(function (c, i) {
        return '<div class="cite">' +
          '<div class="cite-top">' +
            '<div><h3>' + esc(c.label) + '</h3><p>' + esc(c.note) + '</p></div>' +
            '<div class="cite-acts">' +
              '<a class="btn btn-ghost btn-sm" href="' + c.link + '" target="_blank" rel="noopener">Publisher ↗</a>' +
              '<button type="button" class="btn btn-primary btn-sm" data-copy="bib-' + i + '">Copy BibTeX</button>' +
            '</div>' +
          '</div>' +
          '<pre class="bibtex" id="bib-' + i + '">' + esc(c.bibtex) + '</pre>' +
          '</div>';
      }).join('');
    }
    var all = pubsSorted();
    var host = el('pubs');
    if (host) {
      host.innerHTML = all.map(function (p) { return pubCard(p); }).join('');
      var years = all.map(function (p) { return p.year; })
        .filter(function (y, i, a) { return a.indexOf(y) === i; })
        .sort(function (a, b) { return b - a; });
      var fh = el('filters');
      if (fh) {
        fh.innerHTML = '<button class="on" data-y="all">All (' + V.publications.length + ')</button>' +
          years.map(function (y) {
            var n = V.publications.filter(function (p) { return p.year === y; }).length;
            return '<button data-y="' + y + '">' + y + ' (' + n + ')</button>';
          }).join('');
        fh.addEventListener('click', function (e) {
          var b = e.target.closest('button[data-y]');
          if (!b) return;
          Array.prototype.forEach.call(fh.querySelectorAll('button'), function (x) { x.classList.remove('on'); });
          b.classList.add('on');
          var y = b.getAttribute('data-y');
          Array.prototype.forEach.call(host.querySelectorAll('.pub'), function (c) {
            c.style.display = (y === 'all' || c.getAttribute('data-year') === y) ? '' : 'none';
          });
        });
      }
    }
  }

  /* ---------- page: news ---------- */
  if (page === 'news' && el('news')) {
    el('news').innerHTML = newsSorted().map(newsItem).join('');
  }

  /* ---------- page: tutorials ---------- */
  if (page === 'tutorials' && el('tuts')) {
    el('tuts').innerHTML = V.tutorials.map(function (t) {
      return '<article class="tut' + (t.upcoming ? ' is-upcoming' : '') + '">' +
        '<div class="band"><span class="yr">' + t.year + '</span>' +
        (t.upcoming ? '<span class="badge">Upcoming</span>' : '') + '</div>' +
        '<div class="body"><h3>' + esc(t.title) + '</h3>' +
        '<p class="st">' + esc(t.subtitle) + (t.note ? ' ' + esc(t.note) : '') + '</p>' +
        '<div class="meta">' + esc(t.date) + '</div>' +
        '<div class="go"><a class="btn btn-ghost btn-sm" href="' + t.href + '">See details →</a></div>' +
        '</div></article>';
    }).join('');
  }

  /* ---------- page: blog ---------- */
  if (page === 'blog' && el('posts')) {
    el('posts').innerHTML = V.blog.map(function (b) {
      return '<article class="post"><span class="chip">Blog</span>' +
        '<h3>' + esc(b.title) + '</h3>' +
        '<div class="au">' + esc(b.authors) + '</div>' +
        '<p class="ex">' + esc(b.excerpt) + '</p>' +
        '<div class="go"><a class="btn btn-ghost btn-sm" href="' + b.href + '">Read post →</a></div>' +
        '</article>';
    }).join('');
  }

  /* ---------- page: teams ---------- */
  if (page === 'teams') {
    if (el('faculty')) el('faculty').innerHTML = V.faculty.map(personCard).join('');
    if (el('members')) el('members').innerHTML = V.members.map(personCard).join('');
    if (el('alumni')) el('alumni').innerHTML = V.alumni.map(personCard).join('');
    if (el('sponsors')) {
      el('sponsors').innerHTML = V.sponsors.map(function (s) {
        var word = '<span class="wordmark">' + esc(s.short || s.name) + '</span>';
        return '<div class="sponsor" title="' + esc(s.name) + '">' +
          (s.img ? '<img src="' + s.img + '" alt="' + esc(s.name) + '" loading="lazy">' + word : word) +
          '</div>';
      }).join('');
      // If a hot-linked logo fails to load, hide it and show the wordmark instead.
      Array.prototype.forEach.call(el('sponsors').querySelectorAll('img'), function (img) {
        img.addEventListener('error', function () { img.remove(); });
        if (img.complete && img.naturalWidth === 0) img.remove();
      });
    }
    if (el('contributors')) el('contributors').innerHTML = V.contributors.map(function (c, i) {
      return '<details class="contrib"' + (i === 0 ? ' open' : '') + '>' +
        '<summary>' + esc(c.term) + '<span class="cnt">' + c.people.length + ' contributors</span></summary>' +
        '<p class="names">' + c.people.map(esc).join(' · ') + '</p>' +
        '</details>';
    }).join('');
    if (el('cnote')) {
      el('cnote').innerHTML = esc(V.contributorNote)
        .replace(V.site.contact, '<a href="mailto:' + V.site.contact + '">' + V.site.contact + '</a>');
    }
  }

  /* ---------- page: community ---------- */
  if (page === 'community' && el('comm')) {
    el('comm').innerHTML = V.community.map(function (c) {
      return '<article class="ccard"><div class="ic">' + c.icon + '</div>' +
        '<h3>' + esc(c.title) + '</h3><p>' + esc(c.body) + '</p>' +
        '<div class="go"><a class="btn btn-primary btn-sm" href="' + c.href + '"' + extAttr(c.href) + '>' + esc(c.cta) + '</a></div>' +
        '</article>';
    }).join('');
  }
})();
