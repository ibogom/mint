define(['backbone', 'marionette'],
    function (Backbone, Marionette) {
        "use strict";
        return Backbone.Marionette.AppRouter.extend({

            appRoutes: {
                "": "startScreen",
                "start":"startScreen",
                "demo":"demoScreen",
                "about":"aboutScreen",
                "feauters":"feautersScreen",
                "reviews":"reviewsScreen",
                "support":"supportScreen",
                "create":"createScreen"
            }
        });
});