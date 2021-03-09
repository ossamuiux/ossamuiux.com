// JavaScript Document
$(document).ready(function() {
	//엘리먼트의 위치값 찾기
	var arr = [];
	
	for(var i=1; i<4; i++){
		arr.push($('.section'+i).offset().top);
		
	}
	console.log(arr[1]);
	
    $(window).scroll(function() {
        var num = $(this).scrollTop();
		console.log(num);
		
		if(num >= arr[1]){
			//$('#header').css({'position':'fixed','top':0}); /* 속성값이 여러개일경우는 {}써주고 하나일때는 안써도됨 */
			$('#header').addClass('on');
		}else {
			//$('#header').css({'position':'absolute','top':1277});
			$('#header').removeClass('on');
		}
		//섹션위치에 따라 페이지버튼 on처리
		if(num>=arr[0] && num<arr[1]){
			$('.btn_page li').eq(0).addClass('on').siblings().removeClass('on');
		} else if(num>=arr[1]&& num<arr[2]){
			$('.btn_page li').eq(1).addClass('on').siblings().removeClass('on');	
		} else {
			$('.btn_page li').eq(2).addClass('on').siblings().removeClass('on');
		}
		//섹션2 case이동, 섹션2위치보다 300작을때부터 애니메이트
		if(num>=arr[1]-300){
			$('.section2_inner').addClass('on');
		}
      
	  	//스크롤바가 위로 올라갔을때 .section2_inner초기화
		
		if(num == 0){
			$('.section2_inner').removeClass('on');
		}
    });
		
    });
	
	//아래버튼 클릭시 섹션이동
	//scrollTop속성으로 애니메이트시 이동대상은 body(크롬), html(익스) 두개다 써줘야 익스랑 크롬에 실행됨!//스크롤탑은 0부터 문서 전체 가능한 값이고 문서전체보다 조금 작게 잡힘
	$('.btn_down1').click(function() {
          $('html, body').animate({scrollTop :arr[1] }, 1000);
    });
	
	
	//페이지버튼//a 태그는 위로 올라간다 
	$('.btn_page li').click(function(e) {
		
		e.preventDefault(); //a의 기본이벤트를 막는 메서드임 //e.preventDefault를 쓸러면 function(e) <---매개변수'e'를 추가해줘야함!
        
		var num = $(this).index();
		
		if(num==0){
			 $('html, body').stop().animate ({scrollTop : arr[0]}, 1000);
		}else if(num==1){
			 $('html, body').stop().animate({scrollTop : arr[1]}, 1000);
		}else if(num==2){
			 $('html, body').stop().animate({scrollTop : arr[2]}, 1000);
		}
		
    });
	
	
	
	
	













