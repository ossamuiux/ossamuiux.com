$(document).ready(function(){
	var sw=0;//모바일버튼 클릭시 이미지 경로 스위치
	
	/*pc버전 슬라이드*/
	$('.slider').slick({
		pauseOnHover:false,//슬라이더에 마우스를 올리면 멈추는 기능
	  	autoplay:true,//자동실행
		autoplaySpeed:4000, //인터벌(실행간격)
		speed:300,//애니메이션 속도
		fade:true,//페이드효과
		arrows:false,//좌우 화살표버튼 끄기
		dots:true
	});
	
	//모바일 슬라이더
	$('.m_slider').slick({
		pauseOnHover:false,//슬라이더에 마우스를 올리면 멈추는 기능
	  	autoplay:true,//자동실행
		autoplaySpeed:4000, //인터벌(실행간격)
		speed:300,//애니메이션 속도
		fade:true,//페이드효과
		arrows:false,//좌우 화살표버튼 끄기
		dots:true
	});
	
	//제품소개박스에 보더주기
	$('.brand1 .b1').mouseenter(function(){
		$(this).find('.line').stop().animate({'border-width':'10px'},200);
	});
	
	$('.brand1 .b1').mouseleave(function(){
		$(this).find('.line').stop().animate({'border-width':'0px'},200);
	});
		
	$(window).resize(function(){
		sw=0;
		$('.m_gnb').hide();
		
		/*if($(window).width()>=1007){
			$('.m_gnb').hide();
		} else {
			$('.m_gnb').show();
		}*/
	});
	
	// 모바일버튼 
	$('.m_btn').click(function(e){
		e.preventDefault();
		
		if(sw==0){
			$('.m_gnb').slideDown();
			sw=1;
		} else {
			$('.m_gnb').slideUp();
			sw=0;	
		}
	});
	

	/*$(window).resize(function(){
		var htmlHeight=$('.wrap').height();
		$('.gnb').height(htmlHeight);
	});*/
	
	$('.m_gnb>li').click(function(){
		$('.m_gnb>li>a').removeClass('on');
		$('.m_gnb .sub').stop().slideUp();
		$('.m_gnb>li').not(this).find('.sub').removeClass('on');
		$(this).find('>a').addClass('on');
		//hasClass() 메서드는 해당엘리먼트에 on클래스가 있으면 true
		//없으면 false값을 반환하며
		//sub가 열려있는지 여부를 판단하는 근거로 활용
		if($(this).find('.sub').hasClass('on') == false){
			$(this).find('.sub').stop().slideDown().addClass('on');
		} else {
			$(this).find('.sub').stop().slideUp().removeClass('on');
			$(this).find('>a').removeClass('on');
		}
		
	});
	
	
});






