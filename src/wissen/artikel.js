/* Fachartikel unter /wissen/ (Plan KI-Sichtbarkeit, Punkt 1 und 3).

   Jeder Artikel wird von Jürg fachlich geprüft und freigegeben, bevor er
   gemergt wird. Zahlen und Begriffe folgen dem, was Valanto tatsächlich
   rechnet (Bewertungsmodul der App) – sonst widerspräche der Artikel dem
   Produkt, das er erklärt.

   Neuer Artikel: hier anhängen, dann public/sitemap.xml und public/llms.txt
   ergänzen. Die Route entsteht automatisch (src/main.jsx).

   Felder:
   - slug, titel, beschreibung (Meta-Description, 1–2 Sätze), lead
   - veroeffentlicht / aktualisiert (ISO-Datum), lesezeit (Minuten)
   - autor (schema.org-Person) und autorName (sichtbar) – erst setzen, wenn
     die Person zugestimmt hat; sonst gilt Valanto als Herausgeberin
   - themen (schema.org about), kurzantwort, abschnitte, faq, valanto */

export const artikel = [
  {
    slug: 'altersentwertung-nach-bauteilen',
    titel: 'Altersentwertung nach Bauteilen: So wird der Realwert nachvollziehbar',
    beschreibung:
      'Wie die Altersentwertung im Realwert einer Schweizer Liegenschaft berechnet wird – pauschal über das wirtschaftliche Alter oder genauer nach Bauteilen mit Lebensdauer und Erneuerungsjahr. Mit Rechenbeispiel.',
    veroeffentlicht: '2026-10-02',
    lesezeit: 7,
    themen: [
      { '@type': 'Thing', name: 'Realwert' },
      { '@type': 'Thing', name: 'Altersentwertung' },
      { '@type': 'Thing', name: 'Immobilienbewertung Schweiz' },
      { '@type': 'Thing', name: 'Baukostenplan BKP' },
    ],
    lead:
      'Im Realwert einer Liegenschaft steckt eine Zahl, über die oft gestritten wird: die Altersentwertung. Wer sie pauschal schätzt, kann sie schwer begründen. Wer sie nach Bauteilen rechnet, zeigt auf einen Blick, wo das Gebäude Wert verloren hat – und wo eine Renovation ihn zurückgebracht hat.',
    kurzantwort:
      'Die Altersentwertung zieht vom Neuwert des Gebäudes ab, was durch Alter und Abnutzung verbraucht ist. Nach Bauteilen gerechnet, erhält jedes Bauteil einen Anteil am Gebäudewert und eine Lebensdauer. Seine Entwertung ist das Alter seit Bau oder letzter Erneuerung geteilt durch die Lebensdauer – linear und höchstens 100 %. Die gewichtete Summe aller Bauteile ergibt die Entwertung des Gebäudes. So wirkt eine Renovation genau dort, wo investiert wurde.',
    abschnitte: [
      {
        titel: 'Wo die Altersentwertung im Realwert steht',
        inhalt: [
          {
            absatz:
              'Der Realwert (auch Sachwert) setzt sich aus dem Landwert und dem Zeitwert der Bauten zusammen. Den Zeitwert ermittelt man in zwei Schritten: Zuerst wird der Neuwert bestimmt – was es heute kosten würde, das Gebäude neu zu erstellen, gegliedert nach dem Baukostenplan (BKP). Davon zieht man die Altersentwertung ab.',
          },
          {
            absatz:
              'Die Altersentwertung betrifft vor allem das Gebäude selbst (BKP 2). Andere Positionen werden anders behandelt: Die Umgebung (BKP 4) erhält einen eigenen Abzug, Ausstattungen (BKP 9) werden je Position über Alter und Lebensdauer entwertet, Vorbereitungsarbeiten und Baunebenkosten bleiben in der Regel ohne Abzug.',
          },
        ],
      },
      {
        titel: 'Methode 1: pauschal über das wirtschaftliche Alter',
        inhalt: [
          {
            absatz:
              'Die klassische Methode fasst das Gebäude in wenige Gruppen – etwa Rohbau, Ausbau und Installationen – und gibt jeder Gruppe ein Alter und ein Gewicht. Der gewichtete Durchschnitt ergibt das wirtschaftliche Alter des Gebäudes. Geteilt durch die wirtschaftliche Gesamtlebensdauer ergibt sich der Entwertungssatz.',
          },
          {
            absatz:
              'Die Methode ist schnell und für einheitliche, kaum erneuerte Bauten gut geeignet. Ihre Schwäche zeigt sich bei Liegenschaften, die gezielt renoviert wurden: Ob die Fenster oder die Küche ersetzt wurden, verschwindet im Durchschnitt – und lässt sich im Gutachten nur mit Worten begründen.',
          },
        ],
      },
      {
        titel: 'Methode 2: Entwertung nach Bauteilen',
        inhalt: [
          {
            absatz:
              'Beim Bauteil-Raster wird das Gebäude in vier Gruppen und darin in einzelne Bauteile gegliedert. Jede Gruppe hat einen Anteil am Gebäudewert, jedes Bauteil einen Anteil an seiner Gruppe und eine typische Lebensdauer. Massgebend ist das technische Alter: die Jahre seit dem Bau oder – wenn das Bauteil erneuert wurde – seit der Erneuerung.',
          },
          {
            liste: [
              'Entwertung eines Bauteils = technisches Alter ÷ Lebensdauer, linear, höchstens 100 %.',
              'Beitrag zur Gesamtentwertung = Gruppenanteil × Bauteilanteil × Entwertung des Bauteils.',
              'Entwertung des Gebäudes = Summe aller Beiträge.',
            ],
          },
          {
            tabelle: {
              titel: 'Richtwerte für ein Wohngebäude (Anteile und Lebensdauer)',
              kopf: ['Gruppe', 'Anteil am Gebäude', 'Bauteile (Anteil in der Gruppe · Lebensdauer)'],
              zeilen: [
                ['Grundsubstanz', '50 %', 'Tragstruktur, Rohbau · 100 Jahre'],
                [
                  'Gebäudehülle',
                  '20 %',
                  'Fassade 23 % · 30 J. · Dach 30 % · 40 J. · Fenster 40 % · 25 J. · Beschattung 7 % · 25 J.',
                ],
                [
                  'Installationen',
                  '18 %',
                  'Wärmeerzeugung 23 % · 20 J. · Wärmeverteilung 16 % · 40 J. · Wasserleitungen 14 % · 35 J. · Abwasserleitungen 13 % · 40 J. · Elektro 34 % · 35 J.',
                ],
                [
                  'Innenausbau',
                  '12 %',
                  'Küche 25 % · 25 J. · Bad 20 % · 30 J. · Bodenbeläge 25 % · 30 J. · Wandbeläge 10 % · 25 J. · Deckenbeläge 10 % · 30 J. · Diverser Ausbau 10 % · 25 J.',
                ],
              ],
            },
          },
          {
            absatz:
              'Die Werte sind Richtwerte aus der Bewertungspraxis, keine Norm. Bei einem Gebäude mit besonders hochwertiger Hülle oder einfacher Installation passt man Anteile und Lebensdauern an – wichtig ist, dass die Anteile jeder Ebene zusammen 100 % ergeben und die Anpassung im Gutachten begründet ist.',
          },
        ],
      },
      {
        titel: 'Rechenbeispiel: Einfamilienhaus mit Teilrenovation',
        inhalt: [
          {
            absatz:
              'Ein Einfamilienhaus mit Baujahr 1990 wird per 2026 bewertet. 2015 wurden Fenster, Beschattung und Heizung ersetzt, 2018 das Bad. Alles andere ist im Originalzustand. Das Gebäude ist also 36 Jahre alt, die 2015 erneuerten Bauteile 11 Jahre, das Bad 8 Jahre.',
          },
          {
            tabelle: {
              titel: 'Entwertung je Gruppe (gerundet)',
              kopf: ['Gruppe', 'Anteil', 'Entwertung in der Gruppe', 'Beitrag'],
              zeilen: [
                ['Grundsubstanz (36 von 100 Jahren)', '50 %', '36,0 %', '18,0 %'],
                ['Gebäudehülle (Fassade und Dach alt, Fenster neu)', '20 %', '70,7 %', '14,1 %'],
                ['Installationen (Heizung neu, Leitungen alt)', '18 %', '86,8 %', '15,6 %'],
                ['Innenausbau (Bad neu, Rest alt)', '12 %', '85,3 %', '10,2 %'],
                ['Total Altersentwertung', '100 %', '', '58,0 %'],
              ],
              summenzeile: true,
            },
          },
          {
            beispiel: {
              titel: 'Was die Renovationen ausmachen',
              zeilen: [
                'Ohne die Erneuerungen von 2015 und 2018 läge die Entwertung bei 66,9 %.',
                'Bei einem Neuwert des Gebäudes von CHF 1’000’000 beträgt der Zeitwert damit rund CHF 420’000 statt rund CHF 331’000.',
                'Die gezielten Investitionen sind im Realwert also mit rund CHF 89’000 sichtbar – und jede Zahl lässt sich auf ein Bauteil zurückführen.',
              ],
            },
          },
          {
            absatz:
              'Mit der pauschalen Methode müsste man die Wirkung derselben Renovationen über ein angepasstes wirtschaftliches Alter schätzen. Das Ergebnis kann ähnlich sein, die Herleitung bleibt aber eine Ermessensfrage.',
          },
        ],
      },
      {
        titel: 'Worauf es in der Praxis ankommt',
        inhalt: [
          {
            liste: [
              'Erneuerungsjahr statt Baujahr: Für ein ersetztes Bauteil beginnt das Alter mit der Erneuerung neu. Eine Teilerneuerung (z. B. nur die Hälfte der Fenster) lässt sich über ein mittleres Erneuerungsjahr oder eine Aufteilung des Bauteils abbilden.',
              'Höchstens 100 %: Ein Bauteil, das älter ist als seine Lebensdauer, ist vollständig entwertet, aber nicht mehr. Das Gebäude als Ganzes behält den Wert der Teile, die noch nicht abgeschrieben sind – vor allem der Grundsubstanz.',
              'Stichtag beachten: Das Alter wird auf das Jahr des Bewertungsstichtags gerechnet, nicht auf das Datum, an dem das Gutachten geschrieben wird.',
              'Nicht doppelt abziehen: Ein schlechter Zustand, der über die Altersentwertung hinausgeht (Schäden, Instandsetzungsbedarf), gehört als eigener Abzug ins Gutachten – nicht zusätzlich in die Lebensdauer.',
              'Begründen, wo man abweicht: Richtwerte sind ein Startpunkt. Wer eine Lebensdauer verkürzt oder verlängert, sollte den Grund nennen (Material, Zustand, Nutzung).',
            ],
          },
        ],
      },
    ],
    faq: [
      {
        frage: 'Wie lange hält welches Bauteil?',
        antwort:
          'Als Richtwerte gelten für Wohngebäude etwa: Heizung (Wärmeerzeugung) 20 Jahre, Fenster, Beschattung und Küche 25 Jahre, Fassade und Bad 30 Jahre, Wasser- und Elektroleitungen 35 Jahre, Dach, Wärmeverteilung und Abwasserleitungen 40 Jahre, Grundsubstanz rund 100 Jahre. Im Einzelfall entscheidet der Zustand vor Ort.',
      },
      {
        frage: 'Was passiert mit der Altersentwertung nach einer Renovation?',
        antwort:
          'Für das erneuerte Bauteil zählt das Erneuerungsjahr statt des Baujahrs – sein Alter beginnt neu und seine Entwertung sinkt entsprechend. Die übrigen Bauteile bleiben unverändert.',
      },
      {
        frage: 'Kann die Altersentwertung mehr als 100 % betragen?',
        antwort:
          'Nein. Jedes Bauteil wird höchstens zu 100 % entwertet. Da die Grundsubstanz eine lange Lebensdauer hat, bleibt die Entwertung eines ganzen Gebäudes in der Regel deutlich darunter.',
      },
      {
        frage: 'Pauschal oder nach Bauteilen – was ist besser?',
        antwort:
          'Für einheitliche, kaum erneuerte Gebäude reicht oft die pauschale Methode über das wirtschaftliche Alter. Wurde gezielt renoviert, ist die Rechnung nach Bauteilen genauer und im Gutachten leichter zu begründen.',
      },
    ],
    valanto:
      'In Valanto wählen Bewerterinnen und Bewerter im Realwert zwischen der gewichteten Alterstabelle (wirtschaftliches Alter) und dem Bauteil-Raster. Das Raster ist mit den Richtwerten aus diesem Artikel vorbelegt, jede Zeile lässt sich anpassen, das Baujahr kommt aus den Basisdaten, Erneuerungsjahre werden je Bauteil erfasst. Im Gutachten erscheint die Tabelle mit Anteil, Lebensdauer, technischem Alter, Entwertungssatz und Abzug in Franken.',
  },
]

/** Pfad eines Artikels mit Schrägstrich am Ende (wie Nginx ausliefert). */
export function artikelPfad(eintrag) {
  return `/wissen/${eintrag.slug}/`
}
