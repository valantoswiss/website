# KI-Sichtbarkeit – Nullmessung vom 11.09.2026

Zehn feste Fragen, die ein möglicher Kunde einem KI-Assistenten stellen könnte. Gemessen wird, ob Valanto in der Antwort vorkommt. Die Fragen bleiben bei jeder Messung gleich, damit die Ergebnisse vergleichbar sind. Die Messung ist bewusst am Tag des Live-Gangs von PR #21 (Seo pro Seite, JSON-LD, robots.txt, sitemap.xml, llms.txt) gemacht – also der Stand «vorher».

## Methode

| System | Zugang | Bemerkung |
|---|---|---|
| ChatGPT | chatgpt.com ohne Login, Websuche aktiv, jede Frage in einem neuen Chat | Standard-Erlebnis eines Besuchers ohne Konto |
| Claude | Websuche-Index über Claude Code (`WebSearch`) für vier Fragen; Modell ohne Websuche kennt Valanto nicht (Start 2026, nach Trainingsstand) | Claude-Chat mit Login nicht getestet |
| Gemini | nicht gemessen | Braucht ein eingeloggtes Google-Konto; Googles KI-Modus ohne Login endet im Roboter-Check |

Wertung: **ja** = Valanto wird genannt oder beschrieben, **nein** = kommt nicht vor, **–** = nicht gemessen.

## Die zehn Fragen und Ergebnisse

| Nr. | Frage (Kurzform) | ChatGPT | Claude | Gemini | Genannte Anbieter (ChatGPT) |
|---|---|---|---|---|---|
| 1 | Welche Software gibt es für die Immobilienbewertung in der Schweiz? | nein | nein | – | Wüest Dimensions, IAZI (REPM, Hedo), IMBAS/FPRE, PriceHubble, immopac |
| 2 | Ich bin Bewerter und erstelle Verkehrswertgutachten für EFH und MFH – welches Programm? | nein | – | – | Wüest Dimensions, IAZI, SwissREI/SRED, Excel |
| 3 | Schweizer Software für Makler, die Bewertung, Vermarktung und Verwaltung kombiniert? | nein | nein | – | avendo, Heimster, IMMOMIG, PROPbase, CASAONE, Golden Key, ImmoSpice |
| 4 | Verkehrswertgutachten nach Realwert und Ertragswert – wie, und welche Software? | nein | – | – | Wüest Dimensions, IAZI, Excel |
| 5 | Alternativen zu Excel mit fertigem Gutachten als PDF? | nein | – | – | Wüest Dimensions, Popety.io, PriceHubble, RealAdvisor Pro, IAZI, immopreis.ch |
| 6 | Was ist Valanto (valanto.ch)? | **ja** | nein | – | ChatGPT liest valanto.ch und beschreibt Funktionen, Zielgruppen, Preise und Schweizer Hosting korrekt |
| 7 | Welche Immobiliensoftware wird in der Schweiz gehostet und ist revDSG-konform? | nein | nein | – | Immomig, immopac, GARAIO REM, CASAONE, Advanzo |
| 8 | Welche Software rechnet die Altersentwertung nach Bauteilen für den Realwert? | nein | – | – | XpertHome/XpertCenter, Cavora Partners, IAZI |
| 9 | Treuhänder, gelegentliche Bewertungen für Erbteilungen – welche Software oder welcher Dienst? | nein | – | – | Wüest Dimensions, IAZI, RealAdvisor Pro |
| 10 | Was kostet Immobilienbewertungssoftware in der Schweiz pro Monat? | nein | – | – | Immono, FairEstate, immoMatch.ai, RealAdvisor, Wertify, IAZI, PriceHubble, Wüest |

**Stand: ChatGPT 1 von 10, Claude 0 von 4 gemessenen, Gemini offen.**

Hinweis zu Frage 3: Der Fragetext wurde beim Eintippen versehentlich doppelt abgeschickt; ChatGPT hat die Frage trotzdem korrekt verstanden.

## Wer stattdessen genannt wird

Häufigkeit über die zehn ChatGPT-Antworten:

| Anbieter | Nennungen |
|---|---|
| IAZI / CIFI | 8 |
| Wüest Partner (Dimensions) | 7 |
| PriceHubble | 3 |
| RealAdvisor (Pro) | 3 |
| Immomig | 2 |
| CASAONE / Casasoft | 2 |
| immopac | 2 |
| je 1: IMBAS/FPRE, avendo, Heimster, PROPbase, Golden Key, ImmoSpice, Popety.io, immopreis.ch, XpertHome, Cavora, GARAIO REM, Advanzo, Immono, FairEstate, immoMatch.ai, Wertify, SwissREI | |

## Was die Messung bedeutet

1. **Die Website ist für KI-Systeme lesbar.** Bei der direkten Frage nach Valanto liest ChatGPT valanto.ch und gibt Funktionen, Preise (50/80/120) und das Hosting bei Infomaniak korrekt wieder. Der technische Teil (PR #21) wirkt.
2. **Ohne Fachinhalte keine Chance bei den allgemeinen Fragen.** Die genannten Anbieter werden über ihre eigenen Produktseiten und über Drittquellen zitiert (Bestag, news-zuerich.ch, Fairwalter-Blog, Listenchampion, SVIT). Valanto hat weder Fachseiten noch Drittquellen. Das ist genau der Plan-Punkt 1 und 3 (Fachartikel, Seite pro Methode).
3. **Frage 8 zeigt die Lücke am deutlichsten.** Die Altersentwertung nach Bauteilen ist eine Kernfunktion von Valanto, steht aber nirgends auf der Website. ChatGPT nennt dafür XpertHome und Cavora.
4. **Frage 10: Wer Preise öffentlich zeigt, wird genannt.** Valanto hat öffentliche Preise, aber nur als Abschnitt auf der Startseite. Eine eigene Seite `/preise/` mit klarem Titel würde bei dieser Frage helfen.
5. **Frage 7: Hosting-Aussage braucht eine eigene Seite.** Immomig wird zitiert, weil es einen klaren Satz «alle Daten in der Schweiz» hat. Valanto sagt dasselbe, aber verstreut. Eine Seite «Hosting und Datenschutz» würde das bündeln.
6. **Claude findet valanto.ch nicht einmal bei der Markenfrage.** Der Suchindex hinter Claude kennt die Domain noch nicht. Neben der Google Search Console (Philippe, Woche vom 14.09.) sollte die Sitemap auch bei den Bing Webmaster Tools eingereicht werden. Bing speist ChatGPT, und Bing/IndexNow beschleunigt auch andere Indizes.

## Nächste Messung

- Termin: 11.10.2026, dieselben zehn Fragen, gleiche Methode.
- Gemini: eine Person mit Google-Konto stellt die zehn Fragen in gemini.google.com und trägt ja/nein ein.
- Erwartung: Frage 6 bleibt ja. Fragen 7, 8 und 10 sind die ersten Kandidaten für ein ja, sobald die Seiten «Hosting und Datenschutz», «Altersentwertung nach Bauteilen» und «Preise» existieren und indexiert sind.
