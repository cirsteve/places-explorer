(function (Backbone, _, $, undefined) {
    PLCE.LocationView = Backbone.View.extend({
        template: MNKY.TMPL.places_location,

        initialize: function() {
            this.render();
            return this;
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });
}(window.Backbone, window._, window.jQuery));
