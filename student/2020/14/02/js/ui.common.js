var front = {
    init: function() {
        front.gnbUI();
        front.mainSliderUI();
        front.newItemSliderUI();
        front.subLnbUI();
    },
    gnbUI: function() {
        $('#header .btn_open').on('click', function() {
            $('#header').addClass('on');
            $('#dimm').show();
            $('#header .btn_close').fadeIn();
        });
        $('#header .gnb_wrap .btn_close').on('click', function() {
            $('#header').removeClass('on');
            $('#dimm').fadeOut(300);
            $('#header .gnb_wrap .depth2').slideUp();
            $('#header .btn_close').hide();

        });
        $('#header .gnb_wrap .gnb>li>a').on('click', function() {
            $(this).siblings().stop().slideToggle().parents().siblings().find('.depth2').slideUp();
        });
    },
    mainSliderUI: function() {
        var slider = new Swiper('.main_slider_wrap .main_slider', {
            loop: true,
            autoplay: {
                delay: 3000,
            },
            pagination: {
              el: '.swiper-pagination',
              type:'progressbar',
            },
          });
    },
    newItemSliderUI: function() {
        var slider = new Swiper('.new_items_wrap .item_slider', {
            loop: false,
            slidesPerView: 'auto',
          });
    },
    subLnbUI: function() {
        $('.sub_container .sub_lnb_wrap a').on('click', function(){
            $(this).siblings().slideToggle();
            $(this).toggleClass('on');
        });
    },
};

$(document).ready(function() {
    front.init();
})