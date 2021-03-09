$(document).ready(function() {
	  $('.main_visual').slick({
	  autoplay:true,
	  autoplaySpeed:3500,
	  speed:1000,
	  draggable:false,
	  pauseOnFocus:false,
	  pauseOnHover:false
	});
	
	$('.best_slide').slick({
		draggable:false,
		arrows:false,
		dots:true,
		autoplay:true, 
		speed:1200, 
		pauseOnHover:false,
		autoplaySpeed:2000,
		slidesToShow: 3, 
		slidesToScroll: 1 
	});
	
	//on메서드로 이벤트 두개 걸기
	$('.gnb').mouseenter(function(){
		$('#header').stop().animate({height:410});
	}).mouseleave(function(){
		$('#header').stop().animate({height:140});
	});
		
});