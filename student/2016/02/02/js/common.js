$(document).ready(function(){
	
	//**모바일버튼 클릭하면 모바일메뉴나오기**
	$('.m_btn').click(function(){
		$('#cover').show();
		$('.m_gnb').animate({left:'0'}, 300);
		$('.wrap').css('overflow','hidden'); //바디에스크롤바 숨기기(바디, 모바일 메뉴둘다 스크롤바 생성되어 있기때문)
	});
		
	$('.btn_close, #cover').click(function(){
		$('#cover').hide();
		$('.m_gnb').animate({left:'-300px'}, 300);	
		$('.wrap').css('overflow','auto'); //바디에스크롤바 보이기
	});
	
//**gnb 2단메뉴 슬라이드로 보이기**
	
    $('.gnb>li').on('mouseenter',function(){
		$(this).find('.depth2').stop().show();	
	});
	
	$('.gnb>li').on('mouseleave',function(){
		$(this).find('.depth2').stop().hide();		
	});	
	
	//**모바일 아코디언 메뉴**
	$('.m_gnb .m_menu>li').click(function(){
		//클릭시 모든 on클래스 제거
		$('.m_gnb .m_menu>li>a').removeClass('on');
		// li 클릭 시 서브메뉴 모두 닫기
		$('.m_gnb .m_menu .m_depth2').stop().slideUp();
		
		if($(this).find('.m_depth2').css('display')=='none'){
			$(this).find('>a').addClass('on'); //메뉴닫힐시 화살표 on
			$(this).find('.m_depth2').stop().slideDown();
		} else {
			$(this).find('.m_depth2').stop().slideUp();
		}
	});


});









