$(document).ready(function() {
	var offset = $('#header').height();
	console.log(offset);

	$('.arrow').show();

	$(window).scroll(function() {
		console.log($(window).scrollTop())
		if ($(window).scrollTop() > 80) {
			$('.arrow').hide();
		} else {
			$('.arrow').show();
		}
	});

	$('.arrow').click(function() {
		$('html', 'body').animate({
			scrollTop: $("#about-me").offset().top
		}, 2000);
	});

});