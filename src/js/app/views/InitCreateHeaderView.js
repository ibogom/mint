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

            template: templateFn['InitCreateHeader.hbs']
        });
    });