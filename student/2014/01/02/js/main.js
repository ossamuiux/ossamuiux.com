$(function(){
	//엘리먼트위치판단(offset().top, position().top)
	//문서전체에서 해당 엘리먼트의 위치값
	//var docHeight=$(document).height();
	var arrPos=[]; //배열선언
	
	for(var i=1; i<8; i++){
		arrPos.push($('.section'+i).offset().top); 
		//console.log(arrPos);
	} //각 섹션의 Top값을 담았다
	
	
	//var posY=$('.section3').offset().top;
	//console.log(posY,docHeight);
	
	//시작시 타이틀 효과
		$('.section1 .tit p').fadeIn(3000);
		$('.section1 .tit .logo_txt').eq(0).addClass('on');
		$('.section1 .tit .logo_img').eq(0).addClass('on');
		$('.section1 .circle').eq(0).addClass('on');
		$('.section1 .circle2').fadeIn(5500);
	
	
	
	$('.section1 .scroll').click(function(e){
		e.preventDefault(); //a태그 기본 이벤트 막기
		
		//ie는 html기준으로 chrome은 body를 기준으로 scrollTop이 적용된다
		//arrPos[1] 로 포문안에 담은 각 섹션의 top값을 나타낸다
		//$('html,body').animate({scrollTop:1277},600);
		$('html,body').animate({scrollTop:arrPos[1]},600);
	});
	
	
	
	
	//스크롤값 판단 설정
	$(window).scroll(function(){
		var num=$(this).scrollTop();
		console.log(num);
		
		//헤더fixed시키기
		if(num>=arrPos[1]-300){
			$('.header').addClass('on');
		}else {
			$('.header').removeClass('on');
		}
		
	
		//섹션별 스크롤 효과(기본:텍스트효과)
		if(num>=arrPos[1]-300){
			$('.section2 .tit').addClass('on');
			$('.section2 .tit .under_line').addClass('on');
			//스크롤시 박스 아래로
			$('.section2 .box_wrap li').addClass('on');
		}
		if(num>=arrPos[2]-150){
			$('.section3 .tit').addClass('on');
			$('.section3 .tit .under_line').addClass('on');
			//스크롤시 컨텐츠 좌우에서 나타나기
			$('.section3_inner .graph').addClass('on');
			$('.section3_inner .txt').addClass('on');
		}
		if(num>=arrPos[3]-300){
			$('.section4 .tit').addClass('on');
			$('.section4 .tit .under_line').addClass('on');
			//언더바x 텍스트효과
			$('.section4 .tit h3').addClass('on');
			$('.section4 .tit .ko').addClass('on');
			//스크롤시 컨텐츠 좌우에서 나타나기
			$('.section4_inner .project_view').addClass('on');
			$('.section4_inner .txt').addClass('on');
		}
		if(num>=arrPos[4]-300){
			$('.section5 .tit').addClass('on');
			//언더바x 텍스트효과
			$('.section5 .tit h3').addClass('on');
			//스크롤시 컨텐츠 회전하기
			$('.section5 .section5_inner  .ottogi').addClass('on');
		}
		if(num>=arrPos[5]-300){
			$('.section6 .tit').addClass('on');
			//언더바x 텍스트효과
			$('.section6 .tit h3').addClass('on');
			//메뉴gnb나타나기
			$('.section6 .work_gnb').addClass('on');
			//컨텐츠나타나기
			$('.section6 .work_slider .box').addClass('on');
		}
		if(num>=arrPos[6]-1000){
			$('.section7 .tit').addClass('on');
			$('.section7 .tit .under_line').addClass('on');
		}
		
		
		//about me 스킬바 이동
		if(num>=arrPos[1]-100){
			$('.skill_wrap .ps_line').addClass('on');
			$('.skill_wrap .ai_line').addClass('on');
			$('.skill_wrap .dw_line').addClass('on');
		}else if(num==0){
			$('.skill_wrap .ps_line').removeClass('on');
			$('.skill_wrap .ai_line').removeClass('on');
			$('.skill_wrap .dw_line').removeClass('on');
		}
		
		
		
		//scrollTop판단후 해당섹션에 왔을때 li에 on처리 &&그리고 ||(\위에)or
		if(num>=0 && num<arrPos[1]-150){
			$('.btn_page li').removeClass('on'); //초기화
			$('.btn_page li').eq(0).addClass('on');
			//해더메뉴
			$('.header .gnb li').removeClass('on'); //초기화
			$('.header .gnb li').eq(0).addClass('on');
		}else if(num>=arrPos[1]-150 && num<arrPos[2]){
			$('.btn_page li').removeClass('on');//초기화
			$('.btn_page li').eq(1).addClass('on');
			//해더메뉴
			$('.header .gnb li').removeClass('on'); //초기화
			$('.header .gnb li').eq(1).addClass('on');
		}else if(num>=arrPos[2]-150 && num<arrPos[3]-150){
			$('.btn_page li').removeClass('on');//초기화
			$('.btn_page li').eq(2).addClass('on');
			//해더메뉴
			$('.header .gnb li').removeClass('on'); //초기화
			$('.header .gnb li').eq(1).addClass('on');
		}else if(num>=arrPos[3]-150 && num<arrPos[4]-100){
			$('.btn_page li').removeClass('on');//초기화
			$('.btn_page li').eq(3).addClass('on');
			//해더메뉴
			$('.header .gnb li').removeClass('on'); //초기화
			$('.header .gnb li').eq(2).addClass('on');
		}else if(num>=arrPos[4]-200 && num<arrPos[5]-100){
			$('.btn_page li').removeClass('on');//초기화
			$('.btn_page li').eq(4).addClass('on');
			//해더메뉴
			$('.header .gnb li').removeClass('on'); //초기화
			$('.header .gnb li').eq(2).addClass('on');
		}else if(num>=arrPos[5]-200 && num<arrPos[6]){
			$('.btn_page li').removeClass('on');//초기화
			$('.btn_page li').eq(5).addClass('on');
			//해더메뉴
			$('.header .gnb li').removeClass('on'); //초기화
			$('.header .gnb li').eq(3).addClass('on');
		}
		
		if(num>=arrPos[6]-600){
			$('.btn_page li').removeClass('on');//초기화
			$('.btn_page li').eq(6).addClass('on');
			//해더메뉴
			$('.header .gnb li').removeClass('on'); //초기화
			$('.header .gnb li').eq(4).addClass('on');
		}
	});
	
	
	//페이지버튼 클릭시 scrolltop이동
	$('.btn_page li').click(function(e){
		e.preventDefault();
		
		var num=$(this).index();
		//console.log (num);
		
		switch (num){
		case 1:
			$('body,html').animate({scrollTop:arrPos[0]});
		break;
		
		case 2:
			$('body,html').animate({scrollTop:arrPos[1]});
		break;
		
		case 3:
			$('body,html').animate({scrollTop:arrPos[2]});
		break;
		
		case 4:
			$('body,html').animate({scrollTop:arrPos[3]});
		break;
		
		case 5:
			$('body,html').animate({scrollTop:arrPos[4]});
		break;
		
		case 6:
			$('body,html').animate({scrollTop:arrPos[5]});
		break;
		
		case 7:
			$('body,html').animate({scrollTop:arrPos[6]});
		break;


		default :
			$('body,html').animate({scrollTop:arrPos[0]});
		break;

		}
	});
	
	
	//해더메뉴 클릭시 scrolltop이동
	$('.header .gnb li').click(function(e){
		e.preventDefault();
		
		var num=$(this).index();
		
		//num값 판단후 이동
		//0일때 1일때 2일때의 케이스를 넣어줌
		//브레이크를 넣어야 하나씩 실행이됨
		switch (num){
			case 0:
			$('body,html').animate({scrollTop:arrPos[0]});
			break;
			
			case 1:
			$('body,html').animate({scrollTop:arrPos[1]});
			break;
			
			case 2:
			$('body,html').animate({scrollTop:arrPos[3]});
			break;
			
			case 3:
			$('body,html').animate({scrollTop:arrPos[5]});
			break;
			
			case 4:
			$('body,html').animate({scrollTop:arrPos[6]});
			break;
			
			default :
			$('body,html').animate({scrollTop:arrPos[0]});
			break;
		}
	});	
	
	//워크 슬라이드
	$('.section6 .work_slider').slick({
		//slick 셋팅에서 자동실행 설정값을 확인 기본값이 false이기때문에 true로 적용함
		//슬라이드에 마우스를 올리면 멈추게 되어있음
		//설명 : pauseOnHover:false를 사용하여 마우스호버상태에서도 슬라이드가 돌아가도록 적용
		slidesToShow: 3, //보여질 슬라이더 갯수
		slidesToScroll: 1, //스크롤되는 슬라이더 갯수
		arrows: true, //좌우 화살표
		//vertical:true, //세로 슬라이드 
		swipe:false, //마우스나 손으로 좌우이동기능
		autoplay:true, //자동실행
		pauseOnHover:false, //마우스호버시 계속 실행
		autoplaySpeed:4000, //다음장까지 넘어가는 속도
		speed:800, //애니메이션 속도
		dots: true //페이지버튼
		//fade:true //페이드
 	});
    
    $('.section4_inner .btn2').click(function(){
       $('.modal').fadeIn(); 
    });
    
    $('.modal').click(function(){
       $(this).fadeOut(); 
    });
});