$(document).ready(function() {
//top 버튼 처리
    $(window).scroll(function() {
        var num = $(this).scrollTop();
		if(num >= 400){
			$('.btn_top').stop().fadeIn();
		} else {
			$('.btn_top').stop().fadeOut();	
		}
    });
	
	$('.btn_top').click(function(e) {
		e.preventDefault();
        $('body,html').animate({scrollTop:0},300);
    });
});




