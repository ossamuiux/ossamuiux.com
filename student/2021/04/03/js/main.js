(function() {
    // 헤더, gnb 스크롤과 마우스엔터
    var sc = 0;

    $(window).scroll(function(){
        sc = $(window).scrollTop();
        console.log(sc);

        if (sc >= 90) {
            $('#header').addClass('color_change fixed');
        } else {
            $('#header').removeClass('color_change drop_down fixed');
        }
    }).trigger('scroll');

    $('#header .gnb').on('mouseenter', function() {
        if(sc >= 90) {
            $('#header').addClass('color_change drop_down fixed');
        } else {
            $('#header').addClass('color_change drop_down');
        }
    }).on('mouseleave',function() {
        if(sc >= 90) {
            $('#header').removeClass('drop_down');
        } else {
            $('#header').removeClass('color_change drop_down fixed');
        }
    });

    // 헤더 pc gnb depth3 
    $('#header .depth2>li>.more').on('click',function() {
        // console.log('클릭됨');
        $(this).toggleClass('on').parent().siblings().find('.more').removeClass('on');
        $(this).next().toggleClass('on').parent().siblings().find('.depth3').removeClass('on');

        
    });


    // 헤더 타블렛 사이드메뉴 
    $('#header .btn_side').on('click',function() {
        $('body').addClass('on');
        $('#header .side_menu').show();
        $('#header .side_menu_bg').show();
    });

    // 헤더 타블렛 메뉴 닫기, 초기화
    $('#header .btn_side_close').on('click',function() {
        $('body').removeClass('on');
        $('#header .side_menu').hide();
        $('#header .side_menu_bg').hide();

        $('#header .side_menu .depth1>li>a').removeClass('on');

        $('#hader .side_menu .depth2').slideUp();
        setTimeout(function() {
            $('#hader .side_menu .depth2').slideUp();
        },300);
    });

    // .side_menu_bg 클릭시 초기화
    $('#header .side_menu_bg').on('click',function() {
        $('#header .btn_side_close').trigger('click');
    });

    // 헤더 사이드 메뉴 아코디언 
    $('#header .side_menu .depth1>li>a').on('click', function(){
        $(this).stop().toggleClass('on').parent().siblings().find('a').removeClass('on');
        $(this).siblings('.depth2').slideToggle().parent().siblings().find('.depth2').slideUp();
    });

    $('#header .side_menu .depth2>li>.more').on('click', function() {
        // $(this).stop().toggleClass('on');
        $(this).parent().find('.depth3').slideToggle();
    });


    // 메인 브랜드 섹션
    var brandSlider = new Swiper('.brand_slider', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    })    

    // 푸터
    $('#footer .btn_family').on('click', function() {
        $(this).stop().siblings().slideToggle(100);
        $(this).toggleClass('on');
    });
    $('#footer .list_family>li').on('mouseenter', function() {
        $(this).addClass('on').siblings().removeClass('on');
    }).on('mouseleave',function() {
        $(this).removeClass('on');
    })
})();