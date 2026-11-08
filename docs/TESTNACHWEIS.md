# Testnachweis – Abenteuer-Version 0.3

Stand: 8. November 2026. „Implementiert“, „automatisch geprüft“ und „im Browser bedient“ sind unterschiedliche Nachweisstufen.

## Automatische Regelprüfungen

`npm test`: 27 Tests bestanden. Jede der elf Spielarten wurde in beiden Lernstufen mit 25 reproduzierbaren Zufallsfolgen geprüft. Zusätzlich: 90 Wegerätsel über alle Schwierigkeitsmodi, bekannte Lösbarkeit, Gegenprobe durch falsche Drehung, Aufgabenvariation, Fortschritt und Avatar-Normalisierung. Keine Aussage über tatsächlichen Lerngewinn.

`node --check src/app.js`, `src/voice.js`: Syntaxprüfung bestanden. `npm run build`: statischer Build erfolgreich.

## Tatsächlich bediente Browserabläufe

| Ablauf | Beobachtung |
|---|---|
| Sternenwege | Spiel gestartet, ein Wegstück gedreht, erfolgloser Start mit Rückmeldung; Hilfen genutzt, Route erfolgreich abgefahren; danach ohne Weiter-Klick Runde 2 |
| Schatz-Express | bewusst überfüllt, Hinweis erhalten, Paket entfernt, Ziel mit anderen Paketen erreicht; alle fünf Aufgaben bis Abschluss durchgespielt |
| Memory | Karten aufgedeckt, Fehlpaar wieder verdeckt, vier Paare aus tatsächlich gesehenen Karten gelöst; automatischer Start von Runde 2 |
| Zahlentreppe | sichtbare Zahlen in aufsteigender Reihenfolge eingelegt; direkt nach Erfolg pausiert |
| Garderobe | Outfit, Farbe, Frisur und Gesicht geändert; Nummer 7 eingetragen; nach Neuladen weiterhin Nummer und Look sichtbar |
| Speicherfehler | erster Nummernwechsel wurde nicht zuverlässig bei Blur gespeichert; Eingabe-Speicherung ergänzt und Wiederholung erfolgreich |
| Supabase | alle elf veröffentlichten Einträge als anon gelesen; Security Advisor ohne neue Hinweise zur Katalogtabelle |

Bisherige Testfassung 0.2: kompletter Zählspiel-Durchlauf und lokale Sternspeicherung wurden bereits im Browser geprüft. Die alten Save-IDs werden in 0.3 weitergelesen.

## Grenzen

Keine erzeugten/angehörten HeyGen-Dateien: Verbindung bestätigt, Generierungsfunktionen in dieser Sitzung nicht bereitgestellt. Sprachmanifest ist leer. Die Gerätestimme bleibt optionaler Fallback und wurde nicht als realistische neue Stimme freigegeben.

Kein 3D-Physikspiel, keine Game-Engine-Physiksimulation: Sternenwege verwendet ein diskretes Verbindungssystem mit animiertem Abfahren. Keine echten Käufe, kein PayPal-Sandbox-Test, keine Elternkonten/Cloud-Kinderspeicherung. Kein menschlicher Kinder-Praxistest, keine iPhone-/Android-Gerätetests und keine pädagogische Wirksamkeitsstudie.

Die responsive Prüfung erfolgt zusätzlich in echten Browser-Iframe-Viewports mit 390×844 und 320×740. Sie ersetzt keinen Test auf realen Telefonen. Eine abschließende Liveprüfung muss nach dem Deployment auch die Style-Attribute unter der Netlify-CSP berücksichtigen.

Vorhandene Supabase-INFO-Hinweise zu `players` und `unlocked_items` ohne Policies bestehen unverändert; die Anwendung nutzt sie nicht. [Einordnung](https://supabase.com/docs/guides/database/database-linter?lint=0008_rls_enabled_no_policy).

## Ergänzende Abnahme 0.3

- Zahlentreppe blieb während der Pause in Runde 1; erst nach Fortsetzen begann Runde 2 automatisch.
- 390×844 und 320×740 im Browser bedient. In der 320er-Ansicht (305 Pixel Inhaltsbreite wegen Scrollbalken) waren 5×5-Drehfelder 44 Pixel breit. Dokumentbreite und Inhaltsbreite waren identisch: kein horizontaler Überlauf.
- Mobile Garderobe mit Outfitwechsel bedient, Figur und Nummer sichtbar. Die Smartphone-Vorschau ist eine private Prüfansicht, kein Bestandteil des veröffentlichten Builds.
- Die Reim-Bildwörter erhielten einzelne Hörbuttons; mangels neuer produzierter Sprachdateien erfolgt deren optionale Ausgabe aktuell über die Gerätestimme.
