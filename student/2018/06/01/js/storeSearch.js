$(document).ready(function() {
	$('.btn_search_wrap .btn_search').click(function(e) {
        $('.result_section').show().animate({height:1000}).ready(function() {
            $('html').animate({scrollTop:1440});
        });
		
		e.preventDefault();//a태그 기본이벤트 막기
		e.stopPropagation();//상위요소로의 이벤트 전파 막기
    });
	
	$(window).scroll(function() {
		var num=$(this).scrollTop();
	});
});