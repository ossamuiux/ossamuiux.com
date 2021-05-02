var front = {
    init: function() {
        front.langToggle();
        front.gnbUI();
        front.sitemapUI();
        front.mainSliderUI();
        front.newItemSliderUI();
    },
    langToggle: function() {

        $('#header .lang_wrap .lang_now').on('click', function() {
            $(this).parent().toggleClass('on');
            $(this).next().slideToggle();
        });
    },
    gnbUI: function() {
      var header = $('#header');

      $('#header .gnb_wrap .gnb>li>a').on('mouseenter', function() {
        header.addClass('on');
        $(this).siblings().show().parent().siblings().find('.depth2').hide();

      });

      header.on('mouseleave', function() {
        header.removeClass('on');
      });
    },
    sitemapUI:function() {
      var sitemap = $('#header .sitemap');
      $('#header .btn_sitemap').on('click', function() {
        sitemap.fadeIn().addClass('on');
      });

      $('#header .btn_close').on('click', function() {
        sitemap.fadeOut().removeClass('on');
      });
    },
    mainSliderUI:function() {
        var main_slider = new Swiper('.main_slider', {
            direction: 'horizontal',
            loop: false,
            simulateTouch: false, 
            speed: 500,
            autoplay: {
              disableOnInteraction: false,
            },
          
            pagination: {
              el: '.swiper-pagination',
              clickable:true,
            },
          
          });
    },
    newItemSliderUI: function() {
        var itemSlider = new Swiper('.item_slider', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
            slidesPerView: 5,
            spaceBetween: 7,
            slidesPerGroup: 5,
            slidesPerGroupSkip:2,
          
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
            },
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          
          });
    },
    subLnbUI: function() {
      
    }
};
$(document).ready(function() {
    front.init();

});