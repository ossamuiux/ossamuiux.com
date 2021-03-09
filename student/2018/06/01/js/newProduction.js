$(document).ready(function() {
	//메뉴 호버시 효과
	$('.menu_list a').mouseenter(function() {
        $(this).find('.img_filter, .image_inner').stop().fadeIn(250);
		
    }).mouseleave(function() {
        $(this).find('.img_filter, .image_inner').stop().fadeOut(250);
    });
	
	//메뉴 클릭시 모달팝업
	$('.menu_list li').click(function(e) {
		var num=$(this).index();
		$('.popup_box>div').eq(num).show().siblings().hide();
        $('.modal_popup').stop().fadeIn(250);
		
		e.preventDefault();//a태그 기본이벤트 막기
		e.stopPropagation();//상위요소로의 이벤트 전파 막기
    });
	
	$('.modal_popup .modal_bg, .popup_box .btn_close').click(function() {
		$('.modal_popup').stop().fadeOut(250);
    });
	//모달팝업 끝
});