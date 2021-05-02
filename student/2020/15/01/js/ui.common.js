var front = {
    scrollTop: 0,
    btnTop: null,

    init: function() {
        front.btnTop = $('#footer .btn_top')

        // 메인페이지
        front.gnbUI();
        front.mainSliderUI();
        front.mainNewsSliderUI();
        front.familyUI();
        front.toggleBtnTop();

        // 서브페이지
        front.subLnbUI();
        front.subFactorySliderUI();
        front.moveTop();
        // front.subFactoryMap();
    },
    gnbUI: function() {
        var gnb = $('#header .gnb_wrap .gnb');

        // gnb 온 클래스
        gnb.on('mouseenter', function() {
            $(this).addClass('on');
        }).on('mouseleave', function() {
            $(this).removeClass('on');
        });

        // 랭귀지버튼 액티브 클래스
        $('#header .btn_lang_wrap .btn_lang_en, #header .btn_lang_wrap .btn_lang_kr').on('click', function(e) {
            e.preventDefault();
            $(this).addClass('active').siblings().removeClass('active');
        });

        var allmenu =  $('#header .allmenu')

        // 전체메뉴열기 모달
        $('#header .btn_allmenu').on('click', function(e) {
            allmenu.fadeIn();
            allmenu.addClass('on');
        });
        $('#header .btn_close').on('click' ,function() {
            allmenu.hide();
            allmenu.removeClass('on');
        });
    },
    mainSliderUI: function() {
        var mainSlider = new Swiper('.main_slider', {
            direction: 'horizontal',
            loop: true,
            speed: 600,
            simulateTouch: false,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination', 
                clickable: true,
            },
        });
    },
    mainNewsSliderUI: function() {
        var mainNewsSlider = new Swiper('.main_news_slider', {
            direction: 'horizontal',
            loop: true,
            speed: 600,
            simulateTouch: true,
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination', 
                clickable: true,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });
    },
    familyUI: function() {
        $('#footer .btn_family').on('click', function(e) {
            e.preventDefault();
            $('#footer .list_family').toggle();
            $(this).toggleClass('on');
        });
    },
    toggleBtnTop: function() {
        if (front.scrollTop >= 400) {
            front.btnTop.fadeIn(200);
        } else {
            front.btnTop.fadeOut(200);
        }
    },
    moveTop: function() {
        front.btnTop.on('click' ,function(e) {
            e.preventDefault();
            $('html,body').stop().animate({scrollTop: '0'},600);
        });
    },
    subLnbUI: function() {
        var lnbLi =  $('.sub_container .lnb li');

        lnbLi.on('click', function() {
            $(this).addClass('active').siblings().removeClass('active');
        });
    },
    subFactorySliderUI: function() {

        // 스와이퍼 기능 관련
        var factorySlider = new Swiper('.sub_factory_slider', {
            // Optional parameters
            direction: 'horizontal',
            // centeredSlides: true,
            loop: false,
            simulateTouch: true,
            slidesPerView: 'auto',
          
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
            },
          
            // And if we need scrollbar
            scrollbar: {
              el: '.swiper-scrollbar',
              draggable: true, //스크롤바 드래그시 방향 정상화
              dragSize: '50px', // 스크롤바의 가로길이
              snapOnRelease: false, // 스크롤바 드래그 시 위치 내맘대로
            },
        });
    },
};

$(document).ready(function () {
    front.init();
    $(window).scroll(function() {
        front.scrollTop = $(window).scrollTop();
        front.toggleBtnTop();
    })
});