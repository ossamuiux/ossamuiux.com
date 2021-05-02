// const { event } = require("jquery");

(function() {
    // gnb 메뉴 열기
    $('#header .gnb').on('mouseenter', function() {
        $('#header').addClass('on');
    }).on('mouseleave', function() {
        $('#header').removeClass('on');
    });
    
    //사이트맵 열기
    $('#header .btn_open_sitemap').on('click', function() {
        $('#header .sitemap_wrap').addClass('on');
        $('#dimm').stop().fadeIn();
    });
    //사이트맵 닫기
    $('#header .btn_close_sitemap').on('click', function() {
        $('#header .sitemap_wrap').removeClass('on');
        $('#dimm').stop().fadeOut();
    });

    //메인 슬라이더
    var mainSlider = new Swiper('.main_slider', {
        loop: true,
        autoplay: {
            disableOnInteraction:false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    
    //브랜드 상품 슬라이더
    var brandSlider = new Swiper('.brand_slider', {
        slidesPerView: 3,
        loop: true,
        centeredSlides: true,
        spaceBetween: 60,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    //홍보영상 슬라이더
    var videoSlider = new Swiper('.video_slider', {
        slidesPerView: 'auto',
        loop: true,
        centeredSlides: true,
        spaceBetween: 100,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
    });

    // familysite 열고닫기
    $('#footer .btn_family').on('click', function() {
        $('#footer .family_list').slideToggle(500);
        $(this).toggleClass('on');
    });


    //******* 서브페이지_introduce *********

    //business 탭메뉴
    $('.business .tab_list li').on('click', function(e) {
        e.preventDefault();

        $(this).addClass('active').siblings().removeClass('active');

        var idx = $(this).index();

        $('.tab_con_wrap .tab_con_box').eq(idx).addClass('active').siblings().removeClass('active');
    })


    //******* 서브페이지_product *********
    $('.sub_tab li').on('click', function(e) {
        e.preventDefault();

        $(this).addClass('on').siblings().removeClass('on');
    });

})();
