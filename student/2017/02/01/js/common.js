$(document).ready(function() {
	/*서브메뉴*/
	$('.gnb').mouseenter(function() {
        $('#header').stop().animate({height:400},600,'easeOutExpo');
    });
	 
	$('#header').mouseleave(function() {
        $('#header').stop().animate({height:100},600,'easeOutExpo');
    });
	
	$('.gnb>li>a').mouseenter(function() {
        $(this).stop().animate({height:100})
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
	
	/*아이콘*/
	$('.icon_menu_inner a').mouseenter(function() {
		$(this).find("img").effect( "shake", { distance:2, times: 1 }, "fast" );
	});
});