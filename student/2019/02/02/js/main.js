$(document).ready(function(){
    //gnb 메뉴
    $('#header .btn_menu').on('click',function(){
        $('#header .gnb_wrap, body').addClass('on');
        $('#header .dimm').fadeIn();
    });
    
    $('.top_gnb .btn_menu_close').on('click',function(){
        $('#header .gnb_wrap, body').removeClass('on');
        $('#header .dimm').fadeOut();
    });
    
    //탭슬라이더
    $('.gnb_scroll .gnb>li>a').on('click',function(){
       $(this).parent().toggleClass('active');
        $(this).siblings('.depth2').stop().slideToggle();
    });
    
    var swiper = new Swiper('.main_slider', {
        direction: 'vertical',
        loop: false,
        mousewheel: true,
        on: {
            slideChange: function () {
                console.log(swiper.activeIndex);
                if (swiper.activeIndex==0){
                    $('.left_header').removeClass('on');
                } else {
                    $('.left_header').addClass('on');    
                }
            },
        }
    });   
    
    var mySwiper2 = new Swiper ('.main_visual_wrap', {
        loop: true,
        pagination: {
            el: '.main_visual_page',
            type: 'fraction',
        },
        speed: 2000,
        effect: 'fade',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
    });
});