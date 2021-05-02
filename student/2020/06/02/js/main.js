$(document).ready(function() {
    // 오늘 날짜 구하는 함수
    // 1. 날짜 객체 생성
    // 2. 년, 월, 일을 각각의 변수에 대입
    // 3. 자릿수가 한자리(10보다 작으면)일 경우 '0'을 붙여줌
    // 4. 삼항연산자 사용하여 10보다 작으면 '0'을 붙여서 변수에 대입 시키고 아니면 해당값을 그대로 변수에 대입
    // 5. #date input에 구한 값을 attr()로 넣어줌
    // 6. 선택자를 인자값으로 함수 안쪽으로 전달하여 원하는 다른 input에도 오늘 날짜가 표시되게 함
    
    /*function getToday(obj) {
        var today = new Date();
        var year = today.getFullYear();
        
        // 삼항연산자
        // var 변수명 = (조건) ? 조건이 true면 실행 : 조건이 false면 실행;
        var month = ((today.getMonth() + 1) < 10) ? '0' + (today.getMonth() + 1) : (today.getMonth() + 1);
        var date = ((today.getDate() + 1) < 10) ? '0' + today.getDate() : today.getDate();
        
        $(obj).attr('value', year + '.' + month + '.' + date);
        console.log(year + '.' + month + '.' + date);
    }
    getToday('#date');
    getToday('#date2');
    
    // 제이쿼리 datepicker유틸리티 메서드로 모든 datepicker옵션 한번에 세팅
    $.datepicker.setDefaults({
        // input에 표시되는 날짜 형식
        dateFormat: 'yy.mm.dd', //Input Display Format 
        // 좌우버튼 title 툴팁 텍스트
        prevText: '이전 달',
        nextText: '다음 달',
        // 달력상단 년월 기호
        yearSuffix: '.', // 년도뒤에 .찍기
        // 요일 표시형식
        monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        // 상단 년, 월 순으로 나오게
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        // 달력이 다 만들어지기 전에 발생하는 이벤트형 메서드
        // input매개변수:datepicker가 연결할 요소
        showMonthAfterYear: true, // 년,월순으로 표시
        // 선택할 수 있는 최대 날짜(y:년, m:월, w:주, d:하루) ex. +1w +1d(오늘부터 8일) 문자만 사용 시 오늘까지
        maxDate : '+1m',
        // 하단 닫기 버튼
        //showButtonPanel : true,
    });
    
    // datepicker
    $('.section1 .btn_cal').on('click',function() {
        // input에 바로 연결하면 한번 클릭으로 나오지만
        // 버튼 클릭으로 연결 시에는 'show'사용해야 함
        $('#date').datepicker({
            // input에 표시되는 날짜 형식
            dateFormat: 'yy.mm.dd', //Input Display Format 변경
            // 달력상단 년월 기호
            yearSuffix: '.', // 년도뒤에 .찍기
            // 요일 표시형식
            monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
            // 상단 년, 월 순으로 나오게
            dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
            // 달력이 다 만들어지기 전에 발생하는 이벤트형 메서드
            // input매개변수:datepicker가 연결할 요소
            showMonthAfterYear: true, // 년,월순으로 표시
            containerDefaultWrap: '.input_wrap',
            beforeShow:function(textbox, instance){
                // 직접 넣은 요소에 달력을 추가해 줌
                // append() 해당 요소의 안쪽에 요소를 추가
                $('.datepicker_wrap').append($('#ui-datepicker-div'));
            }
        }).datepicker('show'); //input 오늘날짜 표시;
    });
    
    $('.calendar').datepicker();*/
    
    
    //바디 on처리
    $('#header .btn_m').on('click', function() {
        $('body, #header .gnb_wrap').addClass('on');
    });
    
    $('#header .btn_close').on('click', function() {
        $('body, #header .gnb_wrap').removeClass('on');
    });
    
    // 헤더 스크롤 흰색 배경
    $(window).scroll(function() {
        var _scrollTop = $(this).scrollTop();
        
        if(_scrollTop > 0) {
            $('#header').addClass('on');
        } else if(_scrollTop === 0) {
            $('#header').removeClass('on');
        }
    });
    
    
    // gnb 닫기버튼
    $('#header .gnb_wrap .top_gnb .btn_close').on('click', function() {
        $('#header .gnb_wrap').removeClass('on');
    });
    
    // gnb active처리
    $('#header .gnb_wrap .gnb>li>a').on('click', function(e) {
        e.preventDefault();
        
        $(this).toggleClass('active').parent().siblings().find('a').removeClass('active');
        
        $('#header .gnb_wrap .gnb .depth2').stop().slideUp(300);
        
        if($(this).hasClass('active')) {
            $(this).siblings().stop().slideDown(300);
        }
    });
    
    // 메인슬라이더 높이
    var windowHeight = $(window).height();
    $('#main .main_slider').height(windowHeight);
    
    // 메인슬라이더
    var mySwiper = new Swiper ('.main_slider', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
    
    // 섹션1 제품슬라이더
    var mySwiper1 = new Swiper ('.product_slider', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    // 섹션2 이름슬라이더
    var myswiper2 = new Swiper('.brand_tit_slider', {
        freeMode: true,
        slidesPerView: 'auto',
    });
    
    // 섹션2 제품 슬라이더
    var mySwiper3 = new Swiper ('.brand_slider', {
        slidesPerView: 3,
        pagination: {
            el: '.swiper-pagination',
        },
    });
    
    // 섹션2 active처리
    $('#main .section2 .brand_tit_slider .swiper-slide').on('click', function(e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        
        var num = $(this).index();
        console.log(num);
        $('#main .section2 .brand_slider').eq(num).addClass('active').siblings().removeClass('active');
    });
    
    // 패밀리사이트 버튼
    $('#footer .family_wrap .btn_family').on('click', function() {
        $('#footer .family_wrap').toggleClass('on');
        $('#footer .sns_wrap').removeClass('on');
        $('#footer .btn_wrap .list_family').stop().slideToggle(200);
        $('#footer .btn_wrap .list_sns').slideUp(200);
    });
    
    // sns 버튼
    $('#footer .sns_wrap .btn_sns').on('click', function() {
        $('#footer .sns_wrap').toggleClass('on');
        $('#footer .family_wrap').removeClass('on');
        $('#footer .btn_wrap .list_sns').stop().slideToggle(200);
        $('#footer .btn_wrap .list_family').slideUp(200);
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});