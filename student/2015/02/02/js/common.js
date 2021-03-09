$(function(){
// 헤더 팝업 검색창 띄우기
	var sw=0;

	$('.search_btn').click(function(e){
		e.preventDefault();
		if(sw==0){
			$('.search').show();
			$('.header_fix h1, .header h1').hide();
		sw=1;
		} else {
			$('.search').hide();
			$('.header_fix h1, .header h1').show();
		sw=0;
		}		
	});

	$('.close_btn').click(function(e){
		e.preventDefault();
		$('.search').hide();
		$('.header_fix h1, .header h1').show();
		sw=0;
	});



	//헤더 검색창 포커스이벤트
	var placeholderTarget = $('.search input[type="text"]');
  
	//포커스시
	placeholderTarget.on('focus', function(){
	  $(this).siblings('label').fadeOut('fast');
	});

	//포커스아웃시
	placeholderTarget.on('focusout', function(){
	  if($(this).val() == ''){
	    $(this).siblings('label').fadeIn('fast');
	  }
	});


	// gnb 클릭시 화살표 hover
	$('.gnb a').click(function(){
		$('.gnb a').removeClass('on')
		$(this).addClass('on')
	});




	//다른메뉴클릭 후 다시 변수 초기화해서 gnb1 클릭하면 카테고리 팝업이 나오도록
	$('.gnb2').click(function(){
		$('.popup_cate').hide();
		sw2=0;
	});


	//팝업:좌측메뉴보이기
	var sw3=0;

	$('.menu_btn, .m_close').click(function(e){
		e.preventDefault();
		if(sw3==0){
			$('.popup_menu').animate({'left':'0'},300);
			$('.popup_menu_wrap').animate({'left':'296px'},300);
			$('body').css({'overflow':'hidden'});
			$('.popup_menu_wrap .cover').fadeIn();
		sw3=1;			
		} else {
			$('.popup_menu').animate({'left':'-296px'},300);
			$('.popup_menu_wrap').animate({'left':'0px'},300,function(){
				$('body').css({'overflow':'auto'});
				$('.popup_menu_wrap .cover').fadeOut();
			});	
		sw3=0;		
		}
	});	


	// gnb팝업메뉴:카테고리 클릭시 나타내기 & 좌측메뉴 전체카테고리
	var sw2=0;

	$('.gnb1, .m_acco>ul>li>a.acco1').click(function(e){
		e.preventDefault();
		if(sw2==0){
			$('.popup_menu').animate({'left':'-296px'},300);
			$('.popup_menu_wrap').animate({'left':'0px'},300,function(){
				$('body').css({'overflow':'auto'});
				$('.popup_menu_wrap .cover').fadeOut();
			});	
			$('.popup_cate').slideDown();

		sw2=1;
		sw3=0;
		} else {
		$('.popup_cate').slideUp();

		sw2=0;
		}
	});	




	// 팝업좌측메뉴:아코디언메뉴 클릭시 서브보이기
/*	var sw3=0;
	$('.m_acco>ul>li:gt(0)').click(function(){
		var num=$(this).index();

		if(sw3==0){
			$('.m_acco>ul>li>ul').eq(num-1).slideDown(200);

		sw3=1;
		} else {
		$('.m_acco>ul>li>ul').eq(num-1).slideUp(200);

		sw3=0;
		}
	});	*/


/*	$('.m_acco>ul>li:gt(0)').click(function(e){
		e.preventDefault();
		var num=$(this).index();

		if($(this).hasClass($('.m_acco>ul>li>ul').eq(num-1).slideUp(200))!=false){
			$('.m_acco>ul>li>ul').eq(num-1).slideDown(200);

		} else {
			$('.m_acco>ul>li>ul').eq(num-1).slideDown(200);
			$('.m_acco>ul>li>ul').eq(num-1).slideUp(200);

		}
	});	*/


	//팝업 메뉴:아코디언메뉴 펼치기
	$('.m_acco>ul>li>a').click(function(e){
		e.preventDefault();
		$(this).find("+ul").slideToggle().end().parent().parent().find('ul:visible').not(
		$(this).find("+ul")).slideUp();
		return false;
	});	




	// 팝업:카트팝업 열기 이벤트
	var sw6=0;

	$('.m_cart_btn, .c_close').click(function(e){
		e.preventDefault();
		if(sw6==0){
			$('.popup_cart_wrap .swipe').fadeIn();
			$('.popup_cart').animate({'right':'0'},300);
			$('.popup_cart_wrap').animate({'right':'296px'},300);
			$('body').css({'overflow':'hidden'});
			$('.popup_cart_wrap .cover').fadeIn();

		sw6=1;			
		} else {
			$('.popup_cart').animate({'right':'-296px'},300);
			$('.popup_cart_wrap').animate({'right':'0px'},300,function(){
				$('body').css({'overflow':'auto'});
				$('.popup_cart_wrap .cover').fadeOut();
			});	

		sw6=0;		
		}
	});	


	// 카트:스와이프팝업 닫기
	$('.s_cancel, .popup_cart_wrap .swipe').click(function(e){
		e.preventDefault();
		$('.popup_cart_wrap .swipe').fadeOut();
	});


	//카트 전체선택
	var sw4=0;

	$('.cart_top .all_check').click(function(e){
		e.preventDefault();

		if(sw4==0){
			$('.cart_top a>span').addClass('on');
			$('.cart_prod .ct_prod1').addClass('on');
		sw4=1;
		} else {
			$('.cart_top a>span').removeClass('on');
			$('.cart_prod .ct_prod1').removeClass('on');

		sw4=0;
		}
	});	

	//팝업:카트 제품클릭시 색바뀜 (중복선택)
	$('.cart_prod .ct_prod1').click(function(e){
		e.preventDefault();

		if($(this).hasClass('on')!=true) {
			$(this).addClass('on');

		} else {
			$(this).removeClass('on');
		}

	$(this).draggable();	
	});




	//카트 하단 주문,장바구니 버튼클릭효과
	$('.cart_btn').click(function(){
		$(this).css({'background':'#50b693'});
		$(this).css({'color':'#fff'});
		$('.order_btn').css({'background':'#fff'});
		$('.order_btn').css({'color':'#443e49'});
	});
	$('.order_btn').click(function(){
		$(this).css({'background':'#50b693'});
		$(this).css({'color':'#fff'});
		$('.cart_btn').css({'background':'#fff'});
		$('.cart_btn').css({'color':'#443e49'});
	});




	//고정 top이동버튼
	$(".topfix_btn").click(function() {
	    $("body,html").animate({scrollTop: $('#main .main1').offset().top}, 1000,'easeInOutCubic');
	    return false;
	});		




});