$(document).ready(function () {
    
    var mySwiper = new Swiper ('.main_slider', {
        direction: 'horizontal',
        loop: true,
//        autoplay: {
//            delay: 5000,
//            disableOnInteraction: false,
//        },
        navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
        },
    });
    
    //메인슬라이더 hover시 자동실행 멈춤
        $('.main_slider').hover(function(){
        mySwiper.autoplay.stop();
        }, function(){
        mySwiper.autoplay.start();
        });
    
    // 메인슬라이더3
        if ($('#main .swiper-wrapper .swiper-slide').hasClass('swiper-slide-active')) {$('#main .swiper-slide3 .slide3_character', this).toggleClass('on');
        };

    
    //scroll-------------------------
    $(window).scroll(function(){
        var scrollY = $(this).scrollTop();
        console.log(scrollY);

    //Section1 상품
        if (scrollY >= 350 ){
            $('#main .section1 .product_list').addClass('on');
        }
        else {
            $('#main .section1 .product_list').removeClass('on');
            }
    
        
    // Top 버튼
        if(scrollY >= 500){
            $('.btn_top').fadeIn();
        } else {
            $('.btn_top').fadeOut();
        }
            
        
        
// .product_design_lab .section3
        if (scrollY >= 1250 ){
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
    
    $('.btn_top').on('click',function(){
        $('html, body').animate({scrollTop:0});
        return false;
        });


    
    $(window).resize(function (){
  // width값을 가져오기
  var width_size = window.outerWidth;     
        console.log(width_size);
        
        
        
        
        
        
    });
  });



















