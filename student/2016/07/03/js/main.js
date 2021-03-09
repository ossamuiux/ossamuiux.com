$(document).ready(function(){
	//타블릿 사이즈(미디어쿼리분기점 -17px(스크롤바가로길이))
	//이미지 교체
	if($(window).width()<=1007 && $(window).width()>750){//타블릿용 이미지
		$('.section2 .card3').attr('src','img/visual_card_tablet.gif');
		$('.section6 .point img').attr('src','img/con_point_t.gif');
		} else if ($(window).width()<=750) {//모바일용 이미지
			$('.section2 .card3').attr('src','img/visual_card_m.gif');
			$('.section6 .point img').attr('src','img/con_point_t.gif');
		} else {//pc용 이미지
			$('.section2 .card3').attr('src','img/visual_card.gif');
			$('.section6 .point img').attr('src','img/con_point.gif');
		}
		
		$(window).resize(function(){
			if($(window).width()<=1007 && $(window).width()>750){
				$('.section2 .card3').attr('src','img/visual_card_tablet.gif');
				$('.section6 .point img').attr('src','img/con_point_t.gif');
			} else if ($(window).width()<=750) {//모바일용 이미지
				$('.section2 .card3').attr('src','img/visual_card_m.gif');
				$('.section6 .point img').attr('src','img/con_point_t.gif');
			} else {//pc용 이미지
				$('.section2 .card3').attr('src','img/visual_card.gif');
				$('.section6 .point img').attr('src','img/con_point.gif');
		}
	});
	//창크기 조절시 메뉴 안보이게
	$(window).resize(function(){
		$('.gnb_wrap .gnb_btn').removeClass('on');
		$('.gnb_wrap .gnb').hide();
		sw=1;
		$('.gnb_wrap .m_gnb').hide();
		$('.header .cover').hide();
		$('.gnb_wrap .m_search_btn').removeClass('on');
		$('.gnb_wrap .m_search').hide();
		sw2=1;
		$('.footer_right .family').removeClass('on');
		$('.footer_right .familysite').hide();
		$('.footer_right .line').hide();
		sw3=1;
		$('.footer_right .group').removeClass('on');
		$('.footer_right .groupsite_wrap').hide();
		$('.footer_right .line2').hide();
		sw4=1;
		$('.gnb_wrap .t_subwrap .slide_up').slideUp();
		$('.gnb_wrap .t_subwrap .t_sub').slideUp();
		$('.t_gnb .t_menu a').removeClass('on');
		$('.gnb_wrap .t_subwrap .t_sub a').removeClass('on');
	});
	//팝업 닫기
	$('.popup_wrap .p_close').click(function(e){
	e.preventDefault();
	
	$('.popup_wrap').slideUp();
	});
	//gnb메뉴클릭
	var sw=1;
	$('.gnb_wrap .gnb_btn').click(function(e){
		e.preventDefault();
	
		if(sw==1){
			$(this).addClass('on');
			$('.gnb_wrap .gnb').slideDown();
			sw=0;
		} else {
			$(this).removeClass('on');
			$('.gnb_wrap .gnb').slideUp();
			sw=1;
		}
	});
	//섹션5:플레이,멈춤
	var num1=1;
	$('.section5 .s1_btn .pause_btn').click(function(e){
		e.preventDefault();
	
		if(num1==1){
			$(this).addClass('on');
			$('.slider1_wrap').slick('slickPause')
			num1=0;
		} else {
			$(this).removeClass('on');
			$('.slider1_wrap').slick('slickPlay')
			num1=1;
		}
	});
	//섹션7:플레이,멈춤
	var num2=1;
	$('.section7 .s2_btn .pause_btn').click(function(e){
		e.preventDefault();
	
		if(num2==1){
			$(this).addClass('on');
			$('.slider2_wrap').slick('slickPause')
			num2=0;
		} else {
			$(this).removeClass('on');
			$('.slider2_wrap').slick('slickPlay')
			num2=1;
		}
	});
	//섹션8:플레이,멈춤
	var num3=1;
	$('.section8 .s3_btn .pause_btn').click(function(e){
		e.preventDefault();
	
		if(num3==1){
			$(this).addClass('on');
			$('.slider3_wrap').slick('slickPause')
			num3=0;
		} else {
			$(this).removeClass('on');
			$('.slider3_wrap').slick('slickPlay')
			num3=1;
		}
	});
	//섹션9:플레이,멈춤
	var num4=1;
	$('.section9 .s3_btn .pause_btn').click(function(e){
		e.preventDefault();
	
		if(num4==1){
			$(this).addClass('on');
			$('.slider4_wrap').slick('slickPause')
			num4=0;
		} else {
			$(this).removeClass('on');
			$('.slider4_wrap').slick('slickPlay')
			num4=1;
		}
	});
	//섹션10:플레이,멈춤
	var num5=1;
	$('.section10 .s3_btn .pause_btn').click(function(e){
		e.preventDefault();
	
		if(num5==1){
			$(this).addClass('on');
			$('.slider5_wrap').slick('slickPause')
			num5=0;
		} else {
			$(tis).removeClass('on');
			$('.slider5_wrap').slick('slickPlay')
			num5=1;
		}
	});
	//섹션5_t(타블렛,모바일):현대카드 금융(플레이,멈춤)
	var num6=1;
	$('.section5_t .s1_btn_t .pause_btn').click(function(e){
		e.preventDefault();
	
		if(num6==1){
			$(this).addClass('on');
			$('.slider1_wrap_t').slick('slickPause')
			num6=0;
		} else {
			$(this).removeClass('on');
			$('.slider1_wrap_t').slick('slickPlay')
			num6=1;
		}
	});
	//t_gnb메뉴클릭시 각 메뉴 매칭
	$('.gnb_wrap .t_subwrap .t_sub').hide();
	$('.gnb_wrap .t_subwrap .slide_up').hide();
	var num;
	
	$('.t_gnb .t_menu').click(function(e){
		e.preventDefault();
		num=$(this).index();
		 
		 console.log(num);
		$('.t_gnb .t_menu a').removeClass('on');
		$(this).find('a').addClass('on');
		$('.gnb_wrap .t_subwrap .slide_up').slideDown();
		$('.gnb_wrap .t_subwrap .t_sub').hide();
		$('.gnb_wrap .t_subwrap .t_sub').eq(num).slideDown();
	});
	//.t_subwrap .slide_up 클릭시 써브메뉴 슬라이드업
    $('.gnb_wrap .t_subwrap .slide_up').click(function(e){
		e.preventDefault();
		
		$(this).slideUp();
		$('.gnb_wrap .t_subwrap .t_sub').slideUp();
		$('.t_gnb .t_menu a').removeClass('on');
		$('.gnb_wrap .t_subwrap .t_sub a').removeClass('on');
	});
	//.t_subwrap .t_sub메뉴 클릭시 on 클래스 추가
	$('.gnb_wrap .t_subwrap .t_sub a').click(function(e){
		e.preventDefault();
		
		$('.gnb_wrap .t_subwrap .t_sub a').removeClass('on');
		$(this).addClass('on');
	});
	//section7_t:플레이,멈춤
	var num6=1;
	$('.section7_t .s2_btn_t .pause_btn').click(function(e){
		e.preventDefault();
	
		if(num6==1){
			$(this).addClass('on');
			$('.slider2_wrap_t').slick('slickPause')
			num6=0;
		} else {
			$(this).removeClass('on');
			$('.slider2_wrap_t').slick('slickPlay')
			num6=1;
		}
	});
	//section8_t:플레이,멈춤
	var num7=1;
	$('.section8_t .s3_btn_t .pause_btn').click(function(e){
		e.preventDefault();
	
		if(num7==1){
			$(this).addClass('on');
			$('.slider3_wrap_t').slick('slickPause')
			num7=0;
		} else {
			$(this).removeClass('on');
			$('.slider3_wrap_t').slick('slickPlay')
			num7=1;
		}
	});
	//section11_t 글자 클릭시 on 클래스 추가
	$('.main .grid .section11_t a').click(function(e){
		e.preventDefault();
		
		$('.main .grid .section11_t a').removeClass('on');
		$(this).addClass('on');
	});
    //m_gnb메뉴클릭
	$('.gnb_wrap .m_btn').click(function(e){
		e.preventDefault();
	
		$('.gnb_wrap .m_gnb').show();
		$('.wrap').css({'overflow-y':'hidden'});
		$('.header .cover').fadeIn();
		$('.gnb_wrap .m_search_btn').removeClass('on');
		$('.gnb_wrap .m_search').hide();
		sw2=1;
	});
	//m_gnb메뉴 닫기
	$('.gnb_wrap .m_gnb .m_close').click(function(e){
		e.preventDefault();
		
		$('.gnb_wrap .m_gnb').hide();
		$('.wrap').css({'overflow-y':'auto'});
		$('.header .cover').fadeOut();
		$('.m_gnb .m_con .m_sub li a').removeClass('on');
	});
	//m_gnb메뉴 클릭시 효과
	$('.m_gnb .m_con .m_sub li a').click(function(e){
		e.preventDefault();
		
		$('.m_gnb .m_con .m_sub li a').removeClass('on');
		$(this).addClass('on');
	});
	//모바일 검색 버튼 클릭
	var sw2=1;
	$('.gnb_wrap .m_search_btn').click(function(e){
		e.preventDefault();
		
		if(sw2==1){
			$(this).addClass('on');
			$('.gnb_wrap .m_search').show();
			sw2=0;
		} else {
			$(this).removeClass('on');
			$('.gnb_wrap .m_search').hide();
			sw2=1;
		}
	});
	//푸터 패밀리사이트 버튼 클릭
	var sw3=1;
	$('.footer_right .family').click(function(e){
		e.preventDefault();
		
		if(sw3==1){
			$(this).addClass('on');
			$('.footer_right .familysite').show();
			$('.footer_right .line').show();
			$('.familysite .list a').removeClass('on');
			$('.footer_right .group').removeClass('on');
			$('.groupsite_wrap .groupsite .g_txt a').removeClass('on');
			$('.footer_right .groupsite_wrap').hide();
			$('.footer_right .line2').hide();	
			sw3=0;
			sw4=1;
		} else {
			$(this).removeClass('on');
			$('.footer_right .familysite').hide();
			$('.footer_right .line').hide();
			sw3=1;
		}
	});
	//푸터 그룹사사이트 버튼 클릭
	var sw4=1;
	$('.footer_right .group').click(function(e){
		e.preventDefault();
		
		if(sw4==1){
			$(this).addClass('on');
			$('.footer_right .groupsite_wrap').show();
			$('.footer_right .line2').show();
			$('.footer_right .family').removeClass('on');
			$('.familysite .list a').removeClass('on');
			$('.groupsite_wrap .groupsite .g_txt a').removeClass('on');
			$('.footer_right .familysite').hide();
			$('.footer_right .line').hide();
			sw4=0;
			sw3=1;
		} else {
			$(this).removeClass('on');
			$('.footer_right .groupsite_wrap').hide();
			$('.footer_right .line2').hide();
			sw4=1;
		}
	});
	//푸터 패밀리사이트 리스트 클릭시 on 클래스 추가
	$('.familysite .list a').click(function(e){
		e.preventDefault();
		
		$('.familysite .list a').removeClass('on');
		$(this).addClass('on');
	});
	//푸터 그룹사사이트 리스트 클릭시 on 클래스 추가
	$('.groupsite_wrap .groupsite .g_txt a').click(function(e){
		e.preventDefault();
		
		$('.groupsite_wrap .groupsite .g_txt a').removeClass('on');
		$(this).addClass('on');
	});
});