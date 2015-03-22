/**
 * Created by Ievgen on 19.03.2015.
 */
define(['jquery', 'underscore', 'backbone', 'marionette', 'App',
        'templates/templateCollection'],
    function ($, _, Backbone, Marionette, App, templateFn) {
        "use strict";
        return Backbone.Marionette.ItemView.extend({
            tagName: 'div',
            className: 'block-wrapper',
            ui: {
                "block": "div.land-block",
                "text":"h3.text-big",
                "input":"input.input-txt",
                "btns":"div.nav-btns",
                "back":"a.back",
                "next":"a.next"
            },
            template: templateFn['InitCreateDomain.hbs'],
            events:{
              "click @ui.back":"goBack",
              "click @ui.next":"goNext"
            },
            goBack:function(e){
                e.preventDefault();
                window.history.back();
            },
            goNext:function(e){
                e.preventDefault();
            },
            onAttach:function(){
                this.ui.block.height(window.innerHeight-120);
                this.ui.text.delay(800).animate({marginLeft:0+"%",opacity:1},600);
                this.ui.input.delay(1000).animate({opacity:1},400, _.bind(function(){
                    this.ui.btns.animate({opacity:1},400);
                },this));

            }
        });
    });