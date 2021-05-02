$(document).ready(function() {
    
    //탑버튼
    var btnTop = $('#footer .btn_top');
    
    $(window).scroll(function () {
        var _scrollTop = $(this).scrollTop();
//        console.log(_scrollTop);
        
        if(_scrollTop >= 200) {
            btnTop.fadeIn();
        } else {
            btnTop.fadeOut();
        }
    });
    
    $('#footer .btn_top a').on('click', function (e) {
        e.preventDefault();
        
        $('html, body').animate({scrollTop:0})
    });
    
    // 탭메뉴
    $('#header .gnb>li:lt(3)>a').on('click', function (e) {
        e.preventDefault();
        
        $(this).parent().siblings().find('>div').hide();
        $(this).parent().find('>div').toggle();
        
        // 디스플레이 block none 판단하여 딤이랑 뎁스2 메뉴를 끄고 킴
        if($(this).parent().find('>div').css('display') === 'block') {
            $('#header .gnb_dimmed').show();
            $(this).parent().addClass('active').siblings().removeClass('active');
        } else {
            $('#header .gnb_dimmed').hide();
            $(this).parent().removeClass('active');
        };
    });
    
    
    // gnb 딤 처리
    $('#header .gnb_dimmed').on('click', function () {
        console.log('클릭');
        $(this).hide();
        $('#header .gnb>li').find('>div').hide();
        $('#header .gnb>li').removeClass('active');
    }); 
    
    // gnb active
//    $('#header .gnb>li').on('click', function () {
//        $(this).addClass('active').siblings().removeClass('active');
//    });
    
    //차량안내 탭메뉴 
    $('.car_wrap .car_group>ul:gt(0)').hide();
    
    $('.car_wrap .car_menu button').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        var idx = $(this).index();
        $('.car_wrap .car_group>ul').eq(idx).show().siblings().hide();
    });
    
    // gnb bar
    $('.gnb_wrap .gnb>li').on('mouseenter', function () {
        var posX = $(this).position().left + 15;
        var _width = $(this).width();
        
        $('.gnb_wrap .gnb_bar').css({transform:'translateX(' + posX + 'px)', width:_width, opacity:1});
    });
    
    $('.gnb_wrap .gnb>li').on('mouseleave', function () {
        $('.gnb_wrap .gnb_bar').css({opacity:0});
        
    });
    
    var mySwiper = new Swiper('.main_slider', {
        loop: true,
        speed: 600,
//        //하단 페이지네이션
        pagination: {
            el: '.swiper-pagination',
            clickable: false,
        },
        //자동실행
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    
    // 베스트 모델 슬라이드
    var mySwiper2 = new Swiper('.product_slider', {
        loop: true,
        slidesPerView: 3, //숫자 auto가능
        centeredSlides: true,
        watchSlidesVisibility: true, //화면에 보이는 슬라이드에 동적 클래스 걸어줌
        //simulateTouch: false, // 드래그 끄기 기본값 true
        // 버튼
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        //페이지 네이션
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
    
    // on클래스 있는지 판단하여 있으면 멈추고 없으면 실행
    $('.product_slider .btn_toggle').on('click', function () {
        $(this).toggleClass('on');
        
        if($(this).hasClass('on')) {
            mySwiper2.autoplay.stop();
        } else {
            mySwiper2.autoplay.start();
        }
    });
    
    // 쉐보레 체널 슬라이드
    var mySwiper3 = new Swiper('.channel_swiper', {
        loop: true,
        slidesPerView: 2,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    
    
    //faq 리스트 클릭
    $('.faq_page .list_wrap>li').on('click', function (e) {
        e.preventDefault();
        
        $(this).toggleClass('active').siblings().removeClass('active').find('>div').hide();
        $(this).find('>div').toggle(); 
    });
    
    // faq 페이지 페이지네이션 클릭
    $('#main.faq_page .faq_pagination a').on('click', function (e) {
        e.preventDefault();
    });
    
    $('#main.faq_page .faq_num>a').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    
    
    // 시승신청 안내 버튼
    $('#main.drive_page .drive_inner2>div:gt(0)').hide();
    $('#main.drive_page .btn_menu li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    })
    
    $('#main.drive_page .btn_menu li>a').on('click', function (e) {
        e.preventDefault();
        
        var idx = $(this).parent().index();
        console.log(idx);
        
        $('#main.drive_page .drive_inner2>div').eq(idx).show().siblings().hide();
    });

    
    
    // 이벤트 페이지 버튼
    $('#main.event_page .event_inner2>div:gt(0)').hide();
    $('#main.event_page .btn_menu li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    })
    
    $('#main.event_page .btn_menu li>a').on('click', function (e) {
        e.preventDefault();
        
        var idx2 = $(this).parent().index();
        console.log(idx2);
        
        $('#main.event_page .event_inner2>div').eq(idx2).show().siblings().hide();
    });
    
    // 이벤트 페이지 페이지네이션 클릭
    $('#main.event_page .event_pagination a').on('click', function (e) {
        e.preventDefault();
    });
    
    $('#main.event_page .event_num>a').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    
});






















