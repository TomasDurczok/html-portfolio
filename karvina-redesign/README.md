# Karviná.cz – návrh redesignu (prototyp)

Vizuální redesign oficiálních stránek [karvina.cz](https://www.karvina.cz/) založený výhradně na veřejně dostupném obsahu. **Logo města je zachováno.** Funkce, URL a backend (Marwel CMS) zůstávají beze změny – jde pouze o novou vizuální vrstvu.

## Prohlížení prototypu

Otevřete `index.html` v prohlížeči, nebo spusťte lokální server:

```bash
cd karvina-redesign
python3 -m http.server 8080
# → http://localhost:8080
```

## Stránky v prototypu

| Soubor | Typ stránky | Odpovídá šabloně |
|--------|-------------|------------------|
| `index.html` | Homepage | Hlavní stránka |
| `magistrat.html` | Sekční landing | Magistrát + rychlé služby |
| `uredni-deska.html` | Seznam / filtr | Úřední deska |
| `clanek.html` | Článek / novinka | Děje se |

## Design systém

- **Barvy:** zachována modrá paleta webu (`#4c589f`, `#185b96`, `#0e3c66`)
- **Typografie:** Inter (nahrazuje Roboto Condensed)
- **Styl:** minimalistický, vzdušný, responzivní (mobile-first)
- **Komponenty:** karty služeb, hero slider, záložky novinek, boční navigace, seznam dokumentů

## Implementace do produkce (Marwel CMS)

Redesign se nasadí úpravou tématu `themes/karvina/`:

1. `css/design-system.css` + `css/main.css` → nahradí/rozšíří stávající `main.css`, `responsive.css`
2. HTML struktura šablon → přizpůsobit novým komponentám (header, footer, karty)
3. Logo → beze změny (`/data/system/config/logo.PNG`)
4. Obrázky a odkazy → zůstávají z CMS
5. JavaScript → pouze UI (menu, slider, záložky); stávající integrace (chatbot, analytics) beze změny

## Co redesign řeší / neřeší

| Ano | Ne |
|-----|-----|
| Moderní vzhled a UX | Migrace PHP / CMS |
| Lepší mobilní zobrazení | Změna URL nebo funkcí |
| Čitelnější navigace | Bezpečnostní upgrade backendu |
| Přístupnější kontrast a focus stavy | Nové integrace |

---

*Návrh redesignu – červenec 2026*
