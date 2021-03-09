// top버튼 //
$(document).ready(function() {
	var docHeight = $(this).height();
	
    $(window).scroll(function() {
       var num = $(this).scrollTop();
	   if(num >= 200){
			$('.btn_top').fadeIn();   
	   }else {
			$('.btn_top').fadeOut(); 
	   }
    });
	
	$('.btn_top').click(function(e) {
		e.preventDefault();
	
        $('body, html').animate({scrollTop:0},300);
    });
	
});

