# Valanto Website – Arbeitsregeln

Marketing-Site (Vite/React, vite-react-ssg, i18n DE/FR/EN). Hosting seit 12.08.2026 auf Infomaniak/Ploi: `main` deployt automatisch auf staging.valanto.ch, Produktion (valanto.ch, ohne www) ist ein separater Schritt. Nie direkt auf `main` arbeiten, immer Branch → PR → Merge.

- Kanonische Domain ist `https://valanto.ch` (www leitet um), Unterseiten werden mit Schrägstrich ausgeliefert (`/kontakt/`). Canonicals, Sitemap, llms.txt und interne Links verwenden genau diese Form, damit nichts über eine Umleitung läuft.
- Die committete `.env` nie ändern (nur Standardwerte). Serverspezifische Werte gehören auf dem Server in `.env.local` (gitignored, überschreibt `.env`) – sonst bricht Plois `git pull` mit «local changes would be overwritten» ab und der alte Stand bleibt online (Lehre vom 11.09.2026).
- KI-Sichtbarkeit wird monatlich mit zehn festen Fragen gemessen, Protokolle unter `docs/ki-sichtbarkeit/`.

## Typografie (verbindlich, Vorgabe Fabian 18.07.2026)

- Gedankenstrich ist immer der Halbgeviertstrich «–» (U+2013), nie der Em-Dash «—» (U+2014) – deutsche Typografie.
- Gilt überall: Locales (DE/FR/EN), Rechtsseiten, Mailtexte (`api/kontakt.js`), Metas, Kommentare sowie Commit-/PR-/Issue-Texte. Gleiche Regel im Repo `valantoswiss/app` (dortige CLAUDE.md).

## Design-Konventionen

- Marke ist eckig: kein `border-radius` auf neuen Elementen.
- Nur eine Schrift (Archivo); Farb-Tokens aus `:root` in `src/index.css` verwenden.
- Der globale Reset `* { margin: 0 }` killt UA-Defaults (z. B. `margin: auto` von `<dialog>`) – bei nativen Elementen daran denken.
- Overlays (Lightbox etc.) per React-Portal an `document.body` rendern, sonst können Ancestor-Stacking-Contexts den sticky Header darüberlegen.

## SEO / KI-Lesbarkeit

- Jede Seite unter `src/pages/` rendert genau ein `<Seo>` (`src/Seo.jsx`) mit Titel, Beschreibung und Pfad – daraus entstehen beim Build title, description, canonical, Open Graph und JSON-LD im vorgerenderten HTML. Diese Tags gehören nicht in `index.html`.
- Strukturierte Daten liegen in `src/structuredData.js`; ändern sich Preise oder Funktionen in den Locales, dort und in `public/llms.txt` nachziehen.
- Neue Route: auch in `public/sitemap.xml` und `public/llms.txt` eintragen.

## Inhalte

- Produkt-Screenshots: Rohlinge liegen bei Fabian in `Desktop/valanto-screenshots/`; Demo-Mandant, Gutachter-Block im Gutachten-Deckblatt neutralisiert («Muster Immobilien AG»). Keine Demo-E-Mail (`test@example.com`) und kein «Valanto Demo AG» in Bildern.
- Sprachumschalter ist deaktiviert, FR/EN-Locales werden aber mitgepflegt.
