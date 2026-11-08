# Abnahme – Spielwelt-Version 0.4

8. November 2026. Bestehende elf Spielregeln erhalten, neue Oberfläche, 3D-Kabine und gesprochene Gruppeneinführungen ergänzt.

## Durchgeführte Prüfungen

- 29 automatisierte Tests bestanden: alle Spiel-/Stufen-Kombinationen mit reproduzierbaren Aufgaben, bekannte Lösbarkeit von Wegerätseln, Fortschritt, sichere Avatarparameter, neue Fantasieoptionen und vollständige Gruppenzuordnung der Einführungen.
- Build erfolgreich; Three.js 0.187.0 exakt fixiert, Lockfile vorhanden, Bibliotheksmodule und Lizenz werden lokal in dist übernommen.
- Fußball- und Zauberpfad in 360×780-Iframe-Ansichten angesehen und bedient. Große Starttaste, vier Stationen, vier Navigationsziele; volle Ansicht ohne horizontales Scrollen.
- Kabine mit eigenem räumlichem Modell geladen. Einhornhorn, Flügel und Drachenbegleiter ausgewählt und dargestellt. Es wurden 2881 projizierte SVG-Flächen beobachtet; Drehung verändert die projizierte Geometrie.
- WebGL ist im Testbrowser deaktiviert. Der erste Versuch schlug deshalb erwartbar fehl; anschließend eine 3D-SVG-Ausgabe desselben Modells implementiert und geprüft. Der WebGL-Zweig ist noch nicht auf einem echten Gerät verifiziert.
- Erste Wege-Einführung: Audioplayer startet, 14,38 Sekunden Dauer, paused=false und kein Medienfehler. Anschließend „Losspielen“ und erneut gestartet: keine automatische Einführung mehr.
- Zahlen-Gruppe: Schatzsucher einmal erklärt und gestartet, danach Schatz-Express geöffnet: gemeinsame Einführung wird übersprungen. Freiwilliges erneutes Anhören über „Anleitung“ geöffnet, Audiowiedergabe läuft.
- Der Sprechertext wurde von HeyGen erzeugt, fünf MP3-Dateien technisch validiert und als eigene statische Dateien eingebunden. Keine subjektive/pädagogische Hörfreigabe behauptet.
- Bisherige Spielabläufe aus Version 0.3: Wegelösung mit automatischer Folgerunde, Memory-Paare, kompletter Schatz-Express-Durchlauf, Pause/Fortsetzen und lokale Speicherung bereits im Browser geprüft; Spielregeln unverändert weitergetestet.

## Grenzen

Noch keine Tests auf physischen iPhones/Android-Geräten, kein Kinder-Praxistest, keine Wirksamkeitsstudie. Die 3D-Kabine ist ein eigener bausteinbasierter Figureneditor, kein uneingeschränktes Text-zu-3D-System. Die Spielweltbilder sind vorgerenderte Illustrationen; Spielknöpfe und Pfadstationen sind echte Bedienelemente. Noch keine echte 3D-Physik der Lernspiele. Liga, frei bebaubares Camp, Geschichten und Kartentausch sind Ideen für weitere Schritte und nicht Teil der heutigen Abnahme.

Abopreis weiterhin geplant 3,99 €/Monat; Entwicklungstest kostenlos, kein aktiver Checkout. Supabase-Katalog unverändert, kein neues Projekt und keine neue kostenpflichtige Datenbankinstanz.
