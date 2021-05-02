var front = {
    st: 0,
   
    init: function() {
        this.gnb();
        this.mGnb();
        this.mainSlider();
        this.mainBnfSlider();
        this.mainSvcSlider();
        this.mainSvcTab();
    },
    gnb: function() {
        header =  $('#header');
        
        $('#header .gnb').on('mouseenter', function() {
            header.addClass('on');
        });
        header.on('mouseleave', function() {
            header.removeClass('on');
        });
    },
    mGnb: function() {
        // 햄버거버튼 클릭시
        $('#header .util_wrap .allmenu').on('click', function() {
            $('body').addClass('on');
            $('#header .m_gnb_wrap').addClass('on');
        })
        // 닫기버튼, 딤 클릭시
        $('#header .m_gnb_top .btn_close, #dimm').on('click', function() {
            $('body').removeClass('on');
            $('#header .m_gnb_wrap').removeClass('on');
        })
        // 모바일 아코디언메뉴 구현
        $('#header .m_gnb>li>a').on('click', function() {
            $(this).parent().toggleClass('on').siblings().removeClass('on');
            
            // 뎁투 토글하고 다른뎁투는 닫기. 
            $(this).siblings('.depth2').stop().slideToggle().parent().siblings().find('.depth2').slideUp()
        })
            
    },
    mainScroll: function() {
        header =  $('#header');
        if (this.st > 10) {
            header.addClass('bg');
        } else {
            header.removeClass('bg');
        }

    },
    mainSlider: function() {
        var mainSlider = new Swiper('.main_slider', {
            loop: true,
            effect: 'fade',
            speed: 2000,
            autoplay: {
                delay: 6500,
                // 인터랙션해도 오토플레이하기 (기본값은 true)
                disableOnInteraction: false,
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
    },
    mainBnfSlider: function() {
        var bnfSlider = new Swiper('.benefit_slider', {
            loop: true,
            autoplay: {
                delay: 3000,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
        });
    },
     // 메인 서비스 슬라이더
     mainSvcSlider: function() {
        var svcSlider = new Swiper('.service_slider', {
            loop: true,
            centeredSlides: true,
            slidesPerView: 4.5,
            spaceBetween: 20,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                1200: {
                    slidesPerView: 1.8,
                    spaceBetween: 15,
                },
                767: {
                    slidesPerView: 1.2,
                },
            },
        });
    },
    // 메인 서비스 탭
    mainSvcTab: function() {
        // 탭 클릭시
        var serviceSlider =$('#container .service_slider_wrap .swiper_wrap');

        $('#container .main_service .list_tit li').on('click', function(e) {
            e.preventDefault();

            var idx = $(this).index();
            // 클릭한 li에 active 걸고 나머지는 삭제
            $(this).addClass('active').siblings().removeClass('active');
            // 클릭한 li와 일치하는 슬라이더 보여주고 나머지는 안보이게
            serviceSlider.eq(idx).addClass('active').siblings().removeClass('active');
        });
    },
}

$(document).ready(function() {
    front.init();
    
    $(window).scroll(function() {
        front.st = $(this).scrollTop();
        front.mainScroll();
    });
    
    $(window).resize(function() {
    });
});