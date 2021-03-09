$(document).ready(function(){
	// 선택하지 않은 영상의src제어하기
	var videoArr=[
		'https://www.youtube.com/embed/UZh8l8peIyY?autoplay=1&rel=0', 
		'https://www.youtube.com/embed/d2f7MqFf328?autoplay=1&rel=0',
		'https://www.youtube.com/embed/nqe27eq9lwg?autoplay=1&rel=0', 
		'https://www.youtube.com/embed/9d-f-rdyWDc?autoplay=1&rel=0'
	];
	//console.log(videoArr[0]);
	
	var cfVideoArr=[
		'https://www.youtube.com/embed/0MZcNeZI1MY?autoplay=1&rel=0', 
		'https://www.youtube.com/embed/9d-f-rdyWDc?autoplay=1&rel=0'
	];
	//console.log(cfvideoArr[0]);
		
	 var sw=false;
	 
	 
	 
	//top퀵메뉴 스크롤제어
	/*var arrPos=[]; //배열선언
	
	for(var i=1; i<4; i++){
		arrPos.push($('.section'+i).offset().top); 
		console.log(arrPos);
	} //각 섹션의 Top값을 담았다
	 
	 
	//스크롤값 판단후 헤더fixed시키기
	$(window).scroll(function(){
		var num=$(this).scrollTop();
		console.log(num);
		

		//스크롤탑이 1000이상이면 section2 .case에 on걸기
		if(num>=800){
			$('.quick').addClass('on');
		}else if(num==0){
			//스크롤탑이 0일때 on빼기
			$('.quick').removeClass('on');
		}
	});*/
	 
	 

	//메인비쥬얼 슬라이드
	$('.main .visual_slider').slick({
		//slick 셋팅에서 자동실행 설정값을 확인 기본값이 false이기때문에 true로 적용함
		//슬라이드에 마우스를 올리면 멈추게 되어있음
		//설명 : pauseOnHover:false를 사용하여 마우스호버상태에서도 슬라이드가 돌아가도록 적용
		//slidesToShow: 1, //보여질 슬라이더 갯수
		//slidesToScroll: 2, //스크롤되는 슬라이더 갯수
		//arrows: false, //좌우 화살표
		//vertical:true, //세로 슬라이드 
		swipe:false, //마우스나 손으로 좌우이동기능
		autoplay:true, //자동실행
		pauseOnHover:false, //마우스호버시 계속 실행
		autoplaySpeed:4000, //다음장까지 넘어가는 속도
		speed:800, //애니메이션 속도
		dots: true, //페이지버튼
		fade:true //페이드
 	});	
	
	
	
	/*//메인비쥬얼 슬라이드 텍스트 애니메이션  animate({'margin-top':430},800);
	$('.main .visual_slider .slick-dots #slick-slide02 button').click(function(){
		$('.main .visual_slider .txt3 h2').show(1500);
	}); */
	
	
	
	
	
	
	//브랜드 제품 슬라이드
	$('.section2 .product_slider').slick({
		//arrows: false, //좌우 화살표
		autoplay:true, //자동실행
		dots: true, //페이지버튼
		centerMode: true,
 		slidesToShow: 3,
		slidesToScroll: 1, //스크롤되는 슬라이더 갯수
		//swipe:false, //마우스나 손으로 좌우이동기능
		pauseOnHover:false, //마우스호버시 계속 실행
		speed:1000 //애니메이션 속도
 	});	
	
	
	//광고영상 이미지 슬라이드
	$('.cf_wrap .cf_slider').slick({
		arrows: false, //좌우 화살표
		//swipe:false, //마우스나 손으로 좌우이동기능
		pauseOnHover:false, //마우스호버시 계속 실행
		autoplaySpeed:3000, //다음장까지 넘어가는 속도
		speed:600, //애니메이션 속도
		dots: true, //페이지버튼
		fade:true //페이드
 	});	
	
	//광고영상 플레이버튼 클릭시 모달팝업창 띄우기
	$('.slick-slide button').click(function(){
		$('.section3 .modal').fadeIn();
		
		//슬릭슬라이드를 선택하기 위해 parent사용함
		var num=$(this).parent().attr('data-slick-index');
		//console.log(num);
		
		//모든 video엘리먼트 초기화후 해당되는 엘리먼트 보이기
		$('.modal_inner .video_wrap .video').hide();
		$('.modal_inner .video_wrap .video').eq(num).show();//해당비디오만 보여줘 a그룹 b그룹 매칭
		
		//모든iframe src 초기화후 해당되는 video안의 i frame src속성에 배열의 주소값을 넣어줌
		$('.modal_inner .video_wrap .video').find('iframe').attr('src','');//''빈문자 src가 끊어지게 함
		$('.modal_inner .video_wrap .video').eq(num).find('iframe').attr('src',videoArr[num]);//src를 가져오기 attr
	});
		
	//광고영상 닫기
	$('.modal_inner .close').click(function(){
		$('.section3 .modal').hide();
		//모든 iframe src를 초기화 (안그러면 보이지 않아도 영상이 계속 실행됨!!)
		$('.modal_inner .video_wrap .video').find('iframe').attr('src','');//''빈문자 src가 끊어지게 함
	});
	
	
	
	//노틱스 배너 클릭이벤트 제자리
	$('.section4 .box h3').click(function(e){
		e.preventDefault();
	});
	
		//뉴스 텍스트 슬라이드
	$('.box_inner .box_slider').slick({
		autoplay:true, //자동실행
		//arrows: false, //좌우 화살표
		//swipe:false, //마우스나 손으로 좌우이동기능
		pauseOnHover:false, //마우스호버시 계속 실행
		autoplaySpeed:7000, //다음장까지 넘어가는 속도
		speed:300, //애니메이션 속도
		dots: true, //페이지버튼
		fade:true //페이드
 	});	

	
	//비어스토리 슬라이드
	$('.section5 .con_slider').slick({
		autoplay:true, //자동실행
		//swipe:true, //마우스나 손으로 좌우이동기능
		pauseOnHover:false, //마우스호버시 계속 실행
		autoplaySpeed:5000, //다음장까지 넘어가는 속도
		speed:1200, //애니메이션 속도
		dots: true, //페이지버튼
		fade:true //페이드
 	});	
	
	//비어스토리 클릭시 제자리
	$('.section5 .slick-slide a').click(function(e){
		e.preventDefault();
	});
	
	
	
	
	//더나은세상 배너 클릭시 제자리
	$('.section6 .banner li a').click(function(e){
		e.preventDefault();
	});
	
	
	//더나은세상 배너 마우스오버
	$('.section6 .banner li').mouseenter(function(){
		$(this).find('.cover').stop().show();
	});
	$('.section6 .banner li').mouseleave(function(){
		$(this).find('.cover').stop().hide();
	});
	
	
	
	
	
	//서브페이지 제목 나타나기
	$('.sub_visual .sub_visual_inner h2').fadeIn(700);
	$('.sub_visual .sub_visual_inner p').fadeIn(1800);
	
	
	//서브페이지 메뉴로케이션 버튼클릭시 리스트 보이기
	$('.location_inner .btn1').click(function(){
		if(sw==false){
			$('.location_inner .list1').show();
			sw=true;
		}else{
			$('.location_inner .list1').hide();
			$('.location_inner .list2').hide();
			$('.location_inner .list3').hide();
			sw=false;
		}
	});
	
	
	
	
	//서브페이지 lnb on처리
	$('.container .lnb_wrap .lnb>li').click(function(){		
			//모든 li의 on클래스 제거후 클릭한 li에 on클래스 걸기
			$('.container .lnb_wrap .lnb li').removeClass('on');
			$(this).addClass('on');
	});

	

	
	//서브 브랜드페이지 CF 모달팝업
	//광고영상 보기
	$('.product_cf .video_wrap .video').click(function(e){
		e.preventDefault();
		
		$('.product_cf .sub_modal').show(300);
		
		var num=$(this).index();
		console.log(num);
		
		//모든 video엘리먼트 초기화후 해당되는 엘리먼트 보이기
		$('.sub_modal .modal_inner .cf_video').hide();
		$('.sub_modal .modal_inner .cf_video').eq(num).show();//해당비디오만 보여줘 a그룹 b그룹 매칭
		
		//모든iframe src 초기화후 해당되는 video안의 i frame src속성에 배열의 주소값을 넣어줌
		$('.sub_modal .modal_inner .cf_video').find('iframe').attr('src','');//''빈문자 src가 끊어지게 함
		$('.sub_modal .modal_inner .cf_video').eq(num).find('iframe').attr('src',cfVideoArr[num]);//src를 가져오기 attr

	});
	
	//광고영상 닫기
	$('.sub_modal .modal_inner .sub_close').click(function(){
		$('.product_cf .sub_modal').hide();
		//모든 iframe src를 초기화 (안그러면 보이지 않아도 영상이 계속 실행됨!!)
		$('.sub_modal .modal_inner .cf_video').find('iframe').attr('src','');//''빈문자 src가 끊어지게 함
	});
	
	
	
	
	//제품 상세이미지페이지 로케이션 버튼 클릭시 리스트 오픈
		//서브페이지 메뉴로케이션 버튼클릭시 리스트 보이기
	$('.location_inner .btn2').click(function(){
		if(sw==false){
			$('.location_inner .list2').show();
			sw=true;
		}else{
			$('.location_inner .list1').hide();
			$('.location_inner .list2').hide();
			$('.location_inner .list3').hide();
			sw=false;
		}
	});
	
	$('.location_inner .btn3').click(function(){
		if(sw==false){
			$('.location_inner .list3').show();
			sw=true;
		}else{
			$('.location_inner .list1').hide();
			$('.location_inner .list2').hide();
			$('.location_inner .list3').hide();
			sw=false;
		}
	});
	
	
	
	
	//히스토리
	//서브페이지 제목 나타나기
	$('.history_sub_visual .sub_visual_inner h2').fadeIn(700);
	$('.history_sub_visual .sub_visual_inner p').fadeIn(1800);
	
	
	
});