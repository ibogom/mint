define([
    'App',
    'jquery',
    'backbone',
    'marionette',
    'views/InitHeaderView',  'views/InitCreateHeaderView', 'views/InitGetStartedView'
], function (App, $, Backbone, Marionette, InitHeaderView,InitCreateHeaderView, InitGetStartedView) {
    "use strict";
    return Backbone.Marionette.Controller.extend({
        initialize: function (options) {
            //App.header.show(new InitHeaderView());
        },
        startScreen: function () {
            App.header.show(new InitHeaderView());
            App.mainRegion.show(new InitGetStartedView());
        },
        demoScreen: function () {

        },
        aboutScreen: function () {

        },
        feautersScreen: function () {

        },
        reviewsScreen: function () {

        },
        supportScreen: function () {

        },
        createScreen: function () {
            App.header.show(new InitCreateHeaderView());
        }
    });
});