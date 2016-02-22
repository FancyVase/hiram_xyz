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

	$('a[href^="#"]').click(function(e) {
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top}, 
			1000);
		return false;
		e.preventDefault();
	});

});