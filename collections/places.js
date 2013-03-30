(function (Backbone, _, $, undefined) {

    PLCE.PlacesCollection = Backbone.Collection.extend({
        //baseUrl: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?",
        model: PLCE.PlaceModel


        //buildUrl: function (options) {
        //    console.log(this);
        //    var sensor = options.sensor ? "&sensor=true" : "&sensor=false";
        //    this.url = this.baseUrl + "location=" + options.latitude.toString() + "," +
        //        options.longitude.toString() + "&radius=" + options.radius.toString() + 
        //        "&types=" + options.type + sensor + "&key=" + options.key;
        //}
    });
}(window.Backbone, window._, window.jQuery));
