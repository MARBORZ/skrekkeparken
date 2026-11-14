# skrekkeparken

Map game made for an event in Brekkeparken. Teams walk around the park, find points on a Leaflet map, answer questions and collect points.

Tasks and marker positions come from `data/markers.json`, so the route can be changed without touching the code. The game rules are on `rules.html`.

## Run

Serve the folder with any static server, for example:

```bash
npx serve .
```

Geolocation only works over HTTPS or on localhost.
