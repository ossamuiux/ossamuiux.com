//메인비쥬얼슬라이더
$(document).ready(function(){
	//slick함수 실행시 싱글턴객체를 통해 {속성:값,속성:값}의 형태로 인자값(인수)을 전달해줌
	$('.main_visual').slick({
		dots:true,//페이지버튼
		autoplayspeed:3000,//자동실행속도
		speed:1200,//애니매이션속도  
		draggble:true,//마우스드래그
		autoplay:true,//자동실행
		pauseOnHvoer:true//마우스호버시 멈춤기능
	});
  
	$('.pizza_slider').slick({
		centerMode: true,
		draggble:false,
		slidesToShow: 3,
		slidesToScroll: 1,
	});


	$('.slider_single').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		autoplay:true,
		dots:true,
		pauseOnHvoer:false,
	});
	
});





