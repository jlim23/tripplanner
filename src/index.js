const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = "pk.eyJ1IjoiYW5uYWthcGxhbiIsImEiOiJjam1pNWdpbjIwMWd2M3FxbGF3cmwzOWJjIn0.WYqFHM1eukNSnB5AkE7WZQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map); // [-87.641, 41.895] for Chicago

const activityMarker = buildMarker("activities", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
activityMarker.addTo(map);
const hotelMarker = buildMarker('hotels', [-73.9850,40.7463])
hotelMarker.addTo(map);
const restaurantMarker = buildMarker('restaurants', [-73.9983, 40.7144])
restaurantMarker.addTo(map);