$(document).ready(function(){
	 $('.main_visual').slick({
		  infinite: true,
		  speed: 500,
		  fade: true,
		  cssEase: 'linear',
		   autoplay: true
	});	 
	 
	$('.section1_inner').slick({
		  slidesToShow: 4,
		  slidesToScroll: 4,
		  dots:true,
		  autoplay: true,
		  draggable:false,
		  autoplaySpeed:5000,
		  speed:900
	});
	
	$('.section3 .place li').mouseenter(function(){
		$(this).find('.img2').stop().fadeIn(); 
	}).mouseleave(function(){
		$(this).find('.img2').stop().fadeOut(); 
	});
	
	var sw = false;
	
	$('.area_box .btn_area').click(function() {
		if(sw ==false){
			$('.area_box .txt_area').show();
			sw = true;
		} else {
			$('.area_box .txt_area').hide();
			sw = false;
		}
	});
	
	$('.area_box2 .btn_area2').click(function() {
		if(sw ==false){
			$('.area_box2 .txt_area2').show();
			sw = true;
		} else {
			$('.area_box2 .txt_area2').hide();
			sw = false;
		}
	});
	$('.sub_table tr').mouseover(function() {
      $('.sub_table tr').removeClass('on');
      $(this).addClass('on');
	  $('.sub_table .title').removeClass('on');
    });
});