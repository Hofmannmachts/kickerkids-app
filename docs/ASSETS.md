# Assetregister

| Datei | Herkunft | Verwendung / Rechtehinweis |
|---|---|---|
| assets/mark.svg | eigenständig im Projekt als SVG erstellt | Sternsymbol, keine Drittanbieter-Vorlage |
| assets/owl.svg | eigenständig im Projekt als SVG erstellt | Begleiterin Lumi |
| assets/football.svg | eigenständig im Projekt als SVG erstellt | Fußballwelt ohne Vereinsmarken |
| assets/castle.svg | eigenständig im Projekt als SVG erstellt | eigene Prinzessinnen-/Schlossdarstellung |
| System-Emoji | Darstellung durch Gerät/Browser | keine kopierten Emoji-Bilddateien; Darstellung variiert |
| Systemschrift | auf dem Gerät vorhandene Fonts | kein externer Fontdownload |
| Vorlesen | Browser SpeechSynthesis | keine mitgelieferten lizenzierten Sprachaufnahmen; Sprachdienst je Gerät |

Keine externen Filmfiguren, Clublogos, Soundtracks oder erworbenen Fremdassets eingebunden. Die eigenständige Erstellung ist keine Garantie für ausschließliche Schutzrechte; vor Markenanmeldung oder breiter Vermarktung Namen und Zeichen prüfen.

## Abenteuer-Version 0.3

- `assets/adventure-island.svg`: eigene SVG-Illustration mit schwebender Insel, Goldbahnen, Sternenportal und Schloss. Keine externen Vorlagen eingebunden.
- `src/avatar.js`: eigene parametrisierte SVG-Figuren mit ausgewählten Farben, Nummern, Gesichtern, Haaren und Hauttönen.
- Dynamische Bahnen, Spielteile, Kartenrücken, Truhen- und Treppenszenen: eigenes HTML/CSS/SVG; einige Objekte verwenden System-Emoji.
- `src/voice-clips.js` enthält noch keine produzierten Clips. HeyGen-Verbindung ist kein Herkunftsnachweis für nicht erzeugte Assets.
- Cut-the-Rope- und andere Referenzbilder wurden nur recherchiert/angesehen und nicht in das Projekt übernommen.

## Spielwelt-Version 0.4

- `assets/art/worlds.webp`: mit dem integrierten Bildgenerator anhand der vom Nutzer bereitgestellten Gestaltungsvorlage neu erzeugte Fußball-/Zauberwelt. Original in generated_images/exec-0315e936-b37f-4381-8f8f-ea5cf93da6bf.png, WebP-Export mit unveränderten Abmessungen zur Auslieferung. Keine Veröffentlichung der Nutzervorlage.
- Erzeugungsvorgabe: hochwertige, abgerundete 3D-Spielwelt-Illustration als zwei gleich breite Panels; links Fußballtal mit Stadien und goldenem Pfad, rechts entsprechendes Prinzessinnen-/Kristalltal mit Schlössern; klare Flächen für echte Bedienelemente; keine Beschriftungen, Telefone oder UI im Bild.
- `src/avatar3d.js`: eigene parametrische 3D-Geometrie, keine heruntergeladenen Figurenmodelle.
- Three.js 0.187.0 (MIT), npm-Version exakt festgelegt und Lockfile enthalten. Beim Build werden Core, WebGL-Modul, SVGRenderer, Projector und LICENSE lokal in den Web-Build übernommen. Nur die relativen Modulimporte der beiden Addons werden angepasst.
- `assets/audio/intro-*.mp3`: neue generische HeyGen-Aufnahme, Nele, Engine orca; fünf Auszüge aus einer Produktion. Details und offene Hörprüfung in AUDIO.md.
