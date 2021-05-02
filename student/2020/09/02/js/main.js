$(document).ready(function() {
    //탑버튼
    var btnTop = $('#footer .btn_top');
    
    $(window).scroll(function () {
        var _scrollTop = $(this).scrollTop();
        //console.log(_scrollTop);
        
        if(_scrollTop >= 100) {
            btnTop.fadeIn();
        } else {
            btnTop.fadeOut();
        }
    });
    
    $('#footer .btn_top a').on('click', function (e) {
        e.preventDefault();
        
        $('html, body').animate({scrollTop:0})
    });
    
    
    var animateMenu = function () {
        var dimm = $('#header .gnb_dimm');
        var gnbWrap = $('#header .gnb_wrap, body');
        
        // 메뉴 클릭시 메뉴나오고 body 스크롤바 제거
        $('#header .btn_menu').on('click', function () {
            dimm.stop().fadeToggle();
            $(this).toggleClass('on');
            gnbWrap.toggleClass('on');
            
            
        });
        
        //inputbox 클릭시 모바일에서 키보드에 가려서 안보이기 때문에 클릭시 input_box에 padding값을 주고 스클롤을 내려줌
        $('#search').on('focusin', function () {

            var offset = $(this).offset().top;
            console.log(offset);

            $('#header .gnb_wrap').animate({
                scrollTop: offset
            }, 400);

        });

        //아코디언 메뉴(위에 3개메뉴만 열리고 닫힘)
        $('.gnb_wrap .gnb>li:lt(3)>a').on('click', function (e) {
            e.preventDefault();

            $(this).toggleClass('on').next().stop().slideToggle();
            $(this).parent().siblings().find('>a').removeClass('on').next().slideUp();
        });

        dimm.on('click', function () {
            btnClose.trigger('click');
        });
        
        // 차량안내 리스트 탭메뉴
        $('.gnb .list_car li').on('click', function () {
            $(this).toggleClass('on').find('.depth3').stop().slideToggle();
            $(this).siblings().find('.depth3').slideUp();
            
            
            $(this).find('button').toggleClass('active');
            $(this).siblings().find('button').removeClass('active');
        });
    };
    animateMenu();
    

    // 메인 슬라이더
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
            delay: 3000,
            disableOnInteraction: false,
        },
    });
    
    // 베스트 모델 슬라이드
    var mySwiper2 = new Swiper('.product_slider', {
        loop: true,
        slidesPerView: 2, //숫자 auto가능
        centeredSlides: true,
        watchSlidesVisibility: true, //화면에 보이는 슬라이드에 동적 클래스 걸어줌
        
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
    
    // channel 슬라이더
    var mySwiper3 = new Swiper('.channel_slider', {
        loop: true,
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    
    //test_drive papge
    $('#main.test_drive_page .btn_more').on('click', function () {
        $(this).addClass('on');
        $(this).next().toggleClass('on');
    });
    
    
    
    
    //event_page
    var btnMore = $('#main.event_page .btn_more');
    
    btnMore.on('click', function() {
        $(this).toggleClass('on').next().toggleClass('on');
        
    });
    
    
    $('#main.event_page .btn_menu li').on('click', function (e) {
        e.preventDefault();
        
        $(this).addClass('active').siblings().removeClass('active');
        
        var idx2 = $(this).index();
        console.log(idx2);
        
        $('#main.event_page .event_inner2>div').eq(idx2).show().siblings().hide();
        $(this).parent().toggleClass('on');
        
        btnMore.removeClass('on');
        
        var str = $(this).text();
        console.log(str);
        
        btnMore.text(str);
    })
    
    //event list
    $('#main.event_page .event_inner2>div:gt(0)').hide();
    
    // event pagination
    $('#main.event_page .event_num a').on('click', function(e) {
        e.preventDefault();
        
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    
     
    //faq 페이지
    $('#main.faq_page .select_wrap').on('click', function () {
        $(this).toggleClass('on');
    });
    
    $('#main.faq_page .list_wrap li').on('click', function (e) {
        e.preventDefault();
        
        $(this).toggleClass('active').siblings().removeClass('active');
        $(this).toggleClass('on').siblings().removeClass('on');
        $(this).children('.tit_wrap').slideToggle();
        $(this).siblings().children('.tit_wrap').slideUp();
    });
    
    // faq fagination
    $('#main.faq_page .faq_num a').on('click', function(e) {
        e.preventDefault();
        
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    
    
    
    // pc버전 보기
    $('#footer .btn_pc').on('click', function () {
        setInstantCookie('forcePc','1');
    });
});

function setInstantCookie(name, value) {
    //var date = new Date();

    // day를 밀리세컨으로 변환하여 더한값으로 시간을 수정, day가 1이면 하루 더한 날짜로 세팅
    // getTime(), 1970.01.01부터 현재까지의 밀리세컨드
    //date.setTime(date.getTime() + day * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';path=/';
};

















