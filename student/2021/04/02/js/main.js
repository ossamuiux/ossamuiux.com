(function() {
    // nav 오픈
    $('#header .btn_menu').on('click', function() {
        $('#header .gnb_wrap, body').addClass('on');
        $('#header .gnb_dimm').fadeIn();
    });

    // nav 닫기, nav 초기화
    $('#header .gnb_wrap .btn_close').on('click', function() {
        $('#header .gnb_wrap, body').removeClass('on');
        $('#header .gnb_dimm').fadeOut();

        setTimeout(function() {
            $('#header .gnb_wrap .depth2').slideUp();
            $('#header .search_pop').slideUp();
            $('#header .gnb_wrap .depth1>li>a').removeClass('on');
            $('#header .gnb_wrap .depth1>li').removeClass('on');
        },500);
    });

    $('#header .gnb_dimm').on('click', function() {
        $('#header .gnb_wrap .btn_close').trigger('click');
    });

    // nav 아코디언
    $('#header .gnb_wrap .depth1>li>a').on('click', function() {
        $(this).siblings('.depth2').stop().slideToggle().parent().siblings().find('.depth2').slideUp();

        $(this).parent().stop().toggleClass('on').siblings().removeClass('on');

        $(this).addClass('on').parent().siblings().find('a').removeClass('on');
    });

    // nav 통합 검색 오픈
    $('#header .btn_search').on('click', function() {
        $('#header .search_pop').stop().slideToggle();
    });

    $('#header .btn_wrap .btn_search_close').on('click',function() {
        $('#header .search_pop').slideUp();
    });

    $('#header .bottom_gnb').on('click', function() {
        $('#header .search_pop').slideUp();
    });


    // 메인 슬라이더
    var mainSlider = new Swiper('.main_slider', {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // 메인 메뉴 슬라이더
    var menuSlider = new Swiper('.menu_slider', {
        loop: true,
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });

    var eventSlider = new Swiper('.event_slider', {
        loop: true,
        
        slidesPerView: 2,
        //슬라이드 간격
        spaceBetween: 10,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });


    // 서브 페이지

    // 메뉴페이지 lnb 열고닫기
    $('#container.sub_container .btn_lnb').on('click',function() {
        $('#container.sub_container .lnb_list').stop().slideToggle(300);
        $(this).toggleClass('on');
    });

})();