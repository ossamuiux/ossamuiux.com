$(document).ready(function () {
    // desktop
    // gnb - depth2 모션
    var gnb = $('#header .gnb');

    gnb.on('mouseenter', function () {
        $('.gnb_wrap .gnb .depth2').stop().slideDown(250);
        $('#header').addClass('on');
    }).on('mouseleave', function () {
        $('.gnb_wrap .gnb .depth2').stop().slideUp(300);
        $('#header').removeClass('on');
    });

    // 메인 슬라이더
    var mainSlider = new Swiper ('.main_slider', {
        loop: true,
        speed: 800,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    });

    // 제품소개 슬라이더
    var productSlider = new Swiper ('.product_slider', {
        loop: true,
        speed: 800,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        slidesPerView: 5,
        spaceBetween: 15,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            dynamicBullets: true
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            767: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }     
    });

    // 제품소개 탭
    // $('.product_slider_wrap .product_slider:gt(0)').hide();
    var productTap = $('.product_intro .product_tap>li');

    productTap.on('click', function(e) {
        e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on');

        var tapIdx = $(this).index();

        $('.product_slider_wrap .product_slider').eq(tapIdx).addClass('active').siblings().removeClass('active');
    });

     
     
     

    var eventSlider = new Swiper ('.event_slider', {
        loop: true,
        speed: 800,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

    $('.btn_family').on('click', function (e) {
        e.preventDefault();
        $(this).next().stop().slideToggle(200);
        $(this).toggleClass('on');
    });

    // tablet, mobile 공통
    // hamberger menu - snb
    var gnbUI = function() {
        var gnbWrap = $('.mgnb_wrap');

        $('.btn_gnb').click(function() {
            $(this).toggleClass('on');
            gnbWrap.toggleClass('on');
        });
    
        $('.mgnb_wrap .mgnb>li>a').on('click', function(e) {
            e.preventDefault();
            $(this).parent().siblings().find('.depth2').slideUp(300);
            $(this).siblings('.depth2').slideToggle(300);
            $(this).parent().siblings().removeClass('on');
            $(this).parent().toggleClass('on');
        });
    };
    gnbUI();

    // tablet
    
});