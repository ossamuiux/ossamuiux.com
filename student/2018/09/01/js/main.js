$(document).ready(function(){
	$('.main_visual').slick({
		autoplay:true,
		autoplaySpeed:3000,
		speed:1200,
		dots:true,
		pauseOnHover:false,
		pauseOnFocus:false,
		slide:'div',
		draggable:false,
	});
	
	var sw = true;
	
	$('.main_visual .btn_play').click(function() {
		$(this).toggleClass('on');
		
		if(sw == true){
			$('.main_visual').slick('slickPause');
		} else {
			$('.main_visual').slick('slickPlay');
		}
		
		sw = !sw;
	});
	
	$('.item').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		draggable:false
	});
	
	$('.news').slick({
		vertical:true,
		pauseOnHover:true,
		pauseOnFocus:true,
		autoplay:true,
		autoplaySpeed:3500,
		speed:1000,
		draggable:false
	});
	
	$('.sub2_section2 .btn_page a').click(function() {
		$('.sub2_section2 .btn_page a').removeClass('on');
		$(this).addClass('on');
    });
	
	$('.rdobox label').click(function() {
		$('.rdobox label').removeClass('on');
		$(this).addClass('on');
    });

	var fileTarget = $('.filebox .upload-hidden'); 
	
	fileTarget.on('change', function(){ // 값이 변경되면
	 if(window.FileReader){ // modern browser 
		 var filename = $(this)[0].files[0].name; 
	 } else { // old IE 
		var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출 
	 } // 추출한 파일명 삽입 
 		$(this).siblings('.upload-name').val(filename); 
	 });
});