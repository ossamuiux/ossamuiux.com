$(document).ready(function () {
    // header - side menu open/close
    var gnbUI = function() {
        var gnbWrap = $('#header .gnb_wrap');
        var dimm = $('#header .dimm');
        var body = $('body')

        $('#header .btn_menu').on('click', function() {
            gnbWrap.addClass('on');
            dimm.fadeIn();
            body.addClass('fixed');
        });

        $('.gnb_wrap .btn_home, .dimm').on('click', function() {
            gnbWrap.removeClass('on');
            dimm.fadeOut();
            body.removeClass('fixed');
        });
        
        $('.gnb .depth1>li>a').on('click', function(e) {
            e.preventDefault();
            $(this).parent().siblings().find('.depth2').slideUp(300);
            $(this).siblings('.depth2').slideToggle(300);
            $(this).parent().siblings().removeClass('on');
            $(this).parent().toggleClass('on');
        });
    };
    gnbUI();

    // section - main slider
    var mainSlider = new Swiper ('.main_slider', {
        loop: true,
        speed: 500,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });

    // section - hot light hour
    function hotDay() {
        var nowDate = new Date();
        var month = nowDate.getMonth() + 1;
        var date = nowDate.getDate();
        var day = nowDate.getDay();
        
        switch(day) {
            case 0: 
                day = '일';
                break;
            case 1: 
                day = '월';
                break;
            case 2: 
                day = '화';
                break;
            case 3: 
                day = '수';
                break;
            case 4: 
                day = '목';
                break;
            case 5: 
                day = '금';
                break;
            case 6: 
                day = '토';
                break;
        }

        $('.hotnow_time .day').text(month + '/' + date + '(' + day + ')');
    }
    hotDay();

    function hotTime() {
        var nowTime = new Date();
        var hour = nowTime.getHours();
        var min = nowTime.getMinutes();

        var newHour = (hour < 10) ? '0'+hour : hour;
        var newMin = (min < 10) ? '0'+min : min;

        $('.hotnow_time .time').text(newHour + ':' + newMin);
    }
    hotTime();
    setInterval(hotTime);
    
    // hotligt list 갯수
    var listNum = $('.list_slider .swiper-slide').length;
    $('.hotlight_list .list_length').text(listNum);

    // hotlight hour list slider
    var listSlider = new Swiper('.list_slider', {
        // loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });      

    // event slider
    var eventSlider = new Swiper('.event_slider', {
        loop: true,
        slidesPerView: 'auto',
        // slidesPerGroup: 2,
        spaceBetween: 20,
    });

    // section - scroll banner
    if($('#main .scroll_bnr1').length) {
        var scrollBnr1 = $('#main .scroll_bnr1').offset().top - 700;

        $(window).resize(function() {
            scrollBnr1 = $('#main .scroll_bnr1').offset().top - 700;
        });

        $(window).scroll(function () {
            var _scrollTop = $(this).scrollTop();

            if(_scrollTop >= scrollBnr1) {
                $('#main .scroll_bnr1').addClass('on');
            } else {
                $('#main .scroll_bnr1').removeClass('on');
            }
        });
    }

    // sub page - faq
    $('.faq_board .queistion').on('click', function () {
        $(this).parent().siblings().find('.ask').slideUp(300);
        $(this).next().slideToggle();
        $(this).parent().siblings().removeClass('on');
        $(this).parent().toggleClass('on');
    });

    // sub page - title slider 
    var subTitleSlider = new Swiper ('.tit_slider', {
        slidesPerView: 'auto',
        freeMode: true,
    });

    // sub page - title tap scroll on
    // if($('.sub_main .list_monthly').length) {
    //     var posArr = [];

    //     $('.sub_main .list_wrap>div').each(function() {
    //         posArr.push($(this).offset().top);
    //     });        

    //     $(window).resize(function() {
    //         $('.sub_main .list_wrap>div').each(function(i) {
    //             posArr[i] = $(this).offset().top;
    //         }); 
    //     });

    //     $(window).scroll(function () {
    //         var _scrollTop = $(this).scrollTop();

    //         if(_scrollTop >= posArr[0] && _scrollTop < posArr[1]) {
    //             $('.tit_slider .swiper-slide:nth-child(2)').addClass('on').siblings().removeClass('on');
    //         } else if(_scrollTop >= posArr[1] && _scrollTop < posArr[2]) {
    //             $('.tit_slider .swiper-slide:nth-child(3)').addClass('on').siblings().removeClass('on');
    //         } else if(_scrollTop >= posArr[2] && _scrollTop < posArr[3]) {
    //             $('.tit_slider .swiper-slide:nth-child(4)').addClass('on').siblings().removeClass('on');
    //         } else if( _scrollTop >= posArr[3]) {
    //             $('.tit_slider .swiper-slide:nth-child(5)').addClass('on').siblings().removeClass('on');
    //         }
    //     });
    // }

    // sub page - title tap
    var tapTitle = $(".tit_slider .swiper-slide a");

    tapTitle.on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        var offset_top = target.offset().top - 160; 
        
        $(this).parent().addClass('on').siblings().removeClass('on');
        $('html, body').animate({scrollTop: offset_top}, 0); 
    });

    

    // sub page - monthly menu slider 
    var monthlyTitleSlider = new Swiper ('.monthly_slider', {
        loop: true,
        speed: 500,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });

    // 메뉴 좋아요 버튼 클릭
    var like = $('button.like');

    like.on('click', function () {
        $(this).toggleClass('on');
    });
    
    // footer - family site
}); // ready