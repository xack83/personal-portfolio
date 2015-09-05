$(document).ready(function() {
    $('.portfolio-item').mouseenter(function() {
		$(this).find(':nth-child(2)').fadeIn(300);
	});
	$('.portfolio-item').mouseleave(function() {
		$(this).find(':nth-child(2)').fadeOut(300);
	});

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

