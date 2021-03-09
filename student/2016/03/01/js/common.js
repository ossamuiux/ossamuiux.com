$(document).ready(function(){
	$('.header .header_inner .gnb').mouseenter(function(){
		$('.header_inner .menu_wrap').stop().slideDown()
	});
	$('.header .header_inner .gnb').mouseleave(function(){
		$('.header_inner .menu_wrap').stop().slideUp()
	});
	
	$('.menu_wrap').mouseenter(function(){
		$('.menu_wrap').stop().slideDown()
	});
	$('.menu_wrap').mouseleave(function(){
		$('.menu_wrap').stop().slideUp()
	});
});