# Valanto Website – Arbeitsregeln

Marketing-Site (Vite/React, vite-react-ssg, i18n DE/FR/EN). **Achtung: `main` deployt via Vercel direkt live auf www.valanto.ch** – nie direkt auf `main` arbeiten, immer Branch → PR → Merge nach Freigabe.

## Typografie (verbindlich, Vorgabe Fabian 18.07.2026)

- Gedankenstrich ist immer der Halbgeviertstrich «–» (U+2013), nie der Em-Dash «—» (U+2014) – deutsche Typografie.
- Gilt überall: Locales (DE/FR/EN), Rechtsseiten, Mailtexte (`api/kontakt.js`), Metas, Kommentare sowie Commit-/PR-/Issue-Texte. Gleiche Regel im Repo `valantoswiss/app` (dortige CLAUDE.md).

## Design-Konventionen

- Marke ist eckig: kein `border-radius` auf neuen Elementen.
- Nur eine Schrift (Archivo); Farb-Tokens aus `:root` in `src/index.css` verwenden.
- Der globale Reset `* { margin: 0 }` killt UA-Defaults (z. B. `margin: auto` von `<dialog>`) – bei nativen Elementen daran denken.
- Overlays (Lightbox etc.) per React-Portal an `document.body` rendern, sonst können Ancestor-Stacking-Contexts den sticky Header darüberlegen.

## Inhalte

- Produkt-Screenshots: Rohlinge liegen bei Fabian in `Desktop/valanto-screenshots/`; Demo-Mandant, Gutachter-Block im Gutachten-Deckblatt neutralisiert («Muster Immobilien AG»). Keine Demo-E-Mail (`test@example.com`) und kein «Valanto Demo AG» in Bildern.
- Sprachumschalter ist deaktiviert, FR/EN-Locales werden aber mitgepflegt.
