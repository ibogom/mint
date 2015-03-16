/**
 * Created by Ievgen on 15.03.2015.
 */
define(['jquery', 'underscore', 'backbone', 'marionette', 'App',
        'templates/templateCollection'],
    function ($, _, Backbone, Marionette, App, templateFn) {
        "use strict";
        return Backbone.Marionette.ItemView.extend({
            tagName: 'div',
            className: 'block-wrapper',

            template: templateFn['InitStartScreen.hbs'],
            ui: {
                "block":"div.land-block",
                "phone":"div.phone-intro",
                "text":"h3.text-intro",
                "btnWrapper":"div.btns-wrapper",
                "details":"a.details",
                "start":"a.create"
            },
            events: {
                "click @ui.start":"startCreate"
            },
            startCreate: function(e){
                var self = this;
                e.preventDefault();
                this.ui.btnWrapper.fadeOut(400);
                this.ui.text.animate({marginLeft: 50 + "px", opacity: 0}, 400);
                this.ui.phone.animate({"bottom":-300+"px"},500, function(){
                    $(this).hide();
                    Backbone.history.navigate("create", {trigger: true, replace: false});
                });
            },
            onAttach: function(){
                var self = this;
                this.ui.block.height(window.innerHeight-120);
                this.ui.phone.animate({"bottom":0+"px"},600);
                this.ui.text.animate({marginLeft:0+"px",opacity:1},600,function(){
                    self.ui.btnWrapper.fadeIn(400);
                });
            }

        });
    });