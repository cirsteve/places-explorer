(function (Backbone, _, $, undefined) {
    PLCE.GoogleMapModel = Backbone.Model.extend({
        defaults: {
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        },

        initialize: function (options) {
            var lat = options.latitude || 37.7750,
                lon = options.longitude || 122.4183;

            this.set('center', new google.maps.LatLng(lat, lon));
        }

    });
}(window.Backbone, window._, window.jQuery));
