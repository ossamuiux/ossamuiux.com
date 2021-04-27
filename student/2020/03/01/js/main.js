$(document).ready(function () {
    
    /* 헤더 on 클래스 */
    var gnbEl = $('#header');
    
    gnbEl.on('mouseenter', function() {
        $('#header').addClass('on');
    }).on('mouseleave', function() {
        $('#header').removeClass('on');
    });
    
    
    /* 전체 슬라이더 */
    var mySwiper2 = new Swiper ('.section_slider', {
        direction: 'vertical',
        loop: false,
        slidesPerView:'auto',
        mousewheel: true,
        speed: 800,
        pagination: {
            el: '.section_slider>.swiper-pagination',
            clickable: true, 
        },
    });
    
    
    /* 헤더 on2 클래스 */
    mySwiper2.on('slideChange', function() { 
        var num = mySwiper2.activeIndex;
        if (num === 2 || num === 4) {
            $('#header').addClass('on2');
        } else {
            $('#header').removeClass('on2');
        }
        
        var gnbEl2 = $('#header.on2 .gnb');
        
        gnbEl2.on('mouseenter', function() {
            $('#header.on2').addClass('on');
        }).on('mouseleave', function() {
            $('#header.on2').removeClass('on');
        });
    });
    
    
    
    /* 메인비주얼 슬라이더 */
    var mySwiper = new Swiper ('.main_slider', {
        loop: true,
        effect: 'fade',
        speed: 1000,
        simulateTouch: false,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    });
    
    
    /* 섹션3 호버 */
    var brandEl = $('.brand_img');
    brandEl.on('mouseenter', function() {
        $(this).addClass('on');
    }).on('mouseleave', function() {
        $(this).removeClass('on'); 
    });
    
    
    /* 섹션5 이벤트 슬라이더 */
    var mySwiper3 = new Swiper ('.event_slider', {
        speed: 200,
        pagination: {
            el: '.event_slider>.swiper-pagination',
            clickable: true,
        },
    });
    
    
    /* 푸터 패밀리 사이트 토글 */
    $('.family_wrap').on('click', function() {
        $(this).toggleClass('on');
        $(this).find('.list_family').toggle();
    });
    
    
    
    /************ 서브페이지2_제품사이트 **************/
    
    /* 서브페이지헤더 스크롤시 색 변환 */
    
    /*if($('#header.sub').length>0) {
        $(window).scroll(function() {
            $('#header.sub').addClass('on3');
        });
    } else {
        $(window).scroll(function() {
            $('#header.sub').addClass('on3');
        });
    }*/
    var headerEl = $('#header.sub');
    $(window).scroll(function() {
        var num2 = $(this).scrollTop();
        if (num2 >= 520) {
            $(headerEl).addClass('on3');
        } else {
            $(headerEl).removeClass('on3');
        };
    });
    
    
    
    
    
    /* 섹션2 교과서 슬라이더 */
    var mySwiper4 = new Swiper ('.middle_slider', {
        loop: false,
        speed: 600,
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
        simulateTouch: false,
        pagination: {
            el: '.middle_slider>.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.middle_slider>.swiper-button-next',
            prevEl: '.middle_slider>.swiper-button-prev',
        },
        
    });
    
    

    /* 섹션2 고등교과서 슬라이더 */
    var mySwiper5 = new Swiper ('.high_slider', {
        loop: false,
        speed: 600,
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
        simulateTouch: false,
        pagination: {
            el: '.high_slider>.swiper-pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.high_slider>.swiper-button-next',
            prevEl: '.high_slider>.swiper-button-prev',
        },

    });
    
});











