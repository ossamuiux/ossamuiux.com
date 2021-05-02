$(document).ready(function() {
    var headerEl = $('#header');
    
    // GNB관련
    $('#header .gnb').on('mouseenter', function() {
        headerEl.addClass('on');
    }).on('mouseleave', function() {
        headerEl.removeClass('on');
    });
    
    $('#header .btn_lang').on('click', function() {
        $('#header .lang').toggleClass('on');
    });
    
    // 메인슬라이더
    var mySwiper1 = new Swiper ('.main_slider', {
        // 슬라이드방향
        //direction: 'vertical',
        // 반복옵션
        loop: true,
        simulateTouch: false,
        autoplay: {
            delay: 5000, // 슬라이드 지연시간
            disableOnInteraction: false, // 슬라이드 안쪽 요소 클릭 시 멈춤 기능
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    
    // 메인슬라이더 토글버튼
    $('#main .main_slider .btn_toggle').on('click', function() {
        $(this).toggleClass('on');
        console.log($(this).hasClass('on'));
        if($(this).hasClass('on') === true) {
            mySwiper1.autoplay.stop();
        } else {
            mySwiper1.autoplay.start();
        }
    });
    
    // 섹션1 슬라이더
    var mySwiper2 = new Swiper ('.product_slider', {
        loop: true,
        simulateTouch: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 2,
        spaceBetween: 100,
        slidesPerGroup: 2,
    });
    
    // 섹션2 탭메뉴
    $('.section2 .tab_menu li').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            
            $(this).addClass('active').siblings().removeClass('active');
            $('.section2 .tab_con').eq(i).addClass('on').siblings().removeClass('on');
        });
    });
    
    // sns슬라이더
    var mySwiper3 = new Swiper ('.sns_slider', {
        loop: true,
        simulateTouch: false,
        autoplay: {
            delay: 4000, 
            disableOnInteraction: false, 
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 3,
        spaceBetween: 40,
        slidesPerGroup: 1,
    });
    
    // 패밀리 사이트 버튼
    $('#footer .btn_family').on('click', function() {
        $('#footer .family_wrap').toggleClass('on');
        $('#footer .list_family').stop().slideToggle();
    });
    
    // 탑버튼
    $(window).scroll(function() {
        var btnTop = $('#main .btn_top');
        var _scroll = $(this).scrollTop();
        
        if(_scroll >= 200) {
            btnTop.fadeIn(200);  
        } else {
            btnTop.fadeOut(200); 
        }
        btnTop.on('click', function(e) {
            e.preventDefault();
            $('html, body').stop().animate({scrollTop:0});
        });
    });
    
    //서브 탭메뉴 
    $('#container .tab_menu li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        
        var num = $(this).index();
        $('#container .history_wrap .history_con').eq(num).addClass('active').siblings().removeClass('active');
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});