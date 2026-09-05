(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  function localeState() {
    var path = window.location.pathname || '/';
    var htmlLang = (document.documentElement.lang || '').toLowerCase();
    var isIt = /^\/it(?:\/|$)/.test(path) || htmlLang === 'it' || htmlLang.indexOf('it-') === 0;
    return { isIt: isIt, path: path };
  }

  function switchUrl(target) {
    var path = window.location.pathname || '/';
    var search = window.location.search || '';
    var hash = window.location.hash || '';
    if (target === 'it') {
      if (/^\/it(?:\/|$)/.test(path)) return path + search + hash;
      return (path === '/' ? '/it' : '/it' + path) + search + hash;
    }
    var enPath = path.replace(/^\/it(?=\/|$)/, '') || '/';
    return enPath + search + hash;
  }

  function makeSwitcher(isIt) {
    var wrap = document.createElement('div');
    wrap.className = 'lsg-language-switcher';
    wrap.setAttribute('aria-label', isIt ? 'Seleziona lingua' : 'Select language');
    wrap.innerHTML =
      '<a lang="en" href="' + switchUrl('en') + '" class="' + (!isIt ? 'is-active' : '') + '">EN</a>' +
      '<span aria-hidden="true">/</span>' +
      '<a lang="it" href="' + switchUrl('it') + '" class="' + (isIt ? 'is-active' : '') + '">IT</a>';
    return wrap;
  }

  function injectStyles() {
    if (document.getElementById('lsg-bilingual-style')) return;
    var style = document.createElement('style');
    style.id = 'lsg-bilingual-style';
    style.textContent =
      '.lsg-language-switcher{display:flex;align-items:center;gap:6px;font-size:12px;font-weight:700;letter-spacing:.06em;color:#17392f;white-space:nowrap;font-family:Arial,Helvetica,sans-serif}' +
      '.lsg-language-switcher a{color:inherit;text-decoration:none;opacity:.52}' +
      '.lsg-language-switcher a.is-active{opacity:1;text-decoration:underline;text-underline-offset:3px}' +
      '.lsg-language-switcher--fallback{position:fixed;top:14px;right:18px;z-index:2147483000;background:#fffdfa;border:1px solid #ded9cf;border-radius:5px;padding:8px 10px;box-shadow:0 3px 12px rgba(20,31,26,.08)}' +
      '@media(max-width:800px){.lsg-language-switcher{font-size:11px;gap:5px}.lsg6-actions{gap:10px!important}.lsg-language-switcher--fallback{top:10px;right:10px;padding:7px 9px}}';
    document.head.appendChild(style);
  }

  function injectSwitcher(root, isIt) {
    if (document.querySelector('.lsg-language-switcher')) return;
    var sw = makeSwitcher(isIt);
    if (root) {
      var actions = root.querySelector('.lsg6-actions');
      if (actions) {
        actions.insertBefore(sw, actions.firstChild);
        return;
      }
    }

    var header = document.querySelector('#header-group header, header.header, header');
    if (header) {
      sw.style.marginLeft = 'auto';
      sw.style.marginRight = '18px';
      sw.style.position = 'relative';
      sw.style.zIndex = '20';
      header.appendChild(sw);
      return;
    }

    sw.classList.add('lsg-language-switcher--fallback');
    document.body.appendChild(sw);
  }

  function setText(root, selector, value) {
    var el = root.querySelector(selector);
    if (el) el.textContent = value;
  }

  function setHtml(root, selector, value) {
    var el = root.querySelector(selector);
    if (el) el.innerHTML = value;
  }

  function localizeHomepage(root) {
    var brandSub = root.querySelector('.lsg6-brand-sub');
    if (brandSub) brandSub.textContent = 'Più prenotazioni. Un anno più forte.';

    var nav = root.querySelectorAll('.lsg6-nav a');
    var labels = ['Home', 'Pacchetti', 'Come funziona', 'Chi siamo', 'FAQ'];
    var links = ['/it', '/it#packages', '/it/pages/how-it-works', '/it/pages/about', '/it/pages/faq'];
    Array.prototype.forEach.call(nav, function (a, i) {
      if (labels[i]) { a.textContent = labels[i]; a.href = links[i]; }
    });

    var mobile = root.querySelectorAll('.lsg6-mobile-menu nav a');
    Array.prototype.forEach.call(mobile, function (a, i) {
      if (labels[i]) { a.textContent = labels[i]; a.href = links[i]; }
    });

    var start = root.querySelector('.lsg6-get-started');
    if (start) { start.textContent = 'Inizia'; start.href = '/it#packages'; }

    var brand = root.querySelector('.lsg6-brand');
    if (brand) { brand.href = '/it'; brand.setAttribute('aria-label', 'Home LowSeasonGrowth'); }

    var menuSummary = root.querySelector('.lsg6-mobile-menu summary');
    if (menuSummary) menuSummary.setAttribute('aria-label', 'Apri menu');

    var cart = root.querySelector('.lsg6-cart');
    if (cart) {
      cart.setAttribute('aria-label', 'Carrello');
      if (!/^\/it(?:\/|$)/.test(new URL(cart.href, window.location.origin).pathname)) cart.href = '/it/cart';
    }

    setText(root, '.lsg6-hero .lsg6-kicker', 'Strategia per la bassa stagione delle strutture indipendenti');
    setHtml(root, '.lsg6-hero h1', 'Trasforma i mesi tranquilli<br>in un motivo per prenotare.');
    setText(root, '.lsg6-lead', 'Consulenza pratica per B&B indipendenti e piccole strutture ricettive che vogliono un posizionamento più chiaro, offerte stagionali più forti e più prenotazioni dirette.');

    var heroButtons = root.querySelectorAll('.lsg6-hero-buttons a');
    if (heroButtons[0]) { heroButtons[0].textContent = 'Scopri i pacchetti'; heroButtons[0].href = '/it#packages'; }
    if (heroButtons[1]) { heroButtons[1].textContent = 'Come funziona'; heroButtons[1].href = '/it/pages/how-it-works'; }
    setHtml(root, '.lsg6-hero-note span', 'Un’attività<br>ricettiva più<br>sostenibile');

    setText(root, '.lsg6-packages-head .lsg6-kicker', 'I nostri pacchetti');
    setText(root, '.lsg6-packages-head h2', 'Scegli il supporto di cui ha bisogno la tua struttura');
    setText(root, '.lsg6-packages-head > p:last-child', 'Soluzioni chiare. Risultati concreti. Pensate per strutture indipendenti.');

    var cardData = [
      {
        title: 'Opportunity Audit',
        copy: 'Una diagnosi mirata per individuare lacune di posizionamento nella bassa stagione e opportunità rapide.',
        items: ['Revisione del posizionamento attuale', 'Analisi del potenziale di bassa stagione', 'Raccomandazioni operative'],
        button: 'Ottieni Opportunity Audit'
      },
      {
        title: 'Booking Sprint',
        copy: 'Un percorso pratico su offerta e messaggi per aiutare la tua struttura a convertire le date più tranquille.',
        items: ['Strategia dell’offerta su misura', 'Indicazioni su messaggi e contenuti', 'Piano di implementazione'],
        button: 'Ottieni Booking Sprint'
      },
      {
        title: 'Growth Partner',
        copy: 'Supporto strategico più approfondito per strutture che vogliono una direzione commerciale più chiara.',
        items: ['Analisi e strategia approfondite', 'Ottimizzazione di offerta e distribuzione', 'Supporto e revisione continuativi'],
        button: 'Ottieni Growth Partner'
      }
    ];

    var cards = root.querySelectorAll('.lsg6-card');
    Array.prototype.forEach.call(cards, function (card, i) {
      var d = cardData[i];
      if (!d) return;
      var h = card.querySelector('h3');
      var cp = card.querySelector('.lsg6-card-copy');
      var lis = card.querySelectorAll('li');
      var button = card.querySelector('.lsg6-card-bottom a');
      if (h) h.textContent = d.title;
      if (cp) cp.textContent = d.copy;
      Array.prototype.forEach.call(lis, function (li, j) { if (d.items[j]) li.textContent = d.items[j]; });
      if (button) button.textContent = d.button;
      var productLinks = card.querySelectorAll('a');
      Array.prototype.forEach.call(productLinks, function (a) {
        var u = new URL(a.href, window.location.origin);
        if (u.origin === window.location.origin && /^\/products\//.test(u.pathname)) a.href = '/it' + u.pathname + u.search + u.hash;
      });
    });

    var benefitData = [
      ['Più prenotazioni dirette', 'Meno dipendenza dalle OTA'],
      ['Una bassa stagione più forte', 'Trasforma le date tranquille in opportunità'],
      ['Un’attività più sostenibile', 'Cresci con un ritmo più sano'],
      ['Ospitalità indipendente', 'Pensato per B&B e piccole strutture']
    ];
    var benefits = root.querySelectorAll('.lsg6-benefit');
    Array.prototype.forEach.call(benefits, function (b, i) {
      if (!benefitData[i]) return;
      var strong = b.querySelector('strong');
      var span = b.querySelector('span');
      if (strong) strong.textContent = benefitData[i][0];
      if (span) span.textContent = benefitData[i][1];
    });
  }

  ready(function () {
    injectStyles();
    var state = localeState();
    var root = document.querySelector('.lsg6');
    injectSwitcher(root, state.isIt);
    if (root && state.isIt) localizeHomepage(root);
  });
})();
