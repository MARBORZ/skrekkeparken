import { UserLocation } from "./userLocation.js";

export class Locator {
    constructor(leafletMap) {
        this.leafletMap = leafletMap
        this.userMarker = null;
        this.userLoc = new UserLocation(); 
        this.nearMarker = null;
        this.score = 0;

        this.getUserLocation();
        this.startDistanceCheck();
    }

    getUserLocation() {
        navigator.geolocation.watchPosition(
            (position) => this.updateLocation(position),
            (error) => console.error(`Error ${error.message}`),
            { enableHighAccuracy: true, maximumAge: 5000, timeout: 3000 }
        );
    }

    updateLocation(position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        this.userLoc.updateFromGeolocation(lat, lng);

        const locationIcon = L.icon({
            iconUrl: 'img/location.svg',
            iconSize: [20, 20],
            iconAnchor: [10, 0]
        });

        if (this.userMarker) {
            this.leafletMap.map.removeLayer(this.userMarker);
        }

        this.userMarker = L.marker([lat, lng], { icon: locationIcon }).addTo(this.leafletMap.map);
    }

    startDistanceCheck(){
        setInterval(() => {
            if (!this.userLoc.lat || !this.userLoc.lng) return;

            this.leafletMap.markers.forEach(marker => {
                const markerLatLng = marker.getLatLng();
                const distance = this.userLoc.distanceTo(markerLatLng.lat, markerLatLng.lng);


                const el = marker._icon;
                if(!el) return;

                if(distance <= 10){
                    el.classList.add('pulse');

                    this.nearMarker = marker;
                    el.onclick = () => this.showTask(marker);
                }
                else{
                    el.classList.remove('pulse');
                };
            });

        }, 3000);
    }

    showTask(marker){
        const popup = document.getElementById('task-popup');
        const question = document.getElementById('task-question');
        const description = document.getElementById('task-description')
        const submitBtn = document.getElementById('task-submit');

        const story = marker.storyData;
        
``
        question.textContent = story.question || '';
        description.textContent = story.description || ''
        popup.style.display = 'block';

        submitBtn.onclick = () => {
            const input = document.getElementById("task-answer").value.trim().toLowerCase();
            const correct = story.answer?.toLowerCase() == input;

            this.saveTaskResult(story, correct);
            popup.style.display = "none";
            
            this.leafletMap.map.removeLayer(marker);
            this.leafletMap.markers = this.leafletMap.markers.filter(m => m !== marker);

            if(this.nearMarker === marker) this.nearMarker = null;
        };
    }

    saveTaskResult(story, correct){
        const taskList = document.getElementById('task-list');
        const scoreText = document.getElementById('score');
        const scoreTextSideBar = document.getElementById('sidebar-score')

        const li = document.createElement('li');
        li.textContent = `${story.title}`;
        li.className = correct ? "correct" : "wrong";
        li.innerHTML += correct ? "✅ (+10)" : `❌ (-10) <br><br> riktig svar: (${story.answer})`;
        taskList.appendChild(li);

        if (correct) this.score += 10;
        if(!correct) this.score -= 10
        scoreText.textContent = this.score;
        scoreTextSideBar.textContent = this.score;
    }
}

