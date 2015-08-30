var Dragable 		= require('./Utilities/Dragable.js');
var Playground 	= function() {
}

Playground.prototype.dragable = function() {
	$.fn.dragable = function(options) {
		return $(this).each(function() {
			var plugin = new Dragable(this, options);
		});
	};

	$('.dragable').dragable({
		max: {
			x: [- 300, null],
			y: [- 300, null]
		}
	});
};

Playground.prototype.snap = function() {
	var s 		= Snap("#snap");
	var icon = s.polyline([200, 210, 220, 210, 210, 193, 200, 210]);
			icon.attr({
				'stroke':       'red',
				'stroke-width': 1,
				fill: 'transparent'
			});
	var ship = s.g();
			ship.add(icon);
	ship.animate({'transform': 'translate(-100, -100)'}, 1000);
};

module.exports = Playground;