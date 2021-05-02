$(document).ready(function() {
    var headerEl = $('#header');
    var gnbBar = $('#header .gnb_bar');
    var hbEl = $('#header, body');
    var dimmEl = $('#header .header_inner .dimm');
    var gnbEl = $('#header .gnb_wrap .gnb');
    
    // GNB header on처리
    gnbEl.on('mouseenter', function() {
        headerEl.addClass('on')
    });
    
    headerEl.on('mouseleave', function() {
        hbEl.removeClass('on')
        dimmEl.stop().fadeOut(200);
    });
    
    // GNB bar
    $('#header .gnb>li').on('mouseenter', function() {
        var _width = $(this).width();
        var posY = $(this).position().left;
        
        gnbBar.stop().animate({left:posY, width:_width, opacity: 1},300);
    });
    
    gnbEl.on('mouseleave', function() {
        gnbBar.stop().animate({opacity: 0},300);
    });
    
    // 메인 슬라이더
    var mySwiper = new Swiper ('.main_slider', {
        loop: true,
        effect: 'fade',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
        },
    });
    
    // 모바일메뉴
    $('#header .btn_menu, #header .dimm').on('click', function() {
        dimmEl.stop().fadeIn(200);
        hbEl.addClass('on');
    });
    
    $('#header .btn_close, #header .dimm').on('click', function() {
        dimmEl.stop().fadeOut(200);
        hbEl.removeClass('on');
    });
    
    /* 모바일하단 GNB */
    $('.m_gnb>li>a').on('click', function(e) {
        e.preventDefault;
        $(this).toggleClass('active').parent().siblings().find('a').removeClass('active');
        
        $('.m_gnb .depth2').stop().slideUp();
        
        if($(this).hasClass('active')) {
            $(this).siblings().stop().slideDown();
        }
    });
    
    /* 섹션1 */
    var posY1 = $('#main .section1').offset().top;
    
    $(window).scroll(function() {
        var _scroll = $(this).scrollTop();
        
        if(_scroll > 0) {
            $('#main .section1').addClass('on');
        }
    });
    
    /* 섹션2 */
    $('#main .section2 .list_tit li').on('click', function(e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    /* 섹션3 SNS슬라이더 */
    var mySwiper2 = new Swiper ('.sns_slider', {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 20,
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },  
        },
        
    });
    
    // 탑버튼
    $(window).scroll(function() {
        var btnTop = $('#main .btn_top');
        var _scroll = $(this).scrollTop();
        
        if(_scroll >= 200) {
            btnTop.fadeIn();  
        } else {
            btnTop.fadeOut(); 
        }
        
        btnTop.on('click', function(e) {
            e.preventDefault();
            $('html, body').stop().animate({scrollTop:0});
        });
    });
    
    // 푸터 패밀리버튼
    $('#footer .footer_inner .family_wrap .btn_family').on('click', function() {
        $('#footer .footer_inner .family_wrap, body').toggleClass('on');
    });
    
    $('#footer .footer_inner .family_wrap .btn_family_close').on('click', function() {
        $('#footer .footer_inner .family_wrap, body').removeClass('on');
    });
    
    
});

    
    
    
    
    
    
    
    
    
    
    
    
    










