$(document).ready(function () {
    // 헤더
    var showMenu = function () {
        var btnGnb = $('#header .btn_gnb');
        var header = $('#header');
        
        // GNB버튼 클릭시 메뉴 드롭다운
        btnGnb.on('click', function () {
            header.toggleClass('on');
            
            
        // 닫기버튼 눌렀을 때 GNB 내부 초기화
            if(header.hasClass('on') !== 1) {
                $('.gnb_wrap .depth2').slideUp();
                $('.top_gnb .input_search').val('');
            }
        });

        // 헤더 아코디언 메뉴
        $('.gnb_wrap .gnb>li>a').on('click', function (e) {
            e.preventDefault();
            $(this).next().stop().slideToggle().parent().siblings().find('.depth2').slideUp();
        });
    };
    showMenu();
    
    // 페이지네이션 액티브 처리 공통
    $('.tbl_pagination a').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        return false;
    });
    // 서브페이지 공통. 브레드크럼
    
    $('.breadcrumb .breadcrumb_item>a').on('click', function() {
        $('.breadcrumb .breadcrumb_list').toggleClass('active');
    });

    // 메인 비쥬얼 슬라이더
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
    
    // 섹션2. 공간 슬라이더
    var mySwiper2 = new Swiper('.section2_slider', {
        // 슬라이더의 이미지 크기를 직접 입력할 경우 slidePerView를 사용하여야 크기가 적용됨. 
        slidesPerView: 'auto',
        
        scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
    
    // 섹션3. 더보기 버튼 클릭시 섹션 하부 콘텐츠 드랍다운
    $('.section3 .btn_more').on('click', function (e) {
        e.preventDefault();
        $('.section3 .btn_box').addClass('on');
        
        setTimeout(function () {
            $('.section3 .btn_box').removeClass('on');
            }, 300);

        setTimeout(function() {
            $('.section3').toggleClass('on');
        }, 400);
    });
    
    // PC버전
    $('#footer .btn_pc').on('click', function () {
            setInstantCookie('forcePc','1');
            // alert(getCookie('forcePc'))
    });
    
    
    
    
// 브레드크럼 초기화
//    $('html body').on('click', function(){
//        $('.breadcrumb .breadcrumb_list').removeClass('active');
//    });
});

function setInstantCookie(name, value) {
    // var date = new Date();
    // day를 밀리세컨으로 변환하여 더한값으로 시간을 수정, day가 1이면 하루 더한 날짜로 세팅
    // getTime(), 1970.01.01부터 현재까지의 밀리세컨드
    document.cookie = name + '=' + value + ';path=/';
};

function getCookie(name) {
    //match 문자열함수안의 정규표현식에 의해 배열의 3번째 방에 쿠키명(mainPopup)에 대한 value값이 들어감
    //mainPopup이란 쿠키명이 있으면 done값이 반환되고 없으면 null
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? value[2] : null;
};








