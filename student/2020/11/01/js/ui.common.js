$(document).ready(function (){
    var header = $('#header');
    var productTapMenu = $('.cont1_wrap .cont1_tit>li');

    $('.gnb>li').on('mouseenter', function () {
        header.addClass('on');
    });
    header.on('mouseleave', function () {
        header.removeClass('on');
    });
  
        var mainSlider = new Swiper ('.main_slider', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
              },
          });
    
        var sectionSlider = new Swiper ('.section_slider', {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 4,
            loop: true,
        
            pagination: {
              el: '.swiper-pagination2',
            },
        
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });

    productTapMenu.on('click', function(e) {
        e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on');

        var idx = $(this).index();

        $('#main .cont1_wrap .section_slider').eq(idx).addClass('on').siblings().removeClass('on');

    });

    var sectionSlider = new Swiper ('.card_slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
    
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

});