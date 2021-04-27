$(document).ready(function() {
    if($('#main .program').length > 0) {
        var headerEl = $('#header');
        var posY = $('#main .program').offset().top;

        $(window).scroll(function() {
            posY = $('#main .program').offset().top - 50;
            var _scrollTop = $(this).scrollTop(); 

            if(_scrollTop >= posY) {
                headerEl.addClass('on').fadeIn(1000);
            } else {
                headerEl.removeClass('on');
            };
        });
    };
                  
    $('#header .btn_sidemenu').on('click', function() {
        $('#header .gnb_wrap, body').addClass('on');
    });
    
    $('#header .gnb_wrap .gnb_list>li>a').on('click', function () {
        $(this).siblings().stop().slideToggle(500);
        $(this).toggleClass('active');
    });  
    
    $('#header .btn_close').on('click', function() {
        $('#header .gnb_wrap, body').removeClass('on');
    });
    
    var mySwiper = new Swiper ('.main_slider', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
    });
    
    var mySwiper2 = new Swiper ('.program_slider', {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    
    /***************** 하회탈 정보 ****************************/
    
    $('#main .btn_menu').on('click', function() {
       $('#main .btn_wrap .menu_list').stop().slideToggle()
        $('#main .btn_wrap').toggleClass('on');
    });
    

    $('#footer .btn_familysite').on('click', function() {
        $('#footer .family_list').stop().slideToggle();
        $('#footer .family_site').toggleClass('on');
    });
});

 

