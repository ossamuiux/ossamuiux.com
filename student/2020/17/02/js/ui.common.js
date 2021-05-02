var front = {
    init: function() {
        front.gnbUI();
        front.showProduct();
        front.mainSlider();

        front.brandSliderUI();

        front.slidegnbMenu();

    },
    // 전체메뉴열기
    gnbUI: function() {
        $('#header .m_btn').on('click',function(e){
            e.preventDefault();
            $(this).addClass('on');
            $('body').toggleClass('on');
        });

        $('#header .m_btn').on('click', function() {
            $('.dimm').toggle();
        });
    },

    showProduct: function() {
        $('#header .btn_shop').on('click', function() {
            $('#header .btn_wrap .btn_search').css('opacity',0);
            $('#header .btn_wrap .btn_close').fadeIn(300);


            if ($('body').hasClass('on')) {
                $('#header .m_btn').trigger('click');
            }

            $('body').addClass('on2');
        });

        $('#header .btn_close').on('click',function() {
            $('body').removeClass('on2');
            $(this).hide();
            $('#header .btn_wrap .btn_search').css('opacity',1);
        });
    },
    mainSlider: function() {
        var slider = new Swiper('.main_slider', {
            loop: true,
            speed: 400, // 슬라이드 이동속도
            effect: 'fade',

            pagination: {
                el: '.swiper-pagination', // 위쪽에 지정한 슬라이더 안쪽요소만 불러짐
                clickable: true, // 페이지네이션 버튼 클릭
            },
            autoplay: {
                delay: 4000,
            },
        });

        // 창크기 찾아서 그 크기 만큼 메인비주얼 보여주기
        $(window).resize(function() {
            var winH = $(window).height() - 60;
            console.log(winH);
            $('.main_slider').height(winH);
        }).trigger('resize');
    },

    brandSliderUI: function() {
        var brandSlider = new Swiper('.brand_wrap_slider', {
            direction: 'horizontal',
            loop: true,
            speed: 600,
            simulateTouch: true,
            slidesPerView: 2,
            centerMode:true,
          
            autoplay: {
                delay: 3000,
                disableOnInteraction: true,
            },
        });
    },
    // 아코디언 열고 닫기
    slidegnbMenu: function() {
        $('#header .gnb_wrap .gnb>li>a').on('click', function(e) {
            e.preventDefault();
            // stop()사용시 이전애니메이션효과를 중지시켜줌
            $(this).siblings('.depth2').stop().slideToggle().parent().siblings().find('.depth2').slideUp();
        });
    },
};

$(document).ready(function() {
    front.init();
});
