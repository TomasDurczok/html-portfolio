/**
 * Sdílený layout pro celý redesign karvina.cz
 * Jeden header + footer na všech stránkách = konzistentní vzhled celého webu
 */
(function () {
  'use strict';

  const NAV = [
    {
      label: 'Město Karviná',
      href: 'mesto-karvina.html',
      children: [
        { label: 'Informace o městě', href: 'podstranka.html?sekce=mesto&stranka=informace' },
        { label: 'Vedení města', href: 'podstranka.html?sekce=mesto&stranka=vedeni' },
        { label: 'Podnikání a investování', href: 'podstranka.html?sekce=mesto&stranka=podnikani' },
        { label: 'Informace pro média', href: 'podstranka.html?sekce=mesto&stranka=media' },
        { label: 'Mapy', href: 'podstranka.html?sekce=mesto&stranka=mapy' },
        { label: 'Psí útulek', href: 'podstranka.html?sekce=mesto&stranka=utulek' },
        { label: 'Další weby města', href: 'podstranka.html?sekce=mesto&stranka=weby' },
        { label: 'Živnostenský úřad', href: 'podstranka.html?sekce=mesto&stranka=zivnost' },
        { label: 'Dopravní omezení', href: 'podstranka.html?sekce=mesto&stranka=doprava' },
        { label: 'Webkamera – náměstí', href: 'podstranka.html?sekce=mesto&stranka=webkamera' },
      ],
    },
    {
      label: 'Organizace města',
      href: 'organizace-mesta.html',
      children: [
        { label: 'Aktuality a zprávy', href: 'podstranka.html?sekce=organizace&stranka=aktuality' },
        { label: 'Seznam organizací', href: 'podstranka.html?sekce=organizace&stranka=seznam' },
      ],
    },
    {
      label: 'Magistrát',
      href: 'magistrat.html',
      children: [
        { label: 'Online služby', href: 'online-sluzby.html' },
        { label: 'Úřední deska', href: 'uredni-deska.html' },
        { label: 'Potřebuji vyřídit', href: 'potrebuji-vyridit.html' },
        { label: 'Členění magistrátu', href: 'podstranka.html?sekce=magistrat&stranka=odbory' },
        { label: 'Podatelna', href: 'podstranka.html?sekce=magistrat&stranka=podatelna' },
        { label: 'CzechPOINT', href: 'podstranka.html?sekce=magistrat&stranka=czechpoint' },
        { label: 'Samospráva', href: 'podstranka.html?sekce=magistrat&stranka=samosprava' },
        { label: 'Granty a dotace', href: 'podstranka.html?sekce=magistrat&stranka=dotace' },
        { label: 'Kariéra', href: 'podstranka.html?sekce=magistrat&stranka=kariaera' },
        { label: 'Mapový portál', href: 'podstranka.html?sekce=magistrat&stranka=mapovy-portal' },
        { label: 'Volby', href: 'podstranka.html?sekce=magistrat&stranka=volby' },
        { label: 'Ztráty a nálezy', href: 'podstranka.html?sekce=magistrat&stranka=ztraty' },
      ],
    },
    {
      label: 'Děje se',
      href: 'deje-se.html',
      children: [
        { label: 'Všechny novinky', href: 'deje-se.html' },
        { label: 'Zastupitelstvo', href: 'podstranka.html?sekce=deje-se&stranka=zastupitelstvo' },
        { label: 'Doprava', href: 'podstranka.html?sekce=deje-se&stranka=doprava' },
        { label: 'Karvinský zpravodaj', href: 'podstranka.html?sekce=deje-se&stranka=zpravodaj' },
        { label: 'Podnikatelé', href: 'podstranka.html?sekce=deje-se&stranka=podnikatele' },
        { label: 'Odpady', href: 'podstranka.html?sekce=deje-se&stranka=odpady' },
        { label: 'Munipolis', href: 'podstranka.html?sekce=deje-se&stranka=munipolis' },
        { label: 'TV Polar', href: 'podstranka.html?sekce=deje-se&stranka=tv-polar' },
      ],
    },
    {
      label: 'Městská policie',
      href: 'mestska-policie.html',
      children: [
        { label: 'O městské policii', href: 'mestska-policie.html' },
        { label: 'Vedení a velitelé směn', href: 'podstranka.html?sekce=policie&stranka=vedeni' },
        { label: 'Prevence kriminality', href: 'podstranka.html?sekce=policie&stranka=prevence' },
        { label: 'Forenzní značení kol', href: 'podstranka.html?sekce=policie&stranka=kola' },
        { label: 'Stát se strážníkem', href: 'podstranka.html?sekce=policie&stranka=straznik' },
        { label: 'Volná pracovní místa', href: 'podstranka.html?sekce=policie&stranka=volna-mista' },
      ],
    },
  ];

  const SIDEBARS = {
    mesto: {
      title: 'Město Karviná',
      links: [
        { label: 'Přehled', href: 'mesto-karvina.html' },
        { label: 'Informace o městě', href: 'podstranka.html?sekce=mesto&stranka=informace' },
        { label: 'Vedení města', href: 'podstranka.html?sekce=mesto&stranka=vedeni' },
        { label: 'Podnikání a investování', href: 'podstranka.html?sekce=mesto&stranka=podnikani' },
        { label: 'Mapy', href: 'podstranka.html?sekce=mesto&stranka=mapy' },
        { label: 'Další weby města', href: 'podstranka.html?sekce=mesto&stranka=weby' },
      ],
    },
    organizace: {
      title: 'Organizace města',
      links: [
        { label: 'Přehled', href: 'organizace-mesta.html' },
        { label: 'Aktuality a zprávy', href: 'podstranka.html?sekce=organizace&stranka=aktuality' },
        { label: 'Seznam organizací', href: 'podstranka.html?sekce=organizace&stranka=seznam' },
      ],
    },
    magistrat: {
      title: 'Magistrát',
      links: [
        { label: 'Přehled', href: 'magistrat.html' },
        { label: 'Online služby', href: 'online-sluzby.html' },
        { label: 'Úřední deska', href: 'uredni-deska.html' },
        { label: 'Potřebuji vyřídit', href: 'potrebuji-vyridit.html' },
        { label: 'Členění magistrátu', href: 'podstranka.html?sekce=magistrat&stranka=odbory' },
        { label: 'Podatelna', href: 'podstranka.html?sekce=magistrat&stranka=podatelna' },
        { label: 'CzechPOINT', href: 'podstranka.html?sekce=magistrat&stranka=czechpoint' },
      ],
    },
    policie: {
      title: 'Městská policie',
      links: [
        { label: 'Přehled', href: 'mestska-policie.html' },
        { label: 'Vedení', href: 'podstranka.html?sekce=policie&stranka=vedeni' },
        { label: 'Prevence kriminality', href: 'podstranka.html?sekce=policie&stranka=prevence' },
        { label: 'Forenzní značení kol', href: 'podstranka.html?sekce=policie&stranka=kola' },
      ],
    },
    'deje-se': {
      title: 'Děje se',
      links: [
        { label: 'Všechny novinky', href: 'deje-se.html' },
        { label: 'Zastupitelstvo', href: 'podstranka.html?sekce=deje-se&stranka=zastupitelstvo' },
        { label: 'Doprava', href: 'podstranka.html?sekce=deje-se&stranka=doprava' },
        { label: 'Karvinský zpravodaj', href: 'podstranka.html?sekce=deje-se&stranka=zpravodaj' },
      ],
    },
  };

  const PAGE_CONTENT = {
    'mesto-informace': { title: 'Informace o městě', section: 'mesto', desc: 'Základní informace o statutárním městě Karviná.' },
    'mesto-vedeni': { title: 'Vedení města', section: 'mesto', desc: 'Starosta, místostarostové a vedení magistrátu.' },
    'mesto-podnikani': { title: 'Podnikání a investování', section: 'mesto', desc: 'Podpora podnikatelů a investičních záměrů ve městě.' },
    'mesto-media': { title: 'Informace pro média', section: 'mesto', desc: 'Tiskové zprávy a kontakty pro novináře.' },
    'mesto-mapy': { title: 'Mapy', section: 'mesto', desc: 'Mapové podklady a orientace ve městě.' },
    'mesto-utulek': { title: 'Psí útulek', section: 'mesto', desc: 'Informace o městském psím útulku.' },
    'mesto-weby': { title: 'Další weby města', section: 'mesto', desc: 'Rozcestník dalších oficiálních webů města Karviná.' },
    'mesto-zivnost': { title: 'Živnostenský úřad', section: 'mesto', desc: 'Agenda živnostenského úřadu města Karviná.' },
    'mesto-doprava': { title: 'Dopravní omezení', section: 'mesto', desc: 'Aktuální uzavírky a dopravní omezení na území města.' },
    'mesto-webkamera': { title: 'Webkamera – náměstí', section: 'mesto', desc: 'Živý přenos z náměstí ve Fryštátě.' },
    'organizace-aktuality': { title: 'Aktuality organizací', section: 'organizace', desc: 'Zprávy z organizací zřizovaných městem.' },
    'organizace-seznam': { title: 'Seznam organizací', section: 'organizace', desc: 'Přehled organizací statutárního města Karviná.' },
    'magistrat-odbory': { title: 'Členění magistrátu', section: 'magistrat', desc: 'Odbory magistrátu a jejich agendy.' },
    'magistrat-podatelna': { title: 'Podatelna', section: 'magistrat', desc: 'Elektronická a fyzická podatelna magistrátu.' },
    'magistrat-czechpoint': { title: 'CzechPOINT', section: 'magistrat', desc: 'Výdej ověřených výstupů z informačních systémů veřejné správy.' },
    'magistrat-samosprava': { title: 'Samospráva', section: 'magistrat', desc: 'Zastupitelstvo, rada města a usnesení.' },
    'magistrat-dotace': { title: 'Granty a dotace', section: 'magistrat', desc: 'Dotační programy města Karviná.' },
    'magistrat-kariaera': { title: 'Kariéra', section: 'magistrat', desc: 'Volná pracovní místa na magistrátu.' },
    'magistrat-mapovy-portal': { title: 'Mapový portál', section: 'magistrat', desc: 'Interaktivní mapy statutárního města Karviná.' },
    'magistrat-volby': { title: 'Volby', section: 'magistrat', desc: 'Informace k volbám na území města.' },
    'magistrat-ztraty': { title: 'Ztráty a nálezy', section: 'magistrat', desc: 'Evidence ztrát a nálezů na magistrátu.' },
    'deje-se-zastupitelstvo': { title: 'Zastupitelstvo', section: 'deje-se', desc: 'Jednání zastupitelstva a usnesení.' },
    'deje-se-doprava': { title: 'Doprava', section: 'deje-se', desc: 'Aktuality z oblasti dopravy ve městě.' },
    'deje-se-zpravodaj': { title: 'Karvinský zpravodaj', section: 'deje-se', desc: 'Městský zpravodaj pro občany.' },
    'deje-se-podnikatele': { title: 'Podnikatelé', section: 'deje-se', desc: 'Aktuality pro podnikatele ve městě.' },
    'deje-se-odpady': { title: 'Odpady', section: 'deje-se', desc: 'Informace o nakládání s odpady.' },
    'deje-se-munipolis': { title: 'Munipolis', section: 'deje-se', desc: 'Mobilní aplikace města – registrace a informace.' },
    'deje-se-tv-polar': { title: 'TV Polar', section: 'deje-se', desc: 'Městská televize Polar.' },
    'policie-vedeni': { title: 'Vedení a velitelé směn', section: 'policie', desc: 'Vedení městské policie Karviná.' },
    'policie-prevence': { title: 'Prevence kriminality', section: 'policie', desc: 'Programy prevence kriminality ve městě.' },
    'policie-kola': { title: 'Forenzní značení kol', section: 'policie', desc: 'Služba značení jízdních kol.' },
    'policie-straznik': { title: 'Stát se strážníkem', section: 'policie', desc: 'Kariéra u městské policie Karviná.' },
    'policie-volna-mista': { title: 'Volná pracovní místa', section: 'policie', desc: 'Aktuální nabídka pracovních míst MP Karviná.' },
  };

  function renderNav(activeSection) {
    return NAV.map((item) => {
      const isActive = item.href === activeSection || item.label === activeSection;
      const children = item.children.map((c) =>
        `<li><a href="${c.href}">${c.label}</a></li>`
      ).join('');
      return `
        <div class="nav-item${isActive ? ' is-active-section' : ''}">
          <button type="button">${item.label}
            <svg class="nav-item__chevron" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <ul class="mega-menu">${children}</ul>
        </div>`;
    }).join('');
  }

  function renderMobileNav() {
    return NAV.map((item) => {
      const subs = item.children.map((c) => `<li><a href="${c.href}">${c.label}</a></li>`).join('');
      return `<li><a href="${item.href}">${item.label}</a><ul class="mobile-nav__sub">${subs}</ul></li>`;
    }).join('');
  }

  function renderHeader(activeSection) {
    return `
    <header class="site-header" role="banner">
      <div class="site-header__top">
        <div class="site-header__top-inner">
          <a href="https://www.karvina.cz/user.php">Přihlášení</a>
          <a href="kontakty.html">Kontakty</a>
          <a href="mapa-webu.html">Mapa webu</a>
          <a href="https://www.karvina.cz/rss/cs">RSS</a>
        </div>
      </div>
      <div class="site-header__main">
        <a href="index.html" class="site-header__logo" aria-label="Karviná – domů">
          <img src="assets/logo.png" alt="Statutární město Karviná" width="200" height="134">
        </a>
        <nav class="site-header__nav" aria-label="Hlavní navigace">${renderNav(activeSection)}</nav>
        <div class="site-header__actions">
          <form class="search-form" action="https://www.karvina.cz/search.php" method="get" role="search">
            <svg class="search-form__icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            <label for="search-input" class="sr-only">Vyhledávání</label>
            <input type="search" id="search-input" name="query" class="search-form__input" placeholder="Hledat na webu…">
            <input type="hidden" name="action" value="results">
          </form>
          <button class="menu-toggle" aria-label="Otevřít menu" type="button">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
          </button>
        </div>
      </div>
    </header>
    <div class="mobile-nav" aria-hidden="true">
      <div class="mobile-nav__panel">
        <button class="mobile-nav__close" aria-label="Zavřít menu" type="button">
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
        <ul class="mobile-nav__list">${renderMobileNav()}</ul>
      </div>
    </div>`;
  }

  function renderFooter() {
    return `
    <footer class="site-footer" role="contentinfo">
      <div class="site-footer__grid">
        <div>
          <h3 class="site-footer__heading">Úřední hodiny</h3>
          <p class="site-footer__text">
            <strong>PO a ST 7:30 – 17:30</strong><br>(přestávka 12:00 – 12:30)<br><br>
            ÚT, ČT 7:30 – 16:00<br>PÁ 7:30 – 13:00
          </p>
        </div>
        <div>
          <h3 class="site-footer__heading">Kontakty</h3>
          <p class="site-footer__text">
            Statutární město Karviná<br>Fryštátská 72/1<br>733 01 Karviná<br><br>
            Tel.: (+420) 596 387 111<br>E-mail: epodatelna@karvina.cz
          </p>
        </div>
        <div>
          <h3 class="site-footer__heading">Nejčastěji hledáte</h3>
          <ul class="site-footer__links">
            <li><a href="podstranka.html?sekce=mesto&stranka=zivnost">Živnostenský úřad</a></li>
            <li><a href="podstranka.html?sekce=deje-se&stranka=zpravodaj">Karvinský zpravodaj</a></li>
            <li><a href="uredni-deska.html">Úřední deska</a></li>
            <li><a href="potrebuji-vyridit.html">Potřebuji vyřídit</a></li>
          </ul>
        </div>
        <div>
          <h3 class="site-footer__heading">Sekce webu</h3>
          <ul class="site-footer__links">
            <li><a href="mesto-karvina.html">Město Karviná</a></li>
            <li><a href="magistrat.html">Magistrát</a></li>
            <li><a href="mestska-policie.html">Městská policie</a></li>
            <li><a href="deje-se.html">Děje se</a></li>
            <li><a href="mapa-webu.html">Mapa celého webu</a></li>
          </ul>
        </div>
      </div>
      <div class="site-footer__bottom">
        <span>© 2016–2026 Statutární město Karviná</span>
        <span>Dark-first redesign – prototyp</span>
      </div>
    </footer>
    <div class="prototype-badge">Redesign celého webu – prototyp</div>`;
  }

  function renderSidebar(sectionKey, activeHref) {
    const sidebar = SIDEBARS[sectionKey];
    if (!sidebar) return '';
    const links = sidebar.links.map((l) => {
      const isActive = activeHref && (l.href === activeHref || window.location.pathname.endsWith(l.href.split('?')[0]));
      return `<li><a href="${l.href}" class="${isActive ? 'is-active' : ''}">${l.label}</a></li>`;
    }).join('');
    return `
      <aside class="sidebar-nav" aria-label="Navigace sekce">
        <p class="sidebar-nav__title">${sidebar.title}</p>
        <ul class="sidebar-nav__list">${links}</ul>
      </aside>`;
  }

  function initPodstranka() {
    const params = new URLSearchParams(window.location.search);
    const sekce = params.get('sekce') || 'mesto';
    const stranka = params.get('stranka') || 'informace';
    const key = `${sekce}-${stranka}`;
    const content = PAGE_CONTENT[key] || {
      title: 'Stránka',
      section: sekce,
      desc: 'Obsah stránky – v produkci generován z Marwel CMS.',
    };

    document.title = `${content.title} | Karviná`;
    const main = document.getElementById('podstranka-content');
    if (!main) return;

    const breadcrumbSection = SIDEBARS[content.section];
    const sectionHref = breadcrumbSection ? breadcrumbSection.links[0].href : 'index.html';

    main.innerHTML = `
      <div class="page-hero">
        <div class="container">
          <nav aria-label="Drobečková navigace">
            <ol class="breadcrumb">
              <li><a href="index.html">Domů</a></li>
              <li class="breadcrumb__sep">/</li>
              <li><a href="${sectionHref}">${breadcrumbSection?.title || ''}</a></li>
              <li class="breadcrumb__sep">/</li>
              <li aria-current="page">${content.title}</li>
            </ol>
          </nav>
          <h1>${content.title}</h1>
          <p class="page-hero__desc">${content.desc}</p>
        </div>
      </div>
      <div class="container">
        <div class="page-layout">
          <div id="sidebar-slot"></div>
          <div class="prose">
            <p>Tato stránka používá <strong>stejný redesign</strong> jako zbytek webu karvina.cz. V produkční verzi zde bude obsah z Marwel CMS – texty, formuláře, dokumenty a přílohy beze změny.</p>
            <p>Design systém (barvy, typografie, menu, patička, karty, seznamy) se aplikuje na <strong>všechny stránky</strong> webu automaticky přes společné šablony.</p>
            <div class="cta-banner">
              <div>
                <h3>Potřebujete pomoc?</h3>
                <p>Kontaktujte magistrát města Karviná.</p>
              </div>
              <a href="kontakty.html" class="btn btn--secondary">Kontakty</a>
            </div>
          </div>
        </div>
      </div>`;

    const sidebarSlot = document.getElementById('sidebar-slot');
    if (sidebarSlot) sidebarSlot.outerHTML = renderSidebar(content.section, `podstranka.html?sekce=${sekce}&stranka=${stranka}`);
  }

  function getActiveNav() {
    if (document.body.dataset.activeNav) return document.body.dataset.activeNav;
    if (document.body.dataset.page === 'podstranka') {
      const sekce = new URLSearchParams(window.location.search).get('sekce');
      const map = {
        mesto: 'mesto-karvina.html',
        organizace: 'organizace-mesta.html',
        magistrat: 'magistrat.html',
        'deje-se': 'deje-se.html',
        policie: 'mestska-policie.html',
      };
      return map[sekce] || '';
    }
    return '';
  }

  // Init
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  const activeSection = getActiveNav();

  if (headerEl) headerEl.innerHTML = renderHeader(activeSection);
  if (footerEl) footerEl.innerHTML = renderFooter();

  const sidebarEl = document.getElementById('site-sidebar');
  if (sidebarEl) {
    sidebarEl.outerHTML = renderSidebar(
      document.body.dataset.sidebar,
      document.body.dataset.sidebarActive
    );
  }

  if (document.body.dataset.page === 'podstranka') initPodstranka();

  window.KarvinaShell = { renderSidebar, SIDEBARS, PAGE_CONTENT, NAV };
})();
