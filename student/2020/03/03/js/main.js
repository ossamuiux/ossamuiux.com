$(document).ready(function() {
    
    
    /* menu 버튼 누르면 내비게이션 열림 */
    $('.header_inner .btn_menu').on('click', function() {
        $('#header .dimm').stop().fadeIn('on');
        $('.mgnb_wrap').stop().addClass('on');
    });
    
    /* close 버튼 누르면 내비게이션 닫힘 */
    $('.mgnb_wrap .btn_close').on('click', function() {
        $('#header .dimm').stop().fadeOut('on');
        $('.mgnb_wrap').stop().removeClass('on');
    });
    
    $('.dimm').on('click', function() {
        $(this).stop().fadeOut('on');
        $('.mgnb_wrap').stop().removeClass('on'); 
    });
    
    /* 모바일 아코디언 메뉴 */
    $('.mgnb_wrap .mgnb>li').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active').siblings().removeClass('active');
        
        $('.mgnb .depth2').stop().slideUp();
        
        if($(this).hasClass('active')) {
            $(this).find('.depth2').stop().slideDown();
        }
    });
    
    /* 메인 슬라이더 */
    var mySwiper = new Swiper ('.main_slider', {
        loop: true,
        pagination: {
          el: '.main_slider .swiper-pagination',
        },
        navigation: {
          nextEl: '.main_slider .swiper-button-next',
          prevEl: '.main_slider .swiper-button-prev',
        },
    });
    
    /* 모바일 메인비주얼이미지 바꾸기 */
        
    var slideImg = $('#main .main_slider .swiper-slide img');
    
    $(window).resize(function() {
        var winW = $(window).width() + 17;

        if(winW <= 767) {
            slideImg.each(function(i) {
                var changeSrc = slideImg.eq(i).attr('src').replace('pc','mob');
//                console.log(changeSrc);
                slideImg.eq(i).attr('src',changeSrc);
            });
        } else {
            slideImg.each(function(i) {
                var changeSrc = slideImg.eq(i).attr('src').replace('mob','pc');
//                console.log(changeSrc);
                slideImg.eq(i).attr('src',changeSrc);
            });
        }
    }).trigger('resize');
    
    /* 메뉴 슬라이더 */
    var mySwiper2 = new Swiper ('.menu_slider', {
        loop: false,
        speed: 700,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20,
        breakpoints: {
            1024: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
        },
        navigation: {
          nextEl: '.menu_slider .swiper-button-next',
          prevEl: '.menu_slider .swiper-button-prev',
        },
    });
    
    /* sns 슬라이더 */
    var mySwiper3 = new Swiper ('.sns_slider', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
            767: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
        },
        pagination: {
          el: '.sns_slider .swiper-pagination',
        },
    });
});
    
















