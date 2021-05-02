$(document).ready(function () {
    
    //gnb li 마우스 올렸을때 depth2 보여줌
    $('#header .gnb li').on('mouseenter', function () {
        $(this).find('>.depth2').addClass('on')
    }).on('mouseleave', function () {
        $(this).find('>.depth2').removeClass('on');
    });
    
    // 데스크탑 메인슬라이더
    var mySwiper = new Swiper('.main_slider', {
        loop:true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        autoplay: {
            delay: 5000,
        },
    });
    
    // 메인슬라이더 이미지 변경 시작
    var slideImg = function() {
        var mainSlider = $('#main .main_slider');

        if (mainSlider.length) {

            var mainImg1 = $('#main .main_slider .slide1 img');  //첫번째 이미지 변수
            var mainImg2 = $('#main .main_slider .slide2 img');  //두번째 이미지 변수
            var mainImg3 = $('#main .main_slider .slide3 img');  //세번째 이ㅣ지 변수
            
            // 첫번째 이미지 src변경
            var path1 = mainImg1.attr('src');
            var tPath1 = mainImg1.attr('src').replace('main_visual01', 't_main_visual01');
            var mPath1 = mainImg1.attr('src').replace('main_visual01', 'm_main_visual01');
            
            // 두번째 이미지 crc 변경
            var path2 = mainImg2.attr('src');
            var tPath2 = mainImg2.attr('src').replace('main_visual02', 't_main_visual02');
            var mPath2 = mainImg2.attr('src').replace('main_visual02', 'm_main_visual02');
            
            // 세번째 이미지 src 변경
            var path3 = mainImg3.attr('src');
            var tPath3 = mainImg3.attr('src').replace('main_visual03', 't_main_visual03');
            var mPath3 = mainImg3.attr('src').replace('main_visual03', 'm_main_visual03');

            $(window).resize(function () {
                var winW = $(window).width();
                // 창크기가 1200초과 일때 변경
                if (winW > 1200) {
                    mainImg1.attr('src', path1);
                    mainImg2.attr('src', path2);
                    mainImg3.attr('src', path3);
                    //창크기가 1200이하 768이상 일때 변경
                } else if (winW >= 768 && winW <= 1200) {
                    mainImg1.attr('src', tPath1);
                    mainImg2.attr('src', tPath2);
                    mainImg3.attr('src', tPath3);
                    // 창크기가 678 미만 일때 이미지 변경
                } else if (winW < 678) {
                    mainImg1.attr('src', mPath1);
                    mainImg2.attr('src', mPath2);
                    mainImg3.attr('src', mPath3);
                }
            }).trigger('resize');
        };
    };
    
    slideImg();
    
    //메인 배너 이미지 변경
    var bannerImg = function () {
        if($('#main .banner').length) {
            var mainBan = $('#main .banner img')
            // 메인 베너 이미지 src 변경 변수
            var path1 = mainBan.attr('src');
            var path2 = mainBan.attr('src').replace('banner', 't_banner');
            var path3 = mainBan.attr('src').replace('banner', 'm_banner');
            
            $(window).resize(function () {
                var winW2 = $(window).width();
                
                //1200초과 일때 이미지 변경
                if (winW2 > 1200) {
                    mainBan.attr('src', path1);
                // 1200이하 768이상 일때 변경
                } else if (winW2 >= 768 && winW2 <= 1200) {
                    mainBan.attr('src', path2);
                // 678 미만 일때 이미지 변경
                } else if (winW2 < 678) {
                    mainBan.attr('src', path3);
                }
            }).trigger('resize');
        };
    };
    
    bannerImg();
    
    // 나를 위한 맞춤 추천 상품 슬라이드 시작
    var productSlider = new Swiper('.product_slider', {
        loop: true,
        slidesPerView:4,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        breakpoints: {
            1200: { // 1200이하 슬라이드 4
                slidesPerView:3,
            },
            767: { // 767 이하 슬라이드 3
                slidesPerView:2,
            },
        },
    });
    
    // 한샘 매장 슬라이드 시작
    var agenciesSlider = new Swiper('.agencies_slider', {
        loop:true,
        slidesPerView:3,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1200: { // 1200하상 슬라이드 3
                slidesPerView:2,
            },
            767: { // 767이하 슬라이드 2
                slidesPerView:1,
                spaceBetween: 0,
            },
        }
    });
    
    // 이달의 베스트 list_product 클릭시 모델 바꾸기
    $('.section5 .list_best>li').on('click', function(e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        
        var idx = $(this).index(); // this의 index 변수
        
        // 하나만 보여주고 나머지 형제는 active 해제
        $('.section5 .list_product>.product').eq(idx).addClass('active').siblings().removeClass('active');
    });
    
    // 타블렛,모바일 모달팝업
    $('#header .btn_modal').on('click', function (e) {
        e.preventDefault();
        
        $(this).next().addClass('on');
        $('#header .dimm').addClass('on');
        $('body').addClass('on');
    });
    
    // 딤 클릭시 모달팝업 끄기
    $('#header .dimm').on('click', function () {
        $('#header .m_list_modal').removeClass('on');
        $(this).removeClass('on');
        $('body').removeClass('on');
    });
    
    // footer fmaily site
    $('#footer .family_wrap .btn_family').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().stop().slideToggle();
    });
    
    // 모바일 네비게이션 시작
    var mGnb = function() {
        var category = $('#header .category .depth1>li');
        var gnbWrap = $('#header .m_gnb_wrap');
        
        // 모바일 footer menu 클릭시 메뉴 열기
        $('#footer .m_btn_menu').on('click', function (e) {
            e.preventDefault();

            gnbWrap.toggleClass('on');
            $('body').toggleClass('on');
        });
        
        // 닫기 버튼 클릭시 m_gnb, m_gbn li 닫기
        $('#header .btn_close').on('click', function () {
            gnbWrap.removeClass('on');
            $('body').removeClass('on');
            category.find('.depth2').slideUp();
            category.removeClass('on');
        });
        
        // m_gnb li클릭시 depth2 슬라이드 토글 
        category.on('click', function () {
            $(this).find('.depth2').stop().slideToggle();
            $(this).parent().siblings().find('.depth2').slideUp();
        });
        
        // 화면 리사즈 할때 m_gnb 초기화, m_gnb닫을 때 m_gnb 초기화
        var _win = $(window).width();
        
        $(window).resize(function () {
            if (gnbWrap.hasClass('on') && _win <= 767) {
                $('#header .m_gnb_wrap').removeClass('on');
                category.removeClass('on');
                category.find('.depth2').slideUp();
                $('body').removeClass('on');
            }
        });
    };
    
    mGnb();
});//ready












