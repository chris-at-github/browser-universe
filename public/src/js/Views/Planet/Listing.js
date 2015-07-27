'use strict';

function PlanetListingView(element, options) {
	this.container = null;
	this.options = $.extend({}, PlanetListingView.DEFAULTS, options);
	this.x = 0;
	this.y = 0;

	var instance = this;
	var initialize = function() {
		////	instance.container
		////		.on('mouseenter', $.proxy(instance.on, instance))
		////		.on('mouseout', $.proxy(instance.off, instance))
		////		.on('click', $.proxy(instance.activate, instance));
		//}
		//
		//if(element !== undefined) {
		//	this.container = $(element);
		//}

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

PlanetListingView.DEFAULTS = {
	routes: {
		activateOne:   '/planet/activate/',
		deactivateOne: '/planet/deactivate/'
	}
}

PlanetListingView.prototype.redirect = function(url) {
	window.location.href = url;
}

PlanetListingView.prototype.activateOne = function(planet) {
	var id	= planet.attr('value');
	var url = this.options.routes.activateOne + id;

	this.redirect(url);
}

PlanetListingView.prototype.deactivateOne = function(planet) {
	var id = planet.attr('value');
	var url = this.options.routes.deactivateOne + id;

	this.redirect(url);
}

module.exports = PlanetListingView;