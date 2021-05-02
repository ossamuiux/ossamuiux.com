(function () {
    //gnb 열기
    $('#header .btn_open').on('click', function () {
        $('#header .gnb_wrap').addClass('on')
        $('#header .gnb_bg').fadeIn('on')
        $('body').addClass('on')
    })
    //gnb 닫기
    $('#header .gnb_top .btn_close').on('click', function () {
        $('#header .gnb_wrap').removeClass('on');
        $('#header .gnb_bg').fadeOut('on');
        $('body').removeClass('on');

        $('#header .gnb>li>a').removeClass('on')
        $('#header .depth2_more>li>a').removeClass('on')
        setTimeout(function () {
            $('#header .gnb .depth2').slideUp();
            $('#header .gnb .depth3').slideUp();
        }, 300);
    });
    $('#header .gnb_bg').on('click', function() {
        $('#header .gnb_top .btn_close').trigger('click');
    });

    //gnb .depth2 아코디언
    $('#header .gnb>li>a').on('click', function () {
        $(this).siblings('.depth2').stop().slideToggle().parent().siblings().find('.depth2').slideUp();

        $(this).toggleClass('on').parent().siblings().find('a').removeClass('on');

        $('#header .depth2_more>li>a').removeClass('on')
        setTimeout(function () {
            $('#header .gnb .depth3').slideUp();
        }, 300);
    })
    //gnb .depth3 아코디언
    $('#header .depth2_more>li>a').on('click', function () {
        $(this).siblings('.depth3').stop().slideToggle().parent().siblings().find('.depth3').slideUp();

        $(this).toggleClass('on').parent().siblings().find('a').removeClass('on');
    })

    //메인슬라이더
    var mainSlider = new Swiper('.main_slider', {
        loop: true,

        autoplay: {

            delay: 5000,
        },

        pagination: {
            el: '.swiper-pagination',
        },

    });

    //브랜드 슬라이더
    var brandSlider = new Swiper('.brand_slider', {
        slidesPerView: 'auto',
        loop: true,
        centeredSlides: true,
        spaceBetween: 50,
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
    });

    //패밀리사이트
    $('#footer .btn_family').on('click', function () {
        $('#footer .family_list').stop().slideToggle();
    });


    // *****서브페이지*****

    //lnb 열고닫기
    $('#container .lnb>a').on('click', function() {
        $(this).toggleClass('on');
        $('#container .lnb_list').stop().slideToggle();
    });

    //비즈니스 슬라이더
    var businessSlider = new Swiper('.business_slider', {
        slidesPerView: 1,
        loop: true,
        centeredSlides: true,
        spaceBetween: 100,
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
    });

    //비즈니스 탭메뉴
    $('.business .tab_list>li').on('click', function(e) {
        e.preventDefault();
        var idx = $(this).index();
        console.log(idx);

        $(this).addClass('on').siblings().removeClass('on');

        $('.business .business_slider_blind').eq(idx).addClass('active').siblings().removeClass('active');
    });

    


})();