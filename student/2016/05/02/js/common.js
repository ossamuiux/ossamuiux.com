$(document).ready(function(){
	$('.header_inner .m_btn').click(function(){
		$('#cover').show();
		$('.m_gnb').animate({left:0},300);
		$('.m_close').animate({left:250},300);
	});
	$('.header_inner .m_close, #cover').click(function(){
		$('#cover').hide();
		$('.m_gnb').animate({left:'-100%'},300);
		$('.m_close').animate({left:'-100%'},300);
	});
	$('.section4 .top_btn').click(function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop:0});
	});
});


















