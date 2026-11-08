# Lumi – Sprachproduktion

## Bestätigter Stand

HeyGen ist verbunden. In dieser Sitzung ist jedoch keine HeyGen-Stimmen-/Generierungsfunktion aufrufbar. Keine neue Audiodatei wurde erzeugt. Das ist eine Grenze der aktuell bereitgestellten Funktionen, keine fehlende Verbindung. `voice-clips.js` ist bewusst leer.

## Stimmbrief

Deutsch (Deutschland), warme freundliche erwachsene Stimme, natürlich, neugierig, verständlich. Normales ruhiges Sprechtempo; keine übertriebene Baby-Stimme, kein Marktschreier-Ton, kein dauerndes Jubeln. Kurze Sätze. Zwei unterschiedliche Stimmen mit demselben Text produzieren und anhören, bevor alle Inhalte vertont werden. Keine Stimme einer realen Person ohne entsprechende Erlaubnis nachahmen.

## Erste A/B-Probe

> Hallo! Ich bin Lumi. Schön, dass du da bist. Schau dir die Wege genau an. Mit einem Fingertipp kannst du sie drehen. Verbinde den Start mit dem Portal und sammle die Sterne. Das klappt noch nicht? Dann probieren wir es gemeinsam. Stark gelöst! Auf zum nächsten Abenteuer.

## Erste Clips

| Text | Vorgesehene Datei |
|---|---|
| Drehe den Weg. Rette die Sterne! | assets/audio/path-intro.mp3 |
| Finde die versteckten Paare. | assets/audio/memory-intro.mp3 |
| Packe die fehlenden Schätze ein. | assets/audio/cargo-intro.mp3 |
| Wie viele Schätze verstecken sich hier? | assets/audio/count-intro.mp3 |
| Knacke den geheimen Mustercode. | assets/audio/pattern-intro.mp3 |
| Wo liegen mehr Schätze? | assets/audio/compare-intro.mp3 |
| Wer passt nicht zu den anderen? | assets/audio/odd-intro.mp3 |
| Baue die Zahlentreppe. | assets/audio/order-intro.mp3 |
| Stark gelöst! | assets/audio/success.mp3 |
| Mission geschafft! | assets/audio/complete.mp3 |

Weitere Dateien: die neun Silbenwörter, die fünf Reim-Zielwörter und fünf Reim-Antwortwörter; generische Hinweise und Zahlen. Für dynamische Zahlaufgaben komplette natürliche Satzaufnahmen oder redaktionell geprüfte Varianten bevorzugen. Silbenklatschen nicht aus unzuverlässiger automatischer Silbentrennung erzeugen.

## Integration

Die Liste sind geplante Dateinamen, keine vorhandenen Audios. Nach tatsächlicher Produktion und Anhörprüfung Dateien übernehmen und in `src/voice-clips.js` den exakten gesprochenen Text zuordnen:

```js
export const VOICE_CLIPS = {
  'Stark gelöst!': 'assets/audio/success.mp3'
};
```

`playVoice` bevorzugt die zugeordnete eigene Datei, andernfalls optional die Gerätestimme. Die Generierung generischer Texte erfolgt vorab; kein dauerhaft offener kostenpflichtiger TTS-Endpunkt aus dem Kinderbrowser. Keys bleiben beim Anbieter bzw. im Server-Secret-Store. Alle Clips in Assetregister samt Anbieter, Stimme, Modell/Datum und Nutzungsrechten erfassen.

## Hörprüfung

Keine abgeschnittenen Satzenden, korrekte deutsche Zahlwörter, kein Musikbett über Lernlauten, kurze Ladezeit, konsistente Lautheit. Keine Aufnahme wird ohne Anhören als pädagogisch passende Laut-/Silbenvorlage freigegeben.
