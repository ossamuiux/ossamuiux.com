$(document).ready(function(){
	sw=0;//메뉴 이동시킬 변수
	
	$('.lnb>li').click(function(){
		$('.lnb .sub').stop().slideUp(300);
		$('.lnb>li>a').removeClass('on');
		$(this).find('>a').addClass('on');
		$('.lnb>li').not(this).find('.sub').removeClass('on');
		
		if ($(this).find('.sub').hasClass('on') == false) {
			$(this).find('.sub').stop().slideDown(300).addClass('on');
		} else {
			$(this).find('.sub').stop().slideUp(300).removeClass('on');
			$(this).find('>a').removeClass('on');
		}
	});
	
	$('.m_btn').click(function(){
		$('.wrap_hide').css({'overflow':'hidden'});
		$('.lnb_wrap').addClass('on');
		$('.wrap_hide .close_btn').fadeIn(300);
		$('.wrap_hide .cover').fadeIn(300);
	});
	
	$('.wrap_hide .close_btn').click(function(){
		$('.wrap_hide').css({'overflow':'auto'});
		$('.lnb_wrap').removeClass('on');
		$(this).hide();
		$('.wrap_hide .cover').fadeOut(300);
	});
	
	$('.wrap_hide .cover').click(function(){
		$('.wrap_hide').css({'overflow':'auto'});
		$('.lnb_wrap').removeClass('on');
		$(this).fadeOut(300);
		$('.wrap_hide .close_btn').hide();
	});
	
	
	
	
});//ready