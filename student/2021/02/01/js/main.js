(function() {

    // 스크롤 위치
    // var scTop = $(window).scrollTop();


    // *************** gnb ***************
    $('#header .depth1>li').on('mouseenter', function() {
        $('#header').addClass('on');
        
        // depth1>li 의 position().left값
        var posX = $(this).position().left;
        // depth1>li>a 의  outerWidth 값
        var w = $(this).find('a').outerWidth();
        
        $('#header .underbar').css({
            'transform':'translateX(' + posX + 'px)',
            'width':w,
            'opacity': 1,
        });
        
    }).on('mouseleave', function() {
        $('#header').removeClass('on');
        
        $('#header .underbar').css({
            'opacity':0
        });
    });    
    
    // *************** 메인 슬라이더 (banner) ***************
    var mainSlider = new Swiper('.main_slider', {
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });

    // *************** 메인 메뉴 ***************
    var menuSlider = new Swiper('.menu_slider', {
        speed: 400,
        // loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    // 메인메뉴 탭 선택시 나머지탭 비활성화
    $('.main_menu .tab_menu li').on('click', function(e) {
        e.preventDefault();
        
        $(this).addClass('active').siblings().removeClass('active');
        
        // 메인메뉴 탭 index값
        var idx = $(this).index();
        
        $('.main_menu .tab_con .menu_slider_wrap').eq(idx).addClass('active').siblings().removeClass('active');
    });    


    // *************** 메인 이벤트 ***************
    var eventSlider = new Swiper('.event_slider', {
        speed: 400,
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });


    // *************** top 버튼 ***************
    // 스크롤바 위치가 0이 넘어가면 top버튼 보임
    $(window).scroll(function () {
        var scTop = $(window).scrollTop();
        // console.log(scTop);

        if (scTop > 0) {
            $('.btn_top').fadeIn(300);
        } else {
            $('.btn_top').fadeOut(300);
        }
    })
    // 탑버튼 클릭시 페이지 최상단으로
    $('.btn_top a').on('click', function (e) {
        e.preventDefault()

        $('html, body').animate({
            'scrollTop': 0
        });
    });
    


    
    
    // *************** footer ***************
    // 패밀리사이트 여닫기
    $('#footer .btn_wrap .btn_family').on('click', function() {
        // 패밀리사이트 열고 닫을때 상태에 따라 화살표 변경 및 딜레이
        setTimeout(function() {
            $('#footer .btn_wrap .btn_family').stop().toggleClass('on');
        }, 400);

        $('#footer .family_wrap').stop().slideToggle();
    });
    
    
    // *************** 서브페이지 - 공통 ***************
    
    // lnb
    $('.sub_container .lnb li a').on('click', function(e) {
        e.preventDefault();
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    
    
    // *************** 서브페이지 - 메뉴소개 ***************
    // li에 마우스엔터시 어둡게 + 돋보기
    $('.menu_wrap .contents li .img_wrap').on('mouseenter', function() {
        $(this).closest('li').addClass('on');
    }).on('mouseleave', function() {
        $(this).closest('li').removeClass('on');
    });


    // *************** 서브페이지 - 1:1 문의 ***************
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate();

    month = month >= 10 ? month:'0' + month;
    date = date >= 10 ? date:'0' + date;
        
    $('.inquiry_wrap .table_wrap .date').text(year + ' - ' + month + ' - ' + date);


    // *************** 서브페이지 - 공지사항 ***************
    
    // $('.notice_wrap .pagination .num').on('click', function(e) {
    //     e.preventDefault();
    //     $(this).addClass('on').siblings().removeClass('on');
    // });

    // $('.notice_wrap .pagination .first').on('click',function(e) {
    //     e.preventDefault();
    //     $('.notice_wrap .pagination .num:first').addClass('on').siblings().removeClass('on');
    // });
    
    
    // $('.notice_wrap .pagination .last').on('click',function(e) {
    //     e.preventDefault();
    //     $('.notice_wrap .pagination .num:last').addClass('on').siblings().removeClass('on');
    // });


    


})();