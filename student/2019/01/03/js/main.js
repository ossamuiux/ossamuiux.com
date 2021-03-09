$(document).ready(function(){
    //메뉴 액티브
    var num=$('#main .main_slider .swiper-slide');
    
    if (num.attr('class') == '.swiper-slide-active') {
        $('#header .gnb_wrap .gnb li a').addClass('active').siblings().removeClass('active');
    }
    
    
    //메뉴 이동
    $('#header .gnb_wrap .gnb li, #mHeader .m_gnb li').on('click',function(){
        var num=$(this).index();
        mySwiper.slideTo(num);
        $('#mHeader .menu_wrap, #mHeader .btn_menu').removeClass('on');
    });
    
    
    //모바일메뉴
    $('#mHeader .btn_menu').on('click', function(){
        $(this).toggleClass('on');
        $(this).siblings('.menu_wrap').toggleClass('on');
    });
    
    
    //메인슬라이더
    var mySwiper = new Swiper ('.main_slider', {
        direction: 'vertical',
        slidesPerView:'auto',
        simulateTouch: true,
        mousewheel: true,
        speed: 1000,
        navigation: {
            nextEl: '.btn_scroll',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        on: {
            slideChange: function () {
                var num=mySwiper.activeIndex;
                $('#header .gnb li').eq(num).addClass('active').siblings().removeClass('active');
            },
        }
    })
    
    //sec3 프로그램슬라이더
    var mySwiper2 = new Swiper ('.pro_slider', {
        direction: 'horizontal',
        slidesPerView: 3,
        simulateTouch: false,
        spaceBetween: 60,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1024 : {
                slidesPerView: 3,
                spaceBetween: 40
            },
            767 : {
                slidesPerView: 1,
                spaceBetween: 20,
            }
        }
    })
    
//    //section4 table
//    $('#main .section4 .date a').on('mouseenter',function(){
//       $(this).parent().siblings('.left').addClass('on'); 
//    });
//    
//    $('#main .section4 .date a').on('mouseleave',function(){
//       $(this).parent().siblings('.left').removeClass('on'); 
//    });
//    
    
    
    
    
    
    
    
    
});