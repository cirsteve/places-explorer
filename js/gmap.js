var gmark_sets = {};
var current_locations = {};
 
//converts latlong object to address with google maps api
function convertLtLnToAddress(latlong){
  var gc = new google.maps.Geocoder();
  gc.geocode({'latLng': latlong}, function(result,status){
      if (status == google.maps.GeocoderStatus.OK) {
        return result[0]["formatted_address"];
        }
      else {
        alert('Errooooorrrrr' + status);
       }
  });
}

//takes position argument and creates a google maps element 
function getCurrentMap(position){
	  var latlng = new google.maps.LatLng(position.lat, position.long);
      var myOptions = {
                        zoom: 12,
                      center: latlng,
                   mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
      map = new google.maps.Map(document.getElementById("gmap"),
                myOptions);
	  var charts_icon_opts = {primaryColor:"#B22222",pinType:"d_map_xpin_letter"};
      var marker_image = createChartsMarkerImage(charts_icon_opts);
      var marker = new google.maps.Marker({
									position: latlng, 
										 map: map,
										icon: marker_image
									});
    $('#gmap').fadeIn('slow');
	};
		


function placeMarker(location,id,icon, category) {
  if (!gmark_sets.hasOwnProperty(category)){
      gmark_sets.category = [];
  }
  var marker = new google.maps.Marker({
      position: location, 
           map: map,
     animation: google.maps.Animation.DROP,
            id: id,
          icon: icon
  });
  gmark_sets.category.push(marker);
};


function createChartsMarkerImage(opts){
    //var iconMaker = new MapIconMaker();
    var charts_url = MapIconMaker.createMarkerIcon(opts);
    console.log('churl ' + charts_url);
    var icon = new google.maps.MarkerImage(charts_url);
    console.log(icon);
    return icon;
}