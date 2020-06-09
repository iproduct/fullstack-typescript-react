function init() {
    const coordsElem = document.getElementById("coords");
    if (!navigator.geolocation) {
        coordsElem.innerHTML = "Geolocation is not supported by this browser.";
    } else {
        navigator.geolocation.getCurrentPosition(showPosition);
    }

    function showPosition(position) {
        console.log(position);
        coordsElem.innerHTML += "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
        const map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([position.coords.longitude, position.coords.latitude]),
                zoom: 17
            })
        }) 
    }
}



