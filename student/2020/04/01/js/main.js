$(document).ready(function () {    
    $('.header_inner .gnb .btn_all').on('click', function() {
        $('.all_wrap').show();
        $('body').addClass('on');
        $('.all_wrap .menu_list>li:first>a').focus();
    });
    
    $('.all_wrap .btn_close').on('click', function() {
        $('.all_wrap').hide(); 
        $('body').removeClass('on');
        $('.header_inner .gnb .btn_all').focus();
    });
      
    var headerEl = $('#header');

    headerEl.on('mouseenter', function () {
        $(this).addClass('on');
    }).on('mouseleave', function () {
        $(this).removeClass('on');
    });

    
    // 언어선택메뉴
    $('.btn_lang').on('click', function () {
        $('.lang').stop().slideToggle();
    });

    //메인 슬라이더//
    var mySwiper = new Swiper('.main_slider', {
        loop: true,
        effect: 'fade',
        speed: 800,
        simulateTouch: false,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletElement: 'button',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });



    var mySwiper2 = new Swiper('.program', {
        direction: 'vertical',
        loop: true,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

    var animateSection = function() {
        var sectionEl2 = $('#main .section2');
        var sectionEl4 = $('#main .section4');
        var sectionEl3 = $('#main .section3');
        var posY2 = sectionEl2.offset().top - 1300;
        var posY3 = sectionEl4.offset().top - 950;
        var posY4 = sectionEl3.offset().top - 750;

        $(window).scroll(function () {
            var _scrollTop = $(this).scrollTop();

            if (_scrollTop >= posY3) {
                sectionEl3.addClass('on');
            } else if (_scrollTop === 0) {
                sectionEl3.removeClass('on');
            }

            if (_scrollTop >= posY4) {
                sectionEl4.addClass('on');
            } else if (_scrollTop === 0) {
                sectionEl4.removeClass('on');
            }
            if (_scrollTop >= posY2) {
                sectionEl2.addClass('on');
            } else if (_scrollTop === 0) {
                sectionEl2.removeClass('on');
            }
        }); 
    };
    
    if($('#main>.section2').length > 0) {
        animateSection();
    }

    $('.btn_family').on('click', function () {
        $(this).toggleClass('on');
        $('.family_list').stop().slideToggle(600);
    });
});