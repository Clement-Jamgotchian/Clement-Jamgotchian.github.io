// Initialize and add the map
function initMap() {
    // The location of Uluru
    const Millery = { lat: 45.636, lng: 4.781 };
    // The map, centered at Millery
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 9,
        center: Millery,
        gestureHandling: "cooperative",
      });
    // The marker, positioned at Millery
    const marker = new google.maps.Marker({
      position: Millery,
      map: map,
    });
  }
  
  window.initMap = initMap;