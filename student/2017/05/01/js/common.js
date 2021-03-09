$(document).ready(function() {
	//gnb 슬라이드 메뉴
	$('.gnb').mouseenter(function (){
		$('#header').stop().animate({height:360},700,'easeOutExpo');
	});
	
	$('.gnb').mouseleave(function () {
		$('#header').stop().animate({height:100},700,'easeOutExpo');
	});

});
