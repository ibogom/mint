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
            ui:{
                "list":"ul.step-list"
            },

            template: templateFn['InitCreateHeader.hbs'],
            onAttach: function(){
                this.ui.list.find("li").each(function (index) {
                    window.setTimeout(_.bind(function(){
                        $(this).addClass("bounce");
                    },this),index*150);
                });
            }
        });
    });