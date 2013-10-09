;(function($){
	init();
	$(function(){
	});
	
	var init = function() {
		$('.bullet-points li').hide();
		console.log('init');
		stylize_bullets();
	};

	var stylize_bullets = function () {
		console.log(5);
		var bullets = $('.bullet-points li').hide();

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

		bullets.delay(400).fadeIn("slow");

	};

	console.log(2);
})(jQuery);
console.log('2.5');