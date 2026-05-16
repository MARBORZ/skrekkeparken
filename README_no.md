# Skrekkeparken

Et interaktivt kart-spill bygget med Leaflet og JSON-drevne hendelser. Spillere utforsker Brekkeparken, fullfører oppdrag og tjener poeng.

## 🎨 Om

Skrekkeparken er et interaktivt kart-spill for et arrangement i Brekkeparken. Spillere navigerer et ekte kart, finner markører med oppdrag, svarer på spørsmål og tjener "Skrekkepoeng". Laget med flest poeng vinner.

## ✨ Funksjoner

- **Interaktivt Leaflet-kart** — Ekte kart med tilpassede markører
- **JSON-drevne Hendelser** — Oppdrag lastet fra data/markers.json
- **Poengbasert Progresjonssystem** — Sporing av lagpoeng
- **Geolokasjon** — Finn brukerens posisjon på kartet
- **Mørk/Lys Tema** — Veksle mellom visningsmodus
- **Oppgave Sidebar** — Liste over fullførte oppdrag
- **Responsivt Design** — Fungerer på mobile enheter

## 🛠️ Teknologi

- **Vanilla JavaScript** — Ingen rammeverk
- **Leaflet** — Interaktivt kartbibliotek
- **HTML5** — Semantisk markup
- **CSS3** — Tilpasset styling med temaer
- **JSON** — Oppgavedata-lagring

## 🚀 Kom i Gang

Åpne ganske enkelt `index.html` i en nettleser:

```bash
# Bruk en lokal server (anbefalt)
npx serve .

# Eller åpne direkte
open index.html
```

## 📁 Struktur

```
skrekkeparken/
├── index.html          # Hovedspillside
├── rules.html          # Instruksjonsside
├── css/
│   ├── style.css       # Hovedstiler
│   └── normilize.css   # CSS reset
├── js/
│   ├── index.js        # Hovedmodul
│   ├── leafletMap.js   # Kartinitialisering
│   ├── buttonAction.js # Knappehåndterere
│   ├── locator.js      # Oppgavemarkør-logikk
│   └── userLocation.js # Brukergeolokasjon
└── data/
    └── markers.json    # Oppgave- og markørdata
```

## 🎯 Spillmekanikk

1. **Intro-skjerm** — Velkomst og startknapp
2. **Kart** — Leaflet-kart over Brekkeparken med oppgavemarkører
3. **Markører** — Klikk på markør åpner oppgave
4. **Oppgaver** — Spørsmål med tekstinntasting for svar
5. **Poeng** — Riktige svar legger til lagpoeng
6. **Sidebar** — Spor fullførte oppgaver

## 🎯 Nøkkelfunksjoner

- **Geolokasjon** — Knapp for å sentrere kart på nåværende posisjon
- **Temaveksling** — Light/Dark-modus
- **Burgermeny** — Mobil navigasjon
- **Oppgave Popup** — Modal med spørsmål
- **Poengsystem** — Spor og vis Skrekkepoeng

## 🎯 Læringsmål

- Leaflet-kartintegrasjon
- JSON-drevet innhold
- Vanilla JavaScript DOM-manipulering
- Geolocation API
- Tilstandshåndtering uten rammeverk
- Hendelseshåndtering og interaksjoner
- Responsivt design for mobil

---

**Merk:** Eksperimentelt prosjekt med fokus på kartinteraksjon og tilstandshåndtering.
