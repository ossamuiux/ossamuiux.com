$(document).ready(function(){
	
	var sw=0;//모바일형식gnb
	
	
	//메인비쥬얼 슬라이더
	$('.main_visual').slick({
		pauseOnHover:true,//슬라이더에 마우스를 올리면 멈추는 기능
	  	autoplay:false,//자동실행
		autoplaySpeed:6000, //인터벌(실행간격)
		speed:500,//애니메이션 속도
		fade:true,//페이드효과
		arrows:false,//좌우 화살표버튼 끄기
		dots:true
	});
	//메인비쥬얼 버튼
	$('#slick-slide00').find('button').text('잉크 립퀴드');
	$('#slick-slide01').find('button').text('홀리데이 에디션');
	$('#slick-slide02').find('button').text('블란 클라우딩');

	//이벤트 슬라이더
	$('.event').slick({
		pauseOnHover:true,//슬라이더에 마우스를 올리면 멈추는 기능
	  	autoplay:true,//자동실행
		autoplaySpeed:5000, //인터벌(실행간격)
		speed:500,//애니메이션 속도
		fade:true,//페이드효과
		arrows:false,//좌우 화살표버튼 끄기
		dots:true
	});
	
	$('.new').slick({
		pauseOnHover:true,//슬라이더에 마우스를 올리면 멈추는 기능
	  	autoplay:true,//자동실행
		autoplaySpeed:5000, //인터벌(실행간격)
		speed:300,//애니메이션 속도
		fade:false,//페이드효과
		arrows:false,//좌우 화살표버튼 끄기
		dots:true
	});
	
	//모바일 형식의 버튼
	$('.header .m_btn').click(function(){
		
		if(sw==0){
			$('.m_gnb').stop().animate({'left':'0'},300);
			$('.header .cover').fadeIn();
			sw=1;
		} else {
			$('.m_gnb').stop().animate({'left':'-250px'},300);
			$('.header .cover').fadeOut();
			sw=0;
		}
	});
	
	
	
	$('.gnb>li').click(function(){
		
		//모든 a의 on클래스 제거
		$('.gnb>li>a').removeClass('on');
		//모든 sub를 닫기
		$('.gnb .sub').stop().slideUp();
		//.gnb>li 그룹중 클릭하지않은 모든 li안의 sub의 on 제거
		$('.gnb>li').not(this).find('.sub').removeClass('on');
		//클릭한 li안의 a에 on클래스 추가
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
	
	//히스토리 슬릭 슬라이더버튼
	$('.story_btn').slick({
		slidesToShow: 5,
	    slidesToScroll: 2,
		infinite:false,
		arrows:true//좌우 화살표버튼 끄기
	});
	
	$('.history>div:gt(0)').hide();
	
	$('.story_btn .slick-slide').click(function(e){
		e.preventDefault();
		
		var num=$(this).index();
		var num2=0;
		//console.log(num);
		
		$('.history>div').hide();
		$('.history>div').eq(num).fadeIn();
		
	});
	
	
	
	$('.seed_img>div:gt(0)').hide();
	$('.seed_txt>div:gt(0)').hide();
	
	$('.seed_btn>div').click(function(e){
		e.preventDefault();
		
		var num=$(this).index();
		//console.log(num);
		
		$('.seed_img>div').hide();
		$('.seed_txt>div').hide();
		$('.seed_img>div').eq(num).fadeIn();
		$('.seed_txt>div').eq(num).fadeIn();
		
		$('.seed_btn a').removeClass('on');
		$(this).find('a').addClass('on');
	});
});






