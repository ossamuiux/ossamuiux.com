$(document).ready(function () {
    // 데스크탑 - 커뮤니티 - 뎁2
    function headerDepths() {
        var community = $('.util1>.community_wrap');
        var communityDepth = '.community_depth2';

        community.on('mouseenter', function () {
            $(this).find(communityDepth).show();
        });
        community.on('mouseleave', function () {
            $(this).find(communityDepth).hide();
        });
    
        // 데스크탑 - gnb - 뎁2
        var gnbList = $('.gnb_wrap .gnb>li:nth-child(1)');
        var gnbDepth =  $('.gnb>li>.depth2_wrap');

        gnbList.on('mouseenter', function () {
            gnbDepth.show();
        });
        gnbList.on('mouseleave', function () {
            gnbDepth.hide();
        });
    };
    headerDepths();

    function moblieTabMenu() {
        // 모바일 탭매뉴 열기
        var tabMenuWarp = $('#header .menu_wrap');
        var dimm = $('#header .dimm');
        
        $('.main_header_inner .tab_memu_btn').on('click', function () {
            tabMenuWarp.addClass('on');
            dimm.fadeIn(300);
            $('body').addClass('fixed');
        });
        $('.menu_wrap .btn_menu_close, #header .dimm').on('click', function () {
            tabMenuWarp.removeClass('on');
            dimm.fadeOut(300);
            $('body').removeClass('fixed');
        });
        
        // 모바일 탭매뉴 - 뎁2
        $('.tab_menu>li:first-child').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('on');
            $('.tab_menu>li:first-child>.depth2').stop().slideToggle(200);
        });
    };
    moblieTabMenu();

    function mainSliderAndScrollAni() {
        // 메인 슬라이더,스크롤 애니메이션
        var mainArr = [];
        var mainArrH = [];
        var mainArrH2 = [];
        var mainChildNum = $('#main').find('section:gt(0)').length;

        for(i = 1; i <= mainChildNum; i++) {
            var mainChilds = $('#main').children().eq(i);
            var mainChildsH = $('#main').children().eq(i).offset().top - 400;
            var mainChildsH2 = $('#main').children().eq(i).offset().top - 200;
            mainArr.push(mainChilds);
            mainArrH.push(mainChildsH);
            mainArrH.push(mainChildsH2);
        };

        var winW = $(window).outerWidth();
        var _mainSlider = $('.main_slider_warp .main_slider');
        var mainSliderArrow = $('.main_slider .main_slider_arrow');
        var header = $('#header');
    
        //////////// 메인슬라이더 높이, 모바일 화살표 없애기 / 스크롤 애니메이션
        $(window).resize(function() {
            winW = $(this).outerWidth();
            for(i = 0; i < mainChildNum; i++) {
                mainArrH[i] = mainArr[i].offset().top - 400;
                mainArrH2[i] = mainArr[i].offset().top - 200;
            };
            
            if(winW > 846) {
                _mainSlider.on('mouseenter', function () {
                    mainSliderArrow.stop().fadeIn(300);
                }).on('mouseleave', function () {
                    mainSliderArrow.stop().fadeOut(300);
                });
            } else {
                _mainSlider.off('mouseenter mouseleave');
                header.removeClass('scrolled'); 
            }
        }).trigger('resize');
        
        // 헤더 스크롤시 작아짐
        $(window).scroll(function() {
            var _scroll = $(this).scrollTop();
            console.log(winW);
            
            if(winW > 846) {
                if(_scroll >= 140) {
                    header.addClass('scrolled');
                } else {
                    header.removeClass('scrolled');
                };

                // 섹션1 - 애니메이션
                if(mainArrH[0] < _scroll) {
                    mainArr[0].addClass('on');
                };

                // 섹션2 - 애니메이션
                if(mainArrH[1] < _scroll) {
                    mainArr[1].addClass('scroll');
                    if(mainArr[1].hasClass('scroll')) {
                        setTimeout(function() {
                            mainArr[1].find('.benefits_wrap .benefits>li').css('transition','none');
                            mainArr[1].find('.benefits>li:nth-child(2)').css('transition','none');
                        },1000);
                    };
                };

                // 섹션3 - 애니메이션
                if(mainArrH[2] < _scroll) {
                    mainArr[2].addClass('scroll');
                    if(mainArr[2].hasClass('scroll')) {
                        setTimeout(function() {
                            mainArr[2].find('.bng_fix_wrap .sect3_tit').css('transition','none');
                        },1000);
                    };
                };

                if(mainArrH2[2] < _scroll) {
                    mainArr[2].addClass('scroll2');
                    if(mainArr[2].hasClass('scroll2, scroll')) {
                        setTimeout(function() {
                            mainArr[2].find('.brand_info_wrap').css('transition','none');
                        },1000);
                    };
                };

                // 섹션4 - 애니메이션
                if(mainArrH[3] < _scroll) {
                    mainArr[3].addClass('tit_scroll');
                    if(mainArr[3].hasClass('tit_scroll')) {
                        setTimeout(function() {
                            mainArr[3].find('.magazine_wrap .magazine_tit').css('transition','none');
                        },1000);
                    };
                };

                if(mainArrH2[3] < _scroll) {
                    mainArr[3].addClass('scroll');
                    if(mainArr[3].hasClass('tit_scroll, scroll')) {
                        setTimeout(function() {
                            mainArr[3].find('.magazine_wrap .magazine').css('transition','none');
                        },1000);
                    };
                };

                // 섹션5 - 애니메이션
                if(mainArrH[4] < _scroll) {
                    mainArr[4].addClass('scroll');
                    if(mainArr[4].hasClass('scroll')) {
                        setTimeout(function() {
                            mainArr[4].find('.video_wrap .video_tit').css('transition','none');
                        },1000);
                    };
                };
            } else {
                // 섹션1 - 애니메이션
                if(_scroll === 0) {
                    mainArr[0].addClass('on');
                };

                // 섹션2 - 애니메이션
                if(mainArrH[1] < _scroll) {
                    mainArr[1].addClass('m_scroll');
                    if(mainArr[1].hasClass('m_scroll')) {
                        setTimeout(function() {
                            mainArr[1].find('.benefits_wrap .benefits>li').css('transition','none');
                            mainArr[1].find('.benefits>li:nth-child(2)').css('transition','none');
                        },1000);
                    }
                };

                // 섹션3 - 애니메이션
                if(mainArrH[2] < _scroll) {
                    mainArr[2].addClass('scroll');
                    if(mainArr[2].hasClass('scroll')) {
                        setTimeout(function() {
                            mainArr[2].find('.bng_fix_wrap .sect3_tit').css('transition','none');
                        },1000);
                    };
                };
                if(mainArrH2[2] < _scroll) {
                    mainArr[2].addClass('scroll2');
                    if(mainArr[2].hasClass('scroll2')) {
                        setTimeout(function() {
                            mainArr[2].find('.brand_info_wrap').css('transition','none');
                        },1000);
                    };
                };

                // 섹션4 - 애니메이션
                if(mainArrH[3] < _scroll) {
                    mainArr[3].addClass('tit_scroll');
                    if(mainArr[3].hasClass('tit_scroll')) {
                        setTimeout(function() {
                            mainArr[3].find('.magazine_wrap .magazine_tit').css('transition','none');
                        },1000);
                    };
                };
                if(mainArrH2[3] < _scroll) {
                    mainArr[3].addClass('scroll');
                    if(mainArr[3].hasClass('tit_scroll, scroll')) {
                        setTimeout(function() {
                            mainArr[3].find('.magazine_wrap .magazine').css('transition','none');
                        },1000);
                    };
                };

                // 섹션5 - 애니메이션
                if(mainArrH[4] < _scroll) {
                    mainArr[4].addClass('scroll');
                    if(mainArr[4].hasClass('scroll')) {
                        setTimeout(function() {
                            mainArr[4].find(' .video_wrap .video_tit').css('transition','none');
                        },1000);
                    };
                };
            };
        }).trigger('scroll');
    };
    mainSliderAndScrollAni();




    // 메인 슬라이더 - swiper 
    var mySlider = new Swiper ('.main_slider', {
        loop: true,
        speed:1000,
        effect: 'fade',

        autoplay: {
            delay: 3000,
            disableOnInteraction:false,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    function mainSliderPage() {
        // 메인 슬라이더 - swiper 페이지 표시
        var mySliderIdx = $('.main_slider .swiper-slide').length;
        var sliderPage = $('.swiper_page_wrap span');
    
        sliderPage.eq(1).text(mySliderIdx - 2);
    
        mySlider.on('slideChange', function () {
            sliderPage.eq(0).text(mySlider.realIndex + 1);
        });
    };
    mainSliderPage();

    // TOP버튼, DOWN버튼
    $('.updown_btn li:first-child a').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop:0
        },300)
    });

    var winHight = $(document).height();

    $('.updown_btn li:last-child a').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop:winHight
        },500);
    });
});