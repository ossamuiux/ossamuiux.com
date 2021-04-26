$(document).ready(function() {

//gnb메뉴
    $('#header .btn_menu').on('click',function(){
        $('body, #header').addClass('on');
        
        $('#header .dimm').fadeIn();
    });
    
    $('.gnb_wrap .btn_close, #header .dimm').on('click', function(){
        $('body, #header').removeClass('on');
        $('#header .dimm').fadeOut();

    //dim, 닫기 버튼 눌렀을 때 gnb슬라이드 모두 닫기
        $('.gnb').find('a').removeClass('active').siblings().slideUp();
        
    });
    
    
    
//메인 슬라이더
    var mySwiper = new Swiper ('.main_slider', {
        loop: true,
        direction: 'horizontal',
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
    });
    
    // 메인슬라이더3
//    if ($('.main_slider .swiper-slide').hasClass('swiper-slide-active')) {
////        $('#main .swiper-slide3 .slide3_image1', this).toggleClass('on');
//        $(this).find('.slide3_image1').toggleClass('on');
//    };
    
//메인 섹션1 슬라이더
    var swiper = new Swiper('.section1_slider', {
        slidesPerView: 'auto',
        slidesPerGroup: 2,
        spaceBetween: 10,
        scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },
    });
    
    
    
    
// gnb메뉴 슬라이드다운
    $('.gnb>li>a').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active').parent().siblings().find('a').removeClass('active');
        
        
        $('.depth2, .depth3').stop().slideUp(300);
        
        if($(this).hasClass('active')) {
            $(this).siblings().stop().slideDown(300);
            } else {
    // 부모가 active를 가지고있지 않을 때 자식도 active 지우기
            $('.depth2>li>a').removeClass('active');
            }

    });

    
  $('.depth2>li>a').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active').parent().siblings().find('a').removeClass('active');

        
        $('.depth3').stop().slideUp(300);
        
        if($(this).hasClass('active')) {
            $(this).siblings().stop().slideDown(300);
        }
            $(this).parent().slideDown();
    });
    
    
// list_location    
    $('.btn_location').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active').parent().siblings().find('a').removeClass('active');
        
        
        $('.list_location').stop().slideUp(300);
        
        if($(this).hasClass('active')) {
            $(this).siblings().stop().slideDown(300);
            }

    });
    $(window).scroll(function(){
        var scrollY = $(this).scrollTop();
        console.log(scrollY);
    
        if( scrollY >= 280) {
            $('#container.product_design_lab .section2').addClass('on');
        }
        
        
        
                if (scrollY >= 420 ){
            $('.product_design_lab .section3 .product1').addClass('on');
        }
        
        if (scrollY >= 1630 ){
            $('.product_design_lab .section3 .product2').addClass('on');
        }
        if (scrollY >= 1980 ){
            $('.product_design_lab .section3 .product3').addClass('on');
        }
        if (scrollY >= 2310 ){
            $('.product_design_lab .section3 .product4').addClass('on');
        }
    });
});

    
    
    
    
    
    
    
    
    
    
    
    
    










