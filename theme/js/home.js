;(function($){
	console.log(1);
	$(function(){
		console.log(3);
		init();
	});
	

	var init = function() {
		console.log(4);
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

		// bullets.fadeIn("slow");

	};

	console.log(2);
})(jQuery);
console.log('2.5');