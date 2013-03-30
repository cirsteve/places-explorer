(function (Backbone, _, $, undefined) {
    PLCE.PlaceView = Backbone.View.extend({
        template: MNKY.TMPL.places_place,
        
        tagName: 'li',

        initialize: function() {
            this.render();
            return this;
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });
}(window.Backbone, window._, window.jQuery));
