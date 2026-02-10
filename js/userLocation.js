export class UserLocation{
    constructor(lat, lng){
        this.lat = lat;
        this.lng = lng;
        
        this.updateFromGeolocation()
    };

    updateFromGeolocation(lat, lng) {
        this.lat = lat;
        this.lng = lng;
        console.log(lat, lng);
    };

    distanceTo(targetLat, targetLng){
        const userLoc = L.latLng(this.lat, this.lng);
        const targetLoc = L.latLng(targetLat, targetLng);
        const distance = userLoc.distanceTo(targetLoc);

        console.log("Avstanden til målet er: " + distance + " meter.");
        return distance;
    }

    isNear(targetLat, targetLng, radius = 50){
        return this.distanceTo(targetLat, targetLng) <= radius;
    }
};