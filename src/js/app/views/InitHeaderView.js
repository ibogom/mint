/**
 * Created by Ievgen on 15.03.2015.
 */
define(['jquery', 'underscore', 'backbone', 'marionette', 'App',
        'templates/templateCollection'],
    function ($, _, Backbone, Marionette, App, templateFn) {
        "use strict";
        return Backbone.Marionette.ItemView.extend({
            tagName: 'div',
            className: 'header-wrapper',

            template: templateFn['InitHeader.hbs'],

            ui: {
                "list": "ul.nav-menu>li"
            },
            events: {
                'click @ui.list': 'navigate'
            },

            navigate: function (e) {
                $(e.currentTarget).addClass("btn-active").siblings().removeClass("btn-active");
            }
        });
    });