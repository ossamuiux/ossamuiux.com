$(document).ready(function() {
	/*모달팝업닫기*/
	$('.header_inner h2').click(function(e) {
		e.preventDefault();
		
        $('.modal_popup').show();
    });
	
	$('.modal_popup .btn_close').click(function() {
		$('.modal_popup').hide();
    });
	
	/*탑버튼*/
	$(window).scroll(function() {
    	var num=$(this).scrollTop();
		if(num >= 200){
			$('.btn_top').fadeIn();
		} else {
			$('.btn_top').fadeOut();
		}
    });
	
	$('.btn_top').click(function(e) {
		e.preventDefault();
        $('body, html').animate({scrollTop:0},300);
    });
});