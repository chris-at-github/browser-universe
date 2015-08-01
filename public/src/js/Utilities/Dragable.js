'use strict';

function Dragable(element, options) {
	this.container 	= null;
	this.options 		= $.extend({}, Dragable.DEFAULTS, options);
	this.runny			= false;

	var instance = this;
	var initialize = function() {
		element
			.on('mousedown', function(e) {
				var drag		= $(this).addClass('on');

				var height 	= drag.outerHeight(),
					width 		= drag.outerWidth(),
					x 				= drag.offset().top + height - e.pageY,
					y 				= drag.offset().left + width - e.pageX;

				instance.runny = true;

				drag.parents()
					.on('mousemove', function(e) {
						if(instance.runny === false) {
							return;
						}

						drag.offset({
							top:  e.pageY + y - height,
							left: e.pageX + x - width
						});

						e.preventDefault();
					})
					.on('mouseup', function() {
						drag.removeClass('on');
						instance.runny = false;
					});
			})
			.on('mouseup', function() {
				$(this).removeClass('on');
				instance.runny = false;
			});
	}

	this.container = element;

	initialize();
}

Dragable.DEFAULTS = {
}

module.exports = Dragable;