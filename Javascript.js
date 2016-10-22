
var piparray = [];
var dataarray = [];
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: {lat: 19.148917, lng: 4.265526}
  });
  getData();
  map.data.setStyle(function(feature) {
  var magnitude = feature.getProperty('mag');
  var timeAgo = feature.getProperty('time');
  return {
    icon: getCircle(magnitude, timeAgo)
  };
});
}

function getCircle(magnitude, timeAgo) {
  return {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: 'red',
    fillOpacity: (5E11 / timeAgo),
    scale: Math.pow(2, magnitude)/2,
    strokeColor: 'white',
    strokeWeight: .5
  };
}

function getData () {
  $.get("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson",
  function(data){
      //$.each(data.features, function (index, value){
        //dataarray.push(value);
      //})
        map.data.addGeoJson(data);

      //console.log(dataarray)
  });
};
