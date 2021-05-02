$(document).ready(function() {
    
// 더보기 버튼 공통
    var btnMore = $('.btn_more'); 
    
    btnMore.on('mouseenter', function () {
        $(this).css("transform","rotate(-90deg)");
    });
    btnMore.on('mouseleave', function() {
        $(this).css("transform","rotate(0)");
    });
    
// 페이지네이션 액티브 처리 공통
    $('.tbl_pagination a').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        return false;
    });    

// 서브페이지. 탑 버튼
        var btnTop = $('#footer .btn_top');

        $(window).scroll(function(){
            if($(this).scrollTop() > 300){
                btnTop.fadeIn(500);
            }else{
                btnTop.fadeOut(500);
            }
        });
        btnTop.on('click', function () {
            $('html, body').animate({scrollTop : 0}, 400);
        });

// 서브페이지. 브레드크럼
    var breadcrumbList1 = $('.breadcrumb .breadcrumb_list1');
    var breadcrumbList2 = $('.breadcrumb .breadcrumb_list2');
    var breadcrumbList3 = $('.breadcrumb .breadcrumb_list3');
    
    $('.breadcrumb .breadcrumb_item1>a').on('click', function() {
        breadcrumbList1.toggleClass('active');

        if(breadcrumbList1.hasClass('active')) {
            breadcrumbList2.removeClass('active');
            breadcrumbList3.removeClass('active');
        } 
        return false;
    });

    $('.breadcrumb .breadcrumb_item2>a').on('click', function() {
        breadcrumbList2.toggleClass('active');

        if(breadcrumbList2.hasClass('active')) {
            breadcrumbList1.removeClass('active');
            breadcrumbList3.removeClass('active');
        }
        return false;
    });
    
    $('.breadcrumb .breadcrumb_item3>a').on('click', function() {
        breadcrumbList3.toggleClass('active');

        if(breadcrumbList3.hasClass('active')) {
            breadcrumbList1.removeClass('active');
            breadcrumbList2.removeClass('active');
        }
        return false;
    });
    
// 브레드크럼 초기화
    $('html body').on('click', function(){
        $('.breadcrumb .breadcrumb_list').removeClass('active');
    });
        
    
///////////////////////////////////// 헤더 /////////////////////////////////////
    var gnbWrap = $('#header .gnb_wrap');
    var gnbDepth1 = $('.gnb_wrap .depth1');
    var gnbDepth2 = $('.gnb_wrap .depth2');
    var header = $('#header');
    
// 헤더 Case1. 메인화면에서 스크롤 했을 때.
    $(window).scroll(function() {
        var _scrollTop = $(this).scrollTop();
        
        if(_scrollTop > 160) {
            header.addClass('off');
            gnbWrap.show();
            checkClick = false;
        } else {
            header.removeClass('off');
            
            if(!checkClick) {
                gnbWrap.hide();
            }
        }       
    });
    
// 헤더. Case2. gnb 열린 상태에서 스크롤 했을 때
    var checkClick = false;
    
    $('#header .btn_gnb').on('click', function() {
        checkClick = true;
        // 햄버거메뉴 클릭하면 gnb 슬라이드다운
        gnbWrap.slideDown();
    });
    
// 헤더. Case2-1. 닫기버튼 클릭하면 gnb 슬라이드 업
    $('#header .gnb_wrap .btn_close').on('click', function () {
        gnbWrap.slideUp();
    });
    
    $('.gnb_wrap .depth1').on('mouseenter', function() {
        $(this).parent().addClass('on');    
    });
    $('.gnb_wrap').on('mouseleave', function() {
        $(this).removeClass('on');    

    });
    
// 헤더. Case3. 스크롤했을 때 depth1 보이는 상태에서 마우스호버할 경우 depth2 슬라이드다운
    gnbWrap.on('mouseenter', function () {
        gnbWrap.addClass('on');
    });
    gnbWrap.on('mouseleave', function () {
        gnbWrap.removeClass('on');
    })
    
// 헤더. util 검색버튼
    $('#header .util .btn_search').on('click', function () {
        $('#header .util .input_search').animate({width: 'toggle'}, 300, 'linear');
    });
    
/////// 메인페이지. 메인슬라이더
// new Swiper의 .main_slider로 변경해줌.
    var mySwiper = new Swiper('.main_slider', {
        loop: true,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    
/////// 섹션 3. 마우스 호버 시 더보기 버튼 회전
    var btnEvent = $('.btn_event'); 
    var viewMore = $('#main .section3 .list_banner2 .right .view_more');
    
    viewMore.on('mouseenter', function () {
        $(btnEvent).css("transform","rotate(-90deg)");
    });
    viewMore.on('mouseleave', function() {
        $(btnEvent).css("transform","rotate(0)");
    });
    
/////// 서브페이지. 제임스터렐. 클릭시 위치 찾아가기.
    $('.category_wrap .category_list li a').on('click', function(e) { 
        e.preventDefault();
        var _offsetTop = $(this.hash).offset().top - 140;
        $('html, body').stop().animate({scrollTop:_offsetTop},1200,'easeOutExpo');
    });
});




































