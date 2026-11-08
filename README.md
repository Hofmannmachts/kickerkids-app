# kickerkids-app

Lernspiel-Webprototyp für Vorschule und Klasse 1. Zwei frei wählbare Welten, vier Spieltypen, Smartphone-Navigation, lokale Profile, vorlesbare Aufgaben und abschaltbare Stern-/Blitzeffekte.

## Starten

Node.js >= 20, keine npm-Abhängigkeiten:

```sh
npm test
npm run build
npm run dev
```

Dann http://localhost:3000 öffnen. Nach Änderungen erneut bauen. Netlify verwendet `npm run build` und veröffentlicht ausschließlich `dist/`. Keine Installation zusätzlicher Pakete nötig.

## Dokumentation

- [Produkt, Recherche, Spiele, Smartphone, Zahlungen und Bauplan](docs/KONZEPT.md)
- [Testnachweise und bekannte Grenzen](docs/TESTNACHWEIS.md)
- [Assets und Herkunft](docs/ASSETS.md)
- [Supabase-Schema](docs/catalog-schema.sql)
- Der bisherige Prototyp ist in `docs/prototype-original.html` gesichert und wird nicht veröffentlicht.

Supabase liefert einen veröffentlichten, nur lesbaren Lernkatalog. Spitzname und Fortschritt bleiben im Browser; kein Login und keine Synchronisierung. Die öffentlichen Schlüssel in `src/config.js` sind keine Server-Secrets. RLS und SQL-Grants begrenzen Zugriffe.

**Kein aktiver Verkauf:** Keine Apple-Pay-Simulation, kein Zahlungsversprechen und keine echte PayPal-/App-Store-Zahlung. Zahlungsintegration und Elternkonten sind getrennte nächste Ausbaustufen. Der Test ist kein vollständiges Unterrichtsprogramm oder diagnostischer Test.

Bestehendes Netlify-Projekt: https://kickerkids.netlify.app
