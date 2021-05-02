$(window).ready(function () {
    
    //스티키 배너가 아예 없을 경우 바로 fixed 하기
    if($('#stickyPopup').length === 0) {
        $('#header').addClass('on');
    }
    
    //스티키 배너 닫기, 스티키 닫혔을 때 헤더 최상단 fixed
    var btnSticky = $('#stickyPopup .btn_close');
    btnSticky.on('click', function () {
        $(this).parent().hide();
        $('#header').addClass('on');
    });
    
    
    //스티키 배너 존재 판정하여 헤더 최상단 fixed하기
    $(window).on('scroll', function () {
        if($('header').hasClass('on') === false) {
            if($(this).scrollTop() >= 80) {
                $('#header').addClass('on2');
            } else {
                $('#header').removeClass('on2');
            }            
        }
    });
    
    //gnb 호버, 포커스 처리 (키보드 접근성)
    var gnbWax = function () {
        var gnbDepth1 = $('#header .gnb .depth1>li');
        
        gnbDepth1.on('mouseenter focusin', function () {
            $(this).addClass('on').siblings().removeClass('on');
        }).on('mouseleave', function () {
            $(this).removeClass('on');
        });
        
        $('#header .gnb .depth2>li:last-child').on('focusout', function () {
            gnbDepth1.removeClass('on');
        });
        //gnb 밖의 링크에 포커스가 갈 때 on클래스 삭제
        $(document).focusin(function (e) {
            if(!$(e.target).closest('.gnb').length) {
                gnbDepth1.removeClass('on');
            }
        });
        
        $('#header .gnb .depth2>li').on('mouseenter focusin', function () {
            $(this).addClass('on').siblings().removeClass('on');
        }).on('mouseleave focusout', function () {
            $(this).removeClass('on');
        });        
    };
    gnbWax();
    
    //메인 비주얼 슬라이더
    var mainSlider = new Swiper('.main_banner .main_slider', {
        
        loop: true,
        speed: 800,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    //공지사항 버티컬 슬라이더
    var noticeSlider = new Swiper('.section1 .notice_slider', {
        
        loop: true,
        speed: 400,
        autoplay: {
            delay: 4000,
        },
        direction: 'vertical',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    
    //서브 페이지 탭메뉴 공통 처리
    $('.sub_main .content_inner .list_wrap:gt(0)').hide();
    $('.lnbtab a').on('click', function (e) {
        e.preventDefault();
        
        $(this).parent().addClass('active').siblings().removeClass('active');
        
        var idx = $(this).parent().index();
        
        $('.sub_main .content_inner .list_wrap').eq(idx).show().siblings().hide();
    });

    
    //이벤트 페이지 이벤트 슬라이더
    var mainSlider = new Swiper('.event_page .event_slider', {

        simulateTouch: false,
        speed: 600,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    //이벤트 페이지 탭메뉴
    $('.event_page .content_inner .list_wrap:gt(0)').hide();
    $('.tab_event a').on('click', function (e) {
        e.preventDefault();
        
        $(this).parent().addClass('active').siblings().removeClass('active');
        
        var idx = $(this).parent().index();
        
        $('.event_page .content_inner .list_wrap').eq(idx).show().siblings().hide();
    });
    
    
    
    
    //매장찾기 페이지 검색영역 탭메뉴 처리
    $('.store_page .form_wrap:gt(0)').hide();
    $('.search_tab a').on('click', function (e) {
        e.preventDefault();
        
        $(this).parent().addClass('active').siblings().removeClass('active');
        
        var idx = $(this).parent().index();
        
        $('.store_page .form_wrap').eq(idx).show().siblings().hide();
    });
    
    //검색영역 확대축소 버튼
    $('.store_page .search_box .btn_toggle').on('click', function () {
        $('.store_page .search_box').toggleClass('on').children('.search_wrap').slideToggle(500);
    });
    
    //매장찾기 검색 애니메이션
    $('.store_page .search_area .btn_search').on('click', function () {
        $(this).parent().next().slideDown(700);
    });
    
    
    
    
    
    
    //패밀리 사이트 클릭 처리
    var btnFamily = $('.family_site .btn_family');
    
    btnFamily.on('click', function () {
        $(this).toggleClass('on').next().toggle();
    });
    
    //패밀리 사이트 이외 영역을 클릭시 패밀리 사이트 닫기
    $(document).click(function (e) {
        if(!$(e.target).closest('.family_site').length) {
            btnFamily.removeClass('on').next().hide();
        }
    });
    
    
    //패밀리 사이트 이동시 리스트 닫기
    $('.family_site .list_family').on('click', function () {
        $(this).hide().prev().removeClass('on');
    });
    
    //퀵메뉴 애니메이션
    var quickAnimation = function () {
        var quickMenu = $('#footer .quick_menu');
        var docH = $(document).outerHeight();
        var bottomNum = 150;

        btnSticky.on('click', function () {
            bottomNum = 230;
        });
        
        window.onload = function () {
            docH = $(document).outerHeight();
        };
        
        
        $(window).on('scroll', function () {
            var _scrollTop = $(this).scrollTop();
            
            // 문서 하단으로 갈 시, 퀵메뉴 푸터 상단 픽스
            if(_scrollTop >= (docH - $(window).height() - bottomNum) ) {
                quickMenu.addClass('on');
            } else {
                quickMenu.removeClass('on');
            }
        }).trigger('scroll');
    }
    quickAnimation();
    
    // 탑 버튼 애니메이션
    $('.quick_menu .btn_top').on('click', function (e) {
        e.preventDefault();
        $('body, html').animate({scrollTop:0}, 600);
        
    });    
});


