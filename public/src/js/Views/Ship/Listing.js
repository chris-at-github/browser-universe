'use strict';

function ShipListingView(element, options) {
	this.container = null;
	this.options = $.extend({}, ShipListingView.DEFAULTS, options);
	this.x = 0;
	this.y = 0;

	var instance = this;
	var initialize = function() {
		instance.container.find('.list-object-selectable-checkbox > input').on('change', function() {
			var checkbox = $(this);

			if(checkbox.is(':checked') === false) {
				instance.deactivateOne(checkbox);
			} else {
				instance.activateOne(checkbox);
			}
		});
	}

	if(element !== undefined) {
		this.container = $(element);
	}

	initialize();
}

ShipListingView.DEFAULTS = {
	routes: {
		activateOne:   '/ship/activate/',
		deactivateOne: '/ship/deactivate/'
	}
}

ShipListingView.prototype.redirect = function(url) {
	window.location.href = url;
}

ShipListingView.prototype.activateOne = function(ship) {
	var id 	= ship.attr('value');
	var url = this.options.routes.activateOne + id;

	this.redirect(url);
}

ShipListingView.prototype.deactivateOne = function(ship) {
	var id 	= ship.attr('value');
	var url = this.options.routes.deactivateOne + id;

	this.redirect(url);
}

module.exports = ShipListingView;