'use strict';

function Dragable(objects, options) {
	this.objects 	= null;
	this.options 		= $.extend({}, Dragable.DEFAULTS, options);

	var instance = this;
	var initialize = function() {
		instance.objects.each(function() {
			var drag = $(this);

			drag
				.on('mousedown', function(e) {
					drag.addClass('on');

					var x 			= drag.position().left,
							y 			= drag.position().top,
							zero		= {
								x: e.pageX,
								y: e.pageY
							},
							offset	= {
								x: 0,
								y: 0
							};

					if(drag.css('position') !== 'absolute') {
						drag.css('position', 'relative');

						var x = parseInt(drag.css('left'));
						if(isNaN(x) === true) {
							x = 0;
						}

						var y = parseInt(drag.css('top'));
						if(isNaN(y) === true) {
							y = 0;
						}
					}

					drag.parents()
						.on('mousemove', function(e) {
							if(drag.hasClass('on') === false) {
								return;
							}

							offset.x = e.pageX - zero.x;
							offset.y = e.pageY - zero.y;

							drag.css({
								'transform': 'translate(' + offset.x + 'px, ' + offset.y + 'px)'
							});

							e.preventDefault();
						})
						.on('mouseup', function() {
							drag.removeClass('on');

							drag.css({
								'transform': 	'translate(0, 0)',
								'top':				(y + offset.y),
								'left':      	(x + offset.x)
							});
						});
				})
				.on('mouseup', function() {
					$(this).removeClass('on');
				});
		});
	}

	this.objects = $(objects);

	initialize();
}

Dragable.DEFAULTS = {
}

module.exports = Dragable;