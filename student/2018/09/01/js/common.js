$(document).ready(function() {

	var $menu = $('.gnb') 
	
	$menu.on('mouseenter focusin',function(){
		$('#header').stop().animate({height:480});
	});
	
	$menu.on('mouseleave focusout',function(){
		 $('#header').stop().animate({height:140});
	});
		
	$('.family_wrap .btn_family').click(function() {		
		$('.family_wrap .list_family').stop().slideToggle();		
    });
	
	$(window).scroll(function() { 
		var num = $(this).scrollTop();
		
		if(num>400){
			$('#footer .btn_top').show();
		} else {
			$('#footer .btn_top').hide();	
		}
    });
	
	$('.btn_top').click(function(e) {
        e.preventDefault(); 
		e.stopPropagation(); 
				
		$('html,body').animate({scrollTop:0});
    });

	
//	 //스위치로직
//	var sw = true;
//	
//   $('.btn_search').click(function(){
//	  
//	   if(sw == true){
//			$('.txt_input').animate({width:160});
//			sw = false;
//	   } else {
//			$('.txt_input').animate({width:0});
//			sw = true;
//	   } 
//   });
});