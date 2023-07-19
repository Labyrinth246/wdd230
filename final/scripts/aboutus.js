document.getElementById("lastEdit").innerHTML = new Date(document.lastModified).toLocaleString();

document.getElementById("date").innerHTML = new Date().getFullYear();

function initMap() {
    var mapOptions = {
      center: { lat: 33.160466, lng: -117.349409 },


      zoom: 15,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
  }
  window.initMap = initMap;
  