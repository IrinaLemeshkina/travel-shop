let map = L.map('map').setView([59.968331, 30.317547], 17);
let leaflet = L.icon({
  iconUrl: './img/marker-icon.png',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});
let marker = L.marker([59.968331, 30.317547], { icon: leaflet }).addTo(map);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png?{foo}', { foo: 'bar' }).addTo(map);
