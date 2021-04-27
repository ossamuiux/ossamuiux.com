$(document).ready(function() {
    // 헤더 on처리
    $('#header .gnb>li>a').on('mouseenter',function() {
        $('#header').addClass('on').slideDown();
        $('#header .gnb .depth2>li>a').stop().fadeIn(300);
    });
    
    $('#header').on('mouseleave',function() {
        $('#header').removeClass('on');
        $('#header .gnb .depth2>li>a').stop().fadeOut(300);
    });
    
    
//    햄버거메뉴 스크롤, 스톱처리, 바디온 빼기.
    
    //햄버거메뉴
    $('#header .mgnb_wrap .mgnb>li').on('click',function() {
        $(this).find('.mgnb_depth2').stop().slideToggle()
        $(this).toggleClass('on');
        
    });
    
    $('#header .btn_sub, #header .dimm').on('click', function() {
        $('#header .btn_sub').toggleClass('on');
        $('#header .mgnb_wrap').toggleClass('on');
        $('#header .dimm').fadeToggle()
		
    });
	
    //메인슬라이더
    var mySwiper = new Swiper ('.main_slider', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
    
    // 메인슬라이더 
    
    var mainSliderFn = function() {
        var slideImg = $('#main .main_slider .swiper-slide img');

        $(window).resize(function() {
            var winW = $(window).width() + 17;

            // winW가 767이하면 슬라이더안쪽 이미지변경
            if(winW <= 767) {
                // 반복문으로 한번에 이미지경로 변경
                slideImg.each(function(i) {
                    var changeSrc = slideImg.eq(i).attr('src').replace('pc','mob');
                    slideImg.eq(i).attr('src',changeSrc);
                });
            } else {
                slideImg.each(function(i) {
                    var changeSrc = slideImg.eq(i).attr('src').replace('mob','pc');
                    slideImg.eq(i).attr('src',changeSrc);
                });
            }
        }).trigger('resize');
    };
    mainSliderFn();
    
    
    
    
    
    // 베스트메뉴 슬라이더
    var mySwiper1 = new Swiper ('.bestmenu_slider', {
        slidesPerView: 3,
		speed:600,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
		scrollbar: {
			el: '.swiper-scrollbar',
    	},
		breakpoints: {
            767: {
                slidesPerView: 1,
                spaceBetween: 20,
            }
        }
    });
    
    
    
    // 티 레시피
	$('#main .recipe .recipe_wrap .tab_menu li').each(function(i) {
        $(this).on('click', function(e) {
			e.preventDefault();
			$(this).addClass('active').siblings().removeClass('active');
			$('#main .recipe .recipe_wrap .tap_wrap .tap_con').eq(i).addClass('on').siblings().removeClass('on');
    	});
	});
	
	
	
	var mySwiper = new Swiper ('.promise_slider', {
		slidesPerView:5,
		spaceBetween:30,
		scrollbar: {
			el: '.promise_scrollbar',
			draggable: true,
		},
		breakpoints: {
            1280: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
			767: {
                slidesPerView: 1,
                spaceBetween:30,
				
            }
		},
	});
	
	
	$('#footer .footer_wrap .btn_top').on('click', function(e) {
    	e.preventDefault();
        $('html, body').animate({scrollTop:0},500);
    });
});

    

    
    










