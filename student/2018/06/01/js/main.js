$(document).ready(function() {
	//메인비주얼 슬라이더
    $('.main_visual').slick({
		autoplay:true,
		autoplaySpeed:2000,
		speed:1000,
		pauseOnHover:false,
		pauseOnFocus:false,
		draggable:false,
		dots:true,
		arrows:false
	});
	
	//이미지 호버시 페이드인아웃
	$('.section1_inner .dessert img').mouseenter(function() {
        $(this).stop().animate({opacity:1},500);
    }).mouseleave(function() {
        $(this).stop().animate({opacity:0.7},300);
    });
	
	//MD상품더보기 호버
	$('.section3_inner .btn_more').mouseenter(function() {
        $(this).stop().animate({'background-color':'#fbfbfb'},300);
    }).mouseleave(function() {
        $(this).stop().animate({'background-color':'transparent'},300);
    });
	
	//APP자세히보기 호버
	$('.section4_inner .btn_more').mouseenter(function() {
        $(this).stop().animate({'background-color':'#5a5b53'},300);
    }).mouseleave(function() {
        $(this).stop().animate({'background-color':'transparent'},300);
    });
	
	//CJONE자세히보기 호버
	$('.section5_inner .btn_more').mouseenter(function() {
        $(this).stop().animate({'background-color':'#fbfbfb'},300);
    }).mouseleave(function() {
        $(this).stop().animate({'background-color':'transparent'},300);
    });
	
	//top버튼
	$(window).scroll(function() {
        var num=$(this).scrollTop();
		
		if(num>300){
			$('#main .btn_top').fadeIn();
		} else{
			$('#main .btn_top').fadeOut();
		}
    });
	$('#main .btn_top').click(function(e) {
        e.preventDefault();//a태그 기본이벤트 막기
		e.stopPropagation();//상위요소로의 이벤트 전파 막기
		
		$('html').animate({scrollTop:0});//스크롤위로증가
    });
});