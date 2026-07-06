# Handoff: Valanto — Marketing-Startseite (One-Pager)

## Overview
Marketing-Website für **Valanto**, eine Schweizer SaaS-Plattform für Immobilienprofis
(Liegenschaftsverwaltung, Bewertungen mit Dossier, Neubauprojekte, Landingpages,
Verkäufer-Portal). Dieses Paket enthält die designte Startseite als One-Pager mit
Ankern, fertige DE-Copy sowie FR/EN-Übersetzungen, und die komplette i18n-Struktur.

Betreibergesellschaft: **Felsberg Consulting GmbH**. Verrechnung läuft über die GmbH —
im Impressum/Footer korrekt abbilden.

## About the Design Files
Die Dateien in diesem Bundle sind **Design-Referenzen, erstellt in HTML** — ein
Prototyp, der Look und Verhalten zeigt, **kein produktiver Code zum 1:1-Kopieren**.
Aufgabe ist, dieses Design in der Zielumgebung **neu aufzubauen**. Stack steht fest:
**Laravel + Inertia + React** (siehe Abschnitt „Umsetzung: Laravel + Inertia + React").
Sections als eigene React-Komponenten, i18n mit `react-i18next` (die JSON-Locales in
`locales/` passen 1:1). Styling-Werte unten sind verbindlich; Tailwind-Mapping im
Laravel-Abschnitt.

Der Design-Prototyp ist eine Design-Component (`.dc.html`) und läuft nur im
Design-Tool. Nicht übernehmen — nur als visuelle Referenz lesen.

## Fidelity
**High-fidelity.** Finale Farben, Typografie, Spacing und Interaktionen. Pixelgenau
mit den Libraries/Patterns des Zielprojekts nachbauen. Ausnahme: die Produkt-UI im
Hero-Mockup und die Dashboard-Tabelle sind **Platzhalter-Illustrationen** — sobald
echte Screenshots vorliegen, ersetzen.

---

## Art Direction (wichtig)
- **Mobile-first bauen** (Layout „Valanto Mobile", 390px, siehe Abschnitt
  „Responsive / Mobile-first").
- Explizit **NICHT nach „Vibe-Coding-Default"** aussehen: kein lila Gradient, keine
  zentrierten Emoji-Card-Muster.
- **Alle Ecken sind eckig — `border-radius: 0` durchgängig.** Keine Pills, keine
  abgerundeten Karten. Buttons sind Rechtecke, oft als zusammenhängende Gruppe
  (geteilte Kante, kein Gap).
- Editorial/Swiss-Grid-Ästhetik: **Hairline-Raster** (1px Linien in Anthrazit
  `#23262D`) statt Schatten und Karten-Lift. Feature-, Preis- und Zielgruppen-Grids
  sind durch durchgehende 1px-Linien getrennt, nicht durch Gaps.
- Signature-Motiv: das **Bewertungs-Dossier** als aufgefächertes Dokument im Hero
  (leicht rotierte Papierlage dahinter, harter Offset-Schatten `14px 14px 0`).
- Warmer Papier-Hintergrund `#FAF7F2`; Anthrazit-Bänder für Trust-Bar / CTA / Footer.

## Typography
- **Display / Headlines / Preise / Rollen-Titel:** `Source Serif 4` (Google Fonts),
  weight 600 (Headlines) / 700 (Preise, Labels), `letter-spacing: -0.01em` auf grossen
  Headlines.
- **UI / Body / Nav / Buttons:** `Archivo` (Google Fonts), weights 400/500/600/700.
- Eyebrows: Archivo 12px, weight 700, `letter-spacing: 0.18em`, uppercase, Farbe Petrol.
- Body: 15–17px, `line-height: 1.7`, Farbe `#55585F`. `text-wrap: pretty` auf Fliesstext.
- (Referenz aus Briefing war *M PLUS Rounded 1c* — für Valanto bewusst durch die
  eckigere Serif/Grotesk-Kombi ersetzt, passend zur „eckig"-Vorgabe.)

## Design Tokens
Farben:
- `--paper` **#FAF7F2** — Haupt-Hintergrund
- `--paper-2` **#F1ECE2** — sekundärer Block-Hintergrund (SIV-Sektion, Dossier-Rücklage)
- `--ink` **#23262D** — Anthrazit: Text, Linien, dunkle Bänder
- `--ink-2` **#1A1C21** — Footer-Hintergrund (noch dunkler)
- `--accent` **#23808F** — Petrol (Primäraktion, Akzente). *Abgewandelt vom
  Felsberg-Cyan `#45B7C3` — eigenständiger, tiefer.*
- `--accent-hover` **#2E9DB0** — Petrol Hover auf dunklem Grund
- `--accent-soft` **#8FBFC8** — gedämpfter Petrol (Balken, sekundär)
- `--text` **#55585F** — Fliesstext
- `--muted` **#6E6A60** — gedämpfter Text, Hinweise, „per Monat" (auf Papier). *AA-korrigiert von #A6A296 (2.3:1) → #6E6A60 (~4.7:1 auf #FAF7F2).*
- `--muted-warm` **#B4B0A5** / **#8E8B82** — Footer-Text (auf dunklem Grund). *Footer-Labels/Copyright AA-korrigiert von #6E6B64 (~3.1:1) → #8E8B82 (~4.8:1 auf #1A1C21).*
- `--line` **#23262D** — Rasterlinien (voll) · `#DED8CC` (Hairline auf Papier, dezent)
- `--line-dark` **#4A4E57** — Linien auf dunklem Grund
- Weiss **#FFFFFF** — Dossier-Karte, „Beliebt"-Preiskarte, SIV-Punktebox

Spacing (Section-Padding): horizontal **52px**, vertikal je Sektion 56–84px.
Grid-Gaps: Content-Splits **40–56px**; Karten-/Feature-Grids **0** (durch Linien getrennt).
Radius: **0** überall. Shadows: nur **Offset-Schatten** am Dossier (`14px 14px 0
rgba(35,38,45,.08)`), sonst keine.
Icon-/Marker-Grössen: Feature-Zähler „01–06" (Serif 15px, Petrol) + 22px leeres
1px-Quadrat oben rechts je Feature-Zelle. Preis-Häkchen: 16px Petrol-Vollquadrat, ✓ weiss.

---

## Screens / Views
Eine Seite (`/`), scrollbar, mit sticky Header. Sektionen von oben nach unten:

### 1. Header / Nav (sticky)
- Layout: `flex`, `space-between`, padding `20px 52px`, `border-bottom: 1px solid #23262D`,
  Hintergrund `rgba(250,247,242,.92)` + `backdrop-filter: blur(8px)`, sticky top.
- Links: Wortmarke „Valanto" (Source Serif 4, 23px, 700) + 6×6px Petrol-Quadrat als
  Baseline-Punkt.
- Mitte: Nav-Links `Funktionen · Für wen · Preise · Über uns` (Archivo 14.5px, 500,
  `#55585F`) — Anker auf die Sektionen.
- Rechts: **Sprachumschalter** `DE / FR / EN` als 1px-umrandete Segmentgruppe (aktives
  Segment: Text `#23262D` auf `#ECE6DC`; inaktiv: `#6E6A60`, transparent) · Text-Link
  „Login" (Unterstrich) · Button „Kostenlos testen" (Vollquadrat, `#23262D` Bg, weiss;
  Hover → `#23808F`).

### 2. Hero
- Layout: Grid `1.05fr 1fr`, gap 48px, padding `72px 52px 60px`.
- Links: Eyebrow (26×2px Petrol-Strich + Text) · H1 (Source Serif 4, 54px, 600,
  `line-height:1.13`) · Lead (17px, max-width 520px) · Button-Gruppe (Primär Petrol
  „Kostenlos testen" + Sekundär Outline „Demo buchen", **geteilte Kante, kein Gap**) ·
  Trust-Zeile (13px, `#6E6A60`): „Keine Kreditkarte nötig · 1 Bewertung gratis ·
  Schweizer Hosting".
- Rechts: **Dossier-Motiv** (Platzhalter für echten Screenshot). Zwei gestapelte
  Papierlagen: hinten `#F1ECE2` mit 1px-Rand, vorne weisse Karte mit `border:1px solid
  #23262D` und Offset-Schatten `14px 14px 0 rgba(35,38,45,.08)`, padding `30px 32px`.
  Inhalt: Label „BEWERTUNGS-DOSSIER" + „Valanto"; Objektzeile („Einfamilienhaus" /
  „Seestrasse 14, 8703 Erlenbach"); Marktwert „CHF 1'240'000" (Serif 38px, Petrol);
  drei Bewertungsbalken (Lage 4.5 / Zustand 4.0 / Ausbau 3.5) als 8px-Rechteckbalken;
  Footerzeile „Bewertung Nr. 2043 · Seite 1 / 18" + „PDF-Export". Badge unten rechts
  „🇨🇭 Gehostet in der Schweiz" (Anthrazit-Vollfläche, weiss).

### 3. Vertrauens-Leiste
- Volle Breite, **Anthrazit-Band** (`#23262D`), padding `18px 52px`.
- Links: „Vertraut von Immobilienprofis in der ganzen Schweiz" (`#B4B0A5`, 13px).
- Rechts: drei Badges als zusammenhängende 1px-Segmentgruppe: „🇨🇭 In der Schweiz
  gehostet" · „SIV-nah" · „Partner-Logos folgen" (letztes dashed, gedämpft).

### 4. Feature-Übersicht (Anker „Funktionen")
- Kopf: Grid `1fr 1fr` — links Eyebrow „ALLES AN EINEM ORT" + H2 „Ein Werkzeug für den
  ganzen Immobilien-Workflow"; rechts Intro-Satz.
- Grid: **3 Spalten × 2 Zeilen, durch 1px-Linien getrennt** (`border-top`+`border-left`
  am Container, `border-right`+`border-bottom` je Zelle). Jede Zelle padding `28px 26px`,
  min-height 150px, Hover → Bg `#fff`.
- Zelle: Zähler „01"–"06" (Serif, Petrol) + 22px leeres 1px-Quadrat · Titel (17px, 700) ·
  Text (13.5px). Sechs Features siehe Copy unten.

### 5. Zielgruppen-Split (Anker „Für wen")
- Eyebrow „FÜR IHRE ARBEITSWEISE" + H2 „Gemacht für Ihre Rolle".
- 3 Spalten in **einem 1px-Rahmen**, mittlere Spalte durch `border-left/right` getrennt.
- Je Block: Rollen-Titel (Serif 24px, 600) · 34×2px Petrol-Strich · Text (14.5px).
  Rollen: Makler / Bewerter / Spezialist.

### 6. Preise (Anker „Preise")
- Zentrierter Kopf: Eyebrow „TRANSPARENTE PREISE" + H2 „Ein Paket für jede Rolle" +
  Intro.
- 3 Preiskarten in **einem 1px-Rahmen** (max-width 1000px, zentriert), Spalten durch
  `border-right` getrennt. Mittlere Karte („Makler") ist die Empfehlung: weisser
  Hintergrund + Vollbreiten-Balken oben „Beliebt" (Petrol, weiss), zusätzliches
  Top-Padding.
- Karte: Paketname (Serif 14px, `letter-spacing:0.12em`) · Preis (Serif 42px) + „/ Monat"
  · 1px-Trennlinie · Feature-Liste mit 16px-Petrol-Quadrat-Häkchen · CTA-Button unten
  (Empfehlung = Petrol-Vollfläche „Testen"; sonst Outline).
- Preise: Bewerter **CHF 50.–**, Makler **CHF 80.–** (Beliebt), Spezialist **CHF 120.–**.
- Hinweiszeile: „Alle Preise exkl. MwSt. · Individuelle Lösungen für Teams auf Anfrage."
  Preise sind **Draft**.

### 7. SIV- / Vertrauens-Sektion
- Block-Bg `#F1ECE2`, `border-top:1px solid #23262D`, padding `76px 52px`.
- Grid `1fr 1fr`: links Eyebrow „VERANKERT IM SCHWEIZER MARKT" + H2 „Nähe zum
  Schätzer-Ökosystem" + Text; rechts weisse Box mit 1px-Rahmen, drei durch 1px getrennte
  Zeilen (Schweizerkreuz-Icon / Schloss-Icon / Haus-Icon → Schweizer Hosting / Sicher &
  stabil / Aus der Praxis).
- **Vorsicht Copy:** bewusst „Austausch"/„Nähe", **keine** offizielle SIV-Partnerschaft
  behaupten, bis mit Jürg geklärt.

### 8. Abschluss-CTA
- Volle Breite, **Anthrazit-Band** (`#23262D`), padding `72px 52px`, zentriert.
- H2 „Bereit, es auszuprobieren?" (Serif 36px, `#FAF7F2`) · Text (`#B9BCC2`) ·
  Button-Gruppe (Petrol „Kostenlos testen" + Outline „Demo buchen", geteilte Kante).

### 9. Footer
- Bg `#1A1C21`, padding `56px 52px 28px`, `color:#B4B0A5`.
- Grid `1.6fr 1fr 1fr 1fr`, Trennlinie unten `1px solid #34373E`:
  - Spalte 1: Wortmarke + Claim + „🇨🇭 Made & hosted in Switzerland".
  - Produkt: Funktionen · Preise · Login.
  - Unternehmen: Über uns · Kontakt · SIV.
  - Rechtliches: Impressum · Datenschutz · AGB.
- Copyright: „© 2026 Valanto / Felsberg Consulting GmbH. Alle Rechte vorbehalten."

---

## Interactions & Behavior
- **Sticky Header** mit Blur; Nav-Links scrollen zu den Sektions-Ankern (`Funktionen`,
  `Für wen`, `Preise`, `Über uns`) — smooth scroll.
- **Sprachumschalter (funktional):** klick DE / FR / EN wechselt die gesamte Seiten-Copy.
  Default **DE**. Aktives Segment hervorgehoben. Im Prototyp State-basiert; in React über
  `react-i18next` (`i18n.changeLanguage`).
- **Hover-States:** Buttons invertieren (Fill ↔ Outline / Petrol ↔ Anthrazit);
  Feature-Zellen wechseln Bg von `#FAF7F2` → `#fff`.
- CTAs „Kostenlos testen" → Testlogin-Ziel (noch offen, siehe unten). „Demo buchen" →
  Demo-/Kontaktformular.
- **Mobile-first (verbindlich).** Es gibt eine ausgearbeitete Mobile-Ansicht (390px) im
  Prototyp — siehe unten. Erst Mobile bauen, dann auf Desktop erweitern.

## Responsive / Mobile-first (Layout „Valanto Mobile", 390px)
Reihenfolge auf Mobile bewusst **Claim → CTA → Beweis**: Hero-Text und beide CTAs stehen
oben, das Dossier folgt darunter (auf Desktop steht es daneben).

Breakpoint-Vorschlag: **< 768px** = Mobile (1 Spalte), **≥ 1024px** = Desktop-Layout wie
in Sektion 1–9 beschrieben; dazwischen Tablet (Feature-Grid 2 Spalten, Hero ggf. noch
gestapelt).

Mobile-Regeln pro Sektion:
- **Nav:** Höhe kompakter (padding `14px 20px`). Logo links; rechts Sprachumschalter
  (kleiner) + **Burger** als 34×34px 1px-Quadrat mit drei 16×2px-Strichen. Nav-Links im
  ausklappenden Menü (im Prototyp nur Icon, Menü-Panel noch zu bauen). Hit-Target ≥ 44px.
- **Hero:** eine Spalte, H1 34px, Lead 15px, **beide CTAs full-width, vertikal gestapelt
  mit geteilter Kante** (kein Gap; unterer Button `border-top:none`). Trust-Zeile
  zentriert. Dossier als eigene Karte darunter (Offset-Schatten `10px 10px 0`).
- **Trust-Bar:** Anthrazit-Band, Badges vertikal gestapelt (geteilte Kante).
- **Features:** eine Spalte, Zellen weiterhin durch 1px-Linien getrennt (border-left/top
  am Container, border-right/bottom je Zelle). Titel 16px.
- **Zielgruppen:** eine Spalte, Blöcke mit `border-bottom`-Trennung.
- **Preise:** drei Karten **vertikal gestapelt** in einem 1px-Rahmen, getrennt durch
  `border-bottom` (statt `border-right` wie Desktop). „Beliebt"-Karte weiss + Top-Balken.
- **CTA:** zentriert, Buttons full-width gestapelt (geteilte Kante).
- **Footer:** Marke oben; Link-Spalten als 2er-Grid (Produkt + Rechtliches gezeigt);
  Copyright unten.

Hit-Targets durchgängig ≥ 44px. Buttons behalten `border-radius: 0`.

## Barrierefreiheit (WCAG AA)
- Alle Fliess-/Hinweistext-Farben erfüllen **AA (≥ 4.5:1)**. Zwei Tokens wurden dafür
  korrigiert: `--muted` #A6A296 → **#6E6A60** (auf Papier), Footer-Labels/Copyright
  #6E6B64 → **#8E8B82** (auf dunklem Grund). Diese Werte im Code verwenden, nicht die alten.
- Petrol `#23808F` als Text auf Papier `#FAF7F2` ≈ 4.6:1 (AA für Normaltext ok); als
  weisser Text auf Petrol-Fläche ≈ 4.7:1.
- Beim Nachbauen: semantisches HTML (`<header>`, `<nav>`, `<section>`, `<h1/h2>`,
  `<footer>`), `alt`-Texte für den (echten) Hero-Screenshot, `:focus-visible`-Stil für
  Tastaturnavigation (z. B. 2px Petrol-Outline), `aria-current` am aktiven Sprach-Segment.

## State Management
- `language: 'de' | 'fr' | 'en'` (Default `de`) — über i18n. Persistenz optional
  (localStorage / `<html lang>`).
- Sonst statische Marketing-Seite, kein Daten-Fetching. Formulare (Test/Demo) später.

## i18n (verbindlich aus Briefing)
- `react-i18next`, getrennte Sprachdateien `de.json` (final), `fr.json`, `en.json`.
- **Alle drei Dateien liegen fertig befüllt in `locales/`** in diesem Bundle — DE ist
  final, FR/EN sind bereits sinnvoll übersetzt (vor Go-Live von Muttersprachlern
  gegenlesen lassen).
- Key-Schema: `nav.*`, `hero.*`, `dossier.*`, `trust.*`, `features[].*`, `audiences[].*`,
  `pricing.*`, `plans.*`, `siv.*`, `cta.*`, `footer.*`.
- Sprachumschalter im Header, DE als Default.

## Assets
- **Fonts:** Google Fonts — `Source Serif 4`, `Archivo`. (M PLUS Rounded 1c aus dem
  Briefing wird NICHT verwendet.)
- **Icons:** Alle Emoji wurden durch **eckige Inline-SVG-Icons** ersetzt (keine Emoji
  mehr im Design): Schweiz = Petrol-Quadrat mit weissem Kreuz (`#23808F` + `#fff`); SIV
  „Sicher & stabil" = Schloss-Linien-Icon; „Aus der Praxis" = Haus-Linien-Icon
  (`stroke:#23262D`, `stroke-width:1.8`, eckig). Beim Nachbau als eigene `<Icon>`-
  Komponenten übernehmen (z. B. Lucide `lock`/`home` + custom Swiss-Cross-SVG).
  Feature-Marker sind Ziffern „01–06", keine Icons.
- **Produkt-Screenshots:** fehlen. Hero-Dossier und Dashboard sind HTML-Platzhalter —
  durch echte Screenshots des Tools ersetzen.
- **Logo:** Wortmarke „Valanto" + Petrol-Quadrat (Text-basiert, kein Bild-Asset nötig;
  finales Logo später).

## Noch offen / vor Go-Live klären
- Testlogin-Ziel („Kostenlos testen" → eigenes Formular vs. direkt ins Tool).
- SIV-Formulierung mit Jürg abstimmen (was darf konkret behauptet werden).
- Echte Produkt-Screenshots beschaffen.
- Impressum-/Datenschutz-Inhalte (Felsberg Consulting GmbH).
- FR/EN durch Muttersprachler final gegenlesen.
- Finales Logo / Domain valanto.ch.

## Umsetzung: Laravel + Inertia + React
Stack steht fest: **Laravel + Inertia.js + React + Vite** (Tailwind empfohlen). Die
Marketing-Startseite ist eine öffentliche Inertia-Page; kein Auth nötig.

### Ordnerstruktur (Vorschlag)
```
routes/web.php                         → Route auf HomeController
app/Http/Controllers/HomeController.php → rendert Inertia::render('Home', [...])
resources/js/
  app.jsx                              → Inertia-Setup, importiert i18n
  i18n.js                              → react-i18next init
  locales/de.json | fr.json | en.json  → aus diesem Bundle (1:1 übernehmen)
  Pages/Home.jsx                       → setzt die Sektionen zusammen
  Components/site/
    Nav.jsx  Hero.jsx  TrustBar.jsx  Features.jsx  Audiences.jsx
    Pricing.jsx  Siv.jsx  ClosingCta.jsx  Footer.jsx
    LangSwitch.jsx
resources/views/app.blade.php          → Font-Links (Source Serif 4, Archivo)
tailwind.config.js                     → Design-Tokens (siehe unten)
```

### i18n (react-i18next)
Die drei JSON-Dateien passen **unverändert**. Minimal-Setup:
```js
// resources/js/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import de from './locales/de.json';
import fr from './locales/fr.json';
import en from './locales/en.json';

i18n.use(initReactI18next).init({
  resources: { de: { t: de }, fr: { t: fr }, en: { t: en } },
  lng: localStorage.getItem('valanto_lang') || 'de',
  fallbackLng: 'de',
  ns: ['t'], defaultNS: 't',
  interpolation: { escapeValue: false },
});
export default i18n;
```
In `app.jsx` einmal `import './i18n';`. Nutzung: `const { t } = useTranslation();` →
`t('hero.h1')`. Arrays (Features/Audiences/Plans) über
`t('features.items', { returnObjects: true })` holen und mappen. Da die Keys unter dem
Namespace `t` liegen, entspricht `t('hero.h1')` dem Pfad in der JSON.

### Sprachumschalter (`LangSwitch.jsx`)
Client-seitig genügt für den Start:
```js
const change = (lng) => { i18n.changeLanguage(lng); localStorage.setItem('valanto_lang', lng); document.documentElement.lang = lng; };
```
Segment-Gruppe DE/FR/EN wie im Design (1px-Rahmen, aktives Segment `#23262D` auf
`#ECE6DC`).

**SEO-Hinweis (empfohlen für Go-Live):** für indexierbare mehrsprachige Inhalte besser
**server-getrieben** über Locale-Präfixe: Route-Gruppe `/{locale}` (`de|fr|en`) +
Middleware `App::setLocale($locale)` + Locale als Inertia-Shared-Prop
(`Inertia::share('locale', ...)`) an das Frontend geben; i18n initial daraus setzen und
`hreflang`-Tags rendern. Client-Switch dann als Navigation zum Locale-Präfix.

### Tailwind-Token-Mapping
```js
// tailwind.config.js → theme.extend
colors: {
  paper: '#FAF7F2', paper2: '#F1ECE2',
  ink: '#23262D', ink2: '#1A1C21',
  accent: '#23808F', accentHover: '#2E9DB0', accentSoft: '#8FBFC8',
  body: '#55585F', muted: '#6E6A60', // AA-korrigiert (war #A6A296)
  lineDark: '#4A4E57', lineFoot: '#34373E',
},
borderRadius: { none: '0' }, // radius durchgängig 0 — keine rounded-* utilities nutzen
fontFamily: {
  serif: ['"Source Serif 4"', 'serif'],
  sans: ['Archivo', 'system-ui', 'sans-serif'],
},
```
Regeln: **keine `rounded-*`-Klassen**, Trennung über `border`-Utilities (Hairline-Raster
`border-ink`), Button-Gruppen mit geteilter Kante (`border-l-0` / `border-t-0` am zweiten
Button). Fonts via `app.blade.php` Google-Fonts-`<link>` oder `@fontsource`.

### Routing / Controller
```php
// routes/web.php
Route::get('/', [HomeController::class, 'index'])->name('home');
// HomeController@index
return Inertia::render('Home');
```
Statische Seite — keine DB. Test-/Demo-Formulare später als eigene Inertia-Actions.

### SSR / „Content im HTML" & Social Meta (wichtig für SEO + Link-Vorschau)
**Problem:** Ohne SSR liefert Laravel nur `<div id="app"></div>` aus; Inhalt kommt erst
per JS. Schlecht für Google und für Scraper von LinkedIn/WhatsApp (die kein JS ausführen).

**Empfohlener Weg — offizielle Inertia-SSR** (kein Vite-Prerender-Plugin, kein Next.js):
1. `resources/js/ssr.jsx` anlegen (Inertia-SSR-Entry mit `createServer` +
   `createInertiaApp` aus `@inertiajs/react/server`); i18n dort ebenfalls importieren, damit
   die Übersetzungen serverseitig gerendert werden.
2. In `vite.config.js` das SSR-Input ergänzen: `laravel({ input: ['resources/js/app.jsx'],
   ssr: 'resources/js/ssr.jsx' })`.
3. Build: `npm run build` erzeugt `bootstrap/ssr/ssr.js`. Laufzeit: `php artisan
   inertia:start-ssr` (ein Node-Prozess; auf Forge/Herd als Daemon, optional via Laravel
   Octane). Fällt der Prozess aus, degradiert Inertia sauber auf Client-Rendering.
4. In `config/inertia.php` SSR aktivieren (`'ssr' => ['enabled' => true]`).

Danach steht Hero-Text, Preise und alle Section-Überschriften im ausgelieferten HTML.

**Titel/Head pro Seite:** die `<Head>`-Komponente aus `@inertiajs/react` in `Home.jsx`
verwenden (`<Head title="…"><meta … /></Head>`) — wird mit SSR ins `<head>` gerendert.

**Open-Graph-Tags server-seitig ins Blade-Root** (`resources/views/app.blade.php`, im
`<head>`) — so sind sie **immer** present, auch ohne laufenden SSR-Node-Prozess und für
JS-lose Scraper. Statische Inhalte, daher hartkodierbar (oder pro Locale via Shared-Prop):
```blade
<meta property="og:type" content="website">
<meta property="og:site_name" content="Valanto">
<meta property="og:title" content="Valanto – Immobiliensoftware aus der Schweiz">
<meta property="og:description" content="Bewerten, vermarkten, verwalten – in einem Werkzeug. Für Makler, Bewerter und Spezialisten. Entwickelt und gehostet in der Schweiz.">
<meta property="og:url" content="https://valanto.ch/">
<meta property="og:image" content="https://valanto.ch/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="description" content="Bewerten, vermarkten, verwalten – in einem Werkzeug. Für Makler, Bewerter und Spezialisten. Gehostet in der Schweiz.">
```
Bei mehrsprachig: pro Locale eigene `og:title`/`description` + `og:locale`
(`de_CH` / `fr_CH` / `en`) und `hreflang`-Alternates rendern.

**og:image (1200×630):** **liegt als `og-image.png` im Paket** (Valanto-Stil: Anthrazit,
Wortmarke, Claim, Modul-Leiste). Nach `public/og-image.png` legen; `og:image`-URL zeigt
bereits darauf. Editierbare Quelle: `og-image-source.html`.

**Prüfen nach Umsetzung:**
- Browser „View Source" (nicht DevTools-Inspector!) auf `https://valanto.test` bzw. der
  Live-Domain: Hero-H1, die drei Preise (CHF 50/80/120) und die Section-Überschriften
  müssen im rohen HTML stehen — nicht nur ein leeres root-div.
- `curl -s https://valanto.ch/ | grep -i "og:title"` → OG-Tags vorhanden.
- Facebook Sharing Debugger / LinkedIn Post Inspector zur Vorschau-Kontrolle.

## Files
- `Valanto Website.dc.html` — Design-Prototyp (Referenz, nur im Design-Tool lauffähig).
- `og-image.png` — fertiges 1200×630 Social-Share-Bild → nach `public/og-image.png`.
- `og-image-source.html` — editierbare Quelle des OG-Bilds.
- `locales/de.json`, `locales/fr.json`, `locales/en.json` — react-i18next-Sprachdateien,
  1:1 nach `resources/js/locales/` übernehmen.
- `screenshots/` — Desktop- und Mobile-Aufnahmen des Designs.
- `Website-Briefing-Portal.md` — Original-Briefing mit Kontext & Positionierung.
