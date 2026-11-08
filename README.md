# kickerkids-app · Abenteuer-Version 0.3

Smartphone-taugliche Lernspiel-Webanwendung für Vorschule und Klasse 1.

- Elf Spielarten: drehbare Sternenwege, Memory, Pakete kombinieren, Schatzsuche, Muster, Silben, Mengenvergleich, Kategorien, Zahlordnung, Reime und Wegnehmen.
- Variable Aufgaben; drei Schwierigkeitsmodi neben den beiden Lernstufen.
- Automatisch weiter nach richtigen Lösungen; Pause und Tabwechsel stoppen Timer.
- Eigene Figur: Trikot/Kleid, Farben, Nummer, Gesicht, Frisur und Hautton; lokal gespeichert.
- Supabase-Katalog, statischer Netlify-Build, keine Browser-Abhängigkeiten.
- Geplantes Abo **3,99 €/Monat**, Zahlungen im Test deaktiviert.
- Audio-Modul für natürliche vorproduzierte Sprachaufnahmen vorbereitet; HeyGen verbunden, aber noch keine erzeugten Clips vorhanden. Optionale Gerätestimme ist nur der Fallback.

## Lokal starten

Node.js >= 20, keine zusätzlichen npm-Pakete nötig:

```sh
npm test
npm run build
npm run dev
```

http://localhost:3000 öffnen. Nach Änderungen erneut bauen. Netlify baut über `npm run build` und veröffentlicht ausschließlich `dist/`.

## Dokumentation

- [Aktuelles Konzept, Referenzvergleich und Ausbau](docs/KONZEPT.md)
- [Sprachproduktion und offene Integration](docs/AUDIO.md)
- [Tests und Grenzen](docs/TESTNACHWEIS.md)
- [Assetregister](docs/ASSETS.md)
- [Früheres Konzept 0.2 – Archiv](docs/ARCHIV-KONZEPT-0.2.md)

Live-Test: https://kickerkids.netlify.app/

Kein fertiger vollständiger Grundschullehrplan, kein Lernstandsdiagnostikum, keine aktive Zahlung und noch keine echte 3D-Physik-Engine. Der Originalprototyp ist separat archiviert und nicht Teil des Web-Builds.
