var front = {
    init: function() {
        this.gnbUI();
        this.mGnbUI();
        this.mainSliderUI();
        this.eventSliderUI();

    },
    gnbUI: function() {
        $('#header .btm_header .gnb').on('mouseenter',function() {
            $('#header').addClass('on');
        }).on('mouseleave',function(){
            $('#header').removeClass('on')
        });
    },
    mGnbUI: function() {
        $('#header .btn_open').on('click', function() {
            $('#header .top_header').addClass('on')
            $('#dimm').addClass('on')
        });
        $('#header .list_m_gnb>li:not(:first)>a').on('click', function() {
            $(this).parent().toggleClass('on').siblings().removeClass('on');
            $(this).siblings().slideToggle().parent().siblings().find('.depth2').slideUp();
        });
        $('#header .btn_close').on('click', function() {
            $('#header .top_header').removeClass('on')
            $('#dimm').removeClass('on')
        });
    },
    mainSliderUI: function() {
        var mainSlider = new Swiper('.main_slider', {
            loop: true,
            autoplay: {
                delay: 5000,
              },
        
            pagination: {
            el: '.swiper-pagination',
            clickable: true,
            },
        
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
        });
        var slideImg = $('#container .main_slider .swiper-slide img');
    
        $(window).resize(function() {
            var winW = $(window).outerWidth();
    
            if(winW <= 767) {
                slideImg.each(function(i) {
                    var changeSrc = slideImg.eq(i).attr('src').replace('pc_','m_');
    
                    slideImg.eq(i).attr('src',changeSrc);
                });
            } else {
                slideImg.each(function(i) {
                    var changeSrc = slideImg.eq(i).attr('src').replace('m_','pc_');
    
                    slideImg.eq(i).attr('src',changeSrc);
                });
            }
        }).trigger('resize');
    },
    eventSliderUI: function() {
        var brEvent = new Swiper('.br_event_slider', {
            loop: false,
            slidesPerView: 4,
            slidesPerGroup: 4,
            slidesPerGroupSkip: 4,
            spaceBetween: 10,
            breakpoints: {
                1200: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    slidesPerGroupSkip: 4,
                    spaceBetween: 20
                },
                767: {
                    slidesPerView: 2,
                    slidesPerGroup:2, 
                    slidesPerGroupSkip: 2,
                    spaceBetween: 15
                },
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
        });
    }
};

$(document).ready(function() {
    front.init();
    
});
