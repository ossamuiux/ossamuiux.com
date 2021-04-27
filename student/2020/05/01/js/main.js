$(document).ready(function () {
    var gnbEl = $('#header .gnb_wrap');
    var emailPopupEl = $('#main .email_popup');
    
    /* header on클래스 (gnb .depth2 hover) */
    gnbEl.on('mouseenter',function () {
       $('#header').addClass('on');
    });
    
    gnbEl.on('mouseleave',function () {
       $('#header').removeClass('on');
    });
    
    /* gnb 삼각형(gnb:after) 애니메이션 */
    var gnbTriEl = $('#header .gnb_wrap .gnb_tri');
    
    $('#header .gnb_wrap .gnb>li').on('mouseenter', function() {
        // li 가로위치
        var posX = $(this).position().left;
        // li 가로길이
        var _width = $(this).width();
        // 삼각형의 기준점은 li가 아니라 gnb_wrap임
        // gnb_wrap 가로 = 1200px, gnb 가로 = 929px
        // (gnb_wrap과 li의 한쪽길이차이)+posX+(_width/2)
        gnbTriEl.stop().animate({left: 127 + posX + (_width/2), opacity:1},200);
    });
    /* 삼각형 없애기 */
    $('#header .gnb_wrap').on('mouseleave', function() {
        gnbTriEl.stop().animate({opacity:0},200);
    });
    
    /* index.html에서 depth2클릭하여 서브페이지 이동 */
    /*$('#header .gnb_wrap .gnb .depth2>li').each(function() {
        $(this).on('click', function(e) {
            // depth2 클릭시 .active 클래스 걸기
            // 나머지 형제요소는 active클래스 제거
            $(this).addClass('active').siblings().removeClass('active');
            
            // 탭 내용 연결하기
            $('#container .content').eq(i).addClass('on').siblings().removeClass('on');
        });
    }); */
    
    /* 메인 슬라이더 */
    var mySwiper = new Swiper('.main_slider', {
        loop: true,
        autoplay: {
            delay: 2000, // 슬라이드 지연시간
            disableOnInteraction: false, // 슬라이드 안쪽요소 클릭시 멈춤기능(기본값true)
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // 좌우 화살표
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    // 메인슬라이더 hover시 자동실행 멈춤
    $('.main_slider').hover(function() {
        mySwiper.autoplay.stop();    
    }, function() {
        mySwiper.autoplay.start();
    });
    
    /* 케이크 슬라이더 */
    var mySwiper2 = new Swiper('.cake_slider', {
        loop: true,
        autoplay: {
            delay: 2000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    
    /* 뉴스레터 - 소식지 구독 팝업창 열기 */
    var emailPopup = function() {
        
        $('#main .section3 .news_letter').on('click', function(e) {
            e.preventDefault();
            emailPopupEl.show();
        });

        $('#main .email_popup .popup_inner .btn_close').on('click', function() {
            emailPopupEl.hide();
        });
        
        emailPopupEl.on('click', function(event) {
            if (emailPopupEl.is(event.target)) {
                emailPopupEl.hide();
            }
        });
    };
    emailPopup();
    
    /* sns 슬라이더 */
    var mySwiper3 = new Swiper('.sns_slider', {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    /* 서브페이지 - content 탭 동작 */
    $('#container .location li').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();// a태그 기본이벤트 막기
            
            // 탭 li>a 클릭시 .active 클래스 걸기
            // 나머지 형제요소는 active클래스 제거
            $(this).addClass('active').siblings().removeClass('active');
            
            // 탭 내용 연결하기
            $('#container .content').eq(i).addClass('on').siblings().removeClass('on');
        });
    });
    
    /* menu.html - 케이크예약폼 datepicker */
    $('#datepicker').datepicker({
        dateFormat: 'yy.mm.dd', //Input Display Format 변경
        yearSuffix: '.', // 년도뒤에 .찍기
        monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true, // 년,월순으로 표시
        maxDate: "+2m", // 오늘날짜로 부터 일주일(1week)후 까지 날짜 선택가능(+1m, +2w, +1d, +y...)(알파벳앞에 숫자안쓰면 무조건 오늘까지만 선택가능)
        minDate: 0, // 오늘 날짜이후부터 선택가능
        beforeShow:function(textbox, instance){
            $('.datepicker_wrap').append($('#ui-datepicker-div'));
        }
    }); //input 오늘날짜 표시;
    
    
}); // ready 종료
