;(function($){

	var stylize_bullets = function () {
		var bullets = $('.bullet-points li');
		var bulletList = bullets.closest('ul');
		bulletList.height(bulletList.outerHeight() + 5).css({
			overflow: 'hidden'
		});
		bullets.hide();

		// add sub-text to bullets based on al
		var links = bullets.find('a');
		var stagger = 200;
		$.each(links, function(id, link) {
			var l = $(link);
			var title = l.attr('title');
			if (title) {
				$('<small>' + title + '</small>').appendTo(l);
				l.attr('title', ''); // empty it
			}
			l.parent().delay(stagger).fadeIn("slow");
			stagger += 200;
		});

	};

	var init = function() {
		stylize_bullets();
	};

	init();

})(jQuery);
