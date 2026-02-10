import { LeafletMap } from './leafletMap.js';
import { UserLocation } from './userLocation.js';
import { Locator } from './locator.js';
import { IntroButton, LocButton, TaskButton, BrekkeparkenButton, MenuButton, MapLightMode } from './buttonAction.js';

// Map
const leafletMap = new LeafletMap("map");
new MapLightMode(leafletMap);

// User Location 
new UserLocation();

const locator = new Locator(leafletMap);

// Start Buttons
new IntroButton();
new MenuButton();

// Down Help Buttons
new LocButton(leafletMap.map, locator);
new BrekkeparkenButton(leafletMap)
new TaskButton();



