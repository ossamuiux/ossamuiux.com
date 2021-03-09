$(document).ready(function(){
	var sw=true;//슬라이더 플레이버튼

	//gnb슬라이드 메뉴내려오기
	$('.gnb_inner .gnb_menu').mouseenter(function(){
		$('.header .slide_menu').stop().slideDown(400);
	});
	//gnb슬라이드 메뉴올라가기
	$('.gnb_inner .gnb_menu').mouseleave(function(){
		$('.header .slide_menu').stop().slideUp(400);
	});
	//메뉴쪽에 마우스 올려놓아도 슬라이드 업 되지 않게 방지
	$('.header .slide_menu').mouseenter(function(){
		$('.header .slide_menu').stop().slideDown(400);
	});
	$('.header .slide_menu').mouseleave(function(){
		$('.header .slide_menu').stop().slideUp(400);
	});
	
	//메인슬라이더	
	$('.main_slide .visual').slick({
		fade:true,
		 dots:true,//페이지버튼
		 autoplay: true,//자동실행
		 pauseOnHover:false,//마우스올렸을때 멈춤기능
		 autoplaySpeed:3000,//슬라이드 간격(시간) (1000=1초, 기본값 : 3000)
		 speed:700,//애니메이션 속도(기본값 300)
		 swipe:false,//pc 마우스 드래그 이동, 모바일 손으로 쓸어넘기는 기능
		 slide:'div',//슬라이드로 사용할 엘리먼트 지정
		arrows:false
	});

	//페이지 버튼을 누를 시 pause버튼으로 바뀌기
	$('.visual .slick-dots li button').click(function(){
		
		$(this).addClass('on');
		$('.visual').slick('slickPause');//슬라이드 자동실행 일시정지
		$('.visual .btn_play').addClass('on');
		
		sw=false;//간단하게 플레이는true, 일시정지는 false라고 생각을 하면 페이지 버튼을 눌렀을때 일시정지가 되므로 false로 바뀌어야된다. 그래야 페이지버튼을 누르고 플레이 버튼을 눌렀을 때 else로 넘어가면서 자동재생이 된다.
	});

	//플레이버튼 on, 위에 false로 바꿔주기 때문에 true가 아니라 false로 바뀜
	$('.visual .btn_play').click(function(){

		if(sw==true){
			$(this).addClass('on');
			$('.visual').slick('slickPause');//슬라이드 자동실행 일시정지
		} else {
			$(this).removeClass('on');	
			$('.visual').slick('slickPlay');//슬라이드 자동실행
		}
		
		sw=!sw;
		console.log(sw);
	});
	
	//리뷰슬라이더	
	$('.moment_slide .ui_moment').slick({
		fade:true,
		 dots:true,//페이지버튼
		 autoplay: true,//자동실행
		 pauseOnHover:false,//마우스올렸을때 멈춤기능
		 autoplaySpeed:6000,//슬라이드 간격(시간) (1000=1초, 기본값 : 3000)
		 speed:700,//애니메이션 속도(기본값 300)
		 swipe:false,//pc 마우스 드래그 이동, 모바일 손으로 쓸어넘기는 기능
		 slide:'li',//슬라이드로 사용할 엘리먼트 지정
		arrows:false
	});
	//리뷰슬라이더	 페이지 버튼을 누를 시 pause버튼으로 바뀌기
	$('.moment_slide .slick-dots li button').click(function(){
		$(this).addClass('on');
		$('.ui_moment').slick('slickPause');//슬라이드 자동실행 일시정지
		$('.ui_moment .btn_play').addClass('on');

		sw=false;
	});
	//플레이버튼 on, 위에 false로 바꿔주기 때문에 true가 아니라 false로 바뀜
	$('.moment_slide .ui_moment .btn_play').click(function(){
		if(sw==true){
			$(this).addClass('on');
			$('.ui_moment').slick('slickPause');//슬라이드 자동실행 일시정지
		} else {
			$(this).removeClass('on');	
			$('.ui_moment').slick('slickPlay');//슬라이드 자동실행
		}
		
		sw=!sw;
	});

	//product 슬라이더
	$('.shop .shop_slide').slick({
		fade:true,
		 dots:true,//페이지버튼
		 autoplay: true,//자동실행
		 pauseOnHover:false,//마우스올렸을때 멈춤기능
		 autoplaySpeed:3000,//슬라이드 간격(시간) (1000=1초, 기본값 : 3000)
		 speed:700,//애니메이션 속도(기본값 300)
		 swipe:false,//pc 마우스 드래그 이동, 모바일 손으로 쓸어넘기는 기능
		 slide:'li',//슬라이드로 사용할 엘리먼트 지정
		arrows:false
	});
	
	//product 슬라이더 텍스트 움직임
	//처음실행
	$('.text_box>.text_in').animate({marginLeft:0},300);
	
	//슬라이드 2번째 부터 실행
	$('.shop .shop_slide').on('afterChange', function(event, slick, currentSlide, nextSlide){
	 //console.log(nextSlide);
	 	$('.text_box>.text_in').animate({marginLeft:0},300);
	});
	
	//페이지 버튼 누를 시에도 실행 가능 하도록 margin-left:0 이었던 텍스트를 다시 내보넴
	$('.shop .shop_slide').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	 //console.log(nextSlide);
	 	$('.text_box>.text_in').css({marginLeft:-150});
	});
	
	//product 슬라이더	 페이지 버튼을 누를 시 pause버튼으로 바뀌기
	$('.shop .shop_slide li button').click(function(){
		$(this).addClass('on');
		$('.shop_slide').slick('slickPause');//슬라이드 자동실행 일시정지
		$('.shop_slide .btn_play').addClass('on');

		sw=false;
	});
	
	//플레이버튼 on, 위에 false로 바꿔주기 때문에 true가 아니라 false로 바뀜
	$('.shop .shop_slide .btn_play').click(function(){
		if(sw==true){
			$(this).addClass('on');
			$('.shop_slide').slick('slickPause');//슬라이드 자동실행 일시정지
		} else {
			$(this).removeClass('on');	
			$('.shop_slide').slick('slickPlay');//슬라이드 자동실행
		}
		
		sw=!sw;
	});


	//모바일용 슬라이드
	
	
	//메인슬라이더	
	$('.main_slide .m_slide').slick({
		fade:true,
		 dots:true,//페이지버튼
		 autoplay: true,//자동실행
		 pauseOnHover:false,//마우스올렸을때 멈춤기능
		 autoplaySpeed:3000,//슬라이드 간격(시간) (1000=1초, 기본값 : 3000)
		 speed:700,//애니메이션 속도(기본값 300)
		 swipe:false,//pc 마우스 드래그 이동, 모바일 손으로 쓸어넘기는 기능
		 slide:'div',//슬라이드로 사용할 엘리먼트 지정
		arrows:false
	});
	
	//리뷰슬라이더
	$('.m_moment_slide .m_ui_moment').slick({
		fade:true,
		 dots:true,//페이지버튼
		 autoplay: true,//자동실행
		 pauseOnHover:false,//마우스올렸을때 멈춤기능
		 autoplaySpeed:6000,//슬라이드 간격(시간) (1000=1초, 기본값 : 3000)
		 speed:700,//애니메이션 속도(기본값 300)
		 swipe:false,//pc 마우스 드래그 이동, 모바일 손으로 쓸어넘기는 기능
		 slide:'li',//슬라이드로 사용할 엘리먼트 지정
		arrows:false
	});
	
	//product 슬라이더
	$('.m_shop .m_poroduct').slick({
		fade:true,
		 dots:true,//페이지버튼
		 autoplay: true,//자동실행
		 pauseOnHover:false,//마우스올렸을때 멈춤기능
		 autoplaySpeed:3000,//슬라이드 간격(시간) (1000=1초, 기본값 : 3000)
		 speed:700,//애니메이션 속도(기본값 300)
		 swipe:false,//pc 마우스 드래그 이동, 모바일 손으로 쓸어넘기는 기능
		 slide:'li',//슬라이드로 사용할 엘리먼트 지정
		arrows:false
	});
});
