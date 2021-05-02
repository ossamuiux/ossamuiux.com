(function() {

    // 스크롤 위치
    // var scTop = $(window).scrollTop();


    // *************** gnb ***************
    // gnb 메뉴열기
    gnbToggle();

    function gnbToggle() {
        // 메뉴버튼 gnb열림
        $('#header .btn_menu').on('click', function() {
            $('#wrap').addClass('active');
            $('#header .gnb_wrap').addClass('active');
            $('#header .gnb_bg').fadeIn(500).addClass('active');
        });
        
        // 닫기버튼 gnb닫힘
        $('#header .top_gnb .btn_close').on('click', function() {
            $('#wrap').removeClass('active');
            $('#header .gnb_wrap').removeClass('active');
            $('#header .gnb_bg').fadeOut(500).removeClass('active');
            setTimeout(function() {
                $('#header .gnb>li .depth2').slideUp();
                $('#header .gnb>li>a').removeClass('active');
            }, 500)
            
        });

        // gnb딤 gnb닫힘
        $('#header .gnb_bg').on('click', function() {
            $('#wrap').removeClass('active');
            $('#header .gnb_wrap').removeClass('active');
            $('#header .gnb_bg').fadeOut(500).removeClass('active');
            setTimeout(function() {
                $('#header .gnb>li .depth2').slideUp();
                $('#header .gnb>li>a').removeClass('active');
            }, 500)
        });

        // 메뉴 클릭시 depth2 열림
        $('#header .gnb>li>a').on('click', function() {
            $(this).toggleClass('active').parent().siblings().find('a').removeClass('active');
            $(this).siblings('.depth2').stop().slideToggle().closest('li').siblings().find('.depth2').slideUp();
        });
    }
    
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
    
    // 탭메뉴 슬라이더
    var tabMenuSlider = new Swiper('.tab_menu_slider', {
        speed: 400,
        // loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            // 스크롤바 크기 조절
            dragSize: 100,
        },
        // 스와이프시 반동값 (resistance: true, resistanceRatio: 0.85 가 기본값)
        // resistanceRatio 숫자가 줄어들수록 반동이 줄어듬
        // resistance: true,
        resistanceRatio: 0.5,
    });

    $('#container .tab_menu_slider a').on('click', function(e) {
        e.preventDefault();

        var idx = $(this).parent().index();
        
        $(this).addClass('on').parent().siblings().find('a').removeClass('on');
        
        // 메인메뉴 탭 선택시 나머지탭 비활성화
        $('#container .main_menu .tab_con .menu_slider_wrap').eq(idx).addClass('on').siblings().removeClass('on');
    });

    // 메뉴 슬라이더
    var menuSlider = new Swiper('.menu_slider', {
        speed: 400,
        // loop: true,
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
    });


    // *************** 메인 이벤트 ***************
    var eventSlider = new Swiper('.event_slider', {
        speed: 400,
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 25,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
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
    // 기업정보 여닫기
    $('#footer .bottom_footer .txt_wrap .btn_info').on('click', function(e) {
        e.preventDefault();

        $(this).toggleClass('active')
        $('#footer .bottom_footer .txt_wrap .info_wrap').slideToggle();
    });
    // 패밀리사이트 여닫기
    $('#footer .family_wrap .btn_family').on('click', function() {
        // 패밀리사이트 열고 닫을때 상태에 따라 화살표 변경 및 딜레이
        // setTimeout(function() {
            $('#footer .family_wrap .btn_family').stop().toggleClass('on');
        // }, 400);

        $('#footer .family_wrap .family_list').stop().slideToggle();
    });
    
    
    // *************** 서브페이지 - 공통 ***************
    
    // *************** 서브페이지 - 메뉴소개 ***************
    var subMenuTab = new Swiper('.sub_menu_tab', {
        speed: 400,
        // loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        // 스와이프시 반동값 (resistance: true, resistanceRatio: 0.85 가 기본값)
        // resistanceRatio 숫자가 줄어들수록 반동이 줄어듬
        // resistance: true,
        resistanceRatio: 0.5,
    });

    $('.menu_page .lnb .sub_menu_tab .swiper-slide a').on('click', function() {
        $(this).addClass('on').parent().siblings().find('a').removeClass('on');
    });
    
})();