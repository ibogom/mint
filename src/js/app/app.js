define(['jquery', 'underscore', 'backbone','marionette', '../libs/utils'
    ],
    function ($, _, Backbone, Marionette, utils) {
        "use strict";
        var App = new Backbone.Marionette.Application();

        App.addRegions({
            mainRegion:"#main-container",
            header: "header",
            footer: "footer"
        });

        App.addInitializer(function () {
            Backbone.history.start({
                pushState: false,
                root: ""
            });
        });


        return App;
    });