let mapDiv = document.querySelector(".mapIn"),
 xLat = mapDiv.getAttribute("data-x"),
 yLat = mapDiv.getAttribute("data-y");
 console.log(xLat);
 console.log(yLat);
var map = L.map("map", {
 center: [yLat, xLat], zoom: 15 
 }
),
 tiles = new L.tileLayer(
 "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
 {
 // attribution:
 // '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
 minZoom: "10",
 }
 ).addTo(map);