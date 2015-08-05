var PlanetListingView = require('./Views/Planet/Listing.js');
new PlanetListingView($('#planet-listing'));

var ShipListingView = require('./Views/Ship/Listing.js');
new ShipListingView($('#ship-listing'));

//var Dragable = require('./Utilities/Dragable.js');
//new Dragable($('.dragable'));

$('.dragable').dragable()