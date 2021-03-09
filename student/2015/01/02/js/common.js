// JavaScript Document

$(document).ready(function(){
	
	$('.header .m_btn').click(function(){
		$(this).hide();
		$('.menu_wrap').animate({'left':'0'},300);
		$('.wrap').animate({'left':'275px'},300);
		$('.close .close_btn').animate({'left':'274px'},300);		
		$('.wrap_hide').css({'overflow':'hidden'});
		$('.wrap_hide .cover').fadeIn();
	});
	
	$('.close .close_btn, .cover').click(function(){	
		$('.header .m_btn').show();
		$('.menu_wrap').animate({'left':'-275px'},300);
		$('.wrap').animate({'left':'0px'},300,function(){
			$('.wrap_hide').css({'overflow':'auto'});
		});
		$('.close .close_btn').animate({'left':'-274px'},300);					
		$('.wrap_hide .cover').fadeOut();
	});
	
	$('.wrap_hide .top_btn').click(function(e){
		e.preventDefault();
		$('html,body').animate({'scrollTop':'0'},800);		
	});
	
	$('.header .cart_btn, .header .cart_num, .login_wrap .join, .m_gnb .menu').click(function(){
		alert('리뉴얼 준비중입니다.');
	});
});