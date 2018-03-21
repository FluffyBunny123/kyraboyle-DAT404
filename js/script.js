
window.onload = function() {
  currentYear();
};

function currentYear(){
  const date = new Date();
  const autoDate = document.querySelector('#autoDate');
  autoDate.textContent = date.getFullYear();
};

function into(){
  var mapOptions = {
    center : new gogle.maps.latLng(50.376347, -4.139822), mapTypeId : google.maps.MapTypeId.ROADMAP, zoom: 13

  };
  var venueMap;
  venueMap = new google.maps.Map(document.getElementById('map'),mapOptions);
}

function loadScript() {
 var script = document.createElement('script');
 script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAJAXVUp8P1Au_kX19qQ3tE7UOzRO59OtE&callback=initMap';
 document.body.appendChild(script);
}
//window.onload = loadscript;
