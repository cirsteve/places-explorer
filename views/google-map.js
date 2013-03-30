(function (Backbone, _, $, undefined) {
    PLCE.GoogleMapView = Backbone.View.extend({
        template: MNKY.TMPL.places_location,

        initialize: function () {
            this.render();
            return this;
        },

        render: function () {
            this.gmapObj = new google.maps.Map(document.getElementById("map-target"),this.model.toJSON());
        }
    });
}(window.Backbone, window._, window.jQuery));
