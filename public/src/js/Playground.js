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

module.exports = Playground;