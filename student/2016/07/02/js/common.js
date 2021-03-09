$(document).ready(function(){
	//모바일버튼 스위치
	var sw=0;
	
	$('.m_btn').click(function(e){
		e.preventDefault();
		
		if(sw==0) {
			$(this).addClass('on');
			$('.wrap_hide').css({'overflow':'hidden'});
			$('.wrap').stop().animate({'left':'310px'});
			$('.lnb').stop().animate({'left':'0px'});
			$('.wrap_hide .cover').fadeIn();
			sw=1;
		} else {
			$(this).removeClass('on');
			$('.wrap_hide').css({'overflow':'auto'});
			$('.wrap').stop().animate({'left':'0px'});
			$('.lnb').stop().animate({'left':'-310px'});
			$('.wrap_hide .cover').fadeOut();
			sw=0;
		}
	});
	//좌측 모바일 메뉴 영화 선택
	var sw2=0;
	$('.lnb .lnb2 .arrow').click(function(e){
		e.preventDefault();
		
		if(sw2==0) {
			$(this).siblings().slideUp();
			$(this).addClass('on');
			sw2=1;
		} else {
			$(this).siblings().slideDown();
			$(this).removeClass('on');
			sw2=0;
		}
	});
	//좌측 모바일 메뉴 영화 선택 클릭시 컬러 온
	$('.lnb .lnb2 li .sub a').click(function(e){
		e.preventDefault();
		
		$('.lnb .lnb2 li .sub a').not(this).removeClass('on');
		$('.lnb .lnb2 li .sub a span').not(this).removeClass('on');
		$(this).addClass('on');
		$(this).find('span').addClass('on');
	});
	//우측 퀵예매 메뉴 클릭
	$('.header .quick_btn').click(function(e){
		e.preventDefault();
		
		$('.quick').slideDown();
	});
	//우측 퀵예매 닫기버튼 클릭
	$('.quick .close_btn').click(function(e){
		e.preventDefault();
		
		$('.quick').slideUp();
	});
});
