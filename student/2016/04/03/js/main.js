$(document).ready(function(){
	var sw=true;
	//아래로 내려가는 버튼
	//버튼을 클릭했을 때 스크롤을 1017로 이동시켜라
	$('.intro .btn_down').click(function(){
		$('html,body').animate({scrollTop:1000});
	});
				   
	//프로필 사진 마우스오버시 fade효과
	$('.cover_box').mouseenter(function(){
		$(this).find('.cover').stop().fadeOut(500); //마우스 오버시 커버가 흐려지도록
	//	$(this).find('.cover_box img').stop().animate({'height':'280px','margin-top':'-70px','margin-left':'-112.5px'},500);			
	});
	
	$('.cover_box').mouseleave(function(){
		$(this).find('.cover').stop().fadeIn(500);//마우스 오버시 커버가 또렷해지도록
	});//커버효과 끝

	//스크롤이벤트효과
	$(window).scroll(function(){
		var num=$(this).scrollTop();
		/*console.log(num)*/
		if(num>=1850){ 
			//스킬txt animate효과			
			$('.skill_html').stop().animate({'top':'35px', 'left':'450px'},750);	
			$('.skill_photo').stop().delay(300).animate({'top':'180px', 'left':'140px'},750);
			$('.skill_illust').stop().delay(600).animate({'top':'420px', 'left':'240px'},750);	
			$('.skill_css').stop().delay(900).animate({'top':'420px', 'left':'710px'},750);	
			$('.skill_jquery').stop().delay(1200).animate({'top':'200px', 'left':'780px'},750);	
			//능력치 fade 효과
			$('.value').stop().fadeIn(400);
		}else{
			$('.value').stop().fadeOut();
		}
		
	//오른쪽 페이지 버튼
	
		if(num>=0 &&  num<1000){
			$('.btn_page li').removeClass('on');
			$('.btn_page li').eq(0).addClass('on');
		} else if (num>=1000 && num<2000){
			$('.btn_page li').removeClass('on');
			$('.btn_page li').eq(1).addClass('on');
		} else if (num>=2000 && num<3000){
			$('.btn_page li').removeClass('on');
			$('.btn_page li').eq(2).addClass('on');
		} else if (num>=3000 && num<4000){
			$('.btn_page li').removeClass('on');
			$('.btn_page li').eq(3).addClass('on');
		} else if (num>=4000 && num<5000){
			$('.btn_page li').removeClass('on');
			$('.btn_page li').eq(4).addClass('on');
		} else {
			$('.btn_page li').removeClass('on');
			$('.btn_page li').eq(5).addClass('on');
		}//오른쪽 btn페이지 끝
	});//스크롤이벤트 끝
	//오른쪽 페이지버튼 
	$('.btn_page li').click(function(){
		var num=$(this).index();
		if (num==0){
			$('html,body').animate({scrollTop:0});
		} else if (num==1){
			$('html,body').animate({scrollTop:1000});
		} else if (num==2){
			$('html,body').animate({scrollTop:2000});
		} else if (num==3){
			$('html,body').animate({scrollTop:3000});
		} else if (num==4){
			$('html,body').animate({scrollTop:4000});
		} else {
			$('html,body').animate({scrollTop:5000});
		}					  
	});//클릭이벤트 끝
	
	//모니터 on처리
	$('.btn_monitor').click(function(){
		if(sw==true){
			$(this).find('a').addClass('on');
			$('.monitor_inner').show();
		} else {
			$(this).find('a').removeClass('on');
			$('.monitor_inner').hide();
		}
		
		sw=!sw;
	});

	/*컬러박스*/
	$(".aboutme li a").colorbox({rel:'group1'});

	//기획서modal
	$('.section3 .btn_ori1').click(function(e){
		e.preventDefault();
		$('.section3 .modal2').fadeIn();
		$('.section3 .original_in').show();
	});
	$('.modal2 .btn_close').click(function(){
		$('.section3 .modal2').hide();
		$('.section3 .original_in').hide();
	});

	$('.section3 .btn_new1').click(function(e){
		e.preventDefault();
		$('.section3 .modal2').fadeIn();
		$('.section3 .new_in').show();
	});
	$('.modal2 .btn_close').click(function(){
		$('.section3 .modal2').fadeOut();
		$('.section3 .new_in').hide();
	});

	//슬릭이벤트
	$('.section5 .work_box').slick({
//	 dots:true,
	swipe:false,
	slidesToShow: 4, //보여질 썸네일 갯수
	slidesToScroll: 4, //넘어가는 갯수
	slide:'div'
	});
});//ready이벤트 끝 