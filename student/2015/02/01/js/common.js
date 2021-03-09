$(document).ready(function(){

	//스크롤시 헤더고정
	$(window).scroll(function(e){
		num=$(this).scrollTop();
		e.preventDefault();	
		if(num>=1000){
			$('#header_wrap_fix').stop().fadeIn(100);
			$('#header_wrap').stop().fadeOut(100);

		} else {
			$('#header_wrap_fix').stop().fadeOut(100);
			$('#header_wrap').stop().fadeIn(100);
		}
	});


	//헤더 quick menu 보이기
	$('.header .ico_wrap .ico_menu .icon3').click(function(e){
		e.preventDefault();
		$('#quick_menu_wrap').fadeIn(300);
	});
	
	$('#quick_menu_wrap').click(function(e){
		$('#quick_menu_wrap').fadeOut(300);
		e.preventDefault();
	});

/*	// 헤더 장바구니클릭시 전체 스크롤바 없앰
	$('.search a, .header_fix .search_btn').click(function(e){
		e.preventDefault();
		
		$('.modal').show();
		$('body').css({'overflow':'hidden'}); //body 스크롤을 없앰
		//blur()메서드는 폼요소에 발생한 포커스이벤트를 없앰
		$('.search input').blur();*/
	
	
	// 폰트색 gnb hover 전체카테고리 
	$('.gnb1, .subwrap_allcate').mouseenter(function(){
		$('.gnb1').css('color','#52b794');
	});
	$('.subwrap_allcate, .gnb1').mouseleave(function(){
		$('.gnb1').css('color','#443e49');
	});

	// 폰트색 gnb hover 다팜소개
	$('.gnb2, .gnb_sub:first, #header_wrap_fix .gnb_sub:first').mouseenter(function(){
		$('.gnb2').css('color','#52b794');
	});	
	$('.gnb2, .gnb_sub:first, #header_wrap_fix .gnb_sub:first').mouseleave(function(){
		$('.gnb2').css('color','#443e49');
	});	

	// 폰트색 gnb hover 상품정보
	$('.gnb3, .gnb_sub.gnbsub3').mouseenter(function(){
		$('.gnb3').css('color','#52b794');
	});	
	$('.gnb3, .gnb_sub.gnbsub3').mouseleave(function(){
		$('.gnb3').css('color','#443e49');
	});	

	// 폰트색 gnb hover 나의농장
	$('.gnb4, .gnb_sub.gnbsub4').mouseenter(function(){
		$('.gnb4').css('color','#52b794');
	});	
	$('.gnb4, .gnb_sub.gnbsub4').mouseleave(function(){
		$('.gnb4').css('color','#443e49');
	});	


	// 하단보더 gnb hover 전체카테고리 
	$('.gnb1, .subwrap_allcate').mouseenter(function(){
		$('.gnb1').css('border-bottom','4px solid #52b794');
	});
	$('.gnb1, .subwrap_allcate').mouseleave(function(){
		$('.gnb1').css('border','none');
	});

	$('.gnb1, .subwrap_allcate').mouseenter(function(){
		$('.gnb1').css('border-bottom','4px solid #52b794');
	});
	$('.gnb1, .subwrap_allcate').mouseleave(function(){
		$('.gnb1').css('border','none');
	});

	// 하단보더 gnb hover 다팜소개
	$('.gnb2, .gnb_sub:first, #header_wrap_fix .gnb_sub:first').mouseenter(function(){
		$('.gnb2').css('border-bottom','4px solid #52b794');
	});
	$('.gnb2, .gnb_sub:first, #header_wrap_fix .gnb_sub:first').mouseleave(function(){
		$('.gnb2').css('border','none');
	});

	$('.gnb2, .gnb_sub:first, #header_wrap_fix .gnb_sub:first').mouseenter(function(){
		$('.gnb2').css('border-bottom','4px solid #52b794');
	});
	$('.gnb2, .gnb_sub:first, #header_wrap_fix .gnb_sub:first').mouseleave(function(){
		$('.gnb2').css('border','none');
	});

	// 하단보더 gnb hover 상품정보
	$('.gnb3, .gnb_sub.gnbsub3').mouseenter(function(){
		$('.gnb3').css('border-bottom','4px solid #52b794');
	});
	$('.gnb3, .gnb_sub.gnbsub3').mouseleave(function(){
		$('.gnb3').css('border','none');
	});

	$('.gnb3, .gnb_sub.gnbsub3').mouseenter(function(){
		$('.gnb3').css('border-bottom','4px solid #52b794');
	});
	$('.gnb3, .gnb_sub.gnbsub3').mouseleave(function(){
		$('.gnb3').css('border','none');
	});

	// 하단보더 gnb hover 나의농장
	$('.gnb4, .gnb_sub.gnbsub4').mouseenter(function(){
		$('.gnb4').css('border-bottom','4px solid #52b794');
	});
	$('.gnb4, .gnb_sub.gnbsub4').mouseleave(function(){
		$('.gnb4').css('border','none');
	});

	$('.gnb4, .gnb_sub.gnbsub4').mouseenter(function(){
		$('.gnb4').css('border-bottom','4px solid #52b794');
	});
	$('.gnb4, .gnb_sub.gnbsub4').mouseleave(function(){
		$('.gnb4').css('border','none');
	});

	// 하단보더 gnb hover 싱싱팜(SINGSING FARM)
	$('.last_gnb, .gnb_sub.gnbsub5').mouseenter(function(){
		$('.last_gnb').css('border-bottom','4px solid #52b794');
	});
	$('.last_gnb, .gnb_sub.gnbsub5').mouseleave(function(){
		$('.last_gnb').css('border','none');
	});

	$('.last_gnb, .gnb_sub.gnbsub5').mouseenter(function(){
		$('.last_gnb').css('border-bottom','4px solid #52b794');
	});
	$('.last_gnb, .gnb_sub.gnbsub5').mouseleave(function(){
		$('.last_gnb').css('border','none');
	});



	//전체카테고리 서브메뉴 보이기
	$('.gnb1').mouseenter(function(){
		$('.subwrap_allcate').stop().slideDown(200);
	});
	$('.gnb1').mouseleave(function(){
		$('.subwrap_allcate').stop().slideUp(200);
	});	
	$('.subwrap_allcate').mouseenter(function(){
		$('.subwrap_allcate').stop().slideDown(200);
	});
	$('.subwrap_allcate').mouseleave(function(){
		$('.subwrap_allcate').stop().slideUp(200);
	});	
	
	//서브 '다팜소개' 메뉴 보이기
	$('.gnb2').mouseenter(function(){
		$('.gnb_sub:first, #header_wrap_fix .gnb_sub:first').stop().slideDown(200);
	});
	$('.gnb2').mouseleave(function(){
		$('.gnb_sub:first, #header_wrap_fix .gnb_sub:first').stop().slideUp(200);
	});	
	$('.gnb_sub:first, #header_wrap_fix .gnb_sub:first').mouseenter(function(){
		$('.gnb_sub:first, #header_wrap_fix .gnb_sub:first').stop().slideDown(200);
	});
	$('.gnb_sub:first, #header_wrap_fix .gnb_sub:first').mouseleave(function(){
		$('.gnb_sub:first, #header_wrap_fix .gnb_sub:first').stop().slideUp(200);
	});	

	// 서브 '상품정보' 메뉴보이기
	$('.gnb3').mouseenter(function(){
		$('.gnb_sub.gnbsub3').stop().slideDown(200);
	});
	$('.gnb3').mouseleave(function(){
		$('.gnb_sub.gnbsub3').stop().slideUp(200);
	});	
	$('.gnb_sub.gnbsub3').mouseenter(function(){
		$('.gnb_sub.gnbsub3').stop().slideDown(200);
	});
	$('.gnb_sub.gnbsub3').mouseleave(function(){
		$('.gnb_sub.gnbsub3').stop().slideUp(200);
	});	

	// 서브 '나의농장' 메뉴보이기
	$('.gnb4').mouseenter(function(){
		$('.gnb_sub.gnbsub4').stop().slideDown(200);
	});
	$('.gnb4').mouseleave(function(){
		$('.gnb_sub.gnbsub4').stop().slideUp(200);
	});	
	$('.gnb_sub.gnbsub4').mouseenter(function(){
		$('.gnb_sub.gnbsub4').stop().slideDown(200);
	});
	$('.gnb_sub.gnbsub4').mouseleave(function(){
		$('.gnb_sub.gnbsub4').stop().slideUp(200);
	});	

	// 서브 'SING SING FARM' 메뉴보이기
	$('.last_gnb').mouseenter(function(){
		$('.gnb_sub.gnbsub5').stop().slideDown(200);
	});
	$('.last_gnb').mouseleave(function(){
		$('.gnb_sub.gnbsub5').stop().slideUp(200);
	});	
	$('.gnb_sub.gnbsub5').mouseenter(function(){
		$('.gnb_sub.gnbsub5').stop().slideDown(200);
	});
	$('.gnb_sub.gnbsub5').mouseleave(function(){
		$('.gnb_sub.gnbsub5').stop().slideUp(200);
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


	//장바구니버튼 hover
	$('#quick_cart_wrap .order1').mouseenter(function(){
		$(this).css('color','white');
		$(this).css('background-color','#52b794');
		$('#quick_cart_wrap .order2').css('color','#443e49');
		$('#quick_cart_wrap .order2').css('background-color','#fafafa');
	});
	$('#quick_cart_wrap .order1').mouseleave(function(){
		$(this).css('color','#443e49');
		$(this).css('background-color','#fafafa');
		$('#quick_cart_wrap .order2').css('color','white');
		$('#quick_cart_wrap .order2').css('background-color','#52b794');
	});

	//바로주문버튼 hover
	$('#quick_cart_wrap .order2').mouseenter(function(){
		$(this).css('color','white');
		$(this).css('background-color','#52b794');
	});


	//quick 장바구니 오픈
	$('#header_wrap .icon2, #header_wrap_fix .icon2').click(function(e){
		e.preventDefault();
		$('#quick_cart_wrap').animate({'right':'0'});
		$('.quick_cart_firstwrap .cart_bg_left').fadeIn(200);
		$('.left_prod a').hide();
		$('body').css({'overflow':'hidden'});
	});

	$('.quick_cart_firstwrap .cart_bg_left a').click(function(e){
		e.preventDefault();
		$('#quick_cart_wrap').animate({'right':'-430px'});
		$('.quick_cart_firstwrap .cart_bg_left').fadeOut(200);
		$('body').css({'overflow':'auto'});
	});


	// 장바구니 제품 hover기능 
	var sw=0;
	$('.cart_prod_wrap .cart_prod').click(function(e){
		e.preventDefault();	
		if(sw==0) {
			$(this).addClass('on');

			sw=1;
		} else {
			$(this).removeClass('on');
			sw=0;
		}
	});

	//장바구니 자세히보기 버튼
	$('.cart_prod').click(function(e){
		e.preventDefault();		
		$('.left_prod a').stop().fadeIn();
	});


	// 탑이동버튼
	$(".footer .top_btn").click(function() {
	    $("body,html").animate({scrollTop: $('#main').offset().top}, 1000,'easeInOutCubic');
	    return false;
	});	


});