# Website-Briefing – Immobilien-SaaS-Portal (Arbeitstitel)

> **Zweck dieses Dokuments:** Bauplan für die Marketing-Website. Enthält Struktur, fertige DE-Copy und technische Hinweise. Direkt weitergebbar an **Claude Design** (Gestaltung) und **Claude Code** (React-Umsetzung).
>
> **Status:** Draft v1 · Basierend auf Felsberg-Portal-Konzept · Sprachen: DE (fertig), FR + EN (Platzhalter-Struktur)

---

## 0. Kontext & Positionierung

**Was ist das Produkt?**
Eine Schweizer SaaS-Plattform für Immobilienprofis – Liegenschaftsverwaltung, Bewertungen mit Dossier, Neubauprojekte, Landingpages, Verkäufer-Portal. Aus dem bestehenden Tool von Felsberg Immobilien heraus zu einem eigenständigen Produkt für Dritte entwickelt.

**Kernversprechen (eine Zeile):**
Die Immobiliensoftware, die Bewertung, Vermarktung und Verwaltung in einem Werkzeug vereint – entwickelt und gehostet in der Schweiz.

**Zielgruppen:**
- Immobilienmakler
- Immobilienbewerter / Schätzer (Nähe zum SIV Schätzerverband)
- Spezialisten, die beides machen

**Differenzierung ggü. Konkurrenz (z. B. CasaOne):**
- Bewertung + Vermarktung + Verwaltung in *einem* Tool statt getrennter Module
- 100 % Schweiz: Entwicklung, Hosting, Datenhaltung
- Verbindung zum Schätzer-Ökosystem (SIV)
- Faire, transparente Paketpreise

**Namensfindung:** offen. Platzhalter im Dokument: **[PORTALNAME]**. Empfehlung: neutraler, eigenständiger Name (nicht „Felsberg"), damit das Produkt firmenunabhängig wirkt.

---

## 1. Seitenstruktur (Sitemap)

**Startseite (One-Pager mit Ankern):**
1. Header / Navigation (sticky)
2. Hero
3. Vertrauens-Leiste (Logos / SIV / „in CH gehostet")
4. Feature-Übersicht (die Kernmodule)
5. Zielgruppen-Split (Makler / Bewerter / Spezialist)
6. Preise (3 Pakete)
7. SIV- / Vertrauens-Sektion
8. Abschluss-CTA (Test + Demo)
9. Footer

**Spätere Unterseiten (nur vormerken, nicht jetzt bauen):**
- Feature-Detailseiten
- Login / App-Einstieg (verlinkt aufs Tool)
- Impressum / Datenschutz (Pflicht CH)
- Blog / Ressourcen (optional)

---

## 2. Sections mit fertiger DE-Copy

### 2.1 Header / Navigation
**Logo** links · **Nav** rechts.

Nav-Punkte: `Funktionen` · `Für wen` · `Preise` · `Über uns`
Rechts: Sprachumschalter `DE / FR / EN` + Button **„Login"** (outline) + Button **„Kostenlos testen"** (primär)

---

### 2.2 Hero
**Eyebrow (klein, Grossbuchstaben):**
IMMOBILIENSOFTWARE AUS DER SCHWEIZ

**H1:**
Bewerten, vermarkten, verwalten – in einem Werkzeug.

**Lead:**
[PORTALNAME] bündelt Liegenschaftsverwaltung, professionelle Bewertungen mit Dossier und Vermarktung in einer einzigen Plattform. Entwickelt für Makler, Bewerter und Spezialisten – gehostet in der Schweiz.

**Buttons:**
- Primär: **Kostenlos testen** → Testlogin
- Sekundär (outline): **Demo buchen**

**Kleiner Trust-Hinweis unter den Buttons:**
Keine Kreditkarte nötig · 1 Bewertung gratis · Schweizer Hosting

**Visual (Hinweis für Design):** Screenshot/Mockup des Tools (Dashboard oder Bewertungs-Dossier). Falls noch keiner vorhanden: abstrahierte UI-Illustration.

---

### 2.3 Vertrauens-Leiste
Schmales Band direkt unter dem Hero.

**Text links (klein):** Vertraut von Immobilienprofis in der ganzen Schweiz
**Rechts:** Platz für Logos / Badges: „🇨🇭 In der Schweiz gehostet" · „SIV-nah" · Partner-Logos (später)

---

### 2.4 Feature-Übersicht
**Eyebrow:** ALLES AN EINEM ORT
**H2:** Ein Werkzeug für den ganzen Immobilien-Workflow

**Intro-Satz:**
Statt drei Tools und doppelter Datenpflege: [PORTALNAME] deckt den kompletten Ablauf ab – von der ersten Bewertung bis zur fertigen Vermarktung.

**Feature-Cards (6, je Icon + Titel + 1–2 Sätze):**

| Feature | Titel | Text |
|---|---|---|
| 🏠 | **Liegenschaften erfassen** | Alle Objekte zentral verwalten – inklusive vollständigem Dossier pro Liegenschaft. |
| 📊 | **Bewertungen mit Dossier** | Professionelle Immobilienbewertungen erstellen und als sauberes Dossier ausgeben. |
| 🏗️ | **Neubauprojekte** | Projekte anlegen, Einheiten verwalten und den Verkaufsstand im Blick behalten. |
| 🌐 | **Landingpages** | Für jedes Objekt oder Projekt eine eigene Vermarktungsseite – ohne Zusatztool. |
| 👥 | **Verkäufer-Portal** | Eigener Zugang für Verkäufer und Partner – transparent und kontrolliert. |
| ⚙️ | **CRM & Einstellungen** | Kontakte, Interessenten und Konfiguration an einem Ort. *(geplant / in Entwicklung)* |

> **Hinweis Claude Design:** Karten-Grid, auf Desktop 3 Spalten, mobil 1. Hover-Effekt (leichtes Anheben). Icons können später durch echte Line-Icons ersetzt werden.

---

### 2.5 Zielgruppen-Split
**Eyebrow:** FÜR IHRE ARBEITSWEISE
**H2:** Gemacht für Ihre Rolle

Drei Blöcke (können als Tabs oder als 3 Karten gebaut werden):

**Makler**
Verwalten Sie Liegenschaften, erstellen Sie Landingpages und behalten Sie Ihre Neubauprojekte im Griff – alles ohne Toolwechsel.

**Bewerter**
Erstellen Sie normkonforme Bewertungen mit professionellem Dossier. Schnell, nachvollziehbar, exportierbar.

**Spezialist**
Sie machen beides? Kombinieren Sie Bewertung und Vermarktung in einer durchgängigen Plattform – mit allen Modulen.

---

### 2.6 Preise
**Eyebrow:** TRANSPARENTE PREISE
**H2:** Ein Paket für jede Rolle

**Intro:**
Monatlich kündbar. Ohne versteckte Kosten. Starten Sie mit einer kostenlosen Bewertung.

**Paket-Karten (3):**

**Paket „Bewerter"**
- **CHF 50.–** / Monat
- Bewertungen mit Dossier
- Liegenschaften-Grunddaten
- Schweizer Hosting
- CTA: **Testen**

**Paket „Makler"** *(als „Beliebt" hervorheben)*
- **CHF 80.–** / Monat
- Liegenschaften & Dossier
- Neubauprojekte
- Landingpages
- Verkäufer-Portal
- CTA: **Testen**

**Paket „Spezialist"**
- **CHF 120.–** / Monat
- Alles aus Makler
- Plus: Bewertungen mit Dossier
- Für alle, die bewerten *und* vermarkten
- CTA: **Testen**

**Unter den Karten (klein):**
Alle Preise exkl. MwSt. · Individuelle Lösungen für Teams auf Anfrage.

> **Hinweis:** Preise sind Draft. Mittleres Paket visuell als Empfehlung markieren (Badge „Beliebt" / farbiger Rand).

---

### 2.7 SIV- / Vertrauens-Sektion
**Eyebrow:** VERANKERT IM SCHWEIZER MARKT
**H2:** Nähe zum Schätzer-Ökosystem

**Text:**
[PORTALNAME] entsteht aus der täglichen Praxis der Immobilienbewertung und pflegt den Austausch mit dem Schweizer Schätzerverband SIV. So bleibt die Plattform nah an den Anforderungen echter Bewertungsarbeit – nicht an denen einer beliebigen Software von der Stange.

**Drei Trust-Punkte (Icon + kurze Zeile):**
- 🇨🇭 **Schweizer Hosting** – Ihre Daten bleiben im Land.
- 🔒 **Sicher & stabil** – Auf verlässlicher Infrastruktur gebaut.
- 🤝 **Aus der Praxis** – Von Immobilienprofis für Immobilienprofis.

> **Hinweis:** Sobald konkrete SIV-Kooperation/Erlaubnis geklärt ist, hier Logo + präzisere Formulierung. Aktuell bewusst vorsichtig formuliert („Austausch", „Nähe"), um keine offizielle Partnerschaft zu behaupten, die (noch) nicht besteht.

---

### 2.8 Abschluss-CTA
**H2:** Bereit, es auszuprobieren?

**Text:**
Erstellen Sie Ihre erste Bewertung kostenlos oder lassen Sie sich die Plattform in einer persönlichen Demo zeigen.

**Buttons:**
- Primär: **Kostenlos testen**
- Sekundär (outline): **Demo buchen**

---

### 2.9 Footer
Spalten:
- **[PORTALNAME]** + kurzer Claim + „🇨🇭 Made & hosted in Switzerland"
- **Produkt:** Funktionen · Preise · Login
- **Unternehmen:** Über uns · Kontakt · SIV
- **Rechtliches:** Impressum · Datenschutz · AGB

Ganz unten: © [Jahr] [PORTALNAME] / Felsberg Consulting GmbH. Alle Rechte vorbehalten.

> **Hinweis:** Betreibergesellschaft ist die **Felsberg Consulting GmbH** (Jürg). Verrechnung läuft über die GmbH – im Impressum/Footer korrekt abbilden.

---

## 3. Design-Richtung (Input für Claude Design)

**Anhaltspunkte aus der bestehenden Felsberg-Immobilien-Seite** (als Referenz, nicht 1:1):
- Font: *M PLUS Rounded 1c* (weich, gerundet) – für das Portal ggf. eigenständiger, aber Richtung „freundlich-professionell" passt
- Primärfarbe bestehend: Cyan `#45B7C3`
- Text-Anthrazit: `#4A4C54`, Grau: `#939598`, heller BG: `#F4F6F7`
- Starke Rundungen (Radius ~24px), weiche Schatten
- Buttons: Pill-Form (border-radius 50px), Hover invertiert (Fill ↔ Outline)

**Wichtig (dein Wunsch):** Soll **nicht nach Vibecoding-Default** aussehen. Also:
- Kein generisches „lila Gradient + zentrierter Text + drei Emoji-Cards"-Muster
- Eigenständige Typo-Hierarchie, klare Weissräume, ein durchdachtes Farbsystem
- Ein bewusstes Signature-Element (z. B. das Bewertungs-Dossier als visuelles Motiv, oder eine ruhige Karten-/Grid-Ästhetik)
- Echte oder realistisch wirkende Produkt-Screenshots statt Stock-Klischees

**Empfehlung:** Da das Portal firmenunabhängig wird, in Claude Design ein **eigenes Farb-/Namens-Branding** entwickeln, statt das Felsberg-Cyan zu übernehmen.

---

## 4. Technische Hinweise (Input für Claude Code)

**Stack:**
- React (später erweiterbar – passt zu deinem Full-Stack-Weg)
- Für i18n: `react-i18next` mit getrennten Sprachdateien `de.json`, `fr.json`, `en.json`
- Sprachumschalter im Header, DE als Default
- Nur DE-Inhalte sind final getextet; FR/EN als Keys mit Platzhaltern anlegen, später füllen

**i18n-Struktur (Vorschlag):**
```
/src/locales/
  de.json   ← fertig befüllen aus diesem Briefing
  fr.json   ← gleiche Keys, Platzhalter
  en.json   ← gleiche Keys, Platzhalter
```
Key-Schema z. B. `hero.h1`, `hero.lead`, `pricing.makler.price`, …

**Umsetzungsreihenfolge (Vorschlag):**
1. In **Claude Design**: Startseite gestalten (Hero + Preise zuerst, das sind die wichtigsten Sections)
2. Design → **Claude Code**: als React-App aufbauen, Sections als Komponenten
3. i18n-Gerüst einziehen, DE befüllen
4. Deployment (Vercel bietet sich an – hast du schon genutzt)
5. FR/EN nachtexten, wenn Struktur steht

**Noch offen / später klären:**
- Endgültiger Portalname → betrifft Logo, Domain, alle Texte
- SIV: Was darf konkret behauptet werden? (Partnerschaft vs. „Austausch")
- Echte Produkt-Screenshots vom Tool
- Testlogin-Flow: Wohin führt „Kostenlos testen"? (eigenes Formular vs. direkt ins Tool)
- Impressum/Datenschutz-Inhalte (Felsberg Consulting GmbH)

---

## 5. Offene Punkte an dich (vor dem Bau)

- [ ] Portalname festlegen (oder bewusst mit Platzhalter starten)
- [ ] Farb-/Branding-Entscheid: Felsberg-Cyan übernehmen oder eigenständig?
- [ ] Produkt-Screenshots beschaffen
- [ ] SIV-Formulierung mit Jürg abstimmen
- [ ] Testlogin-Ziel definieren
```
