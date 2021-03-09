$(document).ready(function(){
	
	var pos; //스크롤바 위치저장 변수
	var cir=1; //스킬 원형라이브러리 작동 변수
	var idx; //주메뉴 index 값 저장
	var idx2; //인트로 섹션의 메뉴 index 값 저장
	
	//주메뉴 클릭시 스크롤탑값 이동
	$('.gnb ul li').click(function(e){
		e.preventDefault();
		idx=$(this).index();
		//console.log(idx);		
		if (idx==0) {
			$('html,body').stop().animate({'scrollTop':'0'},500);
		} else if (idx==1) {
			$('html,body').stop().animate({'scrollTop':'840px'},500);
		} else if (idx==2) {
			$('html,body').stop().animate({'scrollTop':'1620px'},500);
		} else if (idx==3) {
			$('html,body').stop().animate({'scrollTop':'2475px'},500);
		} else if (idx==4) {
			$('html,body').stop().animate({'scrollTop':'3325px'},500);
		} else if (idx==5) {
			$('html,body').stop().animate({'scrollTop':'4230px'},500);
		}
	});
	
	//인트로 섹션의 메뉴 클릴시 스크롤탑값 이동
	$('.section1 .intro ul li').click(function(e){
		e.preventDefault();
		idx2=$(this).index();
		//console.log(idx);		
		if (idx2==0) {
			$('html,body').stop().animate({'scrollTop':'0'},500);
		} else if (idx2==1) {
			$('html,body').stop().animate({'scrollTop':'840px'},500);
		} else if (idx2==2) {
			$('html,body').stop().animate({'scrollTop':'1620px'},500);
		} else if (idx2==3) {
			$('html,body').stop().animate({'scrollTop':'2475px'},500);
		} else if (idx2==4) {
			$('html,body').stop().animate({'scrollTop':'3325px'},500);
		} else if (idx2==5) {
			$('html,body').stop().animate({'scrollTop':'4230px'},500);
		}
	});
	
	//스크롤 발생시 모든 이벤트처리
	$(window).scroll(function(){
		pos=$(window).scrollTop();
		console.log(pos);
		
		//스크롤 위치 판단 후 주메뉴에 on 처리
		if (pos>=0 && pos<840) {
			$('.gnb ul li').find('a').removeClass('on');
			$('.gnb ul li').eq(0).find('a').addClass('on');
		} else if (pos>=840 && pos<1620) {
			$('.gnb ul li').find('a').removeClass('on');
			$('.gnb ul li').eq(1).find('a').addClass('on');
		} else if (pos>=1620 && pos<2470) {
			$('.gnb ul li').find('a').removeClass('on');
			$('.gnb ul li').eq(2).find('a').addClass('on');
		} else if (pos>=2470 && pos<3320) {
			$('.gnb ul li').find('a').removeClass('on');
			$('.gnb ul li').eq(3).find('a').addClass('on');
		} else if (pos>=3320 && pos<3500) {
			$('.gnb ul li').find('a').removeClass('on');
			$('.gnb ul li').eq(4).find('a').addClass('on');
		} else if (pos>=3500) {
			$('.gnb ul li').find('a').removeClass('on');
			$('.gnb ul li').eq(5).find('a').addClass('on');
		}	
		
		/*소개 섹션*/	
		//소개 섹션 제목 효과
		if (pos>=400) {
			$('.section2 .box .tit h2').addClass('on');
		}		
		//주메뉴 나타는 효과
		if (pos>=500) {
			$('.gnb_wrap').addClass('on');
			//소개 섹션 라인 효과
			$('.section2 .box .tit .line').addClass('on');
		} else {
			$('.gnb_wrap').removeClass('on');
		}
		//소개 섹션 프로필 효과
		if (pos>=600 && cir==1) {
			$('.section2 .box .info li').addClass('on')
			$('.circle1').circleProgress({
				value: 0.8,
				size: 55,
				fill: {
					gradient: ["#232323", "#c4c4c4"]
				}
    		});
			$('.circle2').circleProgress({
				value: 0.7,
				size: 55,
				fill: {
					gradient: ["#232323", "#c4c4c4"]
				}
    		});
			$('.circle3').circleProgress({
				value: 0.9,
				size: 55,
				fill: {
					gradient: ["#232323", "#c4c4c4"]
				}
    		});
			$('.circle4').circleProgress({
				value: 0.9,
				size: 55,
				fill: {
					gradient: ["#232323", "#c4c4c4"]
				}
    		});
			$('.circle5').circleProgress({
				value: 0.9,
				size: 55,
				fill: {
					gradient: ["#232323", "#c4c4c4"]
				}
    		});
			$('.circle6').circleProgress({
				value: 0.9,
				size: 55,
				fill: {
					gradient: ["#232323", "#c4c4c4"]
				}
    		});
			cir=0;
		}
		
		/*메인프로젝트 섹션*/
		//메인프로젝트 섹션 제목효과
		if (pos>=1100) {
			$('.section3 .box .tit h2').addClass('on');
		}
		//메인프로젝트 섹션 라인효과
		if (pos>=1200) {
			$('.section3 .box .tit .line').addClass('on');
		}
		//메인프로젝트 섹션 부제목 효과
		if (pos>=1300) {
			$('.section3 .box .tit h3').addClass('on');
		}
		//메인프로젝트 섹션 pc 효과
		if (pos>=1400) {
			$('.section3 .box .project .pc_wrap').addClass('on');
			//메인프로젝트 섹션 텍스트 효과
			$('.section3 .box .project .txt1').addClass('on');
		}
		
		/*모바일프로젝트 섹션*/
		//모바일프로젝트 섹션 제목효과
		if (pos>=1900) {
			$('.section4 .box .tit h2').addClass('on');
		}
		//모바일프로젝트 섹션 라인효과
		if (pos>=2000) {
			$('.section4 .box .tit .line').addClass('on');
		}
		//모바일프로젝트 섹션 부제목 효과
		if (pos>=2100) {
			$('.section4 .box .tit h3').addClass('on');
		}
		//모바일프로젝트 섹션 mobile 효과
		if (pos>=2200) {
			$('.section4 .box .mobile .phone').addClass('on');
			//모바일프로젝트 섹션 텍스트 효과
			$('.section4 .box .mobile .txt1').addClass('on');
		}
		
		/*반응형프로젝트 섹션*/
		//반응형프로젝트 섹션 제목효과
		if (pos>=2700) {
			$('.section5 .box .tit h2').addClass('on');
		}
		//반응형프로젝트 섹션 라인효과
		if (pos>=2800) {
			$('.section5 .box .tit .line').addClass('on');
		}
		//반응형프로젝트 섹션 부제목 효과
		if (pos>=2900) {
			$('.section5 .box .tit h3').addClass('on');
		}
		//반응형프로젝트 섹션 pc모니터 효과
		if (pos>=3000) {
			$('.section5 .box .respon .pc1').addClass('on');
		}
		
		/*컨텍스 섹션*/
		//컨텍스 섹션 제목효과
		if (pos>=3400) {
			$('.section6 .box .tit h2').addClass('on');
			//컨텍스 섹션 내용효과
			$('.section6 .box .tit p').addClass('on');
		}
	});
	
	//아이패드 클릭시 오리지널 사이트 보임
	$('.ipad .cover .img_view').click(function(e){
		e.preventDefault();
		$('.section3 .box .origin_view').show();
	});
	
	//오리지널 사이트 닫기 버튼
	$('.origin_view .view .close_btn').click(function(e){
		e.preventDefault();
		$('.section3 .box .origin_view').hide();
	});
		
	//로딩 되자마자 로고와 제목 on처리
	$('.section1 .box h1').addClass('on');
	$('.section1 .intro h2').addClass('on');
});