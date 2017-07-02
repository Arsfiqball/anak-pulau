var mymap = L.map('mapid');

var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';

var osm = new L.TileLayer(osmUrl, {
  minZoom: 5,
  maxZoom: 15,
  attribution: osmAttrib
});

mymap.setView([-6.2023237, 106.8240593], 5);
mymap.addLayer(osm);
