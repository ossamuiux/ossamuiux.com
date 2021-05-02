// const { event } = require("jquery");

(function() {
    //모바일 메뉴 열고닫기
    $('#header .btn_open_menu').on('click', function() {
        $(this).toggleClass('on');
        $('#header .menu').toggleClass('on');
        $('#header .menu_util_wrap').toggleClass('on');
        $('#header .util_wrap').toggleClass('on');
        $('body').toggleClass('on');
    });

    //모바일 메뉴 아코디언
    $('#header .bottom_menu>li').on('click', function() {
        $(this).find('.depth2').stop().slideToggle().parent().siblings().find('.depth2').slideUp();
        $(this).toggleClass('on').siblings().removeClass('on');
    });

    // 메인 슬라이더
    var pagiArr = ["SEOUL DRAGON CITY", "GRAND MERCURE", "NOVOTEL SUITES", "NOVOTEL", "IBIS STYLES"];

    var mainSlider = new Swiper('.main_slider', {
        loop: true,
        slidesPerView: 1,
        effect: 'fade',
        // autoplay: {
        //     delay: 6000,
        // },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"><em>' + pagiArr[index] + '</em></span>';
              }
        },

    });

    //데스크탑 MEMBERSHIP 슬라이더
    var memSlider = new Swiper('.mem_slider', {
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    //타블렛, 모바일 MEMBERSHIP 슬라이더
    var mmSlider = new Swiper('.m_mem_slider', {
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    //모바일 MEMBERSHIP 탭메뉴
    $('.membership .mem_tab li').on('click', function(e) {
        e.preventDefault();
        
        $(this).addClass('on').siblings().removeClass('on');

        var idx = $(this).index();
        console.log(idx);
        $('.membership .m_mem_slider').eq(idx).addClass('active').siblings().removeClass('active');
    });

    //event 슬라이더
    var eventSlider = new Swiper('.event_slider', {
        slidesPerView: 'auto',
        loop: true,
        centeredSlides: true,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
    });

    //promotion 슬라이더
    var promSlider = new Swiper('.promotion_slider', {
        slidesPerView: 1,
        loop: true,
        spacebetween: 40,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        breakpoints: {
            1200: {
                slidesPerView: 'auto',
            },
        },
    });

    //모바일 푸터 sns_link 열고닫기
    $('.footer .m_sns_link .sns_tit').on('click', function(e) {
        e.preventDefault();
        $('.footer .m_sns_link .sns_list').slideToggle();
        $(this).toggleClass('on');
    });
})();
