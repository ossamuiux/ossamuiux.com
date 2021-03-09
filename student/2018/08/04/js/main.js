//메인비쥬얼슬라이더
$(document).ready(function(){
    $('#header .btn_menu').click(function(){
        $('#header .gnb_wrap').fadeIn();
	});
    
    $('#header .gnb_wrap .gnb_inner .btn_close').click(function(){
        $('#header .gnb_wrap').fadeOut();
	});

   $(window).scroll(function() {
		var num = $(this).scrollTop();
		
		if(num>100){
			$('#footer .btn_top').fadeIn();	
		} else {
			$('#footer .btn_top').fadeOut();	
		}
	})
    $( '#footer .btn_top' ).click( function() {
  $( 'html, body' ).animate( { scrollTop : 0 }, 500 );
  return false;
    } );
});

    


