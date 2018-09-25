const mapboxgl = require("mapbox-gl");
<<<<<<< HEAD
=======

>>>>>>> 7ee0aecdbd7b6fab559e30652441235ca1a5ae35

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = (type, coords) => {
    // Your Code Here
    const markerDomEl = document.createElement("div");
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = `url(${iconURLs[type]})`;

    return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
};

module.exports = buildMarker;