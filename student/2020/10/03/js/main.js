$(document).ready(function () {
    

    //메인슬라이더 높이 100%잡기
    var mainVisual = $('#main .main_visual');
    $(window).resize(function () {
        //창높이만큼 메인슬라이더 높이잡기(100%)
        var winH = $(window).height();
        //console.log(winH);
        mainVisual.height(winH);
        //console.log('리사이즈 발생');


        //데스크탑 메인슬라이더 아래로가면 헤더 색 바뀌게
        var winW = $(window).width();
        if (winW > 1230) {
            var _scrollTop = $(this).scrollTop();
            if( _scrollTop <= winH-90 ) {
                $('#header').css({
                    background: "rgba(255,255,255,0.8)",
                    "border-color" : "#fff",
                    });
                $('.gnb .depth2_wrap').css({
                    background: "rgba(255,255,255,0.8)",
                });
            }
            $(window).scroll(function () {
                var _scrollTop = $(this).scrollTop();
                if( _scrollTop >= winH-90) {
                    $('#header').css({
                        background: "#fff",
                        "border-color" : "#e4e4e4",
                    });
                    $('.gnb .depth2_wrap').css({
                        background: "#fff",
                    });
                } else {
                    $('#header').css({
                        background: "rgba(255,255,255,0.8)",
                        "border-color" : "#fff",
                    });
                    $('.gnb .depth2_wrap').css({
                        background: "rgba(255,255,255,0.8)",
                    });
                }
            });
        } else {
            $('#header').css({
                background: "#fff",
                "border-color" : "#e4e4e4",
            });
            $('.gnb .depth2_wrap').css({
                background: "#fff",
            });
            $(window).scroll(function () {
                var _scrollTop = $(this).scrollTop();
                if( _scrollTop >= winH-90) {
                    $('#header').css({
                        background: "#fff",
                        "border-color" : "#e4e4e4",
                    });
                    $('.gnb .depth2_wrap').css({
                        background: "#fff",
                    });
                } else {
                    $('#header').css({
                        background: "#fff",
                        "border-color" : "#e4e4e4",
                    });
                    $('.gnb .depth2_wrap').css({
                        background: "#fff",
                    });
                }
            });
        }
    }).trigger('resize');
    //console.log(mainSlider.length);
    
    ////헤더 클릭하면 나오게
    $('.util_wrap .click').on('click', function () {
        $('#header').addClass('on');
        $('#header .gnb_wrap').fadeIn();
    });
    
   
    
    
    //헤더 gnb bar 애니메이션
    var barGnb = $('.gnb_wrap .bar_gnb');
    
    $('.gnb_wrap .gnb>li').on('mouseenter', function () {
        var posX = $(this).position().left + $(this).outerWidth()/2 - 2;
        console.log(posX);
        
        barGnb.css({transform:'translateX(' + posX + 'px)', opacity:1});
    });
    
    $('.gnb').on('mouseleave', function () {
        barGnb.css({opacity:0});
    });
    
    
    //데스크탑 fix
    var winW = $(window).width();
    
    $(window).scroll(function () {
        var _scrollTop = $(this).scrollTop();
        if(_scrollTop > 0) {
            $('#header').addClass('on'); 
        } else {
            $('#header').removeClass('on');
        }
    });
    
    $('#header .open_btn').on('click', function () {
        $('#header').addClass('on');
    });
    
    var animateMenu = function () {
        var dimm = $('#header .dimm');
        var mGnb = $('#header .m_gnb .depth1');
        var btnOpen = $('#header .open_btn');
        //메뉴버튼 클릭시 메뉴 나오고 body 스크롤바 제거
        $('#header .open_btn').on('click', function (e) {
            e.preventDefault();
            dimm.toggleClass('on');
            $('#header .open_btn').toggleClass('on');
            mGnb.slideToggle();
            $('.m_gnb').toggleClass('on');
            $('body').toggleClass('on');
            
            //0.5초 뒤에 메뉴 초기화
            setTimeout(function () {
                $('.m_gnb .depth1>li>a').removeClass('on').next().slideUp();
            },300);
        });
        var _scrollTop = $(this).scrollTop();
        //스크롤0시 헤더 들어가기
        $(window).scroll(function () {
            
            if(_scrollTop === 0) {
                $('#header .open_btn').removeClass('on');
                mGnb.slideUp(300);
                dimm.removeClass('on');
                $('body').removeClass('on');
                $('.m_gnb').removeClass('on');
            }
        });
        
        
        
        
        //dimm클릭시 강제 btn_open 클릭
        dimm.on('click', function () {
            btnOpen.trigger('click');
        });
        
        //헤더 아코디언메뉴(클릭한 메뉴 하나만 열고 나머지 닫기)
        $('.m_gnb .depth1>li>a').on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('on').next().stop().slideToggle();
            $(this).parent().siblings().find('>a').removeClass('on').next().slideUp();
        });
        
        //depth2 클릭시 애니메이션 보여주고 gnb_wrap 닫은 후 서브페이지로 이동
        $('.m_gnb .depth2 a').on('click', function (e) {
            e.preventDefault();
            $(this).addClass('on');
            var target = $(this).attr('href');
            
            setTimeout(function () {
                btnOpen.trigger('click');
            },300);
            
            setTimeout(function () {
               location.href = target; 
            }, 850);
        });
        
    };
    animateMenu();
    
    //신제품 슬라이더 2개 연동
    var mySwiper1 = new Swiper('.newimage_slider', {
        loop: true,
        autoplay: {
            delay: 7000,
        },
        speed: 600,
    });
    
    var mySwiper2 = new Swiper('.newtext_slider', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        speed: 600,
        effect: 'fade',
    });
    
    mySwiper2.controller.control = mySwiper1;
    mySwiper1.controller.control = mySwiper2;
    
    var mySwiper3 = new Swiper('.product_slider', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
//        centeredSlides: true,
        watchSlidesVisibility: true,
        breakpoints: {
            767: {
              slidesPerView: 1,
            },
            1231: {
                slidesPerView: 2,
            },
            1920: {
                slidesPerView: 3,
            },
        },
    });
    
    
    //메인 섹션4 캠페인 탭버튼
    $('.section4 button').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active').parent().siblings().find('button').removeClass('active'); 
        
        var tab_id = $(this).attr('data-tab');
        
		$('.video_wrap').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
    });
});












