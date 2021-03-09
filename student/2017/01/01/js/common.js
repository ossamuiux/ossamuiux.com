//header서브메뉴//
$(document).ready(function() {
    $('.gnb').mouseenter(function() {
        $('#header').stop().animate({height:355},600,'easeOutExpo');
    });
	
	$('#header_wrap').mouseleave(function() {
        $('#header').stop().animate({height:105},600,'easeOutExpo');
    });
});