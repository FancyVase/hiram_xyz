$(document).ready(function() {
	var offset = $('header').height() + 100;

	$('.arrow').show();

	$(window).scroll(function() {
		if ($(window).scrollTop() > offset) {
			$('.arrow').hide();
		} else {
			$('.arrow').show();
		}
	});

	$('arrow').click(function() {
		window.open('http://google.com', '_blank');
	});
});