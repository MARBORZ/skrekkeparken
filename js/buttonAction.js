export class IntroButton{
    constructor(buttonElementId = "button", introQuerySelector = ".intro"){
        this.introQuerySelector = document.querySelector(introQuerySelector);
        this.buttonElementId = document.getElementById(buttonElementId);

        this.Action();
    };
    
    Action(){

        this.animated = false;

        this.buttonElementId.addEventListener("click", () => {

            if (this.animated) return;
            this.animated = true;

            const introOpacity = [
                {opacity: '1'},
                {opacity: '0'},
            ];

            const introTiming = {
                duration: 500,
                iterations: 1,
                fill: 'forwards'
            };

            const animation = this.introQuerySelector.animate(introOpacity, introTiming);
            animation.onfinish = () => {
                this.introQuerySelector.style.display = "none";
            };
        });
    };
};


export class LocButton{

    constructor(map, locator){
        this.map = map
        this.button = document.getElementById('geobutton')
        this.locator = locator

        this.LocAction();
    };

    LocAction(){

        if(!this.button){
            console.log('No button');
            return;
        };

        this.button.addEventListener(
            'click', () =>{
                const {lat, lng} = this.locator.userLoc;

                if(lat === undefined || lng === undefined || lat === null || lng === null) return;

                this.map.setView([lat, lng], 18, {animate: true})
            }
        )
    };

}

export class BrekkeparkenButton{
    constructor(map){
        this.map = map
        const button = document.getElementById('brekkeparken')

        button.addEventListener("click", () => {
            map.map.setView([map.lat, map.lng], 18)
        });
    };
}


export class TaskButton{
    constructor(){
        const button = document.getElementById('taskbutton');
        const sidebar = document.getElementById('sidebar');

        button.addEventListener('click', (e) => {
            e.stopPropagation()
            sidebar.classList.toggle('sidebar-showed')   
        });

        document.addEventListener('click', (e) => {
            if(!sidebar.contains(e.target) && !button.contains(e.target)){
                sidebar.classList.remove('sidebar-showed')
            }
        })
    };
}

export class MenuButton{
    constructor(){
        this.menu = document.getElementById('menu');
        this.nav = document.getElementById('nav');


        this.MenuActive();
    };


    MenuActive(){
        this.menu.addEventListener('DOMContentLoaded', () => {
            this.menu.classList.remove('active');
        });
        this.nav.addEventListener('DOMContentLoaded', () => {
            this.menu.classList.remove('showed');
            this.menu.classList.remove('header__nav');
        });

        this.menu.addEventListener('click', (e) =>{
            e.stopPropagation()
            this.menu.classList.toggle('active');
            this.nav.classList.toggle('showed')
        });
    };
}

export class MapLightMode{
    constructor(map){
        this.map = map
        this.MapElements = document.querySelectorAll('.leaflet-layer, .leaflet-control-zoom-in, .leaflet-control-zoom-out, .leaflet-control-attribution')
        this.lightButton = document.getElementById('toggle-light');
        this.darkButton = document.getElementById('toggle-dark');


        this.LightMode();
        this.DarkMode();
    };

    
    LightMode(){
        this.lightButton.addEventListener('click', () => {
            this.map.updateMarkersIcon("img/marker-dark.svg")

            this.MapElements.forEach(element => {
                element.style.filter = 'none';
            });

            this.lightButton.style.display = 'none';
            this.darkButton.style.display = 'block';
            console.log("Light Mode Enabled");
        });
    };

    DarkMode(){
        this.darkButton.addEventListener('click', () => {
            this.map.updateMarkersIcon("img/marker-light.svg")


            this.MapElements.forEach(element => {
                element.style.filter = 'invert(90%) hue-rotate(180deg) brightness(80%) contrast(85%)';
            });

            this.darkButton.style.display = 'none';
            this.lightButton.style.display = 'block';
            console.log("Dark Mode Enabled");
        });
    };
};