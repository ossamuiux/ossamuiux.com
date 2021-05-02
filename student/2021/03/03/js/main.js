(function() {
    var nextPosition = 0;           // 스크롤 기본값
    var firstPosition = 0;          // 스크롤시 top값(현재 스크롤값)

    $(window).on('scroll', function() {
        firstPosition = $(this).scrollTop();
        
        // ios 최상단 바운스 스크롤시 scrollTop값이 음수일때 실행하지 않음
        if(firstPosition >= 0) {
            if(firstPosition > nextPosition) {
                $('#header').addClass('show');        // 헤더 올라감
            } else {
                $('#header').removeClass('show');     // 헤더 내려옴
            };
            nextPosition = firstPosition;
        }

        // 메인 슬라이더 하단 섹션으로 넘어갔을시 헤더 색상변경
        if(firstPosition > 400) {
            $('#header').addClass('white');
        } else {
            $('#header').removeClass('white')/* .css('transition','transform 0.5s ease, background 0.5s ease') */;
        }
    }).trigger('scroll');

    // 메인 ai,special,news섹션 스크롤 이벤트
    if($('.main_ai').length) {
        
        var aiPos = $('.main_ai').offset().top - 1000;
        var specialPos = $('.main_special').offset().top - 700;
        var newsPos = $('.main_news').offset().top - 700;
        
        $(window).on('scroll' , function() {
            var _scrollTop = $(this).scrollTop();
    
            if(_scrollTop >= aiPos) {
                $('.main_ai').addClass('on');
            }
            if(_scrollTop >= specialPos) {
                $('.main_special').addClass('on');
            }
            if(_scrollTop >= newsPos) {
                $('.main_news').addClass('on');
            }
        }).trigger('scroll');
    };
    


    // 메인 슬라이더
    var mainSlider = new Swiper('.main_slider', {
        loop: true,

        pagination: {
          el: '.swiper-pagination',
        },
        on: {
            slideChange: function () {
              $('#container .main_slider_wrap .main_slider .swiper-slide').addClass('on');
            },
        },
      });

      // 타블렛&모바일 메뉴 여닫기
    $('#header .btn_side').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('on');
        $('#headerWrap .side_menu').toggleClass('on');
    });
    
    $('#headerWrap .btn_close').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('on');
        $('#headerWrap .side_menu').removeClass('on');
    });

    // 메인 뉴스섹션 슬라이더
    var newsSlider = new Swiper('.news_slider', {
        slidesPerView: 3,
        spaceBetween: 30,

        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1140: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            767: {
                slidesPerView: 1.5,
                spaceBetween: 30,
            }
        },
    });

})();