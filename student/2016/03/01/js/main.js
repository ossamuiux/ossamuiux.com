$(document).ready(function(){
	$('.main .visual').slick({
		arrows:false,
		dots:true,
		autoplay:true,
		pauseOnHover:false,
		swipe:false,
		slide:'div'
	});
	
	$('.section3_inner .promotion').slick({
		arrow:true,
		dots:false,
		autoplay:false,
		pauseOnHover:false,
		swipe:false,
		slide:'div',
		slidesToShow:3,
		slidesToScroll:1
	});
});