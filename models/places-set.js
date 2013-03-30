(function (Backbone, _, $, undefined) {
    var __super__ = Backbone.Model.prototype;

    PLCE.PlacesSetModel = Backbone.Model.extend({
        defaults: {
            radius: 500
        },

        initialize: function (options) {
            console.log(options);
            __super__.initialize.call(this, arguments);
            this.set({
                latitude: options.coords.latitude,
                longitude: options.coords.longitude,
                location: new google.maps.LatLng(options.coords.latitude, options.coords.longitude),
                types: [options.type] || 'restaurant',
                places: new PLCE.PlacesCollection()
            });
            this.get('places').type = options.type;
            this.initPlacesService();
            this.fetchPlaces();
            
            return this;
        },

        fetchPlaces: function () {
            var req = {types:this.get("type")};
            this.get('placesService').nearbySearch(this.toJSON(), _.bind(this.handlePlaces, this));
        },

        handlePlaces: function (response, status) {
            this.get('places').add(response);
            console.log(this.get('places'));
        },

        initPlacesService: function () {
            var opts = {
                    location: this.get("latLng"),
                    radius: this.get("radius")
                    };

            this.set('placesService', new google.maps.places.PlacesService(this.get("map")));
        },

        renderPlaces: function () {

        }

    });
}(window.Backbone, window._, window.jQuery));
