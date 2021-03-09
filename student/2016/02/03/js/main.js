$(document).ready(function(){
	
	var num3=0;

	//**첫번째페이지 마우스버튼 클릭 시 아래로 이동**
	$('.section1 .btn_down').click(function(){
		//scrollTop속성을 가져올때는 window, 이동시킬때는 html,body
		$('html,body').animate({scrollTop:1000});
	});
	
	//**페이지버튼클릭시 해당 페이지로 이동**
		$('.btn_page li').click(function() {
			var num=$(this).index(); //형제요소중 클릭한 요소의 순서값
			//console.log(num);
			
			if(num==0){
				$('html,body').animate({scrollTop:0});
			} else if(num==1) {
				$('html,body').animate({scrollTop:1000});
		    } else if(num==2) {
				$('html,body').animate({scrollTop:2060});
		    } else if(num==3) {
				$('html,body').animate({scrollTop:3060});
		    } else if(num==4) {
				$('html,body').animate({scrollTop:4060});
		    } else if(num==5) {
				$('html,body').animate({scrollTop:5060});
		    }else {
			 	$('html,body').animate({scrollTop:6060}); 
	     	} 
                
       });
	   
	   
	   
	   //**스크롤 위치에 따라 해당 페이지버튼 on처리**
	   $(window).scroll(function(){
		//창의 스크롤바위치를 변수에 저장
		var num=$(this).scrollTop();
		//console.log(num);
		
		
			if(num>=0 && num<1000){
				$('.btn_page li').removeClass('on');	
				$('.btn_page li').eq(0).addClass('on');
			} else if(num>=1000 && num<2060){
				$('.btn_page li').removeClass('on');	
				$('.btn_page li').eq(1).addClass('on');	
			} else if(num>=2060 && num<3060){
				$('.btn_page li').removeClass('on');	
				$('.btn_page li').eq(2).addClass('on');	
			}else if(num>=3060 && num<4060){
				$('.btn_page li').removeClass('on');	
				$('.btn_page li').eq(3).addClass('on');	
			}else if(num>=4060 && num<5060){
				$('.btn_page li').removeClass('on');	
				$('.btn_page li').eq(4).addClass('on');	
			}else if(num>=5060 && num<6060){
				$('.btn_page li').removeClass('on');	
				$('.btn_page li').eq(5).addClass('on');	
			}else {
				$('.btn_page li').removeClass('on');	
				$('.btn_page li').eq(6).addClass('on');	
			}
			
			//enjoy이미지 스크롤하면 3초뒤에 멈추면서 맨 마지막 이미지 보여주기
			if(num>=5000){
				setTimeout(function(){
					clearInterval(id);
					$('.enjoy li').eq(0).find('img').eq(-1).show();
					$('.enjoy li').eq(1).find('img').eq(-1).show();
					$('.enjoy li').eq(2).find('img').eq(-1).show();
					$('.enjoy li').eq(3).find('img').eq(-1).show();
					$('.enjoy li').eq(4).find('img').eq(-1).show();
					
			//idea이미지 스크롤하면 3초뒤에 멈추면서 맨 마지막 이미지 보여주기		
					clearInterval(id2);
					$('.idea li').eq(0).find('img').eq(-1).show();
					$('.idea li').eq(1).find('img').eq(-1).show();
					$('.idea li').eq(2).find('img').eq(-1).show();
					$('.idea li').eq(3).find('img').eq(-1).show();
				},3000);
			}
			
			
			
		});
		
		
		
		
		//enjoy이미지 랜덤으로 움직이기
		var id=setInterval(function(){
			var num2 =Math.round(Math.random()*4);
			var num3 =Math.round(Math.random()*4);
			var num4 =Math.round(Math.random()*4);
			var num5 =Math.round(Math.random()*4);
			var num6 =Math.round(Math.random()*4);
			$('.enjoy li').eq(0).find('img').hide();
			$('.enjoy li').eq(0).find('img').eq(num2).show();
			$('.enjoy li').eq(1).find('img').hide();
			$('.enjoy li').eq(1).find('img').eq(num3).show();
			$('.enjoy li').eq(2).find('img').hide();
			$('.enjoy li').eq(2).find('img').eq(num4).show();
			$('.enjoy li').eq(3).find('img').hide();
			$('.enjoy li').eq(3).find('img').eq(num5).show();
			$('.enjoy li').eq(4).find('img').hide();
			$('.enjoy li').eq(4).find('img').eq(num6).show();
			console.log(num2);
		},300);
		
		//idea이미지 랜덤으로 움직이기
		var id2=setInterval(function(){
			var num7 =Math.round(Math.random()*3);
			var num8 =Math.round(Math.random()*3);
			var num9 =Math.round(Math.random()*3);
			var num10 =Math.round(Math.random()*3);
			$('.idea li').eq(0).find('img').hide();
			$('.idea li').eq(0).find('img').eq(num7).show();
			$('.idea li').eq(1).find('img').hide();
			$('.idea li').eq(1).find('img').eq(num8).show();
			$('.idea li').eq(2).find('img').hide();
			$('.idea li').eq(2).find('img').eq(num9).show();
			$('.idea li').eq(3).find('img').hide();
			$('.idea li').eq(3).find('img').eq(num10).show();
			console.log(num2);
		},300);
				
	
	//**두번째페이지 이미지박스 마우스 오버시 확장**
	$('.img_box li').mouseenter(function(){
		$(this).find('.img_move01').stop().animate({'height':'444px','margin-top':'-110px','margin-left':'-70px'},600);
		$(this).find('.img_move').stop().animate({'height':'228px','margin-top':'-20px','margin-left':'-50px'},600);	
	});
		
	$('.img_box li').mouseleave(function(){
		$(this).find('.img_move01').stop().animate({'height':'272px','margin-top':'0','margin-left':'0'},600);
		$(this).find('.img_move').stop().animate({'height':'164px','margin-top':'0','margin-left':'0'},600);	
	});
	
	//**6번째 섹션 sns 라인부분 탭메뉴
	//:gt(0) 필터선택자, gt=>초과
	$('.tab_con>ul li:not(.tab_con4)').hide(); //첫번째 탭내용보다 큰 내용 숨기기
	
	$('.tab_btn li').click(function(){
		var num=$(this).index();
		//console.log(num);	//클릭 시 0,1,2
		//a그룹에서 추출한 인덱스값을 b그룹의 eq메서드에 넣어줌
		$('.tab_con>ul li').hide(); //탭내용 모두 안보이기. 순서대로 실행. 위치중요
		$('.tab_con>ul li').eq(num).show(); //eq(이퀄메서드) 해당되는 것을 보여라.
		
		//모든 li의 on클래스를 삭제
		$('.tab_btn li').removeClass('on');
		//클릭한 li에 on클래스 걸기
		$(this).addClass('on');
		
	});
	
	
	
	
}); //ready이벤트 end




















