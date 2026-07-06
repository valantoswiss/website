# Valanto — Marketing-Website (Prototyp)

Marketing-One-Pager für **Valanto**, die Schweizer Immobiliensoftware, die Bewertung,
Vermarktung und Verwaltung in einem Werkzeug vereint. Betreibergesellschaft:
Felsberg Consulting GmbH.

Umgesetzt nach dem finalen Claude-Design **„Dossier-Editorial, kantig"** (Option 2a),
mit responsivem Mobile-Layout (Option 3a).

## Stack

- [Vite](https://vite.dev/) + [React 18](https://react.dev/)
- [react-i18next](https://react.i18next.com/) für die Sprachumschaltung (DE / FR / EN)
- Fonts: Archivo (Sans) & Source Serif 4 (Serifen-Headlines) via Google Fonts

## Entwicklung

```bash
npm install
npm run dev      # Dev-Server auf http://localhost:5173
npm run build    # Produktions-Build nach dist/
npm run preview  # Build lokal vorschauen
```

## Struktur

```
index.html               HTML-Shell inkl. Font-Preload
src/
  main.jsx               Einstiegspunkt
  App.jsx                Alle 9 Sektionen (Nav, Hero, Trust, Features,
                         Zielgruppen, Preise, SIV, Abschluss-CTA, Footer)
  i18n.js                react-i18next-Setup (Default: DE)
  index.css              Design-System & Layout (kantig / editorial)
  locales/
    de.json              Finale deutsche Copy
    fr.json              Französische Übersetzung
    en.json              Englische Übersetzung
public/
  favicon.svg
```

## Sprachen

DE ist Default und final. FR & EN sind vollständig übersetzt und über den
Umschalter oben rechts im Header erreichbar.

## Deployment

Automatisches Deployment über **Vercel** (Framework-Preset: Vite). Jeder Push
auf `main` erzeugt ein neues Production-Deployment.

## Offene Punkte (aus dem Briefing)

- Echte Produkt-Screenshots statt des abstrahierten Dossier-Mockups im Hero
- SIV-Formulierung final mit Jürg abstimmen (aktuell bewusst „Nähe / Austausch")
- Ziel von „Kostenlos testen" / „Login" definieren (aktuell Platzhalter `#`)
- Unterseiten: Impressum, Datenschutz, AGB (CH-Pflicht)
