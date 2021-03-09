$(document).ready(function(){
    var mySwiper = new Swiper('.main_slider',{
        simulateTouch: false,
        direction: 'vertical',
        mousewheel: true,
        slidesPerView: 1,
        speed:1000,
        pagination: {
          el: '.main_slider>.swiper-pagination',
          clickable: true, 
        },
    });
	
	$('#header .btn_menu').on('click',function(){
		$('#header').addClass('on');
		$('#container.eu_profile .box .pro_pf').hide();
	});
	
	$('#header .btn_close').on('click',function(){
		$('#header').removeClass('on');
		$('#container.eu_profile .box .pro_pf').show();
	});
	
	$('#header .gnb .gnb_inner li').on('mouseenter',function(){
		$(this).addClass('active');
	});
	
	$('#header .gnb .gnb_inner li').on('mouseleave',function(){
		$(this).removeClass('active');
	});
	
	$('#container.pf_event .sub_visual .link_wrap li .custom_event').on('click',function(){
		$('#popup1').show()
	});
	$('#popup1 .bottom_popup .btn_close').on('click',function(){
		$('#popup1').hide();
	});
	
	$('#container.pf_event .sub_visual .link_wrap li .original_event').on('click',function(){
		$('#popup2').show()
	});
	$('#popup2 .bottom_popup .btn_close').on('click',function(){
		$('#popup2').hide();
	});
});



















