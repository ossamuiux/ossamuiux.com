$(function(){
	// 상단 fade 슬라이드
	$('.main_visual .slider').slick({
		dots:true,
		fade:true,
		autoplaySpeed:3000,
		speed:1000,
		arrows:false,
		vertical:false,
		pauseOnHover:false,
		autoplay:true
	});

	//조합원가입btn hover +css3 애니메이션사용	
	$('.join_btn').mouseenter(function(){	
		$('.join_btn').addClass('on');
	});

	$('.join_btn').mouseleave(function(){
		$('.join_btn').removeClass('on');

	});	


	//메인비주얼 스크롤버튼 클릭시 메인으로 이동
	$(".scroll_btn").click(function() {
	    $("body,html").animate({scrollTop: $('#main .main1').offset().top}, 1000,'easeInOutCubic');
	    return false;
	});		


	//탑버튼 비주얼에서 가리고 메인에서 나타내기
	$('.topfix_btn').hide();
	$(window).scroll(function(e){
		num=$(this).scrollTop();
			e.preventDefault();
		if(num>=300){
			$('.topfix_btn').fadeIn();
		} else {
			$('.topfix_btn').fadeOut();
		}
	});	


	//메인2:탭버튼
	$('.big_pic>a:gt(0)').hide(); 
	
	$('.thumbs li').click(function(e){
		e.preventDefault(); 

		$('.thumbs li').removeClass('on'); 
		$(this).addClass('on');
		
		var num=$(this).index();
		$('.big_pic>a').hide();
		$('.big_pic>a').eq(num).show();
	});

	$('.thumbs li').click(function(e){
		e.preventDefault(); 

	});


	// 메인3:탭메뉴상단(fold):클릭시 색변화이벤트
	$('.fold li').click(function(e){
		e.preventDefault();	
		$(this).removeClass('on');
		$('.fold li').removeClass('on'); 
		//더블클릭 없애는 법:각각 조건문에 li 전체 클래스 한번더 제거함
		$(this).addClass('on');
	});


	// 메인3:탭메뉴상단(fold):접고펴기
	var sw2=0;
	$('.main3 .fold li:gt(0)').hide();
	$('.main3 .fold li').click(function(e){
		e.preventDefault();
		if(sw2==0) {
			$('.main3 .fold li').slideDown();

			sw2=1;
		} else {
			$('.main3 .fold li:gt(0)').slideUp();

			sw2=0;
		}
	});


	/*메인3:slick-slider*/
	$('.main3 .slider_con').slick({
		dots:true,
		fade:true,
		speed:600,
		arrows:true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical:false,
		pauseOnHover:false,
		autoplay:false
	});


	//메인3:탭메뉴(fold)클릭 시 해당 slick-slide로 이동 & 상단 li가 클릭한 li로 교체
	$('.fold_content .slider_con:eq(0)').addClass('on');
	//0보다 큰 li를 클릭함 (첫번째li에는 이벤트가 걸리지 않음)
	$('.main3 .fold li:gt(0)').click(function(e){
		e.preventDefault();

		var num=$(this).index(); //인덱스추출 먼저
		//num다음에 -1걸어서 그전이벤트가 나오게 함
		$('.fold_content .slider_con').removeClass('on');
		$('.fold_content .slider_con').eq(num-1).addClass('on');

		//.fold li의 텍스트 a를 eq(0)와 같은 텍스트를 this에 넣는다.
		// text($(this).text()); this의 텍스트 추출
		$('.fold li:eq(0) a').text($(this).text());
	});



	//메인4:제품 마우스 hover시 아이콘메뉴fadeIn
	//1-1
	$('.cate_wrap_01:first .cate1:first').mouseenter(function(){
		$('.cate_wrap_01:first .cate1:first .txt_hover .prod_ico').fadeIn(100);
	});

	$('.cate_wrap_01:first .cate1:first .txt_hover .prod_ico, .cate_wrap_01:first .cate1:first').mouseleave(function(){
		$('.cate_wrap_01:first .cate1:first .txt_hover .prod_ico').fadeOut(100);
	});

	//1-2
	$('.cate_wrap_01:first .cate1.prod2').mouseenter(function(){
		$('.cate_wrap_01:first .cate1.prod2 .txt_hover .prod_ico').fadeIn(100);
	});

	$('.cate_wrap_01:first .cate1.prod2 .txt_hover .prod_ico, .cate_wrap_01:first .cate1.prod2').mouseleave(function(){
		$('.cate_wrap_01:first .cate1.prod2 .txt_hover .prod_ico').fadeOut(100);
	});

	//2-1
	$('.cate_wrap_01.cate02 .cate1:first').mouseenter(function(){
		$('.cate_wrap_01.cate02 .cate1:first .txt_hover .prod_ico').fadeIn(100);
	});

	$('.cate_wrap_01.cate02 .cate1:first .txt_hover .prod_ico, .cate_wrap_01.cate02 .cate1:first').mouseleave(function(){
		$('.cate_wrap_01.cate02 .cate1:first .txt_hover .prod_ico').fadeOut(100);
	});

	//2-2
	$('.cate_wrap_01.cate02  .cate1.prod2').mouseenter(function(){
		$('.cate_wrap_01.cate02  .cate1.prod2 .txt_hover .prod_ico').fadeIn(100);
	});

	$('.cate_wrap_01.cate02  .cate1.prod2 .txt_hover .prod_ico, .cate_wrap_01.cate02  .cate1.prod2').mouseleave(function(){
		$('.cate_wrap_01.cate02  .cate1.prod2 .txt_hover .prod_ico').fadeOut(100);
	});

	//3-1
	$('.cate_wrap_01.cate03 .cate1:first').mouseenter(function(){
		$('.cate_wrap_01.cate03 .cate1:first .txt_hover .prod_ico').fadeIn(100);
	});

	$('.cate_wrap_01.cate03 .cate1:first .txt_hover .prod_ico, .cate_wrap_01.cate03 .cate1:first').mouseleave(function(){
		$('.cate_wrap_01.cate03 .cate1:first .txt_hover .prod_ico').fadeOut(100);
	});

	//3-2
	$('.cate_wrap_01.cate03  .cate1.prod2').mouseenter(function(){
		$('.cate_wrap_01.cate03  .cate1.prod2 .txt_hover .prod_ico').fadeIn(100);
	});

	$('.cate_wrap_01.cate03  .cate1.prod2 .txt_hover .prod_ico, .cate_wrap_01.cate03  .cate1.prod2').mouseleave(function(){
		$('.cate_wrap_01.cate03  .cate1.prod2 .txt_hover .prod_ico').fadeOut(100);
	});


	//4-1
	$('.cate_wrap_01.cate04 .cate1:first').mouseenter(function(){
		$('.cate_wrap_01.cate04 .cate1:first .txt_hover .prod_ico').fadeIn(100);
	});

	$('.cate_wrap_01.cate04 .cate1:first .txt_hover .prod_ico, .cate_wrap_01.cate04 .cate1:first').mouseleave(function(){
		$('.cate_wrap_01.cate04 .cate1:first .txt_hover .prod_ico').fadeOut(100);
	});

	//4-2
	$('.cate_wrap_01.cate04  .cate1.prod2').mouseenter(function(){
		$('.cate_wrap_01.cate04  .cate1.prod2 .txt_hover .prod_ico').fadeIn(100);
	});

	$('.cate_wrap_01.cate04  .cate1.prod2 .txt_hover .prod_ico, .cate_wrap_01.cate04  .cate1.prod2').mouseleave(function(){
		$('.cate_wrap_01.cate04  .cate1.prod2 .txt_hover .prod_ico').fadeOut(100);
	});

	//5-1
	$('.cate_wrap_01.cate05 .cate1:first').mouseenter(function(){
		$('.cate_wrap_01.cate05 .cate1:first .txt_hover .prod_ico').fadeIn(100);
	});

	$('.cate_wrap_01.cate05 .cate1:first .txt_hover .prod_ico, .cate_wrap_01.cate05 .cate1:first').mouseleave(function(){
		$('.cate_wrap_01.cate05 .cate1:first .txt_hover .prod_ico').fadeOut(100);
	});

	//5-2
	$('.cate_wrap_01.cate05 .cate1.prod2').mouseenter(function(){
		$('.cate_wrap_01.cate05 .cate1.prod2 .txt_hover .prod_ico').fadeIn(100);
	});

	$('.cate_wrap_01.cate05 .cate1.prod2 .txt_hover .prod_ico, .cate_wrap_01.cate05 .cate1.prod2').mouseleave(function(){
		$('.cate_wrap_01.cate05 .cate1.prod2 .txt_hover .prod_ico').fadeOut(100);
	});


	//메인4:hover에서 아이콘 클릭시 hover (중복클릭가능, 2번클릭시 체크해제)
	$('.prod_ico a').click(function(e){
		e.preventDefault();

		if($(this).hasClass('on')!=true) {
			$(this).addClass('on');

		} else {
			$(this).removeClass('on');
		}
	});





});