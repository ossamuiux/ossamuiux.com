$(document).ready(function(){
	
	/*PC에서 gnb에 hover시 sub메뉴 보이기*/
	$('.gnb_wrap .gnb').mouseenter(function(){
		$('.gnb_wrap').stop().animate({'height':'250px'},300);
		$('.gnb .sub').stop().slideDown(300);
	});
	
	/*PC에서 gnb에 마우스 빼면 sub메뉴 가리기*/
	$('.gnb_wrap').mouseleave(function(){
		$('.gnb_wrap').stop().animate({'height':'48px'},300);
		$('.gnb .sub').stop().slideUp(300);
	});
	
	/*모바일 메뉴 버튼 클릭시 m_gnb 보이기*/
	$('.m_btn').click(function(){
		$('.m_gnb_wrap').stop().animate({'left':'0'},300);
		$('.wrap_hide').css({'overflow-y':'hidden'});
		$('.wrap_hide .cover').stop().fadeIn(300);
	});
	
	/*모바일 메뉴 닫기 버튼 클릭시 m_gnb 가리기*/
	$('.m_gnb_wrap .close_btn').click(function(){
		$('.m_gnb_wrap').stop().animate({'left':'-80%'},300);
		$('.wrap_hide').css({'overflow-y':'auto'});
		$('.wrap_hide .cover').stop().fadeOut(300);
	});
	
	//메인 슬라이더
	$('.slider').slick({
		dots:true,
		autoplay:true,
		cssEase:'ease-out',
		pauseOnHover:false,
		fade:true,
		arrows:false
	});
	
	//서브 슬라이더
	$('.slider2').slick({
		dots:false,
		autoplay:true,
		cssEase:'ease-out',
		pauseOnHover:false,
		arrows:false,
	});
	
	//뉴스 슬라이더
	$('.slider3').slick({
		dots:true,
		autoplay:false,
		cssEase:'ease-out',
		pauseOnHover:false,
		fade:true,
		arrows:false
	});
	
	$('.slider3 .txt span').dotdotdot({
		ellipsis: '... ',
	});
	
	//창크기에 맞게 news 슬라이더 이미지 변경
	if ($(window).width()<=1007) {//타블렛용 이미지
		$('.slider3 .banner1 .news_img').attr('src','img/banner01.jpg');
		$('.slider3 .banner2 .news_img').attr('src','img/banner02.jpg');
		$('.slider3 .banner3 .news_img').attr('src','img/banner03.jpg');
		$('.slider3 .banner4 .news_img').attr('src','img/banner04.jpg');
		$('.slider3 .banner5 .news_img').attr('src','img/banner05.jpg');
		$('.section3 .investor .investor_bg').attr('src','img/chart.jpg');
	} else {//PC용 이미지
		$('.slider3 .banner1 .news_img').attr('src','img/banner01_pc.jpg');
		$('.slider3 .banner2 .news_img').attr('src','img/banner02_pc.jpg');
		$('.slider3 .banner3 .news_img').attr('src','img/banner03_pc.jpg');
		$('.slider3 .banner4 .news_img').attr('src','img/banner04_pc.jpg');
		$('.slider3 .banner5 .news_img').attr('src','img/banner05_pc.jpg');
		$('.section3 .investor .investor_bg').attr('src','img/chart1.jpg');
	}
	
	//window resize 이벤트
	$(window).resize(function(){
		$('.m_gnb_wrap').stop().animate({'left':'-80%'},0);
		$('.wrap .cover').hide();
		
		//창크기에 맞게 news 슬라이더 이미지 변경
		if ($(window).width()<=1007) {//타블렛용 이미지
			$('.slider3 .banner1 .news_img').attr('src','img/banner01.jpg');
			$('.slider3 .banner2 .news_img').attr('src','img/banner02.jpg');
			$('.slider3 .banner3 .news_img').attr('src','img/banner03.jpg');
			$('.slider3 .banner4 .news_img').attr('src','img/banner04.jpg');
			$('.slider3 .banner5 .news_img').attr('src','img/banner05.jpg');
			$('.section3 .investor .investor_bg').attr('src','img/chart.jpg');
		} else {//PC용 이미지
			$('.slider3 .banner1 .news_img').attr('src','img/banner01_pc.jpg');
			$('.slider3 .banner2 .news_img').attr('src','img/banner02_pc.jpg');
			$('.slider3 .banner3 .news_img').attr('src','img/banner03_pc.jpg');
			$('.slider3 .banner4 .news_img').attr('src','img/banner04_pc.jpg');
			$('.slider3 .banner5 .news_img').attr('src','img/banner05_pc.jpg');
			$('.section3 .investor .investor_bg').attr('src','img/chart1.jpg');
		}
		
		$('.slider3 .txt span').dotdotdot({
			ellipsis: '... ',
		});
		
	});
	
	var num=0;
	//계열사 그룹 클릭시 팝업 띄우기
	$('.footer_menu_wrap .group').click(function(e){
		e.preventDefault();
		
		if (num==0) {
			$(this).find('.company').show();
			$(this).find('a').addClass('on');
			num=1;
		} else {
			$(this).find('.company').hide();
			$(this).find('a').removeClass('on');
			num=0;
		}
	});
	
	//계열사 그룹 팝업에서 포커스 아웃시 창 닫기
	$('.footer_menu_wrap .group').focusout(function(){
		$(this).find('.company').hide();
		$(this).find('a').removeClass('on');
		num=0;
	});
	
	//스크롤 내려갈시 top_btn 보이기
	$(window).scroll(function(){
		var scr=$(this).scrollTop();
		
		if (scr>=100) {
			$('.top_btn').fadeIn(300);
		} else {
			$('.top_btn').fadeOut(300);
		}
	});
	
	//top_btn 클릭시 스크롤 맨위로
	$('.top_btn').click(function(e){
		e.preventDefault();
		$('html,body').stop().animate({'scrollTop':'0'},300);
	});
	
	
		
});