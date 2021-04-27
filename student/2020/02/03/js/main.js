$(document).ready(function() {
    //메뉴 활성화
    $('#header .gnb_wrap').on('mouseenter', function() {
        $('#header').addClass('on');
        $('#header .depth2_wrap').stop().delay(200).fadeIn();
    });
    //메뉴 비활성화
    $('#header').on('mouseleave', function() {
        $('#header').removeClass('on');
        $('#header .depth2_wrap').stop().hide();
    });
    
    //모바일 메뉴 활성화
    $('#header .btn_menu, .dimm').on('click', function() {
        $('#header .m_gnb_wrap').addClass('on'); 
        $('#header .dimm').stop().fadeIn(200);
        
        $('body').addClass('on');
    });
    
    //모바일 메뉴 비활성화
    $('#header .btn_close, .dimm').on('click', function() {
        $('#header .m_gnb_wrap').removeClass('on');
        $('#header .dimm').stop().fadeOut(200);
        
        $('body').removeClass('on');
    });
    

    
    //메인비주얼 슬라이드
    var mySwiper = new Swiper('.main_slide', {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 3000,
        },    
        speed:600,
    });
    
    //전시회 슬라이드
    var mySwiper2 = new Swiper('.show_slide', {
        loop:true,
        slidesPerView:2,
        centeredSlides:true,
        spaceBetween:160,
        pagination: {
            el: '.swiper-pagination',
            clickable:true,
        },
        breakpoints: {
/*        1024: {
              spaceBetween: 190,
            },*/
/*        767: {
            spaceBetween:300,
        },*/
        }
    });
    
    
    
    
    
    
    
    
    
});


    
    
    
    
    
    
    
    








