$(document).ready(function() {
	
	var $menu = $('.gnb');
	//마우스, 포커스 일때 헤더크기변경
	$menu.on('mouseenter focusin',function(){
		$('#header').stop().animate({height:345});
	});
	
	$menu.on('mouseleave focusout',function(){
		$('#header').stop().animate({height:90});
	});
	
	
	//스크롤 내릴시 헤더축소
	$(window).scroll(function() {
        var num=$(this).scrollTop();
		
		if(num>100){
			$('#header').addClass('on');
			$('.logo img').attr('src','images/logo_on_small.png');
		} else{
			$('#header').removeClass('on');
			$('.logo img').attr('src','images/logo.png');
		}
    });
});