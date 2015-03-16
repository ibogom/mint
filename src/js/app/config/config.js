require.config({
    baseUrl:"./js/app",
    // 3rd party script alias names (Easier to type "jquery" than "libs/jquery, etc")
    // probably a good idea to keep version numbers in the file names for updates checking
    paths:{
        // Core Libraries
        "jquery":"../libs/jquery",
        "underscore":"../libs/underscore",
        "backbone":"../libs/backbone",
        "marionette":"../libs/backbone.marionette",
        "handlebars":"../libs/handlebars",
        "handlebars.runtime":"../libs/handlebars.runtime",
        //"jasmine": "../libs/jasmine",
        //"jasmine-html": "../libs/jasmine-html",

        // Plugins
        //"backbone.validateAll":"../libs/plugins/Backbone.validateAll",
        //"bootstrap":"../libs/plugins/bootstrap",
        //"text":"../libs/plugins/text"
    },
    // Sets the configuration for your third party scripts that are not AMD compatible
    shim:{

        // Twitter Bootstrap jQuery plugins
        "bootstrap":["jquery"],

        // Backbone
        "backbone":{
            // Depends on underscore/lodash and jQuery
            "deps":["underscore", "jquery"],
            // Exports the global window.Backbone object
            "exports":"Backbone"
        },
        //Marionette
        "marionette":{
            "deps":["underscore", "backbone", "jquery"],
            "exports":"Marionette"
        },

        // Backbone.validateAll plugin that depends on Backbone
        "backbone.validateAll":["backbone"]

//        "jasmine": {
//            // Exports the global 'window.jasmine' object
//            "exports": "jasmine"
//        },
//
//        "jasmine-html": {
//            "deps": ["jasmine"],
//            "exports": "jasmine"
//        }
    }
});