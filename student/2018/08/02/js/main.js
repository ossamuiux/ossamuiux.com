$(document).ready(function () {
	$('#header .btn_menu').click(function() {
        $('#header .cover').fadeIn();
		$('#wrap, #header .m_gnb_wrap').addClass('on');
    });
	
	$('#header .m_gnb_wrap .login_wrap .btn_close').click(function() {
        $('#header .cover').fadeOut();
		$('#wrap, #header .m_gnb_wrap').removeClass('on');
	});
	
	$('#header .m_gnb_wrap .m_gnb>li>a').click(function() {
		//기본아코디언메뉴
		//$(this).find('.depth2').slideDown(300).parent().siblings().find('.depth2').slideUp(300);
		
		//아코디언응용(클릭시 닫기)
		$(this).parent().find('.depth2').stop().slideToggle().parent().siblings().find('.depth2').slideUp(300);
		$(this).parent().toggleClass('on').siblings().removeClass('on');
    });

   	var mySwiper = new Swiper ('#main .main_visual', {
		loop:true,
		autoplay: {
			delay: 5000
  		}
	});
	
	var mySwiper2 = new Swiper('#main .pizza', {
		loop:true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		}
    });
	
	$('#main.event .btn_event').click(function() {
		$('#main.event .button_list').toggle();
		$(this).toggleClass('on');
    }); 

    var swiper = new Swiper('#main.bigsize .swiper-container', {
      slidesPerView: 6,
      spaceBetween: 7,
      centeredSlides: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
	});
	
	$('#main.shop .btn_shop').click(function() {
		$('#main.shop .button_list_shop').toggle();
		$(this).toggleClass('on');
    }); 
});