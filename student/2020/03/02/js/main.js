$(document).ready(function() {
    
    /* 메인비주얼 슬라이더 */
    
    var mySwiper = new Swiper ('.main_slider', {
        loop: true,
        effect: 'fade',
        speed: 800,
        simulateTouch: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
        el: '.main_slider .swiper-pagination',
        },
    });
    
    
    
    /* 메뉴버튼 누르면 내비게이션 효과 */
    
    $('#header .btn_menu').on('click', function() {
        $('#header .dimm').fadeIn();
        $('body, #header').addClass('on');
    });
    
    $('#header .dimm').on('click', function() {
        $(this).fadeOut(); 
        $('body, #header').removeClass('on');
    });
    
    
    
    /* 닫기버튼 누르면 내비게이션 닫힘 */
    
    $('.btn_close').on('click', function() {
        $('#header .dimm').fadeOut();
        $('body, #header').removeClass('on');
    });
    
    
    
    /* gnb 하나씩 열리게 */
    
    $('.gnb>li>a').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active').parent().siblings().find('a').removeClass('active');

        $('.gnb .depth2').stop().slideUp(400);
        
        if($(this).hasClass('active')) {
            $(this).siblings().stop().slideDown(400);
        }

    });
    
    
    
    /* 섹션4 이벤트 슬라이더 */
    
    var mySwiper2 = new Swiper ('.event_slider', {
        loop: true,
        pagination: {
          el: '.event_slider .swiper-pagination',
        },
    });
    
    
    
    /* 푸터 패밀리사이트 버튼 누르면 list 펼쳐짐 */
    
    $('.family_wrap .btn_family').on('click', function() {
        $(this).toggleClass('on').siblings().toggle();
    });
    
    
    
    /* 스크롤시 헤더색 변경 */
    
    $(window).scroll(function() {
        var posY = $(window).scrollTop();
        if(posY>1) {
            $('#header').addClass('on2');
        } else {
            $('#header').removeClass('on2');
        }
    });
    
    
    
    
    /*********** 서브페이지 회사소개 **********/
    
    /* location 버튼 누르면 list 나오고 화살표 바꾸기 */
    
    $('.location .btn_location').on('click', function() {
        $('.location .list_location').slideToggle(300);
        
        $(this).toggleClass('on');
    });
    
    
    
    
    /*********** 서브페이지 제품소개 **********/
    
    /* 중등교과서 슬라이더 */
    var mySwiper3 = new Swiper('.textbook_slider', {
        loop: false,
        slidesPerView: 3,
        spaceBetween: 15,
        slidesPerGroup: 3,
        simulateTouch: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    
    /* 고등교과서 슬라이더 */
    var mySwiper4 = new Swiper('.textbook_slider.high', {
        loop: false,
        slidesPerView: 3,
        spaceBetween: 15,
        slidesPerGroup: 3,
        simulateTouch: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    
    
    
});















