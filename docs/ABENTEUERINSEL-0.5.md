# Abenteuerinsel 0.5 – 8. November 2026

## Tatsächlich umgesetzt
- Neue dreidimensionale Insel (Three.js; SVG-Projektion derselben Geometrie, wenn WebGL fehlt). Drei Hauptorte: Insel, Zuhause, Entdecken. Eigene Figur auf der Insel.
- Drei Spielarten, je sechs handgeprüfte Parameterkonfigurationen: drehbare Kugelbahn mit Sternen, Mengen zuordnen beim Picknick, Brücken aus Teilstücken zusammensetzen.
- Drei Aufgaben je Abenteuer. Automatische Übergänge innerhalb einer Mission, klarer Abschluss danach. Kein Zeitdruck, keine verlorenen Belohnungen, keine Kaufanreize im Kinderbereich.
- Erste Anleitung je Spielart als animiertes Beispiel mit natürlicher HeyGen-Stimme. Wiederholung per „Zeig es mir“. Bewegung reduzieren wird berücksichtigt.
- Tatsächlich sichtbare Kugelbewegung entlang der geprüften Strecke. Die Rätsel benutzen diskrete Verbindungslogik, keine allgemeine Physiksimulation.
- Pausieren, Rücknahme, erneuter Versuch, lokale Speicherung auch mitten in einer Aufgabe.
- Insel wächst durch Blüten; Kristalle nach einem, Wimpel nach zwei Abenteuern. Dauerhafte Auswahl im Zuhause.
- Antippbarer Begleiter mit drei aufgenommenen Sprüchen und Hüpfanimation, Quatsch-Tanz der Figur, drei versteckte Inselsterne, optionales gemeinsames Spielen mit wechselnden Rollen.
- Weltgebundene Ausstattung: Fußball mit Trikot/Roboter, Kappe/Astronaut, Jetpack/Umhang, Roboterbegleiter. Zauberwelt mit Kleid, Krone/Einhorn/Drache, Flügel/Umhang, Einhorn/Drachenbegleiter. Eigene gespeicherte Figur je Welt; Zufallsoutfits beachten dieselben Regeln.
- Vorhandene Profil- und Fortschrittsdaten bleiben erhalten. Neue Daten liegen unter island/avatars im vorhandenen lokalen Profil. Keine neuen Kinderkonten oder Zahlungen.

## Testbelege und Grenzen
37 Node-Tests bestehen: vorhandene Regressionen plus Lösungen aller 18 neuen Aufgaben, Gegenbeispiele, getrennte Outfits und Weltwechsel, kooperativer Modus und Suchsterne. Syntaxprüfungen und Produktionsbuild erfolgreich.
Im Chromium-Browser mit 360×780-iframe: erste Anleitungen, falsche Kugelbahn, richtige Kugelbahn, Pause vor Übergang, automatischer Wechsel, Überfüttern/Korrektur, Brückenteil zu lang/Rücknahme/Lösung, Missionsabschluss und Belohnung tatsächlich durchgespielt. Fußball- und Zauberausstattung im UI geprüft. Grafikfehler im SVG-Fallback und zu hohe mobile Szenen nach Beobachtung korrigiert.
Kein physisches iPhone/Android-Gerät und keine Kinder als Testpersonen verfügbar. Spielspaß, Verständlichkeit ohne Begleitung und pädagogischer Nutzen sind noch nicht durch Kindertests belegt. WebGL-Hardwarepfad ist in der Cloud deaktiviert; tatsächlich beobachtet wurde die SVG-3D-Projektion.
Neue Sprachdateien: HeyGen Nele, Voice-ID 194c5c7896e849139df58b34b05b6a7c, gespeicherte Standardengine (Antwort: orca), Speed 0.95. Ein Master, acht lokale Segmente, keine Stimmklone. Zeitmarken und Originaltext: docs/audio/island-voice-provenance.json. Technisch geprüft; subjektive Hörfreigabe durch einen Menschen steht aus. Dynamische Hinweise verwenden weiterhin optional die Gerätestimme.

## Nächste pädagogische Prüfung
Mit Einwilligung der Eltern 3–5 Kinder einzeln begleiten. Prüfen: selbstständiger Einstieg, Verständnis nach einer Vorführung, versehentliche Berührungen, Erkennen der Fehlerursache, selbstständige Korrektur, gewünschte Pausen. Keine Bewertung des Kindes und keine Telemetrie nötig. Bei wiederholtem Missverständnis zuerst Anleitung/Bedienung ändern, dann Aufgaben erweitern.

## Rückkehr zur Vorgängerversion
Vorgängercommit: 41a3e2a1f16ba9b4091b6c67f07fa541c3acfe2a. Git-Revert beziehungsweise vorherigen Netlify-Deploy wieder veröffentlichen; lokale Browserprofile nicht löschen.
