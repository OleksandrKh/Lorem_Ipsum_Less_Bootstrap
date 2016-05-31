$(document).ready(function() {
	$('.fancybox').fancybox();

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	}
});

$(window).load(function() {

	$('.header_mnu').animated('fadeInDown', 'fadeOutUp');
	$('.logo_container').animated('flipInX', 'flipOutX');
	$('.left').animated('fadeInLeft', 'fadeOutRight');
	$('.right').animated('fadeInRight', 'fadeOutLeft');
	$('.portfolio_item').animated('rollIn', 'rollOut');
	$('.contact_info').animated('zoomIn', 'zoomOut');

	function resizeSection() {
		$('.main_head').css('height', $(window).height());
	}
	resizeSection();
	$(window).resize(function() {
		resizeSection();
	});

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$("a[href*='#']").mPageScroll2id();

});
