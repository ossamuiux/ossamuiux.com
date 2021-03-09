$(document).ready(function(){
	
	var id=setInterval(auto_move,1000);
	var pos;
	var num;
	var sw=0;
	var pos;
	var modalIdx;
	var idx2;
	
	//움직이는 구름
	function auto_move () {
		$('.main_move .cloud1').animate({'margin-left':'-=100px'},2000).animate({'margin-left':'+=100px'},2000);
		$('.main_move .cloud2').animate({'margin-left':'-=200px'},3000).animate({'margin-left':'+=200px'},3000);
	}
	
	//모바일 형식의 버튼
	$('.header button').click(function(){
		if(sw==0){
			$('.m_gnb').stop().animate({'left':'0'},300);
			sw=1;
		} else {
			$('.m_gnb').stop().animate({'left':'-200'},300);
			sw=0;
		}
	});
	
	//페럴렉스 배경
	$(window).scroll(function(){
		pos=$(window).scrollTop();
		
		$('.parallax_bg1 .bg1').css({'top':-pos*0.9+950});
		$('.parallax_bg1 .bg2').css({'top':-pos*0.8+1100});
		$('.parallax_bg1 .bg3').css({'top':-pos*0.6+900});
		$('.parallax_bg1 .bg4').css({'top':-pos*0.5+1000});
		$('.parallax_bg1 .bg5').css({'top':-pos*0.5+1500});
		$('.parallax_bg2').css({'top':-pos*0.6+990});
	});
	
	
	//소개페이지모달팝업
	$('.book .box .next').click(function(e){
		e.preventDefault();
		modalIdx=$(this).index();

		$('.info .book .modal').show();
		$('body').css({'overflow-y':'hidden'});
		$('.book .modal .plan').hide();
		$('.book .modal .plan').eq(modalIdx).fadeIn();
	});
	//모달팝업 닫기버튼
	$('.book .modal .close_btn').click(function(e){
		e.preventDefault();
		$(this).parent().hide();
		$('body').css({'overflow-y':'auto'});
	});


	//메인기획서 모달
	$('.work .main_work .btn').click(function(e){
		e.preventDefault();
		modalIdx=$(this).index();

		$('.work .modal').show();
		$('body').css({'overflow-y':'hidden'});
		$('.work .modal .plan').hide();
		$('.work .modal .plan').eq(modalIdx).fadeIn();
	});
	//모달팝업 닫기버튼
	$('.work .modal .close_btn').click(function(e){
		e.preventDefault();
		$(this).parent().hide();
		$('body').css({'overflow-y':'auto'});
	});
	
	//gnb버튼 클릭시 스크롤바이동
	$('.m_gnb li').click(function(e){
		e.preventDefault();
		idx2=$(this).index();
		
		if(idx2==0){
			$('html,body').stop().animate({'scrollTop':'0'});
		} else if(idx2==1){
			$('html,body').stop().animate({'scrollTop':'950'});
		} else {
			$('html,body').stop().animate({'scrollTop':'1800'});
		} 
	});
});




