# KickerKids – Abenteuer-Version 0.3

Stand: 8. November 2026. Dieser Plan ersetzt die Preis- und Umfangsentscheidungen der Version 0.2. Das frühere Konzept bleibt als Archiv erhalten.

## Ziel und neues Produktversprechen

Ein Rätselabenteuer für Vorschule und Klasse 1: Kinder planen, drehen, kombinieren, vergleichen, erinnern sich und verändern Dinge in einer Spielszene. Eine Fragenliste mit wechselnden Zahlen allein ist kein ausreichendes Spielerlebnis. Ausgangspunkt bleibt ein Smartphone-taugliches Webspiel mit zwei frei wählbaren Welten, Fußball und Prinzessinnen-Zauber.

**Festgelegtes Preismodell: 3,99 € pro Monat.** Die Entwicklungstestfassung bleibt kostenlos, bis Elternkonten und die geprüfte Zahlungsanbindung eingerichtet sind. Kein aktiver Checkout und keine tatsächlichen Abbuchungen in Version 0.3.

## Was die Referenzen beitragen

Die folgenden Angaben stammen aus offiziellen Produktseiten bzw. Entwicklerbeschreibungen im App Store. Sie beschreiben angebotene Funktionen; sie sind kein unabhängiger Nachweis von Lernwirksamkeit.

| Referenz | Beobachtete Funktion / Aufmachung | Konsequenz für KickerKids |
|---|---|---|
| Cut the Rope Remastered | Physikrätsel, klare Zielhandlung, Hindernisse, neue Mechaniken, plastische Figuren und farbenfrohe Welten | räumliche Rätsel mit handelbaren Teilen, sichtbare Folgen und animierter Lösung; eigene Motive und Level |
| LogicLike | Logik, räumliches Denken, Gedächtnis, Muster, Gewichte und unterschiedliche Schwierigkeiten; Zielgruppe umfasst Vorschule und Grundschule | mehrere Kompetenzbereiche, Auswahl von Lernstufe und Schwierigkeit, variable Aufgaben statt linearer Zahlenfolge |
| Funny Food Academy / Kinder Lernspiele Vorschule | thematisch organisierte interaktive Aktivitäten; Zahlen, Sprache, Formen, Alltag und Kreativität | verständliche Szenen und unterschiedliche Interaktionen; spätere Alltags-/Kreativbereiche |
| Bimi Boo / Spiele für Kinder – Lernspiele | Sortieren, Klassifizieren, Labyrinthe, Bauen, Wege, Suchen und Reihenfolgen; überwiegend jüngere Zielgruppe | Handlungsmuster übernehmen und für Vorschule/Klasse 1 anspruchsvoller ausarbeiten |

Quellen: [ZeptoLab](https://www.zeptolab.com/games/cut-the-rope-remastered), [LogicLike](https://apps.apple.com/ch/app/logiclike-kinder-lernspiele-2/id1565113819), [Funny Food](https://apps.apple.com/ch/app/kinder-lernspiele-vorschule/id1447377766), [Bimi Boo](https://apps.apple.com/ch/app/spiele-f%C3%BCr-kinder-lernspiele/id1037749621).

Es werden keine Figuren, Sounds, Screenshots oder Original-Level dieser Spiele als eigene Assets verwendet. Das Remastered-Produkt wurde visuell auf der offiziellen Seite angesehen. KickerKids 0.3 ist eine eigenständige 2D/SVG-Webfassung; es ist noch kein vollwertiges 3D-Physikspiel mit vergleichbarem Produktionsumfang.

## Elf tatsächlich implementierte Spielarten

| Spiel | Handlung | Förderung | Variationen |
|---|---|---|---|
| Sternenwege | Bahnen drehen, Stern losschicken, alle Sterne und Portal verbinden | räumliche Drehung, Planung, Ursache/Wirkung | erzeugte lösbare Wege auf 4×4 oder 5×5 Feldern; Hilfen drehen ein Teil |
| Funkel-Memory | jeweils zwei Karten aufdecken, Paare behalten | visuelles Gedächtnis, Konzentration | zufällige Kartenanordnung, 3/4/6 Paare je Stufe/Schwierigkeit |
| Schatz-Express | Pakete unterschiedlicher Größe in eine Truhe packen und wieder entnehmen | Ergänzen, Zahlzerlegung, Kombination | wechselndes Ziel und Anfangsmenge; Paketgrößen 1/2/3 bzw. 1/2/5 |
| Schatzsucher | Schätze markieren und Anzahl bestimmen | strukturierte Mengenerfassung, Eins-zu-eins-Zuordnung | neue Mengen statt fester Reihenfolge |
| Geheimcode | wiederholte Formgruppen entschlüsseln und fortsetzen | Regeln erkennen, Abstraktion | AB, AAB, ABC und weitere Muster je Schwierigkeit |
| Silben-Party | Wort sprechen/anhören, klatschen, Silbenzahl wählen | phonologische Bewusstheit | Wörter aus kleinem geprüftem Bestand, zufällige Auswahl |
| Schatz-Duell | zwei Inselmengen vergleichen, Gleichheit erkennen | Mengenbeziehungen | wechselnde Mengen und teilweise gleich große Mengen |
| Aus der Reihe | das nicht zur Kategorie passende Objekt finden | Klassifikation, Begründen | Obst/Tiere/Fahrzeuge und wechselnde Ausreißer |
| Zahlentreppe | Zahlensteine von klein nach groß einsetzen | Zahlordnung | verschiedene Zahlenmengen und Anzahl der Steine |
| Reim-Zauber | Zielwort und Bildwörter vergleichen | Reimwahrnehmung | wechselnde Paare, Bild- und Wortdarstellung, einzelne Hörbuttons |
| Sternenflug | volle von weggeflogenen Schätzen unterscheiden | Wegnehmen und verbleibende Menge | wechselnde Start-/Wegnahmemengen |

Jeder Durchlauf besteht aus fünf Rätseln. Es gibt keine vorgegebene Abfolge „2, dann 3, dann 4“. Ein Sitzungsgenerator mischt Aufgaben und vermeidet im möglichen Rahmen identische komplette Aufgaben innerhalb einer Sitzung. Zufall allein wird nicht als adaptive Lernsteuerung bezeichnet.

### Schwierigkeit

Zwei Lernstufen: Vorschule und Klasse 1. Dazu die frei wählbaren Modi „Entspannt“, „Entdecken“ und „Knifflig“. Die Modi verändern insbesondere Zahlenraum, Muster, Kartenmenge und Wegerätsel. Noch keine personenbezogene automatische Diagnose oder wissenschaftlich validierte Schwierigkeitskalibrierung. Kinder-/Familientests entscheiden über die passende Grundeinstellung.

### Automatischer Ablauf

Eine richtige Lösung sperrt weitere Antworten, zeigt eine kurze positive Rückmeldung und startet nach etwa 1,7 Sekunden die nächste Aufgabe. Wege werden vorher sichtbar abgefahren. Pause, Tabwechsel und Navigation stoppen laufende Übergänge; alte Timer dürfen kein anderes Spiel fortschalten. Nach fünf Aufgaben bleibt eine Abschlussansicht mit freiwilligem Neustart, Inselrückkehr und Pause. Es wird keine endlose automatische Spielkette erzwungen.

## Eigene Figur

Bereits umgesetzt und lokal gespeichert:

- Trikot oder Zauberkleid, unabhängig von der gewählten Welt.
- Sechs Outfitfarben, Nummer 0–99.
- Drei Gesichtsausdrücke, drei Frisuren, vier Hauttöne.
- Vorschau in Garderobe, Profil und Abenteuerwelt.
- Kein Bezahlen für einzelne Körpermerkmale; im Test alle Optionen zugänglich.

Später möglich: weitere Trikotmuster, Schuhe, Haarfarben, Zauberhüte, Begleittiere und ausschließlich durch Spielen verdiente kosmetische Erinnerungsstücke. Keine zufälligen Bezahlpakete. Welt und Figur werden nicht an ein erhobenes Geschlecht gebunden.

## Stimme: ehrlicher Stand und Lösung

Die ursprüngliche Gerätestimme ist je nach Browser/OS unterschiedlich und erfüllt den gewünschten Qualitätsanspruch nicht zuverlässig. Ziel ist eine feste, freundlich-natürliche deutsche Sprecherstimme mit kurzen, redaktionell geprüften Aufnahmen.

HeyGen wurde für diese Anfrage erfolgreich verbunden. In der verfügbaren Befehlsliste dieser Sitzung wurden jedoch keine HeyGen-Generierungs- oder Stimmenauswahlfunktionen bereitgestellt. Daher wurden **noch keine HeyGen-Audios erzeugt oder angehört**. Es ist keine erneute Installation erforderlich. Die konkrete Sprachproduktion bleibt offen, bis die Sprachfunktion in einer Sitzung verfügbar ist.

Implementiert: getrenntes Audio-Modul `src/voice.js` und Text-zu-Datei-Manifest `src/voice-clips.js`. Fertige Aufnahmen werden lokal vom selben Host abgespielt; die Browserstimme ist derzeit lediglich der optionale Fallback. Sie wurde hinsichtlich deutscher Stimmenauswahl und Sprechtempo verbessert, aber nicht als neue realistische Studiostimme ausgegeben.

Die eigentliche Produktionsvorgabe steht in [AUDIO.md](AUDIO.md). ElevenLabs ist eine mögliche spezialisierte API-Alternative mit steuerbarer mehrsprachiger Spracherzeugung; ein separat installierbarer ElevenLabs-Eintrag wurde im verfügbaren Verzeichnis nicht gefunden. [Offizielle ElevenLabs-Dokumentation](https://elevenlabs.io/docs/overview/capabilities/text-to-speech)

Vor Aktivierung: deutsche Aussprache anhören, Zahlen/Silben prüfen, Dateien normalisieren, Nutzungsrechte klären. Sprachlernspiele benötigen besonders sorgfältige Hörprüfung. Bis dahin Vorschulkinder bei Sprachspielen begleiten. Kein Kindername oder Mikrofoninhalt muss zur Produktion generischer Spieltexte an einen Anbieter gesendet werden.

## Technik

Bestehende modulare HTML/JS/SVG-Architektur weiterentwickelt. Kein unnötiger Austausch des Projekts. Taktile SVG-Spielteile, Schatten, Licht, animierte Sternenroute und überarbeitete Inselgrafik. Semantische Tasten bleiben mit Tastatur bedienbar. Auf Smartphones untere Navigation mit Figurenbereich, scrollbare Inhalte und anpassbare Spielflächen. Reduzierte Bewegung und abschaltbare Effekte bleiben erhalten.

Supabase liefert elf veröffentlichte Katalogeinträge. Die erlaubten IDs wurden durch die Migration `expand_adventure_catalog` erweitert; Katalogtexte aktualisiert. RLS und ausschließlich lesende Clientberechtigungen bleiben bestehen. Kinderprofil und Fortschritt werden weiterhin lokal gehalten. Frühere Fortschritte mit den IDs count/sum/pattern/syllable bleiben erhalten.

Die Content-Security-Policy erlaubt dynamische Style-Attribute für Bahndrehungen und UI-Farben, behält aber die Beschränkung ausführbarer Skripte auf eigene Dateien bei. Keine privaten Schlüssel im Browser.

## Abo: 3,99 € pro Monat

Web: PayPal-Subscriptions, mit klar beschriebenem Monatspreis und Produktumfang im Elternbereich. Später iOS: Apple-Auto-Renewable-Subscription über StoreKit/App Store. Apple Pay und Apple-In-App-Kauf sind unterschiedliche Verfahren. Es gibt in dieser Fassung keinen Checkout und keine als erfolgreich simulierte Zahlung.

Für einen echten Verkauf fehlen noch:

1. Betreiber-/Verbraucherinformationen und Datenschutzhinweise zum tatsächlichen Betrieb.
2. Elternkonto, private Kinderprofile und gesicherte Berechtigungstabellen.
3. PayPal-Business-Anbindung, Monatsplan EUR 3,99, Sandbox und geprüfte Webhooks.
4. Serverseitige Prüfung aktiver Aboberechtigung, Rückzahlungen/Kündigung/Zahlungsausfälle und Wiederherstellung.
5. Für Web-Abos ein passender Kündigungsweg; Anforderungen aus § 312k BGB fachkundig prüfen.
6. Für iOS Apple-Entwicklerkonto, StoreKit, Produkteinrichtung, Kaufwiederherstellung und App Review.

Keine Karten- oder Kontodaten werden selbst verarbeitet. Ein Backend zur Prüfung von Anbieterstatus und Zugangsrechten ist dennoch nötig. Neue Spiele, Pflege und Support müssen den laufenden Abopreis mit nachvollziehbarem Nutzen tragen. Anbietergebühren und Steuerbehandlung vor dem Verkaufsstart anhand der tatsächlichen Verträge kalkulieren.

## Nächste Ausbaustufen

| Priorität | Inhalt | Abnahme |
|---|---|---|
| 1 | echte deutsche Lumi-Aufnahmen | zwei Stimmen vergleichen, Aussprache/Dateien prüfen, Manifest befüllen |
| 2 | Familien-Praxistest auf iPhone/Android | Einstieg, Fingerbedienung, Rätselklarheit, Effekte und Schwierigkeit beobachten |
| 3 | erste wirkliche Physikszene | eigene Mechanik mit Rampen, Schaltern und beweglichem Ball; planbare Lösung und Wiederholen |
| 4 | differenzierte Inselkampagne | kleine Missionen führen Mechaniken ein; Mischrätsel kombinieren zwei Kompetenzen |
| 5 | weitere Bereiche | Orientierung/Labyrinth, Bauaufgaben, Größen/Gewichte, Alltag/Natur, freies Gestalten und einfache Befehlsfolgen |
| 6 | Elternkonten und PayPal-Sandbox | Zugriffsisolation, Erfolg/Abbruch/Kündigung und Erstattungen prüfen |

Pädagogische Orientierung bleibt [PIKAS Schulanfang](https://pikas.dzlm.de/pikasfiles/uploads/upload/Material/unterricht_neu/schulanfang/um_schulanfang_karteimathematikamschulanfang.pdf), [Mathematik LehrplanPLUS 1/2](https://www.lehrplanplus.bayern.de/fachlehrplan/grundschule/1/mathematik) und [Deutsch LehrplanPLUS 1/2](https://www.lehrplanplus.bayern.de/fachlehrplan/grundschule/1/deutsch). Die Klassen-1/2-Quelle ist kein verbindlicher Vorschullehrplan. Wirkung, Spaß und Bedienbarkeit sind erst durch echte begleitete Tests zu beurteilen.
