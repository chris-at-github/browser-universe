'use strict';

function Dragable(objects, options) {
	this.objects 	= null;
	this.options 		= $.extend({}, Dragable.DEFAULTS, options);

	var instance 	= this;
	var listener	= $('body');

	var initialize = function() {
		instance.objects.each(function() {
			var drag 		= $(this);
			var append	= drag;
			var initial	= null;

			if(instance.options.append !== null) {
				append = $(instance.options.append);
			}

			append
				.on('mousedown', function(e) {
					drag.addClass('on');

					var x = drag.position().left,
							y = drag.position().top,
							zero = {
								x: e.pageX,
								y: e.pageY
							},
							offset = {
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

					if(initial === null) {
						initial = {x: x, y: y};
					}

					listener.on('mousemove', function(e) {

						// Sicherheitsabfrage, dass nur ein Element bewegt wird
						if(drag.hasClass('on') === false) {
							return;
						}

						// Min- und Maxwerte (initialer Startpunkt + Startpunkt Event + aktuelle Mausbewegung)
						// X
						if(
							(instance.options.max.x[0] === null || (initial.x + x + (e.pageX - zero.x)) >= instance.options.max.x[0]) && // min
							(instance.options.max.x[1] === null || (initial.x + x + (e.pageX - zero.x)) <= instance.options.max.x[1]) // max
						) {
							offset.x = e.pageX - zero.x;
						}

						// Y
						if(
							(instance.options.max.y[0] === null || (initial.y + y + (e.pageY - zero.y)) >= instance.options.max.y[0]) && // min
							(instance.options.max.y[1] === null || (initial.y + y + (e.pageY - zero.y)) <= instance.options.max.y[1]) // max
						) {
							offset.y = e.pageY - zero.y;
						}

						// Achsen
						if(instance.options.axis === 'x') {
							offset.y = 0;
						}

						if(instance.options.axis === 'y') {
							offset.x = 0;
						}

						drag.css({
							'transform': 'translate(' + offset.x + 'px, ' + offset.y + 'px)'
						});

						e.preventDefault();
					});

					listener.parents().on('mouseup', function() {
						listener.off('mousemove');

						drag.removeClass('on');

						// nach Abschluss Transform in Position umwandeln -> dann kann ueber Position() wieder top und left
						// ausgelesen werden
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
};

Dragable.DEFAULTS = {
	append: null,
	axis: 'both',
	max: {
		x: [null, null],
		y: [null, null]
	}
};

module.exports = Dragable;