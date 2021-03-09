$(document).ready(function(){
	var sw=true;
	//gnb_menu slide updown
	$('.header_inner .gnb').mouseenter(function(){
		$('.gnb_menu, .gnb_menu_bg').stop().slideDown();
	});
	$('.header_inner .gnb').mouseleave(function(){
		$('.gnb_menu, .gnb_menu_bg').stop().slideUp();
	});
	$('.gnb_menu, .gnb_menu_bg').mouseenter(function(){
		$('.gnb_menu, .gnb_menu_bg').stop().slideDown();
	});
	$('.gnb_menu, .gnb_menu_bg').mouseleave(function(){
		$('.gnb_menu, .gnb_menu_bg').stop().slideUp();
	});
	
	//gnb hover
	$('.header_inner .gnb>li').mouseenter(function(){
		var num=$(this).index()+1;
		$(this).find('img').prop('src','images/gnb0'+num+'_on.png');
	});
	
	$('.header_inner .gnb>li').mouseleave(function(){
		var num=$(this).index()+1;
		$(this).find('img').prop('src','images/gnb0'+num+'.png');
	});
	
	//tablet, mobile menu click - close img
	$('.m_btn_menu').click(function(){
		if(sw==true){
			$(this).find('img').attr('src','images/m_menu_close.png');
			$('.m_gnb_wrap').show();
			$('.cover').show();
		} else {
			$(this).find('img').attr('src','images/m_menu.png');
			$('.m_gnb_wrap').hide();
			$('.cover').hide();
		}
		sw=!sw;
	});	
	
	//tablet, mobile gnb click - 아코디언메뉴
	$('.m_gnb_wrap .m_gnb>li').click(function(){
		$('.m_gnb_wrap .m_gnb .m_gnb_menu').stop().slideUp();
		
		if($(this).find('.m_gnb_menu').css('display')=='none'){
			$(this).find('.m_gnb_menu').stop().slideDown();
		} else {
			$(this).find('.m_gnb_menu').stop().slideUp();
		}
	});
});