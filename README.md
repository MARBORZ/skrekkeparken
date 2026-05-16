# Skrekkeparken

Interactive map game built with Leaflet and JSON-driven events. Players explore Brekkeparken, complete tasks, and earn points.

## 🎨 About

Skrekkeparken (Horror Park) is an interactive map game for an event in Brekkeparken. Players navigate a real map, find markers with tasks, answer questions, and earn "Skrekkepoeng" (horror points). The team with the most points wins.

## ✨ Features

- **Interactive Leaflet Map** — Real map with custom markers
- **JSON-Driven Events** — Tasks loaded from data/markers.json
- **Point-Based Progression System** — Track team points
- **Geolocation** — Find user's position on the map
- **Dark/Light Theme** — Toggle display modes
- **Task Sidebar** — List of completed tasks
- **Responsive Design** — Works on mobile devices

## 🛠️ Tech Stack

- **Vanilla JavaScript** — No frameworks
- **Leaflet** — Interactive map library
- **HTML5** — Semantic markup
- **CSS3** — Custom styling with themes
- **JSON** — Task data storage

## 🚀 Getting Started

Simply open `index.html` in a browser:

```bash
# Using a local server (recommended)
npx serve .

# Or open directly
open index.html
```

## 📁 Structure

```
skrekkeparken/
├── index.html          # Main game page
├── rules.html          # Instructions page
├── css/
│   ├── style.css       # Main styles
│   └── normilize.css   # CSS reset
├── js/
│   ├── index.js        # Main module
│   ├── leafletMap.js   # Map initialization
│   ├── buttonAction.js # Button handlers
│   ├── locator.js      # Task marker logic
│   └── userLocation.js # User geolocation
└── data/
    └── markers.json    # Task and marker data
```

## 🎯 Game Mechanics

1. **Intro Screen** — Welcome and start button
2. **Map** — Leaflet map of Brekkeparken with task markers
3. **Markers** — Click marker to open task
4. **Tasks** — Questions with text input for answers
5. **Points** — Correct answers add team points
6. **Sidebar** — Track completed tasks

## 🎯 Key Features

- **Geolocation** — Button to center map on current location
- **Theme Toggle** — Light/Dark modes
- **Burger Menu** — Mobile navigation
- **Task Popup** — Modal with questions
- **Point System** — Track and display Skrekkepoeng

## 🎯 Learning Goals

- Leaflet map integration
- JSON-driven content
- Vanilla JavaScript DOM manipulation
- Geolocation API
- State management without frameworks
- Event handling and interactions
- Responsive design for mobile

---

**Note:** Experimental project focusing on map interaction and state handling.
