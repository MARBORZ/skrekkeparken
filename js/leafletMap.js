export class LeafletMap {
  
  constructor(mapElementId = "map") {
    this.lat = 59.20862550917354;
    this.lng = 9.613527553562454;

    this.map = L.map(mapElementId).setView([this.lat, this.lng], 18)

    this.markerIcon = L.icon({
      iconUrl: 'img/marker-light.svg',
      iconSize: [30, 30],
      iconAnchor: [15, -5],
    });

    this.markers = [];
    this.markersVisible  = true;

    this.markerOpacity = [
      { opacity: "1" },
      { opacity: "0" },
    ];

    this.markerOpacityReverse = [
      { opacity: "0" },
      { opacity: "1" },
    ];

    this.markerTiming = {
      duration: 200,
      iterations: 1,
      fill: 'forwards'
    };
    
    this.initMap();
    this.setupZoomHandler();
    this.loadMarkers();
  }

  initMap() {
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);
  };

  loadMarkers() {
    fetch("data/markers.json")
      .then((response) => response.json())
      .then((stories) => {
        stories.forEach((place) => {
          const marker = L.marker([place.lat, place.lng], { icon: this.markerIcon }).addTo(this.map);
          marker.storyData = place;
          this.markers.push(marker)
        });
      })
      .catch((err) => console.error("Kunne ikke laste stories.json:", err));
  };
  

  updateMarkersIcon(iconUrl){
    this.markerIcon = L.icon({
      iconUrl:  iconUrl,
      iconSize: [30, 30],
      iconAnchor: [15, -5],      
    });

    this.markers.forEach(marker => {
      marker.setIcon(this.markerIcon)
    });
  }

  setupZoomHandler(){
    const zoomThreshold = 17

    this.map.on('zoomend', () => {
      const currentZoom = this.map.getZoom();

      if(currentZoom < zoomThreshold && this.markersVisible){
        this.markers.forEach(marker => {
          const el = marker._icon;

          if(!el) return;

          el.animate(
            this.markerOpacity, 
            this.markerTiming,
          
          setTimeout(() => {
            this.map.removeLayer(marker);
          }, 200)
          );
        } 
      );

      this.markersVisible = false;
    
    } else if(currentZoom >= zoomThreshold && !this.markersVisible){
          this.markers.forEach(marker => {
            
            marker.addTo(this.map);

            const el = marker._icon;

            if(!el) return;

            el.animate(
              this.markerOpacityReverse, 
              this.markerTiming,
          );

          });
          this.markersVisible = true;
      };
    });
  };
};
