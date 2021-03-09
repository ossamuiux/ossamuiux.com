$(document).ready(function() {
	var arr = [];
	/*console.log(arr);*/
	for(var i=1; i<6; i++){
		arr.push($('.section'+i).offset().top);
	}
	
	$(window).scroll(function() {
        var num = $(this).scrollTop();
		/*console.log(num); //:확인용*/
//--------------------------------------------------------------------
		if (num ==0){
			$('.section2').removeClass('on');	
			$('.section3').removeClass('on');
			$('.section4').removeClass('on');
			$('.section5').removeClass('on');
		}


		console.log(num,arr[2]);
		//섹션 위치에 따라 페이지버튼 on처리
		if (num>=arr[0]&& num<arr[1]-300) { //&& : 그리고
			$('.btn_page li').eq(0).addClass('on').siblings().removeClass('on');
		} else if(num>=arr[1]-300 && num<arr[2]-300){
			$('.btn_page li').eq(1).addClass('on').siblings().removeClass('on');
			$('.section2').addClass('on');
			console.log('조건만족');
		} else if(num>=arr[2]-300 && num<arr[3]-300){
			$('.btn_page li').eq(2).addClass('on').siblings().removeClass('on');
			$('.section3').addClass('on');
		} else if(num>=arr[3]-300 && num<arr[4]-300){
			$('.btn_page li').eq(3).addClass('on').siblings().removeClass('on');
			$('.section4').addClass('on');
		} else if(num>=arr[4]-300){
			$('.btn_page li').eq(4).addClass('on').siblings().removeClass('on');
			$('.section5').addClass('on');
		}
    });
//--------------------------------------------------------------------	

	//아래버튼 클릭시 섹션이동
	//scrolltop속성으로 애니메이트시 이동대상은 body(크롬),html(익스)
	$('.btn_down').click(function() {
        $('html, body').animate({scrollTop : arr[1]}, 1000);
    });
	
//--------------------------------------------------------------------		
	
//--------------------------------------------------------------------		
	//페이지버튼
	$('.btn_page li').click(function(e) {
		e.preventDefault(); //기본이벤트 막아줌 (깜박임 현상)
        var num = $(this).index();
		//console.log(num);
		if(num==0) {
			$('html, body').stop().animate({scrollTop : arr[0]}, 1000);
		} else if (num==1){
			$('html,body').stop().animate({scrollTop : arr[1]}, 1000);	
		} else if (num==2) {
			$('html,body').stop().animate({scrollTop : arr[2]}, 1000);
		} else if (num==3) {
			$('html,body').stop().animate({scrollTop : arr[3]}, 1000);
		} else if (num==4) {
			$('html,body').stop().animate({scrollTop : arr[4]}, 1000);
		} else if (num==5) {
			$('html,body').stop().animate({scrollTop : arr[5]}, 1000);
		}
    });
});




