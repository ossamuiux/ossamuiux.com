var front = {
    sc: 100,
    header: null,
    init: function() {
        front.subSlider = $('.company_contents .value_wrap')

        front.header = $('#header');
        front.headerUI();
        front.mainSliderUI();
        front.allSearchUI();
        front.scrollMainUI();
        front.brandSliderUI();
    },
    headerUI: function() {
        var header = $('#header');

        $('#header .menu_wrap .gnb').on('mouseenter', function() {
            header.addClass('on');
        }).on('mouseleave', function() {
            header.removeClass('on');
        });
    },
    mainSliderUI: function() {
        var mainSlider = new Swiper('.main_slider', {
            direction: 'horizontal',
            loop: true, 
            simulateTouch: false, //마우스드래그
            speed: 400, // 슬라이드 이동속도
            effect: 'fade', // 메인비주얼 페이드인

            // 자동
            autoplay: {
                delay: 6000, //다음슬라이더 들어오는 시간
                disableOnInteraction: false, // 슬라이더안쪽에서 인터렉션 발생시 안멈추게
            },
            
            pagination: {
              el: '.swiper-pagination', // 위쪽에 지정한 슬라이더 안쪽요소만 불러짐
              clickable: true, // 페이지네이션 버튼 클릭
            },

            navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
            },   
        });
    },
    allSearchUI: function() {
        var sw = true;

        $('#header .btn_search').on('click', function() {
            $(this).toggleClass('on');
            $('body').toggleClass('on');
            $('#header .all_search').slideToggle();

            if(sw) {
                $(this).text('통합검색닫기');
            }else {
                $(this).text('통합검색열기');
            }
            console.log(sw);
            // 부정연산자
            sw =! sw;

        });
    },
    // 스크롤시 gnb까지만 스크롤다운
    scrollMainUI: function() {
        if(front.sc > 100) {
            front.header.addClass('fixed');
        } else {
            front.header.removeClass('fixed');
        }

        // 메인 Life Style 애니메이션
        var posArr = [];
        var idx = 0;
        
        // lifeCon의 갯수만큼 반복하여 lifeCon의 위치값을 배열에 담아줌
        while(idx < front.subSlider.length) {
            posArr.push(front.subSlider.eq(idx).offset().top - 700);
            idx++;
        }
        
        // 스크롤바의 위치가 첫번째 lifeCon과 두번째 사이면 on추가
        if(front.sc >= posArr[0] && front.sc < posArr[1]) {
            front.subSlider.eq(0).addClass('on');
        } else if(front.sc >= posArr[1]) {
            front.subSlider.eq(1).addClass('on');
        } else if(front.sc === 0) {
            front.subSlider.removeClass('on');
        }
    },
    brandSliderUI: function() {
        var brandSlider = new Swiper('.brand_wrap_slider', {
            direction: 'horizontal',
            loop: true,
            speed: 600,
            simulateTouch: false,
            slidesPerView: 5,
            pagination: {
                el: '.swiper-pagination', 
                clickable: true,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: true,
            },
        });
    },
};

$(document).ready(function() {
    front.init();

    $(window).scroll(function() {
        front.sc = $(this).scrollTop();
        front.scrollMainUI();
    });
});