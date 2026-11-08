# Testnachweis – 8. November 2026

## Tatsächlich durchgeführt

| Prüfung | Ergebnis | Grenze |
|---|---|---|
| `npm test` | 10/10 Tests bestanden: alle Spiel-/Stufen-Kombinationen, eindeutige Antworten, Summenbereiche, Silbenzahl, Musterregeln, unveränderlicher Fortschrittsübergang | keine pädagogische Wirksamkeitsstudie |
| `node --check src/app.js` | Syntaxprüfung bestanden | keine vollständige DOM-/Browserprüfung |
| `npm run build` | statischer Build nach dist erfolgreich | Build allein belegt keine Spielbarkeit |
| Browser: Erststart | Spitzname eingetragen, Welt-/Stufenwahl gespeichert, Startseite sichtbar | Desktop-Chromium |
| Browser: Zählen | fünf Vorschulrunden bis Abschluss durchgespielt; absichtlich falsche Antwort, Zählmarkierung und Wiederholung bedient | Stichprobe, keine vollständige Geräteabdeckung |
| Browser: Speicherung | nach Neuladen bleibt ein Lernstern und ein entdecktes Spiel sichtbar | lokaler Browser, keine Cloud-Synchronisierung |
| Browser: Addition | erste Aufgabe richtig beantwortet; nach Erfolg pausiert und fortgesetzt, Weiter-Taste erhalten | übrige Antworten durch Regeltests abgedeckt |
| Browser: Muster | erste Aufgabe mit Raute korrekt beantwortet | keine Aussage zur Verständlichkeit für Kinder |
| Browser: Sprechsilben | „Ball“ mit einer Silbe korrekt beantwortet | Audioausgabe nicht akustisch beurteilt |
| Smartphone-Layouts | reale iframe-Viewports 390×844 und 320×740 in Chromium, Start und Spiel bedient, Ansicht geprüft | kein physisches Smartphone, kein iOS-Safari-Test |
| Welt und Stufe | im schmalen Viewport Zauberwelt und Klasse 1 gewählt; Zählspiel beginnt mit sechs Sternen | Themenumfang im MVP nur Grafik und Zählobjekte |
| Elternbereich | Rechengate beantwortet, Elterninhalt geöffnet, Effekt-Checkbox deaktiviert | Kindersperre ist kein Einwilligungsnachweis |
| Supabase | vier veröffentlichte Zeilen als Rolle anon gelesen; SELECT erlaubt, INSERT/UPDATE/DELETE nicht erlaubt | Inhaltsdaten, keine Kinderprofile |
| App-/Cloud-Verbindung | Elternbereich zeigt „Supabase verbunden · Lernkatalog geladen“ | Offlinefallback nicht gezielt durch Netzabschaltung getestet |
| Security Advisor | keine Hinweise zur neuen learning_catalog-Tabelle; zwei vorhandene INFO-Hinweise bei alten Tabellen ohne RLS-Policies | bestehende Tabellen unberührt |

Bei der Browser-Konsole wurden Meldungen einer Browser-Erweiterung (`chrome-extension://…`) beobachtet; sie stammen nicht aus dem Anwendungscode. Kein umfassendes Monitoring oder unabhängiger Penetrationstest.

## Beabsichtigt noch offen

Echte Familien-Praxistests; iPhone/Android-Safari/Chrome mit realem Touch; Querformat; Screenreader; vollständiges Kontrast-Audit; deutsche Stimmen und Sprachdienst-Datenschutz je Gerät; Gerät mit reduzierter Bewegung; Zahlungs-Sandbox und Rückerstattungen; Eltern-Login und RLS für Kinderdaten; vollständiger Offlinebetrieb. Alle Kaufabläufe sind aktuell nur konzipiert, nicht aktiviert.

Die Effekte sind implementiert und über die Eltern-Checkbox steuerbar. Keine Behauptung einer automatisierten Messung von Blitzfrequenzen oder einer medizinischen Unbedenklichkeitsprüfung.

## Vorhandene Supabase-Hinweise

`players` und `unlocked_items` besitzen RLS, aber keine Policies. Die Tabellen sind dadurch für gewöhnliche Clientabfragen geschlossen und werden von dieser Fassung nicht benutzt. Dokumentation: https://supabase.com/docs/guides/database/database-linter?lint=0008_rls_enabled_no_policy

## Veröffentlichung

Der abschließende Deploymentnachweis wird nach dem GitHub-Push über den Netlify-Status und die Zuordnung zum Commit geprüft. Ausschließlich dist wird veröffentlicht; Originalprototyp und interne Dokumentation liegen außerhalb des Web-Builds.
