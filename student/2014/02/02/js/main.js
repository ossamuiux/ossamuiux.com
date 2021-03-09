// JavaScript Document
$(document).ready(function(){
	/*
    var headerH=$(document).outerHeight();
	console.log(headerH);
	$('.header_bottom').css('height',headerH-737);
	
	$('.elm_con1 .elm_sld_gra').slideDown(800);
	
	*/
	$('.elm_sld1').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		autoplay:true,
		autospeed:2500
	});
	$('.elm_sld2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		autoplay:true,
		autospeed:2500
	});
	$('.elm_sld3').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true
	});
	var posiL=0;
	var posiT=0;
	/*element별 on버튼*/
	function showDiv(){
		$('.bg_ani_wrap').show();
		$('.main>.con').fadeOut(400);	
	}
	
	$('.elm_steam_btn').click(function(){
		$('.element_bg.elm_steam').delay(1500).show(400);
		showDiv();
	});
	$('.elm_daehan_btn').click(function(){
		$('.element_bg.elm_daehan').delay(1500).show(400);	
		showDiv();
	});
	$('.elm_daehanM_btn').click(function(){
		$('.element_bg.elm_daehanM').delay(1500).show(400);	
		showDiv();
	});
	$('.elm_haein_btn').click(function(){
		$('.element_bg.elm_haein').delay(1500).show(400);	
		showDiv();
	});
	$('.elm_job_btn').click(function(){
		$('.element_bg.elm_job').delay(1500).fadeIn(400);	
		showDiv();
	});
	$('.elm_peau_btn').click(function(){
		$('.element_bg.elm_peau').delay(1500).fadeIn(400);	
		showDiv();	
	});
	$('.elm_3d_btn').click(function(){
		$('.element_bg.elm_3d').delay(1500).fadeIn(400);	
		showDiv();
	});
	$('.elm_toddle2_btn').click(function(){
		$('.element_bg.elm_toddle2').delay(1500).fadeIn(400);	
		showDiv();
	});
	$('.elm_poster_btn').click(function(){
		$('.element_bg.elm_poster').show(400);
		showDiv();
		$(".elm_sld3").slick("refresh");
	});
	$('.elm_toddle1_btn').click(function(){
		$('.element_bg.elm_toddle1').delay(1500).fadeIn(400);	
		showDiv();
	});
	$('.elm_sp_btn').click(function(){
		$('.element_bg.elm_sp').delay(1500).fadeIn(400);	
		showDiv();
	});
	$('.elm_noshow_btn').click(function(){
		$('.element_bg.elm_noshow').delay(1500).fadeIn(400);	
		showDiv();
	});
	$('.elm_video_btn').click(function(){
		$('.element_bg.elm_video').delay(1500).fadeIn(400);	
		showDiv();
	});
	$('.elm_profile_btn').click(function(){
		$('.element_bg.elm_profile').delay(1500).fadeIn(400);	
		showDiv();
	});
	$('.go_main').click(function(){
		$('.element_bg').slideUp(500);
		$('.bg_ani_wrap').slideUp(500);
        $('.main>.con').delay(500).fadeIn(400);
  
	});
	$('.con1 li a').mouseenter(function(){
		$('.con1 li a').stop().addClass('on');
		$(this).removeClass('on');
		$('.icon_hover').fadeIn(300);
		posiL=$(this).parent().offset().left;
		posiT=$(this).parent().offset().top;
		$('.icon_hover').css('left',posiL-447);
		$('.icon_hover').css('top',posiT-178);
		
	});
	$('.con1 li a').mouseleave(function(){
		$('.icon_hover').hide();
		$('.con1 li a').stop().removeClass('on');
	});
});