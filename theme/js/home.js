;(function($){

	$(function(){init();});

	var init = function() {
		stylize_bullets();
	};

	var stylize_bullets = function () {
		var bullets = $('.bullet-points li');

		// add sub-text to bullets based on al
		var links = bullets.find('a');
		$.each(links, function(id, link) {
			var l = $(link);
			var title = l.attr('title');
			if (title) {
				$('<small>' + title + '</small>').appendTo(l);
				l.attr('title', ''); // empty it
			}
		});

	};

})(jQuery);