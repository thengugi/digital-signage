var Signage = require('./Twitterus');
var FamousEngine = require('famous/core/FamousEngine');
 FamousEngine.init();
 //create the app and pass in the target element
var signage = FamousEngine.createScene().addChild(new Signage());
