$(document).ready(function(){

});

var piparray;

function initMap() {
  var uluru = {lat: -25.363, lng: 131.044}
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: {lat: 25.77317554565933, lng: -171.7407480830226}
  });
}

function getData () {
  $.get("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson", function(){

  });
}
