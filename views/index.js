(function (Backbone, _, $, undefined) {
    var __super__ = MNKY.PageView.prototype;
    
    PLCE.IndexPageView = MNKY.PageView.extend({
        template: MNKY.TMPL.places_index,
        
        events: {
            'change .place-type': 'initPlacesSet'
        },

        render: function () {
            __super__.render.call(this, arguments);

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(_.bind(this.setCurrentLocation, this));
            }
        },

        getMap: function (map) {
           this.gmap = new PLCE.GoogleMapModel(map.toJSON());
            this.gmapInstance = new PLCE.GoogleMapView({model:this.gmap});
        },

        initPlacesSet: function (e) {
            var val = $(e.target).val();
            this.placeSet = new PLCE.PlacesSetModel({
                    coords: this.location.toJSON(),
                    type: val,
                    sensor: true,
                    map: this.gmapInstance.gmapObj
                });

            this.placeSet.get('places').on('add', this.renderPlacesSet, this);
            
        },

        renderLocation: function (locView) {
            this.$("#loc-target").append(locView.el);
        },

        renderPlacesSet: function () {
            var models = this.placeSet.get('places').models,
                $target = $('<ul>');//.addClass('active');//.data('category', this.placeSet.get('places').type);
            var that = this;
            _.each(models, function(place) {
                var view = new PLCE.PlaceView({model:place});
                new google.maps.Marker({
                    position: place.get('geometry').location,
                    map:that.gmapInstance.gmapObj,
                    size: new google.maps.Size(50, 50),
                    icon: place.get("icon")
                });
                $target.append(view.el);
            });

            this.$('#places-target').html($target[0]);
        },

        setCurrentLocation: function(position) {
            var map  = new PLCE.LocationModel(position.coords);
                locView = new PLCE.LocationView({model:map});

            this.location = map;
            this.renderLocation(locView);
            
            this.getMap(map);
        }

    });
}(window.Backbone, window._, window.jQuery));
