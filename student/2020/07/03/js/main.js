$(document).ready(function () {
    //태블릿, 모바일 내비게이션 아코디언 메뉴 공통
    var mGnb = function () {
        var gnbWrap = $('#mHeader .m_gnb_wrap');
        var body = $('body');
        
        //아코디언 메뉴 열고 닫기 + body 고정
        $('#mHeader .btn_menu').on('click', function () {
            gnbWrap.addClass('on');
            body.addClass('on');
        });
        
        $('#mHeader .m_gnb_wrap .btn_close_menu').on('click', function () {
            gnbWrap.removeClass('on');
            body.removeClass('on');
        });
        
        //depth1 탭메뉴 처리
        $('.depth1 li a').on('click', function (e) {
            //기본 이벤트 막기
            e.preventDefault();
            
            //탭메뉴의 인덱스 순서를 추출하는 변수
            var idx = $(this).parent().index();
            
            //탭메뉴 액티브 변경
            $(this).parent().addClass('active').siblings().removeClass('active');
            
            //변수로 추출한 탭메뉴의 순서로 depth2의 순서를 찾아 액티브 처리
            $('.m_gnb .depth2_wrap>ul').eq(idx).addClass('active').siblings().removeClass('active');
            
            $('.m_gnb .depth2>li').removeClass('on').parent().find('.depth3').hide();
        });
        
        //depth2, depth3 처리
        $('.depth2>li>a').on('click', function (e) {
            //기본 이벤트 막기
            e.preventDefault();
            
            //클릭한 메뉴의 depth3 열고 형제 메뉴의 depth3 닫기
            $(this).next().stop().slideToggle().parent().siblings().find('.depth3').slideUp();
            
            //클릭한 depth2의 밑줄 색 변경
            $(this).parent().toggleClass('on').siblings().removeClass('on');
        });
        
        //추가 정보 버튼 처리
        $('#mHeader .btn_info').on('click', function () {
            $(this).toggleClass('on').next().toggleClass('on');
        });
    };
    mGnb();
    
    //메인 슬라이더
    var mainSlider = new Swiper ('.main_slider', {
        effect: 'fade',
        speed: 1500,
        loop: true,
        simulateTouch: false,
        
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    
    //메인 비주얼 우측버튼 처리
    $('.right_btn_wrap li a').on('click', function (e) {
        if($(window).width() <= 1250 ) {
            if(!$(this).parent().hasClass('on')) {
                e.preventDefault();
                $(this).parent().addClass('on').siblings().removeClass('on');
            }
        }
    });
//    메인비주얼 하단 할인 정보 슬라이더 
    var infoSlider = new Swiper('.info_slider', {
        slidesPerView: 'auto',
        simulateTouch: false,
        loop: true,
        speed: 2000,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        }
    });
//    보험료 할인 관련 제품 슬라이더 
    var productSlider = new Swiper('.product_slider', {
        spaceBetween: 7,
        slidesPerView: 'auto',
        resistanceRatio: 0,
        breakpoints: {
            767: {
                slidesPerView: 'auto',
                spaceBetween: 20,
            },
        },
    });
//    서비스 영역 배너 슬라이더 
    var banner = new Swiper('.banner_slider', {
        loop: true,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        autoplay: {
            delay: 3000,
        },
    });
    
//    타블렛 영역 서비스 섹션 크기 가변처리
    $(window).resize(function () {
        var winW = $(this).width();
        var callWrap = $('.section4 .call_wrap');
        if(winW <= 1267 && winW > 750) {
//            배너의 높이를 변수에 담아 이웃한 칼럼의 높이를 조정해줌
            var bannerH = $('.banner_slider').css('height');
            callWrap.css('height', bannerH);
        } else if(winW > 1267) {
            callWrap.css('height', '221px');
        } else {
            callWrap.css('height', '230px');
        }
        if(winW <= 1267)
            var callW = $('.call_num').css('width');
            $('.section4 .btn_call').css('width', callW);
    }).trigger('resize');
    
//    타블렛 이하 서비스 영역 드롭다운 처리 
    var btnCall = $('.btn_call_wrap .btn_call');
    
    btnCall.on('click', function () {
        $(this).toggleClass('on').next().toggle();
        
        //드롭다운 활성화 이후 이외 영역을 클릭시 드롭다운 닫기
        $(document).on('click', function (e) {
            if(!$(e.target).closest('.btn_call_wrap').length) {
                btnCall.removeClass('on').next().hide();
                $(document).off('click');
            }
        });
        
        //드롭다운 클릭시 리스트 닫기
        $('.btn_call_wrap .list_call a').on('click', function () {
            btnCall.removeClass('on').next().hide();
        });
        
    });
    
//    푸터 상단 드롭다운 처리
    
    var btnFootDrop = $('#footer .btn_dropdown');
    
//    드롭다운 클릭시 on클래스 추가하여 css적용하고 메뉴 열기 
    btnFootDrop.on('click', function () {
        $(this).toggleClass('on').next().toggle();
        
        //드롭다운 클릭시 리스트 닫기
        $('.btn_call_wrap .list_call a').on('click', function () {
            btnFootDrop.removeClass('on').next().hide();
        });
        
    //    드롭다운에서 마우스 이탈시 꺼주기(같은 형태의 드롭다운 둘이 인접해있으므로 동시에 켜지지 않도록 마우스 처리)
        $('#footer .dropdown').on('mouseleave', function () {
            $(this).find('.btn_dropdown').removeClass('on').next().hide();
        });
        
    });
    
});//ready












