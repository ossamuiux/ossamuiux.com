(function() {
    // gnb
    $('#header .gnb').on('mouseenter',function() {
        $('#header').addClass('on');
        $('#header .depth2').fadeIn();
    }).on('mouseleave', function() {
        $('#header').removeClass('on');
        $('#header .depth2').hide();
    });


    // 글로벌 서치 
    var searchToggle = true;

    $('.util_wrap .search .btn_search1').on('click', function() {
        if (searchToggle) {
            $('.util_wrap .btn_search1').addClass('on');
            $('.util_wrap .search_wrap').fadeIn().delay(600);
        } else {
            $('.util_wrap .btn_search1').removeClass('on');
            $('.util_wrap .search_wrap').hide();
        }
        searchToggle = !searchToggle;
    });

    // 메인 슬라이더
    var mainSlider = new Swiper('.main_slider', {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable:true,
        },
    });

    // 메인메뉴 슬라이더
    var menuSlider = new Swiper('.menu_slider', {
        loop: true,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // 메뉴, 퀵메뉴 섹션 떠오르기 
    menuUp();

    function menuUp() {
        if($('#container .main_menu').length){
            var _scrollTop = 0;
        
            var posArr = [];
            posArr.push($('#container .main_slider_wrap').offset().top + 400);
            posArr.push($('#container .main_menu').offset().top);
            posArr.push($('#container .main_video').offset().top);
            posArr.push($('#container .main_quick_menu').offset().top);
        
            console.log(posArr[0],posArr[1],posArr[2],posArr[3]);
        
            $(window).scroll(function() {
                _scrollTop = $(this).scrollTop();
                console.log(_scrollTop);
        
                if(_scrollTop >= posArr[0]  && _scrollTop < posArr[1]) {
                    $('#container .main_menu').addClass('on');
                } else if(_scrollTop >= posArr[2]  && _scrollTop < posArr[3]) {
                    $('#container .main_quick_menu').addClass('on');
                }
                
                if(_scrollTop === 0) {
                    $('#container .main_menu').removeClass('on');
                    $('#container .main_quick_menu').removeClass('on');
                }
            }).trigger('scroll');
        }
    }


    // 이벤트 섹션 
    $('#container .main_event .image_wrap').on('mouseenter', function() {
        console.log('선택됨');
        $(this).addClass('on');
    }).on('mouseleave' ,function() {
        $(this).removeClass('on');
    });

    // 퀵메뉴 섹션
    $('#container .main_quick_menu .quick_wrap li').on('mouseenter', function() {
        $(this).find('img').addClass('on');
    }).on('mouseleave', function() {
        $(this).find('img').removeClass('on');
    });

    // 고객 sns 섹션
    $('#container .main_sns .image_wrap').on('mouseenter', function() {
        console.log('선택됨');
        $(this).addClass('on');
    }).on('mouseleave' ,function() {
        $(this).removeClass('on');
    });

    // 푸터 패밀리사이트
    $('#footer .family_wrap .btn_family').on('click', function() {
        console.log('클릭됨');
        $('#footer .family_wrap .list_family_wrap').toggle();
    });


    /////////////      메뉴페이지     ///////////////
    $('.menu_wrap .menu_con_wrap a').on('mouseenter', function() {
        $(this).find('img').addClass('on');
    }).on('mouseleave', function() {
        $(this).find('img').removeClass('on');
    });

    /////////////     공지사항 페이지     //////////
    $('.notice_wrap .btn_cate').on('click', function() {
        $('.notice_wrap .list_cate').stop().slideToggle();
        $(this).toggleClass('on');
    });
})();