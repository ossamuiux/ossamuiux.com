$(document).ready(function(){
	//헤더-서브메뉴
	$('.header_wrap .gnb_wrap .gnb li').mouseenter(function(){
		$('.header_wrap .sub_wrap').stop().slideDown();
	});
	
	$('.header_wrap .gnb_wrap .gnb li').mouseleave(function(){
		$('.header_wrap .sub_wrap').stop().slideUp();
	});
	
	$('.header_wrap .sub_wrap').mouseenter(function(){
		$(this).stop().slideDown();
	});
	
	$('.header_wrap .sub_wrap').mouseleave(function(){
		$(this).stop().slideUp();
	});
	
	$('.header_wrap .sub_wrap .menu_wrap ul').mouseenter(function(){
		var num=$(this).index();
		
	$('.gnb li').find('a').css({'color':'#33130'});
		$('.gnb li').eq(num).find('a').css({'color':'#de3608'});
	});
	
	$('.header_wrap .sub_wrap .menu_wrap ul').mouseleave(function(){
		var num=$(this).index();
		
		$('.gnb li').eq(num).find('a').css({'color':'#33130'});
	});
	
	$('.header_wrap .header .gnb li').mouseenter(function(){
		$(this).find('a').css({'color':'#de3608'});
	});
	
	$('.header_wrap .header .gnb li').mouseleave(function(){
		$(this).find('a').css({'color':'#333130'});
	});
	
	//헤더픽스-서브
	$('.header_fix .gnb_wrap .gnb li').mouseenter(function(){
		$('.header_fix .sub_wrap').stop().slideDown();
	});
	
	$('.header_fix .gnb_wrap .gnb li').mouseleave(function(){
		$('.header_fix .sub_wrap').stop().slideUp();
	});
	
	$('.header_fix .sub_wrap').mouseenter(function(){
		$(this).stop().slideDown();
	});
	
	$('.header_fix .sub_wrap').mouseleave(function(){
		$(this).stop().slideUp();
	});
	
	$('.header_fix .sub_wrap .menu_wrap ul').mouseenter(function(){
		var num=$(this).index();
		
		$('.header_fix .gnb li').find('a').css({'color':'#33130'});
		$('.header_fix .gnb li').eq(num).find('a').css({'color':'#de3608'});
	});
	
	$('.header_fix .sub_wrap .menu_wrap ul').mouseleave(function(){
		var num=$(this).index();
		
		$('.header_fix .gnb li').eq(num).find('a').css({'color':'#33130'});
	});
	
	$('.header_fix .header .gnb li').mouseenter(function(){
		$(this).find('a').css({'color':'#de3608'});
	});
	
	$('.header_fix .header .gnb li').mouseleave(function(){
		$(this).find('a').css({'color':'#333130'});
	});
	
	//스크롤
	var num;
	$(window).scroll(function(){
		num=$(this).scrollTop();
		
		if(num>80){
			$('.header_fix').stop().slideDown();
		} else {
			$('.header_fix').stop().slideUp();
		}
	});
	
	//패밀리사이트
	var sw=0;
	$('.footer_right .btn').click(function(e){
		e.preventDefault();
		
		if (sw==0) {
			$('.footer_right .family ul').show();
			$(this).addClass('on');
			sw=1;
		} else {
			$('.footer_right .family ul').hide();
			$(this).removeClass('on');
			
			sw=0;	
		}
	});
});