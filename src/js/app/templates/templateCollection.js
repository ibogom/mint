define(['handlebars.runtime'], function(Handlebars) {

this["Mint"] = this["Mint"] || {};

Handlebars.registerPartial("InitAboutScreen.hbs", this["Mint"]["InitAboutScreen.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"land-block\" id=\"about\">\r\n    <div class=\"content\">\r\n\r\n    </div>\r\n</div>";
  },"useData":true}));

Handlebars.registerPartial("InitCreateDomain.hbs", this["Mint"]["InitCreateDomain.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"land-block lnr-bg\" id=\"create\">\r\n    <div class=\"content\">\r\n        <h3 class=\"text-big a-cntr\"><strong>Find</strong> the domain that's right for you</h3>\r\n        <input class=\"input-txt\" placeholder=\"example.com\" type=\"text\" name=\"domain\" id=\"check-domain\"/>\r\n            <div class=\"content nav-btns\">\r\n                <div class=\"block-5-m\">\r\n                    <a class=\"btn-info back\" href=\"#\">Back</a>\r\n                </div>\r\n                <div class=\"block-5-m\">\r\n                    <a class=\"btn-active next\" href=\"#\">Next</a>\r\n                </div>\r\n            </div>\r\n    </div>\r\n</div>";
  },"useData":true}));

Handlebars.registerPartial("InitCreateHeader.hbs", this["Mint"]["InitCreateHeader.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"content\">\r\n    <div class=\"block-3\" id=\"logo\"></div>\r\n    <div class=\"block-7\">\r\n        <ul class=\"step-list\">\r\n            <li class=\"active\">1</li>\r\n            <li>2</li>\r\n            <li>3</li>\r\n            <li>4</li>\r\n            <li>5</li>\r\n        </ul>\r\n    </div>\r\n</div>";
  },"useData":true}));

Handlebars.registerPartial("InitDemo.hbs", this["Mint"]["InitDemo.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"land-block\" id=\"demo\">\r\n    <div class=\"content\">\r\n\r\n    </div>\r\n</div>";
  },"useData":true}));

Handlebars.registerPartial("InitFeauters.hbs", this["Mint"]["InitFeauters.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"land-block\" id=\"feauters\">\r\n    <div class=\"content\">\r\n\r\n    </div>\r\n</div>";
  },"useData":true}));

Handlebars.registerPartial("InitHeader.hbs", this["Mint"]["InitHeader.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"content\">\r\n<div class=\"block-3\" id=\"logo\"></div>\r\n<div class=\"block-7\">\r\n    <ul class=\"nav-menu clr-wht\">\r\n        <li class=\"btn-active\"><a href=\"#\">GET STARTED</a></li>\r\n        <li><a href=\"#about\">ABOUT</a></li>\r\n        <li><a href=\"#feauters\">FEAUTERS</a></li>\r\n        <li><a href=\"#reviews\">REVIEWS</a></li>\r\n        <li><a href=\"#demo\">DEMO</a></li>\r\n        <li><a href=\"#support\">SUPPORT</a></li>\r\n    </ul>\r\n</div>\r\n</div>";
  },"useData":true}));

Handlebars.registerPartial("InitReviews.hbs", this["Mint"]["InitReviews.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"land-block\" id=\"reviews\">\r\n    <div class=\"content\">\r\n\r\n    </div>\r\n</div>";
  },"useData":true}));

Handlebars.registerPartial("InitStartScreen.hbs", this["Mint"]["InitStartScreen.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"land-block lnr-bg bottom-line\" id=\"start\">\r\n    <div class=\"content\">\r\n        <div class=\"block-5-m\">\r\n            <div class=\"phone-intro\"></div>\r\n        </div>\r\n        <div class=\"block-5-t\">\r\n            <h3 class=\"text-big\"><strong>Delicious</strong> Platform <br/> For your web site </h3>\r\n            <div class=\"btns-wrapper\">\r\n                <a class=\"btn-info details\" href=\"#\">Learn more</a>\r\n                <a class=\"btn-active create\" href=\"#\">Try it now</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
  },"useData":true}));

Handlebars.registerPartial("InitSupport.hbs", this["Mint"]["InitSupport.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"land-block\" id=\"support\">\r\n    <div class=\"content\">\r\n\r\n    </div>\r\n</div>";
  },"useData":true}));

return this["Mint"];

});