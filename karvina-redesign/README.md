# Karviná.cz – redesign celého webu (prototyp)

Vizuální redesign **celého webu** [karvina.cz](https://www.karvina.cz/) – nejen homepage. Logo zachováno, funkce a backend beze změny.

## Jak otevřít

1. Stáhněte ZIP: https://github.com/TomasDurczok/html-portfolio/archive/refs/heads/cursor/karvina-redesign-cab4.zip
2. Rozbalte a otevřete **`OTEVRIT-KARVINA-REDESIGN.html`** (v kořeni) nebo `karvina-redesign/index.html`
3. V menu klikněte **Mapa webu** – uvidíte všechny sekce

## Struktura redesignu

| Šablona | Soubory | Pokrývá |
|---------|---------|---------|
| Homepage | `index.html` | Úvodní stránka |
| Sekční landing | `mesto-karvina.html`, `magistrat.html`, `deje-se.html`… | Hlavní sekce webu |
| Podstránka | `podstranka.html?sekce=…&stranka=…` | **Všechny vnořené stránky** (30+ variant) |
| Seznam | `uredni-deska.html`, `deje-se.html` | Úřední deska, novinky |
| Článek | `clanek.html` | Novinky / aktuality |
| Kontakty | `kontakty.html` | Kontaktní stránka |
| Mapa webu | `mapa-webu.html` | Přehled celého webu |

## Jak to funguje na živém webu

Na karvina.cz jsou **tisíce stránek**, ale v Marwel CMS stačí upravit **5–6 šablon** – všechny stránky automaticky dostanou nový design:

- `layout` (header + footer) → `js/site-shell.js` + CSS
- homepage šablona
- sekční landing
- podstránka s bočním menu
- seznam (úřední deska, novinky)
- článek

## Sdílené soubory

- `css/design-system.css` – barvy, fonty, komponenty
- `css/main.css` – layout, header, footer, karty
- `js/site-shell.js` – menu, patička, navigace (stejné všude)
- `js/main.js` – slider, záložky, mobilní menu

## Logo

`assets/logo.png` – originál z karvina.cz, beze změny.
