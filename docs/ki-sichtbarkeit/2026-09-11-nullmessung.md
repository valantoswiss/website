# KI-Sichtbarkeit – Nullmessung vom 11.09.2026

Zehn feste Fragen, die ein möglicher Kunde einem KI-Assistenten stellen könnte. Gemessen wird, ob Valanto in der Antwort vorkommt. Die Fragen bleiben bei jeder Messung gleich, damit die Ergebnisse vergleichbar sind. Die Messung ist bewusst am Tag des Live-Gangs von PR #21 (Seo pro Seite, JSON-LD, robots.txt, sitemap.xml, llms.txt) gemacht – also der Stand «vorher».

## Methode

| System | Zugang | Bemerkung |
|---|---|---|
| ChatGPT | chatgpt.com ohne Login, Websuche aktiv, jede Frage in einem neuen Chat | Standard-Erlebnis eines Besuchers ohne Konto |
| Claude | Websuche-Index über Claude Code (`WebSearch`) für vier Fragen; Modell ohne Websuche kennt Valanto nicht (Start 2026, nach Trainingsstand) | Claude-Chat mit Login nicht getestet |
| Gemini | gemini.google.com in Fabians eingeloggtem Chrome (Erweiterung «Claude in Chrome»), Modell «Flash», jede Frage in einem neuen Chat | Ohne Login läuft nur «Flash-Lite» und antwortet nicht zuverlässig; Googles KI-Modus ohne Login endet im Roboter-Check |

Wertung: **ja** = Valanto wird genannt oder beschrieben, **nein** = kommt nicht vor, **–** = nicht gemessen.

## Die zehn Fragen und Ergebnisse

| Nr. | Frage (Kurzform) | ChatGPT | Claude | Gemini | Genannte Anbieter (ChatGPT / Gemini) |
|---|---|---|---|---|---|
| 1 | Welche Software gibt es für die Immobilienbewertung in der Schweiz? | nein | nein | nein | Wüest Dimensions, IAZI, IMBAS/FPRE, PriceHubble, immopac / Wüest, IMBAS, IAZI, Immopac, Realplan, PriceHubble, Realforce, ealva, Houzy |
| 2 | Ich bin Bewerter und erstelle Verkehrswertgutachten für EFH und MFH – welches Programm? | nein | – | nein | Wüest Dimensions, IAZI, SwissREI/SRED, Excel / IAZI, FPRE, expert-value, Wüest |
| 3 | Schweizer Software für Makler, die Bewertung, Vermarktung und Verwaltung kombiniert? | nein | nein | nein | avendo, Heimster, IMMOMIG, PROPbase, CASAONE, Golden Key, ImmoSpice / CASAONE, IMMOMIG, RealAdvisor Pro, Fairwalter, ImmoSpice, GARAIO REM |
| 4 | Verkehrswertgutachten nach Realwert und Ertragswert – wie, und welche Software? | nein | – | nein | Wüest Dimensions, IAZI, Excel / Wüest, FPRE, Immopac, IAZI, Kazi Immo-Wert |
| 5 | Alternativen zu Excel mit fertigem Gutachten als PDF? | nein | – | nein | Wüest Dimensions, Popety.io, PriceHubble, RealAdvisor Pro, IAZI, immopreis.ch / Wüest, IMBAS, IAZI, expert-value |
| 6 | Was ist Valanto (valanto.ch)? | **ja** | nein | **ja** | ChatGPT liest valanto.ch und beschreibt Funktionen, Zielgruppen, Preise und Hosting korrekt. Gemini beschreibt die Website ebenfalls, erfindet aber Details dazu (Immobilienverwaltung als Kernbereich, «Valanto Solutions», Architekten und Investoren als Zielgruppe) |
| 7 | Welche Immobiliensoftware wird in der Schweiz gehostet und ist revDSG-konform? | nein | nein | nein | Immomig, immopac, GARAIO REM, CASAONE, Advanzo / avendo, casasoft, onOffice, FPRE, ImmoSparrow, IAZI, ImmoSpice, GARAIO REM, Immomig |
| 8 | Welche Software rechnet die Altersentwertung nach Bauteilen für den Realwert? | nein | – | nein | XpertHome/XpertCenter, Cavora Partners, IAZI / FPRE, Immopac, IAZI, Wüest Dimensions, Stratus (EPIQR) |
| 9 | Treuhänder, gelegentliche Bewertungen für Erbteilungen – welche Software oder welcher Dienst? | nein | – | nein | Wüest Dimensions, IAZI, RealAdvisor Pro / Wüest Dimensions, IAZI, FPRE, expert-value |
| 10 | Was kostet Immobilienbewertungssoftware in der Schweiz pro Monat? | nein | – | nein | Immono, FairEstate, immoMatch.ai, RealAdvisor, Wertify, IAZI, PriceHubble, Wüest / FPRE, Wüest, PriceHubble, IAZI, RealForce, ImmoManage, Fairwalter |

**Stand: ChatGPT 1 von 10, Gemini 1 von 10, Claude 0 von 4 gemessenen.**

Hinweis zu Frage 3 (ChatGPT): Der Fragetext wurde beim Eintippen versehentlich doppelt abgeschickt; ChatGPT hat die Frage trotzdem korrekt verstanden.

## Wer stattdessen genannt wird

Häufigkeit über die je zehn Antworten:

| Anbieter | ChatGPT | Gemini |
|---|---|---|
| IAZI / CIFI | 8 | 8 |
| Wüest Partner (Dimensions) | 7 | 7 |
| Fahrländer Partner (FPRE / IMBAS) | 1 | 8 |
| PriceHubble | 3 | 2 |
| RealAdvisor (Pro) | 3 | 1 |
| immopac | 2 | 3 |
| expert-value | 0 | 3 |
| Immomig | 2 | 2 |
| CASAONE / Casasoft | 2 | 2 |
| ImmoSpice | 1 | 2 |
| GARAIO REM | 1 | 2 |
| Fairwalter | 0 | 2 |
| Realforce | 0 | 2 |
| je 1 bei ChatGPT: avendo, Heimster, PROPbase, Golden Key, Popety.io, immopreis.ch, XpertHome, Cavora, Advanzo, Immono, FairEstate, immoMatch.ai, Wertify, SwissREI | | |
| je 1 bei Gemini: avendo, onOffice, ImmoSparrow, Realplan, ealva, Houzy, Kazi Immo-Wert, Stratus/EPIQR, ImmoManage | | |

Die drei Datenhäuser IAZI, Wüest Partner und Fahrländer Partner dominieren beide Systeme. Sie werden als «Marktstandard» und «bankenanerkannt» beschrieben. Das ist die Kategorie, in der Valanto nicht antritt. Die realistische Vergleichsgruppe für Valanto sind CASAONE, Immomig, avendo, Heimster, Fairwalter und ImmoSpice.

## Was die Messung bedeutet

1. **Die Website ist für KI-Systeme lesbar.** Bei der direkten Frage nach Valanto lesen ChatGPT und Gemini valanto.ch. ChatGPT gibt Funktionen, Preise (50/80/120) und das Hosting bei Infomaniak korrekt wieder. Gemini erfindet Details dazu, unter anderem eine Immobilienverwaltung als dritten Kernbereich. Das spricht dafür, die Funktionen auf der Website noch klarer abzugrenzen, damit weniger Raum für Ergänzungen bleibt.
2. **Ohne Fachinhalte keine Chance bei den allgemeinen Fragen.** Die genannten Anbieter werden über ihre eigenen Produktseiten und über Drittquellen zitiert (Bestag, news-zuerich.ch, Fairwalter-Blog, Listenchampion, SVIT). Valanto hat weder Fachseiten noch Drittquellen. Das ist genau der Plan-Punkt 1 und 3 (Fachartikel, Seite pro Methode).
3. **Frage 8 zeigt die Lücke am deutlichsten.** Die Altersentwertung nach Bauteilen ist eine Kernfunktion von Valanto, steht aber nirgends auf der Website. ChatGPT nennt dafür XpertHome und Cavora.
4. **Frage 10: Wer Preise öffentlich zeigt, wird genannt.** Valanto hat öffentliche Preise, aber nur als Abschnitt auf der Startseite. Eine eigene Seite `/preise/` mit klarem Titel würde bei dieser Frage helfen.
5. **Frage 7: Hosting-Aussage braucht eine eigene Seite.** Immomig wird zitiert, weil es einen klaren Satz «alle Daten in der Schweiz» hat. Valanto sagt dasselbe, aber verstreut. Eine Seite «Hosting und Datenschutz» würde das bündeln.
6. **Claude findet valanto.ch nicht einmal bei der Markenfrage.** Der Suchindex hinter Claude kennt die Domain noch nicht. Neben der Google Search Console (Philippe, Woche vom 14.09.) sollte die Sitemap auch bei den Bing Webmaster Tools eingereicht werden. Bing speist ChatGPT, und Bing/IndexNow beschleunigt auch andere Indizes.

## Nächste Messung

- Termin: 11.10.2026, dieselben zehn Fragen, gleiche Methode.
- Gemini wieder über Fabians Chrome mit der Erweiterung «Claude in Chrome». Pro Frage einen neuen Chat öffnen, ins Eingabefeld klicken, tippen, Enter, und erst weiternavigieren, wenn die Antwort fertig ist, sonst wird der Chat nicht gespeichert.
- Erwartung: Frage 6 bleibt ja. Fragen 7, 8 und 10 sind die ersten Kandidaten für ein ja, sobald die Seiten «Hosting und Datenschutz», «Altersentwertung nach Bauteilen» und «Preise» existieren und indexiert sind.
