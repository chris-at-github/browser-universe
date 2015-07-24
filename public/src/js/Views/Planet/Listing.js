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

		instance.container.find('.list-object-selectable-checkbox > input').each(function() {
			var checkbox = $(this);
			console.log(checkbox);
		});
	}

	if(element !== undefined) {
		this.container = $(element);
	}

	initialize();
}

PlanetListingView.DEFAULTS = {

}

module.exports = PlanetListingView;